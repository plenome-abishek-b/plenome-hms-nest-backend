export declare class AbhaAddressByAbhaNumberConformCredentialService {
    constructor();
    generatePublicKey(): Promise<any>;
    getAccessToken(): Promise<any>;
    confirmCredentials(value: string, transactionId: string): Promise<any>;
}
