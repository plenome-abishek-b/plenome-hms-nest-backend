import { Controller, Post, Body} from '@nestjs/common';
import { AbhaUpdateProfileService } from './abha_update_profile.service';

@Controller('abha_update_profile')
export class AbhaUpdateProfileController {
 
    constructor(private readonly m1ProfileUpdatePostService: AbhaUpdateProfileService) {}
  
    @Post('/')
    async ProfileUpdatePost(@Body('refreshToken') refreshToken: string, @Body('data') data: any) {
      console.log(refreshToken,data,"jiniji")
      return await this.m1ProfileUpdatePostService.ProfileUpdatePost(refreshToken, data);
    }
}
