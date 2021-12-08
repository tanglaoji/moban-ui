<template>
  <div class="basic-layout">
    <top-navigation />
    <router-view />
  </div>
</template>

<script>
import TopNavigation from "@/components/TopNavigation.vue";
export default {
  name: "BasicLayout",
  components: { TopNavigation },
};
</script>
