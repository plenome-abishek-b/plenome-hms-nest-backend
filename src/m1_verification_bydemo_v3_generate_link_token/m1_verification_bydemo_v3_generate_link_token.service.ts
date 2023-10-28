import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class M1VerificationBydemoV3GenerateLinkTokenService {

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

  async tokenService(abhaNumber: number, abhaAddress: string, name: string, gender: string, yearOfBirth: string) {
    const accessToken = await this.getAccessToken();
    const uniqueId = uuidv4();
    const timestamp = new Date().toISOString();

    const verifyData = {
      "abhaNumber": abhaNumber,
      "abhaAddress": abhaAddress,
      "name": name,
      "gender": gender,
      "yearOfBirth": yearOfBirth
    };

    const headers = {
      
      'REQUEST-ID': uniqueId,
      'TIMESTAMP': timestamp,
      'Authorization': `Bearer ${accessToken}`,    
      'X-CM-ID': 'sbx',
      'X-HIP-ID': "1234567",
    };

    const FetchModeServiceURL = 'https://dev.abdm.gov.in/hiecm/api/v3/token/generate-token';

    try {
      console.log("tried");
      const response = await axios.post(FetchModeServiceURL, verifyData, { headers });
      console.log("complete");
      return response.data;
    } catch (error) {
      console.log("errored");
      return error;
    }
  }
}
