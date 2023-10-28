"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbhaGetProfileModule = void 0;
const common_1 = require("@nestjs/common");
const abha_get_profile_service_1 = require("./abha_get_profile.service");
const abha_get_profile_controller_1 = require("./abha_get_profile.controller");
let AbhaGetProfileModule = class AbhaGetProfileModule {
};
exports.AbhaGetProfileModule = AbhaGetProfileModule;
exports.AbhaGetProfileModule = AbhaGetProfileModule = __decorate([
    (0, common_1.Module)({
        controllers: [abha_get_profile_controller_1.AbhaGetProfileController],
        providers: [abha_get_profile_service_1.AbhaGetProfileService]
    })
], AbhaGetProfileModule);
//# sourceMappingURL=abha_get_profile.module.js.map