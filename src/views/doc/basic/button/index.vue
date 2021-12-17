<template>
  <div class="button-view">
    <code-block v-model="usage" />
    <!-- 按钮类型 -->
    <paragraph-heading title="buttonView.sectionOne.buttonType" :level="2" para="button-type" id="button-type">
      <ul>
        <li v-for="item,index in button_type" :key="index">{{$t(`paragraphHeading.buttonView.sectionOne.${item}`)}}</li>
      </ul>
    </paragraph-heading>
    <code-display-area v-model="button_type_value" height="1030px" preview-height="270px" />
    <!-- 禁用状态 -->
    <paragraph-heading title="buttonView.sectionTwo.disabledState" :level="2" para="button-disabled"
      id="button-disabled">
      <span>{{$t("paragraphHeading.buttonView.sectionTwo.desc")}}</span>
    </paragraph-heading>
    <code-display-area v-model="button_disabled_value" height="570px" preview-height="160px" />
    <!-- 文字按钮 -->
    <paragraph-heading title="buttonView.sectionThree.textButton" :level="2" para="button-text" id="button-text">
      <ul>
        <li>{{$t("paragraphHeading.buttonView.sectionThree.theFirstDesc")}}</li>
        <li>{{$t("paragraphHeading.buttonView.sectionThree.theSecondDesc")}}</li>
      </ul>
    </paragraph-heading>
    <code-display-area v-model="button_text_value" height="200px" preview-height="80px" />
    <!-- 按钮尺寸 -->
    <paragraph-heading title="buttonView.sectionFour.buttonSize" :level="2" para="button-size" id="button-size">
      <span>{{$t("paragraphHeading.buttonView.sectionFour.desc")}}</span>
    </paragraph-heading>
    <code-display-area v-model="button_size_value" height="240px" preview-height="100px" />
    <!-- 图标按钮 -->
    <paragraph-heading title="buttonView.sectionFive.iconButton" :level="2" para="button-icon" id="button-icon">
      <span>{{$t("paragraphHeading.buttonView.sectionFive.desc")}}</span>
    </paragraph-heading>
    <code-display-area v-model="button_icon_value" height="240px" preview-height="100px" />
  </div>
</template>

<script>
import CodeBlock from "@/components/CodeBlock.vue";
import CodeDisplayArea from "@/components/CodeDisplayArea.vue";
import ParagraphHeading from "@/components/ParagraphHeading.vue";
export default {
  name: "buttonView",
  components: { CodeDisplayArea, ParagraphHeading, CodeBlock },
  data() {
    return {
      usage: `import { MoButton } from "moban-ui";`,
      button_type: [
        "defaultButton",
        "primaryButton",
        "neutralButton",
        "successButton",
        "warningButton",
        "dangerButton",
        "textButton",
      ],
      button_type_value: `<mo-row>
  <mo-button>默认按钮</mo-button>
  <mo-button type="primary">基本按钮</mo-button>
  <mo-button type="neutral">中性按钮</mo-button>
  <mo-button type="success">成功按钮</mo-button>
  <mo-button type="warning">警告按钮</mo-button>
  <mo-button type="danger">危险按钮</mo-button>
</mo-row>

<mo-row>
  <mo-button plain>朴素按钮</mo-button>
  <mo-button type="primary" plain>基本按钮</mo-button>
  <mo-button type="neutral" plain>中性按钮</mo-button>
  <mo-button type="success" plain>成功按钮</mo-button>
  <mo-button type="warning" plain>警告按钮</mo-button>
  <mo-button type="danger" plain>危险按钮</mo-button>
</mo-row>

<mo-row>
  <mo-button round>圆角按钮</mo-button>
  <mo-button type="primary" round>基本按钮</mo-button>
  <mo-button type="neutral" round>中性按钮</mo-button>
  <mo-button type="success" round>成功按钮</mo-button>
  <mo-button type="warning" round>警告按钮</mo-button>
  <mo-button type="danger" round>危险按钮</mo-button>
</mo-row>

<mo-row>
  <mo-button icon="time" circle></mo-button>
  <mo-button type="primary" icon="time" circle></mo-button>
  <mo-button type="neutral" icon="time" circle></mo-button>
  <mo-button type="success" icon="time" circle></mo-button>
  <mo-button type="warning" icon="time" circle></mo-button>
  <mo-button type="danger" icon="time" circle></mo-button>
</mo-row>`,
      button_disabled_value: `<mo-row>
  <mo-button disabled>默认按钮</mo-button>
  <mo-button type="primary" disabled>基本按钮</mo-button>
  <mo-button type="neutral" disabled>中性按钮</mo-button>
  <mo-button type="success" disabled>成功按钮</mo-button>
  <mo-button type="warning" disabled>警告按钮</mo-button>
  <mo-button type="danger" disabled>危险按钮</mo-button>
</mo-row>

<mo-row>
  <mo-button plain disabled>朴素按钮</mo-button>
  <mo-button type="primary" plain disabled>基本按钮</mo-button>
  <mo-button type="neutral" plain disabled>中性按钮</mo-button>
  <mo-button type="success" plain disabled>成功按钮</mo-button>
  <mo-button type="warning" plain disabled>警告按钮</mo-button>
  <mo-button type="danger" plain disabled>危险按钮</mo-button>
</mo-row>`,
      button_text_value: `<mo-button type="text">文字按钮</mo-button>
<mo-button type="text" color="#4b9bf8">文字按钮</mo-button>
<mo-button type="text" disabled>文字按钮</mo-button>`,
      button_size_value: `<mo-button size="large">大型按钮</mo-button>
<mo-button size="medium">中等按钮</mo-button>
<mo-button size="small">小型按钮</mo-button>
<mo-button size="mini">迷你按钮</mo-button>`,
      button_icon_value: `<mo-button type="primary" icon="time"></mo-button>
<mo-button type="primary" icon="search">搜索</mo-button>
<mo-button type="primary" icon="save-as" reverse>另存为</mo-button>`,
    };
  }
};
</script>

<style lang="less" scoped>
.button-view {
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
  #button-type {
    .disc();
  }
  #button-text {
    .disc();
  }
  /deep/.mo-row {
    margin-bottom: 10px;
  }
}
</style>