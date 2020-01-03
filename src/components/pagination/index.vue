<template>
  <div :class="$style.pagination">
    <el-pagination
      background
      :pager-count="5"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagina.current"
      :page-sizes="[10, 50, 100, 300]"
      :page-size="pagina.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagina.total">
    </el-pagination>
  </div>
</template>

<script>
import { getPropFunction, getPropObject } from 'lib/vue-prop';

export default {
  props: {
    pagina: getPropObject(),
    sizeChange: getPropFunction(),
    currentChange: getPropFunction(),
  },
  data() {
    return {};
  },
  methods: {
    handleSizeChange(val) {
      this.sizeChange(val);
    },
    handleCurrentChange(val) {
      this.currentChange(val);
    },
  },
};
</script>
<style lang="scss" module>
.pagination{
  margin-top: 18px;
  text-align: center;
}
</style>
