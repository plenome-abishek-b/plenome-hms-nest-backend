import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AbhaAddressExixtsCheckingService {
  
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

    async PhrAbhaExistsMethods(phrAddressExists: string) {
      const accessToken = await this.getAccessToken();
      
      const headers = {
          'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
          'sec-ch-ua-mobile': '?0',
          'Authorization': `Bearer ${accessToken}`,
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
          'Content-Type': 'application/json;charset=UTF-8',
          'Referer': 'https://phr.abdm.gov.in/register/health-id',
          'sec-ch-ua-platform': '"Windows"',
      }; 
      const phrAddressExistsURL = `https://phrsbx.abdm.gov.in/api/v1/phr/search/isExist?phrAddress=${phrAddressExists}`;
      const response = await axios.get(phrAddressExistsURL, { headers });
      return response.data;
    }

}
