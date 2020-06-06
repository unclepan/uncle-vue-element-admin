<template>
  <el-row :gutter="10" :class="$style['panel-group']">
    <el-col :xs="12" :sm="12" :lg="6" :class="$style['card-panel-col']" v-for="(item, index) in panelData" :key="index">
      <el-card shadow="hover">
        <div :class="$style['card-panel']" @click="handleSetLineChartData(item.type)">
          <div :class="[$style['card-panel-icon-wrapper'],$style[`icon-wrapper-${index}`]]">
            <i :class="item.icon"></i>
          </div>

          <div :class="$style['card-panel-description']">
            <div :class="$style['card-panel-text']">
              {{item.text}}
            </div>
            <count-to :start-val="item.start" :end-val="item.end" :duration="item.duration" :class="$style['card-panel-num']" />
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to';

export default {
  data() {
    return {
      panelData: [
        {
          type: 'marketing',
          icon: 'el-icon-s-marketing',
          text: '历史访问',
          start: 0,
          end: 102400,
          duration: 2600,
        },
        {
          type: 'data',
          icon: 'el-icon-s-data',
          text: '当前在线',
          start: 0,
          end: 81212,
          duration: 3000,
        },
        {
          type: 'order',
          icon: 'el-icon-s-order',
          text: '已办事件',
          start: 0,
          end: 9280,
          duration: 3200,
        },
        {
          type: 'management',
          icon: 'el-icon-s-management',
          text: '待办事件',
          start: 0,
          end: 13600,
          duration: 3600,
        },
      ],
    };
  },
  components: {
    CountTo,
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type);
    },
  },
};
</script>

<style lang="scss" module>
.panel-group{
  .card-panel-col {
    margin-bottom: 10px;
    .card-panel {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      &:hover {
        .card-panel-icon-wrapper {
          color: #fff;
        }
        .icon-wrapper-0 {
          background: #40c9c6;
        }
        .icon-wrapper-1 {
          background: #36a3f7;
        }
        .icon-wrapper-2 {
          background: #f4516c;
        }
        .icon-wrapper-3 {
          background: #34bfa3
        }
      }
      .card-panel-icon-wrapper {
        padding: 16px;
        transition: all 0.38s ease-out;
        border-radius: 6px;
        i{
          font-size: 48px;
        }
      }
      .icon-wrapper-0 {
        color: #40c9c6;
      }

      .icon-wrapper-1 {
        color: #36a3f7;
      }

      .icon-wrapper-2 {
        color: #f4516c;
      }

      .icon-wrapper-3 {
        color: #34bfa3
      }
      .card-panel-description{
        font-weight: bold;
        margin-left: 26px;
        .card-panel-text {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
          margin-bottom: 12px;
        }
        .card-panel-num {
          font-size: 24px;
          color: #000000;
          font-weight: bold
        }
      }
    }
  }
}
</style>
