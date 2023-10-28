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
exports.AbhaAddressCreationByMobileService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
const crypto = require("crypto");
let AbhaAddressCreationByMobileService = class AbhaAddressCreationByMobileService {
    constructor(configService) {
        this.configService = configService;
    }
    async pulicKeygentation() {
        try {
            const response = await axios_1.default.get('https://phrsbx.abdm.gov.in/api/v1/phr/public/certificate');
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
    async createAbhaMobileService(value) {
        const publicKey = await this.pulicKeygentation();
        console.log(publicKey);
        const buffer = Buffer.from(value, 'utf8');
        const crypted = crypto.publicEncrypt({ key: publicKey, padding: crypto.constants.RSA_PKCS1_PADDING }, buffer);
        const accessToken = await this.getToken();
        console.log(accessToken, "accesstoken wil be here");
        const cryptedphoneNumber = crypted.toString('base64');
        console.log(cryptedphoneNumber, "cry");
        const headers = {
            'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            'sec-ch-ua-mobile': '?0',
            'Authorization': `Bearer ${accessToken}`,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
            'Content-Type': 'application/json;charset=UTF-8',
            'Referer': 'https://phr.abdm.gov.in/register/health-id',
            'sec-ch-ua-platform': '"Windows"',
        };
        console.log(headers, "head");
        const generatePhoneNumberUrl = 'https://phrsbx.abdm.gov.in/api/v1/phr/registration/generate/otp';
        const cryptedPhoneNumber = {
            value: cryptedphoneNumber,
        };
        const response = await axios_1.default.post(generatePhoneNumberUrl, cryptedPhoneNumber, { headers });
        return response.data;
    }
};
exports.AbhaAddressCreationByMobileService = AbhaAddressCreationByMobileService;
exports.AbhaAddressCreationByMobileService = AbhaAddressCreationByMobileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AbhaAddressCreationByMobileService);
//# sourceMappingURL=abha_address_creation_by_mobile.service.js.map