import MoButton from "./src/button";

MoButton.install = Vue => {
  Vue.component(MoButton.name, MoButton);
};

export default MoButton;