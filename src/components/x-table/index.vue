<template>
  <div :class="$style.table">
    <el-table
      ref="table"
      :data="fitTableData.row"
      border
      :max-height="fitTableData.meta.maxHeight"
      @selection-change="fitTableData.meta.handleSelectionChange"
      @expand-change="fitTableData.meta.handleExpandChange"
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
        label="展开"
        type="expand"
        v-if="fitTableData.meta.expand.eswitch">
        <template slot-scope="props">

          <el-form
            v-if="fitTableData.meta.expand.expandType ==='form'"
            label-position="left"
            inline
            :class="$style['table-expand']">
            <el-form-item
              :label="item.label" v-for="(item) in expandFitTableDataColumn"
              :key="item.prop">
              <span>{{ props.row[item.prop] || '--' }}</span>
            </el-form-item>
          </el-form>

          <div v-if="fitTableData.meta.expand.expandType ==='table'">
            <!-- 递归组件 -->
            <x-table :tableData="props.row.expandTableData"/>
          </div>

        </template>
      </el-table-column>

      <template v-for="(item) in fitTableDataColumn" >
        <el-table-column
          :show-overflow-tooltip="item.tooltip"
          :fixed='item.fixed'
          :key="item.prop"
          :label="item.label"
          :width="item.width || 'auto'"
          :align="item.align || 'left'"
          min-width="180">
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
            trigger="hover">
            <div :class="$style['operation-but']">
              <div :class="$style.but" v-for="(item, index) in fitTableData.operation" :key="index">
                <el-button
                  v-if="item.showBtn ? !item.showBtn(scope.row) : true"
                  :disabled='item.disabledFunc ? item.disabledFunc(scope.row) : false'
                  v-bind="item.meta"
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
import { getPropObject, getPropBoolean } from 'lib/vue-prop';
import Sortable from 'sortablejs';
import editPopover from './components/edit-popover.vue';
import tooltip from './components/tooltip.vue';
import xSwitch from './components/x-switch.vue';

export default {
  props: {
    tableData: getPropObject(),
    isSort: getPropBoolean(false),
  },
  components: {
    editPopover,
    xSwitch,
    tooltip,
  },
  data() {
    return {
      sortable: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.isSort) {
        this.$nextTick(() => {
          this.setSort();
        });
      }
    },
    setSort() {
      const el = this.$refs.table.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0];
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost',
        setData(dataTransfer) {
          // to avoid Firefox bug
          // Detail see : https://github.com/RubaXa/Sortable/issues/1012
          dataTransfer.setData('Text', '');
        },
        onEnd: (evt) => {
          this.$emit('tableSort', evt);
        },
      });
    },
  },
  computed: {
    fitTableData() {
      const fit = {
        column: [],
        row: [],
        operation: [],
        meta: {
          maxHeight: '',
          selection: false,
          handleSelectionChange: () => {},
          handleExpandChange: () => {},
          // 如果expandType为form，则是省略展示，用num处理。如果expandType为table，则是表格展示，用row里面的expandTableData展示。
          expand: {
            eswitch: false, // 折叠展示
            num: 0,
            expandType: 'form',
          },
        },
      };
      _.merge(fit, this.tableData);
      return fit;
    },
    fitTableDataColumn() {
      const { eswitch, expandType, num } = this.fitTableData.meta.expand;
      if (eswitch) {
        if (expandType === 'form') {
          return this.fitTableData.column.slice(0, num);
        }
      }
      return this.fitTableData.column;
    },
    expandFitTableDataColumn() {
      const { eswitch, expandType, num } = this.fitTableData.meta.expand;
      if (eswitch) {
        if (expandType === 'form') {
          return this.fitTableData.column.slice(num);
        }
      }
      return [];
    },
  },
};
</script>

<style>
.sortable-ghost{
  opacity: .8;
  color: #fff!important;
  background: #052644!important;
}
</style>

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
