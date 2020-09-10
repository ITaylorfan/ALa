import Vue from "vue";
import Vuex from "vuex";
import Ala from "./modules/Ala"
import actions from "./actions"
import getters from "./getters"
Vue.use(Vuex);

export default new Vuex.Store({
  
  modules: {
    Ala
  },
  actions,
  getters
});
