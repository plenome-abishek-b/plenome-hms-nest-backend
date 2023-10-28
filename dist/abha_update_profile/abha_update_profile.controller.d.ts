import { AbhaUpdateProfileService } from './abha_update_profile.service';
export declare class AbhaUpdateProfileController {
    private readonly m1ProfileUpdatePostService;
    constructor(m1ProfileUpdatePostService: AbhaUpdateProfileService);
    ProfileUpdatePost(refreshToken: string, data: any): Promise<any>;
}
