<template>
  <el-tooltip :popper-class="$style.tooltip" placement="top">
    <div slot="content">
      <span v-html="row[column.prop]"></span>
    </div>
    <el-button>more</el-button>
  </el-tooltip>
</template>

<script>
import { getPropObject } from 'lib/vue-prop';

export default {
  props: {
    row: getPropObject(), // 行数据
    column: getPropObject(),
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
};
</script>
<style lang="scss" module>
.tooltip{
  max-width: 960px;
}
</style>
