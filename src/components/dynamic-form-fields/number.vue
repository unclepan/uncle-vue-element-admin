<template>
  <container :param="param">
    <el-input
      @blur="checkMode('handleFieldBlur', ...arguments)"
      v-if="editingStatus"
      :style="{width:'100%'}"
      v-model.number.trim="value"
      v-bind="param.meta">
      <template slot="append" v-if="param.type === 'CURRENCY'">元</template>
    </el-input>
    <span v-else>{{value || '字段无值'}}</span>
  </container>
</template>

<script>
import fieldMixin from './basic/field-mixin';

export default {
  INDEX: ['NUMBER', 'CURRENCY', 'PERCENT'],
  mixins: [
    fieldMixin,
  ],
};
</script>

<style lang="scss" module>
</style>
