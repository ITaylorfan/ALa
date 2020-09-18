<template>
  <div class="detail-wrapper">
    
    <div class="edit">
    <van-cell-group>
      <van-field v-model="status"  required label="身份" placeholder="请输入身份" />
      <van-field v-model="community" required label="小区" placeholder="请输入小区" error-message="" />
      <van-field v-model="position"  required label="详细地址" placeholder="请输入详细地址" />
      <van-field v-model="username" required label="姓名" placeholder="请输入姓名" error-message="" />
      
      <van-field v-model="phone" required label="手机号" placeholder="请输入手机号" error-message="" />
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>

    <div class="edit" @click="save">
      <van-button type="info" size="large">保存信息</van-button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //身份
      status: "",
      //小区
      community:"",
      //详细地址
      position:"",
      //姓名
      username: "",
      //电话号码
      phone: "",
      //验证码
      sms:""
    };
  },
  methods: {
      //保存函数
      save(){

      }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
.detail-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: px2rem(48);
  background-color: #ececec;

  .edit {
    margin-top: px2rem(10);
  }
}
</style>