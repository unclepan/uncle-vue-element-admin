<template>
  <div :class="$style.guide">
    <aside>
      引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于
      <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.</a>
    </aside>

    <guide :key="$i18n.locale">
      <el-button icon="el-icon-question" type="primary">
        {{$t('m.guide')}}
      </el-button>
    </guide>
  </div>
</template>

<script>
import guide from 'components/guide/index.vue';

export default {
  components: {
    guide,
  },
  data() {
    return {
    };
  },
  methods: {

  },
};
</script>

<style lang="scss" module>
.guide{
  background: #ffffff;
  padding: 16px;
  aside{
    background: #eef1f6;
    padding: 8px 24px;
    margin-bottom: 20px;
    border-radius: 2px;
    display: block;
    line-height: 32px;
    font-size: 16px;
    color: #2c3e50;
    a {
      color: #337ab7;
    }
  }
}
</style>
