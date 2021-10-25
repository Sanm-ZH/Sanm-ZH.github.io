---
author: sanmzh
title: 当下要掌握的css技术
categories: [Css]
tags: [style,css]
date: 2021-10-25 14:16:15
---

<Boxx changeTime="30000"/>

:::tip 前言
未来常用，现在要掌握的一些 `Css` 特性；`SVG`图标、滚动特性、`Css`自定义属性、`Css`现代伪类、`JS in Css`、`Web Layout`、混合模式、`Css`计数器等等。
:::

### 滚动特性
- 自定义滚动条的外观
- `scroll-behavior`指容容器滚动行为，让滚动效果更丝滑
- `overscroll-behavior`优化滚动边界，特别是可以帮助我们滚动的穿透

在CSS中，我们可以使用-webkit-scrollbar来自定义滚动条的外观。该属性提供了七个伪元素：

- `::-webkit-scrollbar`：整个滚动条
- `::-webkit-scrollbar-button`：滚动条上的按钮（下下箭头）
- `::-webkit-scrollbar-thumb`：滚动条上的滚动滑块
- `::-webkit-scrollbar-track`：滚动条轨道
- `::-webkit-scrollbar-track-piece`：滚动条没有滑块的轨道部分
- `::-webkit-scrollbar-corner`：当同时有垂直和水平滚动条时交汇的部分
- `::-webkit-resizer`：某些元素的交汇部分的部分样式（类似textarea的可拖动按钮）


#### 自定义滚动条外观
```css
html {
    --maxWidth:1284px;
    scrollbar-color: linear-gradient(to bottom,#ff8a00,#da1b60);
    scrollbar-width: 30px;
    background: #100e17;
    color: #fff;
    overflow-x: hidden
}

html::-webkit-scrollbar {
    width: 30px;
    height: 30px
}

html::-webkit-scrollbar-thumb {
    background: -webkit-gradient(linear,left top,left bottom,from(#ff8a00),to(#da1b60));
    background: linear-gradient(to bottom,#ff8a00,#da1b60);
    border-radius: 30px;
    -webkit-box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25);
    box-shadow: inset 2px 2px 2px rgba(255,255,255,.25),inset -2px -2px 2px rgba(0,0,0,.25)
}

html::-webkit-scrollbar-track {
    background: linear-gradient(to right,#201c29,#201c29 1px,#100e17 1px,#100e17)
}
```

#### css自定义属性
```css
html {
  --diy-color: red;
}

h1 {
  color: var(--diy-color, blue); /* blue 为缺省值 */
}
```
自定义元素的定义由 `--` 开头，这样浏览器能够区分自定义属性和原生属性。假如只是定义了一个自定义元素和它的属性值，浏览器是不会做出反应的。如上面的代码， `html` 的字体颜色由 `color` 决定，但 `--theme-color` 对 `html` 没有作用。


### Css现代伪类
最新伪类：
- is
- where
- not
- has
- focus-visible
- focus-within
- empty
- blank

#### :is() 减少重复
```css
.cont1 .button:hover,
.cont2 .button:hover {
  opacity: 1;
}

/* is() */
:is(.cont1, .cont2) .button:hover {
  opacity: 1;
}
```

**注意**：浏览器还支持非标准的 `:-webkit-any()` 和 `:-moz-any()` 伪类，它们与 `:is()` 相似，但限制更多。`WebKit`在`2015`年弃用了 `:-webkit-any()` ，`Mozilla`已将`Firefox`的用户代理样式表更新为使用 `:is()` 而不是 `:-moz-any()`。

#### :where() 来保持低特殊性
`:where()` 伪类与 `:is()` 具有相同的语法和功能。它们之间的唯一区别是 `:where()` 不会增加整体选择器的特殊性（即某条CSS规则特殊性越高，它的样式越优先被采用）。

:::warning
`:where()` 伪类及其任何参数都不对选择器的特殊性有所帮助，它的特殊性始终为零
:::

### JS in CSS
使用CSS自定义属性的时候，可以通过JavaScript来操作自定义属性的值。其实还可以更强大一点，如果你对`CSS Houdini`熟悉的话，可以借助其特性，直接在CSS的代码中来操作CSS自定义属性

```css
:root {
  --property: document.write('hello world!');
}
```
```js
window.onload = () => {
  const doc = window.getComputedStyle(document.documentElement);
  const cssProp = doc.getPropertyValue('--property');
  new Function((cssProp))();
}
```

### Web layout
对于 `Web` 布局而言，前端就一直在探讨这方面的最优方式。早期的 `table` 布局，接着的 `float` 和 `position` 相关的布局，多列布局，`Flexbox` 布局和 `Grid` 布局等。`Flexbox` 和 `Grid`的出现，`Web`布局的灵活性越来越高。

CSS Grid中提供了很多强大的特性，比如：

- `fr`单位，可以很好的帮助我们来计算容器可用空间
- `repeat()`函数，允许我们给网格多个列指定相同的值。它也接受两个值：重复的次娄和重复的值
- `minmax()`函数，能够让我们用最简单的CSS控制网格轨道的大小，其包括一个最小值和一个最大值
- `auto-fill`和`auto-fit`，配合`repeat()`函数使用，可以用来替代重复次数，可以根据每列的宽度灵活的改变网格的列数
- `max-content`和`min-content`，可以根据单元格的内容来确定列的宽度
- `grid-suto-flow`，可以更好的让`CSS Grid`布局时能自动排列

结合这些功能点，布局会变得更轻松。比如我们要实现一个响应式的布局，很多时候都会依赖于媒体查询（`@media`）来处理，事实上，有了`CSS Grid Layout`之后，这一切变得更为简单，不需要依赖任何媒体查询就可以很好的实现响应式的布局。特别是当今这个时代，要面对的终端设备只会增加不会减少，那么希望布局更容易的适配这些终端的布局，那么`CSS Grid Layout`将会起到很大的作用。

`Grid`和`flex`都是面向未来的最佳布局方案。我们不应该探讨谁优谁劣，而是应该取长补短结合使用。

### 混合模式和滤镜

### CSS计数器
CSS计数器其实涉及到三个属性：`counter-increment`、`counter-reset` 和 `counter()`。一般情况都是配合`CSS`的伪元素`::before`和`::after`的`content`一起使用。

### SVG图标
对于`SVG`而言，它是一套独立而又成熟的体系，也有自己的相关规范（`Scalable Vecgtor Graphics 2`），即 `SVG2`。虽然该规范已经存在很久了，但很多有关于`SVG`相关的特性在不同的浏览器中得到的支持度也是有所不一致的。特别是SVG中的渐变和滤镜相关的特性。不过，随着技术的革新，在`Web`的应用当中`SVG`的使用越来越多，特别是`SVG` 图标相关的方面的运用。

- 最早通过`<img>`标签来引用图标（每个图标一个文件）

- 为了节省请求，提出了`Sprites`的概念，即将多个图标合并在一起，使用一个图片文件，借助`background`相关的属性来实现图标

- 图片毕竟是位图，面对多种设备终端，或者说更易于控制图标颜色和大小，开始在使用`Icon Font`来制作Web图标

- 当然，字体图标是解决了不少问题，但每次针对不同的图标的使用，需要自定义字体，也要加载相应的字体文件，相应的也带了一定的问题，比如说跨域问题，字体加载问题

- 随着`SVG`的支持力度越来越强，大家开始在思考`SVG`，使用`SVG`来制作图标。该技术能解决我们前面碰到的大部分问题，特别是在而对众多终端设备的时候，它的优势越发明显

- SVG和img有点类似，我们也可以借助`<symbol>`标签和`<use>`标签，将所有的`SVG`图标拼接在一起，有点类似于`Sprites`的技术，只不过在此称为SVG `Sprites`

```html
<svg width="0" height="0" display="none" xmlns="http://www.w3.org/2000/svg">
    <symbol id="half-circle" viewBox="0 0 106 57">...</symbol>
    <!-- .... -->
    <symbol id="icon-burger" viewBox="0 0 24 24">...</symbol>
</svg>
```

`SVG Sprites`和`img Sprites`有所不同，`SVG Sprites`就是一些代码（类似于HTML一样），估计没有接触过的同学会问，SVG Sprites对应的代码怎么来获取呢？其实很简单，可以借助一些设计软件来完成，比如`Sketch`。当然也可以使用一些构建工具，比如说`svg-sprite`。有了这个之后，在该使用的地方，使用`<use>`标签，指定`<symbol>`中相应的`id`值即可，比如：
```html
<svg class="icon-nav-articles" width="26px" height="26px">
    <use xlink:href="#icon-nav-articles"></use>
</svg>
```
使用SVG的图标还有一优势，我们可以在`CSS`中直接通过代码来控制图标的颜色：
```css
.site-header .main-nav .main-sections>li>a>svg {
    // ...
    fill: none;
    stroke-width: 2;
    stroke: #c2c2c2;
}
.site-header .main-nav:hover>ul>li:nth-child(1) svg {
    stroke: #ff8a00;
}
```