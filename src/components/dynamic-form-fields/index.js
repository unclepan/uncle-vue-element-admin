
import Fields from './fields';
import Input from './input.vue';
import Select from './select.vue';
import xNumber from './number.vue';
import Switch from './switch.vue';
import xDate from './date.vue';
import xUpload from './upload.vue';

export const some = [Input, Select, xNumber, Switch, xDate, xUpload];
export default new Fields(some);
