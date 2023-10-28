export declare class AbhaAddressCreationByMobileDetailsPostingService {
    constructor();
    generatePublicKey(): Promise<any>;
    getAccessToken(): Promise<any>;
    mobileCreateAbhaDetailsService(address: string, countryCode: string, dayOfBirth: string, districtCode: string, email: string, firstName: string, gender: string, lastName: string, middleName: string, mobile: string, monthOfBirth: string, pinCode: string, stateCode: string, transactionId: string, yearOfBirth: string): Promise<any>;
}
