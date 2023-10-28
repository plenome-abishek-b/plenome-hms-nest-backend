import { Module } from '@nestjs/common';
import { DownloadAbhaCardQrcodeService } from './download_abha_card_qrcode.service';
import { DownloadAbhaCardQrcodeController } from './download_abha_card_qrcode.controller';

@Module({
  controllers: [DownloadAbhaCardQrcodeController],
  providers: [DownloadAbhaCardQrcodeService]
})
export class DownloadAbhaCardQrcodeModule {}
