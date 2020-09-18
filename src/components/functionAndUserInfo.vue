<template>
<!-- 这是下面切换智慧物业和个人中心的组件 -->
    <div class="fau-wrapper">
        <div class="wrapper" :class="{active:name==='myNotice'||name==='detailNotice'}" @click="goMyNotice" v-if="this.isZH">
            <div class="icon">
           <van-icon name="bullhorn-o" />
             </div>
             <div class="title">
                <span>我的通知</span>
            </div>
        </div>
        <div class="wrapper" :class="{active:name==='Menu'||name==='InfoInput'}" @click="goFunMenu" v-else>
            <div class="icon">
           <van-icon name="apps-o" />
             </div>
             <div class="title">
                <span>智慧物业</span>
            </div>
        </div>
         <div class="wrapper" :class="{active:name==='UserInfo'||name==='detailUserInfo'||name==='editUserInfo'}" @click="goUserInfo">
            <div class="icon">
           <van-icon name="user-circle-o" />
             </div>
             <div class="title">
                <span>个人中心</span>
            </div>
        </div>
    </div>
</template>

<script>
import {Ala} from "../utils/mixin"
export default {
    mixins:[Ala],
    methods: {
        //住户登录 跳转通知页面
        goMyNotice(){
             if(this.$route.name!=="myNotice"){
                this.$router.push({
                name:"myNotice"
            })
            } 
        },
        //跳转方法
        goFunMenu(){
            if(this.$route.name!=="Menu"){
                this.$router.push({
                name:"Menu"
            })
            }            
        },
        goUserInfo(){
            if(this.$route.name!=="UserInfo"){
                this.$router.push({
                name:"UserInfo"
                })
            }       
        }
    },
    computed: {
        name(){
            return this.$route.name
        },
      
    },
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles/global";
    .fau-wrapper{
        z-index: 1000;
        width: 100%;
        height: px2rem(50px);
        position: absolute;
        bottom: px2rem(50);
        background-color: white;
        left: 0;
        display: flex;
        .wrapper:first-child{
            border-right: 1px solid rgb(119, 119, 119);
        }
        .wrapper{
            flex: 1;
            padding: 5px 0;
             color: black;
            @include center;
            .title{
                font-size: px2rem(15);         
            }
            .icon{
                font-size: px2rem(30);           
            }

            &.active{
                color: #6A9DF9;
            }
        }
    }
</style>