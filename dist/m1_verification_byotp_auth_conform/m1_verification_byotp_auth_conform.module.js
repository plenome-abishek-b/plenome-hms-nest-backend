"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.M1VerificationByotpAuthConformModule = void 0;
const common_1 = require("@nestjs/common");
const m1_verification_byotp_auth_conform_service_1 = require("./m1_verification_byotp_auth_conform.service");
const m1_verification_byotp_auth_conform_controller_1 = require("./m1_verification_byotp_auth_conform.controller");
let M1VerificationByotpAuthConformModule = class M1VerificationByotpAuthConformModule {
};
exports.M1VerificationByotpAuthConformModule = M1VerificationByotpAuthConformModule;
exports.M1VerificationByotpAuthConformModule = M1VerificationByotpAuthConformModule = __decorate([
    (0, common_1.Module)({
        controllers: [m1_verification_byotp_auth_conform_controller_1.M1VerificationByotpAuthConformController],
        providers: [m1_verification_byotp_auth_conform_service_1.M1VerificationByotpAuthConformService]
    })
], M1VerificationByotpAuthConformModule);
//# sourceMappingURL=m1_verification_byotp_auth_conform.module.js.map