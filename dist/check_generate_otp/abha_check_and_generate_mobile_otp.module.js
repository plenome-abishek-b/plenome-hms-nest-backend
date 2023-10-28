"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbhaCheckAndGenerateMobileOtpModule = void 0;
const common_1 = require("@nestjs/common");
const abha_check_and_generate_mobile_otp_service_1 = require("./abha_check_and_generate_mobile_otp.service");
const abha_check_and_generate_mobile_otp_controller_1 = require("./abha_check_and_generate_mobile_otp.controller");
let AbhaCheckAndGenerateMobileOtpModule = class AbhaCheckAndGenerateMobileOtpModule {
};
exports.AbhaCheckAndGenerateMobileOtpModule = AbhaCheckAndGenerateMobileOtpModule;
exports.AbhaCheckAndGenerateMobileOtpModule = AbhaCheckAndGenerateMobileOtpModule = __decorate([
    (0, common_1.Module)({
        controllers: [abha_check_and_generate_mobile_otp_controller_1.AbhaCheckAndGenerateMobileOtpController],
        providers: [abha_check_and_generate_mobile_otp_service_1.AbhaCheckAndGenerateMobileOtpService]
    })
], AbhaCheckAndGenerateMobileOtpModule);
//# sourceMappingURL=abha_check_and_generate_mobile_otp.module.js.map