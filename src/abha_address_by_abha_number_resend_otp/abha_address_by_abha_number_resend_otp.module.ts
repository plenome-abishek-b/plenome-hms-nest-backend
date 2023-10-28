import { Module } from '@nestjs/common';
import { AbhaAddressByAbhaNumberResendOtpService } from './abha_address_by_abha_number_resend_otp.service';
import { AbhaAddressByAbhaNumberResendOtpController } from './abha_address_by_abha_number_resend_otp.controller';

@Module({
  controllers: [AbhaAddressByAbhaNumberResendOtpController],
  providers: [AbhaAddressByAbhaNumberResendOtpService]
})
export class AbhaAddressByAbhaNumberResendOtpModule {}
