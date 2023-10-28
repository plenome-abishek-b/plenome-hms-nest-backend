import { Controller, Post, Body } from '@nestjs/common';
import { AbhaAddressByAbhaNumberConformCredentialService } from './abha_address_by_abha_number_conform_credential.service';

@Controller('abha_address_by_abha_number_conform_credential')
export class AbhaAddressByAbhaNumberConformCredentialController {
  
  constructor(private readonly confirmCredentialService: AbhaAddressByAbhaNumberConformCredentialService) {}

  @Post('/')
  async confirmCredentials(
      @Body('value') value: string,
      @Body('transactionId') transactionId: string,
  ) {
      return this.confirmCredentialService.confirmCredentials(value, transactionId);
  }
}
