<template>
  <div class="change-log">
    <log-container v-for="item in log_list" :key="item.version" :change-time="item.time" :version="item.version"
      :log-list="item.log" />
  </div>
</template>

<script>
import ChangeLog from "@/database/change-log.js";
import LogContainer from "@/components/LogContainer.vue";
export default {
  name: "changeLog",
  components: { LogContainer },
  data() {
    return {
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
