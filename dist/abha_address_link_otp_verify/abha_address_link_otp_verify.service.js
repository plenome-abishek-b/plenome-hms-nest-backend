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
exports.AbhaAddressLinkOtpVerifyService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const crypto = require("crypto");
let AbhaAddressLinkOtpVerifyService = class AbhaAddressLinkOtpVerifyService {
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
    async link_unlink_VerifyOtp(otp, transactionId) {
        const publicKey = await this.generatePublicKey();
        const accessToken = await this.getAccessToken();
        const buffer = Buffer.from(otp, 'utf8');
        const crypted = crypto.publicEncrypt({ key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING }, buffer);
        const cryptedOtp = crypted.toString('base64');
        const verifyData = {
            otp: cryptedOtp,
            transactionId: transactionId,
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
        console.log(verifyData, "1111");
        console.log(headers, "2222");
        const link_Unlink_verifyOTPURL = 'https://phrsbx.abdm.gov.in/api/v1/phr/login/mobileEmail/preVerification';
        try {
            const response = await axios_1.default.post(link_Unlink_verifyOTPURL, verifyData, { headers });
            return [{
                    "data": response.data
                }];
        }
        catch (error) {
            return error;
        }
    }
};
exports.AbhaAddressLinkOtpVerifyService = AbhaAddressLinkOtpVerifyService;
exports.AbhaAddressLinkOtpVerifyService = AbhaAddressLinkOtpVerifyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AbhaAddressLinkOtpVerifyService);
//# sourceMappingURL=abha_address_link_otp_verify.service.js.map