<template>
  <section :class="$style['app-main']">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :exclude="excludeViews" >
        <router-view :reload="reload" :key="key" v-if="isRouterAlive"/>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path;
    },
  },
  data() {
    return {
      isRouterAlive: true,
      excludeViews: '',
    };
  },
  watch: {
    $route(nv) {
      if (nv.meta.noRefresh) { // noRefresh不需要缓存
        this.$nextTick(() => {
          this.reload(nv.name);
        });
      }
    },
  },
  methods: {
    reload(cname) {
      const curView = this.$route;
      this.excludeViews = cname || curView.name; // 有参数传入使用参数
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
        this.excludeViews = '';
      });
    },
  },
};
</script>

<style lang="scss" module>
.app-main{
  position: relative;
  padding: 8px;
  min-height: calc(100vh - 86px);
}
</style>

<style>
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .6s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-6px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(6px);
}
</style>
