<p align="center">
  <img src="https://gitee.com/tanglaoji/moban-ui/raw/master/src/assets/logo.png" width="160">
</p>

<p align="center">
  <a href="LICENSE">
    <img alt="LICENSE" src="https://img.shields.io/npm/l/moban-ui">
  </a>
  <a href="VERSION">
    <img alt="VERSION" src="https://img.shields.io/npm/v/moban-ui">
  </a>
</p>

> Moban 的灵感来源于 "科圣" 墨子和 "匠师" 鲁班 ，期望 Moban 赋予开发者们更多自定义组件的能力，是一套基于 Vue 2.0 的桌面级 UI 组件库。

## 🔥 安装
```
npm install moban-ui -save
```

## 👍 快速开始
```
import Vue from "vue"
import App from "./App.vue"
import Moban from "moban-ui"
import "moban-ui/lib/theme-chalk/index.css"

Vue.use(Moban)

new Vue({
  el: "#app",
  render: h => h(App)
}).$mount("#app")
```

## 🎈 许可证

Moban UI is [MIT Licensed](LICENSE)

## 📌 更新日志

https://tanglaoji.gitee.io/moban-ui