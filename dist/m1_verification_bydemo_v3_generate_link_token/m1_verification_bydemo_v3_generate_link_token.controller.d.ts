import { M1VerificationBydemoV3GenerateLinkTokenService } from './m1_verification_bydemo_v3_generate_link_token.service';
export declare class M1VerificationBydemoV3GenerateLinkTokenController {
    private readonly loginMobileAuthInitService;
    constructor(loginMobileAuthInitService: M1VerificationBydemoV3GenerateLinkTokenService);
    FetchMode(abhaNumber: number, abhaAddress: string, name: string, gender: string, yearOfBirth: string): Promise<any>;
}
