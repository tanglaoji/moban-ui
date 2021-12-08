<template>
  <div class="installation">
    <title-area type="开发指南 · Installation" title="安装" />
    <div class="markdown">
      <div class="common">##&nbsp;&nbsp;安装</div>
      <div class="command-line">npm&nbsp;install&nbsp;moban-ui&nbsp;-save</div>
      <br />
      <div class="common">##&nbsp;&nbsp;快速开始</div>
      <div class="command-line">
        <span class="command">import&nbsp;</span>
        <span class="module">Vue&nbsp;</span>
        <span class="command">from&nbsp;</span>
        <span class="source">"vue"</span>
      </div>
      <div class="command-line">
        <span class="command">import&nbsp;</span>
        <span class="module">App&nbsp;</span>
        <span class="command">from&nbsp;</span>
        <span class="source">"./App.vue"</span>
      </div>
      <div class="command-line">
        <span class="command">import&nbsp;</span>
        <span class="module">Moban&nbsp;</span>
        <span class="command">from&nbsp;</span>
        <span class="source">"moban-ui"</span>
      </div>
      <div class="command-line">
        <span class="command">import&nbsp;</span>
        <span class="source">"moban-ui/lib/theme-chalk/index.css"</span>
      </div>
      <br />
      <div class="command-line">
        <span class="vue">Vue</span>
        <span>.use(</span>
        <span class="module">Moban</span>
        <span>)</span>
      </div>
      <br />
      <div class="command-line">
        <span class="keyword">new&nbsp;</span>
        <span class="vue">Vue</span>
        <span>({</span>
      </div>
      <div class="command-line">&nbsp;&nbsp;el: "#app",</div>
      <div class="command-line">&nbsp;&nbsp;render: h => h(App)</div>
      <div class="command-line">}).$mount("#app")</div>
    </div>
    <page-turner :prev="prev" :next="next" />
  </div>
</template>

<script>
import TitleArea from "@/components/TitleArea.vue";
import PageTurner from "@/components/PageTurner.vue";
export default {
  name: "installation",
  components: { TitleArea, PageTurner },
  data() {
    return {
      prev: {
        title: "介绍",
        path: "/doc/introduction",
      },
      next: {
        title: "更新日志",
        path: "/doc/change-log",
      },
    };
  },
};
</script>
<style lang="less" scoped>
.installation {
  color: #333;
  .markdown {
    padding: 16px;
    overflow: auto;
    font-size: 13px;
    line-height: 22px;
    border-radius: 4px;
    border: 1px solid rgb(28 31 35 / 8%);
    background-color: rgba(90, 23, 23, 0.01);
    .common {
      color: #6b7075;
    }
    .command-line {
      .command {
        color: #c586c0;
      }
      .module {
        color: #8cdcfe;
      }
      .source {
        color: #ce9178;
      }
      .vue {
        color: #4ec9b0;
      }
      .keyword {
        color: #358cd6;
      }
    }
  }
}
</style>
