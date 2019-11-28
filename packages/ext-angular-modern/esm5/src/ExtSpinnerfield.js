import * as tslib_1 from "tslib";
//import EWCSpinnerfield from '../dist/ext-spinnerfield.component.js';
//inputs: (new EWCSpinnerfield()).properties,
import EWCSpinnerfield from '@sencha/ext-web-components-modern/dist/ext-spinnerfield.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
var ExtSpinnerfieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSpinnerfieldComponent, _super);
    function ExtSpinnerfieldComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'accelerateOnTapHold', 'alignSelf', 'alwaysOnTop', 'animateUnderline', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoCapitalize', 'autoComplete', 'autoCorrect', 'autoFitErrors', 'autoHideInputMask', 'axisLock', 'badFormatMessage', 'bind', 'bodyAlign', 'border', 'bottom', 'bubbleDirty', 'centered', 'clearable', 'cls', 'constrainAlign', 'contentEl', 'controller', 'cycle', 'data', 'dataType', 'decimals', 'decimalSeparator', 'decimalsText', 'defaultListenerScope', 'dirty', 'disabled', 'displayed', 'docked', 'draggable', 'editable', 'undefined', 'error', 'errorMessage', 'errorTarget', 'errorTip', 'errorTpl', 'undefined', 'undefined', 'flex', 'floated', 'focusCls', 'fullscreen', 'undefined', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'id', 'inline', 'undefined', 'inputMask', 'inputType', 'inputValue', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'label', 'labelAlign', 'labelCls', 'labelInPlaceholder', 'labelMinWidth', 'labelTextAlign', 'labelWidth', 'labelWrap', 'left', 'listeners', 'margin', 'maxHeight', 'maxLength', 'maxValue', 'maxValueText', 'maxWidth', 'minHeight', 'minValue', 'minValueText', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'padding', 'parseValidator', 'pattern', 'placeholder', 'undefined', 'plugins', 'publishes', 'readOnly', 'record', 'reference', 'relative', 'renderTo', 'required', 'requiredMessage', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sideError', 'stateful', 'statefulDefaults', 'stateId', 'stepValue', 'stripCharsRe', 'style', 'tabIndex', 'textAlign', 'tipError', 'titleError', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggers', 'trim', 'twoWayBindable', 'ui', 'underError', 'userCls', 'userSelectable', 'validateDisabled', 'validationMessage', 'validators', 'value', 'viewModel', 'weight', 'width', 'x', 'xtype', 'y', 'zIndex',], (new EWCSpinnerfield()).events, ['ready', 'action', 'added', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'change', 'clearicontap', 'click', 'destroy', 'dirtychange', 'disabledchange', 'dockedchange', 'erased', 'errorchange', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'keydown', 'keyup', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'mousedown', 'moved', 'orientationchange', 'painted', 'paste', 'positionedchange', 'removed', 'resize', 'rightchange', 'scrollablechange', 'show', 'spin', 'spindown', 'spinup', 'tofront', 'topchange', 'updatedata', 'widthchange',], vc) || this;
        _this.xtype = 'spinnerfield';
        return _this;
    }
    ExtSpinnerfieldComponent_1 = ExtSpinnerfieldComponent;
    ExtSpinnerfieldComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtSpinnerfieldComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtSpinnerfieldComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtSpinnerfieldComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtSpinnerfieldComponent_1;
    ExtSpinnerfieldComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtSpinnerfieldComponent = ExtSpinnerfieldComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ExtSpinnerfield',
            inputs: ['renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'accelerateOnTapHold', 'alignSelf', 'alwaysOnTop', 'animateUnderline', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoCapitalize', 'autoComplete', 'autoCorrect', 'autoFitErrors', 'autoHideInputMask', 'axisLock', 'badFormatMessage', 'bind', 'bodyAlign', 'border', 'bottom', 'bubbleDirty', 'centered', 'clearable', 'cls', 'constrainAlign', 'contentEl', 'controller', 'cycle', 'data', 'dataType', 'decimals', 'decimalSeparator', 'decimalsText', 'defaultListenerScope', 'dirty', 'disabled', 'displayed', 'docked', 'draggable', 'editable', 'undefined', 'error', 'errorMessage', 'errorTarget', 'errorTip', 'errorTpl', 'undefined', 'undefined', 'flex', 'floated', 'focusCls', 'fullscreen', 'undefined', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'id', 'inline', 'undefined', 'inputMask', 'inputType', 'inputValue', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'label', 'labelAlign', 'labelCls', 'labelInPlaceholder', 'labelMinWidth', 'labelTextAlign', 'labelWidth', 'labelWrap', 'left', 'listeners', 'margin', 'maxHeight', 'maxLength', 'maxValue', 'maxValueText', 'maxWidth', 'minHeight', 'minValue', 'minValueText', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'padding', 'parseValidator', 'pattern', 'placeholder', 'undefined', 'plugins', 'publishes', 'readOnly', 'record', 'reference', 'relative', 'renderTo', 'required', 'requiredMessage', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sideError', 'stateful', 'statefulDefaults', 'stateId', 'stepValue', 'stripCharsRe', 'style', 'tabIndex', 'textAlign', 'tipError', 'titleError', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggers', 'trim', 'twoWayBindable', 'ui', 'underError', 'userCls', 'userSelectable', 'validateDisabled', 'validationMessage', 'validators', 'value', 'viewModel', 'weight', 'width', 'x', 'xtype', 'y', 'zIndex',],
            outputs: ['ready', 'action', 'added', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'change', 'clearicontap', 'click', 'destroy', 'dirtychange', 'disabledchange', 'dockedchange', 'erased', 'errorchange', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'keydown', 'keyup', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'mousedown', 'moved', 'orientationchange', 'painted', 'paste', 'positionedchange', 'removed', 'resize', 'rightchange', 'scrollablechange', 'show', 'spin', 'spindown', 'spinup', 'tofront', 'topchange', 'updatedata', 'widthchange',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtSpinnerfieldComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
    ], ExtSpinnerfieldComponent);
    return ExtSpinnerfieldComponent;
}(EngBase));
export { ExtSpinnerfieldComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCSpinnerfield()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0U3Bpbm5lcmZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4vIiwic291cmNlcyI6WyJzcmMvRXh0U3Bpbm5lcmZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzRUFBc0U7QUFDdEUsNkNBQTZDO0FBQzdDLE9BQU8sZUFBZSxNQUFNLHNFQUFzRSxDQUFDO0FBQ25HLE9BQU8sRUFDSCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN4QztJQUE4QyxvREFBTztJQUNqRCxrQ0FDSSxJQUFnQixFQUNnQixhQUFzQixFQUN0RCxFQUFvQjtRQUh4QixZQUtJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxvQkFBb0IsRUFBQyxxQkFBcUIsRUFBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLGtCQUFrQixFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLGVBQWUsRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLEtBQUssRUFBQyxnQkFBZ0IsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxrQkFBa0IsRUFBQyxjQUFjLEVBQUMsc0JBQXNCLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyxlQUFlLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxjQUFjLEVBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsb0JBQW9CLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxhQUFhLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxlQUFlLEVBQUMsTUFBTSxFQUFDLGVBQWUsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLGtCQUFrQixFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsY0FBYyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxjQUFjLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsZ0JBQWdCLEVBQUMsa0JBQWtCLEVBQUMsbUJBQW1CLEVBQUMsWUFBWSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUUsRUFDbDdELENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFDOUIsQ0FBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxzQkFBc0IsRUFBQyxzQkFBc0IsRUFBQyxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBQyxZQUFZLEVBQUMsa0JBQWtCLEVBQUMsdUJBQXVCLEVBQUMsc0JBQXNCLEVBQUMsdUJBQXVCLEVBQUMsc0JBQXNCLEVBQUMseUJBQXlCLEVBQUMsbUJBQW1CLEVBQUMsd0JBQXdCLEVBQUMsWUFBWSxFQUFDLGVBQWUsRUFBQyxpQkFBaUIsRUFBQyxtQkFBbUIsRUFBQyxNQUFNLEVBQUMsY0FBYyxFQUFDLGdCQUFnQixFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxhQUFhLEVBQUMsZ0JBQWdCLEVBQUMsY0FBYyxFQUFDLFFBQVEsRUFBQyxhQUFhLEVBQUMsZ0JBQWdCLEVBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsWUFBWSxFQUFDLGNBQWMsRUFBQyxjQUFjLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxpQkFBaUIsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxnQkFBZ0IsRUFBQyxXQUFXLEVBQUMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxhQUFhLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBRSxFQUN0K0IsRUFBRSxDQUNMLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQTs7SUFDL0IsQ0FBQztpQ0FmUSx3QkFBd0I7SUFpQjFCLDJDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLGtEQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLDhDQUFXLEdBQWxCLFVBQW1CLE9BQU87UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sOENBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTdCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7Z0JBQ3pCLGdCQUFnQjs7SUFKZix3QkFBd0I7UUFQcEMsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxvQkFBb0IsRUFBQyxxQkFBcUIsRUFBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLGtCQUFrQixFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLGVBQWUsRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLEtBQUssRUFBQyxnQkFBZ0IsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxrQkFBa0IsRUFBQyxjQUFjLEVBQUMsc0JBQXNCLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyxlQUFlLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsWUFBWSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxjQUFjLEVBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsb0JBQW9CLEVBQUMsZUFBZSxFQUFDLGdCQUFnQixFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxhQUFhLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsaUJBQWlCLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxlQUFlLEVBQUMsTUFBTSxFQUFDLGVBQWUsRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLGtCQUFrQixFQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUMsY0FBYyxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxjQUFjLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsZ0JBQWdCLEVBQUMsa0JBQWtCLEVBQUMsbUJBQW1CLEVBQUMsWUFBWSxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxHQUFHLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUU7WUFDMTdELE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLHNCQUFzQixFQUFDLHNCQUFzQixFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLFlBQVksRUFBQyxrQkFBa0IsRUFBQyx1QkFBdUIsRUFBQyxzQkFBc0IsRUFBQyx1QkFBdUIsRUFBQyxzQkFBc0IsRUFBQyx5QkFBeUIsRUFBQyxtQkFBbUIsRUFBQyx3QkFBd0IsRUFBQyxZQUFZLEVBQUMsZUFBZSxFQUFDLGlCQUFpQixFQUFDLG1CQUFtQixFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsZ0JBQWdCLEVBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxjQUFjLEVBQUMsUUFBUSxFQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxPQUFPLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsY0FBYyxFQUFDLGNBQWMsRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsWUFBWSxFQUFDLGlCQUFpQixFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixFQUFDLGdCQUFnQixFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLGFBQWEsRUFBQyxrQkFBa0IsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUMsYUFBYSxFQUFFO1lBQy8rQixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsMEJBQXdCLEVBQXhCLENBQXdCLENBQUMsRUFBQyxDQUFDO1lBQ3hGLFFBQVEsRUFBRSwyQkFBMkI7U0FDeEMsQ0FBQztRQUlPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtPQUgxQix3QkFBd0IsQ0FnQ3BDO0lBQUQsK0JBQUM7Q0FBQSxBQWhDRCxDQUE4QyxPQUFPLEdBZ0NwRDtTQWhDWSx3QkFBd0I7QUFtQ3JDLDZCQUE2QjtBQUM3QixpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLGlGQUFpRjtBQUNqRixhQUFhO0FBQ2Isb0JBQW9CO0FBQ3BCLElBQUk7QUFDSix5Q0FBeUM7QUFFekMsa0RBQWtEO0FBQ2xELHlCQUF5QjtBQUN6QiwyQ0FBMkM7QUFDM0Msb0NBQW9DO0FBQ3BDLElBQUk7QUFDSiw0Q0FBNEM7QUFDNUMsbUJBQW1CO0FBQ25CLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsa0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgRVdDU3Bpbm5lcmZpZWxkIGZyb20gJy4uL2Rpc3QvZXh0LXNwaW5uZXJmaWVsZC5jb21wb25lbnQuanMnO1xuLy9pbnB1dHM6IChuZXcgRVdDU3Bpbm5lcmZpZWxkKCkpLnByb3BlcnRpZXMsXG5pbXBvcnQgRVdDU3Bpbm5lcmZpZWxkIGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzLW1vZGVybi9kaXN0L2V4dC1zcGlubmVyZmllbGQuY29tcG9uZW50LmpzJztcbmltcG9ydCB7XG4gICAgSG9zdCxcbiAgICBPcHRpb25hbCxcbiAgICBTa2lwU2VsZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2FuZ3VsYXJiYXNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdFeHRTcGlubmVyZmllbGQnLFxuICAgIGlucHV0czogWydyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWNjZWxlcmF0ZU9uVGFwSG9sZCcsJ2FsaWduU2VsZicsJ2Fsd2F5c09uVG9wJywnYW5pbWF0ZVVuZGVybGluZScsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhdXRvQ2FwaXRhbGl6ZScsJ2F1dG9Db21wbGV0ZScsJ2F1dG9Db3JyZWN0JywnYXV0b0ZpdEVycm9ycycsJ2F1dG9IaWRlSW5wdXRNYXNrJywnYXhpc0xvY2snLCdiYWRGb3JtYXRNZXNzYWdlJywnYmluZCcsJ2JvZHlBbGlnbicsJ2JvcmRlcicsJ2JvdHRvbScsJ2J1YmJsZURpcnR5JywnY2VudGVyZWQnLCdjbGVhcmFibGUnLCdjbHMnLCdjb25zdHJhaW5BbGlnbicsJ2NvbnRlbnRFbCcsJ2NvbnRyb2xsZXInLCdjeWNsZScsJ2RhdGEnLCdkYXRhVHlwZScsJ2RlY2ltYWxzJywnZGVjaW1hbFNlcGFyYXRvcicsJ2RlY2ltYWxzVGV4dCcsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGlydHknLCdkaXNhYmxlZCcsJ2Rpc3BsYXllZCcsJ2RvY2tlZCcsJ2RyYWdnYWJsZScsJ2VkaXRhYmxlJywndW5kZWZpbmVkJywnZXJyb3InLCdlcnJvck1lc3NhZ2UnLCdlcnJvclRhcmdldCcsJ2Vycm9yVGlwJywnZXJyb3JUcGwnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdmbGV4JywnZmxvYXRlZCcsJ2ZvY3VzQ2xzJywnZnVsbHNjcmVlbicsJ3VuZGVmaW5lZCcsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVBbmltYXRpb24nLCdoaWRlTW9kZScsJ2hpZGVPbk1hc2tUYXAnLCdodG1sJywnaWQnLCdpbmxpbmUnLCd1bmRlZmluZWQnLCdpbnB1dE1hc2snLCdpbnB1dFR5cGUnLCdpbnB1dFZhbHVlJywnaW5zdGFuY2VDbHMnLCdpdGVtSWQnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGFiZWwnLCdsYWJlbEFsaWduJywnbGFiZWxDbHMnLCdsYWJlbEluUGxhY2Vob2xkZXInLCdsYWJlbE1pbldpZHRoJywnbGFiZWxUZXh0QWxpZ24nLCdsYWJlbFdpZHRoJywnbGFiZWxXcmFwJywnbGVmdCcsJ2xpc3RlbmVycycsJ21hcmdpbicsJ21heEhlaWdodCcsJ21heExlbmd0aCcsJ21heFZhbHVlJywnbWF4VmFsdWVUZXh0JywnbWF4V2lkdGgnLCdtaW5IZWlnaHQnLCdtaW5WYWx1ZScsJ21pblZhbHVlVGV4dCcsJ21pbldpZHRoJywnbW9kYWwnLCdtb2RlbFZhbGlkYXRpb24nLCduYW1lJywnbmFtZWFibGUnLCdwYWRkaW5nJywncGFyc2VWYWxpZGF0b3InLCdwYXR0ZXJuJywncGxhY2Vob2xkZXInLCd1bmRlZmluZWQnLCdwbHVnaW5zJywncHVibGlzaGVzJywncmVhZE9ubHknLCdyZWNvcmQnLCdyZWZlcmVuY2UnLCdyZWxhdGl2ZScsJ3JlbmRlclRvJywncmVxdWlyZWQnLCdyZXF1aXJlZE1lc3NhZ2UnLCdyaWdodCcsJ3JpcHBsZScsJ3Njcm9sbGFibGUnLCdzZXNzaW9uJywnc2hhZG93Jywnc2hhcmVhYmxlTmFtZScsJ3NoaW0nLCdzaG93QW5pbWF0aW9uJywnc2lkZUVycm9yJywnc3RhdGVmdWwnLCdzdGF0ZWZ1bERlZmF1bHRzJywnc3RhdGVJZCcsJ3N0ZXBWYWx1ZScsJ3N0cmlwQ2hhcnNSZScsJ3N0eWxlJywndGFiSW5kZXgnLCd0ZXh0QWxpZ24nLCd0aXBFcnJvcicsJ3RpdGxlRXJyb3InLCd0b0Zyb250T25TaG93JywndG9vbHRpcCcsJ3RvcCcsJ3RvdWNoQWN0aW9uJywndHBsJywndHBsV3JpdGVNb2RlJywndHJhbnNsYXRhYmxlJywndHJpZ2dlcnMnLCd0cmltJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VuZGVyRXJyb3InLCd1c2VyQ2xzJywndXNlclNlbGVjdGFibGUnLCd2YWxpZGF0ZURpc2FibGVkJywndmFsaWRhdGlvbk1lc3NhZ2UnLCd2YWxpZGF0b3JzJywndmFsdWUnLCd2aWV3TW9kZWwnLCd3ZWlnaHQnLCd3aWR0aCcsJ3gnLCd4dHlwZScsJ3knLCd6SW5kZXgnLF0sXG4gICAgb3V0cHV0czogWydyZWFkeScsJ2FjdGlvbicsJ2FkZGVkJywnYmVmb3JlYm90dG9tY2hhbmdlJywnYmVmb3JlY2VudGVyZWRjaGFuZ2UnLCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsJ2JlZm9yZWRvY2tlZGNoYW5nZScsJ2JlZm9yZWhlaWdodGNoYW5nZScsJ2JlZm9yZWhpZGRlbmNoYW5nZScsJ2JlZm9yZWhpZGUnLCdiZWZvcmVsZWZ0Y2hhbmdlJywnYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJywnYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLCdiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLCdiZWZvcmVtaW5XaWR0aGNoYW5nZScsJ2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJywnYmVmb3JlcmlnaHRjaGFuZ2UnLCdiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJywnYmVmb3Jlc2hvdycsJ2JlZm9yZXRvZnJvbnQnLCdiZWZvcmV0b3BjaGFuZ2UnLCdiZWZvcmV3aWR0aGNoYW5nZScsJ2JsdXInLCdib3R0b21jaGFuZ2UnLCdjZW50ZXJlZGNoYW5nZScsJ2NoYW5nZScsJ2NsZWFyaWNvbnRhcCcsJ2NsaWNrJywnZGVzdHJveScsJ2RpcnR5Y2hhbmdlJywnZGlzYWJsZWRjaGFuZ2UnLCdkb2NrZWRjaGFuZ2UnLCdlcmFzZWQnLCdlcnJvcmNoYW5nZScsJ2Zsb2F0aW5nY2hhbmdlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2Z1bGxzY3JlZW4nLCdoZWlnaHRjaGFuZ2UnLCdoaWRkZW5jaGFuZ2UnLCdoaWRlJywnaW5pdGlhbGl6ZScsJ2tleWRvd24nLCdrZXl1cCcsJ2xlZnRjaGFuZ2UnLCdtYXhIZWlnaHRjaGFuZ2UnLCdtYXhXaWR0aGNoYW5nZScsJ21pbkhlaWdodGNoYW5nZScsJ21pbldpZHRoY2hhbmdlJywnbW91c2Vkb3duJywnbW92ZWQnLCdvcmllbnRhdGlvbmNoYW5nZScsJ3BhaW50ZWQnLCdwYXN0ZScsJ3Bvc2l0aW9uZWRjaGFuZ2UnLCdyZW1vdmVkJywncmVzaXplJywncmlnaHRjaGFuZ2UnLCdzY3JvbGxhYmxlY2hhbmdlJywnc2hvdycsJ3NwaW4nLCdzcGluZG93bicsJ3NwaW51cCcsJ3RvZnJvbnQnLCd0b3BjaGFuZ2UnLCd1cGRhdGVkYXRhJywnd2lkdGhjaGFuZ2UnLF0sXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFNwaW5uZXJmaWVsZENvbXBvbmVudCl9XSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFNwaW5uZXJmaWVsZENvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2UsXG4gICAgICAgIHZjOiBWaWV3Q29udGFpbmVyUmVmXG4gICAgICAgICkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgWydyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWNjZWxlcmF0ZU9uVGFwSG9sZCcsJ2FsaWduU2VsZicsJ2Fsd2F5c09uVG9wJywnYW5pbWF0ZVVuZGVybGluZScsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhdXRvQ2FwaXRhbGl6ZScsJ2F1dG9Db21wbGV0ZScsJ2F1dG9Db3JyZWN0JywnYXV0b0ZpdEVycm9ycycsJ2F1dG9IaWRlSW5wdXRNYXNrJywnYXhpc0xvY2snLCdiYWRGb3JtYXRNZXNzYWdlJywnYmluZCcsJ2JvZHlBbGlnbicsJ2JvcmRlcicsJ2JvdHRvbScsJ2J1YmJsZURpcnR5JywnY2VudGVyZWQnLCdjbGVhcmFibGUnLCdjbHMnLCdjb25zdHJhaW5BbGlnbicsJ2NvbnRlbnRFbCcsJ2NvbnRyb2xsZXInLCdjeWNsZScsJ2RhdGEnLCdkYXRhVHlwZScsJ2RlY2ltYWxzJywnZGVjaW1hbFNlcGFyYXRvcicsJ2RlY2ltYWxzVGV4dCcsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGlydHknLCdkaXNhYmxlZCcsJ2Rpc3BsYXllZCcsJ2RvY2tlZCcsJ2RyYWdnYWJsZScsJ2VkaXRhYmxlJywndW5kZWZpbmVkJywnZXJyb3InLCdlcnJvck1lc3NhZ2UnLCdlcnJvclRhcmdldCcsJ2Vycm9yVGlwJywnZXJyb3JUcGwnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdmbGV4JywnZmxvYXRlZCcsJ2ZvY3VzQ2xzJywnZnVsbHNjcmVlbicsJ3VuZGVmaW5lZCcsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVBbmltYXRpb24nLCdoaWRlTW9kZScsJ2hpZGVPbk1hc2tUYXAnLCdodG1sJywnaWQnLCdpbmxpbmUnLCd1bmRlZmluZWQnLCdpbnB1dE1hc2snLCdpbnB1dFR5cGUnLCdpbnB1dFZhbHVlJywnaW5zdGFuY2VDbHMnLCdpdGVtSWQnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGFiZWwnLCdsYWJlbEFsaWduJywnbGFiZWxDbHMnLCdsYWJlbEluUGxhY2Vob2xkZXInLCdsYWJlbE1pbldpZHRoJywnbGFiZWxUZXh0QWxpZ24nLCdsYWJlbFdpZHRoJywnbGFiZWxXcmFwJywnbGVmdCcsJ2xpc3RlbmVycycsJ21hcmdpbicsJ21heEhlaWdodCcsJ21heExlbmd0aCcsJ21heFZhbHVlJywnbWF4VmFsdWVUZXh0JywnbWF4V2lkdGgnLCdtaW5IZWlnaHQnLCdtaW5WYWx1ZScsJ21pblZhbHVlVGV4dCcsJ21pbldpZHRoJywnbW9kYWwnLCdtb2RlbFZhbGlkYXRpb24nLCduYW1lJywnbmFtZWFibGUnLCdwYWRkaW5nJywncGFyc2VWYWxpZGF0b3InLCdwYXR0ZXJuJywncGxhY2Vob2xkZXInLCd1bmRlZmluZWQnLCdwbHVnaW5zJywncHVibGlzaGVzJywncmVhZE9ubHknLCdyZWNvcmQnLCdyZWZlcmVuY2UnLCdyZWxhdGl2ZScsJ3JlbmRlclRvJywncmVxdWlyZWQnLCdyZXF1aXJlZE1lc3NhZ2UnLCdyaWdodCcsJ3JpcHBsZScsJ3Njcm9sbGFibGUnLCdzZXNzaW9uJywnc2hhZG93Jywnc2hhcmVhYmxlTmFtZScsJ3NoaW0nLCdzaG93QW5pbWF0aW9uJywnc2lkZUVycm9yJywnc3RhdGVmdWwnLCdzdGF0ZWZ1bERlZmF1bHRzJywnc3RhdGVJZCcsJ3N0ZXBWYWx1ZScsJ3N0cmlwQ2hhcnNSZScsJ3N0eWxlJywndGFiSW5kZXgnLCd0ZXh0QWxpZ24nLCd0aXBFcnJvcicsJ3RpdGxlRXJyb3InLCd0b0Zyb250T25TaG93JywndG9vbHRpcCcsJ3RvcCcsJ3RvdWNoQWN0aW9uJywndHBsJywndHBsV3JpdGVNb2RlJywndHJhbnNsYXRhYmxlJywndHJpZ2dlcnMnLCd0cmltJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VuZGVyRXJyb3InLCd1c2VyQ2xzJywndXNlclNlbGVjdGFibGUnLCd2YWxpZGF0ZURpc2FibGVkJywndmFsaWRhdGlvbk1lc3NhZ2UnLCd2YWxpZGF0b3JzJywndmFsdWUnLCd2aWV3TW9kZWwnLCd3ZWlnaHQnLCd3aWR0aCcsJ3gnLCd4dHlwZScsJ3knLCd6SW5kZXgnLF0sXG4gICAgICAgICAgICAobmV3IEVXQ1NwaW5uZXJmaWVsZCgpKS5ldmVudHMsXG4gICAgICAgICAgICBbJ3JlYWR5JywnYWN0aW9uJywnYWRkZWQnLCdiZWZvcmVib3R0b21jaGFuZ2UnLCdiZWZvcmVjZW50ZXJlZGNoYW5nZScsJ2JlZm9yZWRpc2FibGVkY2hhbmdlJywnYmVmb3JlZG9ja2VkY2hhbmdlJywnYmVmb3JlaGVpZ2h0Y2hhbmdlJywnYmVmb3JlaGlkZGVuY2hhbmdlJywnYmVmb3JlaGlkZScsJ2JlZm9yZWxlZnRjaGFuZ2UnLCdiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLCdiZWZvcmVtYXhXaWR0aGNoYW5nZScsJ2JlZm9yZW1pbkhlaWdodGNoYW5nZScsJ2JlZm9yZW1pbldpZHRoY2hhbmdlJywnYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLCdiZWZvcmVyaWdodGNoYW5nZScsJ2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLCdiZWZvcmVzaG93JywnYmVmb3JldG9mcm9udCcsJ2JlZm9yZXRvcGNoYW5nZScsJ2JlZm9yZXdpZHRoY2hhbmdlJywnYmx1cicsJ2JvdHRvbWNoYW5nZScsJ2NlbnRlcmVkY2hhbmdlJywnY2hhbmdlJywnY2xlYXJpY29udGFwJywnY2xpY2snLCdkZXN0cm95JywnZGlydHljaGFuZ2UnLCdkaXNhYmxlZGNoYW5nZScsJ2RvY2tlZGNoYW5nZScsJ2VyYXNlZCcsJ2Vycm9yY2hhbmdlJywnZmxvYXRpbmdjaGFuZ2UnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnZnVsbHNjcmVlbicsJ2hlaWdodGNoYW5nZScsJ2hpZGRlbmNoYW5nZScsJ2hpZGUnLCdpbml0aWFsaXplJywna2V5ZG93bicsJ2tleXVwJywnbGVmdGNoYW5nZScsJ21heEhlaWdodGNoYW5nZScsJ21heFdpZHRoY2hhbmdlJywnbWluSGVpZ2h0Y2hhbmdlJywnbWluV2lkdGhjaGFuZ2UnLCdtb3VzZWRvd24nLCdtb3ZlZCcsJ29yaWVudGF0aW9uY2hhbmdlJywncGFpbnRlZCcsJ3Bhc3RlJywncG9zaXRpb25lZGNoYW5nZScsJ3JlbW92ZWQnLCdyZXNpemUnLCdyaWdodGNoYW5nZScsJ3Njcm9sbGFibGVjaGFuZ2UnLCdzaG93Jywnc3BpbicsJ3NwaW5kb3duJywnc3BpbnVwJywndG9mcm9udCcsJ3RvcGNoYW5nZScsJ3VwZGF0ZWRhdGEnLCd3aWR0aGNoYW5nZScsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdzcGlubmVyZmllbGQnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG5cblxuLy8gZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHMpIHtcbi8vICAgICByZXR1cm4gcy5tYXRjaCgvW2Etel0rL2dpKVxuLy8gICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLmpvaW4oJycpXG4vLyB9XG4vLyB2YXIgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZSh0YWdOYW1lKVxuXG4vL3ZhciBldmVudHMgPSAobmV3IEVXQ1NwaW5uZXJmaWVsZCgpKS5ldmVudG5hbWVzO1xuLy92YXIgZXZlbnRuYW1lc2FsbCA9IFtdO1xuLy9ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgZXZlbnRuYW1lc2FsbC5wdXNoKGV2ZW50Lm5hbWUpXG4vL30pXG4vL2NvbnN0IGRpc3RpbmN0ID0gKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuLy8gICAgLy9yZXR1cm4gdHJ1ZVxuLy8gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuLy99XG4vL3ZhciBldmVudG5hbWVzID0gZXZlbnRuYW1lc2FsbC5maWx0ZXIoZGlzdGluY3QpO1xuIl19