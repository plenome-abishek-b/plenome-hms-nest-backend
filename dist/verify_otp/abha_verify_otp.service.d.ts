export declare class AbhaVerifyOtpService {
    constructor();
    generatePublicKey(): Promise<any>;
    getAccessToken(): Promise<any>;
    newVerifyOtp(otp: string, txnId: string): Promise<any>;
}
