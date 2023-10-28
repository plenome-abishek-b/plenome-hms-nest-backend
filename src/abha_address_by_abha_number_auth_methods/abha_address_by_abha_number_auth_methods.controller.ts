import { Controller,  Post, Body } from '@nestjs/common';
import { AbhaAddressByAbhaNumberAuthMethodsService } from './abha_address_by_abha_number_auth_methods.service';


@Controller('abha_address_by_abha_number_auth_methods')
export class AbhaAddressByAbhaNumberAuthMethodsController {
  
  constructor(private readonly phrAuthmethodservices: AbhaAddressByAbhaNumberAuthMethodsService) {}

  @Post('/')
  async PhrAuthMethodsService(@Body('healthIdNumber') healhtIdNumber: string): Promise<any> {
      console.log(healhtIdNumber, "this is the health id number")
      return this.phrAuthmethodservices.PhrAuthMethods(healhtIdNumber);
  }
}
