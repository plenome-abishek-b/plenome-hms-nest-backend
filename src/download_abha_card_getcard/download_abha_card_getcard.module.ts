import { Module } from '@nestjs/common';
import { DownloadAbhaCardGetcardService } from './download_abha_card_getcard.service';
import { DownloadAbhaCardGetcardController } from './download_abha_card_getcard.controller';

@Module({
  controllers: [DownloadAbhaCardGetcardController],
  providers: [DownloadAbhaCardGetcardService]
})
export class DownloadAbhaCardGetcardModule {}
