import { DownloadAbhaCardQrcodeService } from './download_abha_card_qrcode.service';
export declare class DownloadAbhaCardQrcodeController {
    private readonly qrService;
    constructor(qrService: DownloadAbhaCardQrcodeService);
    getQrCode(token: string): Promise<string>;
}
