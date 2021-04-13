---
author: sanmzh
title: this指向、函数的调用
categories: [JavaScript]
tags: [js]
date: 2021-04-13 14:49:41
---

<Boxx changeTime="30000"/>

## this的指向
在ES5中，`this` 指向最后调用它的那个对象。

**例1：**
```js
var name = "sanm";
function info() {
    var name = "sanm-zh";
    console.log(this.name);          // sanm
    console.log(this);    // Window
}
info();
console.log(this)         // Window
```
`info()` 相当于 `window.info()`，info是一个全局的函数，所以此处指向 `window`

**例2：**
```js
var name = "sanm";
var info = {
    name: "sanm-zh",
    fn: function() {
        console.log(this.name);  // sanm-zh
        console.log(this);  // info对象
    }
}
info.fn();
console.log(this)         // window
window.info.fn()        // fn 函数内打印的 this 输出的还是 info 对象

var f = info.fn;
f(); // fn 函数内打印的 this 为 Window  name 输出为 sanm
```
函数 `fn` 是对象 `info` 调用的

**例3：**
```js
var name = "sanm";
function info(){
    var name = "sanm-zh";
    fn();
    function fn(){
        console.log(this.name); // sanm
    }
}
info();
```

:::tip
`this` 指向 `window` 在严格模式下，会显示成 `undefined`
:::

## 改变this的指向

- 使用ES6箭头函数
- 在函数内部使用 `_this = this`
- 使用`apply`、`call`、`bind`
- `new` 实例化一个对象

**例4：**
```js
var name = "sanm"
var info = {
    name: "sanm-zh",
    fn1: function(){
        console.log(this.name)
    },
    fn2: function(){
        setTimeout(function(){
            this.fn1()
        }, 300)
    },
    fn3: function(){
        setTimeout(() => {
            this.fn1()
        }, 300)
    },
    fn4: function(){
        var _this = this;
         setTimeout(function(){
            _this.fn1()
        }, 300)
    },

    fn5: function(){
        setTimeout(function(){
            this.fn1()
        }.call(info), 300)
    },
    fn6: function(){
        setTimeout(function(){
            this.fn1()
        }.apply(info), 300)
    },
    fn7: function(){
        setTimeout(function(){
            this.fn1()
        }.bind(info)(), 300)
    }
}
info.fn2(); // this.fn1 is not a function `setTimeout`的对象是 `window`，所有找不到 `fn2`
info.fn3(); // sanm-zh  箭头函数
info.fn4(); // sanm-zh  _this = this
info.fn5(); // sanm-zh  call
info.fn6(); // sanm-zh  apply
info.fn7(); // sanm-zh  bind
```

:::tips 参考
[bind、apply、call的区别](./bind-call-apply.md)
:::

## JS中的函数调用
- 作为一个函数调用
- 函数作为方法使用
- 构造函数调用函数
- 函数方法调用函数（apply、call）

### 作为一个函数调用
如 `例1` 不属于任何一个对象，这种情况下再浏览器非严格模式下，默认是属于全局对象 `window`，严格模式 `undefined`

### 函数作为方法使用
如 `例2` 定义一个对象，对象有属性和和方法；通过对象 `.` 方法调用执行；根据 **`this` 指向最后调用它的那个对象**，所以 `fn` 中的 `this` 指向对象

### 构造函数调用函数

### 函数方法调用函数