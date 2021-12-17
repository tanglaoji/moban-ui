<template>
  <div class="button-group-view">
    <code-block v-model="usage" />
    <!-- 按钮组合 -->
    <paragraph-heading title="buttonGroupView.sectionOne.buttonCombination" :level="2" para="button-group"
      id="button-group">
      <span>{{$t("paragraphHeading.buttonGroupView.sectionOne.desc")}}</span>
      <ul>
        <li>{{$t("paragraphHeading.buttonGroupView.sectionOne.theFirstDesc")}}</li>
        <li>{{$t("paragraphHeading.buttonGroupView.sectionOne.theSecondDesc")}}</li>
      </ul>
    </paragraph-heading>
    <code-display-area v-model="button_group_value" height="600px" preview-height="120px" />
  </div>
</template>

<script>
import CodeBlock from "@/components/CodeBlock.vue";
import CodeDisplayArea from "@/components/CodeDisplayArea.vue";
import ParagraphHeading from "@/components/ParagraphHeading.vue";
export default {
  name: "buttonGroupView",
  components: { CodeDisplayArea, ParagraphHeading, CodeBlock },
  data() {
    return {
      usage: `import { MoButton, MoButtonGroup } from "moban-ui";`,
      button_group_value: `<mo-button-group>
  <mo-button type="primary" icon="mo-icon-arrow-left">上一章</mo-button>
  <mo-button type="primary">回到顶部</mo-button>
  <mo-button type="primary" icon="mo-icon-arrow-right" reverse>下一章</mo-button>
</mo-button-group>

<mo-button-group :space="10">
  <mo-button type="primary" icon="mo-icon-arrow-left">上一章</mo-button>
  <mo-button type="primary">回到顶部</mo-button>
  <mo-button type="primary" icon="mo-icon-arrow-right" reverse>下一章</mo-button>
</mo-button-group>

<mo-button-group :space="4">
  <mo-button type="primary" icon="mo-icon-home"></mo-button>
  <mo-button type="primary" icon="mo-icon-location"></mo-button>
</mo-button-group>

<mo-button-group :space="4" fillet>
  <mo-button type="primary" icon="mo-icon-home"></mo-button>
  <mo-button type="primary" icon="mo-icon-location"></mo-button>
</mo-button-group>`,
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="less" scoped>
.button-group-view {
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
  #button-group {
    .disc();
    ul {
      margin-top: 20px;
    }
  }
}
</style>