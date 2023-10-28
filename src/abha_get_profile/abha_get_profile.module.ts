import { Module } from '@nestjs/common';
import { AbhaGetProfileService } from './abha_get_profile.service';
import { AbhaGetProfileController } from './abha_get_profile.controller';

@Module({
  controllers: [AbhaGetProfileController],
  providers: [AbhaGetProfileService]
})
export class AbhaGetProfileModule {}
