import { AbhaAddressCreationByMobileDetailsPostingService } from './abha_address_creation_by_mobile_details_posting.service';
export declare class AbhaAddressCreationByMobileDetailsPostingController {
    private readonly mobileCreateAbhaDetailsService;
    constructor(mobileCreateAbhaDetailsService: AbhaAddressCreationByMobileDetailsPostingService);
    mobileCreateAbhaDetails(address: string, countryCode: string, dayOfBirth: string, districtCode: string, email: string, firstName: string, gender: string, lastName: string, middleName: string, mobile: string, monthOfBirth: string, pinCode: string, stateCode: string, transactionId: string, yearOfBirth: string): Promise<any>;
}
