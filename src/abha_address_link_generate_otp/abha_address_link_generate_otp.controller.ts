import { Controller,  Post, Body} from '@nestjs/common';
import { AbhaAddressLinkGenerateOtpService } from './abha_address_link_generate_otp.service';

@Controller('abha_address_link_generate_otp')
export class AbhaAddressLinkGenerateOtpController {
  
  constructor(private readonly service: AbhaAddressLinkGenerateOtpService) {console.log("aaaadddd");
  }

  @Post('/')
  async Unlink_LinktransactionMethods(
      @Body('authMethod') authMethod: string,
      @Body('healhtIdNumber') healhtIdNumber: string
  ): Promise<any> {
      return this.service.Unlink_LinktransactionMethods(authMethod, healhtIdNumber);
  }
}
