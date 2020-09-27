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
            <li class="content" v-for="(item,index) in dataList" :key="index"  v-show="current=='all'">
            
              <div class="title" @click="goDetail(index)">
                  <span>{{item.title}}</span>
              </div>
              <div class="ellipsis" @click="goDetail(index)">
                  <span>{{item.content}}</span>
              </div>
              <div class="image" @click="goDetail(index)">
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
           


              <div class="editAndCheck">
                  <div class="edit" @click="edit(index)">
                      <span>
                          编辑
                      </span>
                  </div>
                  <div class="check" @click="check(index)">
                      <span>
                          审查
                      </span>
                  </div>
              </div>
          </li>

            
          <li class="zanwu"> 
                <span>暂无更多数据</span>
          </li>
        </ul>
    </div>

    <router-view @childToFather="FatherGet" @successCheck="successCheck"></router-view>
  </div>
</template>


<script>
import { Ala } from "../utils/mixin";
import TitleMenu from "../components/TitleMenu";
import NavMenu from "../components/NavMenu";
import SearchBar from "../components/searchBar";

export default {
  mixins:[Ala],
  data() {
    return {
      //顶部导航栏标题
      title: "待审查",
      //数据列表
      dataList:[],
      //当前选中
      current:"all",
      //传给子组件的数据
      dataToChild:{}
    };
  },
 
  components: {
    TitleMenu,
    NavMenu,
    SearchBar
  },
  methods: {
      //完成检查删除待审查中的数据
      successCheck(v){
        //接收id 删除
        this.dataList.forEach((item,index)=>{
            if(item.id===v){
                 this.dataList.splice(index,1)
                 this.setWaitCheck(this.dataList) 
            }
        }) 
      },
      //子组件调用该方法 更新数据
      FatherGet(v){
        this.dataList.forEach((item,index)=>{
            if(item.id===v.id){
                this.dataList.splice(index,1,v)
                this.setWaitCheck(this.dataList) 
            }
        })
      },
      goDetail(index){
          
            this.$router.push({
              name:"WaitCheckDetail",
              params:{
                  data:this.dataList[index]
              }
            })
          //滚动条归位
          //this.resetScrollBar()
      },
      edit(index){
          
          this.dataToChild=this.dataList[index]
           //console.log(this.dataToChild)
          this.$router.push({
              name:"InfoEdit",
              params:this.dataToChild
          })
      },
      check(index){
          this.dataToChild=this.dataList[index]
        
          this.$router.push({
              name:"Check",
              params:this.dataToChild       
          })
      }
    
  },
  mounted() {
    
     if(this.isFirst){
          //获取
          this.$axios.get(`${process.env.VUE_APP_BASE_URL}/Ala/info`).then(result=>{
          //console.log(result)
          
          this.setWaitCheck(result.data.data)
          this.dataList=this.waitCheck

          //设置是否为第一次执行
          this.setIsFirst(false)
          
          },error=>{

          })
     }
     //从vuex中取值
     this.dataList=this.waitCheck
     
  },
  updated(){
      //console.log(this.$route)
    //   if(this.editInfo.length!==0){
    //       console.log("hhh")
    //     this.dataList.forEach((item,index)=>{
    //       if(item.id===this.editInfo[0].id){
             
    //            //this.dataList.splice(index,1,this.editInfo[0])
    //            console.log("aaa")
    //            console.log(this.dataList)
               
    //       }
    //   })
    //   } 
  },
  //路由守卫
//   beforeRouteEnter (to, from, next) {
//       console.log(to)
//       next()
//   },
  
  computed: {
      isChild(){
            
            if(this.$route.name==="InfoEdit"||this.$route.name==="Check"||this.$route.name==="WaitCheckDetail"){
                return false
            }else{
                return true
            }
        
      }
  },
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
  background-color: #ECECEC;
  overflow: hidden;
  overflow-y: auto;
  
   &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
     }
     &::-webkit-scrollbar{width:0;}
  .check-wrapper{
    top: px2rem(45);
    width: 100%;
    height: auto;
    left: 0;
    z-index: 1;
    position: absolute;

    .check-nav{
        position: fixed;
        width: 100%;
        height: px2rem(45);
        background-color:white;
        @include left;
        font-size:15px;
        
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
    }

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
               height: px2rem(340);
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
                   border-bottom: 1px solid #7F7F7F;
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
               .editAndCheck{
                   font-size: px2rem(15);
                   flex:  px2rem(30);
                   width: 100%;
                   color: black;
                   @include right;
                   .edit{
                       flex: 0 0 px2rem(60);
                       height: px2rem(25);
                       border-radius: 5px;
                       border: 1px solid #7F7F7F;
                       @include center;
                       margin-right: px2rem(10);
                   }
                   .check{
                       flex: 0 0 px2rem(60);
                       height: px2rem(25);
                       border-radius: 5px;
                       border: 1px solid #7F7F7F;
                       @include center;
                       margin-right: px2rem(10);
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

}
</style>