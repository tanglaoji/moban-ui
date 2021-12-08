import MoAside from './src/aside';

/* istanbul ignore next */
MoAside.install = function(Vue) {
  Vue.component(MoAside.name, MoAside);
};

export default MoAside;
