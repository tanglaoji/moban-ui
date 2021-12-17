export default {
  name: "MoRow",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: "start"
    },
    align: String
  },
  render(h) {
    const style = {};
    if (this.gutter) {
      style.marginLeft = style.marginRight = `-${this.gutter / 2}px`;
    }
    return h(this.tag, {
      class: ["mo-row", this.justify !== "start" ? `is-justify-${this.justify}` : "",
        this.align ? `is-align-${this.align}` : "",
        { "mo-row--flex": this.type === "flex" }
      ],
      style
    }, this.$slots.default);
  }
};
