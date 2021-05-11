---
author: sanmzh
title: 常见的三个JS面试题
categories: [JavaScript]
tags: [js,interview]
date: 2021-05-11 10:37:34
---

<Boxx changeTime="30000"/>

## 事件委托代理
一般在构建应用程序时，有时需要将事件绑定到页面的元素上，以满足交互需求
```html
<ul id="todo-list">
  <li class="item">1</li>
  <li class="item">2</li>
  <li class="item">3</li>
  <li class="item">4</li>
</ul>
```
如果给每一项绑定事件，这样的执行效率会很低，同时因为过多的监听也会造成性能问题
```js
const todoDom = document.getElementById('todo-list')

todoDom.addEventListener('click', function(e) {
  if (e.target && e.target.nodeName === 'LI') {
    const item = e.target
    console.log('item: ' + item.innerHTML)
  }
})
```
在父项绑定事件，在由判断是那个子项，这样会方便很多

## 在循环中使用闭包
闭包就是能够读取其他函数内部变量的函数
闭包可以用在许多地方，它的最大用处有两个：
- 一个是前面提到的可以读取函数内部的变量
- 另一个就是让这些变量的值始终保持在内存中

> 编写一个函数，该函数将遍历整数列表，并在延迟3秒后打印每个元素的索引

```js
const arr = [1,2,3,4];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(`number is: ${i}`)
    // 这样循环每次 i 输出的都是 4
  }, 1500)
}
```
解决办法有很多，例如返回一个方法，将 `i` 作为参数传入，还有一个就是利用 `ES6` `let` 关键字
::: tip
`let` 声明变量存在块作用域，相当于每次循环都是一个新的 `i`，`i` 只在每次循环有效
:::


## 事件的节流(throttle)与防抖(debounce)
[JS防抖和节流](/views/JavaScript/debounce-throttle.html)，这篇文章编写了防抖和节流函数
