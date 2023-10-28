import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import * as crypto from 'crypto';

@Injectable()
export class AbhaAddressCreationByMobileService {

  constructor( 
    private readonly configService: ConfigService
  ) {}

  async pulicKeygentation() {
    try {
      const response = await axios.get('https://phrsbx.abdm.gov.in/api/v1/phr/public/certificate')
      return response.data;
    } catch (error) {
      console.error('Error retrieving public key:', error);
    }
  }

  async getToken() {
    const data = {
      clientId: this.configService.get('CLIENT_ID'),
      clientSecret: this.configService.get('CLIENT_SECRET'),
      grantType: 'client_credentials',
    };
    console.log(data,"kk")
    const authUrl = 'https://dev.abdm.gov.in/gateway/v0.5/sessions';
    const response = await axios.post(authUrl, data)
    return response.data.accessToken;
  }

  async createAbhaMobileService(value: string) {
    const publicKey = await this.pulicKeygentation();
    console.log(publicKey)
    const buffer = Buffer.from(value, 'utf8');
    const crypted = crypto.publicEncrypt(
      { key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING },
      buffer
    );
    const accessToken = await this.getToken();
    console.log(accessToken,"accesstoken wil be here")
    const cryptedphoneNumber = crypted.toString('base64');
    console.log(cryptedphoneNumber,"cry")
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
    const generatePhoneNumberUrl =
      'https://phrsbx.abdm.gov.in/api/v1/phr/registration/generate/otp';
    const cryptedPhoneNumber = {
      value: cryptedphoneNumber,
    };
    const response = await axios.post(generatePhoneNumberUrl, cryptedPhoneNumber, { headers });
    //   console.log(response,"rsss")
    return response.data;
  }

}
