"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbhaVerifyOtpModule = void 0;
const common_1 = require("@nestjs/common");
const abha_verify_otp_service_1 = require("./abha_verify_otp.service");
const abha_verify_otp_controller_1 = require("./abha_verify_otp.controller");
let AbhaVerifyOtpModule = class AbhaVerifyOtpModule {
};
exports.AbhaVerifyOtpModule = AbhaVerifyOtpModule;
exports.AbhaVerifyOtpModule = AbhaVerifyOtpModule = __decorate([
    (0, common_1.Module)({
        controllers: [abha_verify_otp_controller_1.AbhaVerifyOtpController],
        providers: [abha_verify_otp_service_1.AbhaVerifyOtpService]
    })
], AbhaVerifyOtpModule);
//# sourceMappingURL=abha_verify_otp.module.js.map