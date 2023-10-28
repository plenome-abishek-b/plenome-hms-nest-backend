"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const abha_generate_otp_module_1 = require("./generate_otp/abha_generate_otp.module");
const abha_verify_otp_module_1 = require("./verify_otp/abha_verify_otp.module");
const abha_verify_mobile_otp_module_1 = require("./verify_mobile_otp/abha_verify_mobile_otp.module");
const abha_check_and_generate_mobile_otp_module_1 = require("./check_generate_otp/abha_check_and_generate_mobile_otp.module");
const abha_create_health_id_by_aadhar_module_1 = require("./create_health_id/abha_create_health_id_by_aadhar.module");
const download_abha_card_getcard_module_1 = require("./download_abha_card_getcard/download_abha_card_getcard.module");
const download_abha_card_qrcode_module_1 = require("./download_abha_card_qrcode/download_abha_card_qrcode.module");
const download_abha_card_pngcard_module_1 = require("./download_abha_card_pngcard/download_abha_card_pngcard.module");
const download_abha_card_svgcard_module_1 = require("./download_abha_card_svgcard/download_abha_card_svgcard.module");
const abha_get_profile_module_1 = require("./abha_get_profile/abha_get_profile.module");
const abha_update_profile_module_1 = require("./abha_update_profile/abha_update_profile.module");
const abha_address_by_abha_number_auth_methods_module_1 = require("./abha_address_by_abha_number_auth_methods/abha_address_by_abha_number_auth_methods.module");
const abha_address_by_abha_number_conform_credential_module_1 = require("./abha_address_by_abha_number_conform_credential/abha_address_by_abha_number_conform_credential.module");
const abha_address_by_abha_number_init_module_1 = require("./abha_address_by_abha_number_init/abha_address_by_abha_number_init.module");
const abha_address_creation_by_mobile_abha_adress_suggestion_module_1 = require("./abha_address_creation_by_mobile_abha_adress_suggestion/abha_address_creation_by_mobile_abha_adress_suggestion.module");
const abha_address_exixts_checking_module_1 = require("./abha_address_exixts_checking/abha_address_exixts_checking.module");
const abha_address_by_abha_number_create_module_1 = require("./abha_address_by_abha_number_create/abha_address_by_abha_number_create.module");
const m1_verification_byotp_fetch_modes_module_1 = require("./m1_verification_byotp_fetch_modes/m1_verification_byotp_fetch_modes.module");
const m1_verification_byotp_mobile_otp_init_module_1 = require("./m1_verification_byotp_mobile_otp_init/m1_verification_byotp_mobile_otp_init.module");
const m1_verification_byotp_auth_conform_module_1 = require("./m1_verification_byotp_auth_conform/m1_verification_byotp_auth_conform.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [abha_generate_otp_module_1.AbhaGenerateOtpModule,
            abha_verify_otp_module_1.AbhaVerifyOtpModule,
            abha_verify_mobile_otp_module_1.AbhaVerifyMobileOtpModule,
            abha_check_and_generate_mobile_otp_module_1.AbhaCheckAndGenerateMobileOtpModule,
            abha_create_health_id_by_aadhar_module_1.AbhaCreateHealthIdByAadharModule,
            download_abha_card_getcard_module_1.DownloadAbhaCardGetcardModule,
            download_abha_card_qrcode_module_1.DownloadAbhaCardQrcodeModule,
            download_abha_card_pngcard_module_1.DownloadAbhaCardPngcardModule,
            download_abha_card_svgcard_module_1.DownloadAbhaCardSvgcardModule,
            abha_get_profile_module_1.AbhaGetProfileModule,
            abha_update_profile_module_1.AbhaUpdateProfileModule,
            abha_address_by_abha_number_auth_methods_module_1.AbhaAddressByAbhaNumberAuthMethodsModule,
            abha_address_by_abha_number_conform_credential_module_1.AbhaAddressByAbhaNumberConformCredentialModule,
            abha_address_by_abha_number_init_module_1.AbhaAddressByAbhaNumberInitModule,
            abha_address_creation_by_mobile_abha_adress_suggestion_module_1.AbhaAddressCreationByMobileAbhaAdressSuggestionModule,
            abha_address_exixts_checking_module_1.AbhaAddressExixtsCheckingModule,
            abha_address_by_abha_number_create_module_1.AbhaAddressByAbhaNumberCreateModule,
            m1_verification_byotp_fetch_modes_module_1.M1VerificationByotpFetchModesModule,
            m1_verification_byotp_mobile_otp_init_module_1.M1VerificationByotpMobileOtpInitModule,
            m1_verification_byotp_auth_conform_module_1.M1VerificationByotpAuthConformModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map