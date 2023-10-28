import { AbhaGetProfileService } from './abha_get_profile.service';
export declare class AbhaGetProfileController {
    private readonly m1ProfileUpdateService;
    constructor(m1ProfileUpdateService: AbhaGetProfileService);
    getProfile(refreshToken: string): Promise<any>;
}
