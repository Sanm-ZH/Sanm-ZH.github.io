---
author: sanmzh
title: 看板娘提示对话
categories: [other]
tags: [kanbanniang, js-plugin]
date: 2021-04-01 13:34:56
---

<Boxx changeTime="30000"/>

::: tip
vuepress 看板娘插件 [详情](https://github.com/vuepress-reco/vuepress-plugin-kan-ban-niang)</br>
扩展一些提示对话功能
:::

### 新增提示对话
在`kanbanniang.vue`文件中混入一个js，对配置中的选项进行事件绑定
```js
// kanbanniang/index.js
...
'mouseover': [
    {
        'selector': '.abstract-wrapper .abstract-item',
        'text': ['想阅读一下这篇文章吗？']
    },
    {
        'selector': '.page a[href^="http"]',
        'text': ['要看看 <span style=\'color:#37aabb;\'>{text}</span> 么？']
    },
    {
        'selector': '.global-ui .reward',
        'text': ['要给我主人打赏吗？']
    },
    {
        'selector': '.global-ui .back-to-ceiling',
        'text': ['回到开始的地方吧']
    },
    {
        'selector': 'pre .code-copy-btn',
        'text': ['点击这里可以一键复制代码哟！']
    },
    {
        'selector': '.valine-wrapper',
        'text': ['人过留名，雁过留声！']
    }
],
'click': [
    {
        'selector': 'pre code',
        'text': ['这里可以被复制哦！']
    }
]
...
```
在混入的js中变量配置项中选择器绑定上对应事件，事件中将信息文字显示在看板娘的对话框内

### 问题解决
因为vuepress使用了vue-router，路由切换时，会导致事件失效，需要在路由切换后重新再次绑定；同时因为选择器的问题，最好是在html生成后在进行绑定。
```js
// kanbanniang.vue
...
// 监听路由变化（屏蔽一切参数，hash变化导致路由的变动重复绑定），再延时绑定
watch: {
    '$route' (oV, nV) {
        if(oV.path !== nV.path) {
            setTimeout(() => {
                this.handlerMouseover();
                this.handlerClick();
            }, 3000);
        }
    }
}
...
```