<template>
  <aside class="mo-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: "MoAside",
  componentName: "MoAside",
  props: {
    width: {
      type: String,
      default: "300px",
    },
  },
};
</script>
