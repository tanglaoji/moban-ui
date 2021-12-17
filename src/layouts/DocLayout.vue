<template>
  <mo-container class="doc-layout">
    <top-navigation />
    <mo-container>
      <mo-aside>
        <collapsible-menu v-for="item in menu_list" :key="item.title" :menu-name="item.title"
          :menu-list="item.children" />
      </mo-aside>
      <mo-main>
        <top-text-area :type="current_obj.type" :title="current_obj.title" :description="current_obj.desc" />
        <paragraph-heading para="code-demo" id="code-demo" v-if="current_obj.menu !== '开发指南'" />
        <paragraph-heading title="onDemandIntroduction" :level="2" para="on-demand-introduction"
          id="on-demand-introduction" v-if="current_obj.menu !== '开发指南'" />
        <router-view />
        <page-turner :prev="current_prev" :next="current_next" />
      </mo-main>
    </mo-container>
  </mo-container>
</template>

<script>
import PageTurner from "@/components/PageTurner.vue";
import TopTextArea from "@/components/TopTextArea.vue";
import DocumentGuide from "@/database/document-guide.js";
import TopNavigation from "@/components/TopNavigation.vue";
import CollapsibleMenu from "@/components/CollapsibleMenu.vue";
import ParagraphHeading from "@/components/ParagraphHeading.vue";
export default {
  name: "DocLayout",
  components: { PageTurner, TopTextArea, TopNavigation, CollapsibleMenu, ParagraphHeading },
  data() {
    return {
      menu_list: DocumentGuide,
      child_list: [],
      current_prev: {
        title: "",
        path: "",
      },
      current_obj: {},
      current_next: {
        title: "",
        path: "",
      }
    };
  },
  watch: {
    "$route.path"(newValue) {
      let index = this.child_list.findIndex((item) => { return item.path === newValue });
      this.getTopTitleArea();
      this.getPrevAndNext(index);
    },
  },
  mounted() {
    this.menu_list.forEach((item) => {
      this.child_list = [...this.child_list, ...item.children];
    })
    let index = this.child_list.findIndex((item) => { return item.path === this.$route.path });
    this.getTopTitleArea();
    this.getPrevAndNext(index);
  },
  methods: {
    getPrevAndNext(index) {
      // 上一节
      if (index - 1 >= 0) {
        this.current_prev = {
          title: this.child_list[index - 1].title,
          path: this.child_list[index - 1].path
        };
      } else {
        this.current_prev = {
          title: "",
          path: "",
        };
      }
      // 下一节
      if (index + 1 < this.child_list.length) {
        this.current_next = {
          title: this.child_list[index + 1].title,
          path: this.child_list[index + 1].path
        };
      } else {
        this.current_next = {
          title: "",
          path: "",
        };
      }
    },
    getTopTitleArea() {
      for (let index = 0, len = this.menu_list.length; index < len; index++) {
        let obj = this.menu_list[index].children.find((item) => { return item.path === this.$route.path }) || {};
        if (Object.keys(obj).length != 0) {
          this.current_obj = {
            menu: this.menu_list[index].title,
            type: `${this.menu_list[index].title} · ${obj.title.split(" ")[1]}`,
            title: obj.title.split(" ")[0],
            desc: obj.desc
          };
          break;
        }
      }
    }
  }
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
    height: calc(100vh - 76px);
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
      height: 7px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background-color: #d0cdc7;
    }
  }
}
</style>
