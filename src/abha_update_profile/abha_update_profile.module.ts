import { Module } from '@nestjs/common';
import { AbhaUpdateProfileService } from './abha_update_profile.service';
import { AbhaUpdateProfileController } from './abha_update_profile.controller';

@Module({
  controllers: [AbhaUpdateProfileController],
  providers: [AbhaUpdateProfileService]
})
export class AbhaUpdateProfileModule {}
