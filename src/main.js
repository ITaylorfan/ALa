import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./mock";
import axios from "axios"

//下面是vant相关插件的使用
import { Icon } from 'vant';
import { Button } from "vant";
Vue.use(Button);
Vue.use(Icon);
//在原型加入axios
Vue.prototype.$axios = axios


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
