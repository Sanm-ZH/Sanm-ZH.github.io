---
author: sanmzh
title: NaN理解
categories: [JavaScript]
tags: [js]
date: 2021-10-26 11:22:25
---

<Boxx changeTime="30000"/>

:::tip 定义
`NaN`全称`Not-A-Number`，在`JS`中，整数和浮点数都叫`Number`类型。

是一个值，新的ES标准中， 不可配置，不可枚举。也就是说不可以被删除delete，不可以被改写，也不可以改写配置。

```js
delete NaN // false
NaN = 1 // 1
NaN == 1 // false

delete Number.NaN // false
Number.NaN = 1 // 1
Number.NaN == 1 // false
```
:::

### typeof 是数字
`ES6`之后，`Number`也多了一个静态属性`NaN`
```js
typeof NaN // number
typeof Number.NaN // number
```

### 自己不等于自己
```js
NaN == NaN // false
Number.NaN == NaN // false

NaN === NaN // false
Number.NaN === NaN // false

+0 == -0 // true
Object.is(+0, -0) // false
```

### 常见场景
计算，类型转换
```js
let print = console.log;
// parseInt 
print(isNaN(parseInt("sanm7"))) // true

// parseFloat 
print(isNaN(parseFloat("sanm7"))) // true

// 直接Number初始化
print(isNaN(Number("sanm7"))) // true

// 数字运算
print(isNaN(0 / 0 ))  // true
print(isNaN( 1 * "sanm7" )) // true
print(Math.sqrt(-1)) // true
```

### isNaN
`isNaN()`是一个全局方法
本质是检查`toNumber`返回值，如果是`NaN`，就返回`true`，反之`false`

```js
Number.isNaN =  function (val){
   return Object.is(Number(val), NaN); 
}
```

**`Number.isNaN()`**
```js
Number.isNaN = function(val){
   if(typeof val !== "number"){
       return false
   }
   return Object.is(val, NaN);
}
```

#### `isNaN` 和 `Number.isNaN` 的区别
- `Number.isNaN`是严格判断, 必须严格等于`NaN`。是不是`NaN`这个值
- `isNaN`是通过内部的 `toNumber` 转换结果来判定的。`Number`转换的返回值是不是`NaN`
- `Number.isNaN`是`ES6`的语法，固然存在一定的兼容性问题。

#### Object.is
`ES6` 标准新增方法，用于判断两个值是否属于同一个值，其能准确的判断 `NaN`

### 严格判断 `NaN`
```js
// Number.isNaN ES6
Number.isNaN(NaN) // true
Number.isNaN(1) // false

// Object.is ES6

// !== ES5

// typeof + NaN ES5
function isNaNVal(val) {
  return typeof val === 'number' && isNaN(val)
}

// 综合
if(!('isNaN' in Number)) {
  Number.isNaN = function(val) {
    return typeof val === 'number' && isNaN(val)
  }
}
```