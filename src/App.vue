<template>
  <div id="app">
   <router-view> </router-view>
  </div>
</template>


<script>
export default {
  provide (){
     return {
       reload:this.reload
     }
  },
   data(){
    return {
       isRouterAlive:true
    }
  },
   methods:{
    reload (){
       this.isRouterAlive = false
       this.$nextTick(function(){
          this.isRouterAlive = true
       })
    }
  },
}
// 设置rem适配 fontSize基准值
document.addEventListener("DOMContentLoaded",()=>{
  const html=document.querySelector("html");
  let fontSize=window.innerWidth/10;

  //设置fontSize上限为50px
  fontSize=fontSize > 50? 50:fontSize; 
  html.style.fontSize=fontSize+"px";

})
</script>

<style lang="scss">
#app{
  width:100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  // background-color: aquamarine;
}
</style>
