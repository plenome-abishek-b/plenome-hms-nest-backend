import { DownloadAbhaCardSvgcardService } from './download_abha_card_svgcard.service';
export declare class DownloadAbhaCardSvgcardController {
    private readonly cardService;
    constructor(cardService: DownloadAbhaCardSvgcardService);
    getCard(token: string): Promise<string>;
}
