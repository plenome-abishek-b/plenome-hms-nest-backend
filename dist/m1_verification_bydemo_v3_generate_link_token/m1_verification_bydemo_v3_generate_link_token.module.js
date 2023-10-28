"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.M1VerificationBydemoV3GenerateLinkTokenModule = void 0;
const common_1 = require("@nestjs/common");
const m1_verification_bydemo_v3_generate_link_token_service_1 = require("./m1_verification_bydemo_v3_generate_link_token.service");
const m1_verification_bydemo_v3_generate_link_token_controller_1 = require("./m1_verification_bydemo_v3_generate_link_token.controller");
let M1VerificationBydemoV3GenerateLinkTokenModule = class M1VerificationBydemoV3GenerateLinkTokenModule {
};
exports.M1VerificationBydemoV3GenerateLinkTokenModule = M1VerificationBydemoV3GenerateLinkTokenModule;
exports.M1VerificationBydemoV3GenerateLinkTokenModule = M1VerificationBydemoV3GenerateLinkTokenModule = __decorate([
    (0, common_1.Module)({
        controllers: [m1_verification_bydemo_v3_generate_link_token_controller_1.M1VerificationBydemoV3GenerateLinkTokenController],
        providers: [m1_verification_bydemo_v3_generate_link_token_service_1.M1VerificationBydemoV3GenerateLinkTokenService]
    })
], M1VerificationBydemoV3GenerateLinkTokenModule);
//# sourceMappingURL=m1_verification_bydemo_v3_generate_link_token.module.js.map