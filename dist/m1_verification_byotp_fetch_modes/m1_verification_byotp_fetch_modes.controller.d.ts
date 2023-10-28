import { M1VerificationByotpFetchModesService } from './m1_verification_byotp_fetch_modes.service';
export declare class M1VerificationByotpFetchModesController {
    private readonly loginMobileAuthInitService;
    constructor(loginMobileAuthInitService: M1VerificationByotpFetchModesService);
    FetchMode(abhaAddress: string, purpose: string, type: string, typeId: string): Promise<any>;
}
