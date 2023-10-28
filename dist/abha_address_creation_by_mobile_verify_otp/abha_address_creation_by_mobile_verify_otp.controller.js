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
exports.AbhaAddressCreationByMobileVerifyOtpController = void 0;
const common_1 = require("@nestjs/common");
const abha_address_creation_by_mobile_verify_otp_service_1 = require("./abha_address_creation_by_mobile_verify_otp.service");
let AbhaAddressCreationByMobileVerifyOtpController = class AbhaAddressCreationByMobileVerifyOtpController {
    constructor(mobileOtpService) {
        this.mobileOtpService = mobileOtpService;
    }
    async newVerifyOtp(otp, transactionId) {
        return this.mobileOtpService.newVerifyOtp(otp, transactionId);
    }
};
exports.AbhaAddressCreationByMobileVerifyOtpController = AbhaAddressCreationByMobileVerifyOtpController;
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)('otp')),
    __param(1, (0, common_1.Body)('transactionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AbhaAddressCreationByMobileVerifyOtpController.prototype, "newVerifyOtp", null);
exports.AbhaAddressCreationByMobileVerifyOtpController = AbhaAddressCreationByMobileVerifyOtpController = __decorate([
    (0, common_1.Controller)('abha_address_creation_by_mobile_verify_otp'),
    __metadata("design:paramtypes", [abha_address_creation_by_mobile_verify_otp_service_1.AbhaAddressCreationByMobileVerifyOtpService])
], AbhaAddressCreationByMobileVerifyOtpController);
//# sourceMappingURL=abha_address_creation_by_mobile_verify_otp.controller.js.map