import { AbhaAddressByAbhaNumberCreateService } from './abha_address_by_abha_number_create.service';
export declare class AbhaAddressByAbhaNumberCreateController {
    private readonly createPhrAddressService;
    constructor(createPhrAddressService: AbhaAddressByAbhaNumberCreateService);
    confirmCredentials(password: string, transactionId: string, alreadyExistedPHR: boolean, phrAddress: string): Promise<any>;
}
