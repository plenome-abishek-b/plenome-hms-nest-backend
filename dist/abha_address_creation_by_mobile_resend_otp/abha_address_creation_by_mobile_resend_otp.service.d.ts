import { ConfigService } from '@nestjs/config';
export declare class AbhaAddressCreationByMobileResendOtpService {
    private readonly configService;
    constructor(configService: ConfigService);
    getToken(): Promise<any>;
    createAbhaMobileTxnService(transactionId: string): Promise<any>;
}
