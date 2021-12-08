<template>
  <div class="icon">
    <title-area type="基础 · Icon" title="图标" description="Moban 提供了一套常用的图标集合。(持续更新中...)" />
    <ul class="gather">
      <li v-for="item,index in icon_list" :key="index" class="flex-all-c">
        <i :class="item"></i>
        <span>{{item}}</span>
      </li>
    </ul>
    <page-turner :prev="prev" :next="next" />
  </div>
</template>

<script>
import IconGather from "@/database/icon-gather.js";
import TitleArea from "@/components/TitleArea.vue";
import PageTurner from "@/components/PageTurner.vue";
export default {
  name: "icon",
  components: { TitleArea, PageTurner },
  data() {
    return {
      prev: {
        title: "更新日志",
        path: "/doc/change-log",
      },
      next: {
        title: "按钮",
        path: "/doc/button",
      },
      icon_list: IconGather,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.icon {
  .gather {
    display: grid;
    width: 1120px;
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
    grid-template-columns: repeat(auto-fill, 160px);
    li {
      height: 120px;
      flex-direction: column;
      box-sizing: border-box;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      i {
        font-size: 30px;
      }
      span {
        margin-top: 20px;
        font-size: 13px;
      }
    }
  }
}
</style>