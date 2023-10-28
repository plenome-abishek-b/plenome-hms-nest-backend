import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class AbhaAddressCreationByMobileResendOtpService {

  constructor(
    
    private readonly configService: ConfigService
  ) {}

  async getToken() {
    const data = {
      clientId: this.configService.get('CLIENT_ID'),
      clientSecret: this.configService.get('CLIENT_SECRET'),
      grantType: 'client_credentials',
    };
    console.log(data,"kk")
    const authUrl = 'https://dev.abdm.gov.in/gateway/v0.5/sessions';
    const response = await axios.post(authUrl, data);
    return response.data.accessToken;
  }

  async createAbhaMobileTxnService(transactionId: string) {
    const accessToken = await this.getToken();
    console.log(accessToken,"accesstoken wil be here")
    const headers = {
        'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
        'sec-ch-ua-mobile': '?0',
        'Authorization': `Bearer ${accessToken}`,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
        'Content-Type': 'application/json;charset=UTF-8',
        'Referer': 'https://phr.abdm.gov.in/register/health-id',
        'sec-ch-ua-platform': '"Windows"',
    }; 
   console.log(headers,"head")
    const generatetxnIdUrl =
      'https://phrsbx.abdm.gov.in/api/v1/phr/registration/resend/otp';
    const txnId = {
        transactionId: transactionId,
    };
    const response = await axios.post(generatetxnIdUrl, txnId, { headers });
    //   console.log(response,"rsss")
    return response.data;
  }

}
