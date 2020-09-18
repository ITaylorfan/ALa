<template>
    <div class="login-wrapper">
        <title-menu :title="title"></title-menu>

        <div class="login-content">
            <span class="title">{{ currentStatus}}登录</span>
            <ul>
                <li>
                
                    <div class="account">
                      
                        <van-cell-group class="blackLine">
                        <van-field v-model="account" label="账号:" placeholder="请输入账号" />
                        </van-cell-group>
                    </div>
                </li>
                <li>
                  
                    <div class="password">
                      
                         <van-cell-group class="blackLine">
                        <van-field v-model="password" type="password" label="密码:" placeholder="请输入密码" />
                         </van-cell-group>
                    </div>
                </li>
            </ul>
            <div class="button">
                <div class="login" @click="login">
                    <van-button type="info" size="large">登录</van-button>
                </div>
                <div class="register" @click="register">
                    <van-button type="primary" size="large">注册</van-button>
                </div>
            </div>
            <!-- **************** -->
            

        </div>

        <nav-menu></nav-menu>
    </div>
</template>

<script>
import TitleMenu from "../components/TitleMenu"
import NavMenu from "../components/NavMenu"
import {Ala} from "../utils/mixin"  
export default {
    mixins:[Ala],
    components:{
        TitleMenu,
        NavMenu
    },
    data() {
        return {
            title:"登录",
            password:"",
            account:"",
            currentStatus:""
        }
    },
    methods: {
        login(){
            let name=""
            if(this.account==""){
                this.$Toast.fail('请输入账号');
            }else if(this.password==""){
                this.$Toast.fail('请输入密码');
            }else{

                let data=[]
                let id=-1
                let pass=false
                this.$axios.get(`${process.env.VUE_APP_BASE_URL}/Ala/UserInfo`).then(response=>{
               
                data=response.data.data
                //遍历数组
                data.forEach((item,index)=>{
                   if(this.account==item.account&&this.password==item.password){
                       pass=true
                       name=item.name
                       id=item.id
                       this.$axios.get(`${process.env.VUE_APP_BASE_URL}/Ala/DetailUserInfo`).then(result=>{
                           this.setDetailUserInfo(result.data.data[id-1]) 
                       },error=>{

                       })
                   }
                   
                 })
                 //登陆成功
                if(pass){
                    this.setName(name)
                    if(this.account.startsWith("wy")){
                        this.setIsWY(true)
                        this.setStatus("物业")
                    }
                    else if(this.account.startsWith("jw")){
                        this.setIsJW(true)
                        this.setStatus("居委")
                    }
                    else if(this.account.startsWith("yw")){
                        this.setIsYW(true)
                        this.setStatus("业委")
                    }else if(this.account.startsWith("zh")){
                        this.setIsZH(true)
                        this.setStatus("住户")
                    }
                    this.setIsLogin(true)
                    this.$Toast.success('登录成功');
                    //然后重新跳转 回我的社区页面
                    this.$router.push({
                        path:"/mycommunity/"+this.status+"/UserInfo",
                    })
                   
                }else{
                    //没成功
                    this.$Toast.fail('账号或密码错误');
                    this.password=""
                }
                },error=>{

                })
            }
        },
        register(){
            this.$Toast.fail('暂未开放');
        }
    },
    mounted() {
        this.currentStatus=this.$route.params.id
    },
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles/global";
    .login-wrapper{
        width: 100%;
        height: 100%;
        padding: px2rem(58) 0 px2rem(50) 0;
        background-color: #ECECEC;
        box-sizing: border-box;
        // display: flex;
        // @include columnCenter;
        .login-content{
            display: flex;
            @include columnCenter;
            width: 100%;
            .title{
                margin-bottom: px2rem(10);
                font-size: px2rem(30);
            }   
            ul {
                width: 100%;
                li{
                 padding-left: px2rem(15);
                 width: 100%;
                 height: px2rem(48);
               
                 display: flex;
                 @include left;       
                 .account{
                     flex: 1;  
                     padding-right: px2rem(30);
                 }
                 .password{
                     flex: 1;
                      padding-right: px2rem(30);
                 }
                 .blackLine{
                     border: solid 1px black;
                 }
                }
            }
            .button{
                margin-top: px2rem(10);
                width: 100%;
                height: px2rem(48);
                display: flex;
                @include center;
                .login{
                    padding: 0 px2rem(10);
                    flex: 1;
                    @include center;
                }
                .register{
                     padding: 0 px2rem(10);
                     flex: 1;
                     @include center;
                }
            }
        }
     
    }
</style>