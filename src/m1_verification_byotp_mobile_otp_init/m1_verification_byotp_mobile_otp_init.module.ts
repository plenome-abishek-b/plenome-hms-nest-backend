import { Module } from '@nestjs/common';
import { M1VerificationByotpMobileOtpInitService } from './m1_verification_byotp_mobile_otp_init.service';
import { M1VerificationByotpMobileOtpInitController } from './m1_verification_byotp_mobile_otp_init.controller';

@Module({
  controllers: [M1VerificationByotpMobileOtpInitController],
  providers: [M1VerificationByotpMobileOtpInitService]
})
export class M1VerificationByotpMobileOtpInitModule {}
