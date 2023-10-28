import { AbhaGenerateOtpService } from './abha_generate_otp.service';
export declare class AbhaGenerateOtpController {
    private readonly m1Service;
    constructor(m1Service: AbhaGenerateOtpService);
    generateOtp(adharNumber: string): Promise<any>;
}
