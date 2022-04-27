---
author: sanmzh
title: js高频面试题
categories: [JavaScript]
tags: [js,interview]
date: 2022-04-26 15:33:17
---

<Boxx changeTime="30000"/>

## var/let/const 区别
1. **`var` 存在变量提升，而`let`和`const`没有（`let`和`const`存在暂时性死区）**
```js
// 
console.log(a)  // undefined
var a = 3
// var a => console.log(a) => a = 2

// 暂时性死区，变量只有在声明初始化后才能使用
console.log(a1) // 报错
let a1 = 3;

console.log(a2) // 报错
const a2 = 3;
```

2. **作用域的限制：`var`不受作用域限制，而`let`和`const`受当前作用域限制**
```js
{
  var a = 3
}
console.log(a)  // 3

{
  let a1 = 3
  const a2 = 3
}
console.log(a1) // not defined
console.log(a2) // not defined
```

3. **重复声明：`var`声明变量可以重复，而`let`和`const`不行**
```js
var a = 3
console.log(a)  // 3
var a = 2
console.log(a)  // 2

let a1 = 3
cosole.log(a1)  // 3
let a1 = 2
console.log(a1)  // Uncaught SyntaxError: Identifier 'a1' has already been declared

let a2 = 3
cosole.log(a2)  // 3
let a2 = 2
console.log(a2)  // Uncaught SyntaxError: Identifier 'a2' has already been declared
```

4. **`const`声明的是一个常量，一定要有初始值，否则会报错；不能更改，但是当为对象类型时，可以更改内部属性**
```js
const a = 1
a = 3 // Uncaught TypeError: Assignment to constant variable.
const a1 = {a: 1}
a1.a = 3
console.log(a1) // {a: 3}
```

## 函数提升和变量提升
1. **变量提升**
```js
console.log(a)  // undefined
var a = 3
// var a => console.log(a) => a = 2
```

2. **函数提升**
```js
console.log(fn)
// ƒ fn() {
//   console.log(123)
// }
console.log(fn()) // 123
function fn() {
  console.log(123)
}
```
#### 常见题
```js
// 题目1
console.log(a)  // => undefined
var a = 1

// 题目2 先同步后异步
for(var i = 0; i <=3; i++) {
  console.log(i)  // 0 1 2 3
  setTimeout(() => console.log(i))  // 4 4 4 4
}
// 需要在延时里面返回正确的结果，把for循环的var改成let

// 题目3
function fn() {
  var a = 99
  fn1()
  console.log('1: ', a)
  function fn1() {
    console.log('2: ', a)
    var a = 10
    console.log('3: ', a)
    // 函数内运行，就近原则，内部声明了变量，先取内部的
  }
}
fn()

// 2: undefined
// 3: 10
// 1: 99

function fn2() {
  var a = 99
  fn1()
  console.log('1: ', a)
  function fn1() {
    console.log('2: ', a)
    a = 10
    console.log('3: ', a)
  }
}
fn2()
// 2:  99
// 3:  10
// 1:  10

// 题目4
var a = 1
function fn4() {
  console.log('1: ', a)
  var a = 2;
  console.log('2: ', a)
  function a() {
    console.log('3: ', a)
  }
  console.log('4: ', a)
}
fn4()

// 1:  ƒ a() {
//       console.log('3: ', a)
//     }
// 2:  2
// 4:  2

// 当没有声明变量使用变量时，函数提升优先级会比 var 声明优先级更高
```

## JS的运行机制
1. **关于JavaScript**
`JavaScript`是一门单线程语言，单线程就意味着，所有任务都要依次运行，前一个任务结束了才会执行下一个任务，如果前面任务耗费时间很长，那后面的任务就会阻塞，这有会照成资源分配浪费

所以`JavaScript`语言设计者为了规避这个问题，把`JavaScript`所有的任务分为两种，**同步任务**和**异步任务**

- **同步任务：** 在主线程上排队的任务，前一个任务执行完毕才能进行下一个任务
- **异步任务：** 不进入主线程中执行，是进入任务队列的任务，只有任务队列通知主线程，某个异步任务可以执行了，任务才会进入主线程执行

2. **`JavaScript`的事件循环（`EventLoop`）**
**先进行同步操作，异步操作排在事件队列里**
- 先判断是同步还是异步任务，同步任务就进入主线程，异步任务就进入`Event Table`
- 异步任务在Event Table中注册事件，当满足触发条件的时候，会被推入到`Event Queue`
- 同步任务进入到主线程中执行，当主线程空闲时，才会去`Event Queue`中看是否有需要执行的异步任务，如果有，就推入主线程中执行

3. **宏任务和微任务是什么**
**异步任务分为宏任务和微任务**
- **宏任务：** `setTimeout`，`setInterval`，整体代码`script`
- **微任务：** `Promise.then`
**执行顺序：** 先执行微任务，再执行宏任务

#### 常见题
```js
// 1、同步任务
console.log(1)
console.log(2)
console.log(3)
// 1 2 3

// 2、异步任务
console.log(1)
setTimeout(() => console.log(2), 100)
setTimeout(() => console.log(3), 0)
console.log(4)
// 1 4 3 2

// 1.先执行同步任务，按照顺序一步步来
// 2.然后开始执行异步任务，异步任务开始执行时，会将异步任务放入事件表格(EventTable)中，当满足了某些条件（比如这里的条件就是0ms和100ms) 之后，才会从事件表格中注册到事件队列(EventQueue)，当第1步中的同步事件完成了，才会从事件队列中获取任务去执行

// 3、宏任务和微任务  同步 -> 微任务 -> 宏任务
console.log(1)
setTimeout(() => console.log(2))
new Promise((resolve, reject) => {
  console.log(3)
  resolve()
}).then(() => {
  console.log(4)
})
setTimeout(() => console.log(5))
new Promise((resolve, reject) => {
  console.log(6)
  reject()
}).then(() => {
  console.log(7)
}).catch(() => {
  console.log(8)
})
console.log(9)

// 1 3 6 9 4 8 2 5

// 4、混合任务题型
console.log(1);
setTimeout(() => {
  console.log(2)
  new Promise((resolve) => {
    console.log(3)
    resolve()
  }).then(() => console.log(4))
})

new Promise((resolve) => {
  console.log(5)
  resolve()
}).then(() => console.log(6))

setTimeout(() => {
  console.log(7)
  new Promise((resolve) => {
    console.log(8)
    resolve()
  }).then(() => console.log(9))
})
console.log(10)

// 1 5 10 6  2 3 4  5 6  7 8 9
```

#### 总结
- 同步先执行，异步后执行
- 遇到`new Promise`直接执行，`then`中的方法直接放入微任务队列中
- 遇到`setTimeout`放入宏任务队列中
- 执行顺序：同步 --> 微任务(`promise then`) --> 宏任务(`setTimeout`)

## this的指向问题
:::tip
1. 普通函数中，`this`是它的直接调用者，谁调用，`this`就指向谁
2. 箭头函数，`this`指向跟外部作用域中`this`指向是同一个
:::

#### 常见题
```js
var a = 1;
function fn1() {
  var a = 2;
  console.log(this.a + a)
}
function fn2() {
  var a = 10;
  fn1()
}
fn2()
// 输出：3

// fn1是直接运行，this指向全局

var a = 1;
var obj = {
  a: 2,
  fn1: function () {
    console.log(this.a)
  },
  fn2: () => {
    console.log(this.a)
  }
}
obj.fn1()
obj.fn2()

// 输出：2 1

// fn1普通函数，谁调用this指向谁
// fn2箭头函数，和外部作用域是一样的，相当于全局

const obj = {
  name: '小明',
  say() {
    console.log(`你好！${this.name}`)
  }
}
const func = obj.say;

obj.say();
func();
setTimeout(obj.say, 100)
setTimeout(func, 200)
setTimeout(function () {
  obj.say()
}, 300)
setTimeout(() => obj.say(), 400)

// 输出：
// 你好！小明
// 你好！
// 你好！
// 你好！
// 你好！小明
// 你好！小明

```