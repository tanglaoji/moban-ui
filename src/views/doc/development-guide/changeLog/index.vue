<template>
  <div class="change-log">
    <title-area type="开发指南 · Change Log" title="更新日志" description="Moban 版本号规则说明：主版本号-次版本号-修订版本号。" />
    <log-container v-for="item in log_list" :key="item.version" :change-time="item.time" :version="item.version" :log-list="item.log" />
    <page-turner :prev="prev" :next="next" />
  </div>
</template>

<script>
import ChangeLog from "@/database/change-log.js";
import TitleArea from "@/components/TitleArea.vue";
import PageTurner from "@/components/PageTurner.vue";
import LogContainer from "@/components/LogContainer.vue";
export default {
  name: "changeLog",
  components: { TitleArea, PageTurner, LogContainer },
  data() {
    return {
      prev: {
        title: "安装",
        path: "/doc/installation",
      },
      next: {
        title: "图标",
        path: "/doc/icon",
      },
      log_list: ChangeLog,
    };
  },
};
</script>
<style scoped>
.change-log {
  color: #333;
}
</style>
