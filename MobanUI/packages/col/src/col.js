export default {
  name: "MoCol",
  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: "div"
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== "MoRow") {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    }
  },
  render(h) {
    let classList = [];
    const style = {};

    if (this.gutter) {
      style.paddingLeft = style.paddingRight = `${this.gutter / 2}px`;
    }

    ["span", "offset", "pull", "push"].forEach(prop => {
      if (this[prop] || this[prop] === 0) {
        classList.push(
          prop !== "span" ? `mo-col-${prop}-${this[prop]}` : `mo-col-${this[prop]}`
        );
      }
    });

    ["xs", "sm", "md", "lg", "xl"].forEach(size => {
      if (typeof this[size] === "number") {
        classList.push(`mo-col-${size}-${this[size]}`);
      } else if (typeof this[size] === "object") {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== "span" ? `mo-col-${size}-${prop}-${props[prop]}` : `mo-col-${size}-${props[prop]}`
          );
        });
      }
    });

    return h(this.tag, {
      class: ["mo-col", ...classList],
      style
    }, this.$slots.default);
  }
};
