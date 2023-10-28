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
exports.AbhaUpdateProfileController = void 0;
const common_1 = require("@nestjs/common");
const abha_update_profile_service_1 = require("./abha_update_profile.service");
let AbhaUpdateProfileController = class AbhaUpdateProfileController {
    constructor(m1ProfileUpdatePostService) {
        this.m1ProfileUpdatePostService = m1ProfileUpdatePostService;
    }
    async ProfileUpdatePost(refreshToken, data) {
        console.log(refreshToken, data, "jiniji");
        return await this.m1ProfileUpdatePostService.ProfileUpdatePost(refreshToken, data);
    }
};
exports.AbhaUpdateProfileController = AbhaUpdateProfileController;
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)('refreshToken')),
    __param(1, (0, common_1.Body)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AbhaUpdateProfileController.prototype, "ProfileUpdatePost", null);
exports.AbhaUpdateProfileController = AbhaUpdateProfileController = __decorate([
    (0, common_1.Controller)('abha_update_profile'),
    __metadata("design:paramtypes", [abha_update_profile_service_1.AbhaUpdateProfileService])
], AbhaUpdateProfileController);
//# sourceMappingURL=abha_update_profile.controller.js.map