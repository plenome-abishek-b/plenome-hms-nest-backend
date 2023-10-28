import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { M1VerificationByotpAuthConformService } from './m1_verification_byotp_auth_conform.service';

@Controller('m1_verification_byotp_auth_conform')
export class M1VerificationByotpAuthConformController {


  constructor(private readonly loginMobileAuthInitService: M1VerificationByotpAuthConformService) {}

  @Post('/')
  async FetchMode(
   
    @Body('txnId') txnId: string,
    @Body('authcode') authcode: string,
   
  ) {
      return this.loginMobileAuthInitService.AuthConformService(txnId,authcode);
  }
}
//29ba8dd0-bad8-45b2-9cf9-f93946412f5b req
//29ba8dd0-bad8-45b2-9cf9-f93946412f5b txn