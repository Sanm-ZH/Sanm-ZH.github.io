---
author: sanmzh
title: JS代码风格常见问题
categories: [JavaScript]
tags: [js]
date: 2021-10-12 15:50:01
---

<Boxx changeTime="30000"/>

### 在支持 `bable` 插件的项目中尽量使用新语法
代码的格式都有 `eslint`, `prettier`, `babel`(写新版语法)这些来保证

### 滥用变量
```js
// bad
function test() {
  const a = 1
  const b = 2
  const c = a + b
  const d = c + 1
  const e = d + a
  return e
}

// good
function test() {
  const a = 1
  const b = 2
  return 2*a + b + 1
}
```

### 变量命名
```js
// bad
const fName = 'ZH'
const lName = 'Sanm'

// good
const firstName = 'ZH'
const lastName = 'Sanm'
```
尽量变量名能够清楚变量的意思

```js
if(a < 18) { // 变量为啥要小于18
  // xxxxxxx
}

const ADULTS_AGE = 18
if (a < ADULTS_AGE) {
  // xxxxxxx
}
```

### 避免过多使用全局变量
```js
window.name = 'sanm'
```

### 做好变量值异常处理
```js
const MIN_NAME_LENGTH = 6
let name = user.name  // 当name为 undefined，null时会报错
// good
name = user.name || ''

if(name.length > MIN_NAME_LENGTH) {
    // ....
}
```

### 函数命名
函数命名不仅要体现内部大致逻辑，最好还能直接看错返回结果是什么类型

```js
function isEmpty() ...
```

### 功能函数最好是纯函数
**纯函数**：输入一致，输出结果永远唯一
```js
function add(a, b) {
  return a + b
}
```

### 函数相关
- 函数入参最好有说明，注释或者使用对象参数
- 对一些工具类函数进行柯里化
- 多使用箭头函数
- 字符串活用模板字符串