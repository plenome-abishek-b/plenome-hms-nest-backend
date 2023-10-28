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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.M1VerificationBydemoV3GenerateLinkTokenController = void 0;
const common_1 = require("@nestjs/common");
const m1_verification_bydemo_v3_generate_link_token_service_1 = require("./m1_verification_bydemo_v3_generate_link_token.service");
let M1VerificationBydemoV3GenerateLinkTokenController = class M1VerificationBydemoV3GenerateLinkTokenController {
    constructor(loginMobileAuthInitService) {
        this.loginMobileAuthInitService = loginMobileAuthInitService;
    }
    async FetchMode(abhaNumber, abhaAddress, name, gender, yearOfBirth) {
        return this.loginMobileAuthInitService.tokenService(abhaNumber, abhaAddress, name, gender, yearOfBirth);
    }
};
exports.M1VerificationBydemoV3GenerateLinkTokenController = M1VerificationBydemoV3GenerateLinkTokenController;
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)('abhaNumber')),
    __param(1, (0, common_1.Body)('abhaAddress')),
    __param(2, (0, common_1.Body)('name')),
    __param(3, (0, common_1.Body)('gender')),
    __param(4, (0, common_1.Body)('yearOfBirth')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String]),
    __metadata("design:returntype", Promise)
], M1VerificationBydemoV3GenerateLinkTokenController.prototype, "FetchMode", null);
exports.M1VerificationBydemoV3GenerateLinkTokenController = M1VerificationBydemoV3GenerateLinkTokenController = __decorate([
    (0, common_1.Controller)('m1_verification_bydemo_v3_generate_link_token'),
    __metadata("design:paramtypes", [m1_verification_bydemo_v3_generate_link_token_service_1.M1VerificationBydemoV3GenerateLinkTokenService])
], M1VerificationBydemoV3GenerateLinkTokenController);
//# sourceMappingURL=m1_verification_bydemo_v3_generate_link_token.controller.js.map