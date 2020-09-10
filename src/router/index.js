import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:"/home"
  },
  {
    path:"/home",
    name:"home",
    component:()=>import("../views/Home")
  },
  {
    path:"/mycommunity",
    name:"mycommunity",
    component:()=>import("../views/MyCommunity")
  },
  {
    path:"/service",
    name:"service"
  }
 
];

const router = new VueRouter({
  routes
});

export default router;
