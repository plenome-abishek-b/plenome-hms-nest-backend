export declare class AbhaAddressCreationByMobileVerifyOtpService {
    constructor();
    generatePublicKey(): Promise<any>;
    getAccessToken(): Promise<any>;
    newVerifyOtp(otp: string, transactionId: string): Promise<{
        data: any;
        token: any;
    }[]>;
}
