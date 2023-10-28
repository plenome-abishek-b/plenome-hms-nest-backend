export declare class AbhaAddressLinkOtpVerifyService {
    constructor();
    generatePublicKey(): Promise<any>;
    getAccessToken(): Promise<any>;
    link_unlink_VerifyOtp(otp: string, transactionId: string): Promise<any>;
}
