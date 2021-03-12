---
author: sanmzh
title: Markdown布局样式自定义
categories: [blogs]
tags: [博客自定义, VueJS, VuePress]
date: 2021-03-12 15:12:16
---

<Boxx changeTime="30000"/>

::: tip 提示
vuepress md文章布局样式自定义
:::

<!-- more -->

## 实现原理
`vuepress-theme-reco` 中的md文件会通过 `vuepress-theme-reco`包中的`vue`文件生成对应的页面文件，从而只有我们配置一个新的文件在他的包内，并通过关键字，让你配置的文件来生成页面文件。

## 实现过程
### 配置`Front Matter`调用对应的配置vue文件
```md
---
aboutP: true
tagline: 此心若能再无牵挂</br>道一句我心光明
bgImage: /about.jpg
bgImageStyle: {
  color: '#fff',
  text-algin: center,
  overflow: hidden,
  height: calc(50vh)
}
---
```
其中的`aboutP: true`就对应上了下面代码中的`$frontmatter.aboutP`，然后就会调用对应的`vue`文件。

```js
// node_modules/vuepress-theme-reco/layouts/Layout.vue
<template>
  <Common
    :sidebarItems="sidebarItems"
    :recoShowModule="recoShowModule"
  >
    <component
      v-if="$frontmatter.home"
      :is="homeCom"
    />
    <AboutPage v-else-if="$frontmatter.aboutP" />
    <OtherPage v-else-if="$frontmatter.otherP" />
    <Page
      v-else
      :sidebar-items="sidebarItems"
    />
    <Footer
      v-if="$frontmatter.home"
      class="footer"
    />
  </Common>
</template>
```
### 新增vue配置文件
在`components`文件夹新增对应`vue`文件。
```js
// node_modules/vuepress-theme-reco/components/AboutPage.vue
<template>
  <div>
    <div
      class="about-head-img-cont"
      :style="{ ...bgImageStyle }"
    >
      <ModuleTransition delay="0.08">
        <p
          v-if="$frontmatter.tagline !== null"
          class="description"
          v-html="$frontmatter.tagline || $description || 'Welcome to your vuePress-theme-reco site'"
        >
        </p>
      </ModuleTransition>
      <component
        v-if="bubbles"
        :is="bubbles"
        :options="options"
        style="position: absolute;top: auto;left: 0px;pointer-events: none;bottom: 0px;"
      />
    </div>
    <ModuleTransition delay="0.08">
      <Content class="about-content-cont" />
    </ModuleTransition>
  </div>
</template>

<script>
import { ModuleTransition } from "@vuepress-reco/core/lib/components";

export default {
  components: { ModuleTransition },
  data() {
    return {
      bubbles: null,
      options: {},
    };
  },
  computed: {
    bgImageStyle() {
      const initBgImageStyle = {
        textAlign: "center",
        overflow: "hidden",
        background: `
          url(${
            this.$frontmatter.bgImage
              ? this.$withBase(this.$frontmatter.bgImage)
              : require("../images/bg.svg")
          }) center/cover no-repeat
        `,
      };
      const { bgImageStyle } = this.$frontmatter;

      return bgImageStyle
        ? { ...initBgImageStyle, ...bgImageStyle }
        : initBgImageStyle;
    },
  },
  mounted() {
    import("vue-canvas-effect/src/components/bubbles").then((module) => {
      this.bubbles = module.default;
    });
  },
};
</script>
```
- `<Content />`组件会自动将md文件的内容渲染在自身容器下
- 通过`Front Matter`关键字可以很方便的传递一些信息，如：`bgImage`&`bgImageStyle`等

> 具体效果可以请参考我的博客 [关于我](https://sanm-zh.gitee.io/views/about/)页面