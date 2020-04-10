<template>
 <el-upload
    :class="$style.upload"
    drag
    :action="`${baseApi}/file/upload`"
    :headers="{
      userToken
    }"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :on-exceed="handleExceed"
    :on-success="handleSuccess"
    :on-error="handleError"
    :before-upload="beforeUpload"
    multiple
    :data="dataParams"
    :limit="10"
    :file-list="fileList">
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip" slot="tip">只能上传xls文件，且不超过500kb</div>
  </el-upload>
</template>

<script>
import { getPropObject, getPropFunction } from 'lib/vue-prop';

export default {
  props: {
    dataParams: getPropObject(),
    propBeforeUpload: getPropFunction(() => true),
  },
  data() {
    return {
      baseApi: process.env.VUE_APP_BASE_API,
      userToken: localStorage.getItem('userToken'),
      fileList: [],
    };
  },
  components: {
  },
  methods: {
    handleRemove(file, fileList) {
      this.fileList = fileList;
      this.$emit('handleRemove', { file, fileList });
    },
    handlePreview(file) {
      this.$emit('handlePreview', file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 10 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    beforeUpload(file) {
      return this.propBeforeUpload(file);
    },
    handleSuccess(res, file) {
      this.fileList.push(file);
      this.$emit('handleSuccess', { res, file });
    },
    handleError(err, file, fileList) {
      this.$emit('handleError', { err, file, fileList });
    },
  },
};
</script>
<style lang="scss" module>
  .upload{
    width: 360px;
    margin:  0 auto;
  }
</style>
