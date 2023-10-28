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
exports.AbhaAddressByAbhaNumberConformCredentialController = void 0;
const common_1 = require("@nestjs/common");
const abha_address_by_abha_number_conform_credential_service_1 = require("./abha_address_by_abha_number_conform_credential.service");
let AbhaAddressByAbhaNumberConformCredentialController = class AbhaAddressByAbhaNumberConformCredentialController {
    constructor(confirmCredentialService) {
        this.confirmCredentialService = confirmCredentialService;
    }
    async confirmCredentials(value, transactionId) {
        return this.confirmCredentialService.confirmCredentials(value, transactionId);
    }
};
exports.AbhaAddressByAbhaNumberConformCredentialController = AbhaAddressByAbhaNumberConformCredentialController;
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)('value')),
    __param(1, (0, common_1.Body)('transactionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AbhaAddressByAbhaNumberConformCredentialController.prototype, "confirmCredentials", null);
exports.AbhaAddressByAbhaNumberConformCredentialController = AbhaAddressByAbhaNumberConformCredentialController = __decorate([
    (0, common_1.Controller)('abha_address_by_abha_number_conform_credential'),
    __metadata("design:paramtypes", [abha_address_by_abha_number_conform_credential_service_1.AbhaAddressByAbhaNumberConformCredentialService])
], AbhaAddressByAbhaNumberConformCredentialController);
//# sourceMappingURL=abha_address_by_abha_number_conform_credential.controller.js.map