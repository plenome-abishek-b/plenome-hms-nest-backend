import { Controller,  Post, Body } from '@nestjs/common';
import { AbhaAddressByAbhaNumberResendOtpService } from './abha_address_by_abha_number_resend_otp.service';

@Controller('abha_address_by_abha_number_resend_otp')
export class AbhaAddressByAbhaNumberResendOtpController {
  
  constructor(private readonly phrResendOtpmethodservices: AbhaAddressByAbhaNumberResendOtpService) {}

  @Post('/')
  async PhrAuthMethodsService(@Body('transactionId') transactionId: string): Promise<any> {
      console.log(transactionId, "this is the health id number 817957")
      return this.phrResendOtpmethodservices.PhrResendOtp(transactionId);
  }
}
