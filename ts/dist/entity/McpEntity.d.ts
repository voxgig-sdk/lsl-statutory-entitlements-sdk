import { LslStatutoryEntitlementsEntityBase } from '../LslStatutoryEntitlementsEntityBase';
import type { LslStatutoryEntitlementsSDK } from '../LslStatutoryEntitlementsSDK';
import type { Control } from '../types';
import type { Mcp, McpLoadMatch, McpCreateData } from '../LslStatutoryEntitlementsTypes';
declare class McpEntity extends LslStatutoryEntitlementsEntityBase<Mcp> {
    constructor(client: LslStatutoryEntitlementsSDK, entopts: any);
    make(this: McpEntity): McpEntity;
    load(this: any, reqmatch?: McpLoadMatch, ctrl?: Control): Promise<McpEntity>;
    create(this: any, reqdata?: McpCreateData, ctrl?: Control): Promise<McpEntity>;
}
export { McpEntity };
