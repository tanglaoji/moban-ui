import Vue from "vue"
import VueI18n from "vue-i18n"

Vue.use(VueI18n)

// 国际化
const i18n = new VueI18n({
  locale: "zh_CN",
  messages: {
    zh_CN: require("./modules/zh_CN"), // 中文语言包
    en_US: require("./modules/en_US")  // 英文语言包
  }
})

export default i18n