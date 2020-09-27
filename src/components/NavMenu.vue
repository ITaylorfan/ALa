<template>
  <div class="nav-wrapper">
    <div class="wrapper" @click="goNews" :class="{active:isHome}">
      <div class="icon">
        <van-icon name="comment-o" />
      </div>
      <div class="title">
        <span>最新发布</span>
      </div>
    </div>
    <div class="wrapper" :class="{active:name==='service'}" @click="goLifeService">
      <div class="icon">
        <van-icon name="shop-collect-o" />
      </div>
      <div class="title">
        <span>生活服务</span>
      </div>
    </div>
    <div class="wrapper" @click="goMyCommunity" :class="{active:isCommunity}">
      <!-- :class="{active:name==='mycommunity'||name==='login'||name==='Menu'||
      name==='UserInfo'||name==='detailUserInfo'||name==='editUserInfo'}"-->
      <div class="icon">
        <van-icon name="user-o" />
      </div>
      <div class="title">
        <span>我的小区</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Ala } from "../utils/mixin";
export default {
  mixins: [Ala],
  computed: {
    name() {
      return this.$route.name;
    },
    isHome(){
       if (this.$route.path.indexOf("home") !== -1 ) {
        return true;
      } else {
        return false;
      }
    },
    //判断路由下是否有mycommunity路径
    isCommunity() {
      if (
        this.$route.path.indexOf("mycommunity") !== -1 ||
        this.$route.name === "login"
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    //生活服务暂无
    goLifeService(){
      this.$Toast.fail('暂未开放');
    },
    goMyCommunity() {
      let currentStatus;
      if (this.isLogin) {
        currentStatus = this.status;
        //跳转
        if (
          this.$route.name !== "mycommunity" &&
          this.$route.name !== "Menu" &&
          this.$route.name !== "UserInfo"&&
          this.$route.name !== "myNotice"
        ) {
          if (this.isZH) {
            this.$router.push({
              path: "/mycommunity/myNotice"
            });
          } else {
            this.$router.push({
              path: "/mycommunity/Menu"
            });
          }
        }
      } else {
        //跳转
      
        this.$router.push({
          path: "/mycommunity/"
        });
      }
      
    },
    goNews() {
      if (this.$route.path !== "/home") {
        this.$router.push({
          path: "/home"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
.nav-wrapper {
  //  padding: 5px 0;
  width: 100%;
  height: px2rem(50);
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: $titleColor;
  @include center;
  z-index: 1000;
  .wrapper {
    // padding: 5px 0;
    height: px2rem(50);
    flex: 1;
    color: white;
    @include columnCenter;
    .title {
      font-size: px2rem(10);
    }
    .icon {
      font-size: px2rem(30);
    }

    &.active {
      background-color: #1279c8;
      //此处解决一个小bug 点击之后的背景 高度变小
      height: px2rem(50);
    }
  }
}
</style>

