<template>
  <div :class="$style['home-container']">
    <panel-group @handleSetLineChartData="handleSetLineChartData" />
    <main-chart ref='mainChart'/>
    <el-row :gutter="10" :class="$style['other-chart']">
      <el-col :span="8"><pie-chart/></el-col>
      <el-col :span="16"><bar-chart/></el-col>
    </el-row>
  </div>
</template>

<script>

import panelGroup from './components/panel-group.vue';
import mainChart from './components/main-chart.vue';
import pieChart from './components/pie-chart.vue';
import barChart from './components/bar-chart.vue';

export default {
  name: 'home',
  components: {
    panelGroup,
    mainChart,
    pieChart,
    barChart,
  },
  data() {
    return {
    };
  },
  methods: {
    handleSetLineChartData() {
      this.$refs.mainChart.change();
    },
  },
};
</script>

<style lang="scss" module>
.home-container{
  .other-chart{
    margin-top: 10px;
  }
}
</style>
