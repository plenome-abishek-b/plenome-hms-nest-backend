import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class M1VerificationByotpFetchModesService {
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

  async FetchModeService( abhaAddress: string, purpose: string, type: string,typeId:string) {
    const accessToken = await this.getAccessToken();
    const moment = require('moment');
    moment();
    const timestamp = moment.utc().format("YYYY-MM-DDTHH:mm:ss.SSSSSS")

    const uniqueId = uuidv4();
    console.log('Generated UUID:', uniqueId);
    
    const verifyData = {
      "requestId": uniqueId,
      "timestamp": timestamp,
      "query": {
        "id": abhaAddress,
        "purpose": purpose,
        "requester": {
          "type": type,
          "id": typeId
        }
      }
    }
     console.log(verifyData,"111");
    
    const headers = {
      'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
      'sec-ch-ua-mobile': '?0',
      'Authorization': `Bearer ${accessToken}`,
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
      'Content-Type': 'application/json',
      'accept': '*/*' ,
      'Referer': 'https://phr.abdm.gov.in/register/health-id',
      'X-CM-ID': 'sbx',
      'sec-ch-ua-platform': '"Windows"',
  }; 
  console.log(headers,"000");
  
    const FetchModeServiceURL = 'https://dev.abdm.gov.in/gateway/v0.5/users/auth/fetch-modes';
    try {
      console.log("tried");
      
      const response = await axios.post(FetchModeServiceURL, verifyData, { headers })
      console.log("complete");
      
      return response.data;
    } catch (error) {
      console.log("errored");
      
      return error
    }
  }

}
