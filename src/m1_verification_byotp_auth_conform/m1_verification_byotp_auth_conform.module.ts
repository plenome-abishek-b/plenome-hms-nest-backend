import { Module } from '@nestjs/common';
import { M1VerificationByotpAuthConformService } from './m1_verification_byotp_auth_conform.service';
import { M1VerificationByotpAuthConformController } from './m1_verification_byotp_auth_conform.controller';

@Module({
  controllers: [M1VerificationByotpAuthConformController],
  providers: [M1VerificationByotpAuthConformService]
})
export class M1VerificationByotpAuthConformModule {}
