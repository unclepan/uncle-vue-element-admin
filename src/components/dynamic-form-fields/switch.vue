<template>
  <container :param="param">
    <el-switch
      @change="checkMode('handleFieldBlur', ...arguments)"
      v-if="editingStatus"
      v-model="value"
      v-bind="param.meta">
    </el-switch>
    <span v-else>{{value || '字段无值'}}</span>
  </container>
</template>

<script>
import fieldMixin from './basic/field-mixin';

export default {
  INDEX: ['SWITCH'],
  mixins: [
    fieldMixin,
  ],
};
</script>

<style lang="scss" module>
</style>
