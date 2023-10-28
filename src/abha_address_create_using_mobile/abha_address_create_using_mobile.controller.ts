import { Controller,Post, Body} from '@nestjs/common';
import { AbhaAddressCreateUsingMobileService } from './abha_address_create_using_mobile.service';

@Controller('abha_address_create_using_mobile')
export class AbhaAddressCreateUsingMobileController {
  constructor(private readonly createPhrAddressService: AbhaAddressCreateUsingMobileService) {}

  @Post('/')
  async confirmCredentials(
      @Body('password') password: string,
      @Body('transactionId') transactionId: string,
      @Body('phrAddress') phrAddress: string,
  ) {
      return this.createPhrAddressService.confirmCredentials(password, transactionId, phrAddress);
  }

}
