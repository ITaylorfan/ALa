<template>
    <div class="mc-wrapper">
        <title-menu :title="title"></title-menu>

        <div class="content-wrapper" v-if="!isLogin">

            <div class="login">
                <div class="avater">
                    <van-icon name="question-o" />
                </div>
                <div class="user-info">
                    <span>当前未登录</span>
                </div>
            </div>
            <ul>
                <li @click="goLogin(1)">
                     <div class="icon">
                        <van-icon name="manager-o" />
                    </div>
                    <div class="title">
                    <span>我是居委</span>
                    </div>
                    <div class="icon">
                    <van-icon name="arrow" />
                    </div>
                </li>
                <li @click="goLogin(2)">
                    <div class="icon">
                        <van-icon name="manager-o" />
                    </div>
                    <div class="title">
                    <span>我是业委</span>
                    </div>
                    <div class="icon">
                    <van-icon name="arrow" />
                    </div>
                </li>
                <li @click="goLogin(3)">
                    <div class="icon">
                        <van-icon name="friends-o" />
                    </div>
                     <div class="title">
                    <span>我是物业</span>
                    </div>
                    <div class="icon">
                    <van-icon name="arrow" />
                    </div>
                </li>
                <li @click="goLogin(4)">
                    <div class="icon">
                        <van-icon name="hotel-o" />
                    </div>
                     <div class="title">
                    <span>我是住户</span>
                    </div>
                    <div class="icon">
                    <van-icon name="arrow" />
                    </div>
                </li>
            </ul>
        </div>
        <div v-else>
            
             <!-- 功能切换 -->
            <function-and-user-info></function-and-user-info>

            <router-view></router-view>
        </div>

       
        <!-- 底部导航 -->
        <nav-menu></nav-menu>
       

    </div>
   
       
</template>

<script>
import TitleMenu from "../components/TitleMenu"
import NavMenu from "../components/NavMenu" 
import FunctionAndUserInfo from "../components/functionAndUserInfo"

import {Ala} from "../utils/mixin"

export default {
    mixins:[Ala],
    data() {
        return {
            title:"我的小区",
           
        }
    },
    computed: {
       
    },
    components:{
        TitleMenu,
        NavMenu,
        FunctionAndUserInfo
    },
    methods: {
        //跳转登录
        goLogin(s){
            let status=""
            switch(s){
                case 1 :
                    status="居委"
                    break
                case 2 :
                    status="业委"
                    break
                case 3:
                    status="物业"
                    break
                case 4:
                    status="住户"
                    break
            }
            this.$router.push({
                path:"/login/"+status,
            })
          
        }
    },
    mounted() {
       
    },
}
</script>

<style lang="scss">
    @import "../assets/styles/global";
    .mc-wrapper{
        padding: px2rem(50) 0 px2rem(50) 0;
        width: 100%;
        height: 100%;
        background-color: #ECECEC;
        box-sizing: border-box;
        .content-wrapper{
            display: flex;
            @include columnCenter;
            .login{
                width: 100%;
                height: px2rem(60);
                padding-left: px2rem(10);
                border-bottom: 1px solid white;
                display: flex;
                @include left;
                .avater{
                    flex: 0 0 px2rem(40);        
                    width: px2rem(40);
                    height: px2rem(40);
                    border-radius: 50%;
                    color: black;
                    font-size: px2rem(30);
                    @include center;
                }
                .user-info{
                    flex: 1;
                    font-size: px2rem(20);
                }
            }
            ul{
                width: 100%;
                li{
                    width: 100%;
                    height: px2rem(40);
                    padding-left: px2rem(10);
                    border-bottom: 1px solid black;
                    font-size: px2rem(20);
                    display: flex;
                    @include left;
                    .title{
                      flex: 1;
                      font-size: px2rem(15);
                    }
                    .icon{
                       flex: 0 0 px2rem(40);
                        @include left;     
                    }
                }
            }
        }
     
    }
</style>