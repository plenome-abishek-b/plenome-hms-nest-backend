import { AbhaCreateHealthIdByAadharService } from './abha_create_health_id_by_aadhar.service';
export declare class AbhaCreateHealthIdByAadharController {
    private readonly m1CreateHealthIdByAdhaarService;
    constructor(m1CreateHealthIdByAdhaarService: AbhaCreateHealthIdByAadharService);
    createHealthIdByAdhaar(consent: boolean, consentVersion: string, txnId: string): Promise<any>;
}
