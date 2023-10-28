export declare class AbhaAddressByAbhaNumberCreateService {
    constructor();
    generatePublicKey(): Promise<any>;
    getAccessToken(): Promise<any>;
    confirmCredentials(password: string, transactionId: string, alreadyExistedPHR: boolean, phrAddress: string): Promise<any>;
}
