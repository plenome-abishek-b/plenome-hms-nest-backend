import { Controller, Post, Body} from '@nestjs/common';
import { AbhaAddressLinkOtpVerifyService } from './abha_address_link_otp_verify.service';

@Controller('abha_address_link_otp_verify')
export class AbhaAddressLinkOtpVerifyController {
  
  constructor(private readonly service: AbhaAddressLinkOtpVerifyService) {}

  @Post('/')
  async verifyOtp(
      @Body() body: { otp: string, transactionId: string}
  ): Promise<any> {
      return this.service.link_unlink_VerifyOtp(body.otp, body.transactionId);
  }
}
