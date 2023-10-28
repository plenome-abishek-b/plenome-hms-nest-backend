import { AbhaAddressExixtsCheckingService } from './abha_address_exixts_checking.service';
export declare class AbhaAddressExixtsCheckingController {
    private readonly phrAddressExistsService;
    constructor(phrAddressExistsService: AbhaAddressExixtsCheckingService);
    PhrAuthMethods(phrAddressExists: string): Promise<any>;
}
