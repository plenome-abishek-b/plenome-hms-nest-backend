import { Controller, Get, Body, Post } from '@nestjs/common';

import { DownloadAbhaCardSvgcardService } from './download_abha_card_svgcard.service';

 

@Controller('download_abha_card_svgcard')

export class DownloadAbhaCardSvgcardController {

  

  constructor(private readonly cardService: DownloadAbhaCardSvgcardService) {}

 

  @Post('/')

  async getCard(@Body('token') token: string) {

      return await this.cardService.getQrCode(token);

  }

}