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
exports.AbhaAddressCreateUsingMobileController = void 0;
const common_1 = require("@nestjs/common");
const abha_address_create_using_mobile_service_1 = require("./abha_address_create_using_mobile.service");
let AbhaAddressCreateUsingMobileController = class AbhaAddressCreateUsingMobileController {
    constructor(createPhrAddressService) {
        this.createPhrAddressService = createPhrAddressService;
    }
    async confirmCredentials(password, transactionId, phrAddress) {
        return this.createPhrAddressService.confirmCredentials(password, transactionId, phrAddress);
    }
};
exports.AbhaAddressCreateUsingMobileController = AbhaAddressCreateUsingMobileController;
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)('password')),
    __param(1, (0, common_1.Body)('transactionId')),
    __param(2, (0, common_1.Body)('phrAddress')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AbhaAddressCreateUsingMobileController.prototype, "confirmCredentials", null);
exports.AbhaAddressCreateUsingMobileController = AbhaAddressCreateUsingMobileController = __decorate([
    (0, common_1.Controller)('abha_address_create_using_mobile'),
    __metadata("design:paramtypes", [abha_address_create_using_mobile_service_1.AbhaAddressCreateUsingMobileService])
], AbhaAddressCreateUsingMobileController);
//# sourceMappingURL=abha_address_create_using_mobile.controller.js.map