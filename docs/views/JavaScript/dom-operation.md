---
author: sanmzh
title: DOM 操作性能影响及优化
categories: [JavaScript]
tags: [js,Dom,html,jQuery]
date: 2021-04-16 11:19:54
---

<Boxx changeTime="30000"/>

## 相关了解
### DOM 操作影响性能
在浏览器中，`DOM`和`ECMAScript`的实现是分离的。

例如：在`IE`中，`ECMAScript`的实现是在`script.dll`中，`DOM`实现在`mshtml.dll`中；在`Chrome`中使用`WebKit`中的`WebCore`中处理`DOM`和渲染，但`ECMAScript`是`V8`引擎中实现的，其他浏览器情况类似。

操作`DOM`，就是通过`js`代码调用`DOM`的接口，就相当于两个相互独立的模块发生了交互。这样，相比于在同一个模块当中互相调用，这种跨模块的调用它的性能损耗是非常高的。

然而，`DOM`操作影响性能最主要是因为它导致了浏览器的**重绘（repaint）**和**重排（reflow）**。

### 浏览器渲染原理
从下载文档到渲染页面的过程中，浏览器会通过解析`HTML`文档来构建DOM树，解析`CSS`产生`CSS`规则树。`JavaScript`代码在解析过程中， 可能会修改生成的DOM树和`CSS`规则树。之后根据DOM树和`CSS`规则树构建渲染树，在这个过程中`CSS`会根据选择器匹配`HTML`元素。渲染树包括了每 个元素的大小、边距等样式属性，渲染树中不包含隐藏元素及head元素等不可见元素。最后浏览器根据元素的坐标和大小来计算每个元素的位置，并绘制这些元 素到页面上。无论何时总会有一个初始化的页面布局伴随着一次绘制。

- **重绘** 指页面某些部分需要重新绘制，由于节点的几何属性发生改变或者由于样式发生改变，例如改变元素背景色时，屏幕上的部分内容需要更新，而元素的位置和尺寸并没有改变。
- **重排** 元素的位置或尺寸发生了改变，浏览器需 要重新计算渲染树，导致渲染树的一部分或全部发生变化。渲染树重新建立后，浏览器会重新绘制页面上受影响的元素。**重排**，改变的是`DOM`文档的结构，例如`DOM`元素的位置或者尺寸发生了变化，需要重新布局，就会发生重排。

## 优化方法
### DOM操作累积起来批量操作
现代浏览器中会有优化方法，就是把dom操作积累起来，做批量处理。但是在有些情况下，浏览器会立即重排或重绘。比如请求如下的DOM元素布局信息：`offsetTop/Left/Width/Height`、`scrollTop/Left/Width/Height`、`clientTop/Left/Width/Height`、`getComputedStyle()`或 `currentStyle`。因为这些值都是动态计算的，所以浏览器需要尽快完成页面的绘制，然后计算返回值，从而打乱了重排或重绘的优化。

### 合并多次DOM操作为单次
```js
element.style.borderColor = '#00f';
element.style.borderStyle = 'solid';
element.style.borderWidth = '1px';
// 这种编码方式因为频繁更改DOM元素样式，触发页面多次重排或重绘，现代浏览器针对这种情况有性能优化，它会合并DOM操作，但并不是所有的浏览器都有这种优化。推荐下面的方式把DOM操作合并.

// plan1
element.style.cssText += 'border: 1px solid #00f;';
// plan2
element.className += 'border-bule';
```
示例的代码有两种优化的方案，都做到了把多次的样式设置合并为一次设置。方案2比方案1稍微有一些性能上的损耗，它需要查询`CSS`类。方案2的维护性好。当性能问题并不突出，选择编码方案时需要优先考虑的是代码的维护性。

类似的操作还有通过`innerHTML`接口修改`DOM`元素的内容。不要直接通过此接口来拼接`HTML`代码，而是以字符串方式拼接好代码后，一次性赋值给DOM元素的`innerHTML`接口。

### 使用文档片段
文档片段是一个轻量级的`document`对象，并不会和特定的页面关联。通过在文档片段上进行`DOM`操作，可以降低`DOM`操作对页面性能的影响，这种方式是创建一个文档片段，并在此片段上进行必要的`DOM`操作，操作完成后将它附加在页面中。对页面性能的影响只存在于最后把文档片段附加到页面的这一步 操作上。
```js
var fragment = document.createDocumentFragment();
// 一些基于fragment的大量DOM操作
...
document.getElementById('el').appendChild(fragment);
```
### 通过display: none
在隐藏和显示直接做的`DOM`操作，只有隐藏和显示才会引起页面的重绘或重排。
```js
var el = document.getElementById('el')
el.style.display = 'none'
// el 大量DOM操作
...
el.style.display = 'block'
```
### 克隆DOM元素到内存中
这种方式是把页面上的`DOM`元素克隆一份到内存中，然后再在内存中操作克隆的元素，操作完成后使用此克隆元素替换页面中原来的`DOM`元素。这样一来，影响性能的操作就只是最后替换元素的这一步操作了，在内存中操作克隆元素不会引起页面上的性能损耗。
```js
var oEl = document.getElementById('el')
var nEl = oEl.cloneNode(true)
// 一些基于nEl的大量DOM操作
...
oEl.parentNode.replaceChild(nEl, oEl)
```
### 脱离页面布局流
例如：使动画效果的`DOM`元素`position`属性为`fixed`或`absolute`

把页面中具有动画效果的元素设置为绝对定位，使得元素脱离页面布局流，从而避免了页面频繁的重排，只涉及动画元素自身的重排了。这种做法可以提高动画效果的展示性能。如果把动画元素设置为绝对定位并不符合设计的要求，则可以在动画开始时将其设置为绝对定位，等动画结束后恢复原始的定位设置。在很多的网站中，页面的顶部会有大幅的广告展示，一般会动画展开和折叠显示。如果不做性能的优化，这个效果的性能损耗是很明显的。使用这里提到的优化方案，则可以提高性能。