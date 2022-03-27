import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository } from 'typeorm';

import { TokenEntity } from './token.entity';

import { IToken } from './token.interface';

@EntityRepository(TokenEntity)
@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(TokenEntity)
    private tokenRepository: Repository<TokenEntity>,
  ) {}

  async create(
    hashTokens: Pick<IToken, 'auth_token' | 'refresh_token'>,
  ): Promise<TokenEntity> {
    const tokenSave = await this.tokenRepository.save({
      ...hashTokens,
    });

    return tokenSave;
  }

  async update(
    id: IToken['id'],
    hashTokens: Pick<IToken, 'auth_token' | 'refresh_token'>,
  ): Promise<TokenEntity> {
    const tokenFind = await this.tokenRepository.findOne({ id });

    if (tokenFind?.id) {
      this.removeToken(tokenFind);
    }

    const tokenSave = await this.tokenRepository.save({
      ...hashTokens,
    });

    return tokenSave;
  }

  private removeToken(token: TokenEntity): void {
    this.tokenRepository.remove(token);
  }
}
