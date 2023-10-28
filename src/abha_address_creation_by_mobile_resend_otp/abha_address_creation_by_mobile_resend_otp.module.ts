import { Module } from '@nestjs/common';
import { AbhaAddressCreationByMobileResendOtpService } from './abha_address_creation_by_mobile_resend_otp.service';
import { AbhaAddressCreationByMobileResendOtpController } from './abha_address_creation_by_mobile_resend_otp.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ ConfigModule],
  controllers: [AbhaAddressCreationByMobileResendOtpController],
  providers: [AbhaAddressCreationByMobileResendOtpService]
})
export class AbhaAddressCreationByMobileResendOtpModule {}
