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
exports.AbhaAddressLinkGenerateOtpModule = void 0;
const common_1 = require("@nestjs/common");
const abha_address_link_generate_otp_service_1 = require("./abha_address_link_generate_otp.service");
const abha_address_link_generate_otp_controller_1 = require("./abha_address_link_generate_otp.controller");
let AbhaAddressLinkGenerateOtpModule = class AbhaAddressLinkGenerateOtpModule {
    constructor() {
        console.log("enters");
    }
};
exports.AbhaAddressLinkGenerateOtpModule = AbhaAddressLinkGenerateOtpModule;
exports.AbhaAddressLinkGenerateOtpModule = AbhaAddressLinkGenerateOtpModule = __decorate([
    (0, common_1.Module)({
        controllers: [abha_address_link_generate_otp_controller_1.AbhaAddressLinkGenerateOtpController],
        providers: [abha_address_link_generate_otp_service_1.AbhaAddressLinkGenerateOtpService]
    }),
    __metadata("design:paramtypes", [])
], AbhaAddressLinkGenerateOtpModule);
//# sourceMappingURL=abha_address_link_generate_otp.module.js.map