import { Injectable } from '@nestjs/common';

import axios from 'axios';

import * as crypto from 'crypto';

 

 

@Injectable()

export class AbhaVerifyMobileOtpService {

  

  constructor() {}

 

  async generatePublicKey() {

    try {

      const response = await axios

        .get('https://healthidsbx.abdm.gov.in/api/v2/auth/cert')

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

 

    async VerifyMobileOtp(otp: string, txnId: string) {

      const publicKey = await this.generatePublicKey();

      const accessToken = await this.getAccessToken();

      const buffer = Buffer.from(otp, 'utf8');

    const crypted = crypto.publicEncrypt(

      { key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING },

      buffer

    );

    const cryptedOtp = crypted.toString('base64');

      const verifyData = {

        otp: cryptedOtp,

        txnId: txnId,

      };

      

      const headers = {

        'accept': '*/*',

        'Connection': 'keep-alive',

        'Accept-Language': 'en-US',

        'Content-Type': 'application/json',

        'Authorization': `Bearer ${accessToken}`,

      };

      const verifyMobileOTPURL = 'https://healthidsbx.abdm.gov.in/api/v2/registration/aadhaar/verifyMobileOTP';

      const response = await axios.post(verifyMobileOTPURL, verifyData, { headers });

      return response.data;

    }

}

 