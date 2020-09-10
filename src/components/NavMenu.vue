<template>
    <div class="nav-wrapper">
        <div class="wrapper" @click="goNews" :class="{active: name==='home'}">
            <div class="icon">
            <van-icon name="comment-o" />
             </div>
            <div class="title">
                <span>最新发布</span>
            </div>
        </div>
        <div class="wrapper" :class="{active:name==='service'}">
            <div class="icon">
            <van-icon name="shop-collect-o" />
             </div>
             <div class="title">
                <span>生活服务</span>
            </div>
        </div>
        <div class="wrapper" @click="goMyCommunity" :class="{active:name==='mycommunity'}">
            <div class="icon">
            <van-icon name="user-o" />
            </div>
             <div class="title">
                <span>我的小区</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   
    computed: {
        name(){
            return this.$route.name
        }
    },
    data() {
        return {
            // isNews:true,
            // isService:false,
            //  isMC:false
        }
    },
    methods: {
        goMyCommunity(){
            if(this.$route.path!=="/MyCommunity"){
                 this.isMC=true
                console.log(this.$route)
                this.$router.push({
                path:"/MyCommunity"         
            })
            }     
        },
        goNews(){
            if(this.$route.path!=="/home"){
                this.$router.push({
                path:"/home"         
            })
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles/global";
    .nav-wrapper{
        // padding: 5px 0;
        width: 100%;
        height: px2rem(50px);
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: $titleColor;
        display: flex;
        justify-content: center;
        align-items: center;
        .wrapper{
            padding: 5px 0;
            flex: 1;
            color: white;
            @include columnCenter;
            .title{
                font-size: px2rem(10);
            }
            .icon{
                font-size: px2rem(30);
            }

            &.active{
                background-color: blue;
            }
        }
    }
</style>

