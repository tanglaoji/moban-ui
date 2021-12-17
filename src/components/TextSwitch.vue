<template>
  <div ref="switch" class="text-switch">
    <div ref="left" class="left-text" @click="handleSlider(true)">{{leftText}}</div>
    <div ref="slider" class="slider" :class="value ? 'left' : 'right'"></div>
    <div ref="right" class="right-text" @click="handleSlider(false)">{{rightText}}</div>
  </div>
</template>

<script>
export default {
  name: "TextSwitch",
  props: {
    leftText: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      value: true
    };
  },
  methods: {
    handleSlider(bool) {
      if (bool) {
        this.$refs.left.style.color = "#000";
        this.$refs.right.style.color = "#00000080";
        this.$refs.slider.style.left = "5px";
      } else {
        this.$refs.left.style.color = "#00000080";
        this.$refs.right.style.color = "#000";
        this.$refs.slider.style.left = `${this.$refs.switch.clientWidth / 2 + 2.5}px`;
      }
      this.value = bool;
      this.$emit("change", bool);
    }
  }
};
</script>

<style lang="less" scoped>
.text-switch {
  padding: 5px;
  height: 28px;
  font-size: 14px;
  min-width: 114px;
  position: relative;
  display: inline-flex;
  background-color: #f4f5f5;
  justify-content: space-between;
  .slider {
    flex: 1;
    top: 5px;
    position: absolute;
    transition: all 0.3s;
    width: calc(50% - 7.5px);
    background-color: #fff;
    height: calc(100% - 10px);
  }
  .left {
    left: 5px;
  }
  .right {
    right: 5px;
  }
  .left-text,
  .right-text {
    z-index: 1;
    height: 100%;
    display: flex;
    cursor: pointer;
    font-weight: bold;
    align-items: center;
    transition: all 0.3s;
    box-sizing: border-box;
    justify-content: center;
    width: calc(50% - 2.5px);
  }
  .right-text {
    color: #00000080;
  }
}
</style>