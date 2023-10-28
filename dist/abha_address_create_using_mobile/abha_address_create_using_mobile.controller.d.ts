import { AbhaAddressCreateUsingMobileService } from './abha_address_create_using_mobile.service';
export declare class AbhaAddressCreateUsingMobileController {
    private readonly createPhrAddressService;
    constructor(createPhrAddressService: AbhaAddressCreateUsingMobileService);
    confirmCredentials(password: string, transactionId: string, phrAddress: string): Promise<any>;
}
