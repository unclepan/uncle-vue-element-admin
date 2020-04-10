<template>
  <div :class="$style['tags-view-container']" @click="test">
     <vue-scroll ref="vs" :ops='ops'>
       <el-tag
          @close="close(item)"
          @click="push(item)"
          :effect="isActive(item) ? 'dark' : 'plain'"
          size="small"
          :class="[$style['tags-view-item'], `tag-${index}`]"
          v-for="(item, index) in tags"
          :key="index"
          :closable="!item.meta.affix">
          <i v-if="!item.meta.noRefresh" class="el-icon-refresh" @click="$emit('refresh')"></i>
          {{$t(`m.${item.name}`)}}
        </el-tag>
      </vue-scroll>
  </div>
</template>

<script>
import _ from 'lodash';
import path from 'path';
import { constantRoutes } from 'router/index';

export default {
  data() {
    return {
      routes: constantRoutes,
      tags: [],
      ops: {
        scrollPanel: {
          scrollingY: false,
        },
        bar: {
          background: '#aaaaaa',
          onlyShowBarOnScroll: false,
        },
      },
    };
  },
  computed: {
  },
  watch: {
    $route() {
      this.addTags();
      this.moveToCurrentTag();
    },
  },
  mounted() {
    this.initTags();
    this.addTags();
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path;
    },
    test() {
      // this.$refs.vs.scrollIntoView('.tag-34', 500);
    },
    filterAffixTags(routes, basePath = '/') {
      let tags = [];
      routes.forEach((route) => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path);
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta },
          });
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path);
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags];
          }
        }
      });
      return tags;
    },
    initTags() {
      this.affixTags = this.filterAffixTags(this.routes);
      const { affixTags } = this;
      affixTags.forEach((item) => {
        if (item.name) {
          this.tags.push(item);
        }
      });
    },
    addTags() {
      let { name } = this.$route;
      const { meta } = this.$route;
      if (meta && meta.ignore) {
        // fix:代码不通用，用于外链标识
        name = this.fix();
      }
      if (name) {
        if (this.tags.some(v => v.path === this.$route.path)) return;
        this.tags.push(Object.assign({}, this.$route, {
          title: this.$route.meta.title || 'no-name',
          name,
        }));
      }
    },
    moveToCurrentTag() {
      const index = _.findIndex(this.tags, o => o.path === this.$route.path);
      this.$nextTick(() => {
        this.$refs.vs.scrollIntoView(`.tag-${index}`, 500);
      });
    },
    push(item) {
      if (this.$route.path === item.path) return;
      this.$router.push({ path: item.path, query: item.query, fullPath: item.fullPath });
    },
    close(item) {
      const arr = this.tags.filter(i => i.path !== item.path);
      this.tags = arr;
      if (this.isActive(item)) {
        this.toLastView(arr);
      }
    },
    toLastView(visitedViews) {
      const latestView = visitedViews.slice(-1)[0]; // 找到最后一个元素
      if (latestView) {
        this.$router.push(latestView);
      } else {
        this.$router.push('/');
      }
    },
    fix() { // 外链视窗才用
      const { routerAliasName } = this.$route.query;
      return `system.${routerAliasName}`;
    },
  },
};
</script>

<style lang="scss" module>
.tags-view-container {
  height: 36px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(99, 99, 99, .08), 0 0 3px 0 rgba(99, 99, 99, .04);
  white-space:nowrap;
  line-height: 36px;
  .tags-view-item {
    cursor: pointer;
    display: inline-block;
    margin-left: 8px;
  }
}
</style>
