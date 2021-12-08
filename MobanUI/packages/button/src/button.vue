<template>
  <button class="mo-button" :class="type == '' ? '' : `mo-button--${type}`" @click="handleClick">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "MoButton",
  props: {
    type: {
      type: String,
      default: "",
    },
  },
  computed: {
    splicing() {
      return this.type == "" ? "" : "--";
    },
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>
