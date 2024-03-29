---
author: sanmzh
title: 闭包 Closure
categories: [JavaScript]
tags: [js]
date: 2021-05-11 13:57:27
---

<Boxx changeTime="30000"/>

## 变量的作用域
变量分为两种
- 全局变量
- 局部变量

```js
function fn() {
  var n = 1
}
alert(n) // error
```
函数外部无法读取函数内部的局部变量

## 如何从外部读取局部变量
```js
function fn() {
  var n = 1
  return function() {
    console.log(n)
  }
}
const res = fn()
res() // 1
```

## 闭包的概念
**闭包就是能够读取其他函数内部变量的函数**

由于在Javascript语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"。
所以，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁

## 闭包的用途
闭包可以用在许多地方。它的最大用处有两个，`一个是前面提到的可以读取函数内部的变量`，`另一个就是让这些变量的值始终保持在内存中`。

```js
function fn() {
  var n = 1
  addFn = function() {n += 1}
  return function() {
    console.log(n)
  }
}
const res = fn()
res() // 1
addFn()
res() // 2
```

## 使用闭包的注意点
- 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在**IE**中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。
- 闭包会在父函数外部，改变父函数内部变量的值。所以，如果你把父函数当作对象（`object`）使用，把闭包当作它的公用方法（`Public Method`），把内部变量当作它的私有属性（`private value`），这时一定要小心，不要随便改变父函数内部变量的值。

