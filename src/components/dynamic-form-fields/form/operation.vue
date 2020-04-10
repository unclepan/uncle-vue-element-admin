<template>
  <div :class="$style.operation">
    <x-title>
      {{type.name}}
      <span slot="button">

        <el-button
          :disabled='type.operationDisabledFunc ? type.operationDisabledFunc() : false'
          size="mini"
          type="primary"
          @click="onSubmit()">
          确认{{type.but}}
        </el-button>

        <el-button size="mini" @click="cancel()">{{type.cancelText || '取消'}}</el-button>
        <template v-if="type.eventGroup && type.eventGroup.length">
          <el-button
            v-for="(item, index) in type.eventGroup"
            :key="index"
            size="mini"
            @click="item.fun">{{item.name}}</el-button>
        </template>
      </span>
    </x-title>

    <x-form
      ref="xForm"
      :formRender="formRender"
      @fielsChange="(val)=>$emit('fielsChange', val)" />
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
