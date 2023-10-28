import { M1VerificationByotpAuthConformService } from './m1_verification_byotp_auth_conform.service';
export declare class M1VerificationByotpAuthConformController {
    private readonly loginMobileAuthInitService;
    constructor(loginMobileAuthInitService: M1VerificationByotpAuthConformService);
    FetchMode(txnId: string, authcode: string): Promise<any>;
}
