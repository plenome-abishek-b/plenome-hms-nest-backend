import { AbhaAddressByAbhaNumberInitService } from './abha_address_by_abha_number_init.service';
export declare class AbhaAddressByAbhaNumberInitController {
    private readonly phrAuthmethodservices;
    constructor(phrAuthmethodservices: AbhaAddressByAbhaNumberInitService);
    PhrAuthMethodsService(authMethod: string, healhtIdNumber: string): Promise<any>;
}
