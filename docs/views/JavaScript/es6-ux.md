---
author: sanmzh
title: ES6 基础运用
categories: [JavaScript]
tags: [js, es6]
date: 2021-10-12 10:38:26
---

<Boxx changeTime="30000"/>

### 对象解构
```js
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

// old
const a = obj.a
const b = obj.b
const c = obj.c
const d = obj.d
const e = a + c
const f = b + d

// es6
const {a, b, c, d} = obj
const e = a + c
const f = b + d

// es6重命名
// 有时与后台返回对不上，可以使用重命名变量名
const {a: a1} = obj
console.log(a1) // 1

```
**注意**：使用解构时，对象不能为 `undefined`、`null`，否则会报错
```js
const {a,b,c,d} = obj || {}
```