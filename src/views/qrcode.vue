<template>
  <div :class="$style.qrcode">
    <x-aside>
      前端生成二维码解决方案，请参考
      <a href="https://github.com/davidshimjs/qrcodejs#readme" target="_blank">qrcodejs</a>
    </x-aside>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-input v-model="text" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="makeCode(text)">生成</el-button>
      </el-col>
    </el-row>


    <div :class="$style.pic" ref="qrCodeUrl"></div>
  </div>
</template>

<script>
import aside from 'components/x-aside.vue';
import QRCode from 'qrcodejs2';

export default {
  name: 'qrcode',
  components: {
    'x-aside': aside,
  },
  data() {
    return {
      qrcode: '',
      text: 'https://www.qq.com/',
    };
  },
  mounted() {
    this.creatQrCode();
  },
  methods: {
    creatQrCode() {
      this.qrcode = new QRCode(this.$refs.qrCodeUrl, {
        text: this.text, // 需要转换为二维码的内容
        width: 100,
        height: 100,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H,
      });
    },
    clear() {
      this.qrcode.clear();
    },
    makeCode(val) {
      this.qrcode.makeCode(val);
    },
  },
};
</script>

<style lang="scss" module>
.qrcode{
  background: #ffffff;
  padding: 16px;
  .pic{
    display: inline-block;
    padding-top: 20px;
    img {
        width: 132px;
        height: 132px;
        background-color: #fff;
        padding: 6px;
        box-sizing: border-box;
    }
  }
}
</style>
