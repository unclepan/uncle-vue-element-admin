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
  created() {
    this.change();
    setInterval(() => { this.change(); }, 1800);
  },
  data() {
    return {
      data: {},
    };
  },
  methods: {
    change() {
      const v = {
        tooltip: {
          trigger: 'axis',
          position(pt) {
            return [pt[0], '14%'];
          },
        },

        legend: {
          data: ['今日投诉曲线', '平均线', '目标线'],
          x: 'left',
        },

        xAxis: {
          type: 'category',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          boundaryGap: true,

          data: ['0.1', '1', '1.9', '2.8', '3.7', '4.6', '5.5', '6.4', '7.3', '8.2', '9.1', '10', '10.9', '11.8', '12.7', '13.6'],
        },
        yAxis: [{
          type: 'value',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
            },
          },
          splitArea: {// 背景条纹
            show: true,
            areaStyle: {
              color: [
                'rgba(255,255,255,0)',
                'rgba(242,243,248,1)',
              ],
            },

          },
          min: 0,
          splitNumber: 5,
        }],
        dataZoom: [{
          type: 'slider', /* 类型 */
          xAxisIndex: 0, /* 对应的轴 */
          bottom: '10', /* 位置，定位 */
          start: 20, /* 开始 */
          end: 100, /* 结束 */
          handleIcon: 'M0,0 v9.7h5 v-9.7h-5 Z',
          handleStyle: { /* 手柄的样式 */
            color: '#40bcf9',
            borderColor: '#1fb2fb',
          },
          backgroundColor: '#e2f3ff', /* 背景 */
          dataBackground: { /* 数据背景 */
            lineStyle: {
              color: '#000000',
            },
            areaStyle: {
              color: '#d4d9dd',
            },
          },
          fillerColor: 'rgba(31,178,251,0.2)', /* 被start和end遮住的背景 */
          labelFormatter(value, params) { /* 拖动时两端的文字提示 */
            let str = '';
            if (params.length > 4) {
              str = `${params.substring(0, 4)}…`;
            } else {
              str = params;
            }
            return str;
          },
        }],
        grid: {
          left: '1rem',
          right: '1rem',
          bottom: '10%',
          top: '11%',
          containLabel: true,
          borderWidth: '0',
        },
        series: [
          {
            name: '今日投诉曲线',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 10,
            data: [0, 0.5, 0.8, 1, 1.2, 1.5, 1.6, 1.8, 2.5, 3, 4, 4.8, 6, 7.4, 8.4, 9.2].map(item => item * Math.random() + Math.random()),
            itemStyle: {
              normal: {
                color: '#5fbdff',
                lineStyle: {
                  width: 3,
                },
              },
            },

          },
          {
            name: '平均线',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 10,
            data: [0, 0.9, 1.1, 1.5, 2, 1.5, 1.6, 1.8, 1.9, 2, 2.4, 2.8, 3, 3.5, 4, 5],
            itemStyle: {
              normal: {
                color: '#ff975f',
                lineStyle: {
                  width: 3,
                  type: 'dotted',
                },
              },
            },

          },
          {
            name: '目标线',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 10,
            data: [0, 1, 1.2, 1.3, 1.6, 1.8, 2, 3, 3.5, 4, 4.5, 4.5, 4.6, 7, 6.5, 7],
            itemStyle: {
              normal: {
                color: '#86ce80',
                lineStyle: {
                  width: 3,
                  type: 'dotted',
                },
              },
            },

          },
        ],
      };
      this.data = v;
    },
  },
};
</script>

<style lang="scss" module>
.echarts-wrap{
  background: #ffffff;
  padding: 20px;
}
</style>
