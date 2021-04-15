---
author: sanmzh
title: this指向、函数的调用
categories: [JavaScript]
tags: [js]
date: 2021-04-15 17:11:59
---

<Boxx changeTime="30000"/>

## 前言
ES6+ 中，`Set`、`Map`、`WeakSet`和`WeakMap`的区别。

`Set`（集合）和`Map`（字典） 主要用在与 **数据重组** 和 **数据存储**。

## Set(集合)
ES6新增的一种数据结构，类似于数组，但成员是唯一无序的，没有重复值。

```js
const s = new Set();
[1,2,1,2,3,4,5].forEach(x => s.add(x));

for(let i of s) {
    console.log(i); // 1 2 3 4 5
}

// 数组去重
const arr = [1,2,1,2,3,4,5];
[...new Set(arr)] // [1,2,3,4,5]
```
`Set` 内部会自动判断内部是否存在，需要严格相等 `===` ，和严格相等区别是 `NaN`，`Set` 内部 `NaN` 是等于自身的，而严格相等不相等。

```js
const s = new Set()
s.add(1)
s.add('1')
s.add(NaN)
s.add(NaN)
console.log([...s]) // [1, "1", NaN]
```

### Set的属性和方法
- **size** 元素数量
- **add()** 新增元素
- **detele()** 删除元素
- **has()** 判断是否存在
- **clear()** 清空集合

`Array.form` 方法可以将 `Set` 数据结构转换为数组
```js
const set = new Set([1,2,3,3,4])
const arr = Array.form(set)
console.log(arr) // [1,2,3,4]

console.log([...set]) // [1,2,3,4]
```

### Set的遍历
遍历的顺序为插入数据时的顺序

- **keys()** 返回一个包含集合中所有键的迭代器
- **values()** 返回一个包含集合中所有值的迭代器
- **entries()** 返回一个包含 `Set` 对象中所有元素的键值对迭代器
- **forEach(callback, thisArg)** 参考 `forEach`

```js
const set = new Set([1,3,4,2])
console.log(set.keys()) // SetIterator{1,3,4,2}
console.log(set.values())   // SetIterator{1,3,4,2}
console.log(set.entries())   // SetIterator{1,3,4,2}

set.forEach((value, key) => {
    console.log(`${key}: ${value}`)
    // 1: 1
    // 3: 3
    // 4: 4
    // 2: 2
})
```
> ps：可以将 `Set` 转换成数组，再去支持数组 `map`、`fitler` 等方法

### Set的应用
利用 `Set` 的特性可以轻松实现去除操作，下面利用特性实现 `交集（Intersect）`、`并集（Union）`、`差集（Difference）`

```js
const set1 = new Set([1,2,3])
const set2 = new Set([4,2,1])

let intersect = new Set([...set1].filter(value => set2.has(value)))
let union = new Set([...set1, ...set2])
let difference = new Set([...set1].filter(value => !set2.has(value)))
console.log(`交集：${[...intersect]}，并集：${[...union]}，差集：${[...difference]}`)
// 交集：1,2，并集：1,2,3,4，差集：3
```

