import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AbhaAddressExixtsCheckingService } from './abha_address_exixts_checking.service';

@Controller('abha_address_exixts_checking')
export class AbhaAddressExixtsCheckingController {
  
  constructor(private readonly phrAddressExistsService: AbhaAddressExixtsCheckingService) {}

  @Get('/')
  async PhrAuthMethods(@Query('phrAddressExists') phrAddressExists: string) {
      return this.phrAddressExistsService.PhrAbhaExistsMethods(phrAddressExists);
  }
}
