import MoCol from "./src/col";

MoCol.install = function (Vue) {
  Vue.component(MoCol.name, MoCol);
};

export default MoCol;

