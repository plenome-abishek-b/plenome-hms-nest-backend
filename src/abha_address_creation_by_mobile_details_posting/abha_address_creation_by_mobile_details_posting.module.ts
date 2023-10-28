import { Module } from '@nestjs/common';
import { AbhaAddressCreationByMobileDetailsPostingService } from './abha_address_creation_by_mobile_details_posting.service';
import { AbhaAddressCreationByMobileDetailsPostingController } from './abha_address_creation_by_mobile_details_posting.controller';

@Module({
  controllers: [AbhaAddressCreationByMobileDetailsPostingController],
  providers: [AbhaAddressCreationByMobileDetailsPostingService], 
  exports: [AbhaAddressCreationByMobileDetailsPostingService]

})
export class AbhaAddressCreationByMobileDetailsPostingModule {
  constructor(){
   
    
  }
}
