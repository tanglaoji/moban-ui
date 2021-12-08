<template>
  <div class="mo-image-viewer" :style="{zIndex }">
    <span class="mo-image-viewer__btn mo-image-viewer__close" @click="handleHide">
      <i class="mo-icon-close"></i>
    </span>
    <span class="mo-image-viewer__btn mo-image-viewer__prev" @click="handlePrev">
      <i class="mo-icon-arrow-left"></i>
    </span>
    <span class="mo-image-viewer__btn mo-image-viewer__next" @click="handleNext">
      <i class="mo-icon-arrow-right"></i>
    </span>
    <div class="mo-image-viewer__btn mo-image-viewer__actions">
      <i class="mo-icon-rotate-left" @click="handleActions('left')"></i>
      <i class="mo-icon-rotate-right" @click="handleActions('right')"></i>
      <i></i>
      <i :class="screen_icon" @click="handleActions('screen')"></i>
      <i></i>
      <i class="mo-icon-enlarge" @click="handleActions('enlarge')"></i>
      <i class="mo-icon-narrow" @click="handleActions('narrow')"></i>
    </div>
    <div class="mo-image-viewer__canvas">
      <img class="mo-image-viewer__img" :style="`${width_height}transform: scale(${scale}) rotate(${rotate}deg);`" @error="handleImageError" :src="previewSrcList[current_index]">
    </div>
  </div>
</template>

<script>
export default {
  name: "MoImageViewer",
  props: {
    previewSrcList: {
      type: Array,
      default: () => [],
    },
    onClose: {
      type: Function,
      default: () => {},
    },
    zIndex: {
      type: Number,
      default: 2000,
    },
    loop: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      current_index: 0,
      screen_icon: "mo-icon-fullscreen",
      width_height: "max-height: 100%;max-width: 100%;",
      scale: 1,
      rotate: 0,
    };
  },
  methods: {
    handlePrev() {
      if (this.current_index > 0 && !this.loop) this.current_index--;
      else {
        if (this.current_index > 0) this.current_index--;
        else this.current_index = this.previewSrcList.length - 1;
      }
    },
    handleNext() {
      if (this.current_index < this.previewSrcList.length - 1 && !this.loop)
        this.current_index++;
      else {
        if (this.current_index < this.previewSrcList.length - 1)
          this.current_index++;
        else this.current_index = 0;
      }
    },
    handleHide() {
      this.onClose();
    },
    handleImageError(e) {
      e.target.alt = "加载失败";
    },
    handleActions(action) {
      const { multiple, angle } = { multiple: 0.2, angle: 90 };
      switch (action) {
        case "enlarge":
          this.scale = parseFloat((this.scale + multiple).toFixed(3));
          break;
        case "narrow":
          if (this.scale > 0.2)
            this.scale = parseFloat((this.scale - multiple).toFixed(3));
          break;
        case "left":
          this.rotate -= angle;
          break;
        case "right":
          this.rotate += angle;
          break;
        case "screen":
          this.screen_icon =
            this.screen_icon == "mo-icon-fullscreen"
              ? "mo-icon-real-size"
              : "mo-icon-fullscreen";
          this.width_height =
            this.width_height == "" ? "max-height: 100%;max-width: 100%;" : "";
          break;
      }
    },
  },
};
</script>
