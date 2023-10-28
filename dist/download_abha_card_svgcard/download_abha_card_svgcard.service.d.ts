/// <reference types="node" />
export declare class DownloadAbhaCardSvgcardService {
    constructor();
    getAccessToken(): Promise<any>;
    convertSvgToBase64(svgData: Buffer): Promise<string>;
    getQrCode(token: string): Promise<string>;
}
