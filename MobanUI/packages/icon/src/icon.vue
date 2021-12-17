<template>
  <i :class="`mo-icon-${type}`" :style="countStyle"></i>
</template>

<script>
export default {
  name: "MoIcon",
  props: {
    type: String,
    bold: Boolean,
    size: [String, Number]
  },
  computed: {
    countStyle() {
      if (this.size && this.bold) {
        return {
          fontSize: `${this.size}px`,
          fontWeight: "bold"
        }
      } else if (this.size && !this.bold) {
        return {
          fontSize: `${this.size}px`
        }
      } else if (!this.size && this.bold) {
        return {
          fontSize: `${this.size}px`,
          fontWeight: "bold"
        }
      } else {
        return {}
      }
    }
  }
};
</script>