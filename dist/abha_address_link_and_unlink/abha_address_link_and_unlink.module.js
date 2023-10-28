"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbhaAddressLinkAndUnlinkModule = void 0;
const common_1 = require("@nestjs/common");
const abha_address_link_and_unlink_service_1 = require("./abha_address_link_and_unlink.service");
const abha_address_link_and_unlink_controller_1 = require("./abha_address_link_and_unlink.controller");
let AbhaAddressLinkAndUnlinkModule = class AbhaAddressLinkAndUnlinkModule {
};
exports.AbhaAddressLinkAndUnlinkModule = AbhaAddressLinkAndUnlinkModule;
exports.AbhaAddressLinkAndUnlinkModule = AbhaAddressLinkAndUnlinkModule = __decorate([
    (0, common_1.Module)({
        controllers: [abha_address_link_and_unlink_controller_1.AbhaAddressLinkAndUnlinkController],
        providers: [abha_address_link_and_unlink_service_1.AbhaAddressLinkAndUnlinkService]
    })
], AbhaAddressLinkAndUnlinkModule);
//# sourceMappingURL=abha_address_link_and_unlink.module.js.map