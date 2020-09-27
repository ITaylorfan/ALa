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

      <div class="chooseUser" @click="choiceUser">
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
      uploader:[],

      //存放父组件传过来的东西
      parentData:{},

      //统计输入信息数
      index:1,
      //父组件传过来信息的id
      parentId:0
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
    //选中接收人
    choiceUser(){
       this.$router.push({
          name:"ChoiceUser"
        })
    },
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
          //信息输入页面和编辑页面的数据分开放
          if(this.$route.name==="InfoInput"){
            let img=[]
            let obj={
              image:""
            }
            for(var i in this.uploader){
              //img[i]=this.uploader[i].content
              img[i]=obj={
                image:this.uploader[i].content
              }
            }
              //封装数据
            let data={ 
            id:this.index,
            type:this.type,
            title:this.textTitle,
            content:this.message,
            imageUrl:img,
            date:"2020-09-20",
            time:"22:10:11",
            status:this.detailUserInfo.status,
            check:{
                "type":"合格",
                "execute":"小明",
                "message":"经检验不合格",
                "date":"2020-09-15",
                "time":"8:30:33",
            }
            }
            //临时存放数据 合并后保存
            let dataList=[]
            dataList=this.infoInput
            dataList.push(data)
            this.setInfoInput(dataList)
            //加入vuex数组
            dataList=[]
            dataList=this.myUpload
            dataList.unshift(data)
            this.setMyUpload(dataList)

            //console.log(this.infoInput)
                //弹框
            this.$Toast.success({
              message:"保存成功",
              forbidClick: true,
            })
            
            setTimeout(()=>{
               this.$router.go(-1)
            },2000)
           
          }else{
            //这是编辑后的信息非新输入的信息
            //封装数据
            //整理uploader中的图片数据
            let img=[]
            let obj={
              image:""
            }
            for(var a in this.uploader){
              //img[i]=this.uploader[i].content
              img[a]=obj={
                image:this.uploader[a].content===undefined? this.uploader[a].url :this.uploader[a].content
              }
            }
            //console.log(img)
            let data={
            id:this.parentId,
            type:this.type,
            title:this.textTitle,
            content:this.message,
            imageUrl:img,
            date:"2020-09-20",
            time:"22:10:11",
            status:this.detailUserInfo.status
            }
           
            //临时存放数据 合并后保存
            let i=-1
            let dataList=[]
            dataList=this.editInfo
            //查找已有数据 如果存在相同id就移出
            dataList.forEach((item,index)=>{
              if(item.id===data.id){
                i=index    
              }
            })
            //删除指定元素
            if(i!==-1){
               dataList.splice(i,1)
            }   
            dataList.push(data)
            //保存到vuex的数组中
            this.setEditInfo(dataList)

            
            //弹框
            this.$Toast.success({
              message:"保存成功",
              forbidClick: true,
            })
            this.$emit("childToFather",data)
            setTimeout(()=>{
               this.$router.go(-1)     
            },2000)

            //console.log(this.editInfo)
          }       
        }     
       
    }
  },
  mounted() {
    this.index=this.infoInput.length+1
    // console.log(this)
    //就算没有传params参数 它也不为空
    if(this.$route.params.id!==undefined){
      this.parentData=this.$route.params
      
      // console.log(this.$route.params.id==undefined)
      //显示出历史值
      this.parentId=this.parentData.id
      this.type=this.parentData.type
      this.message=this.parentData.content
      this.textTitle=this.parentData.title
      this.parentData.imageUrl.forEach((item,index)=>{
        //创建临时对象
        let obj={
          //获取图片地址
          url:item.image
        }

        //把对象加入文件队列数组中
        this.uploader.push(obj)  
      })
      // console.log(this.uploader)
    }
  },
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