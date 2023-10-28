import { Module } from '@nestjs/common';
import { AbhaAddressByAbhaNumberCreateService } from './abha_address_by_abha_number_create.service';
import { AbhaAddressByAbhaNumberCreateController } from './abha_address_by_abha_number_create.controller';

@Module({
  controllers: [AbhaAddressByAbhaNumberCreateController],
  providers: [AbhaAddressByAbhaNumberCreateService]
})
export class AbhaAddressByAbhaNumberCreateModule {}
