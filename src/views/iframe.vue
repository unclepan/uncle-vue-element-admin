<template>
    <iframe id="receiver" @load="loading = false" :class="$style.iframe" :src="src" frameborder="0" scrolling="auto"></iframe>
</template>
<script>
import { isExternal } from 'lib/validate';

export default {
  name: 'iframe',
  data() {
    return {
      src: '',
      loading: true,
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.loading = true;
      const { url } = this.$route.params;
      if (isExternal(url)) {
        this.src = url;
      } else {
        this.$router.replace('/404');
      }
    },
  },
  watch: {
    $route() {
      this.init();
    },
    loading(nv) {
      if (!nv) {
        const receiver = document.getElementById('receiver').contentWindow;
        this.$nextTick(() => {
          receiver.postMessage({ appName: 'antcp' }, '*');
        });
      }
    },
  },
};
</script>

<style lang="scss" module>
.iframe{
    position: absolute;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    background: #ffffff;
}
</style>
