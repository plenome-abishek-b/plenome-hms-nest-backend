import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbhaAddressCreationByMobileAbhaAdressSuggestionService } from './abha_address_creation_by_mobile_abha_adress_suggestion.service';

@Controller('abha_address_creation_by_mobile_abha_adress_suggestion')
export class AbhaAddressCreationByMobileAbhaAdressSuggestionController {
  
  constructor(private readonly phrSuggestionService: AbhaAddressCreationByMobileAbhaAdressSuggestionService) {}

  @Post('/')
  async verifyMobileOtp(@Body('transactionId') transactionId: string) {
    
      return this.phrSuggestionService.VerifyMobileOtp(transactionId);
  }
}
