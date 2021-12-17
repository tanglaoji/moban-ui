<template>
  <div class="code-editor" :style="{ height }">
    <div class="editor-run-panel flex-ver-c" v-if="!readOnly">
      <span>可实时编译</span>
      <i class="mo-icon-refresh" @click="handleRefresh" style="margin: 0 10px;font-weight: bold;"></i>
      <i class="mo-icon-right"></i>
    </div>
    <div ref="monaco" class="editor-area"></div>
  </div>
</template>

<script>
export default {
  name: "CodeEditor",
  props: {
    value: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: "javascript"
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 500
    },
    height: String,
  },
  data() {
    return {
      monaco_value: "",
      monaco_instance: null,
      lock: false,
      timer: null,
    };
  },
  watch: {
    value() {
      if (this.monaco_instance) {
        this.monaco_instance.dispose(); //使用完成销毁实例
        this.monaco_instance = null;
      }
      this.init();
    }
  },
  mounted() {
    this.init();
  },
  destroyed() {
    this.monaco_instance.dispose(); //使用完成销毁实例
  },
  methods: {
    init() {
      this.monaco_value = this.value;
      this.monaco_instance = this.$monaco.editor.create(
        this.$refs["monaco"],
        {
          value: this.monaco_value,
          language: this.language,
          readOnly: this.readOnly,
          theme: "moban",
          tabSize: 2,                              // 缩进长度
          lineNumbers: "off",                      // 行号
          scrollbar: {                             // 滚动条设置
            horizontalScrollbarSize: 6,
            verticalScrollbarSize: 6
          },
          acceptSuggestionOnCommitCharacter: true, // 接受关于提交字符的建议
          autoClosingBrackets: "always",           // 是否自动添加结束括号(包括中括号)
          autoClosingDelete: "always",             // 是否自动删除结束括号(包括中括号)
          autoClosingOvertype: "always",           // 是否关闭改写 即使用insert模式时是覆盖后面的文字还是不覆盖后面的文字
          autoClosingQuotes: "always",             // 是否自动添加结束的单引号/双引号
          autoIndent: true,                        // 控制编辑器在用户键入、粘贴、移动或缩进行时是否应自动调整缩进
          automaticLayout: true,                   // 自动布局
          autoSurround: "never",                   // 是否应自动环绕选择
          copyWithSyntaxHighlighting: true,        // 是否应将语法突出显示复制到剪贴板中 即 当你复制到word中是否保持文字高亮颜色
          cursorSmoothCaretAnimation: true,        // 是否启用光标平滑插入动画  当你在快速输入文字的时候 光标是直接平滑的移动还是直接"闪现"到当前文字所处位置
          cursorSurroundingLines: 0,               // 光标环绕行数 当文字输入超过屏幕时 可以看见右侧滚动条中光标所处位置是在滚动条中间还是顶部还是底部 即光标环绕行数 环绕行数越大 光标在滚动条中位置越居中
          cursorSurroundingLinesStyle: "all",      // "default" | "all" 光标环绕样式
          minimap: {                               // 预览图设置
            enabled: false                         // 是否启用预览图
          },
          folding: true,                           // 是否启用代码折叠
          showFoldingControls: "mouseover",        // 展示折叠控件
          links: true,                             // 是否点击链接
          overviewRulerBorder: false,              // 是否应围绕概览标尺绘制边框
          roundedSelection: false,                 // 选区是否有圆角
          scrollBeyondLastLine: false,             // 设置编辑器是否可以滚动到最后一行之后
        }
      );
      // 监听 editor 内容变化
      this.monaco_instance.onDidChangeModelContent(() => {
        if (!this.lock) {
          this.lock = true;
          this.timer = setTimeout(() => {
            this.lock = false;
            this.$emit("change", this.monaco_instance.getValue());
            clearTimeout(this.timer)
          }, this.delay)
        }
      })
    },
    handleRefresh() {
      this.monaco_instance.getModel().setValue(this.value);
    }
  },
};
</script>

<style lang="less" scoped>
.code-editor {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-top: 10px;
  position: relative;
  border-radius: 4px;
  background: #f9f9f9;
  box-sizing: border-box;
  .editor-area {
    height: 100% !important;
    /deep/.view-line {
      .mtk1 {
        color: #333333;
      }
      .mtk4 {
        color: #333333;
      }
      .mtk6 {
        color: #df0002;
      }
      .mtk20 {
        color: #008080;
      }
    }
  }
  .editor-run-panel {
    right: 0;
    top: -22px;
    z-index: 1;
    height: 20px;
    color: #333;
    font-size: 12px;
    padding: 1px 10px;
    position: absolute;
    transition: all 0.3s;
    border-radius: 0 0 0 6px;
    background: rgba(0, 0, 0, 0.2);
    span {
      cursor: default;
    }
    i {
      cursor: pointer;
    }
  }
  &:hover {
    .editor-run-panel {
      top: 0;
    }
  }
}
</style>