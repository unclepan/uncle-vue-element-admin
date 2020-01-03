<template>
  <div :class="$style['title-box']">
    <h3 :class="$style.title">
      <slot></slot>
    </h3>
    <div>
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
    };
  },
  components: {
  },
  mounted() {

  },
  methods: {
  },
};
</script>

<style lang="scss" module>
.title-box{
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title{
    padding: 0;
    line-height: 14px;
    padding-left: 10px;
    border-left: 3px solid #052644;
  }
}
</style>
