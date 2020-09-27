<template>
  <div class="title-wrapper">
    <div class="left">
      <div class="back" @click="back">
        <van-icon name="arrow-left" />
      </div>
      <div class="title">
        <span>{{ title }}</span>
      </div>
    </div>
    <div class="right">
      <div class="more" @click="TopPopup">
        <van-icon name="ellipsis" />
      </div>
    </div>

    <van-share-sheet
  v-model="showShare"
  title="立即分享给好友"
  :options="options"
  @select="onSelect"
/>
  </div>
</template>


<script>
import { Ala } from "../utils/mixin";

export default {
  mixins: [Ala],
  props: {
    title: String
  },
  data() {
    return {
      imgUrl: "",
      show: false,
      showShare:false,
        options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
    };
  },
  mounted() {},
  methods: {
    TopPopup() {
        this.showShare=true
    },
      onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
    back() {
      this.$router.go(-1);
    },
    //测试mockjs模拟接口
    getInfo() {
      this.$axios.get(`${process.env.VUE_APP_BASE_URL}/Ala/info`).then(
        response => {
          console.log(response);
          this.imgUrl = response.data.data[0].imageUrl;
        },
        error => {}
      );
    },
    //测试接口
    getInfo2() {
      this.$axios.get(`/api/user/getInfo`).then(
        response => {
          console.log(response);
        },
        error => {}
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
.title-wrapper {
  width: 100%;
  height: px2rem(48);
  background-color: $titleColor;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  display: flex;
  z-index: 1000;
  .left {
    flex: 1;
    @include left;
    .back {
      flex: 0 0 px2rem(40);
      @include center;
      font-size: px2rem(25);
    }
    .title {
      flex: 1;
      display: flex;
      font-size: px2rem(18);
      width: 0;
      span {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .right {
    flex: 0 0 px2rem(60); //占据主轴空间 剩下的所有空间
    //------------------------------------
    //下面的flex布局用于自己的子容器
    @include right;
    .more {
      flex: 0 0 px2rem(60);
      @include center;
      font-size: px2rem(25);
    }
  }
}
</style>