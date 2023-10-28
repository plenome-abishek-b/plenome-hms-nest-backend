import { Controller, Get, Body, Post} from '@nestjs/common';

import { DownloadAbhaCardGetcardService } from './download_abha_card_getcard.service';

 

@Controller('download_abha_card_getcard')

export class DownloadAbhaCardGetcardController {

  

  constructor(private readonly cardService: DownloadAbhaCardGetcardService) {}

 

  @Post('/')

  async getCard(@Body('token') token: string) {

      return await this.cardService.getQrCode(token);

  }

}