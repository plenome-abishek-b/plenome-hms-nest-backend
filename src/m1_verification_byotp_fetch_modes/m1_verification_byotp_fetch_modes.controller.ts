import { Controller,Post, Body } from '@nestjs/common';
import { M1VerificationByotpFetchModesService } from './m1_verification_byotp_fetch_modes.service';

@Controller('m1_verification_byotp_fetch_modes')
export class M1VerificationByotpFetchModesController {
  
  constructor(private readonly loginMobileAuthInitService: M1VerificationByotpFetchModesService) {}

  @Post('/')
  async FetchMode(
   
    @Body('abhaAddress') abhaAddress: string,
    @Body('purpose') purpose: string,
    @Body('type') type: string,
    @Body('typeId') typeId: string
  ) {
      return this.loginMobileAuthInitService.FetchModeService( abhaAddress, purpose, type,typeId);
  }
}
