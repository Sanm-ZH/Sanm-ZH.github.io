---
author: 云的世界
title: localStorage 存储
categories: [JavaScript]
tags: [js]
date: 2021-11-15 13:47:32
---

<Boxx changeTime="30000"/>

### localStorage 存储的字符编码
`localStorage` 采用 `UTF-16` 字符编码，因为是 `UTF-16` 每个字符使用两个字节，是有前提条件的，就是码点小于 `0xFFFF(65535)`， 大于这个码点的是四个字节。

### 键的数量，对读写的影响
```js
let keyCount = 500 * 1000;

localStorage.clear();
for (let i = 0; i < keyCount; i++) {
    localStorage.setItem(i, "");
}

setTimeout(() => {
    console.time("save_cost");
    localStorage.setItem("a", "1");
    console.timeEnd("save_cost");
}, 2000)


setTimeout(() => {
    console.time("read_cost");
    localStorage.getItem("a");
    console.timeEnd("read_cost");

}, 2000)

// save_cost: 0.05615234375 ms
// read_cost: 0.008056640625 ms
```
你单独执行保存代码：
```js
localStorage.clear();    
console.time("save_cost");
localStorage.setItem("a", "1");
console.timeEnd("save_cost");
// save_cost: 0.033203125 ms
```
可以多次测试， 影响肯定是有的，也仅仅是数倍，不是特别的大。
```js
const charTxt = "a";
const count = 5 * 1024 * 1024  - 1
const val1 = new Array(count).fill(charTxt).join("");

setTimeout(() =>{
    localStorage.clear();
    console.time("save_cost_1");
    localStorage.setItem("a", val1);
    console.timeEnd("save_cost_1");
},1000)


setTimeout(() =>{
    localStorage.clear();
    console.time("save_cost_2");
    localStorage.setItem("a", "a");
    console.timeEnd("save_cost_2");
},1000)

// save_cost_1: 12.276123046875 ms
// save_cost_2: 0.010009765625 ms
```
可以多测试很多次，单次值的大小对存的性能影响非常大，读取也一样，合情合理之中。

所以尽量不要保存大的值，因为其是同步读取，纯大数据，用`indexedDB`就好。

**结论：** 键的数量对读取性能有影响，但是不大。值的大小对性能影响更大，不建议保存大的数据。

### 写个方法统计一个 localStorage 已使用空间
```js
function sieOfLS() {
    return Object.entries(localStorage).map(v => v.join('')).join('').length;
}

localStorage.clear();
localStorage.setItem("🔴", 1);
localStorage.setItem("🔴🔴🔴🔴🔴🔴🔴🔴", 1111);
console.log("size:", sieOfLS())   // 23
// 🔴*9 + 1 *5 = 2*9 + 1*5 = 23
```

### 页面的 utf-8 编码
我们的html页面，经常会出现 `<meta charset="UTF-8">`。
告知浏览器此页面属于什么字符编码格式，下一步浏览器做好解码工作。
```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>xxxx</title>
</head>
```
这和`localStorage`的存储没有关系。
