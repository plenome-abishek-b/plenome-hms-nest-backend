import { M1VerificationByotpMobileOtpInitService } from './m1_verification_byotp_mobile_otp_init.service';
export declare class M1VerificationByotpMobileOtpInitController {
    private readonly loginMobileAuthInitService;
    constructor(loginMobileAuthInitService: M1VerificationByotpMobileOtpInitService);
    FetchMode(authMode: string, abhaAddress: string, purpose: string, type: string, typeId: string): Promise<any>;
}
