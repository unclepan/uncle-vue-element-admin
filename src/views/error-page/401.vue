<template>
  <div :class="$style['err-page-container']">
    <el-button @click="back" type="primary">
      返回
    </el-button>
    <el-row>
      <el-col :span="12">
        <h1 :class="$style['text-jumbo']">
          Oops!
        </h1>
        <h2>你没有权限去该页面</h2>
        <h6>如有不满请联系你领导</h6>
        <ul :class="$style['list-unstyled']">
          <li>或者你可以去:</li>
          <li>
            <router-link to="/">
              回首页
            </router-link>
          </li>
          <li>
            <a href="http://www.antcp.com/">随便看看</a>
          </li>
        </ul>
      </el-col>
      <el-col :span="12">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
      </el-col>
    </el-row>
  </div>
</template>

<script>
import errGif from '@/assets/images/401_images/401.gif';

export default {
  name: 'err401',
  data() {
    return {
      errGif: `${errGif}?${+new Date()}`,
    };
  },
  created() {
    window.yangpanLoading.hide();
  },
  methods: {
    back() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: '/' });
      } else {
        this.$router.go(-1);
      }
    },
  },
};
</script>

<style lang="scss" module>
  .err-page-container {
    width: 800px;
    max-width: 100%;
    margin: 100px auto;
    .text-jumbo {
      font-size: 60px;
      font-weight: 700;
      color: #484848;
    }
    .list-unstyled {
      font-size: 14px;
      li {
        padding-bottom: 5px;
      }
      a {
        color: #008489;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
