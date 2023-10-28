import { AbhaAddressCreationByMobileService } from './abha_address_creation_by_mobile.service';
export declare class AbhaAddressCreationByMobileController {
    private readonly createAbhaMobileService;
    constructor(createAbhaMobileService: AbhaAddressCreationByMobileService);
    createAbhaMobile(value: string): Promise<any>;
}
