import { Module } from '@nestjs/common';
import { DownloadAbhaCardPngcardService } from './download_abha_card_pngcard.service';
import { DownloadAbhaCardPngcardController } from './download_abha_card_pngcard.controller';

@Module({
  controllers: [DownloadAbhaCardPngcardController],
  providers: [DownloadAbhaCardPngcardService]
})
export class DownloadAbhaCardPngcardModule {}
