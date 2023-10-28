"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbhaAddressCreationByMobileModule = void 0;
const common_1 = require("@nestjs/common");
const abha_address_creation_by_mobile_service_1 = require("./abha_address_creation_by_mobile.service");
const abha_address_creation_by_mobile_controller_1 = require("./abha_address_creation_by_mobile.controller");
const config_1 = require("@nestjs/config");
let AbhaAddressCreationByMobileModule = class AbhaAddressCreationByMobileModule {
};
exports.AbhaAddressCreationByMobileModule = AbhaAddressCreationByMobileModule;
exports.AbhaAddressCreationByMobileModule = AbhaAddressCreationByMobileModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule],
        controllers: [abha_address_creation_by_mobile_controller_1.AbhaAddressCreationByMobileController],
        providers: [abha_address_creation_by_mobile_service_1.AbhaAddressCreationByMobileService]
    })
], AbhaAddressCreationByMobileModule);
//# sourceMappingURL=abha_address_creation_by_mobile.module.js.map