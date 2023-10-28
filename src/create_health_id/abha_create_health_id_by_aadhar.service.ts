import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AbhaCreateHealthIdByAadharService {
  
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

    async CreateHealthIdBYAadhaar(consent: boolean,consentVersion: string, txnId: string) {
      const accessToken = await this.getAccessToken();
      const verifyData = {
        consent: consent,
        consentVersion: consentVersion,
        txnId: txnId,
      };
      const headers = {
        'accept': '*/*',
        'Connection': 'keep-alive',
        'Accept-Language': 'en-US',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      };
      const createHealthIdURL = 'https://healthidsbx.abdm.gov.in/api/v2/registration/aadhaar/createHealthIdByAdhaar';
      const response = await axios.post(createHealthIdURL, verifyData, { headers });
      return response.data;
    }
}
