import { Module } from '@nestjs/common';
import { AbhaAddressByAbhaNumberAuthMethodsService } from './abha_address_by_abha_number_auth_methods.service';
import { AbhaAddressByAbhaNumberAuthMethodsController } from './abha_address_by_abha_number_auth_methods.controller';

@Module({
  controllers: [AbhaAddressByAbhaNumberAuthMethodsController],
  providers: [AbhaAddressByAbhaNumberAuthMethodsService]
})
export class AbhaAddressByAbhaNumberAuthMethodsModule {}
