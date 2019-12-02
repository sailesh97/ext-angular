//import EWCGridsortascmenuitem from '../dist/ext-gridsortascmenuitem.component.js';
//inputs: (new EWCGridsortascmenuitem()).properties,
import EWCGridsortascmenuitem from '@sencha/ext-web-components-modern/dist/ext-gridsortascmenuitem.component.js';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './angularbase';

@Component({
    selector: 'ExtGridsortascmenuitem',
    inputs: ['header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','allowUncheck','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','axisLock','bind','border','bottom','centered','checkChangeDisabled','checked','checkHandler','clickHideDelay','cls','constrainAlign','contentEl','controller','data','defaultListenerScope','destroyMenu','disabled','displayed','docked','draggable','undefined','undefined','undefined','flex','floated','focusCls','fullscreen','group','handler','height','hidden','hideAnimation','hideMode','hideOnClick','hideOnMaskTap','href','html','icon','iconAlign','iconCls','id','indented','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','left','listeners','margin','maxHeight','maxWidth','menu','menuAlign','menuExpandDelay','menuHideDelay','minHeight','minWidth','modal','modelValidation','name','nameable','padding','plugins','publishes','record','reference','relative','renderTo','right','ripple','scope','scrollable','separator','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','style','submenuText','tabIndex','target','text','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','value','viewModel','weight','width','x','xtype','y','zIndex',],
    outputs: ['ready','added','beforebottomchange','beforecenteredchange','beforecheckchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','checkchange','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','removed','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtGridsortascmenuitemComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtGridsortascmenuitemComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','allowUncheck','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','axisLock','bind','border','bottom','centered','checkChangeDisabled','checked','checkHandler','clickHideDelay','cls','constrainAlign','contentEl','controller','data','defaultListenerScope','destroyMenu','disabled','displayed','docked','draggable','undefined','undefined','undefined','flex','floated','focusCls','fullscreen','group','handler','height','hidden','hideAnimation','hideMode','hideOnClick','hideOnMaskTap','href','html','icon','iconAlign','iconCls','id','indented','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','left','listeners','margin','maxHeight','maxWidth','menu','menuAlign','menuExpandDelay','menuHideDelay','minHeight','minWidth','modal','modelValidation','name','nameable','padding','plugins','publishes','record','reference','relative','renderTo','right','ripple','scope','scrollable','separator','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','style','submenuText','tabIndex','target','text','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','value','viewModel','weight','width','x','xtype','y','zIndex',],
            (new EWCGridsortascmenuitem()).events,
            ['ready','added','beforebottomchange','beforecenteredchange','beforecheckchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','checkchange','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','removed','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'gridsortascmenuitem'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}


// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)

//var events = (new EWCGridsortascmenuitem()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
