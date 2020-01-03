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
            <div v-if="isSearch" :class="$style['search-string']">
                <el-input
                    v-model="searchString"
                    placeholder="筛选"
                    size="medium"
                    clearable>
                </el-input>
            </div>
            <template v-if="options.length">
                <el-checkbox
                    v-if="!searchString"
                    :indeterminate="isIndeterminate"
                    v-model="checkAll"
                    @change="handleCheckAllChange">
                    全选
                </el-checkbox>
                <div :class="$style['check-all']"></div>
                <el-checkbox-group
                    v-model="changeData"
                    @change="handleCheckedCitiesChange">
                    <el-checkbox
                    :style="{width:labelWidth}"
                    v-show="filterCheckbox(item)"
                    v-for="item in options"
                    :label="item.value"
                    :key="item.value">
                    <span>{{item.name}}</span>
                    </el-checkbox>
                </el-checkbox-group>
            </template>
            <div :class="$style['no-data']" v-else>暂无选项</div>
        </div>
        <span slot="reference" :class="$style['reference']">
            <el-tooltip :disabled="valueName.name.length < substr"  effect="dark" :content="valueName.fullName" placement="top">
                <span :class="$style.text">
                    <span :class="$style.label">{{label}}：</span>
                    <span :class="{[$style.required]: required && !valueName.value.length }">{{valueName.name | substr(substr)}}</span>
                    <span :class="$style.more" v-if="valueName.moreNum > 0">+{{valueName.moreNum}}</span>
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
  getPropString, getPropBoolean, getPropArray, getPropNumber, getPropFunction,
} from 'lib/vue-prop';

export default {
  props: {
    checked: getPropArray(),
    required: getPropBoolean(false), // 是否必选
    substr: getPropNumber(12),
    pickUp: getPropBoolean(false),
    label: getPropString('多选型筛选组件'),
    popoverWidth: getPropString('300'),
    labelWidth: getPropString('32.8%'),
    isClearable: getPropBoolean(false), // 是否可以清空
    optionsFun: getPropFunction(),
    isSearch: getPropBoolean(true),
    initCb: getPropFunction(),
  },
  data() {
    return {
      searchString: '',
      visible: false,
      checkAll: false,
      isIndeterminate: false,
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
      const v1 = this.options.filter((item) => {
        const v = this.changeData.find(i => i === item.value);
        if (v) {
          return true;
        }
        return false;
      });
      const v2 = v1.map(item => item.name);
      const name = v2.length && v2.length === this.options.length ? '全部' : v2[0] || '请选择';
      const moreNum = name === '全部' ? -1 : v2.length - 1;
      return {
        name, value: v1, fullName: v2.join('，') || '请选择', moreNum,
      };
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
    filterCheckbox(val) {
      const valueName = val.name;
      return valueName.toLowerCase().indexOf(this.searchString.toLowerCase().trim()) >= 0;
    },
    hidePopover() {
      this.searchString = '';
    },
    handleCheckAllChange(val) {
      const option = this.options.map(item => item.value);
      this.changeData = val ? option : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      const checkedCount = value.length;
      this.checkAll = checkedCount === this.options.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.options.length;
    },
    clearable() {
      this.changeData = [];
    },
  },
};
</script>

<style lang="scss" module>
@import './style.scss';
</style>
