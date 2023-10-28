import { AbhaAddressCreationByMobileVerifyOtpService } from './abha_address_creation_by_mobile_verify_otp.service';
export declare class AbhaAddressCreationByMobileVerifyOtpController {
    private readonly mobileOtpService;
    constructor(mobileOtpService: AbhaAddressCreationByMobileVerifyOtpService);
    newVerifyOtp(otp: string, transactionId: string): Promise<{
        data: any;
        token: any;
    }[]>;
}
