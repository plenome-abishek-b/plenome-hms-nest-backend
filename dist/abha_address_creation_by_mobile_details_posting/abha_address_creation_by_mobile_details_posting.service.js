"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbhaAddressCreationByMobileDetailsPostingService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const crypto = require("crypto");
let AbhaAddressCreationByMobileDetailsPostingService = class AbhaAddressCreationByMobileDetailsPostingService {
    constructor() { }
    async generatePublicKey() {
        try {
            const response = await axios_1.default.get('https://phrsbx.abdm.gov.in/api/v1/phr/public/certificate');
            return response.data;
        }
        catch (error) {
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
        const response = await axios_1.default.post(accessTokenUrl, data);
        return response.data.accessToken;
    }
    async mobileCreateAbhaDetailsService(address, countryCode, dayOfBirth, districtCode, email, firstName, gender, lastName, middleName, mobile, monthOfBirth, pinCode, stateCode, transactionId, yearOfBirth) {
        const publicKey = await this.generatePublicKey();
        const accessToken = await this.getAccessToken();
        const buffer = Buffer.from(mobile, 'utf8');
        const crypted = crypto.publicEncrypt({ key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING }, buffer);
        const cryptedMobileNumber = crypted.toString('base64');
        const bufferEmail = Buffer.from(email, 'utf8');
        const cryptedEmail = crypto.publicEncrypt({ key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING }, bufferEmail);
        const cryptedEmailId = cryptedEmail.toString('base64');
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
            const response = await axios_1.default.post(verifyMobileCreateDetailsURL, verifyData, { headers });
            console.log(verifyData, "kkkkk");
            return response.data;
        }
        catch (error) {
            console.log(error);
        }
    }
};
exports.AbhaAddressCreationByMobileDetailsPostingService = AbhaAddressCreationByMobileDetailsPostingService;
exports.AbhaAddressCreationByMobileDetailsPostingService = AbhaAddressCreationByMobileDetailsPostingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AbhaAddressCreationByMobileDetailsPostingService);
//# sourceMappingURL=abha_address_creation_by_mobile_details_posting.service.js.map