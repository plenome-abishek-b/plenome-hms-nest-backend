import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AbhaGetProfileService {
  
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

    async getProfile(refreshToken: string) {
      const accessToken = await this.getAccessToken();
      const headers = {
        'accept': '*/*',
        'Connection': 'keep-alive',
        'Accept-Language': 'en-US',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'X-Token': `Bearer ${refreshToken}`
      };
      const getProfileURL = 'https://healthidsbx.abdm.gov.in/api/v1/account/profile';
      const response = await axios.get(getProfileURL, { headers });
      return response.data;
    }
}
