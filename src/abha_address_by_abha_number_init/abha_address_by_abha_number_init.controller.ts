import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbhaAddressByAbhaNumberInitService } from './abha_address_by_abha_number_init.service';

@Controller('abha_address_by_abha_number_init')
export class AbhaAddressByAbhaNumberInitController {
  
  constructor(private readonly phrAuthmethodservices: AbhaAddressByAbhaNumberInitService) {}

  @Post('/')
  async PhrAuthMethodsService(@Body('authMethod') authMethod: string,@Body('healhtIdNumber') healhtIdNumber: string): Promise<any> {
      console.log(healhtIdNumber, "this is the health id number", authMethod, ":this is your authmethod")
      return this.phrAuthmethodservices.PhrtransactionMethods(authMethod,healhtIdNumber);
  }
}
