import { TokenEntity } from './../token/token.entity';
import { JwtService } from '@nestjs/jwt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { TokenService } from 'src/token/token.service';
import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { RefreshCredentialsDto } from './dto/refresh-credentials.dto';
import { IJwtPayload } from './jwt/jwt-payload.interface';
import { IUser } from 'src/user/user.interface';
import { RegisterCredentialsDto } from './dto/register-credentials.dto';

// import type { TokenDto } from './dto/tokens.dto';
// import { UserService } from '../user/user.service';
// import type { IUser } from '../user/user.interface';
// import { TokenService } from '../token/token.service';
// import type { JwtPayload } from './jwt/jwt-payload.interface';
// import type { AuthCredentialsDto } from './dto/auth-credentials.dto';
// import type { RefreshCredentialsDto } from './dto/refresh-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    //     private readonly jwtService: JwtService,
    //     private readonly userService: UserService,
    private readonly tokenService: TokenService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(
    registerCredentials: RegisterCredentialsDto,
  ): Promise<UserEntity> {
    const { email } = registerCredentials;

    const user = await this.userService.findByEmail(email);

    if (user?.id) {
      return AuthService.throwForbiddenException();
    }

    const createUser = await this.userService.create(registerCredentials);

    if (!createUser) {
      return AuthService.throwForbiddenException();
    }

    return createUser;
  }

  async login(authCredentials: AuthCredentialsDto): Promise<TokenEntity> {
    const { email, password } = authCredentials;

    if (!email || !password) {
      return AuthService.throwUnauthorizedException();
    }

    const user = await this.userService.findByEmail(email);

    if (!user?.id) {
      return AuthService.throwNotFoundException();
    }

    const isMatchingPassword = await this.userService.matchingHashPassword(
      user.password,
      password,
    );

    if (!isMatchingPassword) {
      return AuthService.throwUnauthorizedException();
    }

    const tokens = await this.createHashTokens({ id: '3', email });

    const token = await this.tokenService.create(tokens);

    return token;
  }

  async refresh(
    refreshCredentials: RefreshCredentialsDto,
  ): Promise<TokenEntity | never> {
    const { refresh_token } = refreshCredentials;

    const userJwt = this.jwtService.verify<IJwtPayload>(refresh_token);

    if (!userJwt?.email || !userJwt?.id) {
      return AuthService.throwUnauthorizedException();
    }

    const { id, email } = userJwt;

    const hashTokens = await this.createHashTokens({ id, email });

    const refreshTokens = await this.tokenService.update(id, hashTokens);

    return AuthService.throwUnauthorizedException();
  }

  //   async refresh(
  //     refreshCredentials: RefreshCredentialsDto,
  //   ): Promise<TokenDto | never> {
  //     const { refreshToken, fingerprint } = refreshCredentials;
  //     let username: string;
  //     try {
  //       username = this.jwtService.verify<JwtPayload>(refreshToken).username;
  //     } catch {
  //       throw new UnauthorizedException(
  //         'Please, login. Refresh token has expired.',
  //       );
  //     }
  //     const token = await this.tokenService.check(refreshCredentials);
  //     if (!token) {
  //       throw new UnauthorizedException('Please, login. Token not found');
  //     }
  //     const tokens: TokenDto = this.createTokens({ username });
  //     await this.tokenService.update(token._id, tokens, fingerprint);
  //     return tokens;
  //   }

  async validateUser(payload: IJwtPayload): Promise<IUser | never> {
    const { email } = payload;

    const user = await this.userService.findByEmail(email);

    if (!user?.id) {
      return AuthService.throwUnauthorizedException();
    }

    return user;
  }

  //   async validateUser(payload: JwtPayload): Promise<IUser> {
  //     const { username } = payload;
  //     const user = await this.userService.findOne(username);
  //     if (!user) throw new UnauthorizedException('User is not authorized!');
  //     return user;
  //   }
  //   private createTokens(jwtPayload: JwtPayload): TokenDto {
  //     return {
  //       accessToken: this.jwtService.sign(jwtPayload, { expiresIn: '6h' }),
  //       refreshToken: this.jwtService.sign(jwtPayload, { expiresIn: '60d' }),
  //     };
  //   }

  async createHashTokens(user: Pick<IUser, 'id' | 'email'>) {
    const auth_token = await this.jwtService.sign(user, {
      expiresIn: process.env.JWT_MAX_AGE,
    });

    const refresh_token = await this.jwtService.sign(user, {
      expiresIn: process.env.JWT_REFRESH_MAX_AGE,
    });

    return {
      auth_token,
      refresh_token,
    };
  }

  private static throwUnauthorizedException(): never {
    throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
  }

  private static throwForbiddenException(): never {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  private static throwNotFoundException(): never {
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
}
