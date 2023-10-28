import { AbhaAddressCreationByMobileAbhaAdressSuggestionService } from './abha_address_creation_by_mobile_abha_adress_suggestion.service';
export declare class AbhaAddressCreationByMobileAbhaAdressSuggestionController {
    private readonly phrSuggestionService;
    constructor(phrSuggestionService: AbhaAddressCreationByMobileAbhaAdressSuggestionService);
    verifyMobileOtp(transactionId: string): Promise<any>;
}
