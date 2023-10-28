import { Module } from '@nestjs/common';
import { AbhaAddressCreationByMobileAbhaAdressSuggestionService } from './abha_address_creation_by_mobile_abha_adress_suggestion.service';
import { AbhaAddressCreationByMobileAbhaAdressSuggestionController } from './abha_address_creation_by_mobile_abha_adress_suggestion.controller';

@Module({
  controllers: [AbhaAddressCreationByMobileAbhaAdressSuggestionController],
  providers: [AbhaAddressCreationByMobileAbhaAdressSuggestionService]
})
export class AbhaAddressCreationByMobileAbhaAdressSuggestionModule {}
