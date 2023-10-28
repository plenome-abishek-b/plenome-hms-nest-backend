import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbhaAddressCreationByMobileService } from './abha_address_creation_by_mobile.service';

@Controller('abha_address_creation_by_mobile')
export class AbhaAddressCreationByMobileController {

  constructor(private readonly createAbhaMobileService: AbhaAddressCreationByMobileService) {}

  @Post('/')
  async createAbhaMobile(@Body('value') value: string) {
    console.log(value)
    return this.createAbhaMobileService.createAbhaMobileService(value);
  }
}
