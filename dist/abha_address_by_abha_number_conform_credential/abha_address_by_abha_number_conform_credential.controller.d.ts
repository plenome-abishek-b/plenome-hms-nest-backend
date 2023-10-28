import { AbhaAddressByAbhaNumberConformCredentialService } from './abha_address_by_abha_number_conform_credential.service';
export declare class AbhaAddressByAbhaNumberConformCredentialController {
    private readonly confirmCredentialService;
    constructor(confirmCredentialService: AbhaAddressByAbhaNumberConformCredentialService);
    confirmCredentials(value: string, transactionId: string): Promise<any>;
}
