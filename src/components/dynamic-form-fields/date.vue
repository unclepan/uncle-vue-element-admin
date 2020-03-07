<template>
  <container :param="param">
    <el-date-picker
      @change="checkMode('handleFieldBlur', ...arguments)"
      v-if="editingStatus"
      :style="{width:'100%'}"
      v-model="value"
      v-bind="addParam">
    </el-date-picker>
    <span v-else>{{value || '字段无值'}}</span>
  </container>
</template>

<script>
import fieldMixin from './basic/field-mixin';

export default {
  INDEX: ['YEAR', 'MONTH', 'DATE', 'DATES', 'WEEK', 'DATETIME', 'DATETIMERANGE', 'DATERANGE', 'MONTHRANGE'],
  mixins: [
    fieldMixin,
  ],
  computed: {
    addParam() {
      if (this.$options.INDEX.indexOf(this.param.type) > -1) {
        return { ...this.param.meta, type: this.param.type.toLowerCase() };
      }
      return { ...this.param.meta };
    },
  },
};
</script>

<style lang="scss" module>
</style>
