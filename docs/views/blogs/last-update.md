---
author: sanmzh
title: 修复最后更新时间
categories: [blogs]
tags: [blog-style]
date: 2021-03-27 01:18:08
---

<Boxx changeTime="30000"/>

> 因为该vuepress主题 last-update `page.vue`文件中书写存在问题导致无法正常显示

### 修改
```js
// node_modules/vuepress-theme-reco/components/Page.vue
lastUpdated () {
    const dayjs = require('dayjs')
    require('dayjs/locale/zh-cn')
    const relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)
    return dayjs(this.$page.lastUpdated).locale('zh-cn').fromNow()
    // return new Date(this.$page.lastUpdated).toLocaleString()
}
```

### 创建时间问题
::: tip
创建时间如果出现时区问题，可以试试下面那种方法解决<br>
(用户写在文章顶部的时间经过处理会变成utc时间，如果在本地化会出现误差，用户可以把时间转换成作者的时区)
:::
```js
// node_modules/vuepress-theme-reco/components/PageInfo.vue
filters: {
    formatDateValue (value) {
        const dayjs = require('dayjs')
        const utc = require('dayjs/plugin/utc')
        const timezone = require('dayjs/plugin/timezone')
        dayjs.extend(utc)
        dayjs.extend(timezone)
        const date = dayjs.tz(value, 'Asia/Shanghai')
        let localDate = new Date(date).toLocaleString()
        if (value.split(' ').length === 1) localDate = localDate.split(' ')[0]
        return localDate
   }
}
```
将创建时间直接变成当地时区然后显示在电脑上