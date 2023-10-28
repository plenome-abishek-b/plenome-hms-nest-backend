import { Controller, Get,  Body, Post,  } from '@nestjs/common';

import { DownloadAbhaCardQrcodeService } from './download_abha_card_qrcode.service';

@Controller('download_abha_card_qrcode')

export class DownloadAbhaCardQrcodeController {

  

  constructor(private readonly qrService: DownloadAbhaCardQrcodeService) {}

    

  @Post('/')

  async getQrCode(@Body('token') token: string) {

    return await this.qrService.getQrCode(token);

  }

}