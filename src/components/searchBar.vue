<template>
  <div class="search-wrapper">
      <van-search
  v-model="value"
  shape="round"
  background="#6A9DF9"
  placeholder="请输入搜索关键词"
/>
  </div>
</template>

<script>
export default {
  data() {
    return {
        value:""
    };
  },
  methods: {
      
      
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
.search-wrapper {
  position: fixed;
  width: 100%;
  height: px2rem(48);
  left: 0;
  top: px2rem(47);
  z-index: 1000;
}
</style>