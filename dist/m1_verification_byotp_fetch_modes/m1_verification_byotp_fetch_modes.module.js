"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.M1VerificationByotpFetchModesModule = void 0;
const common_1 = require("@nestjs/common");
const m1_verification_byotp_fetch_modes_service_1 = require("./m1_verification_byotp_fetch_modes.service");
const m1_verification_byotp_fetch_modes_controller_1 = require("./m1_verification_byotp_fetch_modes.controller");
let M1VerificationByotpFetchModesModule = class M1VerificationByotpFetchModesModule {
};
exports.M1VerificationByotpFetchModesModule = M1VerificationByotpFetchModesModule;
exports.M1VerificationByotpFetchModesModule = M1VerificationByotpFetchModesModule = __decorate([
    (0, common_1.Module)({
        controllers: [m1_verification_byotp_fetch_modes_controller_1.M1VerificationByotpFetchModesController],
        providers: [m1_verification_byotp_fetch_modes_service_1.M1VerificationByotpFetchModesService]
    })
], M1VerificationByotpFetchModesModule);
//# sourceMappingURL=m1_verification_byotp_fetch_modes.module.js.map