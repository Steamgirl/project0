import Vue from "vue";
import Router from "vue-router";

// 一级路由伪元素
const vIndex = () => import("@/components/index");
const Services = () => import("@/components/view/home");
const Login = () => import("@/components/view/login");
const reginster = () => import("@/components/view/reginster");
const cs = () => import("@/components/view/cs");

//二级路由
const industry = () => import("@/components/page/industry");


Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/index",
      component: vIndex
    },
    {
      path: "/Services",
      component: Services
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/reginster",
      component: reginster
    },
    {
      path: "/cs",
      component: cs
    }
    , {
      path:"/industry",
      component:industry
    }
  ]
});
