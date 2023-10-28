/// <reference types="node" />
export declare class DownloadAbhaCardGetcardService {
    constructor();
    getAccessToken(): Promise<any>;
    convertPdfToImages(pdfBuffer: Buffer): Promise<string[]>;
    imageToBase64(imagePath: string): Promise<string>;
    getQrCode(token: string): Promise<any[]>;
}
