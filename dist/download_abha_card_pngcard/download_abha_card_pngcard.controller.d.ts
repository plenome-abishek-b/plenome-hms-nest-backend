import { DownloadAbhaCardPngcardService } from './download_abha_card_pngcard.service';
export declare class DownloadAbhaCardPngcardController {
    private readonly cardService;
    constructor(cardService: DownloadAbhaCardPngcardService);
    getCard(token: string): Promise<string>;
}
