<template>
  <div class="code-display-area" :style="{ height }">
    <code-preview v-model="preview_value" :height="previewHeight" />
    <div class="editor-container flex-all-c" :style="`height: calc(100% - ${previewHeight})`">
      <code-editor v-model="editor_value" language="html" @change="getEditorValue" />
      <code-block v-model="data_value" :border="false" v-if="data_value != ''" />
    </div>
  </div>
</template>

<script>
import CodeBlock from "./CodeBlock.vue";
import CodeEditor from "./CodeEditor.vue";
import CodePreview from "./CodePreview.vue";
export default {
  name: "CodeDisplayArea",
  components: { CodeEditor, CodePreview, CodeBlock },
  props: {
    value: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: "500px"
    },
    previewHeight: {
      type: String,
      default: "200px"
    },
    dataValue: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      data_value: "",
      editor_value: "",
      preview_value: "",
    };
  },
  created() {
    this.data_value = this.dataValue;
    this.preview_value = this.editor_value = this.value;
  },
  methods: {
    getEditorValue(val) {
      this.preview_value = val;
    }
  },
};
</script>

<style lang="less" scoped>
.code-display-area {
  display: flex;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 80px;
  flex-direction: column;
  border: 1px solid #eaeaeb;
  .code-preview {
    border-bottom: 1px solid #eaeaeb;
  }
  .editor-container {
    .code-editor {
      flex: 1;
    }
    .code-block {
      flex: 1;
    }
  }
}
</style>
