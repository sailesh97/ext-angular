/**
 * @class Ext.field.RadioGroup
 * @extend Ext.field.FieldGroupContainer
 * @xtype radiogroup
 * 
 * This Field is useful for containing multiple {@link Ext.field.Radio radiofield}.
 *
 * It plots items into wither horizontal / vertical depending on 
 * {@link Ext.field.FieldGroupContainer#vertical} config properties.
 * 
 * # Example usage:
 *
 *            @example packages=[extangular]
 *            import { Component } from '@angular/core'
 *            declare var Ext: any;
 *
 *            @Component({
 *                selector: 'radiogroup-component',
 *                styles: [``],
 *                template: `
 *                  <formpanel
 *                       title="RadioGroup Example"
 *                       [width]="600"
 *                       [height]="400"
 *                       [fullscreen]="true"
 *                   >
 *                       <radiogroup 
 *                           [label]="'Two Columns'"
 *                           [vertical]="true"
 *                           [height]="100"
 *                       >
 *                           <radiofield
 *                               [label]="'Item 1'"
 *                               [name]="'rb'"
 *                               value="1"
 *                           >
 *                           </radiofield>
 *                           <radiofield
 *                               [label]="'Item 2'"
 *                               [name]="'rb'"
 *                               value="2"
 *                               [checked]="true"
 *                           >
 *                           </radiofield>
 *                           <radiofield
 *                               [label]="'Item 3'"
 *                               [name]="'rb'"
 *                               value="3"
 *                           >
 *                           </radiofield>
 *                           <radiofield
 *                               [label]="'Item 4'"
 *                               [name]="'rb'"
 *                               value="4"
 *                           >
 *                           </radiofield>
 *                           <radiofield
 *                               [label]="'Item 5'"
 *                               [name]="'rb'"
 *                               value="5"
 *                           >
 *                           </radiofield>
 *                           <radiofield
 *                               [label]="'Item 6'"
 *                               [name]="'rb'"
 *                               value="6"
 *                           >
 *                           </radiofield>
 *                       </radiogroup>
 *                   </formpanel>`
 *              })
 *            export class RadioGroupComponents  {}
 * 
 * @since 7.0
 */
   
/**
 * @property {Boolean} isRadioGroup
 * The value `true` to identify an object as an instance of this or derived class.
 * @readonly
 */

/**
 * @property {String} defaultType
 * Default item type in radio group
 * @readonly
 */

/**
 * @cfg {Boolean} simpleValue
 * When set to `true` the `value` of this group of `radiofield` components will be
 * mapped to the `value` of the checked item.
 *
 * This field allows the `radiogroup` to participate in binding an entire group of
 * radio buttons to a single value.
 */

/**
 * @method getChecked
 * return first checked radio field from group
 */

/**
 * @method setValue
 * Sets the checked status of the radio group.
 * If {@link #simpleValue `simpleValue`} is `true`, 
 * value must be a single value, the child radiobutton matching the value
 * will be checked. If `simpleValue` is not used, value must be an object of name-value
 * pairs, each child radiobutton matching the name and value will be checked.
 * @param {String/Object} value Checked value, or the value of the sibling radio button
 * to check.
 * @return {Ext.field.RadioGroup} this
 */
   