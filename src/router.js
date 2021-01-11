import Vue from "vue";
import Router from "vue-router";
import Cookies from "vue-cookies";
import Indexs from "./views/Index.vue";
import Login from "./views/login/Login.vue";
import Social from "./views/task/Social.vue";
import Person from "./views/person/Person.vue";
import Rule from "./views/login/Rule.vue";
import Rights from "./views/person/Rights.vue";
import Manage from "./views/person/Manage.vue";
import Edit from "./views/person/Edit.vue";
import Adress from "./views/person/Adress.vue";
import Addadr from "./views/person/Addadr.vue";
import Orders from "./views/person/Orders.vue";
import Tax from "./views/person/Tax.vue";
import Userinfo from "./views/person/Userinfo.vue";
import Index from "./views/other/Index.vue";
import Card from "./views/other/Card.vue";
import Addcard from "./views/other/Addcard.vue";
import Clear from "./views/other/Clear.vue";
import Foreign from "./views/other/Foreign.vue";
import Fundchange from "./views/other/Fundchange.vue";
import Fundperson from "./views/other/Fundperson.vue";
import Income from "./views/other/Income.vue";
import Infochange from "./views/other/Infochange.vue";
import Out from "./views/other/Out.vue";
import Refund from "./views/other/Refund.vue";
import Datechange from "./views/other/Datechange.vue";
import Oorders from "./views/other/Oorders.vue";
import paySuccess from "./views/other/paySuccess.vue";

import axios from "axios";
Vue.use(Cookies);
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/indexs",
      name: "Indexs",
      component: Indexs,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/social",
      name: "Social",
      component: Social,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/",
      name: "Social",
      component: Social,
      meta: {
        keepAlive: false, // 需要被缓存
      },
    },
    {
      path: "/paySuccess",
      name: "paySuccess",
      component: paySuccess,
      meta: {
        keepAlive: false, // 需要被缓存
      },
    },
    {
      path: "/person",
      name: "Person",
      component: Person,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/rule",
      name: "Rule",
      component: Rule,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/rights",
      name: "Rights",
      component: Rights,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/manage",
      name: "Manage",
      component: Manage,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/edit",
      name: "Edit",
      component: Edit,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/adress",
      name: "Adress",
      component: Adress,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/addadr",
      name: "Addadr",
      component: Addadr,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/orders",
      name: "Orders",
      component: Orders,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/tax",
      name: "Tax",
      component: Tax,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/index",
      name: "Index",
      component: Index,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/card",
      name: "Card",
      component: Card,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/addcard",
      name: "Addcard",
      component: Addcard,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/clear",
      name: "Clear",
      component: Clear,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/foreign",
      name: "Foreign",
      component: Foreign,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/fundchange",
      name: "Fundchange",
      component: Fundchange,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/fundperson",
      name: "Fundperson",
      component: Fundperson,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/income",
      name: "Income",
      component: Income,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/infochange",
      name: "Infochange",
      component: Infochange,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/out",
      name: "Out",
      component: Out,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/refund",
      name: "Refund",
      component: Refund,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/datechange",
      name: "Datechange",
      component: Datechange,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/oorders",
      name: "Oorders",
      component: Oorders,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
    {
      path: "/userinfo",
      name: "Userinfo",
      component: Userinfo,
      meta: {
        keepAlive: true, // 需要被缓存
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const oauth_token = Cookies.get("oauth_token");
  if (!oauth_token) {
    let openid = to.query.openid;
    if (!openid) {
      //获取openid
      window.location.href = "http://m.fashi77.com/towxoauth?link_url=" + window.location.href;
    }
  } else {
    if (
      router.options.routes
        .map((item) => {
          //需要适配带子路由的路由表
          return item.path;
        })
        .indexOf(to.path) === -1
    ) {
      next("/");
    } else {
      next();
    }
  }
});
export default router;
