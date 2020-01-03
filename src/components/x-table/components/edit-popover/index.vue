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
        <el-button type="primary" size="mini" @click="determine()">确定</el-button>
      </div>
      <span slot="reference">
        <!-- 有别名用别名展示值 -->
        <el-button type="text">{{row[column.aliasProp] || row[column.prop] || '--'}}</el-button>
        <i class="el-icon-edit-outline"></i>
      </span>
    </el-popover>
  </div>
</template>

<script>
import { getPropObject } from 'lib/vue-prop';
import message from 'lib/message';

export default {
  props: {
    row: getPropObject(),
    column: getPropObject(),
  },
  data() {
    return {
      input: this.row[this.column.prop],
      visible: false,
    };
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
