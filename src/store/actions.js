import detailUserInfo from "../mock/detailUserInfo"

const actions={
    setIsPropertyManager:({commit},isPropertyManager)=>{
        return commit("SET_IS_PROPERTY_MANAGER",isPropertyManager)
    },
    setIsLogin:({commit},isLogin)=>{
        return commit("SET_IS_LOGIN",isLogin)
    },
    setIsWY:({commit},isWY)=>{
        return commit("SET_IS_WY",isWY)
    },
    setIsJW:({commit},isJW)=>{
        return commit("SET_IS_JW",isJW)
    },
    setIsYW:({commit},isYW)=>{
        return commit("SET_IS_YW",isYW)
    },
    setIsZH:({commit},isZH)=>{
        return commit("SET_IS_ZH",isZH)
    },
    setStatus:({commit},status)=>{
        return commit("SET_STATUS",status)
    },
    setName:({commit},name)=>{
        return commit("SET_NAME",name)
    },
    setDetailUserInfo:({commit},detailUserInfo)=>{
        return commit("SET_DETAIL_USER_INFO",detailUserInfo)
    },
    //信息输入存放
    setInfoInput:({commit},infoInput)=>{
        return commit("SET_INFO_INPUT",infoInput)
    },
    //存放通过的信息
    setPassInfo:({commit},passInfo)=>{
        return commit("SET_PASS_INFO",passInfo)
    },
    //存放不通过的信息
    setNoPassInfo:({commit},noPassInfo)=>{
        return commit("SET_NO_PASS_INFO",noPassInfo)
    },
    //存放编辑后的信息
    setEditInfo:({commit},editInfo)=>{
        return commit("SET_EDIT_INFO",editInfo)
    },
    //存放审查历史的信息
    setCheckHistory:({commit},checkHistory)=>{
        return commit("SET_CHECK_HISTORY",checkHistory)
    },
    //设置只执行一次
    setIsFirst:({commit},isFirst)=>{
        return commit("SET_IS_FIRST",isFirst)
    },

    //设置待审查列表
    setWaitCheck:({commit},waitCheck)=>{
        return commit("SET_WAIT_CHECK",waitCheck)
    },

    setCheckHistoryIsFirst:({commit},checkHistoryIsFirst)=>{
        return commit("SET_CHECK_HISTORY_IS_FIRST",checkHistoryIsFirst)
    },

    //我的发布
    setMyUpload:({commit},myUpload)=>{
        return commit("SET_MY_UPLOAD",myUpload)
    },
    setMyUploadIsFirst:({commit},myUploadIsFirst)=>{
        return commit("SET_MY_UPLOAD_IS_FIRST",myUploadIsFirst)
    }

}

export default actions