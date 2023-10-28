"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbhaGenerateOtpModule = void 0;
const common_1 = require("@nestjs/common");
const abha_generate_otp_service_1 = require("./abha_generate_otp.service");
const abha_generate_otp_controller_1 = require("./abha_generate_otp.controller");
const config_1 = require("@nestjs/config");
let AbhaGenerateOtpModule = class AbhaGenerateOtpModule {
};
exports.AbhaGenerateOtpModule = AbhaGenerateOtpModule;
exports.AbhaGenerateOtpModule = AbhaGenerateOtpModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot()],
        controllers: [abha_generate_otp_controller_1.AbhaGenerateOtpController],
        providers: [abha_generate_otp_service_1.AbhaGenerateOtpService]
    })
], AbhaGenerateOtpModule);
//# sourceMappingURL=abha_generate_otp.module.js.map