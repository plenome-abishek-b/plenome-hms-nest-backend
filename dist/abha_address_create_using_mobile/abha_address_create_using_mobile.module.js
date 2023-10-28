"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbhaAddressCreateUsingMobileModule = void 0;
const common_1 = require("@nestjs/common");
const abha_address_create_using_mobile_service_1 = require("./abha_address_create_using_mobile.service");
const abha_address_create_using_mobile_controller_1 = require("./abha_address_create_using_mobile.controller");
const config_1 = require("@nestjs/config");
let AbhaAddressCreateUsingMobileModule = class AbhaAddressCreateUsingMobileModule {
};
exports.AbhaAddressCreateUsingMobileModule = AbhaAddressCreateUsingMobileModule;
exports.AbhaAddressCreateUsingMobileModule = AbhaAddressCreateUsingMobileModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule],
        controllers: [abha_address_create_using_mobile_controller_1.AbhaAddressCreateUsingMobileController],
        providers: [abha_address_create_using_mobile_service_1.AbhaAddressCreateUsingMobileService]
    })
], AbhaAddressCreateUsingMobileModule);
//# sourceMappingURL=abha_address_create_using_mobile.module.js.map