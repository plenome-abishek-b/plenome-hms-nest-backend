"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.M1VerificationScanHealthFacilityQrModule = void 0;
const common_1 = require("@nestjs/common");
const m1_verification_scan_health_facility_qr_service_1 = require("./m1_verification_scan_health_facility_qr.service");
const m1_verification_scan_health_facility_qr_controller_1 = require("./m1_verification_scan_health_facility_qr.controller");
let M1VerificationScanHealthFacilityQrModule = class M1VerificationScanHealthFacilityQrModule {
};
exports.M1VerificationScanHealthFacilityQrModule = M1VerificationScanHealthFacilityQrModule;
exports.M1VerificationScanHealthFacilityQrModule = M1VerificationScanHealthFacilityQrModule = __decorate([
    (0, common_1.Module)({
        controllers: [m1_verification_scan_health_facility_qr_controller_1.M1VerificationScanHealthFacilityQrController],
        providers: [m1_verification_scan_health_facility_qr_service_1.M1VerificationScanHealthFacilityQrService],
    })
], M1VerificationScanHealthFacilityQrModule);
//# sourceMappingURL=m1_verification_scan_health_facility_qr.module.js.map