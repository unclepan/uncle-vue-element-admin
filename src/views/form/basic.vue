<template>
  <div :class="$style.form">
    <div>
      <x-aside>
        <span>动态表单（无布局）： 引入组件，配置展示表单，json格式，可从后端获取，也可以前端配置，然后获取远端数据。配置格式请查看配置树</span>
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
          :expand-depth=2 />
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
import JsonViewer from 'vue-json-viewer';
import aside from 'components/x-aside.vue';
import xForm from 'components/dynamic-form-fields/form/index.vue';

export default {
  name: 'form.basic',
  data() {
    return {
      formRender: [
        {
          name: 'text',
          value: '',
          label: '输入框',
          type: 'TEXT',
          rules: [
            { required: true, message: '请填写输入框内容', trigger: 'blur' },
          ],
          meta: {
            placeholder: '请填写内容',
          },
        },
        {
          name: 'textarea',
          value: '',
          label: '多行文本信息',
          type: 'TEXTAREA',
          rules: [
            { required: true, message: '请填写多行文本信息', trigger: 'blur' },
          ],
          meta: {
            placeholder: '请填写内容',
            type: 'textarea',
          },
        },
        {
          name: 'number',
          value: '',
          label: '数字',
          type: 'NUMBER',
          rules: [
            { required: true, message: '请填写数字', trigger: 'blur' },
            { type: 'number', message: '账号必须为数字值', trigger: 'blur' },
          ],
          meta: {
            placeholder: '请填写内容',
          },
        },
        {
          name: 'currency',
          value: '',
          label: '货币',
          type: 'CURRENCY',
          rules: [
            { required: true, message: '请填写货币', trigger: 'blur' },
            { type: 'number', message: '货币必须为数字值' },
          ],
          meta: {
            placeholder: '请填写内容',
          },
        },
        {
          name: 'dete',
          value: '',
          label: '选择日期',
          type: 'DATE',
          rules: [],
          describe: '时间的组件，这里只给几个基础例子，其他配置请参考element',
          meta: {
            placeholder: '选择日期',
          },
        },
        {
          name: 'switch',
          value: 1,
          label: '开关',
          type: 'SWITCH',
          rules: [],
          meta: {
            'active-value': 1,
            'inactive-value': 0,
          },
        },

        {
          name: 'detetimerange',
          value: '',
          label: '时间范围',
          type: 'DATETIMERANGE',
          rules: [],
          describe: '时间的组件，这里只给几个基础例子，其他配置请参考element',
          meta: {
            placeholder: '请选择',
          },
        },
        {
          name: 'select1',
          value: '',
          label: '选择器（基础用法）',
          type: 'SELECT',
          rules: [
            { required: true, message: '请选择', trigger: 'change' },
          ],
          meta: {
            placeholder: '请选择内容',
          },
          describe: '选择器是个强大的组件，这里只给几个基础例子，其他配置请参考element',
          options: (cb) => {
            const res = {
              data: [
                { name: '黄金糕', value: 1 },
                { name: '双皮奶', value: 2 },
                { name: '蚵仔煎', value: 3 },
                { name: '龙须面', value: 4 },
                { name: '北京烤鸭', value: 5 },
              ],
            };
            cb(res);
          },
        },
        {
          name: 'upload',
          value: '',
          label: '文件上传',
          type: 'UPLOAD',
          rules: [],
          meta: {
            action: '/',
          },
        },
        {
          name: 'select2',
          value: '',
          label: '选择器（有禁用选项）',
          type: 'SELECT',
          rules: [
            { required: true, message: '请选择', trigger: 'change' },
          ],
          meta: {
            placeholder: '请选择内容',
          },
          options: (cb) => {
            const res = {
              data: [
                { name: '黄金糕', value: 1 },
                { name: '双皮奶', value: 2, disabled: true },
                { name: '蚵仔煎', value: 3 },
                { name: '龙须面', value: 4 },
                { name: '北京烤鸭', value: 5 },
              ],
            };
            cb(res);
          },
        },
        {
          name: 'select3',
          value: '',
          label: '选择器（禁用状态）',
          type: 'SELECT',
          rules: [
            { required: true, message: '请选择', trigger: 'change' },
          ],
          meta: {
            placeholder: '请选择内容',
            disabled: true,
          },
          options: (cb) => {
            const res = {
              data: [
                { name: '黄金糕', value: 1 },
                { name: '双皮奶', value: 2 },
                { name: '蚵仔煎', value: 3 },
                { name: '龙须面', value: 4 },
                { name: '北京烤鸭', value: 5 },
              ],
            };
            cb(res);
          },
        },

        {
          name: 'select4',
          value: '',
          label: '选择器（可清空单选）',
          type: 'SELECT',
          rules: [
            { required: true, message: '请选择', trigger: 'change' },
          ],
          meta: {
            placeholder: '请选择内容',
            clearable: true,
          },
          options: (cb) => {
            const res = {
              data: [
                { name: '黄金糕', value: 1 },
                { name: '双皮奶', value: 2 },
                { name: '蚵仔煎', value: 3 },
                { name: '龙须面', value: 4 },
                { name: '北京烤鸭', value: 5 },
              ],
            };
            cb(res);
          },
        },
        {
          name: 'select5',
          value: [],
          label: '基础多选',
          type: 'SELECT',
          rules: [
            { required: true, message: '请选择', trigger: 'change' },
          ],
          meta: {
            placeholder: '请选择内容',
            multiple: true,
          },
          options: (cb) => {
            const res = {
              data: [
                { name: '黄金糕', value: 1 },
                { name: '双皮奶', value: 2 },
                { name: '蚵仔煎', value: 3 },
                { name: '龙须面', value: 4 },
                { name: '北京烤鸭', value: 5 },
              ],
            };
            cb(res);
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
