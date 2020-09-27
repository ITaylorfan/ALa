<template>
  <div class="wrapper">
    <title-menu :title="title"></title-menu>
    <nav-menu></nav-menu>
    <search-bar v-show="isChild"></search-bar>

    <div class="check-wrapper" v-show="isChild">
      <div class="check-nav">
        <div class="all" :class="{bigFont:current==='all'}" @click="change(1)">
          <span>全部</span>
        </div>
        <div class="kf" :class="{bigFont:current==='客服'}" @click="change(2)">
          <span>客服</span>
        </div>
        <div class="wx"  :class="{bigFont:current==='维修'}"  @click="change(3)">
          <span>维修</span>
        </div>
         <div class="ba" :class="{bigFont:current==='保安'}"  @click="change(4)">
          <span>保安</span>
        </div>
        <div class="wygl" :class="{bigFont:current==='物业管理员'}"  @click="change(5)">
          <span>物业管理员</span>
        </div>
      </div>

      <ul>
        <li class="content" v-for="(item,index) in dataList" :key="index" v-show="current==item.status||current=='all'" >
            <div class="avater">
               <img :src="item.avater">
            </div>
            <div class="position-info">
              <div class="name">
                <span>{{item.name}}</span>
              </div>
              <div class="community">
                <span>{{item.community}}</span>
              </div>
              <div class="address">
                <span>{{item.position}}</span>
              </div>
            </div>
            <div class="authorize">
              <div class="status">
                <span>{{item.status}}</span>
              </div>
              <div class="button" @click="authority(item.id)" v-if="currentRoute==='AccountManagement'">
                <span>授权</span>
              </div>
              <div class="account-check-button" v-else>
                <van-button type="primary" size="small">同意</van-button>
                <van-button type="danger" size="small">拒绝</van-button>
              </div>
            </div>
        </li>


        <li class="zanwu">
          <span>暂无更多数据</span>
        </li>
      </ul>

     
    </div>

    <router-view></router-view>
  </div>
</template>


<script>
import { Ala } from "../utils/mixin";
import TitleMenu from "../components/TitleMenu";
import NavMenu from "../components/NavMenu";
import SearchBar from "../components/searchBar";

export default {
  mixins: [Ala],
  data() {
    return {
      //顶部导航栏标题
      //title: "账号管理",
      //全部数据列表
      dataList: [],
      //kf数据列表
      kf_data:[],
      //wx数据列表
      wx_data:[],
      //需要显示的数据
      showData:{},
      //当前选中
      current: "all",
      //传给子组件的数据
      dataToChild: {},
      //控制弹出层
      show: false
    };
  },

  components: {
    TitleMenu,
    NavMenu,
    SearchBar
  },
  methods: {
    authority(id){
      this.$router.push({
        name:"Authority",
        params:{
          id
        }
      })
    },
    change(id){
        switch(id){
                case 1:
                  this.current="all"
                  break;
                case 2:
                  this.current="客服"
                  break;
                case 3:
                  this.current="维修"
                  break;
                case 4:
                  this.current="保安"
                  break;
                case 5:
                  this.current="物业管理员"
                  break;
          }
    },
    //信息详情
    goDetail(index) {
          this.$router.push({
              name:"HistoryDetail",
              params:{
                  data:this.dataList[index]
              }
          })
          //滚动条归位
          this.resetScrollBar()
    },
    checkDetail(id) {
        //控制弹出层
         this.show = true;
         this.dataList.forEach((item,index)=>{
           if(item.id===id){
             this.showData=this.dataList[index].check
           }
         })
        //this.showData=this.dataList[index]
    },

   
  },
  mounted() {
    //获取
  
    this.$axios.get(`${process.env.VUE_APP_BASE_URL}/Ala/accountManagement`).then(
      result => {
        this.dataList=result.data.data
       
        
      },
      error => {}
    );
    if(!this.checkHistoryIsFirst){
      this.dataList=this.checkHistory
    }
    
    
  },
 
  computed: {
    isChild() {
      if (this.$route.name === "Authority") {
        return false;
      } else {
        return true;
      }
    },
    currentRoute(){
      return this.$route.name
    },
    title(){
      if(this.$route.name==="AccountManagement"){
        return "账号管理"
      }else if(this.$route.name==="AccountCheck"){
        return "认证审核"
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
.wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #ececec;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  &::-webkit-scrollbar {
    width: 0;
  }
  .check-wrapper {
    top: px2rem(45);
    width: 100%;
    height: auto;
    left: 0;
    z-index: 1;
    position: absolute;

    
    .check-nav {
      position: fixed;
      width: 100%;
      height: px2rem(45);
      background-color: white;
      @include left;
      font-size: px2rem(15);

      .all {
        flex: 0 0 px2rem(60);

        @include center;
      }
      .kf {
        flex: 0 0 px2rem(60);
        @include center;
      }
      .wx {
        flex: 0 0 px2rem(60);
        @include center;
      }
      .ba {
        flex: 0 0 px2rem(60);
        @include center;
      }
       .wygl {
        flex: 0 0 px2rem(100);
        @include center;
      }
      .bigFont{
        font-size: px2rem(20);
      }
    }

    ul {
      width: 100%;
      height: auto;
      padding-top: px2rem(45);
      padding-bottom: px2rem(150);

      li {
        margin-top: px2rem(10);
        width: 100%;
        height: px2rem(200);
        background: rgb(185, 185, 185);

       
        &.content {
          background-color: white;
          display: flex;
          height: px2rem(80);
          @include left;

          .avater{
            flex: 0 0 px2rem(60);
            width: px2rem(60);
            height: px2rem(60);
            border-radius: 50%;
            background-color: white;
            margin-left: px2rem(10);
            img{
              width: px2rem(60);
              height: px2rem(60);
              border-radius: 50%;
            }
          }
          .position-info{
            flex: 1;
            margin-left: px2rem(15);
            font-size: px2rem(15);
            @include columnLeft;
            .name{
              font-weight: bold;
              flex: 0 0 px2rem(20);
            }
            .community{
              flex: 0 0 px2rem(20);
            }
            .address{
              flex: 0 0 px2rem(20);
            }
          }
          .authorize{
            flex: 0 0 px2rem(100);
            @include columnCenter;
            font-size: px2rem(20);
            .status{
              flex: 0 0 px2rem(40);
              font-size: px2rem(15);
              @include columnCenter;
            }
            .button{
              flex: 0 0 px2rem(40);
              color: white;
              @include top;
              span{
                border: px2rem(1) solid #797979;
                background-color: #5AACF6;
                border-radius: px2rem(5);
                 padding: px2rem(1) px2rem(5);
              }
              
            }

            .account-check-button{
              flex: 0 0 px2rem(45);
              button{
                margin-right: px2rem(5);
              }
            }
          }
         
        }
        &.zanwu {
          background-color: white;
          height: px2rem(40);
          width: 100%;
          font-size: px2rem(15);
          line-height: px2rem(40);
          text-align: center;
        }
      }
    }
  }
}
</style>