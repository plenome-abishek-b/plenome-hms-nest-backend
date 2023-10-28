import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { M1VerificationByotpMobileOtpInitService } from './m1_verification_byotp_mobile_otp_init.service';

@Controller('m1_verification_byotp_mobile_otp_init')
export class M1VerificationByotpMobileOtpInitController {

  constructor(private readonly loginMobileAuthInitService: M1VerificationByotpMobileOtpInitService) {}

  @Post('/')
  async FetchMode(
    @Body('authMode') authMode: string,
    @Body('abhaAddress') abhaAddress: string,
    @Body('purpose') purpose: string,
    @Body('type') type: string,
    @Body('typeId') typeId: string
  ) {
      return this.loginMobileAuthInitService.InitService(authMode,abhaAddress, purpose, type,typeId);
  }
}
