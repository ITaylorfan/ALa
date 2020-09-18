import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:"/home"
  },
  {
    path:"/home",
    name:"home",
    component:()=>import("../views/Home"),
    children:[
      {
        path:"HomeDetailNotice",
        name:"HomeDetailNotice",
        component:()=>import("../components/HomeDetailNotice")
      }
    ]
  },
  {
    path:"/mycommunity/:id",
    name:"mycommunity",
    component:()=>import("../views/MyCommunity"),
    children:[
      {
        path:"Menu",
        name:"Menu",
        component:()=>import("../components/functionMenu"),
        children:[
          {
            path:"InfoInput",
            name:"InfoInput",
            component:()=>import("../components/infoInput")
          },
          {
            path:"WaitCheck",
            name:"WaitCheck",
            component:()=>import("../components/waitCheck"),
            children:[
              {
                path:"InfoEdit",
                name:"InfoEdit",
                component:()=>import("../components/infoInput")
              }
            
            ]
          }
        ]
      },
      {
        path:"UserInfo",
        name:"UserInfo",
        component:()=>import("../components/userInfo"),
        children:[
          {
            path:"detailUserInfo",
            name:"detailUserInfo",
            component:()=>import("../components/detailUserInfo")
          },
          {
            path:"editUserInfo",
            name:"editUserInfo",
            component:()=>import("../components/editUserInfo")
          }
        ]
      },
      {
        path:"myNotice",
        name:"myNotice",
        component:()=>import("../components/myNotice"),
        children:[
          {
            path:"detailNotice",
            name:"detailNotice",
            component:()=>import("../components/detailNotice")
          }
        ]
      }
    ]
  },
  
  {
         path:"/login/:id",
         name:"login",
         component:()=>import("../views/Login")
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
