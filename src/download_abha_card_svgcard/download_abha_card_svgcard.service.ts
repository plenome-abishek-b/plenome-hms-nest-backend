import { Injectable } from '@nestjs/common';

import axios, { AxiosResponse } from 'axios';

import * as puppeteer from 'puppeteer';

 

@Injectable()

export class DownloadAbhaCardSvgcardService {

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

 

  async convertSvgToBase64(svgData: Buffer): Promise<string> {

    const browser = await puppeteer.launch({

      headless: 'new', // Specify headless mode as "new"

    });

    const page = await browser.newPage();

 

    await page.setContent(svgData.toString(), { waitUntil: 'domcontentloaded' });

 

    const base64 = await page.screenshot({ encoding: 'base64' });

 

    await browser.close();

 

    return base64;

  }

 

  async getQrCode(token: string): Promise<string> {

    try {

      const accessToken = await this.getAccessToken();

      const headers = {

        'accept': 'image/svg+xml', // Request SVG format directly

        'Connection': 'keep-alive',

        'Accept-Language': 'en-US',

        'Content-Type': 'application/json',

        'X-Token': `Bearer ${token}`,

        'Authorization': `Bearer ${accessToken}`,

      };

 

      const getCardURL = 'https://healthidsbx.abdm.gov.in/api/v1/account/getSvgCard';

      const response: AxiosResponse<Buffer> = await axios.get(getCardURL, {

        headers,

        responseType: 'arraybuffer',

      });

 

      const svgBase64 = await this.convertSvgToBase64(response.data);

 

      return svgBase64;

    } catch (error) {

      console.error("Error in getSvgCard:", error);

      throw error;

    }

  }

}

 