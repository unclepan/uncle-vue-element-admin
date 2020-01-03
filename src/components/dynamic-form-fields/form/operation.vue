<template>
  <div :class="$style.operation">
    <x-title>
      {{type.name}}
      <span slot="button">
        <el-button size="mini" type="primary" @click="onSubmit()">确认{{type.but}}</el-button>
        <el-button size="mini" @click="cancel()">取消</el-button>
      </span>
    </x-title>

    <x-form ref="xForm" :formRender="formRender" />
  </div>
</template>

<script>
import { getPropObject, getPropArray } from 'lib/vue-prop';
import xTitle from 'components/x-title.vue';
import xForm from './index.vue';

export default {
  props: {
    type: getPropObject(),
    formRender: getPropArray(),
  },
  data() {
    return {
    };
  },
  components: {
    xForm,
    xTitle,
  },
  mounted() {

  },
  methods: {
    onSubmit() {
      this.$refs.xForm.submitForm('ruleForm', this.type.operation);
    },
    cancel() {
      this.type.cancel();
    },
  },
};
</script>

<style lang="scss" module>
.operation{
  background: #ffffff;
  padding: 16px;
}
</style>
