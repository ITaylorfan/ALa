<template>
    <div class="wrapper">
        
        <title-menu :title="title"></title-menu>
        <nav-menu></nav-menu>
<!-- 
        <van-button type="primary">主要按钮</van-button>
        <van-icon name="location" />
        <van-icon name="chat-o" badge="9" /> -->
    </div>
</template>

<script>
import TitleMenu from "../components/TitleMenu"
import NavMenu from "../components/NavMenu"
export default {
    components:{
        TitleMenu,
        NavMenu
    },
    data() {
        return {
            title:"首页"
        }
    },
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles/global";
    .wrapper{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
    }
</style>


