export declare class AbhaCheckAndGenerateMobileOtpService {
    constructor();
    getAccessToken(): Promise<any>;
    checkAndGenerateMobileOTP(mobile: number, txnId: string): Promise<any>;
}
