import { LslStatutoryEntitlementsEntityBase } from '../LslStatutoryEntitlementsEntityBase';
import type { LslStatutoryEntitlementsSDK } from '../LslStatutoryEntitlementsSDK';
import type { Control } from '../types';
import type { Enquiry, EnquiryCreateData } from '../LslStatutoryEntitlementsTypes';
declare class EnquiryEntity extends LslStatutoryEntitlementsEntityBase<Enquiry> {
    constructor(client: LslStatutoryEntitlementsSDK, entopts: any);
    make(this: EnquiryEntity): EnquiryEntity;
    create(this: any, reqdata?: EnquiryCreateData, ctrl?: Control): Promise<EnquiryEntity>;
}
export { EnquiryEntity };
