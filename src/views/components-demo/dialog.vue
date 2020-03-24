<template>
  <div :class="$style.dialog">
    <x-dialog ref="dialog">
      <span>我是可拖拽弹窗</span>
    </x-dialog>
    <x-aside>
      可拖拽弹窗，针对大多数弹窗，利用了vue插槽
    </x-aside>
    <el-button type="primary" @click="$refs.dialog.dialogVisible = true">打开弹窗</el-button>
  </div>
</template>

<script>
import aside from 'components/x-aside.vue';
import dialog from 'components/dialog/index.vue';

export default {
  components: {
    'x-dialog': dialog,
    'x-aside': aside,
  },
};
</script>

<style lang="scss" module>
.dialog{
  background: #ffffff;
  padding: 16px;
}
</style>
