import { Module } from '@nestjs/common';
import { AbhaAddressExixtsCheckingService } from './abha_address_exixts_checking.service';
import { AbhaAddressExixtsCheckingController } from './abha_address_exixts_checking.controller';

@Module({
  controllers: [AbhaAddressExixtsCheckingController],
  providers: [AbhaAddressExixtsCheckingService]
})
export class AbhaAddressExixtsCheckingModule {}
