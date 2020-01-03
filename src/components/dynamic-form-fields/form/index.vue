<template>
  <div :class="$style.form">
    <el-form
      :inline="true"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-position="top">

      <!-- 有布局 -->
      <el-row :gutter="10" v-if="card==1">
        <el-col :class="$style.col" :xs="12" :sm="8" :lg="6"  v-for="(item, index) in formRender" :key="index">
          <el-card :class="$style.card" shadow="hover" :body-style="{ padding: '8px',paddingBottom:'0', minHeight: '100px'}">
            <component
              :key="item.name"
              :class="$style.block"
              v-model="ruleForm[`${item.name}`]"
              :param="item"
              v-bind:is="getKey(item.type)"
              :fieldEmitter="fieldEmitter">
            </component>
          </el-card>
        </el-col>
      </el-row>

      <!-- 无布局 -->
      <template v-else-if="card==2">
        <component
          v-for="(item) in formRender"
          :key="item.name"
          :class="$style.block"
          v-model="ruleForm[`${item.name}`]"
          :param="item"
          v-bind:is="getKey(item.type)"
          :fieldEmitter="fieldEmitter">
        </component>
      </template>
    </el-form>
  </div>
</template>

<script>
import { getPropArray, getPropNumber } from 'lib/vue-prop';
import message from 'lib/message';
import EventEmitter from 'wolfy87-eventemitter';
import field from '../index';

export default {
  props: {
    formRender: getPropArray(),
    card: getPropNumber(1),
  },
  data() {
    const ruleForm = {};
    const rules = {};
    this.formRender.forEach((item) => {
      ruleForm[item.name] = item.value;
      rules[item.name] = item.rules;
    });
    return {
      ruleForm,
      rules,
      fieldEmitter: new EventEmitter(),
    };
  },
  components: {
    ...field,
  },
  created() {
  },
  mounted() {
  },
  methods: {
    getKey(data) {
      const origin = data.toUpperCase();
      return `X-${origin}`;
    },
    submitForm(formName, cb) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          cb(this.ruleForm);
          return true;
        }
        message.error('提交错误');
        return false;
      });
    },
  },
  beforeDestroy() {
    this.fieldEmitter = null;
  },
};
</script>

<style lang="scss" module>
.form{
  .col{
    padding: 5px;
    .card{
      border: 1px solid #fafafa;
      background: #fcfcfc;
    }
  }
  .block{
    width: 100%;
  }
}
</style>
