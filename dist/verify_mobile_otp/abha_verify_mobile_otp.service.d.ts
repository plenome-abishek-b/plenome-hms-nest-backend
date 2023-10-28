export declare class AbhaVerifyMobileOtpService {
    constructor();
    generatePublicKey(): Promise<any>;
    getAccessToken(): Promise<any>;
    VerifyMobileOtp(otp: string, txnId: string): Promise<any>;
}
