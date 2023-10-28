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
exports.DownloadAbhaCardPngcardController = void 0;
const common_1 = require("@nestjs/common");
const download_abha_card_pngcard_service_1 = require("./download_abha_card_pngcard.service");
let DownloadAbhaCardPngcardController = class DownloadAbhaCardPngcardController {
    constructor(cardService) {
        this.cardService = cardService;
    }
    async getCard(token) {
        return await this.cardService.getQrCode(token);
    }
};
exports.DownloadAbhaCardPngcardController = DownloadAbhaCardPngcardController;
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DownloadAbhaCardPngcardController.prototype, "getCard", null);
exports.DownloadAbhaCardPngcardController = DownloadAbhaCardPngcardController = __decorate([
    (0, common_1.Controller)('download_abha_card_pngcard'),
    __metadata("design:paramtypes", [download_abha_card_pngcard_service_1.DownloadAbhaCardPngcardService])
], DownloadAbhaCardPngcardController);
//# sourceMappingURL=download_abha_card_pngcard.controller.js.map