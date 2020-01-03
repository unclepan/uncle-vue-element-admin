<template>
  <div :class="$style.navbar">
    <div :class="$style['left-menu']">
      <i :class="isCollapse?'el-icon-s-fold':'el-icon-s-unfold'" @click="setIsCollapse()" id="handler-sidebar"></i>
      <breadcrumb id="handler-breadcrumb"/>
    </div>
    <div :class="$style['right-menu']">
      <in18 id="handler-in18"></in18>
      <screenfull :class="$style.screenfull" id="handler-screenfull"/>
      <el-badge :value="12" :class="$style.badge">
        <i class="el-icon-message-solid"></i>
      </el-badge>
      <guide :key="$i18n.locale">
        <span :class="$style.problem">{{$t('m.guide')}}</span>
      </guide>
      <el-dropdown @command="handleCommand" trigger="click">
        <el-avatar id="handler-personal-center" size="medium" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="personal" icon="el-icon-user">{{$t('m.personal')}}</el-dropdown-item>
          <el-dropdown-item command="setUp" icon="el-icon-setting">{{$t('m.setUp')}}</el-dropdown-item>
          <el-dropdown-item command="logout" icon="el-icon-switch-button">{{$t('m.logout')}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import guide from 'components/guide/index.vue';
import in18 from 'components/in18/index.vue';
import breadcrumb from './breadcrumb.vue';
import screenfull from './screenfull.vue';

export default {
  components: {
    breadcrumb,
    screenfull,
    guide,
    in18,
  },
  computed: {
    ...mapState('app', ['isCollapse']),
  },
  methods: {
    ...mapMutations('app', [
      'setIsCollapse',
    ]),
    handleCommand(command) {
      this.$emit(command);
    },
  },
};
</script>

<style lang="scss" module>
.navbar {
  height: 50px;
  overflow: hidden;
  display: flex;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .left-menu{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .right-menu{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .screenfull{
      margin: 0 5px;
    }
    .badge{
      margin: 0 5px 0;
    }
    .problem {
      cursor: pointer;
      padding: 0 12px;
      color: #409EFF;
      font-size: 14px;
    }
  }
}
</style>
