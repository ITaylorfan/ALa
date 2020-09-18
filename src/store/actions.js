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
    }
}

export default actions