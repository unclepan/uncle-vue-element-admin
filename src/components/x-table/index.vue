<template>
  <div :class="$style.table">
    <el-table
      :data="fitTableData.row"
      border
      @selection-change="fitTableData.meta.handleSelectionChange"
      style="width: 100%">

      <el-table-column
        v-if="fitTableData.meta.selection"
        align='center'
        type="selection"
        width="55">
      </el-table-column>

      <el-table-column
        align='center'
        width="55"
        label="更多"
        type="expand"
        v-if="fitTableData.meta.expand.switch">
        <template slot-scope="props">
          <el-form label-position="left" inline :class="$style['table-expand']">
            <el-form-item
              :label="item.label" v-for="(item) in expandFitTableDataColumn"
              :key="item.prop">
              <span>{{ props.row[item.prop] || '--' }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <template v-for="(item) in fitTableDataColumn" >
        <el-table-column
          :fixed='item.fixed'
          :key="item.prop"
          :label="item.label"
          :width="item.width || 'auto'"
          :align="item.align || 'center'"
          min-width="160">
          <template slot-scope="scope" >
            <div v-if="item.components" :key="JSON.stringify(scope.row)">
              <!-- 用组件渲染 -->
              <component
                :row="scope.row"
                :column="item"
                v-bind:is="item.components.key">
              </component>
            </div>
            <div v-else>
              <!-- 没传入组件默认渲染 -->
              <span v-if="item.format">{{item.format(scope.row)}}</span>
              <span v-else>{{scope.row[item.prop] || '--'}}</span>
            </div>
          </template>
        </el-table-column>
      </template>

      <el-table-column
        v-if="fitTableData.operation && fitTableData.operation.length"
        fixed="right"
        align="center"
        label="操作"
        width="60">
        <template slot-scope="scope">
          <el-popover
            placement="left"
            trigger="click">
            <div :class="$style['operation-but']">
              <div :class="$style.but" v-for="(item, index) in fitTableData.operation" :key="index">
                <el-button
                  @click="item.func(scope.row)"
                  size="mini"
                  :type="item.type || 'primary'"
                  plain>
                  {{item.label}}
                </el-button>
              </div>
            </div>
            <i class="el-icon-more" slot="reference"></i>
          </el-popover>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import _ from 'lodash';
import { getPropObject } from 'lib/vue-prop';
import editPopover from './components/edit-popover/index.vue';
import xSwitch from './components/x-switch.vue';

export default {
  props: {
    tableData: getPropObject(),
  },
  components: {
    editPopover,
    xSwitch,
  },
  computed: {
    fitTableData() {
      const fit = {
        column: [],
        row: [],
        operation: [],
        meta: {
          selection: false,
          handleSelectionChange: () => {},
          expand: {
            switch: false,
            num: 0,
          },
        },
      };
      _.merge(fit, this.tableData);
      return fit;
    },
    fitTableDataColumn() {
      if (this.fitTableData.meta.expand.switch) {
        return this.fitTableData.column.slice(0, this.fitTableData.meta.expand.num);
      }
      return this.fitTableData.column;
    },
    expandFitTableDataColumn() {
      if (this.fitTableData.meta.expand.switch) {
        return this.fitTableData.column.slice(this.fitTableData.meta.expand.num);
      }
      return [];
    },
  },
};
</script>

<style lang="scss" module>
.table{
  .table-expand{
    font-size: 0;
     label {
      color: #99a9bf;
    }
    :global(.el-form-item){
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }
  }
}
.operation-but{
  text-align: center;
  .but{
    margin: 8px auto;
  }
}
</style>
