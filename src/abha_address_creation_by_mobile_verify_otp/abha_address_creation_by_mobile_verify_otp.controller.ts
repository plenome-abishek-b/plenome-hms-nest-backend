import { Controller, Post, Body } from '@nestjs/common';
import { AbhaAddressCreationByMobileVerifyOtpService } from './abha_address_creation_by_mobile_verify_otp.service';

@Controller('abha_address_creation_by_mobile_verify_otp')
export class AbhaAddressCreationByMobileVerifyOtpController {

  constructor(private readonly mobileOtpService: AbhaAddressCreationByMobileVerifyOtpService) {}

  @Post('/')
  async newVerifyOtp(
    @Body('otp') otp: string,
    @Body('transactionId') transactionId: string
  ) {
    return this.mobileOtpService.newVerifyOtp(otp, transactionId);
  }
}
