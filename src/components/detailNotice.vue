<template>
  <!-- 通知详情 -->
  <div class="detail-wrapper">
    <div class="title">
      <span>{{data.title}}</span>
    </div>
    <div class="titleBar">
      <div class="type">
        <span>{{data.type}}</span>
      </div>
      <div class="noticeStatus">
        <span>来源:{{data.status}}</span>
      </div>
      <div class="date">
        <span>{{data.date}}</span>
      </div>
      <div class="time">
        <span>{{data.time}}</span>
      </div>
    </div>

    <div class="content">
      <div class="content-title">
        <span>内容</span>
      </div>
      <div class="content-text">
        <span>
         {{data.content}} 
        </span>
      </div>
    </div>
    <div class="image">
      <div class="image-title">
        <span>图片</span>
      </div>
      <div class="image-wrapper">
        <ul>
          <li v-for="(item,index) in data.imageUrl" :key="index">
            <img :src="item.image" alt="图片加载失败">
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: require("@/assets/images/noticeTitle.png"),
      data:{}    //这里不要设置为null
    };
  },
  methods: {

  },
  beforeMount() {
    console.log(this)
     this.$axios.get(`${process.env.VUE_APP_BASE_URL}/Ala/info`).then(result=>{
         
          let dataList=[]
          dataList=result.data.data
          this.data=dataList[this.$route.query.id-1]
          console.log(this.data)
      },error=>{

      })
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
.detail-wrapper {
  overflow: hidden;
  overflow-y: auto;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: white;
  padding-bottom: px2rem(120);
  padding-top: px2rem(10);
  @include columnTopLeft;
  .title {
    flex: 0 0 px2rem(40);
    font-size: px2rem(30);
    width: 100%;
    @include columnLeft;
    padding-left: px2rem(10);
    font-weight: bold;

    span {
      width: 95%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .titleBar {
    font-size: px2rem(15);
    padding-left: px2rem(10);
    flex: 0 0 px2rem(30);
    width: 100%;
    color: #7f7f7f;
    border-bottom: #ececec solid px2rem(5);
    @include left;
    .type {
      flex: 1;
    }
    .noticeStatus {
      flex: 0 0 px2rem(80);
    }
    .date {
      flex: 1;
      @include right;
    }
    .time {
      flex: 1;
      @include center;
    }
  }
  .content {
    width: 100%;
    @include columnTopLeft;
    // border-bottom: #ececec solid px2rem(5);
    .content-title {
      width: 100%;
      flex: 0 0 px2rem(60);
      @include columnLeft;
      padding-left: px2rem(10);
      font-size: px2rem(30);
      font-weight: bold;
    }
    .content-text {
      flex: 1;
      width: 95%;
      border-bottom: #ececec solid px2rem(5);
      font-size: px2rem(20);
      padding-left: px2rem(10);
      padding-bottom: px2rem(10);
      span {
        width: 90%;
      }
    }
  }
  .image {
    width: 100%;
    flex: 1;
    @include columnLeft;
    .image-title {
      width: 100%;
      flex: 0 0 px2rem(60);
      @include columnLeft;
      font-size: px2rem(30);
      font-weight: bold;
      padding-left: px2rem(10);
    }
    .image-wrapper {
     
      width: 100%;
      height: 100%;
      padding-left: px2rem(10);
      @include columnTopLeft;
      ul {
        
       padding-bottom: px2rem(160);
        width: 100%;
        li{
          img {
          width: 95%;
          height: 100%;
          font-size: px2rem(20);
          color: red;
        }
        }
        
      }
    }
  }
}
</style>