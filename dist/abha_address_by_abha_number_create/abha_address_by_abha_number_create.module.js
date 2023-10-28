"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbhaAddressByAbhaNumberCreateModule = void 0;
const common_1 = require("@nestjs/common");
const abha_address_by_abha_number_create_service_1 = require("./abha_address_by_abha_number_create.service");
const abha_address_by_abha_number_create_controller_1 = require("./abha_address_by_abha_number_create.controller");
let AbhaAddressByAbhaNumberCreateModule = class AbhaAddressByAbhaNumberCreateModule {
};
exports.AbhaAddressByAbhaNumberCreateModule = AbhaAddressByAbhaNumberCreateModule;
exports.AbhaAddressByAbhaNumberCreateModule = AbhaAddressByAbhaNumberCreateModule = __decorate([
    (0, common_1.Module)({
        controllers: [abha_address_by_abha_number_create_controller_1.AbhaAddressByAbhaNumberCreateController],
        providers: [abha_address_by_abha_number_create_service_1.AbhaAddressByAbhaNumberCreateService]
    })
], AbhaAddressByAbhaNumberCreateModule);
//# sourceMappingURL=abha_address_by_abha_number_create.module.js.map