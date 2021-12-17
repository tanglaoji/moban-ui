<template>
  <div class="installation">
    <code-block v-model="install_value" />
  </div>
</template>

<script>
import CodeBlock from "@/components/CodeBlock.vue";
export default {
  name: "installation",
  components: { CodeBlock },
  data() {
    return {
      install_value: `// 安装
npm install moban-ui -save

// 快速开始
import Vue from "vue"
import App from "./App.vue"
import Moban from "moban-ui"
import "moban-ui/lib/theme-chalk/index.css"

Vue.use(Moban)

new Vue({
  el: "#app",
  render: h => h(App)
}).$mount("#app")`,
    };
  },
};
</script>
<style lang="less" scoped>
.installation {
  color: #333;
}
</style>
