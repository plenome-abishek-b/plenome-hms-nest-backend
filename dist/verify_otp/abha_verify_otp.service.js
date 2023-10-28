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
exports.AbhaVerifyOtpService = void 0;
const common_1 = require("@nestjs/common");
const crypto = require("crypto");
const axios_1 = require("axios");
let AbhaVerifyOtpService = class AbhaVerifyOtpService {
    constructor() { }
    async generatePublicKey() {
        try {
            const response = await axios_1.default
                .get('https://healthidsbx.abdm.gov.in/api/v2/auth/cert');
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
    async newVerifyOtp(otp, txnId) {
        const publicKey = await this.generatePublicKey();
        const accessToken = await this.getAccessToken();
        const buffer = Buffer.from(otp, 'utf8');
        const crypted = crypto.publicEncrypt({ key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING }, buffer);
        const cryptedOtp = crypted.toString('base64');
        const verifyData = {
            otp: cryptedOtp,
            txnId: txnId,
        };
        const headers = {
            'accept': '*/*',
            'Connection': 'keep-alive',
            'Accept-Language': 'en-US',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        };
        const verifyOTPURL = 'https://healthidsbx.abdm.gov.in/api/v2/registration/aadhaar/verifyOTP';
        const response = await axios_1.default.post(verifyOTPURL, verifyData, { headers });
        return response.data;
    }
};
exports.AbhaVerifyOtpService = AbhaVerifyOtpService;
exports.AbhaVerifyOtpService = AbhaVerifyOtpService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AbhaVerifyOtpService);
//# sourceMappingURL=abha_verify_otp.service.js.map