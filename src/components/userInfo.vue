<template>
     <div class="login-success-wrapper">
            <div class="userInfo-wrapper">
                <div class="left">
                    <div class="avater">
                        <img :src="detailUserInfo.avater" alt="">
                    </div>
                </div>
                <div class="right">
                    <div class="name">
                    <span>{{detailUserInfo.name}}</span>
                    </div>
                     <div class="status">
                    身份:{{detailUserInfo.status}}
                    </div>

                    <div class="position">
                    <span>{{detailUserInfo.community}}</span>
                    </div>
                   
                </div>
            </div>
            <div class="goUserInfo" @click="DetailUserInfo">
            <van-cell title="个人信息" is-link icon="notes-o"  class="user-info"/>
            </div>
            <div class="exit" @click="exit">
            <van-button type="danger" size="large">退出登录</van-button>
            </div>

            <router-view></router-view>
        </div>
</template>
<script>
import {Ala} from "../utils/mixin"
export default {
    mixins:[Ala],
    inject:["reload"],
    data() {
    return {
        title:"我的小区",
        
        }
    },
    methods: {
        DetailUserInfo(){
            this.$router.push({
                name:"detailUserInfo"
            })
        },
        exit(){
            this.$Dialog.confirm({
            title: '退出登录',
            message: '确定退出登录吗',
            })
            .then(() => {
            
            let currentStatus="未登录"
            // 确定
           
            this.setIsLogin(false)
            this.setIsYW(false)
            this.setIsWY(false)
            this.setIsJW(false)
            this.setIsZH(false)
            this.setStatus("")
         
            })
            .catch(() => {
            // 取消后
            });
        }
    },
    computed: {
        status(){
            return this.$route.params.id
        }
    },
}
</script>

<style lang="scss" >
 @import "../assets/styles/global";
      .login-success-wrapper{
            display: flex;
            @include columnCenter;
            background-color: white;
            .userInfo-wrapper{
                font-size: px2rem(20);
                width: 100%;
                height: 100%;
               
                display: flex;
                @include center;
                .left{
                    flex: 0 0 px2rem(40);
                    padding-left: px2rem(15);
                   .avater{  
                        border-radius: 50%;
                        width: px2rem(50);
                        height: px2rem(50);
                        background-color: cadetblue;
                        img{
                            width: px2rem(50);
                            height: px2rem(50);
                            border-radius: 50%;
                        }   
                    }
                }
                .right{
                    padding-left: px2rem(15);
                    padding-top: px2rem(10);
                    padding-bottom: px2rem(10);
                    
                    flex: 1;
                    display: flex;
                    @include columnLeft;
                    .name{
                        flex: 1;
                        margin-bottom: px2rem(10);
                    }
                    .status{
                        flex:1;
                        font-size: px2rem(10);
                         margin-bottom: px2rem(10);
                    }
                    .position{
                        flex: 1;
                        font-size: px2rem(10);
                    }
                    
                }
               
            }
            .goUserInfo{
                height: 100%;
                width: 100%;
                border-top: 1px solid rgb(119, 119, 119);
                i{
                    font-size: px2rem(20);
                }
            }
            .exit{
                height: 100%;
                width: 100%;
            }
        }
</style>