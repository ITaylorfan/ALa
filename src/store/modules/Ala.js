import detailUserInfo from "../../mock/detailUserInfo"

const Ala={
    state:{
        //这里放变量
        isPropertyManager:false,
        //是否登录
        isLogin:false,
        //是否为业委登录
        isYW:false,
        //是否为物业登录
        isWY:false,
        //是否为居委登录
        isJW:false,
        //是否为住户
        isZH:false,
        //登录后状态 身份
        status:"哈哈哈",
        //登录后的名字
        name:"",
        //存放用户完整信息
        detailUserInfo:{},

        //待审查列表
        waitCheck:[],

        //存放输入的信息
        infoInput:[],

        //存放通过的信息可以发布
        passInfo:[],

        //存放不通过的信息
        noPassInfo:[],

        //存放编辑后的信息
        editInfo:[],

        //审查历史
        checkHistory:[],

        //控制等待审查的钩子函数中的函数只执行一次
        isFirst:true,

        //控制审查历史的钩子函数只执行一次
        checkHistoryIsFirst:true,

        //我的发布
        myUpload:[],

        //判断myUpload是否为第一次加载
        myUploadIsFirst:true

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
        },
        //存放通过的信息
        "SET_PASS_INFO":(state,passInfo)=>{
            state.passInfo=passInfo
        },
        //存放不通过的信息
        "SET_NO_PASS_INFO":(state,noPassInfo)=>{
            state.noPassInfo=noPassInfo
        },
        //存放编辑后的信息
        "SET_EDIT_INFO":(state,editInfo)=>{
            state.editInfo=editInfo
        },

        //存放审查历史
        "SET_CHECK_HISTORY":(state,checkHistory)=>{
            state.checkHistory=checkHistory
        },

        //设置只执行一次
        "SET_IS_FIRST":(state,isFirst)=>{
            state.isFirst=isFirst
        },

        //设置待审查列表
        "SET_WAIT_CHECK":(state,waitCheck)=>{
            state.waitCheck=waitCheck
        },

        //设置审查历史的执行一次
        "SET_CHECK_HISTORY_IS_FIRST":(state,checkHistoryIsFirst)=>{
            state.checkHistoryIsFirst=checkHistoryIsFirst
        },
        
        //我的发布
        "SET_MY_UPLOAD":(state,myUpload)=>{
            state.myUpload=myUpload
        },

        //是否为第一次加载这个页面
        "SET_MY_UPLOAD_IS_FIRST":(state,myUploadIsFirst)=>{
            state.myUploadIsFirst=myUploadIsFirst
        }
        
    }
}

//记得抛出

export default Ala