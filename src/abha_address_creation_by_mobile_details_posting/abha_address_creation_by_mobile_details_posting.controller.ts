import { Controller, Post, Body} from '@nestjs/common';
import { AbhaAddressCreationByMobileDetailsPostingService } from './abha_address_creation_by_mobile_details_posting.service';

@Controller('abha_address_creation_by_mobile_details_posting')
export class AbhaAddressCreationByMobileDetailsPostingController {

  constructor(private readonly mobileCreateAbhaDetailsService: AbhaAddressCreationByMobileDetailsPostingService) {
 
    
  }

  @Post('/')  
  async mobileCreateAbhaDetails(
      @Body('address') address: string,
      @Body('countryCode') countryCode: string,
      @Body('dayOfBirth') dayOfBirth: string,
      @Body('districtCode') districtCode: string,
      @Body('email') email: string,
      @Body('firstName') firstName: string,
      @Body('gender')  gender: string,
      @Body('lastName')  lastName: string,
      @Body('middleName')  middleName: string,
      @Body('mobile')  mobile: string,
      @Body('monthOfBirth')  monthOfBirth: string,
      @Body('pinCode')  pinCode: string,
      @Body('stateCode')  stateCode: string,
      @Body('transactionId')  transactionId: string,
      @Body('yearOfBirth')  yearOfBirth: string,
  ) {
      console.log(address, countryCode)
      return await this.mobileCreateAbhaDetailsService.mobileCreateAbhaDetailsService(address, countryCode, dayOfBirth, districtCode, email, firstName, gender, lastName, middleName, mobile, monthOfBirth, pinCode, stateCode, transactionId, yearOfBirth);
  }
}
