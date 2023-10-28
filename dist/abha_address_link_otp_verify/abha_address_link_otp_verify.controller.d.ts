import { AbhaAddressLinkOtpVerifyService } from './abha_address_link_otp_verify.service';
export declare class AbhaAddressLinkOtpVerifyController {
    private readonly service;
    constructor(service: AbhaAddressLinkOtpVerifyService);
    verifyOtp(body: {
        otp: string;
        transactionId: string;
    }): Promise<any>;
}
