<template>
  <container :param="param">
    <span :class="$style.static">{{value || '字段无值'}}</span>
  </container>
</template>

<script>
import fieldMixin from './basic/field-mixin';

export default {
  INDEX: ['STATIC'],
  mixins: [
    fieldMixin,
  ],
};
</script>
<style lang="scss" module>
.static{
  padding-right: 12px;
  color: #9e9e9e;
}
</style>
