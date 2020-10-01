import { ElementRef, OnInit } from '@angular/core';
import { FcCallbacks, FcConnector } from './ngx-flowchart.models';
import * as ɵngcc0 from '@angular/core';
export declare class FcMagnetDirective implements OnInit {
    elementRef: ElementRef<HTMLElement>;
    callbacks: FcCallbacks;
    connector: FcConnector;
    constructor(elementRef: ElementRef<HTMLElement>);
    ngOnInit(): void;
    dragover(event: Event | any): boolean;
    dragleave(event: Event | any): void;
    drop(event: Event | any): boolean;
    dragend(event: Event | any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FcMagnetDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<FcMagnetDirective, "[fc-magnet]", never, { "callbacks": "callbacks"; "connector": "connector"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFnbmV0LmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJtYWduZXQuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZjQ2FsbGJhY2tzLCBGY0Nvbm5lY3RvciB9IGZyb20gJy4vbmd4LWZsb3djaGFydC5tb2RlbHMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmNNYWduZXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICAgIGNhbGxiYWNrczogRmNDYWxsYmFja3M7XG4gICAgY29ubmVjdG9yOiBGY0Nvbm5lY3RvcjtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBkcmFnb3ZlcihldmVudDogRXZlbnQgfCBhbnkpOiBib29sZWFuO1xuICAgIGRyYWdsZWF2ZShldmVudDogRXZlbnQgfCBhbnkpOiB2b2lkO1xuICAgIGRyb3AoZXZlbnQ6IEV2ZW50IHwgYW55KTogYm9vbGVhbjtcbiAgICBkcmFnZW5kKGV2ZW50OiBFdmVudCB8IGFueSk6IHZvaWQ7XG59XG4iXX0=