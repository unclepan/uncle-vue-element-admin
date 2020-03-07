<template>
  <section :class="$style['app-main']">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
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
  transform: translateX(-10px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
