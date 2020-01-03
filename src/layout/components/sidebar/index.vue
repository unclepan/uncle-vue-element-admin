<template>
  <div :class="$style.root">
    <vue-scroll :ops='ops'>
      <div :class="$style.menu" :style="{width: isCollapse ? '64px': '200px'}">
        <img v-if="isCollapse" :class="$style.logo" src="@/assets/images/s-logo.png"/>
        <img v-else :class="$style.logo" src="@/assets/images/l-logo.png"/>
        <el-menu
            @open="open"
            @close="close"
            background-color="#052644"
            text-color="#fff"
            active-text-color="#ffd04b"
            :default-active="defaultActive"
            :unique-opened="true"
            :router="true"
            :collapse="isCollapse">
            <sidebarItem v-for="(item, index) in menuList" :item="item" :key="index"/>
        </el-menu>
      </div>
     </vue-scroll>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { getPropArray } from 'lib/vue-prop';
import sidebarItem from './sidebar-item.vue';

export default {
  props: {
    menuList: getPropArray(),
  },
  components: {
    sidebarItem,
  },
  data() {
    return {
      ops: {
        scrollPanel: {
          scrollingX: false,
        },
        bar: {
          background: '#aaaaaa',
          onlyShowBarOnScroll: false,
        },
      },
    };
  },
  computed: {
    ...mapState('app', ['isCollapse']),
    defaultActive() {
      return this.$route.fullPath.split('?')[0];
    },
  },
  mounted() {
  },
  methods: {
    open(val) {
      this.$emit('open', val);
    },
    close(val) {
      this.$emit('close', val);
    },
  },
};
</script>

<style lang="scss" module>
.root {
  position: fixed;
  bottom: 0;
  top: 0;
  background: #052644;
  z-index: 1002;
  .menu{
    transition: width 300ms;
    .logo{
      width: 100%;
      display: block;
      margin: 0 auto;
      padding: 18px;
      padding-bottom: 10px;
    }
    :global(.el-menu){
      border-right: none;
    }
  }

}
</style>
