<template>
  <button class="mo-button" :class="[
    countType == '' ? 'mo-button--default' : `mo-button--${type}`,
    countSize == '' ? `mo-button--large` : `mo-button--${size}`,
    { 'plain': plain,
      'round': round,
      'circle': circle,
      'reverse': reverse,
      'disabled': disabled
    }]" @click="handleClick" :disabled="disabled" @mousedown="handleChangeColor('down')"
    @mouseup="handleChangeColor('up')" @mouseover="handleChangeColor('over')" @mouseleave="handleChangeColor('leave')">
    <i :class="`mo-icon-${icon.replace(/([A-Z])/g,'-$1').toLowerCase()}`" v-if="icon && !loading"
      :style="countStyle"></i>
    <i class="mo-icon-loading" v-if="loading"></i>
    <span v-if="$slots.default" :style="end_color">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "MoButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "medium",
    },
    reverse: Boolean,
    color: String,
    disabled: Boolean,
    loading: Boolean,
    icon: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
  },
  computed: {
    countType() {
      if (this.type !== "default" && this.type !== "primary" && this.type !== "neutral" && this.type !== "success" && this.type !== "warning" && this.type !== "danger" && this.type !== "text" && this.type !== "") {
        console.warn("The type attribute only supports primary, neutral, success, warning, danger and text!");
        return "default";
      }
      return this.type;
    },
    countSize() {
      if (this.$parent["size"] && this.$parent.$options.name && this.$parent.$options.name === "MoButtonGroup") {// 以父级尺寸作为标准
        return this.$parent["size"];
      } else {
        if (this.size !== "large" && this.size !== "medium" && this.size !== "small" && this.size !== "mini" && this.size !== "") {
          console.warn("The size attribute only supports large, medium, small and mini!");
          return "left";
        }
        return this.size;
      }
    },
    countStyle() {
      if (this.$slots.default) {
        return this.reverse ? "margin-left: 10px;" : "margin-right: 10px;";
      }
      return "";
    }
  },
  data() {
    return {
      end_color: "",
      rgb: [],
    };
  },
  mounted() {
    if (this.type === "text" && this.color) {
      this.rgb = this.hexToRgb(this.color);
      this.end_color = `color: rgba(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]}, ${0.8})`;
    }
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
    handleChangeColor(mouse) {
      if (this.type === "text" && this.color) {
        if (this.disabled) {
          this.end_color = `color: rgba(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]}, ${0.8})`;
        } else {
          switch (mouse) {
            case "down":
              this.end_color = `color: rgba(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]}, ${1})`;
              break;
            case "up":
              this.end_color = `color: rgba(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]}, ${0.8})`;
              break;
            case "over":
              this.end_color = `color: rgba(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]}, ${0.9})`;
              break;
            case "leave":
              this.end_color = `color: rgba(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]}, ${0.8})`;
              break;
          }
        }
      }
    },
    hexToRgb(hex) {
      if (typeof hex !== "string") return;
      // 16进制颜色值的正则
      let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      // 把颜色值变成小写
      let color = hex.toLowerCase();
      if (reg.test(color)) {
        // 如果只有三位的值，需变成六位，如：#fff => #ffffff
        if (color.length === 4) {
          let colorNew = "#";
          for (let i = 1; i < 4; i += 1) {
            colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
          }
          color = colorNew;
        }
        // 处理六位的颜色值，转为RGB
        let colorChange = [];
        for (let j = 1; j < 7; j += 2) {
          colorChange.push(parseInt("0x" + color.slice(j, j + 2)));
        }
        return colorChange;
      } else {
        return color;
      }
    }
  }
};
</script>
