import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export const constantRoutes = [
  {
    path: "/",
    name: "basicLayout",
    component: () => import("@/layouts/BasicLayout"),
    redirect: "/",
    hidden: true,
    children: [
      {/** 首页 Home */
        path: "/",
        name: "home",
        component: () => import("@/views/home"),
        hidden: true,
      }
    ]
  },
  {
    path: "/doc",
    name: "docLayout",
    component: () => import("@/layouts/DocLayout"),
    redirect: "/doc/installation",
    hidden: true,
    children: [
      {/** 介绍 Introduction */
        path: "/doc/introduction",
        name: "introduction",
        component: () => import("@/views/doc/development-guide/introduction"),
        hidden: true,
      },
      {/** 安装 Installation */
        path: "/doc/installation",
        name: "installation",
        component: () => import("@/views/doc/development-guide/installation"),
        hidden: true,
      },
      {/** 更新日志 Change Log */
        path: "/doc/change-log",
        name: "changeLog",
        component: () => import("@/views/doc/development-guide/changeLog"),
        hidden: true,
      },
      {/** 图标 Icon */
        path: "/doc/icon",
        name: "icon",
        component: () => import("@/views/doc/basic/icon"),
        hidden: true,
      },
    ]
  },
  {
    path: "/404",
    component: () => import("@/views/exception/404")
  },
  { path: "*", redirect: "/404", hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router