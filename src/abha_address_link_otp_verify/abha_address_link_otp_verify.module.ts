import { Module } from '@nestjs/common';
import { AbhaAddressLinkOtpVerifyService } from './abha_address_link_otp_verify.service';
import { AbhaAddressLinkOtpVerifyController } from './abha_address_link_otp_verify.controller';

@Module({
  controllers: [AbhaAddressLinkOtpVerifyController],
  providers: [AbhaAddressLinkOtpVerifyService]
})
export class AbhaAddressLinkOtpVerifyModule {}
