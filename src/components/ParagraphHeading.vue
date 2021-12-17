<template>
  <div class="paragraph-heading">
    <div class="flex-ver-c">
      <label :class="`title--${level}`">{{$t(`paragraphHeading.${title}`)}}</label>
      <span class="para" :class="`title--${level}`" @click="scrollIntoParaView(para)" v-if="para">&para;</span>
    </div>
    <div class="description" v-if="$slots.default">
      <slot></slot>
    </div>
    <blockquote v-if="blockquote != ''">{{blockquote}}</blockquote>
  </div>
</template>

<script>
export default {
  name: "ParagraphHeading",
  props: {
    level: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      default: "codeDemo"
    },
    para: {
      type: String,
      default: ""
    },
    blockquote: {
      type: String,
      default: ""
    },
  },
  methods: {
    scrollIntoParaView(para) {
      document.getElementById(para).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="less" scoped>
.paragraph-heading {
  width: 100%;
  margin: 54px 0 34px;
  blockquote {
    margin: 24px 0;
    font-size: 14px;
    color: #5e6d82;
  }
  .para {
    width: 28px;
    display: none;
    cursor: pointer;
    color: #4b9bf8;
    text-align: center;
    transition: all 0.3s;
    vertical-align: middle;
    box-sizing: border-box;
    &:hover {
      color: #002efc;
      display: inline-block;
    }
  }
  label {
    padding-bottom: 3px;
    &:hover ~ span {
      display: inline-block;
    }
  }
  .description {
    margin: 24px 0;
    font-size: 15px;
    color: #5e6d82;
  }
  .title--1 {
    font-size: 28px;
  }
  .title--2 {
    font-size: 24px;
  }
  .title--3 {
    font-size: 20px;
  }
  .title--4 {
    font-size: 16px;
  }
  .title--5 {
    font-size: 12px;
  }
}
</style>