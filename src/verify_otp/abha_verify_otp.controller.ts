import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbhaVerifyOtpService } from './abha_verify_otp.service';

@Controller('abha_verify_otp')
export class AbhaVerifyOtpController {
  constructor(private readonly m1VerifyOtpService: AbhaVerifyOtpService) {}

  @Post('/')
  async newVerifyOtp(@Body('otp') otp: string, @Body('txnId') txnId: string) {
    return await this.m1VerifyOtpService.newVerifyOtp(otp, txnId);
  }
}
