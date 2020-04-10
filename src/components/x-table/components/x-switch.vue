<template>
  <div>
    <el-switch
      @change="change()"
      v-model="value"
      :active-value="active"
      :inactive-value="inactive"
      active-color="#13ce66"
      inactive-color="#ff4949"
      v-bind="column.components.meta">
    </el-switch>
  </div>
</template>

<script>
import { getPropObject } from 'lib/vue-prop';

export default {
  props: {
    row: getPropObject(),
    column: getPropObject(),
  },
  data() {
    return {
      value: this.row[this.column.prop],
    };
  },
  computed: {
    active() {
      return this.column.components.active === true ? true : 1;
    },
    inactive() {
      return this.column.components.inactive === false ? false : 0;
    },
  },
  components: {
  },
  mounted() {
  },
  methods: {
    change() {
      this.column.components.func({ row: this.row, external: { value: this.value } });
    },
  },
};
</script>
<style lang="scss" module>
</style>
