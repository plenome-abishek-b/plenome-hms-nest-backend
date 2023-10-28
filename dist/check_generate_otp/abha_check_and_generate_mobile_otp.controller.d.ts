import { AbhaCheckAndGenerateMobileOtpService } from './abha_check_and_generate_mobile_otp.service';
export declare class AbhaCheckAndGenerateMobileOtpController {
    private readonly m1Service;
    constructor(m1Service: AbhaCheckAndGenerateMobileOtpService);
    checkAndGenerateMobileOTP(mobile: number, txnId: string): Promise<any>;
}
