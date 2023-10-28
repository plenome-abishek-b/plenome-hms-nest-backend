import { Injectable } from '@nestjs/common';

import axios, { AxiosResponse } from 'axios';

import { exec } from 'child_process';

import * as fs from 'fs';

import * as os from 'os';

 

@Injectable()

export class DownloadAbhaCardGetcardService {

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

 

  async convertPdfToImages(pdfBuffer: Buffer) {

    const tmpDir = os.tmpdir();

    const pdfFilePath = `${tmpDir}/input.pdf`;

    fs.writeFileSync(pdfFilePath, pdfBuffer);

 

    return new Promise<string[]>((resolve, reject) => {

      exec(`pdftoppm ${pdfFilePath} ${tmpDir}/output -png`, (error, stdout, stderr) => {

        if (error) {

          reject(error);

        } else {

          const imagePaths = fs.readdirSync(tmpDir).filter(file => file.startsWith('output'));

          resolve(imagePaths.map(imagePath => `${tmpDir}/${imagePath}`));

        }

      });

    });

  }

 

  async imageToBase64(imagePath: string): Promise<string> {

    const imageBuffer = fs.readFileSync(imagePath);

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

 

      const getCardURL = 'https://healthidsbx.abdm.gov.in/api/v1/account/getCard';

      const response: AxiosResponse<Buffer> = await axios.get(getCardURL, {

        headers,

        responseType: 'arraybuffer',

      });

 

     

      const imagePaths = await this.convertPdfToImages(response.data);

     

      const base64Images = [];

      for (const imagePath of imagePaths) {

        const base64Image = await this.imageToBase64(imagePath);

        base64Images.push(base64Image);

      }

 

      return base64Images;

    } catch (error) {

      console.error("Error in getQrCode:", error);

      throw error;

    }

  }

}

 

 