<template>
    <span v-if="pickUp" :class="$style['pick-up']" >
      <span :class="$style.label">{{label}}：</span>
      {{valueName.fullName === '请选择' ? '--' : valueName.fullName }}
    </span>
    <el-popover
        v-else
        placement="bottom-start"
        :width="popoverWidth"
        @hide="hidePopover"
        v-model="visible">
        <div :class="$style['wrap-radio-group']">
            <div v-if="isSearch" :class="$style['search-string']" >
                <el-input
                    v-model="searchString"
                    placeholder="筛选"
                    size="medium"
                    clearable>
                </el-input>
            </div>
            <el-radio-group v-model="changeData" v-if="options.length">
                <template v-for="item in options">
                    <el-radio
                        :style="{width:labelWidth}"
                        v-show="filterRadio(item)"
                        :label="item.value"
                        :key="item.value">
                        <span>{{item.name}}</span>
                    </el-radio>
                </template>
            </el-radio-group>
            <div :class="$style['no-data']" v-else>暂无选项</div>
        </div>
        <span slot="reference" :class="$style['reference']">
            <el-tooltip :disabled="valueName.name.length < substr" effect="dark" :content="valueName.fullName" placement="top">
                <span :class="$style.text">
                  <span :class="$style.label">{{label}}：</span>
                  <span>{{valueName.name | substr(substr)}}</span>
                </span>
            </el-tooltip>
            <i
                v-if="isClearable"
                @mouseover="emptyingOperation=true"
                @mouseout="emptyingOperation=false"
                @click.stop="clearable()"
                :class="{
                    [$style['arrow-visible']]:visible,
                    ['el-icon-arrow-down']:!emptyingOperation,
                    ['el-icon-error']:emptyingOperation
                }">
            </i>
            <i v-else class="el-icon-arrow-down" :class="{[$style['arrow-visible']]:visible}"></i>
        </span>
    </el-popover>
</template>

<script>
import {
  getPropString, getPropBoolean, getPropNumber, getPropFunction,
} from 'lib/vue-prop';

export default {

  props: {
    checked: {},
    labelWidth: getPropString('32.8%'),
    substr: getPropNumber(12),
    popoverWidth: getPropString('320'),
    label: getPropString('单选型筛选组件'),
    isClearable: getPropBoolean(false),
    pickUp: getPropBoolean(false),
    optionsFun: getPropFunction(),
    isSearch: getPropBoolean(true),
    initCb: getPropFunction(),
  },
  data() {
    return {
      searchString: '',
      visible: false,
      emptyingOperation: false,
      options: [],
    };
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
    valueName() {
      const v1 = this.options.filter(item => item.value === this.changeData);
      const v2 = v1.map(item => item.name);
      return { name: v2.join('，') || '请选择', value: v1, fullName: v2.join('，') || '请选择' };
    },
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      this.options = await this.optionsFun();
      this.initCb(this);
    },
    filterRadio(val) {
      const valueName = val.name;
      return valueName.toLowerCase().indexOf(this.searchString.toLowerCase().trim()) >= 0;
    },
    hidePopover() {
      this.searchString = '';
    },
    clearable() {
      this.changeData = '';
    },
  },
};
</script>

<style lang="scss" module>
@import './style.scss';

</style>
