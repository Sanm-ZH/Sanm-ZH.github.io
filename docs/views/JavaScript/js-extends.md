---
author: sanmzh
title: JS继承方式
categories: [JavaScript]
tags: [js]
date: 2022-04-24 17:16:25
---

<Boxx changeTime="30000"/>

## 原型链继承
:::tip 优缺点
**优点：**
1. 父类方法可以复用


**缺点：**
1. 父类所有引用类型数据（对象，数组）会被子类共享，更新一个子类数据，其他数据也会受到影响
2. 子类实例不能给父类构造函数传参
:::
```js
function Person() {
  this.name = 'sanm'
  this.eats = ['香蕉']
  this.getName = () => console.log(this.name)
}
Person.prototype.getFn = () => console.log('Person.prototype 上面的方法')

function Student() {}
Student.prototype = new Person()

var stu1 = new Student();
stu1.name = '张三'  // 相当于重写了该属性，如果没有就向父级查找
stu1.eats.push('xxx') // 会改变父类值，后续通过父类构造的子类的值都为新值
// stu1.eats = ['苹果'] // 这样会重写指向一个新的地址，不会改变父类的值
stu1.getName()  // => 张三
stu1.getFn()  // => Person.prototype 上面的方法

var stu2 = new Student()
console.log(stu2.name) // sanm
console.log(stu2.eats) // ['香蕉']
stu2.getName()  // => sanm
stu2.getFn()  // => Person.prototype 上面的方法
``` 

## 构造函数继承
:::tip 优缺点
**优点：**
1. 父类应用类型的数据不会与子类共享，不会影响其他子类


**缺点：**
1. 子类无法访问父类原型属性上的方法（`Person.prototype`）
:::
```js
function Person() {
  this.name = 'sanm'
  this.eats = ['香蕉']
  this.getName = () => console.log(this.name)
}
Person.prototype.getFn = () => console.log('Person.prototype 上面的方法')

function Student() {
  Person.call(this)
}

var stu1 = new Student()
stu1.name = '张三'
stu1.eats.push('苹果')
stu1.getName() // => 张三
// stu1.getFn() // 报错，没有定义该方法，找不到原型上的方法

var stu2 = new Student()
console.log(stu2)
// 生成一份新的数据
```

## 组合继承
:::tip 优缺点
**优点：**
1. 父类可以复用
2. 父类构造函数中的引用属性不被共享


**缺点：**
1. 会调用来两次父类构造函数，会有两份一样的属性和方法，会影响性能
:::
```js
function Person() {
  this.name = 'sanm'
  this.eats = ['香蕉']
  this.getName = () => console.log(this.name)
}
Person.prototype.getFn = () => console.log('Person.prototype 上面的方法')

function Student() {
  Person.call(this)
}
Student.prototype = new Person()

var stu1 = new Student()
// __prototype__ 属性和原型链上都会有一份父类对象
```

## 寄生组合继承
:::tip 优缺点
目前最优的继承方法
:::
```js
function Person() {
  this.name = 'sanm'
  this.eats = ['香蕉']
  this.getName = () => console.log(this.name)
}
Person.prototype.getFn = () => console.log('Person.prototype 上面的方法')

function Student() {
  Person.call(this)
}

var PersonPrototype = function() {}
PersonPrototype.prototype = Person.prototype
Student.prototype = new PersonPrototype()

var stu1 = new Student()
```

# ES6类继承
:::tip
ES6新语法糖，原生支持
:::

```js
class Person {
  constructor(name = 'sanm', eats = ['香蕉']) {
    this.name = 'sanm'
    this.eats = ['香蕉']
    this.getName = () => console.log(this.name)
  }
  getFn = () => console.log('Person.prototype 的方法')
}

class Student extends Person {
  constructor(name, eats) {
    // super Person.prototype.constructor.call(this)
    super(name)
    this.eats = eats
  }
}

var stu1 = new Student()
console.log(stu1)
```