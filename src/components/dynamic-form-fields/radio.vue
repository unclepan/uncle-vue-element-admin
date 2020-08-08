<template>
  <container :param="param">
    <el-radio-group
      @change="checkMode('handleFieldBlur', ...arguments)"
      v-if="editingStatus"
      v-model="value"
      v-bind="param.meta">
      <el-radio
        v-for="(item, index) in options"
        :label="item.value"
        :key="index">
        {{item.name}}
      </el-radio>
    </el-radio-group>
    <span v-else>{{value || '字段无值'}}</span>
  </container>
</template>

<script>
import { isArray, isFunction } from 'lib/validate';
import fieldMixin from './basic/field-mixin';

export default {
  INDEX: ['RADIO'],
  mixins: [
    fieldMixin,
  ],
  data() {
    return {
      options: [],
    };
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
