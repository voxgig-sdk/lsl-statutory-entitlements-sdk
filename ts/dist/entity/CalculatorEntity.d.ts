import { LslStatutoryEntitlementsEntityBase } from '../LslStatutoryEntitlementsEntityBase';
import type { LslStatutoryEntitlementsSDK } from '../LslStatutoryEntitlementsSDK';
import type { Control } from '../types';
import type { Calculator, CalculatorCreateData } from '../LslStatutoryEntitlementsTypes';
declare class CalculatorEntity extends LslStatutoryEntitlementsEntityBase<Calculator> {
    constructor(client: LslStatutoryEntitlementsSDK, entopts: any);
    make(this: CalculatorEntity): CalculatorEntity;
    create(this: any, reqdata?: CalculatorCreateData, ctrl?: Control): Promise<CalculatorEntity>;
}
export { CalculatorEntity };
