<template>
  <span :class="$style['reference']" v-if="changeData.length !== append.length">
    <span :class="$style.label">{{label}}：</span>
    <span>参数传入不正确</span>
  </span>
  <span v-else>
      <span v-if="pickUp" :class="$style['pick-up']" >
        <span :class="$style.label">{{label}}：</span>
        {{changeDataLiteral}}
      </span>
      <span v-else :class="$style['reference']" @click="inputClick()">
        <el-tooltip :disabled="changeDataLiteral.length < substr" effect="dark" :content="changeDataLiteral" placement="top">
          <span :class="$style.text">
            <span :class="$style.label">{{label}}：</span>
            <template v-if="visible">
              <el-input
                  v-for="(item, index) in changeData.length"
                  :key="index"
                  @input='valueChange(index)'
                  ref="input"
                  :class="$style.input"
                  size="mini"
                  v-model="changeData[index]"
                  :placeholder="placeholders[index] || '请输入'">
                  <template v-if="append[index]" slot="append">{{append[index]}}</template>
              </el-input>
              <el-button @click.stop.prevent="inputBlur()" type="primary" size="mini">确定</el-button>
            </template>
            <span v-else>
              {{changeDataLiteral | substr(substr)}}
            </span>
          </span>
         </el-tooltip>
        <i class="el-icon-edit" :class="{[$style['arrow-visible']]:visible}"></i>
      </span>
  </span>
</template>
<script>
import message from 'lib/message';
import {
  getPropString,
  getPropBoolean,
  getPropArray,
  getPropFunction,
  getPropNumber,
} from 'lib/vue-prop';

export default {
  props: {
    checked: {},
    label: getPropString('输入型二维筛选组件'),
    pickUp: getPropBoolean(false),
    append: getPropArray(),
    placeholders: getPropArray(),
    fuc: getPropFunction(),
    modification: getPropString(),
    substr: getPropNumber(24),
    rules: getPropArray(),
  },
  model: {
    prop: 'checked',
    event: 'change',
  },
  computed: {
    changeData() {
      return this.checked;
    },
    changeDataLiteral() {
      const v = this.changeData.map((item, index) => `${item.replace('-', '')}${this.append[index]}`);
      return v.join('-');
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    valueChange(index) {
      if (this.modification === 'number') {
        if (!(/^\d+$/.test(this.changeData[index]))) {
          this.changeData[index] = '';
        }
      }
      this.$emit('change', this.changeData);
    },
    inputClick() {
      this.visible = true;
      // this.$nextTick(() => {
      //   this.$refs.input[0].focus();
      // });
    },
    inputBlur() {
      let k = true;
      if (this.rules.length) {
        this.changeData.forEach((item, index) => {
          if (!this.rules[index].v.test(this.changeData[index])) {
            message.error(this.rules[index].m);
            this.changeData[index] = '';
            k = false;
          }
        });
      }
      if (k) {
        this.visible = false;
        this.fuc(this.changeDataLiteral);
      }
    },
  },
};
</script>
<style lang="scss" module>
@import './style.scss';
</style>
