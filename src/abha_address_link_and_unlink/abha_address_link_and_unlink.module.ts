import { Module } from '@nestjs/common';
import { AbhaAddressLinkAndUnlinkService } from './abha_address_link_and_unlink.service';
import { AbhaAddressLinkAndUnlinkController } from './abha_address_link_and_unlink.controller';

@Module({
  controllers: [AbhaAddressLinkAndUnlinkController],
  providers: [AbhaAddressLinkAndUnlinkService]
})
export class AbhaAddressLinkAndUnlinkModule {}
