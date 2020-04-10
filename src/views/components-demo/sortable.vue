<template>
  <div :class="$style.sortable">
    <x-aside>
      功能强大的JavaScript 拖拽库，本 Demo 是基于。
      <a href="https://github.com/SortableJS/Sortable" target="_blank">sortablejs</a>
    </x-aside>
    <el-row :gutter="20">
      <el-col :span="8">
        <h3 :class="$style['items-header']">left</h3>
        <ul :class="$style.items" ref="itemsLeft">
            <li>left item 1</li>
            <li>left item 2</li>
            <li>left item 3</li>
        </ul>
      </el-col>
       <el-col :span="8">
        <h3 :class="$style['items-header']">center</h3>
        <ul :class="$style.items" ref="itemsCenter">
            <li>center item 1</li>
            <li>center item 2</li>
            <li>center item 3</li>
        </ul>
      </el-col>
      <el-col :span="8">
        <h3 :class="$style['items-header']">right</h3>
        <ul :class="$style.items" ref="itemsRight">
            <li>right item 1</li>
            <li>right item 2</li>
            <li>right item 3</li>
        </ul>
      </el-col>
    </el-row>


  </div>
</template>

<script>
import aside from 'components/x-aside.vue';
import Sortable from 'sortablejs';

export default {
  name: 'sortable',
  components: {
    'x-aside': aside,
  },
  data() {
    return {
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const { itemsLeft, itemsRight, itemsCenter } = this.$refs;
      Sortable.create(itemsLeft, {
        group: 'shared',
        animation: 150,
      });
      Sortable.create(itemsCenter, {
        group: 'shared',
        animation: 150,
      });
      Sortable.create(itemsRight, {
        group: 'shared',
        animation: 150,
      });
    },
  },
};
</script>

<style lang="scss" module>
.sortable{
  background: #ffffff;
  padding: 16px;
  .items-header{
    line-height: 21px;
    background: #052644;
    margin-bottom: 10px;
    text-align: center;
    color: #ffffff;
  }
  .items{
    background: #f1f1f1;
    padding: 10px;
    min-height: 100px;
    li {
      line-height: 21px;
      padding: 10px;
      border: 1px solid #aaaaaa;
      border-radius: 4px;
      margin-bottom: 20px;
      background: #ffffff;
      color: #333;
      cursor: pointer;
    }
  }
}
</style>
