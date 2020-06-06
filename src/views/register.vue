<template>
  <div :class="$style.register">
    <div :class="$style.in18">
      <in18></in18>
    </div>
    <div :class="$style.main">
      <div :class="$style.form">
        <img :class="$style.logo" src="~/assets/images/logo-03.png"/>
        <h2 :class="$style.title">{{$t('m.register.started')}}</h2>
        <p :class="$style.text">{{$t('m.register.continue')}}</p>
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules">

          <el-form-item prop="name">
            <el-input :placeholder="$t('m.register.rulesName')" v-model="ruleForm.name" suffix-icon="el-icon-user" />
          </el-form-item>

          <el-form-item prop="email">
            <el-input :placeholder="$t('m.register.rulesEmail')" v-model="ruleForm.email" suffix-icon="el-icon-message" />
          </el-form-item>

          <el-form-item prop="password">
            <el-input :placeholder="$t('m.register.rulesPassword')" v-model="ruleForm.password" type="password"  suffix-icon="el-icon-lock"/>
          </el-form-item>

          <el-form-item>
           <el-checkbox v-model="checked">{{$t('m.register.conditions')}}</el-checkbox>
          </el-form-item>

          <el-form-item>
            <el-button @click="register" :class="$style['register-btn']" type="primary">
              {{$t('m.register.sing')}}
            </el-button>
          </el-form-item>
        </el-form>
        <p :class="$style.account">{{$t('m.register.account')}}<router-link :to="{ path: '/login' }" :class="$style.link">{{$t('m.register.login')}}</router-link></p>
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
            message: this.$t('m.register.rulesName'),
            trigger: 'change',
          },
          {
            min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'change',
          },
        ],
        email: [
          {
            required: true,
            message: this.$t('m.register.rulesEmail'),
            trigger: 'change',
          },
        ],
        password: [
          {
            required: true,
            message: this.$t('m.register.rulesPassword'),
            trigger: 'change',
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
        email: '',
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
    register() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$router.push({ path: '/login' });
        }
      });
    },
  },
};
</script>

<style lang="scss" module>
.register{
  .in18{
    text-align: right;
    float: right;
    margin: 10px;
    padding: 5px;
    border: 1px solid #aaaaaa;
  }
  .main {
    width: 100vw;
    height: calc(100vh - 96px);
    display: flex;
    align-items: center;
    justify-content: center;
    .form{
      width: 520px;
      background: white;
      padding: 3rem;
      :global(.el-input__inner){
        height: 50px;
        line-height: 50px;
      }
      .logo{
        width: 160px;
        padding-bottom: 20px;
      }
      .title{
        font-weight:800;
        color: #000000;
      }
      .text{
        line-height: 21px;
        font-size: 14px;
        padding-bottom: 30px;
        font-weight:300;
      }
      .register-btn{
        width: 100%;
      }
      .account{
        text-align: center;
        .link{
          color: #409EFF;
        }
      }
    }
  }
}

</style>
