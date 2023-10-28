import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import * as crypto from 'crypto';


@Injectable()
export class AbhaGenerateOtpService {
  constructor(
    private readonly configService: ConfigService
  ) {
    
  }

  async pulicKeygentation() {
    try {
      const response = await axios
        .get('https://healthidsbx.abdm.gov.in/api/v2/auth/cert')
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

  async generateOtp(adharNumber: string) {
    const publicKey = await this.pulicKeygentation();
    console.log(publicKey,"111")
    const buffer = Buffer.from(adharNumber, 'utf8');
    const crypted = crypto.publicEncrypt(
      { key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING },
      buffer
    );
    const accessToken = await this.getToken();
    console.log(accessToken,"accesstoken wil be here")
    const cryptedaadhar = crypted.toString('base64');
    // console.log(cryptedaadhar,"cry")
    const headers = {
      'accept': '*/*',
      'Accept-Language': 'en-US',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };
  //  console.log(headers,"head")
    const generateOtpUrl =
      'https://healthidsbx.abdm.gov.in/api/v2/registration/aadhaar/generateOtp';
    const generateOtpData = {
      aadhaar: cryptedaadhar,
    };
    console.log(generateOtpData,"otpdata")
    const response = await axios.post(generateOtpUrl, generateOtpData, { headers })
      // .toPromise();
      // console.log(response,"rsss")
    return response.data;
  }

}
