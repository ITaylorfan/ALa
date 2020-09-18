<template>
  <div class="notice-wrapper">
      <div v-if="isHide">
      <search-bar></search-bar>
      <ul>
          <li class="top">
              <div class="image-box">
                  <img :src="imgUrl" alt="图片获取失败">
              </div>
              <div class="nav-bar">
                 <div class="all" :class="{bigFont:current==='all'}" @click="changeNotice(1)">
                     <span>全部</span>
                 </div>
                  <div class="bulletin" :class="{bigFont:current==='bulletin'}" @click="changeNotice(2)">
                     <span>公告</span>
                 </div>
                  <div class="notice" :class="{bigFont:current==='myNotice'}" @click="changeNotice(3)">
                     <span>通知</span>
                 </div>
              </div>
          </li>
          <li class="content" v-for="(item,index) in dataList" :key="index" @click="goDetail(item.id)" v-show="current=='all'">
              <div class="title">
                  <span>{{item.title}}</span>
              </div>
              <div class="ellipsis">
                  <span>{{item.content}}</span>
              </div>
              <div class="image">
                  <img :src="item.imageUrl[0].image" alt="图片获取失败">
              </div>
              <div class="bottomBar">
                  <div class="type">
                      <span>{{item.type}}</span>
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
import SearchBar from "../components/searchBar"
export default {
  data() {
    return {
      dataList:[],
      imgUrl:require("@/assets/images/noticeTitle.png"),
      current:"all"
    };
  },
  computed: {
      isSelect(){

      },
      isHide(){
          if(this.$route.name==="detailNotice"){
              return false
          }else{
              return true
          }
      }
  },
  methods: {
      //跳转文章详情页
      goDetail(id){
          this.$router.push({
              name:"detailNotice",
              query:{
                  id
              }
          })
      },
      changeNotice(id){
          switch(id){
                case 1:
                  this.current="all"
                  break;
                case 2:
                  this.current="bulletin"
                  break;
                case 3:
                  this.current="myNotice"
                  break;
          }
      }
      
  },
  components:{
      SearchBar
  },
  //获取数据
  mounted() {
      this.$axios.get(`${process.env.VUE_APP_BASE_URL}/Ala/info`).then(result=>{
          //console.log(result)
          this.dataList=result.data.data
      },error=>{

      })
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
.notice-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: px2rem(48);
  background-color: #ececec;
  overflow-y: auto;
  
  ul{
    width: 100%;
    height: auto;
    padding-top: px2rem(45);
    padding-bottom: px2rem(150);
    
      li{
          margin-top: px2rem(10);
          width: 100%;
          height: px2rem(200);
          background: rgb(185, 185, 185);

            &.top{
                .image-box{
                     width: 100%;
                     height: 80%;
                    img{
                    width: 100%;
                    height: 100%;
                    }
                }

                .nav-bar{
                    width: 100%;
                    height: 20%;
                    
                    background-color: white;
                    display: flex;
                    @include left;
                    font-size: px2rem(15);
                    .all{
                        flex: 0 0 px2rem(60);
                        @include center;
                    }
                    .bulletin{
                        flex: 0 0 px2rem(60);
                        @include center;
                    }
                    .notice{
                        flex: 0 0 px2rem(60);
                        @include center;
                    }
                    .bigFont{
                        font-size: px2rem(20);
                    }
                }
               
            }
            &.content{
               background-color: white;
               display: flex;
               height: px2rem(300);
               @include columnTopLeft;
               .title{
                  flex: 0 0 px2rem(40);
                  font-size: px2rem(30);
                  width: 100%;
                  @include columnLeft;
                   padding-left: px2rem(10);
                   font-weight: bold;

                   span{
                    width: 95%;
                    white-space: nowrap;
		            overflow: hidden;
		            text-overflow: ellipsis;
                   }
               }
               .ellipsis{
                    width:100%;
                   font-size: px2rem(20);
                    flex: 0 0 px2rem(40);
                    @include columnLeft;
                    padding-left: px2rem(10);

                    span{
                    width: 95%;
                    white-space: nowrap;
		            overflow: hidden;
		            text-overflow: ellipsis;
                   }
               }
               .image{
                   flex: 1;
                   width: 100%;
                   img{
                       width: 100%;
                       height: px2rem(180);
                       font-size: px2rem(20);
                       color: red;
                   }
               }
               .bottomBar{
                   font-size: px2rem(15);
                   padding-left: px2rem(10);
                   flex: px2rem(30);
                   width: 100%;
                   color: #7F7F7F;
                   @include left;
                   .type{
                       flex: 1;
                   }
                   .noticeStatus{
                       flex: 0 0 px2rem(40);
                   }
                   .date{
                       flex: 1;
                       @include right;
                   }
                   .time{
                       flex: 1;
                        @include center;
                   }
               }
            }

            &.zanwu{
                background-color: white;
                height: px2rem(40);
                width:100%;
                font-size: px2rem(15);
                line-height: px2rem(40);
                text-align: center;
            }
      }
  }
  
}
</style>