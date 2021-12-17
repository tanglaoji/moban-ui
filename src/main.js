import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n"
import "reset.css";
import "@/styles/flex.less";

// 代码高亮
import hljs from "highlight.js"     //导入代码高亮文件
import "./styles/highlight.less"  //自定义高亮样式
Vue.directive("highlight", function (el) {
  let highlight = el.querySelectorAll("div");
  highlight.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

// 编辑器
import editorTheme from "@/database/editor-theme.js";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
import "monaco-editor/esm/vs/editor/contrib/find/findController.js";
import "monaco-editor/esm/vs/editor/contrib/folding/folding.js";
import "monaco-editor/esm/vs/basic-languages/html/html.contribution";
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution";
monaco.editor.defineTheme("moban", editorTheme);
monaco.editor.setTheme("moban");
Vue.prototype.$monaco = monaco;

// MobanUI
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