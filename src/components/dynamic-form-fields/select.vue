<template>
  <container :param="param">
    <el-select
      @blur="checkMode('handleFieldBlur', ...arguments)"
      v-if="editingStatus"
      :style="{width:'100%'}"
      v-model="value"
      v-bind="param.meta">
      <el-option
        v-for="(item, index) in options"
        :key="index"
        :label="item.name"
        :value="item.value">
        </el-option>
    </el-select>
    <span v-else>{{value || '字段无值'}}</span>
  </container>
</template>

<script>
import { isArray, isFunction } from 'lib/validate';
import fieldMixin from './basic/field-mixin';

export default {
  INDEX: ['SELECT', 'SELECTMULTIPLE', 'SELECTREMOTE'],
  mixins: [
    fieldMixin,
  ],
  props: {
  },
  data() {
    return {
      options: [],
    };
  },
  components: {
  },
  created() {
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (isArray(this.param.options)) {
        this.options = this.param.options;
      } else if (isFunction(this.param.options)) {
        this.param.options(this.cbOptions);
      }
    },
    cbOptions(val) {
      this.options = val.data;
    },
  },
};
</script>

<style lang="scss" module>
</style>
