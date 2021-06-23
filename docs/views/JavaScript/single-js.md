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

## 计算两个日期之间的天数
```js
const daysDiff = (date1, date2) => Math.ceil(Math.abs(date1 - date2) / 86400000)
```

## 将文字复制到剪切板
```js
const copyTextToClipboard = async text => {
  await navigator.clipboard.writeText(text)
}
```

## 合并多个数组的不同方法
可以使用 `concat` 或 扩展运算符 `...`
```js
const merge = (a, b) => a.concat(b)
const merge = (a, b) => [...a, ...b]

// 合并并去重
const merge = [...new Set(a.concat(b))]
const merge = [...new Set([...a, ...b])]
```

## 获取javascript语言的实际类型
```js
const trueTypeOf = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

console.log(trueTypeOf(''))
// string
console.log(trueTypeOf(0))
// number
console.log(trueTypeOf())
// undefined
console.log(trueTypeOf(null))
// null
console.log(trueTypeOf({}))
// object
console.log(trueTypeOf([]))
// array
console.log(trueTypeOf(0))
// number
console.log(trueTypeOf(() => {}))
// function
```

## 末尾截断字符串
```js
const truncateString = (string, length) => {
  return string.length < length ? string : `${string.slice(0, length - 3)}...`
}
```

## 中间截断字符串
```js
const truncateStringMiddle = (string, length, start, end) => {
  return `${string.slice(0, start)}...${string.slice(string.length - end)}`
}
```

## 是否是Apple设备上
```js
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform)
```

ps: `!document.hidden` 当前选项卡是否在视图/焦点内

## 三元运算符
当你只想在一行中编写 `if...else` 语句时，可以试试三元运算符