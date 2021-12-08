import MoMain from "./src/main";

MoMain.install = Vue => {
  Vue.component(MoMain.name, MoMain);
};

export default MoMain;