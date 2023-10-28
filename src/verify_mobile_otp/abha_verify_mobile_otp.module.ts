import { Module } from '@nestjs/common';
import { AbhaVerifyMobileOtpService } from './abha_verify_mobile_otp.service';
import { AbhaVerifyMobileOtpController } from './abha_verify_mobile_otp.controller';

@Module({
  controllers: [AbhaVerifyMobileOtpController],
  providers: [AbhaVerifyMobileOtpService]
})
export class AbhaVerifyMobileOtpModule {}
