<template>
  <div class="wrapper">
    <title-menu :title="title"></title-menu>
    <nav-menu></nav-menu>

    <div class="input-wrapper">
      <div class="inputType">
        <van-field
          readonly
          clickable
          name="picker"
          :value="type"
          label="类型"
          placeholder="请选择文章类型"
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
        <van-field v-model="textTitle" label="文章标题" maxlength="20" placeholder="请输入文章标题(20个字符)" />
      </div>

      <div class="inputContent">
        <van-field
          v-model="message"
          rows="2"
          autosize
          label="内容"
          type="textarea"
          maxlength="300"
          placeholder="请输入内容"
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

      <div class="chooseUser">
          <van-cell title="请选择接收人" is-link />
      </div>
      <div class="submit" @click="submit">
          <van-button type="primary" size="large">提交</van-button>
      </div>
        
    </div>
  </div>
</template>


<script>
import { Ala } from "../utils/mixin";
import TitleMenu from "../components/TitleMenu";
import NavMenu from "../components/NavMenu";
export default {
  mixins:[Ala],
  data() {
    return {
      //顶部导航栏标题
      title: "信息录入",
      //文章类型
      type: "",
      //文章类型弹出框可选项
      columns: ["公告", "紧急"],
      showPicker: false,
      //文章标题
      textTitle: "",
      //文章内容
      message: "",
      //上传图片
      uploader:[]
    };
  },
   watch: {
        // uploader(v){
        //     console.log(v)
        // }
    },
  components: {
    TitleMenu,
    NavMenu
  },
  methods: {
    //下拉列表的确定触发的函数
    onConfirm(value) {
      this.type = value;
      this.showPicker = false;
    },
    //提交输入的信息
    submit(){
        if(this.type===""){
            this.$Toast.fail('请选择文章类型');
        }else if(this.textTitle===""){
            this.$Toast.fail('请输入文章标题');
        }else if(this.message===""){
            this.$Toast.fail('请输入文章正文');
        }else{
            //封装数据
            let data={
            type:this.type,
            title:this.textTitle,
            content:this.message,
            image:this.uploader
            }
            //临时存放数据 合并后保存
            let dataList=[]
            dataList=this.infoInput
            dataList.push(data)
            this.setInfoInput(dataList)
            console.log(this.infoInput)
            
        }     
       
    }
  }
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
    .submit{
    margin-top: px2rem(10);
  }
  }

}
</style>