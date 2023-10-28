import { AbhaAddressByAbhaNumberAuthMethodsService } from './abha_address_by_abha_number_auth_methods.service';
export declare class AbhaAddressByAbhaNumberAuthMethodsController {
    private readonly phrAuthmethodservices;
    constructor(phrAuthmethodservices: AbhaAddressByAbhaNumberAuthMethodsService);
    PhrAuthMethodsService(healhtIdNumber: string): Promise<any>;
}
