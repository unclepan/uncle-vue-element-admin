
import Fields from './fields';
import Input from './input.vue';
import Select from './select.vue';
import xNumber from './number.vue';

export const some = [Input, Select, xNumber];
export default new Fields(some);
