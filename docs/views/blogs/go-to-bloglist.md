---
author: sanmzh
title: 首页向下
categories: [blogs]
tags: [blog-style]
date: 2021-03-08 15:22:40
---

<Boxx changeTime="30000"/>

::: tip 提示
首页点击向下箭头图标，自动滚动到博客列表位置（使用`a标签锚点功能实现`）
:::

<!-- more -->

## 新增html元素
找到首页`README.md`文件
```js
// 文件最下面新增代码
<script>
export default {
  props: ['slot-key'],
  mounted () {
    const anchorNode = document.createElement('a')
    anchorNode.id = 'homeBlog'
    const jumpNode = document.createElement('a')
    jumpNode.href = '#homeBlog'
    jumpNode.className = 'home-more'

    const pDom = document.querySelector(`.home-blog`)
    const refDom = document.querySelector(`.home-blog-wrapper`)
    pDom.insertBefore(anchorNode ,refDom)
    document.querySelector(`.hero`)
      .appendChild(jumpNode)
  }
}
</script>
```
## 新增样式
在`sytles/index.styl`文件新增,或首页脚本代码上面新增
```css
/* index.style */

.home-more:link, .home-blog .home-more:visited {
  text-decoration: none;
}

.home-blog .home-more {
  width: 0;
  height: 0;
  margin: 12rem auto 0;
  display: block;
  position: absolute;
  -webkit-animation: float-in 3s 1s infinite;
  animation: float-in 3s 1s infinite;
}

.home-blog .home-more:after {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 50%;
  top: 20vh;
  content: "";
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: translateX(-50%) rotate(135deg);
}

@keyframes float-in{
  0%{transform:translateY(0)}
  20%{transform:translateY(0)}
  50%{transform:translateY(-30px)}
  75%{transform:translateY(0)}
  to{transform:translateY(0)}
}
```