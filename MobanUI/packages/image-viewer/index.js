import MoImageViewer from "./src/image-viewer";

MoImageViewer.install = Vue => {
  Vue.component(MoImageViewer.name, MoImageViewer);
};

export default MoImageViewer;