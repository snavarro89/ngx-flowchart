import { FcConnector, FcEdge, FcModel, FcNode } from './ngx-flowchart.models';
import * as ɵngcc0 from '@angular/core';
export declare class FcModelValidationService {
    constructor();
    validateModel(model: FcModel): FcModel;
    validateNodes(nodes: Array<FcNode>): Array<FcNode>;
    validateNode(node: FcNode): FcNode;
    private _validateEdges;
    validateEdges(edges: Array<FcEdge>, nodes: Array<FcNode>): Array<FcEdge>;
    private _validateEdge;
    validateEdge(edge: FcEdge, nodes: Array<FcNode>): FcEdge;
    validateConnector(connector: FcConnector): FcConnector;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FcModelValidationService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<FcModelValidationService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWx2YWxpZGF0aW9uLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsibW9kZWx2YWxpZGF0aW9uLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGY0Nvbm5lY3RvciwgRmNFZGdlLCBGY01vZGVsLCBGY05vZGUgfSBmcm9tICcuL25neC1mbG93Y2hhcnQubW9kZWxzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZjTW9kZWxWYWxpZGF0aW9uU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKTtcbiAgICB2YWxpZGF0ZU1vZGVsKG1vZGVsOiBGY01vZGVsKTogRmNNb2RlbDtcbiAgICB2YWxpZGF0ZU5vZGVzKG5vZGVzOiBBcnJheTxGY05vZGU+KTogQXJyYXk8RmNOb2RlPjtcbiAgICB2YWxpZGF0ZU5vZGUobm9kZTogRmNOb2RlKTogRmNOb2RlO1xuICAgIHByaXZhdGUgX3ZhbGlkYXRlRWRnZXM7XG4gICAgdmFsaWRhdGVFZGdlcyhlZGdlczogQXJyYXk8RmNFZGdlPiwgbm9kZXM6IEFycmF5PEZjTm9kZT4pOiBBcnJheTxGY0VkZ2U+O1xuICAgIHByaXZhdGUgX3ZhbGlkYXRlRWRnZTtcbiAgICB2YWxpZGF0ZUVkZ2UoZWRnZTogRmNFZGdlLCBub2RlczogQXJyYXk8RmNOb2RlPik6IEZjRWRnZTtcbiAgICB2YWxpZGF0ZUNvbm5lY3Rvcihjb25uZWN0b3I6IEZjQ29ubmVjdG9yKTogRmNDb25uZWN0b3I7XG59XG4iXX0=