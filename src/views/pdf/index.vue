
<template>
  <div :class="$style.pdf">
    <x-aside>
      在这里，我们使用window.print（）来实现下载PDF的功能。
    </x-aside>

    <router-link target="_blank" to="/pdf/download">
      <el-button type="primary">
        点击下载PDF
      </el-button>
    </router-link>
  </div>
</template>

<script>
import aside from 'components/x-aside.vue';

export default {
  components: {
    'x-aside': aside,
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
.pdf{
  background: #ffffff;
  padding: 16px;
}
</style>
