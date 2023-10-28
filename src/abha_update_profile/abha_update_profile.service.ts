import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AbhaUpdateProfileService {
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

      async ProfileUpdatePost(refreshToken: string, data: any) {
        const accessToken = await this.getAccessToken();
        // console.log(accessToken,"11");
        // console.log(refreshToken,"22");
        
        // console.log(data,"33");
        
        const headers = {
          'accept': '*/*',
          'Connection': 'keep-alive',
          'Accept-Language': 'en-US',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
          'X-Token': `Bearer ${refreshToken}`,
        };
        const profileURL = 'https://healthidsbx.abdm.gov.in/api/v1/account/profile';
        try{
            console.log(data,"aassddff");
            
          const response = await axios.post(profileURL,  data , { headers });
          return response.data;
        }
        catch (e){
          console.log(e.config);
          
          return e
        }
      }
}

