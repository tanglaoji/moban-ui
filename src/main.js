import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n"
// 代码高亮
import hljs from "highlight.js";
import 'highlight.js/styles/github.css';
import "reset.css";
import "@/styles/flex.less";

Vue.directive("highlight", (el) => {
  let highlight = el.querySelectorAll("div");
  highlight.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

import Moban from "../MobanUI";
import "../MobanUI/lib/theme-chalk/index.css";
Vue.use(Moban)

Vue.config.productionTip = false

router.beforeEach((to, form, next) => {
  if (to.name && to.name !== "home") {
    document.title = `${i18n.t(`documentTitle.${to.name}`)} - Moban`;
  } else {
    document.title = `Moban - 一套全新的无限自定义组件库`;
  }
  next();
})

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount("#app")