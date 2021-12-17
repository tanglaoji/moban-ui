import MoIcon from './src/icon';

/* istanbul ignore next */
MoIcon.install = function (Vue) {
  Vue.component(MoIcon.name, MoIcon);
};

export default MoIcon;
