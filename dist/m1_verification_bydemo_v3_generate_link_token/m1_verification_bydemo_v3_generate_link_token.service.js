"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.M1VerificationBydemoV3GenerateLinkTokenService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const uuid_1 = require("uuid");
let M1VerificationBydemoV3GenerateLinkTokenService = class M1VerificationBydemoV3GenerateLinkTokenService {
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
    async tokenService(abhaNumber, abhaAddress, name, gender, yearOfBirth) {
        const accessToken = await this.getAccessToken();
        const uniqueId = (0, uuid_1.v4)();
        const timestamp = new Date().toISOString();
        const verifyData = {
            "abhaNumber": abhaNumber,
            "abhaAddress": abhaAddress,
            "name": name,
            "gender": gender,
            "yearOfBirth": yearOfBirth
        };
        const headers = {
            'REQUEST-ID': uniqueId,
            'TIMESTAMP': timestamp,
            'Authorization': `Bearer ${accessToken}`,
            'X-CM-ID': 'sbx',
            'X-HIP-ID': "1234567",
        };
        const FetchModeServiceURL = 'https://dev.abdm.gov.in/hiecm/api/v3/token/generate-token';
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
exports.M1VerificationBydemoV3GenerateLinkTokenService = M1VerificationBydemoV3GenerateLinkTokenService;
exports.M1VerificationBydemoV3GenerateLinkTokenService = M1VerificationBydemoV3GenerateLinkTokenService = __decorate([
    (0, common_1.Injectable)()
], M1VerificationBydemoV3GenerateLinkTokenService);
//# sourceMappingURL=m1_verification_bydemo_v3_generate_link_token.service.js.map