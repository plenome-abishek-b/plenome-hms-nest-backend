import { Module } from '@nestjs/common';
import { M1VerificationScanHealthFacilityQrService } from './m1_verification_scan_health_facility_qr.service';
import { M1VerificationScanHealthFacilityQrController } from './m1_verification_scan_health_facility_qr.controller';

@Module({
  controllers: [M1VerificationScanHealthFacilityQrController],
  providers: [M1VerificationScanHealthFacilityQrService],
})
export class M1VerificationScanHealthFacilityQrModule {}
