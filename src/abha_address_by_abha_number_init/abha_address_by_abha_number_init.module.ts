import { Module } from '@nestjs/common';
import { AbhaAddressByAbhaNumberInitService } from './abha_address_by_abha_number_init.service';
import { AbhaAddressByAbhaNumberInitController } from './abha_address_by_abha_number_init.controller';

@Module({
  controllers: [AbhaAddressByAbhaNumberInitController],
  providers: [AbhaAddressByAbhaNumberInitService]
})
export class AbhaAddressByAbhaNumberInitModule {}
