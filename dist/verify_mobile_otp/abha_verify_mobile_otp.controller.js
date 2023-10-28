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
exports.AbhaVerifyMobileOtpController = void 0;
const common_1 = require("@nestjs/common");
const abha_verify_mobile_otp_service_1 = require("./abha_verify_mobile_otp.service");
let AbhaVerifyMobileOtpController = class AbhaVerifyMobileOtpController {
    constructor(m1VerifyMobileOtpService) {
        this.m1VerifyMobileOtpService = m1VerifyMobileOtpService;
    }
    async VerifyMobileOtp(otp, txnId) {
        return await this.m1VerifyMobileOtpService.VerifyMobileOtp(otp, txnId);
    }
};
exports.AbhaVerifyMobileOtpController = AbhaVerifyMobileOtpController;
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)('otp')),
    __param(1, (0, common_1.Body)('txnId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AbhaVerifyMobileOtpController.prototype, "VerifyMobileOtp", null);
exports.AbhaVerifyMobileOtpController = AbhaVerifyMobileOtpController = __decorate([
    (0, common_1.Controller)('abha_verify_mobile_otp'),
    __metadata("design:paramtypes", [abha_verify_mobile_otp_service_1.AbhaVerifyMobileOtpService])
], AbhaVerifyMobileOtpController);
//# sourceMappingURL=abha_verify_mobile_otp.controller.js.map