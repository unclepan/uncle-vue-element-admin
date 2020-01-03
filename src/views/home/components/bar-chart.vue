<template>
  <div :class="$style['echarts-wrap']">
    <pan-chart :options="data"  autoresize/>
  </div>

</template>

<script>
import charts from 'components/chart/index.vue';

export default {
  components: {
    'pan-chart': charts,
  },
  data() {
    return {
      data: {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        legend: {
          data: ['A级门店', 'B级门店', 'C级门店'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          max: 1000,
        },
        yAxis: {
          type: 'category',
          data: ['福建', '广州', '厦门', '南宁', '背景', '长沙', '重庆'],
        },
        series: [
          {
            name: 'A级门店',
            type: 'bar',
            stack: '总量',
            barWidth: 30,
            itemStyle: {
              normal: {
                color: '#06d3cd',
                barBorderRadius: [20, 20, 20, 20],
              },
            },
            label: {
              normal: {
                show: true,
                position: 'insideRight',
              },
            },
            z: 10,
            data: [320, 302, 301, 334, 390, 330, 320],
          },
          {
            name: 'B级门店',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              normal: {
                color: '#ebe806',
                shadowBlur: [0, 0, 0, 10],
                shadowColor: '#ebe806',
                barBorderRadius: [20, 20, 20, 20],
                shadowOffsetX: -20,
              },
            },
            label: {
              normal: {
                show: true,
                position: 'insideRight',
              },
            },
            z: 5,
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: 'C级门店',
            type: 'bar',
            stack: '总量',
            itemStyle: {
              normal: {
                barBorderRadius: [20, 20, 20, 20],
                color: '#ff5624',
                shadowBlur: [0, 0, 0, 10],
                shadowColor: '#ff5624',
                shadowOffsetX: -20,
              },
            },
            label: {
              normal: {
                show: true,
                position: 'insideRight',
              },
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          { // 灰色背景柱状图
            type: 'bar',
            barGap: '-100%',
            barWidth: 30,
            itemStyle: {
              normal: {
                color: '#ccc',
                barBorderRadius: [20, 20, 20, 20],
              },
            },
            z: -10,
            data: ['1000', '1000'],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" module>
.echarts-wrap{
  background: #ffffff;
  padding: 20px;
}
</style>
