<template>
  <div :class="$style.list">
    <x-table v-loading="loading" :tableData="tableData"/>
    <pagination
      :pagina="pagina"
      :sizeChange="sizeChange"
      :currentChange="currentChange"/>
  </div>
</template>

<script>
import message from 'lib/message';
import xTable from 'components/x-table/index.vue';
import pagination from 'components/pagination/index.vue';
import { getPropObject } from 'lib/vue-prop';

export default {
  props: {
    filterccCondition: getPropObject(),
  },
  data() {
    return {
      loading: true,
      pagina: {
        current: 1,
        size: 10,
        total: 0,
      },
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
              func: (cb) => {
                // console.log(data);
                message.success('编辑成功');
                cb();
              },
            },
          },
          {
            prop: 'valid',
            label: '生效状态',
            components: {
              key: 'x-switch',
              func: () => {
                message.success('更改成功');
                // console.log(data);
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
          func: () => {
            // console.log(data);
            message.success('编辑成功');
          },
        }],
      },
    };
  },
  components: {
    xTable,
    pagination,
  },
  created() {
    this.init();
  },
  methods: {
    search() {
      this.pagina.current = 1;
      this.init();
    },
    init() {
      this.loading = true;
      // const data = { ...this.filterccCondition, pageSize: this.pagina.size, pageNo: this.pagina.current };
      this.tableData.row = [
        {
          accountId: '111111',
          accountName: '上海学校',
          accountNo: '12123',
          orgId: '2',
          orgName: '上海学校',
          bankId: '2',
          bankName: '中国银行',
          fundsNatureId: '2',
          fundsNatureName: '报名费',
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
        {
          accountId: '3333',
          accountName: '深圳学校',
          accountNo: '333',
          orgId: '3',
          orgName: '深圳学校',
          bankId: '3',
          bankName: '中国银行',
          fundsNatureId: '3',
          fundsNatureName: '报名费',
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
          orgName: '长沙学校',
          bankId: '4',
          bankName: '中国银行',
          fundsNatureId: '3',
          fundsNatureName: '报名费',
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
          orgName: '北京学校',
          bankId: '5',
          bankName: '中国银行',
          fundsNatureId: '5',
          fundsNatureName: '报名费',
          noticeUsers: '12',
          createdTime: '2019-12-27 10:44:37',
          createdUser: '杨盼',
          lastModifiedTime: '2019-12-27 10:44:37',
          lastModifiedUser: '系统账号',
          valid: 1,
          memo: '北京学校接口',
          logStats: null,
        },
      ];
      this.loading = false;
    },
    sizeChange(val) {
      this.pagina.size = val;
      this.init();
    },
    currentChange(val) {
      this.pagina.current = val;
      this.init();
    },
  },
};
</script>

<style lang="scss" module>
  .list{
    background: #ffffff;
    padding: 16px;
  }
</style>
