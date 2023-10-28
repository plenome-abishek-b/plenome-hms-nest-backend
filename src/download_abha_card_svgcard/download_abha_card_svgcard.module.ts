import { Module } from '@nestjs/common';
import { DownloadAbhaCardSvgcardService } from './download_abha_card_svgcard.service';
import { DownloadAbhaCardSvgcardController } from './download_abha_card_svgcard.controller';

@Module({
  controllers: [DownloadAbhaCardSvgcardController],
  providers: [DownloadAbhaCardSvgcardService]
})
export class DownloadAbhaCardSvgcardModule {}
