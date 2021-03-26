---
author: sanmzh
title: 最后更新时间
categories: [blogs]
tags: [博客自定义]
date: 2021-03-27 01:18:08
---

<Boxx changeTime="30000"/>

> 因为该vuepress主题 last-update `page.vue`文件中书写存在问题导致无法正常显示

## 修改
```js
// node_modules/vuepress-theme-reco/components/Page.vue
...
lastUpdated () {
    const dayjs = require('dayjs')
    require('dayjs/locale/zh-cn')
    const relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)
    return dayjs(this.$page.lastUpdated).locale('zh-cn').fromNow()
    // return new Date(this.$page.lastUpdated).toLocaleString()
}
...
```