<template>
<!-- 这是功能列表组件 -->
    <div class="function-wrapper">
       
        <ul v-if="isChild">
            <li class="accout-mannager" @click="AccountManagement" v-show="this.isWY">
                <div class="icon"><van-icon name="manager-o" /></div>
                <div class="title">账号管理</div>    
            </li>
            <li class="shenhe" @click="accountCheck" v-show="this.isWY">
                <div class="icon"><van-icon name="completed" /></div>
                <div class="title">认证审核</div>   
            </li>
            <li class="wait" @click="WaitCheck">
                <div class="icon"><van-icon name="description" /></div>
                <div class="title">待审查</div>  
            </li>
            <li class="history" @click="CheckHistory">
                <div class="icon"><van-icon name="clock-o" /></div>
                <div class="title">审查历史</div>  
            </li>
            <li class="inputInfo" @click="InfoInput">
                 <div class="icon"><van-icon name="records" /></div>
                <div class="title">信息录入</div> 
            </li>
            <li class="mine" @click="MyUpload">
                 <div class="icon"><van-icon name="back-top" /></div>
                <div class="title">我的发布</div> 
            </li>
            <li class="notice" @click="CheckNotice" v-show="this.isWY">
                 <div class="icon"><van-icon name="bullhorn-o" /></div>
                <div class="title">巡检告知</div> 
            </li>
        </ul>

        <router-view></router-view>
    </div>
</template>

<script>
import {Ala} from "../utils/mixin"
export default {
    mixins:[Ala],
    methods: {
        InfoInput(){
            this.$router.push({
                name:"InfoInput"
            })
        },
        WaitCheck(){
             this.$router.push({
                name:"WaitCheck"
            })
        },
        CheckHistory(){
              this.$router.push({
                name:"CheckHistory"
            })
        },
        MyUpload(){
               this.$router.push({
                name:"MyUpload"
            })
        },
        AccountManagement(){
                this.$router.push({
                name:"AccountManagement"
            })
        },
        accountCheck(){
            this.$router.push({
                name:"AccountCheck"
            })
        },
        CheckNotice(){
              this.$router.push({
                name:"CheckNotice"
            })
        }

    },
    mounted() {
        // console.log(this.isWY)
        //console.log(this)
    },
    computed: {
        isChild(){
            if(this.$route.name==="InfoInput"||this.$route.name==="WaitCheck"||
            this.$route.name==="CheckHistory"||this.$route.name==="MyUpload"||
            this.$route.name==="AccountManagement"||this.$route.name==="Authority"||
            this.$route.name==="AccountCheck"||this.$route.name==="CheckNotice"||
            this.$route.name==="ChoiceUser"|| this.$route.name==="CheckChoiceUser"||
            this.$route.name==="AddUser"){
                return false
            }else{
                return true
            }
        },
        
    },
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles/global";
    .function-wrapper{
        position: absolute;
        left: 0;
        top: px2rem(48);
        width: 100%;
        height: 100%;
        overflow-y: auto;
        background-color: #ECECEC;
        ul{
            width: 100%;
            height: auto;
            display: flex;
            @include center;
            flex-wrap: wrap;
            padding-bottom: px2rem(150);
            li{
                margin-top: px2rem(10);
                margin-right: px2rem(5);
                margin-left: px2rem(5);
                width:45%;
                height: px2rem(250);
                border-radius: 10px;
                background-color: blanchedalmond;
                display:flex;
                @include columnCenter;
                color: white;
                .icon{
                    font-size: px2rem(60);
                }
                .title{
                     font-size: px2rem(20);
                }
            }
            .accout-mannager{
                background-color: #8176F8;
            }
            .shenhe{
                background-color: #00BB84;
            }
            .wait{
                background-color: #6A9DF9;
            }
            .history{
                background-color:#FFB532 ;
            }
            .inputInfo{
                background-color: #12B4FF;
            }
            .mine{
                background-color: #F01414;
            }
            .notice{
                background-color: #1279C8;
            }
        }
    }
</style>