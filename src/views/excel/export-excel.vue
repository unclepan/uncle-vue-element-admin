<template>
  <div :class="$style.guide">
    <x-aside>
      在有些场景下用户需要将页面数据导出成excel或者纯文本，在不依赖后端的情况下，我们就要使用纯前端导出excel。Demo 是基于
      <a href="https://github.com/SheetJS/sheetjs" target="_blank">sheetjs &nbsp;&nbsp;</a>
      <el-button :loading="exportLoading" type="primary" size="mini"  @click="handleExport()">导出</el-button>
    </x-aside>

    <x-table :tableData="tableData"/>
  </div>
</template>

<script>
import xTable from 'components/x-table/index.vue';
import aside from 'components/x-aside.vue';

export default {
  name: 'excel.export',
  components: {
    xTable,
    'x-aside': aside,
  },
  data() {
    return {
      tableData: {
        column: [ // 展示列
          {
            prop: 'orgName',
            label: '组织机构',
            width: '180',
            fixed: 'left',
            align: 'left',
            format: data => `${data.orgName}`,
          },
          {
            prop: 'fundsNatureName',
            label: '资金用途',
            width: '180',
          },
          {
            prop: 'bankName',
            label: '银行',
          },
          {
            prop: 'createdTime',
            label: '创建时间',
          },
          {
            prop: 'createdUser',
            label: '创建人',
          },
          {
            prop: 'memo',
            label: '备注',
          },
        ],
        row: [
          {
            orgName: '上海学校',
            fundsNatureName: '报名费',
            bankName: '中国银行',
            createdTime: '2019-12-27 10:44:37',
            createdUser: '杨盼',
            memo: '1213',
          },
          {
            orgName: '洛阳学校',
            fundsNatureName: '学费',
            bankName: '招商银行',
            createdTime: '2019-10-27 09:37:13',
            createdUser: '杨盼',
            memo: '!!!!!! 测试勿动 !!!!!!',
          },
          {
            orgName: '北京学校',
            fundsNatureName: '工本费',
            bankName: '建设银行',
            createdTime: '2019-11-27 09:37:13',
            createdUser: '李海',
            memo: '测试可动',
          },
          {
            orgName: '上海学校',
            fundsNatureName: '报名费',
            bankName: '中国银行',
            createdTime: '2019-04-25 10:44:37',
            createdUser: '杨盼',
            memo: '44444',
          },
          {
            orgName: '长沙学校',
            fundsNatureName: '学费',
            bankName: '招商银行',
            createdTime: '2019-05-24 09:37:13',
            createdUser: '杨盼',
            memo: '55555',
          },
          {
            orgName: '湘潭学校',
            fundsNatureName: '工本费',
            bankName: '建设银行',
            createdTime: '2019-06-23 09:37:13',
            createdUser: '李海',
            memo: '66666',
          },
          {
            orgName: '南京学校',
            fundsNatureName: '报名费',
            bankName: '中国银行',
            createdTime: '2019-07-22 10:44:37',
            createdUser: '杨盼',
            memo: '77777',
          },
          {
            orgName: '深圳学校',
            fundsNatureName: '学费',
            bankName: '招商银行',
            createdTime: '2019-08-21 09:37:13',
            createdUser: '杨盼',
            memo: '88888',
          },
          {
            orgName: '广州学校',
            fundsNatureName: '工本费',
            bankName: '建设银行',
            createdTime: '2019-09-10 09:37:13',
            createdUser: '李海',
            memo: '99999',
          },
        ], // 行数据
        operation: [],
      },
      exportLoading: false,
      filename: '导出测试',
      autoWidth: true,
      bookType: 'xlsx',
    };
  },
  methods: {
    handleExport() {
      this.exportLoading = true;
      import('@/lib/export-excel').then((excel) => {
        const tHeader = ['组织机构', '资金用途', '开户银行', '创建时间', '创建人', '备注'];
        const filterVal = ['orgName', 'fundsNatureName', 'bankName', 'createdTime', 'createdUser', 'memo'];
        const list = this.tableData.row;
        const data = this.formatJson(filterVal, list);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType,
        });
        this.exportLoading = false;
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
  },
};
</script>

<style lang="scss" module>
.guide{
  background: #ffffff;
  padding: 16px;
}
</style>
