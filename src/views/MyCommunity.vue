<template>
    <div class="mc-wrapper">
        <title-menu :title="title"></title-menu>
         <nav-menu :isMC="isMC"></nav-menu>
    </div>
</template>

<script>
import TitleMenu from "../components/TitleMenu"
import NavMenu from "../components/NavMenu" 
export default {
    data() {
        return {
            title:"我的小区",
            isMC:true
        }
    },
    components:{
        TitleMenu,
        NavMenu
    }
}
</script>

<style lang="scss">
    @import "../assets/styles/global";
    .mc-wrapper{

    }
</style>