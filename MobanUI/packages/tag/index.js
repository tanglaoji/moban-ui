import MoTag from "./src/tag";

MoTag.install = Vue => {
  Vue.component(MoTag.name, MoTag);
};

export default MoTag;
