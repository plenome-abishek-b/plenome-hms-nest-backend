import { Controller, Post, Body} from '@nestjs/common';
import { AbhaCheckAndGenerateMobileOtpService } from './abha_check_and_generate_mobile_otp.service';

@Controller('abha_check_and_generate_mobile_otp')
export class AbhaCheckAndGenerateMobileOtpController {
  constructor(private readonly m1Service: AbhaCheckAndGenerateMobileOtpService) {}

  @Post('/')
  async checkAndGenerateMobileOTP(
    @Body('mobile') mobile: number,
    @Body('txnId') txnId: string,
    ) {
    console.log(mobile,txnId)
    return await this.m1Service.checkAndGenerateMobileOTP(mobile, txnId);
  }
}
