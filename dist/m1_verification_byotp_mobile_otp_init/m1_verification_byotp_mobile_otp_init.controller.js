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
exports.M1VerificationByotpMobileOtpInitController = void 0;
const common_1 = require("@nestjs/common");
const m1_verification_byotp_mobile_otp_init_service_1 = require("./m1_verification_byotp_mobile_otp_init.service");
let M1VerificationByotpMobileOtpInitController = class M1VerificationByotpMobileOtpInitController {
    constructor(loginMobileAuthInitService) {
        this.loginMobileAuthInitService = loginMobileAuthInitService;
    }
    async FetchMode(authMode, abhaAddress, purpose, type, typeId) {
        return this.loginMobileAuthInitService.InitService(authMode, abhaAddress, purpose, type, typeId);
    }
};
exports.M1VerificationByotpMobileOtpInitController = M1VerificationByotpMobileOtpInitController;
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)('authMode')),
    __param(1, (0, common_1.Body)('abhaAddress')),
    __param(2, (0, common_1.Body)('purpose')),
    __param(3, (0, common_1.Body)('type')),
    __param(4, (0, common_1.Body)('typeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], M1VerificationByotpMobileOtpInitController.prototype, "FetchMode", null);
exports.M1VerificationByotpMobileOtpInitController = M1VerificationByotpMobileOtpInitController = __decorate([
    (0, common_1.Controller)('m1_verification_byotp_mobile_otp_init'),
    __metadata("design:paramtypes", [m1_verification_byotp_mobile_otp_init_service_1.M1VerificationByotpMobileOtpInitService])
], M1VerificationByotpMobileOtpInitController);
//# sourceMappingURL=m1_verification_byotp_mobile_otp_init.controller.js.map