import { Module } from '@nestjs/common';
import { AbhaCheckAndGenerateMobileOtpService } from './abha_check_and_generate_mobile_otp.service';
import { AbhaCheckAndGenerateMobileOtpController } from './abha_check_and_generate_mobile_otp.controller';

@Module({
  controllers: [AbhaCheckAndGenerateMobileOtpController],
  providers: [AbhaCheckAndGenerateMobileOtpService]
})
export class AbhaCheckAndGenerateMobileOtpModule {}
