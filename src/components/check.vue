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
          label="审查结果"
          placeholder="请选择类型"
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

      <div class="inputContent">
        <van-field
          v-model="message"
          rows="3"
          autosize
          label="审查说明"
          type="textarea"
          maxlength="100"
          placeholder="请输入审查说明"
          show-word-limit
        />
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
  mixins: [Ala],
  data() {
    return {
      //顶部导航栏标题
      title: "审查",
      //审查类型
      type: "",
      //文章类型弹出框可选项
      columns: ["合格", "不合格"],
      showPicker: false,
      //审查内容
      message: "",

      //存放父组件传过来的东西
      parentData: {}
    };
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
    submit() {
      if (this.type === "") {
        this.$Toast.fail({
          message: "请选中审查结果",
          //禁止背景点击
          forbidClick: true
        });
      } else if (this.message === "") {
        this.$Toast.fail({
          message: "请输入审查说明",
          //禁止背景点击
          forbidClick: true
        });
      } else {
        //封装数据
        let key = "check";
        let value = {
          type: this.type,
          message: this.message,
          date:"2020-09-22",
          time:"20:25:00",
          execute:"小明"
        };
        this.parentData[key] = value;
        //通过保存到已通过数组
        if (this.type === "合格") {
          let dataList = [];
          //先获取当中的数据
          dataList = this.passInfo;
          dataList.push(this.parentData);
          //保存
          this.setPassInfo(dataList);

          //弹框
          this.$Toast.success({
            message: "保存成功",
            forbidClick: true
          });
          //把id返回给父组件 在待审核列表中删除
          this.$emit("successCheck",this.parentData.id)
          setTimeout(() => {
            this.$router.go(-1);
          }, 2000);

        }else if(this.type === "不合格"){
          //不通过保存到 不通过数组
          let dataList = [];
          //先获取当中的数据
          dataList = this.noPassInfo;
          dataList.push(this.parentData);
          //保存
          this.setNoPassInfo(dataList);

          //弹框
          this.$Toast.success({
            message: "保存成功",
            forbidClick: true
          });
          //把id返回给父组件
          this.$emit("successCheck",this.parentData.id)
          setTimeout(() => {
            this.$router.go(-1);
          }, 2000);      
        }
        
        //不管通没通过都要保存到审查历史数组
        let historyData=this.checkHistory
        historyData.unshift(this.parentData)
        //保存
        this.setCheckHistory(historyData)
      }
    }
  },
  mounted() {
   
    //console.log(this)
    //就算没有传params参数 它也不为空
    if (this.$route.params.id !== undefined) {
      this.parentData = this.$route.params;
    }
    //console.log(this.parentData)
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
    .submit {
      margin-top: px2rem(10);
    }
  }
}
</style>