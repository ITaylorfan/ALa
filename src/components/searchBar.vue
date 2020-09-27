<template>
  <div class="search-wrapper">
    <van-search
      v-model="value"
      shape="round"
      background="#6A9DF9"
      placeholder="请输入搜索关键词"
      :class="{padding:isChoiceUser,padding2:isAddUser,padding3:isAddUser}">
    
    </van-search>
    <div class="right" @click="addUser" v-if="isChoiceUser">
      <van-icon name="plus" />
    </div>
    <div class="right confirm" @click="comfirm" v-if="!isChoiceUser&&isAddUser">
      <span >确定</span>
    </div>
    <div class="left select" @click="select" v-if="!isChoiceUser&&isAddUser">
      <span >筛选</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    select(){
      this.$emit("select")
    },
    comfirm(){

    },
    addUser(){
      this.$router.push({
        name:"AddUser"
      })
    }
  },
  computed: {
    isChoiceUser(){
      if(this.$route.name==="ChoiceUser"||this.$route.name==="CheckChoiceUser")
      {
        return true;
      }
    },

    isAddUser(){
       if(this.$route.name==="AddUser")
      {
        return true;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
.search-wrapper {
  position: fixed;
  width: 100%;
  height: px2rem(48);
  left: 0;
  top: px2rem(47);
  z-index: 2;
  .padding{
    padding-right: px2rem(50);
  }
  .padding2{
    padding-left: px2rem(50);
  }
  .padding3{
    padding-right: px2rem(50);
  }
  .right{
    color: white;
    font-size: px2rem(30);
    width: px2rem(50);
    height: px2rem(48);
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
    line-height: px2rem(56);
  }
  .confirm{
    font-size: px2rem(18);
    line-height: px2rem(48);
  }
   .left{
    color: white;
    font-size: px2rem(30);
    width: px2rem(50);
    height: px2rem(48);
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    line-height: px2rem(56);
  }
  .select{
    font-size: px2rem(18);
    line-height: px2rem(48);
  }
}
</style>