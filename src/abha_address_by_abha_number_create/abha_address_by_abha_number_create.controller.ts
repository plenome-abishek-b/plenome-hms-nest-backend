import { Controller,Post, Body} from '@nestjs/common';
import { AbhaAddressByAbhaNumberCreateService } from './abha_address_by_abha_number_create.service';

@Controller('abha_address_by_abha_number_create')
export class AbhaAddressByAbhaNumberCreateController {
  
  constructor(private readonly createPhrAddressService: AbhaAddressByAbhaNumberCreateService) {}

  @Post('/')
  async confirmCredentials(
      @Body('password') password: string,
      @Body('transactionId') transactionId: string,
      @Body('alreadyExistedPHR') alreadyExistedPHR: boolean,
      @Body('phrAddress') phrAddress: string,
  ) {
      
      return this.createPhrAddressService.confirmCredentials(password, transactionId, alreadyExistedPHR, phrAddress);
  }
}
