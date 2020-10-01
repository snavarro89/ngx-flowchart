import { ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FcCallbacks, FcConnector, FcNodeRectInfo } from './ngx-flowchart.models';
import { FcModelService } from './model.service';
import * as ɵngcc0 from '@angular/core';
export declare class FcConnectorDirective implements OnInit, OnChanges {
    elementRef: ElementRef<HTMLElement>;
    callbacks: FcCallbacks;
    modelservice: FcModelService;
    connector: FcConnector;
    nodeRectInfo: FcNodeRectInfo;
    mouseOverConnector: FcConnector;
    constructor(elementRef: ElementRef<HTMLElement>);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private updateConnectorClass;
    dragover(event: Event | any): void;
    drop(event: Event | any): boolean;
    dragend(event: Event | any): void;
    dragstart(event: Event | any): void;
    mouseenter(event: MouseEvent): void;
    mouseleave(event: MouseEvent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FcConnectorDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<FcConnectorDirective, "[fc-connector]", never, { "callbacks": "callbacks"; "modelservice": "modelservice"; "connector": "connector"; "nodeRectInfo": "nodeRectInfo"; "mouseOverConnector": "mouseOverConnector"; }, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdG9yLmRpcmVjdGl2ZS5kLnRzIiwic291cmNlcyI6WyJjb25uZWN0b3IuZGlyZWN0aXZlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZjQ2FsbGJhY2tzLCBGY0Nvbm5lY3RvciwgRmNOb2RlUmVjdEluZm8gfSBmcm9tICcuL25neC1mbG93Y2hhcnQubW9kZWxzJztcbmltcG9ydCB7IEZjTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi9tb2RlbC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZjQ29ubmVjdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICAgIGNhbGxiYWNrczogRmNDYWxsYmFja3M7XG4gICAgbW9kZWxzZXJ2aWNlOiBGY01vZGVsU2VydmljZTtcbiAgICBjb25uZWN0b3I6IEZjQ29ubmVjdG9yO1xuICAgIG5vZGVSZWN0SW5mbzogRmNOb2RlUmVjdEluZm87XG4gICAgbW91c2VPdmVyQ29ubmVjdG9yOiBGY0Nvbm5lY3RvcjtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pik7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBwcml2YXRlIHVwZGF0ZUNvbm5lY3RvckNsYXNzO1xuICAgIGRyYWdvdmVyKGV2ZW50OiBFdmVudCB8IGFueSk6IHZvaWQ7XG4gICAgZHJvcChldmVudDogRXZlbnQgfCBhbnkpOiBib29sZWFuO1xuICAgIGRyYWdlbmQoZXZlbnQ6IEV2ZW50IHwgYW55KTogdm9pZDtcbiAgICBkcmFnc3RhcnQoZXZlbnQ6IEV2ZW50IHwgYW55KTogdm9pZDtcbiAgICBtb3VzZWVudGVyKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZDtcbiAgICBtb3VzZWxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZDtcbn1cbiJdfQ==