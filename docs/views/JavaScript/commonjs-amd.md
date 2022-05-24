---
author: sanmzh
title: CommonJS、AMD、CMD、UMD、ES6 模块化编程
categories: [JavaScript]
tags: [js, modul]
date: 2022-05-24 14:36:27
---

<Boxx changeTime="30000"/>

:::tip 背景
随着网页功能越来越多，交互越来越复杂，`JavaScript` 代码越来越庞大，越来越复杂。

`JavaScript` 模块化编程，已经成为已成为一个趋势，同时模块规范使我们可以加载社区开源的的模块进而提升工作效率。

自己按规范写的模块也可以上传社区，促进社区繁荣。
:::

## CommonJS
`CommonJS`是一个更偏向于浏览器的规范，`NodeJS`采用了这个规范。`CommonJS`的是一个模块就是一个脚本文件，`require`命令第一次加载该脚本是就会执行整个脚本，然后在内存中生成一个对象。
```js
{
  id: 'modle_id',
  exports: { .... },
  loaded: true,
  ...
}
```
`id`为模块名，`exports`是该模块导出的方法，`loaded`表示该模块是否加载完毕，等等。

后续需要用到这个模块时，就会到`exports`属性上取值。即使再次执行`require`命令，也不会再执行该模块，而是去缓存中取值。
```js
// math.js
exports.add = function(a, b) {
  return a + b;
}

var math = require('math');
math.add(1, 2); // 3
```

**特点：** 由于`CommonJS`是同步加载模块，这对于服务器端不是问题，相当于模块放在本地，等待模块加载是很快的操作，但是对于浏览器来讲，他需要从服务器加载模块，涉及到很多外在隐私（当超过等待时间，会造成“浏览器卡死”，等未知问题）

**结论：** `CommonJS`适用于服务器端
