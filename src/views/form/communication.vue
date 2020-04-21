<template>
  <div :class="$style.form">
    <div>
      <x-aside>
        <span>动态表单（表单通信）：基于wolfy87-eventemitter 这个脚本将来自平台( 如 node.js )的事件的力量引入到浏览器，也可以采用传统的Event bus通信方案。此方案支持“一对一”，“多对一”，“多对多”。</span>
      </x-aside>
    </div>

    <div :class="$style.main">
      <el-row :gutter="30">
        <el-col :span="10">
          <x-form
          ref="xForm"
          :formRender="formRender"
          :card='2' />
        </el-col>

        <el-col :span="14">
          <json-viewer
          :value="formRender"
          :expand-depth=5 />
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
import numberParseChina from 'lib/currency';
import JsonViewer from 'vue-json-viewer';
import aside from 'components/x-aside.vue';
import xForm from 'components/dynamic-form-fields/form/index.vue';

export default {
  name: 'form.communication',
  data() {
    return {
      formRender: [
        {
          name: 'amount',
          value: '',
          label: '小写金额',
          type: 'CURRENCY',
          rules: [
            { required: true, message: '请填写交易金额', trigger: 'blur' },
            { type: 'number', message: '交易金额必须为数字值' },
          ],
          meta: {
            placeholder: '请填写内容',
          },
          event: {
            emit: {
              name: 'transactionAmountCnCreate',
            },
          },
        },
        {
          name: 'amountCn',
          value: '',
          label: '大写金额',
          type: 'TEXT',
          rules: [
            { required: true, message: '请填写交易大写金额', trigger: 'blur' },
          ],
          meta: {
            placeholder: '请填写内容',
          },
          event: {
            on: {
              name: 'transactionAmountCnCreate',
              listener: toComponent => (fromComponent) => { // 重要注释请不删：console.log(fromComponent, 'to', toComponent);
                const to = toComponent;
                const v = numberParseChina(fromComponent.value);
                to.value = v;
              },
            },
          },
        },
      ],
    };
  },
  components: {
    JsonViewer,
    xForm,
    'x-aside': aside,
  },
  methods: {
  },
};
</script>
<style lang="scss" module>
.form{
  background: #ffffff;
  padding: 16px;
}
</style>
