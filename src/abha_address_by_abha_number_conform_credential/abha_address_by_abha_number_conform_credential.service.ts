import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as crypto from 'crypto';


@Injectable()
export class AbhaAddressByAbhaNumberConformCredentialService {
  
  constructor() {}

  async generatePublicKey() {
    try {
      const response = await axios.get('https://phrsbx.abdm.gov.in/api/v1/phr/public/certificate');
      return response.data;
    } catch (error) {
      console.error('Error public key:', error);
    }
  }

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

  async confirmCredentials(value: string, transactionId: string) {
    const publicKey = await this.generatePublicKey();
    const accessToken = await this.getAccessToken();
    const buffer = Buffer.from(value, 'utf8');
    const crypted = crypto.publicEncrypt(
      { key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING },
      buffer
    );
    const cryptedOtp = crypted.toString('base64');
    console.log(cryptedOtp,"cryyyy")
    const verifyData = {
      transactionId: transactionId,
      value: cryptedOtp,
    };
    const headers = {
        'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
        'sec-ch-ua-mobile': '?0',
        'Authorization': `Bearer ${accessToken}`,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
        'Content-Type': 'application/json;charset=UTF-8',
        'Referer': 'https://phr.abdm.gov.in/register/health-id',
        'sec-ch-ua-platform': '"Windows"',
    }; 
    const confirmCredentailsURL = 'https://phrsbx.abdm.gov.in/api/v1/phr/registration/hid/confirm/credential';
    const response = await axios.post(confirmCredentailsURL, verifyData, { headers })
    return response.data;
  }

}
