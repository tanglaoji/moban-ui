<template>
  <div class="code-block" :class="[{'all-border' : border}, {'left-border' : !border}]" v-highlight>
    <div class="lang-javascript" v-html="value"></div>
  </div>
</template>

<script>
export default {
  name: "CodeBlock",
  props: {
    value: {
      type: String,
      default: ""
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {

    };
  },
  mounted() {

  },
  methods: {

  },
};
</script>

<style lang="less" scoped>
.code-block {
  height: 100%;
  margin: 34px 0;
  font-size: 13px;
  min-width: 300px;
  line-height: 20px;
  padding: 16px 20px;
  background: #fcfcfc;
  box-sizing: border-box;
}
.all-border {
  border-radius: 4px;
  border: 1px solid #eaeaeb;
}
.left-border {
  border-left: 1px solid #eaeaeb;
}
</style>