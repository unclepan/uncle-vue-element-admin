<template>
  <el-submenu
    v-if="hasChild(item)"
    :popper-append-to-body="false"
    :index="resolvePath(item)">
    <template slot="title">
        <i v-if="item.iconStr" :class="['icon', 'iconfont', item.iconStr, $style['item-icon']]"></i>&nbsp;
        <span :class="$style['item-name']">{{$t(`m.${item.menuName}`)}}</span>
    </template>
    <sidebar-item v-for="(subItem) in item.subMenus" :item="subItem" :key="subItem.id"/>
  </el-submenu>

  <el-menu-item
    v-else
    :index="resolvePath(item)">
    <i v-if="item.iconStr" :class="['icon', 'iconfont', item.iconStr, $style['item-icon']]"></i>&nbsp;
    <span slot="title">
      <span :class="$style['item-name']">{{$t(`m.${item.menuName}`)}}</span>
    </span>
  </el-menu-item>

</template>
<script>
import { getPropObject } from 'lib/vue-prop';

export default {
  name: 'sidebarItem',
  props: {
    item: getPropObject(),
  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    hasChild(item) {
      // 没有子items
      return item.subMenus && item.subMenus.length;
    },
    resolvePath(item) {
      return item.invokeUrl || item.menuName;
    },
  },
};
</script>

<style lang="scss" module>
.item-icon{
  font-size: 20px !important;
}
.item-name{
  display: inline-block;
  width: 130px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>
