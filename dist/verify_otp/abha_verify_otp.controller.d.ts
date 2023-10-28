import { AbhaVerifyOtpService } from './abha_verify_otp.service';
export declare class AbhaVerifyOtpController {
    private readonly m1VerifyOtpService;
    constructor(m1VerifyOtpService: AbhaVerifyOtpService);
    newVerifyOtp(otp: string, txnId: string): Promise<any>;
}
