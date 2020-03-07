<template>
  <container :param="param">
    <el-upload
      v-if="editingStatus"
      v-bind="param.meta"
      :headers="{
        userToken
      }"
      :action="`${baseApi}${param.meta.action}`"
      :on-success="handleSuccess"
       :file-list="fileList">
      <el-button size="mini" type="primary">点击上传</el-button>
    </el-upload>
    <span v-else>{{value || '字段无值'}}</span>
  </container>
</template>

<script>
import message from 'lib/message';
import fieldMixin from './basic/field-mixin';

export default {
  INDEX: ['UPLOAD'],
  mixins: [
    fieldMixin,
  ],
  data() {
    return {
      baseApi: process.env.VUE_APP_BASE_API,
      userToken: localStorage.getItem('userToken'),
      fileList: [],
    };
  },
  methods: {
    handleSuccess(res) {
      if (res.success) {
        this.value = res.data;
        message.success(res.message);
      } else {
        this.fileList = [];
        message.error(res.message);
      }
    },
  },
};
</script>

<style lang="scss" module>
</style>
