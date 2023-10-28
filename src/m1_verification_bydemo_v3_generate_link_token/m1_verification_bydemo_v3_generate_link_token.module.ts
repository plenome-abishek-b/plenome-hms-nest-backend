import { Module } from '@nestjs/common';
import { M1VerificationBydemoV3GenerateLinkTokenService } from './m1_verification_bydemo_v3_generate_link_token.service';
import { M1VerificationBydemoV3GenerateLinkTokenController } from './m1_verification_bydemo_v3_generate_link_token.controller';

@Module({
  controllers: [M1VerificationBydemoV3GenerateLinkTokenController],
  providers: [M1VerificationBydemoV3GenerateLinkTokenService]
})
export class M1VerificationBydemoV3GenerateLinkTokenModule {}
