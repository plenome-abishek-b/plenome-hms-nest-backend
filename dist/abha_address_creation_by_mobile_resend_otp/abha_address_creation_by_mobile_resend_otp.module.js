"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbhaAddressCreationByMobileResendOtpModule = void 0;
const common_1 = require("@nestjs/common");
const abha_address_creation_by_mobile_resend_otp_service_1 = require("./abha_address_creation_by_mobile_resend_otp.service");
const abha_address_creation_by_mobile_resend_otp_controller_1 = require("./abha_address_creation_by_mobile_resend_otp.controller");
const config_1 = require("@nestjs/config");
let AbhaAddressCreationByMobileResendOtpModule = class AbhaAddressCreationByMobileResendOtpModule {
};
exports.AbhaAddressCreationByMobileResendOtpModule = AbhaAddressCreationByMobileResendOtpModule;
exports.AbhaAddressCreationByMobileResendOtpModule = AbhaAddressCreationByMobileResendOtpModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule],
        controllers: [abha_address_creation_by_mobile_resend_otp_controller_1.AbhaAddressCreationByMobileResendOtpController],
        providers: [abha_address_creation_by_mobile_resend_otp_service_1.AbhaAddressCreationByMobileResendOtpService]
    })
], AbhaAddressCreationByMobileResendOtpModule);
//# sourceMappingURL=abha_address_creation_by_mobile_resend_otp.module.js.map