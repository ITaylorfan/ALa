import { mapActions,mapGetters} from "vuex";


//方便混入
export const Ala={
    //变量
    computed: {
        ...mapGetters(["isPropertyManager","isLogin","isWY","isJW","isYW","isZH","status","name",
        "detailUserInfo","infoInput","passInfo","editInfo","noPassInfo","checkHistory","isFirst",
        "waitCheck","checkHistoryIsFirst","myUpload","myUploadIsFirst"])
    },
    //方法
    methods: {
        ...mapActions(["setIsPropertyManager","setIsLogin","setIsWY","setIsJW","setIsYW",
        "setIsZH","setStatus","setName","setDetailUserInfo","setInfoInput","setPassInfo",
        "setEditInfo","setNoPassInfo","setCheckHistory","setIsFirst","setWaitCheck","setCheckHistoryIsFirst",
        "setMyUpload","setMyUploadIsFirst"]),

        resetScrollBar(){
            //滚动条归位
          let dom=document.querySelector(".wrapper");
          if(dom!==null){
              dom.scrollTop=0
          }
        }
    },
}