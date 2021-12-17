import MoDropdownMenu from './src/dropdown-menu';

/* istanbul ignore next */
MoDropdownMenu.install = function (Vue) {
  Vue.component(MoDropdownMenu.name, MoDropdownMenu);
};

export default MoDropdownMenu;
