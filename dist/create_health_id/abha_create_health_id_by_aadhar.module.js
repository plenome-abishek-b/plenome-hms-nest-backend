"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbhaCreateHealthIdByAadharModule = void 0;
const common_1 = require("@nestjs/common");
const abha_create_health_id_by_aadhar_service_1 = require("./abha_create_health_id_by_aadhar.service");
const abha_create_health_id_by_aadhar_controller_1 = require("./abha_create_health_id_by_aadhar.controller");
let AbhaCreateHealthIdByAadharModule = class AbhaCreateHealthIdByAadharModule {
};
exports.AbhaCreateHealthIdByAadharModule = AbhaCreateHealthIdByAadharModule;
exports.AbhaCreateHealthIdByAadharModule = AbhaCreateHealthIdByAadharModule = __decorate([
    (0, common_1.Module)({
        controllers: [abha_create_health_id_by_aadhar_controller_1.AbhaCreateHealthIdByAadharController],
        providers: [abha_create_health_id_by_aadhar_service_1.AbhaCreateHealthIdByAadharService]
    })
], AbhaCreateHealthIdByAadharModule);
//# sourceMappingURL=abha_create_health_id_by_aadhar.module.js.map