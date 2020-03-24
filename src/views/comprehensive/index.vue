<template>
  <div>
    <condition @search="search"/>
    <list ref="list" :filterccCondition="filterccCondition"/>
  </div>
</template>


<script>
import list from './list.vue';
import condition from './condition.vue';

export default {
  data() {
    return {
      filterccCondition: { // 与condition里的动态字段要一一对应
        single: '',
        multiple: '',
        input: '',
        statDateBegin: '',
        statDateEnd: '',
      },
    };
  },
  components: {
    list,
    condition,
  },
  mounted() {

  },
  methods: {
    search(data) {
      this.filterccCondition = data;
      this.$nextTick(() => {
        this.$refs.list.search();
      });
    },
  },
};
</script>
<style lang="scss" module>
</style>
