<template>
  <div class="wrapper" >
    <title-menu :title="title"></title-menu>
    <nav-menu></nav-menu>

    <div class="input-wrapper" v-show="isChild">
      <div class="inputModel">
        <van-field
          readonly
          clickable
          name="picker"
          :value="model"
          label="模式"
          placeholder="请选择巡检模式"
          @click="showPicker2 = true"
        />
        <van-popup v-model="showPicker2" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns2"
            @confirm="onConfirm2"
            @cancel="showPicker2 = false"
          />
        </van-popup>
      </div>
      <div class="inputType">
        <van-field
          readonly
          clickable
          name="picker"
          :value="type"
          label="类型"
          placeholder="请选择巡检类型"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
      </div>

      <div class="inputTitle">
        <van-field
          v-model="textTitle"
          label="标题"
          maxlength="20"
          placeholder="请输入巡检标题(20个字符)"
        />
      </div>
      <div class="inputPosition">
        <van-field
          v-model="textPosition"
          label="位置"
          maxlength="20"
          placeholder="请输入巡检位置(20个字符)"
        />
      </div>

      <div class="inputContent">
        <van-field
          v-model="message"
          rows="2"
          autosize
          label="问题"
          type="textarea"
          maxlength="300"
          placeholder="请输入问题"
          show-word-limit
        />
      </div>

      <div class="uploadImage">
        <van-field name="uploader" label="图片上传">
          <template #input>
            <van-uploader v-model="uploader" />
          </template>
        </van-field>
      </div>

      <div class="chooseUser" @click="goFindUser">
        <van-cell title="请选择接收人" is-link />
      </div>
      <div class="submit" @click="submit">
        <van-button type="primary" size="large">提交</van-button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>
import { Ala } from "../utils/mixin";
import TitleMenu from "../components/TitleMenu";
import NavMenu from "../components/NavMenu";
export default {
  mixins: [Ala],
  data() {
    return {
      //顶部导航栏标题
      title: "巡检告知",
      //巡检模式
      model: "",
      //文章类型
      type: "",
      //类型弹出框可选项
      columns: ["公告", "紧急"],
      //模式弹出框可选项
      columns2: ["上门检查", "指定点检查"],

      showPicker: false,

      showPicker2: false,

      //文章标题
      textTitle: "",
      //巡检位置
      textPosition:"",
      //文章内容
      message: "",
      //上传图片
      uploader: [],

      //存放父组件传过来的东西
      parentData: {},

      //统计输入信息数
      index: 1,
      //父组件传过来信息的id
      parentId: 0
    };
  },
  //  watch: {
  //       uploader(v){
  //           console.log(v)
  //       }
  //   },
  components: {
    TitleMenu,
    NavMenu
  },
  methods: {
    //接收人界面
    goFindUser(){
        this.$router.push({
          name:"CheckChoiceUser"
        })
    },
    //下拉列表的确定触发的函数
    onConfirm(value) {
      this.type = value;
      this.showPicker = false;
    },
    onConfirm2(value) {
      this.model = value;
      this.showPicker2 = false;
    },
    //提交输入的信息
    submit() {
      if(this.model===""){
        this.$Toast.fail("请选择巡检模式");
      }else if (this.type === "") {
        this.$Toast.fail("请选择巡检类型");
      } else if (this.textTitle === "") {
        this.$Toast.fail("请输入巡检标题");
      } else if(this.textPosition===""){
        this.$Toast.fail("请输入巡检位置");
      } else if (this.message === "") {
        this.$Toast.fail("请输入巡检问题");
      } else{

      }
    }
  },
  computed:{
    isChild(){
       if(this.$route.name==="CheckNotice"){
        return true
      }
    }
   
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
.wrapper {
  width: 100%;
  height: auto;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(116, 116, 116, 0.034);

  .input-wrapper {
    width: 100%;
    height: auto;
    margin-top: px2rem(10);
    padding-bottom: px2rem(150);
    .submit {
      margin-top: px2rem(10);
      padding: 0 px2rem(25);
    }
  }
}
</style>