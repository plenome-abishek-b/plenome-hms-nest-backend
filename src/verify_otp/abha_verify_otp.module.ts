import { Module } from '@nestjs/common';
import { AbhaVerifyOtpService } from './abha_verify_otp.service';
import { AbhaVerifyOtpController } from './abha_verify_otp.controller';

@Module({
  controllers: [AbhaVerifyOtpController],
  providers: [AbhaVerifyOtpService]
})
export class AbhaVerifyOtpModule {}
