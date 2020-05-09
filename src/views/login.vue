<template>
  <div :class="$style.login">
    <div :class="$style.in18">
      <in18></in18>
    </div>
    <div :class="$style.main">
      <div :class="$style.form">
        <img :class="$style.logo" src="~/assets/images/logo-03.png"/>
        <h2 :class="$style.title">{{$t('m.login.started')}}</h2>
        <p :class="$style.text">{{$t('m.login.continue')}}</p>
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules">

          <el-form-item prop="name">
            <el-input :placeholder="$t('m.login.rulesName')" v-model="ruleForm.name" suffix-icon="el-icon-user" />
          </el-form-item>

          <el-form-item prop="password">
            <el-input :placeholder="$t('m.login.rulesPassword')" v-model="ruleForm.password" type="password"  suffix-icon="el-icon-lock"/>
          </el-form-item>

          <el-form-item>
            <div :class="$style.foot">
              <el-checkbox v-model="checked">{{$t('m.login.keep')}}</el-checkbox>
              <b>{{$t('m.login.forgot')}}</b>
            </div>
          </el-form-item>

          <el-form-item>
            <el-button @click="login" :class="$style['login-btn']" type="primary">
              {{$t('m.login.sing')}}
            </el-button>
          </el-form-item>
        </el-form>
        <p :class="$style.link">{{$t('m.login.account')}}<el-button type="text">{{$t('m.login.create')}}</el-button></p>
      </div>
    </div>
  </div>
</template>

<script>
import in18 from 'components/in18/index.vue';

export default {
  components: {
    in18,
  },
  computed: {
    rules() {
      return {
        name: [
          {
            required: true,
            message: this.$t('m.login.rulesName'),
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: this.$t('m.login.rulesPassword'),
            trigger: 'blur',
          },
        ],
      };
    },

  },
  data() {
    return {
      checked: '',
      ruleForm: {
        name: '',
        password: '',
      },
    };
  },
  created() {
    window.yangpanLoading.hide();
  },
  mounted() {

  },
  methods: {
    login() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$router.push({ path: '/' });
        }
      });
    },
  },
};
</script>

<style lang="scss" module>
.login{
  .in18{
    text-align: right;
    float: right;
    margin: 10px;
    padding: 5px;
    border: 1px solid #aaaaaa;
  }
  .main {
    width: 100vw;
    height: calc(100vh - 48px);
    display: flex;
    align-items: center;
    justify-content: center;
    .form{
      width: 60%;
      max-width: 520px;
      background: white;
      padding: 3rem;
      .logo{
        width: 160px;
        padding-bottom: 20px;
      }
      .title{
        font-weight:500;
        color: #000000;
      }
      .text{
        line-height: 21px;
        font-size: 14px;
        padding-bottom: 30px;
      }
      .foot {
        display: flex;
        justify-content: space-between;
      }
      .login-btn{
        width: 100%;
      }
      .link{
        text-align: center;
      }
    }
  }
}

</style>
