import { ConfigService } from '@nestjs/config';
export declare class AbhaGenerateOtpService {
    private readonly configService;
    constructor(configService: ConfigService);
    pulicKeygentation(): Promise<any>;
    getToken(): Promise<any>;
    generateOtp(adharNumber: string): Promise<any>;
}
