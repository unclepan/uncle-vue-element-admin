<template>
  <container :param="param">
    <el-input
      @blur="checkMode('handleFieldBlur', ...arguments)"
      v-if="editingStatus"
      :style="{width:'100%'}"
      v-model="value"
      v-bind="param.meta">
    </el-input>
    <span v-else>{{value || '字段无值'}}</span>
  </container>
</template>

<script>
import fieldMixin from './basic/field-mixin';

export default {
  INDEX: ['TEXT', 'TEXTAREA', 'PHONE', 'URL', 'EMAIL'],
  mixins: [
    fieldMixin,
  ],
};
</script>

<style lang="scss" module>
</style>
