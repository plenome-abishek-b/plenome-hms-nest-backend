import { AbhaAddressCreationByMobileResendOtpService } from './abha_address_creation_by_mobile_resend_otp.service';
export declare class AbhaAddressCreationByMobileResendOtpController {
    private readonly resendOtpService;
    constructor(resendOtpService: AbhaAddressCreationByMobileResendOtpService);
    createAbhaMobileTxnService(transactionId: string): Promise<any>;
}
