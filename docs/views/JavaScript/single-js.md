---
author: sanmzh
title: 单行js整理
categories: [JavaScript]
tags: [js,utilsFn]
date: 2021-06-22 15:15:00
---

<Boxx changeTime="30000"/>

## 随机获取布尔值
`Math.random()` 返回布尔值

`Math.random()` 窗机一个介于 `0` 和 `1` 之间的随机数，然后我们检查它是否大于或小于 `0.5`
```js
const getRandomBoolean = () => Math.random() >= 0.5
```

## 日期是否为周末
```js
const isWeekend = date => [0, 6].indexOf(date.getDay()) !== -1
console.log(isWeekend(new Date())) 
```

## 数字是奇数还是偶数
```js
const isEven = num => num % 2 === 0
console.log(isEven(5))
console.log(isEven(4))
```

## 数组去重
```js
const uniqueArr = arr => [...new Set(arr)]
```

## 是否为数组
```js
const isArray = arr => Array.isArray(arr)
```

## 两个数字之间生成一个随机数
```js
const randomAToB = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
```

## 生成随机字符串
```js
const randomString = () => Math.random().toString(36).slice(2)
```

## 滚动到页面顶部
```js
const scrollToTop = () => window.scrollTo(0, 0)
```

## 切换布尔
```js
const toggleBool = () => (bool = !bool)
const toggleBool = b => !b
```

## 交换两个变量
```js
let foo = 'foo'
let bar = 'bar'

[foo, bar] = [bar, foo]
```