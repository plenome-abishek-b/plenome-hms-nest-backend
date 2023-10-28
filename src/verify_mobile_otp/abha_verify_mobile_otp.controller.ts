import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { AbhaVerifyMobileOtpService } from './abha_verify_mobile_otp.service';

@Controller('abha_verify_mobile_otp')

export class AbhaVerifyMobileOtpController {



  constructor(private readonly m1VerifyMobileOtpService: AbhaVerifyMobileOtpService) { }



  @Post('/')

  async VerifyMobileOtp(@Body('otp') otp: string, @Body('txnId') txnId: string) {

    return await this.m1VerifyMobileOtpService.VerifyMobileOtp(otp, txnId);

  }

}