<template>
  <div class="choice-wrapper">
    <title-menu :title="title"></title-menu>
    <nav-menu></nav-menu>
    <search-bar v-show="isChild"></search-bar>

    <div class="check-wrapper" v-show="isChild">
      <div class="check-nav">
          <div class="user-count">
              <span>共有{{userCount}}人</span>
          </div>
          <div class="all-choice" @click="SelectAll">
              <span>{{allSelect}}</span>
          </div>
      </div>
    
      <ul >
        <li class="content" v-for="(item,index) in dataList" :key="index" >
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
              <div class="button">
                  <input type="checkbox" name="choiceUser" @click="authority($event,item.id)" ref="cb">
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
      //统计人数
      userCount:0,
      //顶部导航栏标题
      title: "选择接收人",
      //全部数据列表
      dataList: [],
      //需要显示的数据
      showData:{},
      //当前选中
      current: "all",
      //传给子组件的数据
      dataToChild: {},
      //控制弹出层
      show: false,
      //复选框
      checked:false,
      //全选
      allSelect:"全选"
    };
  },

  components: {
    TitleMenu,
    NavMenu,
    SearchBar
  },
  methods: {
    //全选与全不选
    SelectAll(){
    if(this.allSelect==="全选")
    {
      this.$refs.cb.forEach((item,index)=>{
        item.checked=true
      })
      this.allSelect="全不选"
    }else{
        this.$refs.cb.forEach((item,index)=>{
        item.checked=false
      })
      this.allSelect="全选"
    }
    
    },
    //点击每个复选框触发
    authority(e,id){
      let a=0
      this.$refs.cb.forEach((item,index)=>{
        if(item.checked===true){
          a++
        }   
      })

      //点满所有复选框时改变全选处的状态
      if(a===this.$refs.cb.length){
        this.allSelect="全不选"
      }else{
        this.allSelect="全选"
      }
      console.log(e.target.checked)
      console.log(id)
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
  
    this.$axios.get(`${process.env.VUE_APP_BASE_URL}/Ala/choiceUser`).then(
      result => {
        this.dataList=result.data.data
     
        this.userCount=this.dataList.length;
      },
      error => {}
    );
   
    
    
  },
 
  computed: {
    isChild() {
      if (this.$route.name === "AddUser") {
        return false;
      } else {
        return true;
      }
    },
    currentRoute(){
      return this.$route.name
    },
   
    // title(){
    //   if(this.$route.name==="AccountManagement"){
    //     return "账号管理"
    //   }else if(this.$route.name==="AccountCheck"){
    //     return "认证审核"
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
.choice-wrapper {
  width: 100%;
  height:100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #ececec;
  

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
    z-index:1;
    position: absolute;

    
    .check-nav {
      position: fixed;
      width: 100%;
      height: px2rem(45);
      background-color: white;
      @include left;
      font-size: px2rem(15);

      .user-count{
        flex: 0 0 px2rem(80);
        @include center;
      }
      .all-choice{
        flex: 1;
        @include right;
        padding-right: px2rem(15);
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
     

    .cc:after {
        content: '';
        height: 0;
        line-height: 0;
        display: block;
        visibility: hidden;
        clear: both;
    }
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

            .button{
              flex: 0 0 px2rem(40);
              color: white;
              @include center;
              input[type="checkbox"]{
                width: px2rem(20);
                height: px2rem(20);
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