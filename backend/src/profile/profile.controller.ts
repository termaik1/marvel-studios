import { Controller, Get, UseGuards } from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { User } from 'src/internal/decorators/user.decorator';
import { UserTokenDto } from 'src/user/dto/user-token.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getProfile(@User() user: UserTokenDto) {
    return await this.profileService.getProfileUserById(user.id);
  }
}
