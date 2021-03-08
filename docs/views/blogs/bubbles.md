---
author: sanmzh
title: 气泡特效
categories: [blogs]
tags: [博客自定义]
date: 2021-03-08 15:06:04
---

<Boxx changeTime="30000"/>

## 安装插件
```bash
npm i vue-canvas-effect -D
```

## 配置
1. 然后在目录下的`node_moudles/vuepress-theme-reco/components/Homeblog.vue`中引入

```js
// Homeblog.vue
mounted () {
    // 引入
    import('vue-canvas-effect/src/components/bubbles').then(module => {
      this.bubbles=module.default
    })

    this.recoShow = true
    this._setPage(this._getStoragePage())
}
```
2. 配置组件变量
```js
// Homeblog.vue
data () {
    return {
        recoShow: false,
        currentPage: 1,
        tags: [],
        // 下面两行为配置
        bubbles: null,
        options: {}
    }
},
```
3. 写入`template`生效
```html
<!-- Homeblog.vue -->
<div class="hero" :style="{ ...bgImageStyle }">
...
...
    <component v-if="bubbles" :is="bubbles" :options="options"></component>
</div>
````
> tips: 放在```class="hreo"```的容器下