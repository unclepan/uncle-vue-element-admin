<template>
    <el-popover
        placement="bottom-start"
        :width="popoverWidth"
        @hide="hidePopover"
        v-model="visible">
        <div :class="$style['wrap-radio-group']">
            <div v-if="isSearch" :class="$style['search-string']" >
                <el-input
                    @input="search()"
                    v-model="searchString"
                    placeholder="筛选"
                    size="medium"
                    clearable>
                </el-input>
            </div>
            <el-radio-group v-model="changeData" v-if="optionsList.length">
                <template v-for="item in optionsList">
                    <el-radio
                        :style="{width:labelWidth}"
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
import _ from 'lodash';
import {
  getPropString, getPropBoolean, getPropNumber, getPropFunction,
} from 'lib/vue-prop';

export default {

  props: {
    checked: {},
    labelWidth: getPropString('50%'),
    substr: getPropNumber(12),
    popoverWidth: getPropString('320'),
    label: getPropString('单选型筛选组件'),
    isClearable: getPropBoolean(false), // 是否可清空
    optionsFun: getPropFunction(), // 获得options
    isSearch: getPropBoolean(true), // 是否可以搜索
    remote: getPropBoolean(false), // 是否远程搜索
    initCb: getPropFunction(), // 组件初始化之后（获得options之后）做的操作
    dataChange: getPropFunction(),
  },
  data() {
    return {
      searchString: '',
      visible: false,
      emptyingOperation: false,
      innerOptions: [], // 内部全量options
      optionsList: [],
      debounceGetOptions: () => {},
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
        this.dataChange(val);
        return val;
      },
    },
    valueName() {
      const v1 = this.optionsList.filter(item => item.value === this.changeData);
      const v2 = v1.map(item => item.name);
      return { name: v2.join('，') || '请选择', value: v1, fullName: v2.join('，') || '请选择' };
    },
  },
  created() {
    this.init();
    this.debounceGetOptions = _.debounce(this.init, 500);
  },
  methods: {
    async init(q) {
      this.innerOptions = await this.optionsFun(q);
      this.optionsList = _.cloneDeep(this.innerOptions);
      this.initCb(this);
    },
    async search() {
      if (this.remote) {
        this.debounceGetOptions(this.searchString);
      } else {
        this.optionsList = this.innerOptions.filter(item => item.name.toLowerCase().indexOf(this.searchString.toLowerCase().trim()) >= 0 || item.value === this.changeData);
      }
    },
    hidePopover() {},
    clearable() {
      this.changeData = '';
    },
  },
};
</script>

<style lang="scss" module>
@import './style.scss';

</style>
