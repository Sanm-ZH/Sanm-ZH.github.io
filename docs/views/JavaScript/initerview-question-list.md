---
author: sanmzh
title: js高频面试题
categories: [JavaScript]
tags: [js,interview]
date: 2022-04-26 15:33:17
---

<Boxx changeTime="30000"/>

# var/let/const 区别
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

# 函数提升和变量提升
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
### 常见题
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