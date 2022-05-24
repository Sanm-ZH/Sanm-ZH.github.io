---
author: sanmzh
title: CommonJS、AMD、CMD、UMD、ES6 模块化编程
categories: [JavaScript]
tags: [js, module]
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
- **`id`** 为模块名
- **`exports`** 是该模块导出的方法
- **`loaded`** 表示该模块是否加载完毕，等等。

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

## AMD
为解决`CommonJS`不适用于浏览器端，推出了`Asynchronous Module Definition`即`AMD 异步模块定义`，它采用异步方式加载模块，模块的加载不影响后面代码的运行。（**这里的异步不是指不堵塞浏览器的其他任务（Dom构建，Css渲染等），而是加载内部是同步的（加载立即执行回调）**）

`AMD`也采用`require`命令加载模块，但是它不同于`CommonJS`它要求两个参数：
```js
requrie([module], callback);
```
第一个参数是一个数组，里面的成员是要加载的模块，`callback`是加载完成后的回调函数，将上面的代码改成`AMD`方式：
```js
requrie(['math'], function(math){
  math.add[1, 2]
})
```
其中，回调函数中参数对应数组中的成员（模块）

`requrieJS`加载模块，采用的是`AMD`规范，也就是说，模块必须按照`AMD`规范书写。

模块书写必须使用特定的`define()`函数定义，如果一个模块不依赖其它模块，那么直接写在`define()`函数中。
```js
define(id?, dependencies?, factory);
```
- **`id`** 模块名，不写模块默认名字为加载脚本的文件名
- **`dependencies`** 模块的依赖项，已被模块定义的模块标识数组字面量，依赖参数是可选的，如果忽略，默认为`['requrie', 'exports', 'module']`。然而，如果工厂方法的长度小于3，加载器会选择以函数的长度属性指定的参数个数调用工厂方法。
- **`factory`** 模块的工厂函数，模块初始化要执行的函数或对象，如果为函数，它应该只被执行一次，如果是对象，此对象该为模块的输出值。

```js
// math.js
define(function(){
  var add = function(a, b) {
    return a + b;
  };

  return {
    add: add
  };
})

requrie(['math'], function(math){
  math.add[1, 2]
})

// 如果math模块需要依赖别的模块
define(['dependenceModule'], function(dependenceModule){
  ...
})
```
当`require`函数加载`math`模块时，就会先加载`dependenceModule`模块。

**特点：** 当有多个依赖时，就将所有的依赖都写在`define()`函数的第一个参数数组中，**所以说 `AMD` 是依赖前置**。这不同于`CommonJS`规范，他是依赖就近的。