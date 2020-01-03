<template>
    <span v-if="pickUp" :class="$style['pick-up']" >
      <span :class="$style.label">{{label}}：</span>
      {{changeData || '--'}}
    </span>
    <span v-else :class="$style['reference']" @click="inputClick()">
        <el-tooltip :disabled="visible || changeData.length < substr" effect="dark" :content="changeData||'请填写'" placement="top">
            <span :class="$style.text">
                <span :class="$style.label">{{label}}：</span>
                <el-input
                    ref="input"
                    @blur="inputBlur()"
                    :class="$style.input"
                    v-if="visible"
                    size="mini"
                    v-model="changeData"
                    placeholder="请输入">
                    <template v-if="append" slot="append">{{append}}</template>
                </el-input>
                <span v-else>
                  {{changeData||'请填写' | substr(substr)}}
                  <span v-if="append">{{append}}</span>
                </span>
            </span>
        </el-tooltip>
        <i class="el-icon-edit" :class="{[$style['arrow-visible']]:visible}"></i>
    </span>
</template>
<script>
import {
  getPropString,
  getPropBoolean,
  getPropNumber,
  getPropFunction,
} from 'lib/vue-prop';

export default {
  props: {
    checked: {},
    substr: getPropNumber(12),
    label: getPropString('输入型筛选组件'),
    pickUp: getPropBoolean(false),
    append: getPropString(),
    fuc: getPropFunction(),
  },
  model: {
    prop: 'checked',
    event: 'change',
  },
  computed: {
    changeData: {
      get() {
        return this.checked;
      },
      set(val) {
        this.$emit('change', val);
        return val;
      },
    },
  },
  data() {
    return {
      visible: false,
    };
  },

  methods: {
    inputClick() {
      this.visible = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    inputBlur() {
      this.visible = false;
      this.fuc(this.changeData);
    },
  },
};
</script>
<style lang="scss" module>
@import './style.scss';
</style>
