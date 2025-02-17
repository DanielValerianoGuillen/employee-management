import {
  Controller,
  Get,
  UseGuards,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserRequest } from '../auth/interfaces/user-request.interface'; 

@Controller('profile')
@UseGuards(JwtAuthGuard) 
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async getProfile(@Req() req: UserRequest) {
    if (!req.user) {
      throw new UnauthorizedException('Usuario no autenticado');
    }
    const userId = req.user.sub; 
    return this.profileService.getProfile(userId);
  }


}
