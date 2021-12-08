<template>
  <div class="page-turner flex-row-b">
    <div class="prev">
      <router-link v-if="prev.title != ''" :to="prev.path">
        <i class="mo-icon-arrow-left"></i>
        <span>{{prev.title}}</span>
      </router-link>
    </div>
    <div class="next">
      <router-link v-if="next.title != ''" :to="next.path">
        <span>{{next.title}}</span>
        <i class="mo-icon-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageTurner",
  props: {
    prev: {
      type: Object,
      default: () => ({
        title: "",
        path: "",
      }),
    },
    next: {
      type: Object,
      default: () => ({
        title: "",
        path: "",
      }),
    },
  },
};
</script>

<style lang="less" scoped>
.page-turner {
  margin: 32px 0 100px 0;
  a {
    color: #333;
    text-decoration: none;
    span {
      margin: 0 10px;
    }
  }
}
</style>
