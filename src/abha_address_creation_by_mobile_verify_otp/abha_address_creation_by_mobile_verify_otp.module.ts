import { Module } from '@nestjs/common';
import { AbhaAddressCreationByMobileVerifyOtpService } from './abha_address_creation_by_mobile_verify_otp.service';
import { AbhaAddressCreationByMobileVerifyOtpController } from './abha_address_creation_by_mobile_verify_otp.controller';

@Module({
  controllers: [AbhaAddressCreationByMobileVerifyOtpController],
  providers: [AbhaAddressCreationByMobileVerifyOtpService]
})
export class AbhaAddressCreationByMobileVerifyOtpModule {}
