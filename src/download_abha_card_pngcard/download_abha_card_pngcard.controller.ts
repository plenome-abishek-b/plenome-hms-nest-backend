import { Controller, Get, Body, Post} from '@nestjs/common';

import { DownloadAbhaCardPngcardService } from './download_abha_card_pngcard.service';

@Controller('download_abha_card_pngcard')

export class DownloadAbhaCardPngcardController {

  constructor(private readonly cardService: DownloadAbhaCardPngcardService) {}

 

  @Post('/')

  async getCard(@Body('token') token: string) {

      return await this.cardService.getQrCode(token);

  }

}