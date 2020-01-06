<template>
  <aside>
    <slot>提示</slot>
  </aside>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {

  },
};
</script>
<style lang="scss" module>
aside{
  background: #eef1f6;
  padding: 8px 24px;
  margin-bottom: 20px;
  border-radius: 2px;
  display: block;
  line-height: 32px;
  font-size: 16px;
  color: #2c3e50;
  a {
    color: #337ab7;
  }
}
</style>
