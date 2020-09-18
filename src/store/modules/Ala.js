import detailUserInfo from "../../mock/detailUserInfo"

const Ala={
    state:{
        //这里放变量
        isPropertyManager:false,
        //是否登录
        isLogin:true,
        //是否为业委登录
        isYW:true,
        //是否为物业登录
        isWY:false,
        //是否为居委登录
        isJW:false,
        //是否为住户
        isZH:false,
        //登录后状态
        status:"哈哈哈",
        //登录后的名字
        name:"",
        //存放用户完整信息
        detailUserInfo:{},
        //存放输入的信息
        infoInput:[]
    },
    mutations:{
        "SET_IS_PROPERTY_MANAGER":(state,isPropertyManager)=>{
            state.isPropertyManager=isPropertyManager
        },
        "SET_IS_LOGIN":(state,isLogin)=>{
            state.isLogin=isLogin
        },
        "SET_IS_WY":(state,isWY)=>{
            state.isWY=isWY
        },
        "SET_IS_JW":(state,isJW)=>{
            state.isJW=isJW
        },
        "SET_IS_YW":(state,isYW)=>{
            state.isYW=isYW
        },
        "SET_IS_ZH":(state,isZH)=>{
            state.isZH=isZH
        },
        "SET_STATUS":(state,status)=>{
            state.status=status
        },
        "SET_NAME":(state,name)=>{
            state.name=name
        },
        "SET_DETAIL_USER_INFO":(state,detailUserInfo)=>{
            state.detailUserInfo=detailUserInfo
        },
        //信息输入存放函数
        "SET_INFO_INPUT":(state,infoInput)=>{
            state.infoInput=infoInput
        }
    }
}

//记得抛出

export default Ala