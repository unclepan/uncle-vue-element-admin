<template>
  <div :class="$style.monitor">
    <x-aside>
      自研前端监控方案，亮点在同时支持无埋点和嵌入式埋点哦。可监控三类信息：行为监控，性能监控，页面错误监控。按信息分类分成五类上报的事件类型，行为监控包含：点击事件（click），页面进入事件（stay），页面关闭事件（close）。性能监控包含：监控事件（per）。页面错误包含：错误（error）。请查看
      <a href="https://github.com/unclepan/zui-monitor" target="_blank">zui-monitor</a>
    </x-aside>
    <img :class="$style.pic" src="@/assets/images/monitor.png"/>
  </div>
</template>

<script>
import aside from 'components/x-aside.vue';

export default {
  name: 'monitor',
  components: {
    'x-aside': aside,
  },
};
</script>

<style lang="scss" module>
.monitor{
  background: #ffffff;
  padding: 16px;
  .pic{
    width: 100%;
    padding-top: 10px;
  }
}
</style>
