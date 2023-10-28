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
exports.AbhaAddressCreationByMobileController = void 0;
const common_1 = require("@nestjs/common");
const abha_address_creation_by_mobile_service_1 = require("./abha_address_creation_by_mobile.service");
let AbhaAddressCreationByMobileController = class AbhaAddressCreationByMobileController {
    constructor(createAbhaMobileService) {
        this.createAbhaMobileService = createAbhaMobileService;
    }
    async createAbhaMobile(value) {
        console.log(value);
        return this.createAbhaMobileService.createAbhaMobileService(value);
    }
};
exports.AbhaAddressCreationByMobileController = AbhaAddressCreationByMobileController;
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AbhaAddressCreationByMobileController.prototype, "createAbhaMobile", null);
exports.AbhaAddressCreationByMobileController = AbhaAddressCreationByMobileController = __decorate([
    (0, common_1.Controller)('abha_address_creation_by_mobile'),
    __metadata("design:paramtypes", [abha_address_creation_by_mobile_service_1.AbhaAddressCreationByMobileService])
], AbhaAddressCreationByMobileController);
//# sourceMappingURL=abha_address_creation_by_mobile.controller.js.map