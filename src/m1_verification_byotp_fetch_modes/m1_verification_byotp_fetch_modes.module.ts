import { Module } from '@nestjs/common';
import { M1VerificationByotpFetchModesService } from './m1_verification_byotp_fetch_modes.service';
import { M1VerificationByotpFetchModesController } from './m1_verification_byotp_fetch_modes.controller';

@Module({
  controllers: [M1VerificationByotpFetchModesController],
  providers: [M1VerificationByotpFetchModesService]
})
export class M1VerificationByotpFetchModesModule {}
