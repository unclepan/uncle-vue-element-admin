<template>
  <div :class="$style.layout">
    <sidebar :menuList='menuList'/>
    <div :class="$style['main-container']" :style="{paddingLeft: isCollapse ? '64px': '200px', minWidth: '960px'}">
      <navbar @logout="logout"/>
      <tags-view id="handler-tags-view" @refresh="reloadView"/>
      <app-main ref="appMain" v-if="isShow"/>
    </div>
  </div>
</template>

<script>
import message from 'lib/message';
import { mapState, mapMutations } from 'vuex';
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
    ...mapState('user', ['userInfo']),
  },
  created() {
    this.init();
  },
  methods: {
    ...mapMutations('user', [
      'setUser',
    ]),
    reloadView() {
      this.$refs.appMain.reload();
    },
    init() {
      if (this.userInfo) {
        this.isShow = true;
        setTimeout(() => {
          this.$nextTick(() => {
            window.yangpanLoading.hide();
          });
        }, 1600);
        this.menuList = menus;
      } else {
        this.$router.push({ path: '/login' });
      }
    },
    async logout() {
      const stl = await message.confirm(this, '确认登出？');
      if (stl) {
        this.setUser(null);
        this.$router.push({ path: '/login' });
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
