import MoContainer from "./src/container";

MoContainer.install = Vue => {
  Vue.component(MoContainer.name, MoContainer);
};

export default MoContainer;