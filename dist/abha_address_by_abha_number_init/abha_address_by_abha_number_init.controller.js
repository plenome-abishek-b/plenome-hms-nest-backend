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
exports.AbhaAddressByAbhaNumberInitController = void 0;
const common_1 = require("@nestjs/common");
const abha_address_by_abha_number_init_service_1 = require("./abha_address_by_abha_number_init.service");
let AbhaAddressByAbhaNumberInitController = class AbhaAddressByAbhaNumberInitController {
    constructor(phrAuthmethodservices) {
        this.phrAuthmethodservices = phrAuthmethodservices;
    }
    async PhrAuthMethodsService(authMethod, healhtIdNumber) {
        console.log(healhtIdNumber, "this is the health id number", authMethod, ":this is your authmethod");
        return this.phrAuthmethodservices.PhrtransactionMethods(authMethod, healhtIdNumber);
    }
};
exports.AbhaAddressByAbhaNumberInitController = AbhaAddressByAbhaNumberInitController;
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)('authMethod')),
    __param(1, (0, common_1.Body)('healhtIdNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AbhaAddressByAbhaNumberInitController.prototype, "PhrAuthMethodsService", null);
exports.AbhaAddressByAbhaNumberInitController = AbhaAddressByAbhaNumberInitController = __decorate([
    (0, common_1.Controller)('abha_address_by_abha_number_init'),
    __metadata("design:paramtypes", [abha_address_by_abha_number_init_service_1.AbhaAddressByAbhaNumberInitService])
], AbhaAddressByAbhaNumberInitController);
//# sourceMappingURL=abha_address_by_abha_number_init.controller.js.map