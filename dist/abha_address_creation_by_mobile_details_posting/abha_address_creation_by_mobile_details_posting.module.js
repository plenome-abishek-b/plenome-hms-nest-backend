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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbhaAddressCreationByMobileDetailsPostingModule = void 0;
const common_1 = require("@nestjs/common");
const abha_address_creation_by_mobile_details_posting_service_1 = require("./abha_address_creation_by_mobile_details_posting.service");
const abha_address_creation_by_mobile_details_posting_controller_1 = require("./abha_address_creation_by_mobile_details_posting.controller");
let AbhaAddressCreationByMobileDetailsPostingModule = class AbhaAddressCreationByMobileDetailsPostingModule {
    constructor() {
    }
};
exports.AbhaAddressCreationByMobileDetailsPostingModule = AbhaAddressCreationByMobileDetailsPostingModule;
exports.AbhaAddressCreationByMobileDetailsPostingModule = AbhaAddressCreationByMobileDetailsPostingModule = __decorate([
    (0, common_1.Module)({
        controllers: [abha_address_creation_by_mobile_details_posting_controller_1.AbhaAddressCreationByMobileDetailsPostingController],
        providers: [abha_address_creation_by_mobile_details_posting_service_1.AbhaAddressCreationByMobileDetailsPostingService],
        exports: [abha_address_creation_by_mobile_details_posting_service_1.AbhaAddressCreationByMobileDetailsPostingService]
    }),
    __metadata("design:paramtypes", [])
], AbhaAddressCreationByMobileDetailsPostingModule);
//# sourceMappingURL=abha_address_creation_by_mobile_details_posting.module.js.map