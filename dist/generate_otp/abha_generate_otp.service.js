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
exports.AbhaGenerateOtpService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
const crypto = require("crypto");
let AbhaGenerateOtpService = class AbhaGenerateOtpService {
    constructor(configService) {
        this.configService = configService;
    }
    async pulicKeygentation() {
        try {
            const response = await axios_1.default
                .get('https://healthidsbx.abdm.gov.in/api/v2/auth/cert');
            return response.data;
        }
        catch (error) {
            console.error('Error retrieving public key:', error);
        }
    }
    async getToken() {
        const data = {
            clientId: this.configService.get('CLIENT_ID'),
            clientSecret: this.configService.get('CLIENT_SECRET'),
            grantType: 'client_credentials',
        };
        console.log(data, "kk");
        const authUrl = 'https://dev.abdm.gov.in/gateway/v0.5/sessions';
        const response = await axios_1.default.post(authUrl, data);
        return response.data.accessToken;
    }
    async generateOtp(adharNumber) {
        const publicKey = await this.pulicKeygentation();
        console.log(publicKey, "111");
        const buffer = Buffer.from(adharNumber, 'utf8');
        const crypted = crypto.publicEncrypt({ key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING }, buffer);
        const accessToken = await this.getToken();
        console.log(accessToken, "accesstoken wil be here");
        const cryptedaadhar = crypted.toString('base64');
        const headers = {
            'accept': '*/*',
            'Accept-Language': 'en-US',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        };
        const generateOtpUrl = 'https://healthidsbx.abdm.gov.in/api/v2/registration/aadhaar/generateOtp';
        const generateOtpData = {
            aadhaar: cryptedaadhar,
        };
        console.log(generateOtpData, "otpdata");
        const response = await axios_1.default.post(generateOtpUrl, generateOtpData, { headers });
        return response.data;
    }
};
exports.AbhaGenerateOtpService = AbhaGenerateOtpService;
exports.AbhaGenerateOtpService = AbhaGenerateOtpService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AbhaGenerateOtpService);
//# sourceMappingURL=abha_generate_otp.service.js.map