<template>
  <div class="authority-wrapper">
    <div class="wrapper">
      <van-cell center title="信息录入" >
        <template #right-icon>
          <van-switch v-model="checked1" size="24" />
        </template>
      </van-cell>
      <van-cell center title="巡检告知">
        <template #right-icon>
          <van-switch v-model="checked2" size="24" />
        </template>
      </van-cell>
      <van-cell center title="审查发布">
        <template #right-icon>
          <van-switch v-model="checked3" size="24" />
        </template>
      </van-cell>
      <div class="button">
      <van-button type="info" size="large">保存</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked1:false,
      checked2:false,
      checked3:false

    }
  },
  mounted() {
   
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
.authority-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  //background-color: #773f3f;
  .wrapper{
    margin-top: px2rem(10);
    .bottom-line{
      border:none;
      border-bottom: px2rem(1) solid #E2D7D7;
    }
    .button{
      margin-top: px2rem(20);
      padding:0 px2rem(25) ; 
    }
  }
}
</style>