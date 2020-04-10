<template>
  <span @click.prevent.stop="guide">
    <slot></slot>
  </span>
</template>

<script>
import Driver from 'driver.js'; // import driver.js
import 'driver.js/dist/driver.min.css'; // import driver.js css
import steps from './steps';

export default {
  data() {
    return {
      driver: null,
    };
  },
  created() {
    this.driver = new Driver({
      nextBtnText: this.$t('m.next'),
      prevBtnText: this.$t('m.prev'),
      closeBtnText: this.$t('m.close'),
      doneBtnText: this.$t('m.complete'),
    });
  },
  mounted() {
    // this.guide();
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps(this));
      this.driver.start();
    },
  },
};
</script>
