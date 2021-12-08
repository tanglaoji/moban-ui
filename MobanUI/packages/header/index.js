import MoHeader from './src/header';

/* istanbul ignore next */
MoHeader.install = function (Vue) {
  Vue.component(MoHeader.name, MoHeader);
};

export default MoHeader;
