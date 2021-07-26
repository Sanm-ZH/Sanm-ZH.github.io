---
author: sanmzh
title: 盒子模型
categories: [Css]
tags: [style,css]
date: 2021-04-25 10:21:18
---

<Boxx changeTime="30000"/>

:::tip 前言
所有HTML元素可以看作盒子，在CSS中，`"box model"`这一术语是用来设计和布局时使用。

CSS盒模型本质上是一个盒子，封装周围的`HTML`元素，它包括：**边距**，**边框**，**填充**，和**实际内容**。

盒模型允许我们在其它元素和周围元素边框之间的空间放置元素。
:::

- **Margin**(外边距) - 清除边框外的区域，外边距是透明的。
- **Border**(边框) - 围绕在内边距和内容外的边框。
- **Padding**(内边距) - 清除内容周围的区域，内边距是透明的。
- **Content**(内容) - 盒子的内容，显示文本和图像。

### 块级盒子
定义成块级的（`block`）盒子：
- 盒子会在内联的方向上扩展并占据父容器在该方向上的所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽
- 每个盒子都会换行
- `width` 和 `height` 属性可以发挥作用
- **内边距**（`padding`）, **外边距**（`margin`） 和 **边框**（`border`） 会将其他盒子从当前盒子周围`“推开”`

### 内联盒子
定义成内联（`inline box`）的盒子：
- 盒子不会产生换行。
- `width` 和 `height` 属性将不起作用。
- 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 `inline` 状态的盒子推开。
- 水平方向的内边距、外边距以及边框会被应用且会把其他处于 `inline` 状态的盒子推开。

### 替代 IE 盒模型
将元素设置为 `box-sizing: border-box` 来实现
```css
.box {
    box-sizing: border-box;
}
```