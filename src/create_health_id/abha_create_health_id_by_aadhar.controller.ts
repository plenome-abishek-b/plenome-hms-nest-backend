import { Controller,  Post, Body} from '@nestjs/common';
import { AbhaCreateHealthIdByAadharService } from './abha_create_health_id_by_aadhar.service';

@Controller('abha_create_health_id_by_aadhar')
export class AbhaCreateHealthIdByAadharController {
  
  constructor(private readonly m1CreateHealthIdByAdhaarService: AbhaCreateHealthIdByAadharService) {}

  @Post('/')
  async createHealthIdByAdhaar(@Body('consent') consent: boolean, @Body('consentVersion') consentVersion: string, @Body('txnId') txnId: string) {
    console.log(consent,consentVersion,txnId,"ge")
    return await this.m1CreateHealthIdByAdhaarService.CreateHealthIdBYAadhaar(consent, consentVersion, txnId);
  }
}
