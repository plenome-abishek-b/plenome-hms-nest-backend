"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbhaAddressCreationByMobileDetailsPostingController = void 0;
const common_1 = require("@nestjs/common");
const abha_address_creation_by_mobile_details_posting_service_1 = require("./abha_address_creation_by_mobile_details_posting.service");
let AbhaAddressCreationByMobileDetailsPostingController = class AbhaAddressCreationByMobileDetailsPostingController {
    constructor(mobileCreateAbhaDetailsService) {
        this.mobileCreateAbhaDetailsService = mobileCreateAbhaDetailsService;
    }
    async mobileCreateAbhaDetails(address, countryCode, dayOfBirth, districtCode, email, firstName, gender, lastName, middleName, mobile, monthOfBirth, pinCode, stateCode, transactionId, yearOfBirth) {
        console.log(address, countryCode);
        return await this.mobileCreateAbhaDetailsService.mobileCreateAbhaDetailsService(address, countryCode, dayOfBirth, districtCode, email, firstName, gender, lastName, middleName, mobile, monthOfBirth, pinCode, stateCode, transactionId, yearOfBirth);
    }
};
exports.AbhaAddressCreationByMobileDetailsPostingController = AbhaAddressCreationByMobileDetailsPostingController;
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)('address')),
    __param(1, (0, common_1.Body)('countryCode')),
    __param(2, (0, common_1.Body)('dayOfBirth')),
    __param(3, (0, common_1.Body)('districtCode')),
    __param(4, (0, common_1.Body)('email')),
    __param(5, (0, common_1.Body)('firstName')),
    __param(6, (0, common_1.Body)('gender')),
    __param(7, (0, common_1.Body)('lastName')),
    __param(8, (0, common_1.Body)('middleName')),
    __param(9, (0, common_1.Body)('mobile')),
    __param(10, (0, common_1.Body)('monthOfBirth')),
    __param(11, (0, common_1.Body)('pinCode')),
    __param(12, (0, common_1.Body)('stateCode')),
    __param(13, (0, common_1.Body)('transactionId')),
    __param(14, (0, common_1.Body)('yearOfBirth')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, String, String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], AbhaAddressCreationByMobileDetailsPostingController.prototype, "mobileCreateAbhaDetails", null);
exports.AbhaAddressCreationByMobileDetailsPostingController = AbhaAddressCreationByMobileDetailsPostingController = __decorate([
    (0, common_1.Controller)('abha_address_creation_by_mobile_details_posting'),
    __metadata("design:paramtypes", [abha_address_creation_by_mobile_details_posting_service_1.AbhaAddressCreationByMobileDetailsPostingService])
], AbhaAddressCreationByMobileDetailsPostingController);
//# sourceMappingURL=abha_address_creation_by_mobile_details_posting.controller.js.map