import { Controller, Post, Body} from '@nestjs/common';
import { AbhaAddressLinkAndUnlinkService } from './abha_address_link_and_unlink.service';

@Controller('abha_address_link_and_unlink')
export class AbhaAddressLinkAndUnlinkController {
  
  constructor(private readonly linkHidService: AbhaAddressLinkAndUnlinkService) {}

  @Post('/')
  async phrLink(@Body() body: { action: string, transactionId: string, token: string }) {
    return this.linkHidService.PhrlinkMethods(body.action, body.transactionId, body.token);
  }
}
