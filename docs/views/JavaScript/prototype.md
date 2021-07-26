---
author: sanmzh
title: JS原型与原型链
categories: [JavaScript]
tags: [js]
date: 2021-07-26 11:23:35
---

<Boxx changeTime="30000"/>

### prototype
在 `js` 中，每个函数都有一个 `prototype` 属性，这个属性指向函数的原型对象。

```js
function Fn(info) {
  this.info = info
}
Fn.prototype.title = '标题'
const Fn1 = new Fn()
const Fn2 = new Fn()
console.log(Fn1.title) // 标题
console.log(Fn2.title) // 标题
```

函数的 `prototype` 指向了一个对象，这个对象是调用构造函数时创建的实例原型，也就是 `Fn1`、`Fn2` 的原型

:::tip
每一个 `js` 对象(**除`null`**)创建时，都会关联上另一个对象，这个对象就是原型，每一个对象都会从原型中`继承`属性
:::

### __proto__
每个对象(**除`null`**)属性都会存在`__proto__`，这个对象会指向对象的原型

```js
function Fn() {}

const Fn1 = new Fn()
console.log(Fn1.__proto__ === Fn.prototype) // true

const Fn2 = new Fn()
// 像上面例子中的也是一样
console.log(Fn1.__proto__ === Fn2.__proto__) // true
```
大部分浏览器都支持这个`非标准`的方法访问原型，它并不存在于 `Fn.prototype` 中，而是来自 `Object.prototype` 中，说是一个属性，不如说是一个 `getter/setter`，当使用 `obj.__protot__`时，可以理解为返回了 `Object.getPrototypeOf(obj)`

### constructor
每个原型都一个`constructor`属性，指向该关联的构造函数

```js
function Fn() {}
console.log(Fn === Fn.prototype.constructor)
```

```js
function Fn() {}
const Fn1 = new Fn()
console.log(Fn.prototype.constructor === Fn) // true
console.log(Object.getPrototypeOf(Fn1) === Fn.prototype) // true


console.log(Fn1.constructor === Fn) // true
```
当 `Fn1.constructor` 不存在时会自动从原型中读取，所以上面例子返回 `true`

### 实例与原型
当读取实例属性时，如果找不到，会找与对象的原型中的属性，如果还是找不到，就一直往上层查找

### 原型链
每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。那么假如我们让原型对象等于另一个类型的实例，结果会怎样？显然，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立。如此层层递进，就构成了实例与原型的链条。这就是所谓的原型链的基本概念。`—— 摘自《javascript高级程序设计》`

```js
console.log(Object.prototype.__proto__ === null) // true
```

`Object.prototype.__proto__` 的值为 `null` 跟 `Object.prototype` 没有原型，表达了同一个意思

所以查找属性查到 `Object.prototype` 就可以停止查找了

原型链就是实例 `__proto__`到 `null` 这种关系