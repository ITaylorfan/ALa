<template>
  <div class="wrapper">
    <title-menu :title="title"></title-menu>
    <nav-menu></nav-menu>
    <search-bar v-show="isChild"></search-bar>

    <div class="check-wrapper" v-show="isChild">
      <div class="check-nav">
        <div class="all">
          <span>全部</span>
        </div>
        <div class="bulletin">
          <span>公告</span>
        </div>
        <div class="notice">
          <span>通知</span>
        </div>
      </div>

      <ul>
        <li class="content" v-for="(item,index) in dataList" :key="index" v-show="current=='all'" >
          <div class="title" @click="goDetail(index)">
            <span>{{item.title}}</span>
          </div>
          <div class="ellipsis" @click="goDetail(index)">
            <span>{{item.content}}</span>
          </div>
          <div class="image" @click="goDetail(index)">
            <img :src="item.imageUrl[0].image" alt="图片获取失败" />
          </div>
          <div class="bottomBar">
            <div class="type">
              <span>{{item.type}}</span>
            </div>
            <div class="pass">
              <span>{{item.check.type}}</span>
            </div>
            <div class="noticeStatus">
              <span>{{item.status}}</span>
            </div>

            <div class="date">
              <span>{{item.date}}</span>
            </div>
            <div class="time">
              <span>{{item.time}}</span>
            </div>
          </div>

          <div class="editAndCheck">
            <div class="edit" :class="{gray:item.check.type==='合格'}" @click="edit(index,item.check.type==='合格')">
                <span>
                    编辑
                </span>
            </div>
            <div class="edit" @click="checkDetail(item.id)">
              <span>审查详情</span>
            </div>
            
          </div>
        </li>

        <li class="zanwu">
          <span>暂无更多数据</span>
        </li>
      </ul>

      <van-popup
        v-model="show"
        :style="{ height: '30%',width:'70%' }"
      >
      <div class="checkDetail">
          <div class="checkDetail-title">
              <span>审查详情</span>
          </div>
          <div class="checkDetail-content">
            <div class="content-user">
              <span>审查人：</span> <span>{{showData.execute}}</span>
            </div>
             <div class="content-time">
              <span>审查时间：</span> <span>{{showData.date}}</span><span> {{showData.time}}</span>
            </div>
            <div class="content-info">
              <span>审查说明：</span> <span>{{showData.message}}</span>
            </div>
           
          </div>
      </div>
      </van-popup>
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
      title: "我的发布",
      //数据列表
      dataList: [],
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
      //不合格时可以编辑数据
        edit(index,bool){
        if(!bool){
            this.dataToChild=this.dataList[index]
            //console.log(this.dataToChild)
            this.$router.push({
            name:"InfoEdit",
            params:this.dataToChild
          })
        }  
      },
    //信息详情
    goDetail(index) {
          this.$router.push({
              name:"MyUploadDetail",
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
  
    this.$axios.get(`${process.env.VUE_APP_BASE_URL}/Ala/upload`).then(
      result => {
       
        if(this.myUploadIsFirst){
         
        let temp=[]
        temp=this.myUpload
        temp.push.apply(temp,result.data.data)
        this.setMyUpload(temp)
        this.dataList = this.myUpload
       
        //设置为false
        this.setMyUploadIsFirst(false)
        }
       
      },
      error => {}
    );
    if(!this.myUploadIsFirst){
      this.dataList=this.myUpload
    }
    
    
  },
 
  computed: {
    isChild() {
      if (this.$route.name === "MyUploadDetail") {
        return false;
      } else {
        return true;
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


    .checkDetail{
        
        box-sizing: border-box;
        @include columnTopLeft;
        height: 100%;
        width: 100%;
        .checkDetail-title{
            font-size: px2rem(30);
            font-weight: bold;
            flex: 0 0 px2rem(40);
            width: 100%;
            @include center;
            border-bottom:1px solid #BFBFBF;
        }
        .checkDetail-content{
            width: 100%;
            text-align: left;
            font-size: px2rem(15);
            @include columnTopLeft;
            .content-user{
              box-sizing: border-box;
              flex: 0 0 px2rem(30);
              width: 100%;
              @include left;
             
              span{
                 &:first-child{
                   flex: 0 0 px2rem(88);
                   @include right;
                 }
                 &:last-child{
                   flex: 1;
                   @include left;
                   padding-left: px2rem(5);
                 }
              }
            }
            .content-time{
              flex: 0 0 px2rem(30);
              width: 100%;
               @include left;
               span{
                 flex:px2rem(40);
                 @include right;
                 &:last-child{
                  @include left;
                  }
                 &:nth-child(2){
                   @include center;
                 }
               }
               
            }
            .content-info{
              flex: 1;
              width: 100%;
              margin-top: px2rem(10);
               @include left;
               span{
                 &:first-child{
                   flex:0 0 px2rem(88);
                   @include right;
                  
                 }
                  &:last-child{
                    flex:1;
                    padding-left: px2rem(5);
                  }
               }
            }
        }
    }
    
    .check-nav {
      position: fixed;
      width: 100%;
      height: px2rem(45);
      background-color: white;
      @include left;
      font-size: 15px;

      .all {
        flex: 0 0 px2rem(60);

        @include center;
      }
      .bulletin {
        flex: 0 0 px2rem(60);
        @include center;
      }
      .notice {
        flex: 0 0 px2rem(60);
        @include center;
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

        &.top {
          .image-box {
            width: 100%;
            height: 80%;
            img {
              width: 100%;
              height: 100%;
            }
          }

          .nav-bar {
            width: 100%;
            height: 20%;

            background-color: white;
            display: flex;
            @include left;
            font-size: px2rem(15);
            .all {
              flex: 0 0 px2rem(60);
              @include center;
            }
            .bulletin {
              flex: 0 0 px2rem(60);
              @include center;
            }
            .notice {
              flex: 0 0 px2rem(60);
              @include center;
            }
            .bigFont {
              font-size: px2rem(20);
            }
          }
        }
        &.content {
          background-color: white;
          display: flex;
          height: px2rem(340);
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
          .ellipsis {
            width: 100%;
            font-size: px2rem(20);
            flex: 0 0 px2rem(40);
            @include columnLeft;
            padding-left: px2rem(10);

            span {
              width: 95%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .image {
            flex: 1;
            width: 100%;
            img {
              width: 100%;
              height: px2rem(180);
              font-size: px2rem(20);
              color: red;
            }
          }
          .bottomBar {
            font-size: px2rem(15);
            padding-left: px2rem(10);
            flex: px2rem(30);
            width: 100%;
            color: #7f7f7f;
            border-bottom: 1px solid #7f7f7f;
            @include left;
            .type {
              flex: 1;
            }
            .pass {
              flex: 1;
              color: red;
            }
            .noticeStatus {
              flex: 0 0 px2rem(40);
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
          .editAndCheck {
            font-size: px2rem(15);
            flex: px2rem(30);
            width: 100%;
            color: black;
            @include right;
            .edit {
              flex: 0 0 px2rem(80);
              height: px2rem(25);
              border-radius: 5px;
              border: 1px solid #7f7f7f;
              @include center;
              margin-right: px2rem(10);

              &.gray{
                  color: #b8b8b8;
              }
            }
            .check {
              flex: 0 0 px2rem(60);
              height: px2rem(25);
              border-radius: 5px;
              border: 1px solid #7f7f7f;
              @include center;
              margin-right: px2rem(10);
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