import { Module } from '@nestjs/common';
import { AbhaAddressCreationByMobileService } from './abha_address_creation_by_mobile.service';
import { AbhaAddressCreationByMobileController } from './abha_address_creation_by_mobile.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:  [ConfigModule],
  controllers: [AbhaAddressCreationByMobileController],
  providers: [AbhaAddressCreationByMobileService]
})
export class AbhaAddressCreationByMobileModule {}
