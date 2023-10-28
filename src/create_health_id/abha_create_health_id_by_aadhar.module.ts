import { Module } from '@nestjs/common';
import { AbhaCreateHealthIdByAadharService } from './abha_create_health_id_by_aadhar.service';
import { AbhaCreateHealthIdByAadharController } from './abha_create_health_id_by_aadhar.controller';

@Module({
  controllers: [AbhaCreateHealthIdByAadharController],
  providers: [AbhaCreateHealthIdByAadharService]
})
export class AbhaCreateHealthIdByAadharModule {}
