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
exports.AbhaCreateHealthIdByAadharController = void 0;
const common_1 = require("@nestjs/common");
const abha_create_health_id_by_aadhar_service_1 = require("./abha_create_health_id_by_aadhar.service");
let AbhaCreateHealthIdByAadharController = class AbhaCreateHealthIdByAadharController {
    constructor(m1CreateHealthIdByAdhaarService) {
        this.m1CreateHealthIdByAdhaarService = m1CreateHealthIdByAdhaarService;
    }
    async createHealthIdByAdhaar(consent, consentVersion, txnId) {
        console.log(consent, consentVersion, txnId, "ge");
        return await this.m1CreateHealthIdByAdhaarService.CreateHealthIdBYAadhaar(consent, consentVersion, txnId);
    }
};
exports.AbhaCreateHealthIdByAadharController = AbhaCreateHealthIdByAadharController;
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)('consent')),
    __param(1, (0, common_1.Body)('consentVersion')),
    __param(2, (0, common_1.Body)('txnId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, String, String]),
    __metadata("design:returntype", Promise)
], AbhaCreateHealthIdByAadharController.prototype, "createHealthIdByAdhaar", null);
exports.AbhaCreateHealthIdByAadharController = AbhaCreateHealthIdByAadharController = __decorate([
    (0, common_1.Controller)('abha_create_health_id_by_aadhar'),
    __metadata("design:paramtypes", [abha_create_health_id_by_aadhar_service_1.AbhaCreateHealthIdByAadharService])
], AbhaCreateHealthIdByAadharController);
//# sourceMappingURL=abha_create_health_id_by_aadhar.controller.js.map