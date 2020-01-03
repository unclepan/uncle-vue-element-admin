<template>
  <div>
    <template v-for="(item, index) in condList">
      <component
        v-model="form[`${item.name}`]"
        :key="index"
        v-bind:is="item.key"
        v-bind="item.meta">
      </component>
    </template>
  </div>
</template>


<script>
import _ from 'lodash';
import { getPropArray } from 'lib/vue-prop';
import condition from './index';

export default {
  props: {
    condList: getPropArray(),
  },
  data() {
    const form = {};
    this.condList.forEach((item) => {
      form[item.name] = item.value;
    });
    const cloneDeepForm = _.cloneDeep(form);
    return {
      form,
      cloneDeepForm,
    };
  },
  components: {
    ...condition,
  },
  methods: {
    reset() {
      this.form = _.cloneDeep(this.cloneDeepForm);
    },
  },
};
</script>
<style lang="scss" module>
</style>
