"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.M1VerificationByotpAuthConformService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const axios_1 = require("axios");
let M1VerificationByotpAuthConformService = class M1VerificationByotpAuthConformService {
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
    async AuthConformService(txnId, authcode) {
        const accessToken = await this.getAccessToken();
        const moment = require('moment');
        moment();
        const timestamp = moment.utc().format("YYYY-MM-DDTHH:mm:ss.SSSSSS");
        const uniqueId = (0, uuid_1.v4)();
        console.log('Generated UUID:', uniqueId);
        const verifyData = {
            "requestId": uniqueId,
            "timestamp": timestamp,
            "transactionId": txnId,
            "credential": {
                "authCode": authcode
            }
        };
        console.log(verifyData, "111");
        const headers = {
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'Authorization': `Bearer ${accessToken}`,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
            'Content-Type': 'application/json',
            'accept': '*/*',
            'Referer': 'https://phr.abdm.gov.in/register/health-id',
            'X-CM-ID': 'sbx',
            'sec-ch-ua-platform': '"Windows"',
        };
        console.log(headers, "000");
        const FetchModeServiceURL = 'https://dev.abdm.gov.in/gateway/v0.5/users/auth/confirm';
        try {
            console.log("tried");
            const response = await axios_1.default.post(FetchModeServiceURL, verifyData, { headers });
            console.log("complete");
            return response.data;
        }
        catch (error) {
            console.log("errored");
            return error;
        }
    }
};
exports.M1VerificationByotpAuthConformService = M1VerificationByotpAuthConformService;
exports.M1VerificationByotpAuthConformService = M1VerificationByotpAuthConformService = __decorate([
    (0, common_1.Injectable)()
], M1VerificationByotpAuthConformService);
//# sourceMappingURL=m1_verification_byotp_auth_conform.service.js.map