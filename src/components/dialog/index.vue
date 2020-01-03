<template>
  <el-dialog
    v-if="dialogVisible"
    v-el-drag-dialog
    :title="title"
    :destroy-on-close="true"
    :visible.sync="dialogVisible"
    :width="width">
    <slot></slot>
    <span slot="footer" v-if="footer">
      <el-button @click="dialogVisible = false">{{$t('m.cancel')}}</el-button>
      <el-button type="primary" @click="determine()">{{$t('m.determine')}}</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { getPropString, getPropBoolean } from 'lib/vue-prop';
import mixin from './mixin';

export default {
  mixins: [mixin],
  props: {
    width: getPropString('30%'),
    title: getPropString('提示'),
    footer: getPropBoolean(true),
  },
  components: {
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    determine() {
      this.$emit('determine');
    },
  },
};
</script>
