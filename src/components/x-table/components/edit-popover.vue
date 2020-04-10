<template>
  <div>
    <el-popover
      @hide="hide()"
      @show="show()"
      placement="left"
      width="280"
      v-model="visible">
      <component
        :class="$style.form"
        v-bind:is="column.components.type"
        v-bind="column.components.meta"
        v-model="input"
        placeholder="请输入">
        <template v-if="column.components.children">
          <component
            v-bind:is="column.components.children.type"
            v-for="(item, index) in column.components.children.options"
            :key="index"
            v-bind="item">
          </component>
        </template>
      </component>
      <div style="text-align: right; margin-top: 20px">
        <el-button size="mini" @click="visible = false">取消</el-button>
        <el-button
          :disabled="column.components.meta.disabled"
          type="primary"
          size="mini"
          @click="determine()">
          确定
        </el-button>
      </div>
      <span slot="reference">
        <!-- 有别名用别名展示值 -->
        <el-tooltip :disabled="referenceText.length <= 16" class="item" effect="dark" :content="referenceText" placement="top">
          <el-button type="text">{{referenceText | substr(16)}}<i class="el-icon-edit-outline"></i></el-button>
        </el-tooltip>
      </span>
    </el-popover>
  </div>
</template>

<script>
import { getPropObject } from 'lib/vue-prop';
import message from 'lib/message';

export default {
  props: {
    row: getPropObject(), // 行数据
    column: getPropObject(),
  },
  data() {
    return {
      input: this.row[this.column.prop],
      visible: false,
    };
  },
  computed: {
    referenceText() {
      return this.row[this.column.aliasProp] || this.row[this.column.prop] || '--';
    },
  },
  methods: {
    cb() {
      this.visible = false;
    },
    determine() {
      if (!this.input) {
        message.error('不能为空');
        this.input = this.row[this.column.prop];
      } else {
        this.column.components.func({ row: this.row, external: { input: this.input } }, this.cb);
      }
    },
    hide() {
      this.input = this.row[this.column.prop];
    },
    show() {
      this.input = this.row[this.column.prop];
    },
  },
};
</script>
<style lang="scss" module>
.form{
  width: 100%;
}
</style>
