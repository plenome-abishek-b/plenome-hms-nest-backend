import { Module } from '@nestjs/common';
import { AbhaAddressCreateUsingMobileService } from './abha_address_create_using_mobile.service';
import { AbhaAddressCreateUsingMobileController } from './abha_address_create_using_mobile.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [AbhaAddressCreateUsingMobileController],
  providers: [AbhaAddressCreateUsingMobileService]
})
export class AbhaAddressCreateUsingMobileModule {}
