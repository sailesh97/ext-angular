var ExtRownumbererComponent_1;
import * as tslib_1 from "tslib";
//import EWCRownumberer from '../dist/ext-rownumberer.component.js';
//inputs: (new EWCRownumberer()).properties,
import EWCRownumberer from '@sencha/ext-web-components-modern/dist/ext-rownumberer.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
let ExtRownumbererComponent = ExtRownumbererComponent_1 = class ExtRownumbererComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeChildTabIndex', 'activeItem', 'align', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'cardSwitchAnimation', 'cell', 'centered', 'cls', 'columns', 'computedWidth', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'dataIndex', 'defaultColumnUI', 'defaultEditor', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultToolWeights', 'defaultType', 'defaultWidth', 'depends', 'disabled', 'displayed', 'docked', 'draggable', 'editable', 'editor', 'editorDefaults', 'undefined', 'undefined', 'undefined', 'exportRenderer', 'exportStyle', 'exportSummaryRenderer', 'filter', 'flex', 'floated', 'focusableContainer', 'focusCls', 'format', 'formatter', 'fullscreen', 'groupable', 'grouper', 'groupHeaderTpl', 'height', 'hidden', 'hideable', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'hideShowMenuItem', 'html', 'id', 'ignore', 'ignoreExport', 'inactiveChildTabIndex', 'innerCls', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'listeners', 'locked', 'manageBorders', 'margin', 'masked', 'maxHeight', 'maxWidth', 'menu', 'menuDisabled', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderer', 'renderTo', 'reserveScrollbar', 'resetFocusPosition', 'resizable', 'right', 'ripple', 'scope', 'scratchCell', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sortable', 'sorter', 'stateful', 'statefulDefaults', 'stateId', 'style', 'summary', 'summaryCell', 'summaryDataIndex', 'summaryFormatter', 'summaryRenderer', 'undefined', 'tabIndex', 'text', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'verticalOverflow', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex',], (new EWCRownumberer()).events, ['ready', 'activate', 'activeItemchange', 'add', 'added', 'beforeactiveItemchange', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'deactivate', 'destroy', 'disabledchange', 'dockedchange', 'erased', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'move', 'moved', 'orientationchange', 'painted', 'positionedchange', 'remove', 'removed', 'renderedchange', 'resize', 'rightchange', 'scrollablechange', 'show', 'tofront', 'topchange', 'updatedata', 'widthchange',], vc);
        this.xtype = 'rownumberer';
    }
    ngOnInit() {
        this.baseOnInit();
    }
    ngAfterViewInit() {
        this.baseAfterViewInit();
    }
    ngOnChanges(changes) {
        this.baseOnChanges(changes);
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
};
ExtRownumbererComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtRownumbererComponent = ExtRownumbererComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ExtRownumberer',
        inputs: ['renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeChildTabIndex', 'activeItem', 'align', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'cardSwitchAnimation', 'cell', 'centered', 'cls', 'columns', 'computedWidth', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'dataIndex', 'defaultColumnUI', 'defaultEditor', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultToolWeights', 'defaultType', 'defaultWidth', 'depends', 'disabled', 'displayed', 'docked', 'draggable', 'editable', 'editor', 'editorDefaults', 'undefined', 'undefined', 'undefined', 'exportRenderer', 'exportStyle', 'exportSummaryRenderer', 'filter', 'flex', 'floated', 'focusableContainer', 'focusCls', 'format', 'formatter', 'fullscreen', 'groupable', 'grouper', 'groupHeaderTpl', 'height', 'hidden', 'hideable', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'hideShowMenuItem', 'html', 'id', 'ignore', 'ignoreExport', 'inactiveChildTabIndex', 'innerCls', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'listeners', 'locked', 'manageBorders', 'margin', 'masked', 'maxHeight', 'maxWidth', 'menu', 'menuDisabled', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderer', 'renderTo', 'reserveScrollbar', 'resetFocusPosition', 'resizable', 'right', 'ripple', 'scope', 'scratchCell', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sortable', 'sorter', 'stateful', 'statefulDefaults', 'stateId', 'style', 'summary', 'summaryCell', 'summaryDataIndex', 'summaryFormatter', 'summaryRenderer', 'undefined', 'tabIndex', 'text', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'verticalOverflow', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex',],
        outputs: ['ready', 'activate', 'activeItemchange', 'add', 'added', 'beforeactiveItemchange', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'deactivate', 'destroy', 'disabledchange', 'dockedchange', 'erased', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'move', 'moved', 'orientationchange', 'painted', 'positionedchange', 'remove', 'removed', 'renderedchange', 'resize', 'rightchange', 'scrollablechange', 'show', 'tofront', 'topchange', 'updatedata', 'widthchange',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtRownumbererComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
], ExtRownumbererComponent);
export { ExtRownumbererComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCRownumberer()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0Um93bnVtYmVyZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbInNyYy9FeHRSb3dudW1iZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9FQUFvRTtBQUNwRSw0Q0FBNEM7QUFDNUMsT0FBTyxjQUFjLE1BQU0scUVBQXFFLENBQUM7QUFDakcsT0FBTyxFQUNILElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3hDLElBQWEsdUJBQXVCLCtCQUFwQyxNQUFhLHVCQUF3QixTQUFRLE9BQU87SUFDaEQsWUFDSSxJQUFnQixFQUNnQixhQUFzQixFQUN0RCxFQUFvQjtRQUVwQixLQUFLLENBQ0QsSUFBSSxFQUNKLGFBQWEsRUFDYixDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLHFCQUFxQixFQUFDLFlBQVksRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLCtCQUErQixFQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLHFCQUFxQixFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxlQUFlLEVBQUMsZ0JBQWdCLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsTUFBTSxFQUFD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QUE0QztBQUM1QyxtQkFBbUI7QUFDbkIsMkNBQTJDO0FBQzNDLEdBQUc7QUFDSCxrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBFV0NSb3dudW1iZXJlciBmcm9tICcuLi9kaXN0L2V4dC1yb3dudW1iZXJlci5jb21wb25lbnQuanMnO1xuLy9pbnB1dHM6IChuZXcgRVdDUm93bnVtYmVyZXIoKSkucHJvcGVydGllcyxcbmltcG9ydCBFV0NSb3dudW1iZXJlciBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1tb2Rlcm4vZGlzdC9leHQtcm93bnVtYmVyZXIuY29tcG9uZW50LmpzJztcbmltcG9ydCB7XG4gICAgSG9zdCxcbiAgICBPcHRpb25hbCxcbiAgICBTa2lwU2VsZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2FuZ3VsYXJiYXNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdFeHRSb3dudW1iZXJlcicsXG4gICAgaW5wdXRzOiBbJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhY3RpdmVDaGlsZFRhYkluZGV4JywnYWN0aXZlSXRlbScsJ2FsaWduJywnYWxpZ25TZWxmJywnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLCdhbHdheXNPblRvcCcsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhdXRvRGVzdHJveScsJ2F1dG9TaXplJywnYXhpc0xvY2snLCdiaW5kJywnYm9keUNscycsJ2JvcmRlcicsJ2JvdHRvbScsJ2NhcmRTd2l0Y2hBbmltYXRpb24nLCdjZWxsJywnY2VudGVyZWQnLCdjbHMnLCdjb2x1bW5zJywnY29tcHV0ZWRXaWR0aCcsJ2NvbnN0cmFpbkFsaWduJywnY29udGVudEVsJywnY29udHJvbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGF0YUluZGV4JywnZGVmYXVsdENvbHVtblVJJywnZGVmYXVsdEVkaXRvcicsJ2RlZmF1bHRGb2N1cycsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGVmYXVsdHMnLCdkZWZhdWx0VG9vbFdlaWdodHMnLCdkZWZhdWx0VHlwZScsJ2RlZmF1bHRXaWR0aCcsJ2RlcGVuZHMnLCdkaXNhYmxlZCcsJ2Rpc3BsYXllZCcsJ2RvY2tlZCcsJ2RyYWdnYWJsZScsJ2VkaXRhYmxlJywnZWRpdG9yJywnZWRpdG9yRGVmYXVsdHMnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdleHBvcnRSZW5kZXJlcicsJ2V4cG9ydFN0eWxlJywnZXhwb3J0U3VtbWFyeVJlbmRlcmVyJywnZmlsdGVyJywnZmxleCcsJ2Zsb2F0ZWQnLCdmb2N1c2FibGVDb250YWluZXInLCdmb2N1c0NscycsJ2Zvcm1hdCcsJ2Zvcm1hdHRlcicsJ2Z1bGxzY3JlZW4nLCdncm91cGFibGUnLCdncm91cGVyJywnZ3JvdXBIZWFkZXJUcGwnLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlYWJsZScsJ2hpZGVBbmltYXRpb24nLCdoaWRlTW9kZScsJ2hpZGVPbk1hc2tUYXAnLCdoaWRlU2hvd01lbnVJdGVtJywnaHRtbCcsJ2lkJywnaWdub3JlJywnaWdub3JlRXhwb3J0JywnaW5hY3RpdmVDaGlsZFRhYkluZGV4JywnaW5uZXJDbHMnLCdpbnN0YW5jZUNscycsJ2l0ZW1JZCcsJ2l0ZW1zJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xheW91dCcsJ2xlZnQnLCdsaXN0ZW5lcnMnLCdsb2NrZWQnLCdtYW5hZ2VCb3JkZXJzJywnbWFyZ2luJywnbWFza2VkJywnbWF4SGVpZ2h0JywnbWF4V2lkdGgnLCdtZW51JywnbWVudURpc2FibGVkJywnbWluSGVpZ2h0JywnbWluV2lkdGgnLCdtb2RhbCcsJ21vZGVsVmFsaWRhdGlvbicsJ25hbWUnLCduYW1lYWJsZScsJ25hbWVIb2xkZXInLCdwYWRkaW5nJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JlY29yZCcsJ3JlZmVyZW5jZScsJ3JlZmVyZW5jZUhvbGRlcicsJ3JlbGF0aXZlJywncmVuZGVyZXInLCdyZW5kZXJUbycsJ3Jlc2VydmVTY3JvbGxiYXInLCdyZXNldEZvY3VzUG9zaXRpb24nLCdyZXNpemFibGUnLCdyaWdodCcsJ3JpcHBsZScsJ3Njb3BlJywnc2NyYXRjaENlbGwnLCdzY3JvbGxhYmxlJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hvd0FuaW1hdGlvbicsJ3NvcnRhYmxlJywnc29ydGVyJywnc3RhdGVmdWwnLCdzdGF0ZWZ1bERlZmF1bHRzJywnc3RhdGVJZCcsJ3N0eWxlJywnc3VtbWFyeScsJ3N1bW1hcnlDZWxsJywnc3VtbWFyeURhdGFJbmRleCcsJ3N1bW1hcnlGb3JtYXR0ZXInLCdzdW1tYXJ5UmVuZGVyZXInLCd1bmRlZmluZWQnLCd0YWJJbmRleCcsJ3RleHQnLCd0b0Zyb250T25TaG93JywndG9vbERlZmF1bHRzJywndG9vbHMnLCd0b29sdGlwJywndG9wJywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0cmFuc2xhdGFibGUnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndXNlckNscycsJ3VzZXJTZWxlY3RhYmxlJywndmVydGljYWxPdmVyZmxvdycsJ3ZpZXdNb2RlbCcsJ3dlaWdodCcsJ3dlaWdodGVkJywnd2lkdGgnLCd4JywneHR5cGUnLCd5JywnekluZGV4JyxdLFxuICAgIG91dHB1dHM6IFsncmVhZHknLCdhY3RpdmF0ZScsJ2FjdGl2ZUl0ZW1jaGFuZ2UnLCdhZGQnLCdhZGRlZCcsJ2JlZm9yZWFjdGl2ZUl0ZW1jaGFuZ2UnLCdiZWZvcmVib3R0b21jaGFuZ2UnLCdiZWZvcmVjZW50ZXJlZGNoYW5nZScsJ2JlZm9yZWRpc2FibGVkY2hhbmdlJywnYmVmb3JlZG9ja2VkY2hhbmdlJywnYmVmb3JlaGVpZ2h0Y2hhbmdlJywnYmVmb3JlaGlkZGVuY2hhbmdlJywnYmVmb3JlaGlkZScsJ2JlZm9yZWxlZnRjaGFuZ2UnLCdiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLCdiZWZvcmVtYXhXaWR0aGNoYW5nZScsJ2JlZm9yZW1pbkhlaWdodGNoYW5nZScsJ2JlZm9yZW1pbldpZHRoY2hhbmdlJywnYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLCdiZWZvcmVyaWdodGNoYW5nZScsJ2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLCdiZWZvcmVzaG93JywnYmVmb3JldG9mcm9udCcsJ2JlZm9yZXRvcGNoYW5nZScsJ2JlZm9yZXdpZHRoY2hhbmdlJywnYmx1cicsJ2JvdHRvbWNoYW5nZScsJ2NlbnRlcmVkY2hhbmdlJywnZGVhY3RpdmF0ZScsJ2Rlc3Ryb3knLCdkaXNhYmxlZGNoYW5nZScsJ2RvY2tlZGNoYW5nZScsJ2VyYXNlZCcsJ2Zsb2F0aW5nY2hhbmdlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2Z1bGxzY3JlZW4nLCdoZWlnaHRjaGFuZ2UnLCdoaWRkZW5jaGFuZ2UnLCdoaWRlJywnaW5pdGlhbGl6ZScsJ2xlZnRjaGFuZ2UnLCdtYXhIZWlnaHRjaGFuZ2UnLCdtYXhXaWR0aGNoYW5nZScsJ21pbkhlaWdodGNoYW5nZScsJ21pbldpZHRoY2hhbmdlJywnbW92ZScsJ21vdmVkJywnb3JpZW50YXRpb25jaGFuZ2UnLCdwYWludGVkJywncG9zaXRpb25lZGNoYW5nZScsJ3JlbW92ZScsJ3JlbW92ZWQnLCdyZW5kZXJlZGNoYW5nZScsJ3Jlc2l6ZScsJ3JpZ2h0Y2hhbmdlJywnc2Nyb2xsYWJsZWNoYW5nZScsJ3Nob3cnLCd0b2Zyb250JywndG9wY2hhbmdlJywndXBkYXRlZGF0YScsJ3dpZHRoY2hhbmdlJyxdLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRSb3dudW1iZXJlckNvbXBvbmVudCl9XSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFJvd251bWJlcmVyQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZSxcbiAgICAgICAgdmM6IFZpZXdDb250YWluZXJSZWZcbiAgICAgICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBbJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhY3RpdmVDaGlsZFRhYkluZGV4JywnYWN0aXZlSXRlbScsJ2FsaWduJywnYWxpZ25TZWxmJywnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLCdhbHdheXNPblRvcCcsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhdXRvRGVzdHJveScsJ2F1dG9TaXplJywnYXhpc0xvY2snLCdiaW5kJywnYm9keUNscycsJ2JvcmRlcicsJ2JvdHRvbScsJ2NhcmRTd2l0Y2hBbmltYXRpb24nLCdjZWxsJywnY2VudGVyZWQnLCdjbHMnLCdjb2x1bW5zJywnY29tcHV0ZWRXaWR0aCcsJ2NvbnN0cmFpbkFsaWduJywnY29udGVudEVsJywnY29udHJvbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGF0YUluZGV4JywnZGVmYXVsdENvbHVtblVJJywnZGVmYXVsdEVkaXRvcicsJ2RlZmF1bHRGb2N1cycsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGVmYXVsdHMnLCdkZWZhdWx0VG9vbFdlaWdodHMnLCdkZWZhdWx0VHlwZScsJ2RlZmF1bHRXaWR0aCcsJ2RlcGVuZHMnLCdkaXNhYmxlZCcsJ2Rpc3BsYXllZCcsJ2RvY2tlZCcsJ2RyYWdnYWJsZScsJ2VkaXRhYmxlJywnZWRpdG9yJywnZWRpdG9yRGVmYXVsdHMnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdleHBvcnRSZW5kZXJlcicsJ2V4cG9ydFN0eWxlJywnZXhwb3J0U3VtbWFyeVJlbmRlcmVyJywnZmlsdGVyJywnZmxleCcsJ2Zsb2F0ZWQnLCdmb2N1c2FibGVDb250YWluZXInLCdmb2N1c0NscycsJ2Zvcm1hdCcsJ2Zvcm1hdHRlcicsJ2Z1bGxzY3JlZW4nLCdncm91cGFibGUnLCdncm91cGVyJywnZ3JvdXBIZWFkZXJUcGwnLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlYWJsZScsJ2hpZGVBbmltYXRpb24nLCdoaWRlTW9kZScsJ2hpZGVPbk1hc2tUYXAnLCdoaWRlU2hvd01lbnVJdGVtJywnaHRtbCcsJ2lkJywnaWdub3JlJywnaWdub3JlRXhwb3J0JywnaW5hY3RpdmVDaGlsZFRhYkluZGV4JywnaW5uZXJDbHMnLCdpbnN0YW5jZUNscycsJ2l0ZW1JZCcsJ2l0ZW1zJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xheW91dCcsJ2xlZnQnLCdsaXN0ZW5lcnMnLCdsb2NrZWQnLCdtYW5hZ2VCb3JkZXJzJywnbWFyZ2luJywnbWFza2VkJywnbWF4SGVpZ2h0JywnbWF4V2lkdGgnLCdtZW51JywnbWVudURpc2FibGVkJywnbWluSGVpZ2h0JywnbWluV2lkdGgnLCdtb2RhbCcsJ21vZGVsVmFsaWRhdGlvbicsJ25hbWUnLCduYW1lYWJsZScsJ25hbWVIb2xkZXInLCdwYWRkaW5nJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JlY29yZCcsJ3JlZmVyZW5jZScsJ3JlZmVyZW5jZUhvbGRlcicsJ3JlbGF0aXZlJywncmVuZGVyZXInLCdyZW5kZXJUbycsJ3Jlc2VydmVTY3JvbGxiYXInLCdyZXNldEZvY3VzUG9zaXRpb24nLCdyZXNpemFibGUnLCdyaWdodCcsJ3JpcHBsZScsJ3Njb3BlJywnc2NyYXRjaENlbGwnLCdzY3JvbGxhYmxlJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hvd0FuaW1hdGlvbicsJ3NvcnRhYmxlJywnc29ydGVyJywnc3RhdGVmdWwnLCdzdGF0ZWZ1bERlZmF1bHRzJywnc3RhdGVJZCcsJ3N0eWxlJywnc3VtbWFyeScsJ3N1bW1hcnlDZWxsJywnc3VtbWFyeURhdGFJbmRleCcsJ3N1bW1hcnlGb3JtYXR0ZXInLCdzdW1tYXJ5UmVuZGVyZXInLCd1bmRlZmluZWQnLCd0YWJJbmRleCcsJ3RleHQnLCd0b0Zyb250T25TaG93JywndG9vbERlZmF1bHRzJywndG9vbHMnLCd0b29sdGlwJywndG9wJywndG91Y2hBY3Rpb24nLCd0cGwnLCd0cGxXcml0ZU1vZGUnLCd0cmFuc2xhdGFibGUnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndXNlckNscycsJ3VzZXJTZWxlY3RhYmxlJywndmVydGljYWxPdmVyZmxvdycsJ3ZpZXdNb2RlbCcsJ3dlaWdodCcsJ3dlaWdodGVkJywnd2lkdGgnLCd4JywneHR5cGUnLCd5JywnekluZGV4JyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NSb3dudW1iZXJlcigpKS5ldmVudHMsXG4gICAgICAgICAgICBbJ3JlYWR5JywnYWN0aXZhdGUnLCdhY3RpdmVJdGVtY2hhbmdlJywnYWRkJywnYWRkZWQnLCdiZWZvcmVhY3RpdmVJdGVtY2hhbmdlJywnYmVmb3JlYm90dG9tY2hhbmdlJywnYmVmb3JlY2VudGVyZWRjaGFuZ2UnLCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsJ2JlZm9yZWRvY2tlZGNoYW5nZScsJ2JlZm9yZWhlaWdodGNoYW5nZScsJ2JlZm9yZWhpZGRlbmNoYW5nZScsJ2JlZm9yZWhpZGUnLCdiZWZvcmVsZWZ0Y2hhbmdlJywnYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJywnYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLCdiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLCdiZWZvcmVtaW5XaWR0aGNoYW5nZScsJ2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJywnYmVmb3JlcmlnaHRjaGFuZ2UnLCdiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJywnYmVmb3Jlc2hvdycsJ2JlZm9yZXRvZnJvbnQnLCdiZWZvcmV0b3BjaGFuZ2UnLCdiZWZvcmV3aWR0aGNoYW5nZScsJ2JsdXInLCdib3R0b21jaGFuZ2UnLCdjZW50ZXJlZGNoYW5nZScsJ2RlYWN0aXZhdGUnLCdkZXN0cm95JywnZGlzYWJsZWRjaGFuZ2UnLCdkb2NrZWRjaGFuZ2UnLCdlcmFzZWQnLCdmbG9hdGluZ2NoYW5nZScsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdmdWxsc2NyZWVuJywnaGVpZ2h0Y2hhbmdlJywnaGlkZGVuY2hhbmdlJywnaGlkZScsJ2luaXRpYWxpemUnLCdsZWZ0Y2hhbmdlJywnbWF4SGVpZ2h0Y2hhbmdlJywnbWF4V2lkdGhjaGFuZ2UnLCdtaW5IZWlnaHRjaGFuZ2UnLCdtaW5XaWR0aGNoYW5nZScsJ21vdmUnLCdtb3ZlZCcsJ29yaWVudGF0aW9uY2hhbmdlJywncGFpbnRlZCcsJ3Bvc2l0aW9uZWRjaGFuZ2UnLCdyZW1vdmUnLCdyZW1vdmVkJywncmVuZGVyZWRjaGFuZ2UnLCdyZXNpemUnLCdyaWdodGNoYW5nZScsJ3Njcm9sbGFibGVjaGFuZ2UnLCdzaG93JywndG9mcm9udCcsJ3RvcGNoYW5nZScsJ3VwZGF0ZWRhdGEnLCd3aWR0aGNoYW5nZScsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdyb3dudW1iZXJlcidcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cblxuXG4vLyBmdW5jdGlvbiB0b1Bhc2NhbENhc2Uocykge1xuLy8gICAgIHJldHVybiBzLm1hdGNoKC9bYS16XSsvZ2kpXG4vLyAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHdvcmQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuam9pbignJylcbi8vIH1cbi8vIHZhciBwYXNjYWxOYW1lID0gdG9QYXNjYWxDYXNlKHRhZ05hbWUpXG5cbi8vdmFyIGV2ZW50cyA9IChuZXcgRVdDUm93bnVtYmVyZXIoKSkuZXZlbnRuYW1lcztcbi8vdmFyIGV2ZW50bmFtZXNhbGwgPSBbXTtcbi8vZXZlbnRzLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbi8vICAgIGV2ZW50bmFtZXNhbGwucHVzaChldmVudC5uYW1lKVxuLy99KVxuLy9jb25zdCBkaXN0aW5jdCA9ICh2YWx1ZSwgaW5kZXgsIHNlbGYpID0+IHtcbi8vICAgIC8vcmV0dXJuIHRydWVcbi8vICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbi8vfVxuLy92YXIgZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXNhbGwuZmlsdGVyKGRpc3RpbmN0KTtcbiJdfQ==