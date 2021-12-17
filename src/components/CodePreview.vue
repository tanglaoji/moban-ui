<script type="text/jsx">
export default {
  name: "CodePreview",
  props: {
    value: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: "200px"
    },
  },
  data() {
    return {
      reg: /<([a-z]+)(\s*\w*?\s*=\s*".+?")*(\s*?>[\s\S]*?(<\/\1>)+|\s*\/>)/i,
    };
  },
  render(h) {
    const temp = this.value.replace(/-([a-z])/g, (all, i) => {// 正则替换
      return i.toUpperCase();
    });
    if (this.reg.test(temp)) {
      return h({
        template: `<div class="code-preview" style="height: ${this.height}">${temp.replace(/([A-Z])/g, '-$1').toLowerCase()}</div>`
      })
    } else {
      if (!this.value.includes("<") && !this.value.includes(">")) {
        return h({
          template: `<div class="code-preview" style="height: ${this.height}">${this.value.replace(/([A-Z])/g, '-$1').toLowerCase()}</div>`
        })
      } else {
        return h({
          template: `<div class="code-preview" style="height: ${this.height}"></div>`
        })
      }
    }
  },
};
</script>

<style lang="less" scoped>
.code-preview {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>