import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AbhaGenerateOtpModule } from './generate_otp/abha_generate_otp.module';
import { AbhaVerifyOtpModule } from './verify_otp/abha_verify_otp.module';
import { AbhaVerifyMobileOtpModule } from './verify_mobile_otp/abha_verify_mobile_otp.module';
import { AbhaCheckAndGenerateMobileOtpModule } from './check_generate_otp/abha_check_and_generate_mobile_otp.module';
import { AbhaCreateHealthIdByAadharModule } from './create_health_id/abha_create_health_id_by_aadhar.module';
import { DownloadAbhaCardGetcardModule } from './download_abha_card_getcard/download_abha_card_getcard.module';
import { DownloadAbhaCardQrcodeModule } from './download_abha_card_qrcode/download_abha_card_qrcode.module';
import { DownloadAbhaCardPngcardModule } from './download_abha_card_pngcard/download_abha_card_pngcard.module';
import { DownloadAbhaCardSvgcardModule } from './download_abha_card_svgcard/download_abha_card_svgcard.module';
import { AbhaGetProfileModule } from './abha_get_profile/abha_get_profile.module';
import { AbhaUpdateProfileModule } from './abha_update_profile/abha_update_profile.module';
import { AbhaAddressByAbhaNumberAuthMethodsModule } from './abha_address_by_abha_number_auth_methods/abha_address_by_abha_number_auth_methods.module';
import { AbhaAddressByAbhaNumberConformCredentialModule } from './abha_address_by_abha_number_conform_credential/abha_address_by_abha_number_conform_credential.module';
import { AbhaAddressByAbhaNumberInitModule } from './abha_address_by_abha_number_init/abha_address_by_abha_number_init.module';
import { AbhaAddressCreationByMobileAbhaAdressSuggestionModule } from './abha_address_creation_by_mobile_abha_adress_suggestion/abha_address_creation_by_mobile_abha_adress_suggestion.module';
import { AbhaAddressExixtsCheckingModule } from './abha_address_exixts_checking/abha_address_exixts_checking.module';
import { AbhaAddressByAbhaNumberCreateModule } from './abha_address_by_abha_number_create/abha_address_by_abha_number_create.module';
import { M1VerificationByotpFetchModesModule } from './m1_verification_byotp_fetch_modes/m1_verification_byotp_fetch_modes.module';
import { M1VerificationByotpMobileOtpInitModule } from './m1_verification_byotp_mobile_otp_init/m1_verification_byotp_mobile_otp_init.module';
import { M1VerificationByotpAuthConformModule } from './m1_verification_byotp_auth_conform/m1_verification_byotp_auth_conform.module';

@Module({
  imports: [AbhaGenerateOtpModule,
    AbhaVerifyOtpModule,
    AbhaVerifyMobileOtpModule,
    AbhaCheckAndGenerateMobileOtpModule,
    AbhaCreateHealthIdByAadharModule,
    DownloadAbhaCardGetcardModule,
    DownloadAbhaCardQrcodeModule,
    DownloadAbhaCardPngcardModule,
    DownloadAbhaCardSvgcardModule,
    AbhaGetProfileModule,
    AbhaUpdateProfileModule,
    AbhaAddressByAbhaNumberAuthMethodsModule,
    AbhaAddressByAbhaNumberConformCredentialModule,
    AbhaAddressByAbhaNumberInitModule,
    AbhaAddressCreationByMobileAbhaAdressSuggestionModule,
    AbhaAddressExixtsCheckingModule,
    AbhaAddressByAbhaNumberCreateModule,
    M1VerificationByotpFetchModesModule,
    M1VerificationByotpMobileOtpInitModule,
    M1VerificationByotpAuthConformModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
