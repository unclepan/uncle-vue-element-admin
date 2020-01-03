<template>
  <div>
    <el-switch
      @change="change()"
      v-model="value"
      :active-value="1"
      :inactive-value="0"
      active-color="#13ce66"
      inactive-color="#ff4949">
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
