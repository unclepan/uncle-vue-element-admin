<template>
  <div :class="$style['dynamic-table']">

    <x-drawer ref="drawer">
      <div slot="header">
        <span>动态表格配置的JSON格式：</span>
      </div>
      <json-viewer
        :value="tableData"
        :expand-depth=5>
      </json-viewer>
    </x-drawer>

    <x-aside>
      <span>动态表格： 引入组件，配置展示表格的展示列，json格式，可从后端获取，也可以前端配置，然后获取远端数据。配置格式请查看 &nbsp;&nbsp;</span>
      <el-button type="primary" size="mini"  @click="handleDrawer()">配置树</el-button>
    </x-aside>

    <x-table :tableData="tableData"/>
  </div>
</template>

<script>
import JsonViewer from 'vue-json-viewer';
import aside from 'components/x-aside.vue';
import xTable from 'components/x-table/index.vue';
import xDrawer from 'components/x-drawer.vue';

export default {
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
            label: '开户银行',
          },
          {
            prop: 'accountName',
            label: '我方账户名称',
          },
          {
            prop: 'accountNo',
            label: '账号',
          },
          {
            prop: 'noticeUsers',
            label: '记账通知人',
            components: {
              key: 'edit-popover',
              type: 'el-input',
              meta: {
                placeholder: '请输入内容',
              },
              func: (data, cb) => {
                console.log(data);
                cb();
              },
            },
          },
          {
            prop: 'valid',
            label: '生效状态',
            components: {
              key: 'x-switch',
              func: (data) => {
                console.log(data);
              },
            },
          },
          {
            prop: 'lastModifiedUser',
            label: '最后操作人',
          },
          {
            prop: 'lastModifiedTime',
            label: '最后操作时间',
          },
          {
            prop: 'memo',
            label: '备注',
          },
        ],
        row: [], // 行数据
        operation: [{
          label: '编辑',
          func: (data) => {
            console.log(data);
          },
        }],
      },
    };
  },
  components: {
    xDrawer,
    JsonViewer,
    xTable,
    'x-aside': aside,
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.tableData.row = [
        {
          accountId: '111111',
          accountName: '12',
          accountNo: '12123',
          orgId: '2',
          orgName: '上海学校',
          bankId: '2',
          bankName: '中国银行',
          fundsNatureId: '2',
          fundsNatureName: '报名费',
          noticeUsers: '12',
          createdTime: '2019-12-27 10:44:37',
          createdUser: '杨盼',
          lastModifiedTime: '2019-12-27 10:44:37',
          lastModifiedUser: '系统账号',
          valid: 1,
          memo: '1213',
          logStats: null,
        },
        {
          accountId: '2222222',
          accountName: '洛阳学校',
          accountNo: '379900037510506',
          orgId: '225',
          orgName: '洛阳学校',
          bankId: '1',
          bankName: '招商银行',
          fundsNatureId: '1',
          fundsNatureName: '学费',
          noticeUsers: '李海',
          createdTime: '2019-12-27 09:37:13',
          createdUser: '杨盼',
          lastModifiedTime: '2019-12-27 09:37:13',
          lastModifiedUser: '系统账号',
          valid: 1,
          memo: '!!!!!! 测试勿动 !!!!!!',
          logStats: null,
        },
      ];
    },
    handleDrawer() {
      this.$refs.drawer.open();
    },
  },
};
</script>
<style lang="scss" module>
.dynamic-table {
  background: #ffffff;
  padding: 16px;
}
</style>
