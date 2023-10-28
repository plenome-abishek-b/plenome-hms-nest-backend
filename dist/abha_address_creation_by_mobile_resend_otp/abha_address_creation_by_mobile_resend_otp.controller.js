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
exports.AbhaAddressCreationByMobileResendOtpController = void 0;
const common_1 = require("@nestjs/common");
const abha_address_creation_by_mobile_resend_otp_service_1 = require("./abha_address_creation_by_mobile_resend_otp.service");
let AbhaAddressCreationByMobileResendOtpController = class AbhaAddressCreationByMobileResendOtpController {
    constructor(resendOtpService) {
        this.resendOtpService = resendOtpService;
    }
    async createAbhaMobileTxnService(transactionId) {
        return this.resendOtpService.createAbhaMobileTxnService(transactionId);
    }
};
exports.AbhaAddressCreationByMobileResendOtpController = AbhaAddressCreationByMobileResendOtpController;
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)('transactionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AbhaAddressCreationByMobileResendOtpController.prototype, "createAbhaMobileTxnService", null);
exports.AbhaAddressCreationByMobileResendOtpController = AbhaAddressCreationByMobileResendOtpController = __decorate([
    (0, common_1.Controller)('abha_address_creation_by_mobile_resend_otp'),
    __metadata("design:paramtypes", [abha_address_creation_by_mobile_resend_otp_service_1.AbhaAddressCreationByMobileResendOtpService])
], AbhaAddressCreationByMobileResendOtpController);
//# sourceMappingURL=abha_address_creation_by_mobile_resend_otp.controller.js.map