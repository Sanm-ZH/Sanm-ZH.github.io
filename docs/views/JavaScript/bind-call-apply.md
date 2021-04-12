---
author: sanmzh
title: bind、call、apply 区别
categories: [JavaScript]
tags: [js,utilsFn]
date: 2021-04-12 10:23:50
---

<Boxx changeTime="30000"/>

## 作用

它们主要作用都是改变函数运行时的上下文（ `this` 的指向）。一般会使用在基础类，公用方法时，其他场景 `call`、`apply` 应用并不多。

**例如：**
```js
var arr = [1, 23, 4, 5, 78, 9];
console.log('Max Number：', Math.max.appley(Math, arr)); // Max Number：78
// es6
console.log('Max Number：', Math.max(...arr)); // Max Number：78

// 验证数据类型，toString 方法没有被重写
Object.prototype.toString.call(obj)

```

## apply 和 call 的区别
其实 `apply` 和 `call` 基本类似，他们的区别只是传入的参数不同。

`call` 方法接收若干个参数列表，`apply` 接收一个包含多个参数的数组。

```js
// call 语法
var c = {
    name: 'call',
    fn: function(a, b) {
        console.log(a + b);
    }
};

var fn1 = c.fn;
fn1.call(c, 1, 2);  // 3
// apply
var a = {
    name: 'apply',
    fn: function(a, b) {
        console.log(a + b);
    }
};
var fn2 = a.fn;
fn2.apply(a, [1, 2]); // 3
```

## bind 和 apply、call 区别

```js
var b = {
    name : "bind",
    fn: function(a, b) {
        console.log(a + b);
    }
};

var fn3 = b.fn;
fn3.bind(b, 1, 2); // 不会输出 输出一个函数
fn3.bind(b, 1, 2)(); // 3
```

::: tip MDN
`bind()`方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。
:::

`bind` 创建了一个新函数，我们用手动去调用一下。