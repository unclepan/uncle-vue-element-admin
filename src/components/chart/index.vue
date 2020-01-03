<template>
  <v-chart :options="options"  autoresize/>
</template>

<style>
.echarts {
  width: 100%;
}
</style>

<script>
import { getPropObject } from 'lib/vue-prop';
import ECharts from './e-charts.vue';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/polar';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/map';
import 'echarts/lib/chart/radar';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/effectScatter';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/geo';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/dataset';


export default {
  props: {
    options: getPropObject(),
  },
  components: {
    'v-chart': ECharts,
  },
  data() {
    return {
    };
  },
};
</script>
