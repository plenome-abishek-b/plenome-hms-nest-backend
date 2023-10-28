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
exports.DownloadAbhaCardGetcardService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const child_process_1 = require("child_process");
const fs = require("fs");
const os = require("os");
let DownloadAbhaCardGetcardService = class DownloadAbhaCardGetcardService {
    constructor() { }
    async getAccessToken() {
        const data = {
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            grantType: 'client_credentials',
        };
        const accessTokenUrl = 'https://dev.abdm.gov.in/gateway/v0.5/sessions';
        const response = await axios_1.default.post(accessTokenUrl, data);
        return response.data.accessToken;
    }
    async convertPdfToImages(pdfBuffer) {
        const tmpDir = os.tmpdir();
        const pdfFilePath = `${tmpDir}/input.pdf`;
        fs.writeFileSync(pdfFilePath, pdfBuffer);
        return new Promise((resolve, reject) => {
            (0, child_process_1.exec)(`pdftoppm ${pdfFilePath} ${tmpDir}/output -png`, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                }
                else {
                    const imagePaths = fs.readdirSync(tmpDir).filter(file => file.startsWith('output'));
                    resolve(imagePaths.map(imagePath => `${tmpDir}/${imagePath}`));
                }
            });
        });
    }
    async imageToBase64(imagePath) {
        const imageBuffer = fs.readFileSync(imagePath);
        return imageBuffer.toString('base64');
    }
    async getQrCode(token) {
        try {
            const accessToken = await this.getAccessToken();
            const headers = {
                'accept': 'image/png',
                'Connection': 'keep-alive',
                'Accept-Language': 'en-US',
                'Content-Type': 'application/json',
                'X-Token': `Bearer ${token}`,
                'Authorization': `Bearer ${accessToken}`,
            };
            const getCardURL = 'https://healthidsbx.abdm.gov.in/api/v1/account/getCard';
            const response = await axios_1.default.get(getCardURL, {
                headers,
                responseType: 'arraybuffer',
            });
            const imagePaths = await this.convertPdfToImages(response.data);
            const base64Images = [];
            for (const imagePath of imagePaths) {
                const base64Image = await this.imageToBase64(imagePath);
                base64Images.push(base64Image);
            }
            return base64Images;
        }
        catch (error) {
            console.error("Error in getQrCode:", error);
            throw error;
        }
    }
};
exports.DownloadAbhaCardGetcardService = DownloadAbhaCardGetcardService;
exports.DownloadAbhaCardGetcardService = DownloadAbhaCardGetcardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], DownloadAbhaCardGetcardService);
//# sourceMappingURL=download_abha_card_getcard.service.js.map