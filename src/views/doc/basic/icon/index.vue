<template>
  <div class="icon-view">
    <code-block v-model="usage" />
    <!-- 基础用法 -->
    <paragraph-heading title="sectionOne.basicUsage" :level="2" para="basic-usage" id="basic-usage">
      <ul>
        <li>
          <span>{{$t("paragraphHeading.iconView.sectionOne.iconSource")}}：</span>
          <a href="https://www.iconfont.cn/" target="_blank">iconfont</a>
        </li>
        <li>{{$t("paragraphHeading.iconView.sectionOne.theFirstUsage")}}</li>
        <li>{{$t("paragraphHeading.iconView.sectionOne.theSecondUsage")}}</li>
      </ul>
    </paragraph-heading>
    <code-display-area v-model="basic_usage_value" height="240px" preview-height="100px" />
    <ul class="gather">
      <li v-for="item,index in icon_list" :key="index" class="flex-all-c">
        <i :class="item"></i>
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import CodeBlock from "@/components/CodeBlock.vue";
import IconGather from "@/database/icon-gather.js";
import CodeDisplayArea from "@/components/CodeDisplayArea.vue";
import ParagraphHeading from "@/components/ParagraphHeading.vue";
export default {
  name: "iconView",
  components: { CodeBlock, CodeDisplayArea, ParagraphHeading },
  data() {
    return {
      usage: `import { MoIcon } from "moban-ui";`,
      icon_list: IconGather,
      basic_usage_value: `<i class="demo mo-icon-delete"></i>
<mo-icon type="refresh" class="demo"></mo-icon>
<mo-icon type="refresh" size="23" bold class="demo"></mo-icon>
<mo-button icon="close" class="demo">图标按钮</mo-button>`
    };
  },
};
</script>
<style lang="less" scoped>
.icon-view {
  /deep/.demo {
    margin: 0 20px;
  }
  .disc() {
    ul {
      list-style: disc;
      padding-left: 20px;
      li {
        height: 28px;
        line-height: 20px;
        padding-left: 4px;
      }
    }
  }
  #basic-usage {
    .disc();
  }
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