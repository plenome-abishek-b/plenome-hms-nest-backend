/// <reference types="node" />
export declare class DownloadAbhaCardPngcardService {
    constructor();
    getAccessToken(): Promise<any>;
    imageToBase64(imageBuffer: Buffer): Promise<string>;
    getQrCode(token: string): Promise<string>;
}
