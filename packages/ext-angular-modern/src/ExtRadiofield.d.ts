import { ElementRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
export declare class ExtRadiofieldComponent extends EngBase {
    constructor(eRef: ElementRef, hostComponent: EngBase, vc: ViewContainerRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
}
