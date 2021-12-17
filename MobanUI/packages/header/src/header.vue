<template>
  <header class="mo-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "MoHeader",
  props: {
    height: {
      type: String,
      default: "60px",
    },
  },
};
</script>