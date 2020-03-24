<template>
  <div :class="$style.cropper">
    <x-aside>
      cropperjs是一款非常强大却又简单的图片裁剪工具，它可以进行非常灵活的配置，支持手机端使用，支持包括IE9以上的现代浏览器。
      <a href="https://github.com/fengyuanchen/cropperjs" target="_blank">cropperjs</a>
    </x-aside>
    <el-button :class="$style.btn" type="primary" @click="sureSava">裁剪</el-button>
    <div :class="$style.container">
      <div :class="$style['img-container']">
        <img src="@/assets/images/test.jpg" ref="image" alt="">
      </div>
      <div :class="$style.afterCropper">
        <img :src="afterImg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import aside from 'components/x-aside.vue';

export default {
  components: {
    'x-aside': aside,
  },
  data() {
    return {
      myCropper: null,
      afterImg: '',
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.myCropper = new Cropper(this.$refs.image, {
        viewMode: 1,
        dragMode: 'none',
        initialAspectRatio: 1,
        aspectRatio: 1,
        preview: '.before',
        background: false,
        autoCropArea: 0.6,
        zoomOnWheel: false,
      });
    },
    sureSava() {
      this.afterImg = this.myCropper.getCroppedCanvas({
        imageSmoothingQuality: 'high',
      }).toDataURL('image/jpeg');
    },
  },
};
</script>

<style  lang="scss" module>
.cropper{
  background: #ffffff;
  padding: 16px;
  .btn{
    margin-bottom: 30px;
  }
  .container{
    display: flex;
    .img-container{
      height: 600px;
      overflow: hidden;
    }
    .afterCropper{
      flex: 1;
      margin-left: 20px;
      border: 1px solid #999999;
      text-align: center;
    }
    .afterCropper img{
      width: 150px;
      margin-top: 30px;
    }
  }
}

</style>
