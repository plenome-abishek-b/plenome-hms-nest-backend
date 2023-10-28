import { AbhaAddressLinkAndUnlinkService } from './abha_address_link_and_unlink.service';
export declare class AbhaAddressLinkAndUnlinkController {
    private readonly linkHidService;
    constructor(linkHidService: AbhaAddressLinkAndUnlinkService);
    phrLink(body: {
        action: string;
        transactionId: string;
        token: string;
    }): Promise<any>;
}
