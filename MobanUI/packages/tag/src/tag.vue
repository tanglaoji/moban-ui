<script>
export default {
  name: "MoTag",
  methods: {
    handleClose(event) {
      event.stopPropagation();
      this.$emit("close", event);
    },
    handleClick(event) {
      this.$emit("click", event);
    },
  },
  render() {
    return <span class="mo-tag" on-click={this.handleClick}></span>;
  },
};
</script>
