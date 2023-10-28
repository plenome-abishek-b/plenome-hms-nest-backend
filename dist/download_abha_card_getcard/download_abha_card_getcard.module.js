"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadAbhaCardGetcardModule = void 0;
const common_1 = require("@nestjs/common");
const download_abha_card_getcard_service_1 = require("./download_abha_card_getcard.service");
const download_abha_card_getcard_controller_1 = require("./download_abha_card_getcard.controller");
let DownloadAbhaCardGetcardModule = class DownloadAbhaCardGetcardModule {
};
exports.DownloadAbhaCardGetcardModule = DownloadAbhaCardGetcardModule;
exports.DownloadAbhaCardGetcardModule = DownloadAbhaCardGetcardModule = __decorate([
    (0, common_1.Module)({
        controllers: [download_abha_card_getcard_controller_1.DownloadAbhaCardGetcardController],
        providers: [download_abha_card_getcard_service_1.DownloadAbhaCardGetcardService]
    })
], DownloadAbhaCardGetcardModule);
//# sourceMappingURL=download_abha_card_getcard.module.js.map