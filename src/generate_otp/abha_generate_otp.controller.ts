import { Controller,  Post, Body } from '@nestjs/common';
import { AbhaGenerateOtpService } from './abha_generate_otp.service';

@Controller('abha_generate_otp')
export class AbhaGenerateOtpController {
  constructor(private readonly m1Service: AbhaGenerateOtpService) {}

  @Post('/')
  async generateOtp(@Body('aadhaar') adharNumber: string) {
    return await this.m1Service.generateOtp(adharNumber);
  }
}
