
import Fields from './fields';
import Input from './input.vue';
import Select from './select.vue';
import xNumber from './number.vue';
import Switch from './switch.vue';
import xDate from './date.vue';
import xUpload from './upload.vue';
import xRadio from './radio.vue';
import xCheckbox from './checkbox.vue';
import xStatic from './static.vue';

export const some = [Input, Select, xNumber, Switch, xDate, xUpload, xRadio, xCheckbox, xStatic];
export default new Fields(some);
