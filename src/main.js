import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./mock";
import axios from "axios"

//下面是vant相关插件的使用
import { Icon } from 'vant';
import { Button } from "vant";
import { Field } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Toast } from 'vant';
import { Dialog } from 'vant';
import { Search } from 'vant';
import { Form } from 'vant';
import { Popup } from 'vant';
import { Picker } from 'vant';
import { Uploader } from 'vant';
import { Switch } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { ShareSheet } from 'vant';



// 全局注册
//Vue.use(Dialog);
// Vue.use(Toast);
Vue.use(Search);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Form);
Vue.use(Popup);
Vue.use(Picker);
Vue.use(Uploader);
Vue.use(Switch);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(ShareSheet);
//在原型加入axios
Vue.prototype.$axios = axios
//在原型中加入Toast
Vue.prototype.$Toast=Toast
Vue.prototype.$Dialog=Dialog

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
