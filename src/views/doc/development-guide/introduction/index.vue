<template>
  <div class="introduction">
    <title-area type="开发指南 · Introduction" title="介绍" description='Moban 灵感来源于 "科圣" 墨子和 "匠师" 鲁班 ，期望 Moban 赋予开发者们更多自定义组件的能力，是一套基于 Vue 2.0 的桌面级 UI 组件库。' />
    <page-turner :next="next" />
  </div>
</template>

<script>
import TitleArea from "@/components/TitleArea.vue";
import PageTurner from "@/components/PageTurner.vue";
export default {
  name: "introduction",
  components: { TitleArea, PageTurner },
  data() {
    return {
      next: {
        title: "安装",
        path: "/doc/installation",
      },
    };
  },
};
</script>
