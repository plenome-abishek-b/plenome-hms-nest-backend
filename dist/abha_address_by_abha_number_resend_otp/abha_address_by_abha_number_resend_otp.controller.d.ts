import { AbhaAddressByAbhaNumberResendOtpService } from './abha_address_by_abha_number_resend_otp.service';
export declare class AbhaAddressByAbhaNumberResendOtpController {
    private readonly phrResendOtpmethodservices;
    constructor(phrResendOtpmethodservices: AbhaAddressByAbhaNumberResendOtpService);
    PhrAuthMethodsService(transactionId: string): Promise<any>;
}
