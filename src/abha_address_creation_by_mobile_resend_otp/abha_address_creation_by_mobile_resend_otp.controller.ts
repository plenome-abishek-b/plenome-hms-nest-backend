import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbhaAddressCreationByMobileResendOtpService } from './abha_address_creation_by_mobile_resend_otp.service';

@Controller('abha_address_creation_by_mobile_resend_otp')
export class AbhaAddressCreationByMobileResendOtpController {
  
    constructor(private readonly resendOtpService: AbhaAddressCreationByMobileResendOtpService) {}

    @Post('/')
    async createAbhaMobileTxnService(@Body('transactionId') transactionId: string) {
      return this.resendOtpService.createAbhaMobileTxnService(transactionId);
    }
}
