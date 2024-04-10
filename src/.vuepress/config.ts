import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "LX Music Api Server",
  description: "LX Music Api Server的文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
