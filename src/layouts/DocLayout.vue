<template>
  <mo-container class="doc-layout">
    <top-navigation />
    <mo-container>
      <mo-aside>
        <collapsible-menu v-for="item in menu_list" :key="item.title" :menu-name="item.title" :menu-list="item.children" />
      </mo-aside>
      <mo-main>
        <router-view />
      </mo-main>
    </mo-container>
  </mo-container>
</template>

<script>
import DocumentGuide from "@/database/document-guide.js";
import TopNavigation from "@/components/TopNavigation.vue";
import CollapsibleMenu from "@/components/CollapsibleMenu.vue";
export default {
  name: "DocLayout",
  components: { TopNavigation, CollapsibleMenu },
  data() {
    return {
      menu_list: DocumentGuide,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.doc-layout {
  flex-direction: column;
  .mo-aside {
    min-width: 300px;
    color: transparent;
    transition: color 0.3s;
    padding: 0 0 120px 10px;
    max-height: calc(100vh - 76px);
    border-right: 1px solid #ededee;
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 20px;
      border-left: 10px solid;
      box-shadow: inset 0 0 0 10px;
    }
    &:hover {
      color: #d0cdc7;
    }
  }
  .mo-main {
    padding: 20px 40px;
    max-height: calc(100vh - 76px);
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background-color: #d0cdc7;
    }
  }
}
</style>
