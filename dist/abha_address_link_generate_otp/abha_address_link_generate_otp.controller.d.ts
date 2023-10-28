import { AbhaAddressLinkGenerateOtpService } from './abha_address_link_generate_otp.service';
export declare class AbhaAddressLinkGenerateOtpController {
    private readonly service;
    constructor(service: AbhaAddressLinkGenerateOtpService);
    Unlink_LinktransactionMethods(authMethod: string, healhtIdNumber: string): Promise<any>;
}
