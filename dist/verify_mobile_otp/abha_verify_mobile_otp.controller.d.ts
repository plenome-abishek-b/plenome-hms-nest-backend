import { AbhaVerifyMobileOtpService } from './abha_verify_mobile_otp.service';
export declare class AbhaVerifyMobileOtpController {
    private readonly m1VerifyMobileOtpService;
    constructor(m1VerifyMobileOtpService: AbhaVerifyMobileOtpService);
    VerifyMobileOtp(otp: string, txnId: string): Promise<any>;
}
