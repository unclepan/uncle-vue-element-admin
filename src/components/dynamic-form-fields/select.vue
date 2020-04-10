<template>
  <container :param="param">
    <el-select
      @change="checkMode('handleFieldBlur', ...arguments)"
      v-if="editingStatus"
      :style="{width:'100%'}"
      v-model="value"
      v-bind="param.meta">
        <el-option
          v-for="(item, index) in options"
          :key="index"
          :label="item.name"
          :value="item.value">
          <div v-if="!!param.optionsHtml" v-html="param.optionsHtml(item)"></div>
        </el-option>
    </el-select>
    <span v-else>{{value || '字段无值'}}</span>
  </container>
</template>

<script>
import { isArray, isFunction } from 'lib/validate';
import fieldMixin from './basic/field-mixin';

export default {
  INDEX: ['SELECT', 'SELECTMULTIPLE', 'SELECTREMOTE'],
  mixins: [
    fieldMixin,
  ],
  props: {
  },
  data() {
    return {
      options: [],
    };
  },
  components: {
  },
  created() {
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (isArray(this.param.options)) {
        this.options = this.param.options;
      } else if (isFunction(this.param.options)) {
        this.param.options(this.cbOptions, this.value);
      }

      if (this.param.type === 'SELECTREMOTE') {
        this.param.meta['remote-method'] = (query) => {
          this.param.options(this.cbOptions, query);
        };
      }
    },
    cbOptions(val) {
      this.options = val.data;
    },
  },
};
</script>

<style lang="scss" module>
:global(.el-select-dropdown__item){
    height: auto;
}
</style>
