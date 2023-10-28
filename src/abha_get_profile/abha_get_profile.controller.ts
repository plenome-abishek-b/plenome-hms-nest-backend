import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbhaGetProfileService } from './abha_get_profile.service';

@Controller('abha_get_profile')
export class AbhaGetProfileController {
  
  constructor(private readonly m1ProfileUpdateService: AbhaGetProfileService) {}

  @Post('/')
  async getProfile(@Body('refreshToken') refreshToken: string) {
    return await this.m1ProfileUpdateService.getProfile(refreshToken);
  }
}
