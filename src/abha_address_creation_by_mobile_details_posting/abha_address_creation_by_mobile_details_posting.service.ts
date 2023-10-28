import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as crypto from 'crypto'

@Injectable()
export class AbhaAddressCreationByMobileDetailsPostingService {

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

  async mobileCreateAbhaDetailsService(address: string, countryCode: string, dayOfBirth: string, districtCode: string, email: string, firstName: string, gender: string, lastName: string, middleName: string, mobile: string, monthOfBirth: string, pinCode: string, stateCode: string, transactionId: string, yearOfBirth: string) {
    const publicKey = await this.generatePublicKey();
    const accessToken = await this.getAccessToken();
    // console.log("111",accessToken);
    
    const buffer = Buffer.from(mobile, 'utf8');
    const crypted = crypto.publicEncrypt(
      { key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING },
      buffer
    );
    const cryptedMobileNumber = crypted.toString('base64');
    // console.log(cryptedMobileNumber,"aaaaa");
    

    const bufferEmail = Buffer.from(email, 'utf8');
    const cryptedEmail = crypto.publicEncrypt(
      { key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING },
      bufferEmail
    );
    const cryptedEmailId = cryptedEmail.toString('base64');

    // console.log(cryptedEmailId,"cryyyy")
    const verifyData = {
      address: address,
      countryCode: countryCode,
      dayOfBirth: dayOfBirth,
      districtCode: districtCode,
      email: cryptedEmailId,
      firstName: firstName,
      gender: gender,
      lastName: lastName,
      middleName: middleName,
      mobile: cryptedMobileNumber,
      monthOfBirth: monthOfBirth,
      pinCode: pinCode,
      stateCode: stateCode,
      transactionId: transactionId,
      yearOfBirth: yearOfBirth
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
    const verifyMobileCreateDetailsURL = 'https://phrsbx.abdm.gov.in/api/v1/phr/registration/details';
    try {
      
      const response = await axios.post(verifyMobileCreateDetailsURL, verifyData, { headers })
      console.log(verifyData,"kkkkk");
      
      return response.data;
    } catch (error) {
      console.log(error);
      
    } 
  }

}
