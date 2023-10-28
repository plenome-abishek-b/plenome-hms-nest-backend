import { Injectable } from '@nestjs/common';

import axios, { AxiosResponse } from 'axios';

import * as fs from 'fs';

import * as os from 'os';

import * as path from 'path';

 

@Injectable()

export class DownloadAbhaCardPngcardService {

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

 

  async imageToBase64(imageBuffer: Buffer): Promise<string> {

    return imageBuffer.toString('base64');

  }

 

  async getQrCode(token: string) {

    try {

      const accessToken = await this.getAccessToken();

      const headers = {

        'accept': 'image/png',

        'Connection': 'keep-alive',

        'Accept-Language': 'en-US',

        'Content-Type': 'application/json',

        'X-Token': `Bearer ${token}`,

        'Authorization': `Bearer ${accessToken}`,

      };

 

      const getCardURL = 'https://healthidsbx.abdm.gov.in/api/v1/account/getPngCard';

      const response: AxiosResponse<Buffer> = await axios.get(getCardURL, {

        headers,

        responseType: 'arraybuffer',

      });

 

      const base64Image = await this.imageToBase64(response.data);

 

      return base64Image;

    } catch (error) {

      console.error("Error in getPngCard:", error);

      throw error;

    }

  }

}