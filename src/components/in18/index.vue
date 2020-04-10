<template>
  <div :class="$style.in18" @click="changeLangEvent">
    <slot>
      <span :class="$style['in18-icon']">{{switchLanguage()}}</span>
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      driver: null,
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
    switchLanguage() {
      switch (this.$i18n.locale) {
        case 'zh-CN':
          return '中文';
        case 'en-US':
          return 'EN';
        default:
          return '语言';
      }
    },
    changeLangEvent() {
      this.$confirm(this.$t('m.languageSwitching'), this.$t('m.tips'), {
        confirmButtonText: this.$t('m.determine'),
        cancelButtonText: this.$t('m.cancel'),
        type: 'warning',
      }).then(() => {
        if (this.$i18n.locale === 'zh-CN') {
          this.$i18n.locale = 'en-US';// 关键语句
        } else {
          this.$i18n.locale = 'zh-CN';// 关键语句
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: this.$t('m.cancel'),
        });
      });
    },
  },
};
</script>
<style lang="scss" module>
.in18{
  margin: 0 5px;
  .in18-icon{
    cursor: pointer;
    font-weight: bolder;
    font-size: 12px;
  }
}
</style>
