import { Module } from '@nestjs/common';
import { AbhaAddressLinkGenerateOtpService } from './abha_address_link_generate_otp.service';
import { AbhaAddressLinkGenerateOtpController } from './abha_address_link_generate_otp.controller';

@Module({
  controllers: [AbhaAddressLinkGenerateOtpController],
  providers: [AbhaAddressLinkGenerateOtpService]
})
export class AbhaAddressLinkGenerateOtpModule {
  constructor(){console.log("enters");
  }
  
}
