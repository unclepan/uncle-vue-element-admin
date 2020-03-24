<template>
  <div :class="$style.condition">
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
        <el-button
          @click="add()"
          type="primary"
          icon="el-icon-plus"
          size="mini">
          新增
        </el-button>
      </span>
    </x-title>

    <condition ref="condition" :condList="condList"/>
  </div>
</template>


<script>
import message from 'lib/message';
import condition from 'components/condition/index.vue';
import xTitle from 'components/x-title.vue';

export default {
  data() {
    return {
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
  components: {
    condition,
    xTitle,
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
    search() {
      const v = this.dataT();
      this.conditionForm = v;
    },
    reset() {
      this.$refs.condition.reset();
    },
    add() {
      message.success('新增');
    },
  },
};
</script>
<style lang="scss" module>
.condition{
  background: #ffffff;
  padding: 16px;
  margin-bottom: 10px;
}
</style>
