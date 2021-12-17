<template>
  <div class="mo-button-group" :class="{ 'fillet': !fillet }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MoButtonGroup",
  props: {
    space: {
      type: Number,
      default: 1
    },
    size: {
      type: String,
      default: "medium",
    },
    fillet: Boolean,
  },
  computed: {
    countSize() {
      if (this.size !== "large" && this.size !== "medium" && this.size !== "small" && this.size !== "mini" && this.size !== "") {
        console.warn("The size attribute only supports large, medium, small and mini!");
        return "left";
      }
      return this.size;
    },
  },
  mounted() {
    const space = this.space < 0 ? 1 : this.space;
    if (this.space < 0) console.warn("The space attribute must be greater than 0!");

    const child = this.$children.filter((item) => { return item.$options.name === "MoButton" });
    if (child.length === 0) {
      console.warn("The MoButton component does not exist in the MoButtonGroup component!");
    } else if (child.length === 1) {
      child[0].$el.style.borderRadius = 0;
    } else if (child.length === 2) {
      child[0].$el.style.marginRight = `${space / 2}px`;
      child[1].$el.style.marginLeft = `${space / 2}px`;
    } else {
      for (let index = 0, len = child.length; index < len; index++) {
        child[index].$el.style.marginLeft = child[index].$el.style.marginRight = `${space / 2}px`;
      }
    }
  }
};
</script>
