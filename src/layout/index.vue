<template>
  <div :class="$style.layout">
    <sidebar :menuList='menuList'/>
    <div :class="$style['main-container']" :style="{paddingLeft: isCollapse ? '64px': '200px', minWidth: '960px'}">
      <navbar
        @logout="logout"/>
      <tags-view id="handler-tags-view"/>
      <app-main v-if="isShow"/>
    </div>
  </div>
</template>

<script>
import message from 'lib/message';
import { mapState } from 'vuex';
import sidebar from './components/sidebar/index.vue';
import navbar from './components/navbar/index.vue';
import menus from './components/sidebar/menus';
import tagsView from './components/tags-view.vue';
import appMain from './components/app-main.vue';

export default {
  components: {
    sidebar,
    navbar,
    tagsView,
    appMain,
  },
  data() {
    return {
      menuList: [],
      isShow: false,
    };
  },
  computed: {
    ...mapState('app', ['isCollapse']),
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      setTimeout(() => {
        this.isShow = true;
        this.$nextTick(() => {
          window.yangpanLoading.hide();
        });
      }, 1000);
      this.menuList = menus;
    },
    async logout() {
      const stl = await message.confirm(this, '确认登出？');
      if (stl) {
        console.log('登出');
      }
    },
  },
};
</script>

<style lang="scss" module>
.layout{
  .main-container{
    transition: padding-left 300ms;
  }
}
</style>
