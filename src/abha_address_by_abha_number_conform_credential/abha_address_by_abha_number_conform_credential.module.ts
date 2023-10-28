import { Module } from '@nestjs/common';
import { AbhaAddressByAbhaNumberConformCredentialService } from './abha_address_by_abha_number_conform_credential.service';
import { AbhaAddressByAbhaNumberConformCredentialController } from './abha_address_by_abha_number_conform_credential.controller';

@Module({
  controllers: [AbhaAddressByAbhaNumberConformCredentialController],
  providers: [AbhaAddressByAbhaNumberConformCredentialService]
})
export class AbhaAddressByAbhaNumberConformCredentialModule {}
