---
author: sanmzh
title: ES5 ES6 数组方法
categories: [JavaScript]
tags: [js, array]
date: 2021-04-08 10:15:06
---

<Boxx changeTime="30000"/>

::: tip
ES5 ES6 数组常用方法<br>
:::

## ES5数组方法

### **indexOf**

> 用于查询数组是否存在某个值，存在返回该值下标，否返回`-1`

```js
var arr = [1, 2, 3];

console.log(arr.indexOf(3)); // 2
console.log(arr.indexOf(4)); // -1
```

### **map**
> 数组函数方法，回调内有三个参数，`value`，`index`，`self`，返回值是处理完的结果，生成一个新的数组

```js
var arr = [1, 2, 3];
var res = arr.map(function(value, index, self) {
    console.log(value); // 1 2 3
    console.log(index); // 0 1 2
    console.log(self); // [1, 2, 3]
    return value * 3;
})
console.log(res); // [3, 6. 9]
```

### **forEach**
> 遍历数组方法，回调内有三个参数，`value`，`index`，`self`，没有返回值

```js
var arr = [1, 2, 3];
var res = arr.forEach(function(value, index, self) {
    console.log(value); // 1 2 3
    console.log(index); // 0 1 2
    console.log(self); // [1, 2, 3]
    return 123; // 没有效果
})
console.log(res); // undefined
```

### **splice**
> 数组删除或替换内容，接收三个参数，操作会对原数组产生影响
- 第一个参数，删除或添加的位置
- 第二个参数，要删除几个，为0不删除
- 第三个参数，向数组添加内容

```js
var arr = [1, 2, 3];

arr.splice(0, 1) // 把第0个位置，给删除一位
console.log(arr) // [2, 3]

arr = [1, 2, 3];
arr.splice(0, 1, "sanm")
console.log(arr) // ["sanm", 2, 3]

arr.splice(0, 2, "sanm")
console.log(arr) // ["sanm", 3]
```