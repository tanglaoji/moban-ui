<template>
  <div class="top-text-area">
    <div class="type">{{type}}</div>
    <div class="title">{{title}}</div>
    <div class="description">{{description}}</div>
  </div>
</template>

<script>
export default {
  name: "TopTextArea",
  props: {
    type: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="less" scoped>
.top-text-area {
  min-height: 120px;
  margin-bottom: 32px;
  box-sizing: border-box;
  border-bottom: 1px solid #ededee;
  .type {
    font-size: 18px;
    font-weight: 500;
    white-space: nowrap;
    letter-spacing: 1px;
  }
  .title {
    margin: 20px 0;
    font-size: 38px;
    font-weight: bold;
    white-space: nowrap;
  }
  .description {
    color: gray;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 20px;
  }
}
</style>
