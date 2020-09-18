<template>
    <div class="detail-wrapper">
       <van-cell-group title="基本信息">
        <van-cell title="姓名" :value="userName"/>
        <van-cell title="手机号"  :value="phone" />
        </van-cell-group>

        <van-cell-group title="地址信息">
        <van-cell title="小区" :value="community" />
        <van-cell title="详细地址" center :value="position" />
        </van-cell-group>
        <div class="edit" @click="edit">
        <van-button type="info" size="large">编辑信息</van-button>
        </div>
    </div>
</template>

<script>
import {Ala} from "../utils/mixin"
export default {
    mixins:[Ala],
    data() {
        return {
             userName:"",
             phone:"",
             position:"",
             community:""
        }
    },
    methods: {
          edit(){
            this.$router.push({
                name:"editUserInfo"
            })
        }
    }, 
    mounted() {
        this.userName=this.detailUserInfo.name,
        this.phone=this.detailUserInfo.phone,
        this.position=this.detailUserInfo.detailPosition,
        this.community=this.detailUserInfo.community
    },
}
</script>

<style lang="scss" scoped>
    @import "../assets/styles/global";
    .detail-wrapper{


        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: px2rem(48);
        background-color: #ECECEC;
        
        .edit{
            margin-top: px2rem(10);
        }

          .custom-title {
        margin-right: 4px;
        vertical-align: middle;
        }
    }
</style>