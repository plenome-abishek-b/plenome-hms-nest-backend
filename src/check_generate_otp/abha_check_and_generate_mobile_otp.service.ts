import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AbhaCheckAndGenerateMobileOtpService {
  
  constructor() {}

  async getAccessToken() {
      const data = {
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        grantType: 'client_credentials',
      };
      const accessTokenUrl = 'https://dev.abdm.gov.in/gateway/v0.5/sessions';
      const response = await axios.post(accessTokenUrl, data);
      return response.data.accessToken;
    }

    async checkAndGenerateMobileOTP(mobile: number, txnId: string) {
      const accessToken = await this.getAccessToken();
      const verifyData = {
        mobile: mobile,
        txnId: txnId,
      };
      console.log(verifyData,"ll")
      const headers = {
        'accept': '*/*',
        'Connection': 'keep-alive',
        'Accept-Language': 'en-US',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      };
      const verifyOTPURL = 'https://healthidsbx.abdm.gov.in/api/v2/registration/aadhaar/checkAndGenerateMobileOTP';
      const response = await axios
        .post(verifyOTPURL, verifyData, { headers });
        console.log(response.data)
      return response.data;
    }
}
