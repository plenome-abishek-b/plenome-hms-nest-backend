import { Module } from '@nestjs/common';
import { AbhaGenerateOtpService } from './abha_generate_otp.service';
import { AbhaGenerateOtpController } from './abha_generate_otp.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[    ConfigModule.forRoot()],
  controllers: [AbhaGenerateOtpController],
  providers: [AbhaGenerateOtpService]
})
export class AbhaGenerateOtpModule {}
