import { FcCoords } from './ngx-flowchart.models';
import * as ɵngcc0 from '@angular/core';
export declare class FcEdgeDrawingService {
    constructor();
    getEdgeDAttribute(pt1: FcCoords, pt2: FcCoords, style: string): string;
    getEdgeCenter(pt1: FcCoords, pt2: FcCoords): FcCoords;
    private computeEdgeTangentOffset;
    private computeEdgeSourceTangent;
    private computeEdgeDestinationTangent;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FcEdgeDrawingService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<FcEdgeDrawingService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRnZS1kcmF3aW5nLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiZWRnZS1kcmF3aW5nLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGY0Nvb3JkcyB9IGZyb20gJy4vbmd4LWZsb3djaGFydC5tb2RlbHMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmNFZGdlRHJhd2luZ1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCk7XG4gICAgZ2V0RWRnZURBdHRyaWJ1dGUocHQxOiBGY0Nvb3JkcywgcHQyOiBGY0Nvb3Jkcywgc3R5bGU6IHN0cmluZyk6IHN0cmluZztcbiAgICBnZXRFZGdlQ2VudGVyKHB0MTogRmNDb29yZHMsIHB0MjogRmNDb29yZHMpOiBGY0Nvb3JkcztcbiAgICBwcml2YXRlIGNvbXB1dGVFZGdlVGFuZ2VudE9mZnNldDtcbiAgICBwcml2YXRlIGNvbXB1dGVFZGdlU291cmNlVGFuZ2VudDtcbiAgICBwcml2YXRlIGNvbXB1dGVFZGdlRGVzdGluYXRpb25UYW5nZW50O1xufVxuIl19