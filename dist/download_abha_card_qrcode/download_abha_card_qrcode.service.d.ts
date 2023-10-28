/// <reference types="node" />
export declare class DownloadAbhaCardQrcodeService {
    constructor();
    getAccessToken(): Promise<any>;
    imageToBase64(imageBuffer: Buffer): Promise<string>;
    getQrCode(token: string): Promise<string>;
}
