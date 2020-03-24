<template>
  <div :class="$style['dynamic-table']">

    <x-drawer ref="drawer">
      <div slot="header">
        <span>可拖拽表格配置的JSON格式：</span>
      </div>
      <json-viewer
        :value="tableData"
        :expand-depth=5>
      </json-viewer>
    </x-drawer>

    <x-aside>
      <span>可拖拽表格表格： 引入组件，配置展示表格的展示列，json格式，可从后端获取，也可以前端配置，然后获取远端数据。配置格式请查看 &nbsp;&nbsp;</span>
      <el-button type="primary" size="mini"  @click="handleDrawer()">配置树</el-button>
    </x-aside>

    <x-table :isSort="true" :tableData="tableData"/>
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
        ],
        row: [
          {
            accountId: '111111',
            accountName: '上海学校',
            accountNo: '12123',
            orgId: '2',
            orgName: '上海学校1',
            bankId: '2',
            bankName: '银行1',
            fundsNatureId: '2',
            fundsNatureName: '111',
            noticeUsers: '可考虑考虑',
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
            orgName: '洛阳学校2',
            bankId: '1',
            bankName: '银行2',
            fundsNatureId: '1',
            fundsNatureName: '222',
            noticeUsers: '李海',
            createdTime: '2019-12-27 09:37:13',
            createdUser: '杨盼',
            lastModifiedTime: '2019-12-27 09:37:13',
            lastModifiedUser: '系统账号',
            valid: 1,
            memo: '!!!!!! 测试勿动 !!!!!!',
            logStats: null,
          },
          {
            accountId: '3333',
            accountName: '深圳学校',
            accountNo: '333',
            orgId: '3',
            orgName: '深圳学校3',
            bankId: '3',
            bankName: '银行3',
            fundsNatureId: '3',
            fundsNatureName: '333',
            noticeUsers: '12',
            createdTime: '2019-12-27 10:44:37',
            createdUser: '杨盼',
            lastModifiedTime: '2019-12-27 10:44:37',
            lastModifiedUser: '系统账号',
            valid: 1,
            memo: '开始点击',
            logStats: null,
          },
          {
            accountId: '44444',
            accountName: '长沙学校',
            accountNo: '44',
            orgId: '4',
            orgName: '长沙学校4',
            bankId: '4',
            bankName: '银行4',
            fundsNatureId: '3',
            fundsNatureName: '444',
            noticeUsers: '12',
            createdTime: '2019-12-27 10:44:37',
            createdUser: '杨盼',
            lastModifiedTime: '2019-12-27 10:44:37',
            lastModifiedUser: '系统账号',
            valid: 1,
            memo: '开始点击',
            logStats: null,
          },
          {
            accountId: '5555',
            accountName: '北京学校',
            accountNo: '555',
            orgId: '5',
            orgName: '北京学校5',
            bankId: '5',
            bankName: '银行5',
            fundsNatureId: '5',
            fundsNatureName: '555',
            noticeUsers: '12',
            createdTime: '2019-12-27 10:44:37',
            createdUser: '杨盼',
            lastModifiedTime: '2019-12-27 10:44:37',
            lastModifiedUser: '系统账号',
            valid: 1,
            memo: '北京学校接口',
            logStats: null,
          },
        ], // 行数据
        operation: [],
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
  },
  methods: {
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
