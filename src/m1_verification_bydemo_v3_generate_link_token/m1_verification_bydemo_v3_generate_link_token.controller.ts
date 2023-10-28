import { Controller, Post, Body} from '@nestjs/common';
import { M1VerificationBydemoV3GenerateLinkTokenService } from './m1_verification_bydemo_v3_generate_link_token.service';

@Controller('m1_verification_bydemo_v3_generate_link_token')
export class M1VerificationBydemoV3GenerateLinkTokenController {
  
    constructor(private readonly loginMobileAuthInitService: M1VerificationBydemoV3GenerateLinkTokenService) {}

    @Post('/')
    async FetchMode(
     
      @Body('abhaNumber') abhaNumber: number,
      @Body('abhaAddress') abhaAddress: string,
      @Body('name') name: string,
      @Body('gender') gender: string,
      @Body('yearOfBirth') yearOfBirth: string,

     
    ) {
        return this.loginMobileAuthInitService.tokenService(abhaNumber,abhaAddress,name,gender,yearOfBirth);
    }
}
