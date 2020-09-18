import { mapActions,mapGetters} from "vuex";


//方便混入
export const Ala={
    //变量
    computed: {
        ...mapGetters(["isPropertyManager","isLogin","isWY","isJW","isYW","isZH","status","name","detailUserInfo","infoInput"])
    },
    //方法
    methods: {
        ...mapActions(["setIsPropertyManager","setIsLogin","setIsWY","setIsJW","setIsYW",
        "setIsZH","setStatus","setName","setDetailUserInfo","setInfoInput"])
    },
}