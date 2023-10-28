import { DownloadAbhaCardGetcardService } from './download_abha_card_getcard.service';
export declare class DownloadAbhaCardGetcardController {
    private readonly cardService;
    constructor(cardService: DownloadAbhaCardGetcardService);
    getCard(token: string): Promise<any[]>;
}
