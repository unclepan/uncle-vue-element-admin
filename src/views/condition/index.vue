<template>
  <div :class="$style.condition">
    <x-drawer ref="drawer">
      <div slot="header">
        <span>动态表格配置的JSON格式：</span>
      </div>
      <json-viewer
        :value="condList"
        :expand-depth=5>
      </json-viewer>
    </x-drawer>

    <x-aside>
      <span>筛选组件：包含单选，多选，输入，多维输入，时间等组件，也是配置化，不需要单独引用。配置格式请查看 &nbsp;&nbsp;</span>
      <el-button type="primary" size="mini"  @click="handleDrawer()">配置树</el-button>
    </x-aside>

     <x-title>
      筛选条件
      <span slot="button">
        <el-button size="mini" @click="reset()">
          重置
        </el-button>

        <el-button
          @click="search()"
          type="primary"
          icon="el-icon-search"
          size="mini">
          搜索
        </el-button>
      </span>
    </x-title>

    <condition ref="condition" :condList="condList"/>

    <!-- <h3>点击搜索查看筛选数据：</h3>
    <pre>{{conditionForm}}</pre> -->

  </div>
</template>

<script>
import xTitle from 'components/x-title.vue';
import JsonViewer from 'vue-json-viewer';
import condition from 'components/condition/index.vue';
import xDrawer from 'components/x-drawer.vue';
import aside from 'components/x-aside.vue';

export default {
  name: 'condition',
  components: {
    xTitle,
    JsonViewer,
    condition,
    xDrawer,
    'x-aside': aside,
  },
  data() {
    return {
      conditionForm: {},
      condList: [
        {
          name: 'single',
          key: 'x-single',
          value: '',
          meta: {
            isClearable: true,
            label: '单选',
            optionsFun: async () => [
              {
                name: '中国银行',
                value: 1,
              },
              {
                name: '建设银行',
                value: 2,
              },
            ],
          },
        },
        {
          name: 'multiple',
          key: 'x-multiple',
          value: [],
          meta: {
            isClearable: true,
            label: '多选',
            optionsFun: async () => [
              {
                name: '中国银行',
                value: 1,
              },
              {
                name: '建设银行',
                value: 2,
              },
            ],
          },
        },
        {
          name: 'input',
          key: 'x-input',
          value: '',
          meta: {
            label: '输入',
          },
        },
        {
          name: 'multistageInput',
          key: 'x-multistage-input',
          value: ['', ''],
          meta: {
            label: '多维输入',
            modification: 'number',
            append: ['元', '元'],
            placeholders: ['最小值', '最大值'],
            fuc() {},
          },
        },
        {
          name: 'datePicker',
          key: 'x-date-picker',
          value: [],
          meta: {
            label: '起止日期',
            type: 'daterange',
            width: '220px',
            isClearable: true,
          },
        },
      ],
    };
  },
  methods: {
    dataT() {
      const { form } = this.$refs.condition;
      const obj = {};
      Object.keys(form).forEach((item) => {
        if (item === 'datePicker') {
          const [t1, t2] = form[item];
          obj.statDateBegin = t1;
          obj.statDateEnd = t2;
        } else {
          obj[item] = form[item];
        }
      });
      return obj;
    },
    handleDrawer() {
      this.$refs.drawer.open();
    },
    search() {
      const v = this.dataT();
      this.conditionForm = v;
    },
    reset() {
      this.$refs.condition.reset();
    },
  },
};
</script>

<style lang="scss" module>
.condition{
  background: #ffffff;
  padding: 16px;
}
</style>
