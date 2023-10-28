import { ConfigService } from '@nestjs/config';
export declare class AbhaAddressCreationByMobileService {
    private readonly configService;
    constructor(configService: ConfigService);
    pulicKeygentation(): Promise<any>;
    getToken(): Promise<any>;
    createAbhaMobileService(value: string): Promise<any>;
}
