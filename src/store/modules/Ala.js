const Ala={
    state:{
        //这里放变量
        isPropertyManager:false
    },
    mutations:{
        "SET_IS_PROPERTY_MANAGER":(state,isPropertyManager)=>{
            state.isPropertyManager=isPropertyManager
        }
    }
}

//记得抛出

export default Ala