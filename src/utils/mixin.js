import { mapActions,mapGetters} from "vuex";


//方便混入
export const Ala={
    //变量
    computed: {
        ...mapGetters(["isPropertyManager"])
    },
    //方法
    methods: {
        ...mapActions(["setIsPropertyManager"])
    },
}