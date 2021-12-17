// component
import MoButton from "./packages/button"
import MoButtonGroup from "./packages/button-group"
import MoTag from "./packages/tag"
import MoImageViewer from "./packages/image-viewer"
import MoContainer from "./packages/container"
import MoHeader from "./packages/header"
import MoMain from "./packages/main/index"
import MoAside from "./packages/aside"
import MoRow from "./packages/row"
import MoIcon from "./packages/icon"

// filter
import colorFilter from "./lib/filter/colorFilter"

// all component
const components = [
  MoButton,
  MoButtonGroup,
  MoTag,
  MoImageViewer,
  MoContainer,
  MoHeader,
  MoMain,
  MoAside,
  MoRow,
  MoIcon
]

const filters = [
  ...colorFilter
]

// register
const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  filters.forEach(filter => {
    Vue.filter(filter.name, filter.func)
  })
}

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}