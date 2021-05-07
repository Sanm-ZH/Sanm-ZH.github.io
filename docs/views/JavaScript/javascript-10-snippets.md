---
author: sanmzh
title: JS代码片段推荐
categories: [JavaScript]
tags: [js, utilsFn]
date: 2021-05-07 10:31:02
---

<Boxx changeTime="30000"/>

## 单行 if-else 语句
```js
if (status > 10) {
  console.log('true')
} else {
  console.log('false')
}
```
```js
status > 10 ? console.log('true') : console.log('false')
```
三元运算符也可以链接在一起以形成更长的链。但是，它通常会使代码变得很冗长。明智地使用它们，不会使事情变得更复杂

## 合并数组
使用扩展运算符 `...` 将一个数组的元素扩展为另一个数组
```js
const arr1 = [1,2,3,4]
const arr2 = [...arr1,5,6,7] // 1,2,3,4,5,6,7
```
## 从数组中删除重复项
```js
const arr = [1,2,3,3,2]
const uniqueArr = [...new Set(arr)] // 1,2,3
```
## 将任何内容转换为布尔值
除了`true`和`false`之外，`js`还将其他类型视为真或假
- `0`、`''`、`null`、`undefined`、`NaN``、false` 为假
- 其他一切都为真

```js
const b1 = !0 // true
const b2 = !100 // false
const b3 = !'txt' // false
const b4 = !!'txt' // true
```
## 交换两个变量
```js
const x = 1,y = 2
[x, y] = [y, x]
console.log(x, y) // 2, 1
```
## 将数字转换为字符串
```js
const num = 1 + ''
console.log(typeof num)
```
## 将字符串转换为数字
```js
const str = '123'
const num = +str
console.log(typeof num)
```
## 将变量嵌入到字符串
使用模板字符串
```js
const name = 'sanm'
const str = `My name is ${name}`
```
## 将字符串拆分为数组
可以使用扩展运算符
```js
const name = 'sanm'
const arr = [...name]
```
## 可选链接
**可选的链接运算符（?.）允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效 ———— MDN Web文档**
假设你有一个`data`对象，并且想要安全地访问`data.test.value`。首先，你需要检查：
- data 是否被定义
- data.test 是否被定义
在`data.test.value`，你可以调用之前，因为，你显然无法读取`undefined`属性
```js
const data = {test：{value：1}}
if（data && data.test）{ 
  console.log（data.test.value）; 
}
```
```js
const value = data?.test?.value
```
## 提高JSON可读性
`JSON.stringify()`方法接受两个可选参数：
- 替换功能，用于过滤显示的`JSON`。在这种情况下，可以是`null`，因为我们不需要它。
- 一个空格值，可以是所需空格的数目或字符串
```js
JSON.stringify({a: 1, b: 2}, null, '\t')
```
----
原文：[https://betterprogramming.pub/10-javascript-snippets-for-cleaner-looking-code-76f6e2cf6fc4](https://betterprogramming.pub/10-javascript-snippets-for-cleaner-looking-code-76f6e2cf6fc4)