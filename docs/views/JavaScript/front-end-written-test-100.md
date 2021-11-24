---
author: 战场小包
title: 前端笔试题
categories: [JavaScript]
tags: [js]
date: 2021-11-23 16:58:32
---

<Boxx changeTime="30000"/>

## 单选题
### JS基础
#### js概念与类型检测
- 以下不属于 `typeof` 运算符返回值的是？
```js
A. "string"
B. "function"
C. "object" // typeof [] => "object" typeof {} => "object"
D. "null" // typeof null => "object"

// D
```
- 执行以下代码，错误的输出结果是？
```js
A. 输入：typeof {"x":1} 输出："object"  // 'object'
B. 输入：typeof 1 输出："number"  // 'number'
C. 输入：typeof [{x:1}] 输出："array" // 'object'
D. 输入：typeof NaN 输出："number"  // 'NaN'

// C
```
- 可以用 `typeof` 来判断的基本类型有?
```js
A. undefined
B. null
C. array  
D. object

// A
```
- 以下不属于JavaScript基本数据类型的是?
```js
A. Boolean
B. undefined
C. Symbol
D. Array // 数组、对象

// D
```
- 以下关于JavaScript中数据类型的说法错误的是?
```js
A. 数据类型分为基本数据类型和引用数据类型
B. JavaScript一共有8种数据类型  // 基本数据类型：string boolean number undefined null symbol（新增） 引用数据类型：object array function
C. Object是引用数据类型，且只存储于堆(heap)中 // 引用类型是存放在堆内存中的对象，变量其实是保存的在栈内存中的一个指针（保存的是堆内存中的引用地址），这个指针指向堆内存。
D. BigInt是可以表示任意精度整数的基本数据类型，存储于栈(stack)中 // 新增的一种基本类型

// C
```
#### 逻辑判断
- 请选择结果为 `ture` 的表达式？
```js
A. null instanceof Object // false
B. null === undefined // false
C. null == undefined  // true
D. NaN == NaN // false

// C
```
- 下列代码结果为 `true` 的是？
```js
A. Symbol.for('a') === Symbol.for('a')  // true
B. Symbol('a') === Symbol('a')  // false
C. NaN === NaN  // false
D. {} === {}  // false

// A
```

- 下列代码结果为 `true` 的是？
```js
var a = 1;
var b = [];
var c = '';
var d = true;

A. (a || b) === true  // (a || b) => 1
B. (b && c) === true  // (b && c) => ''
C. (c && d) === true  // '' && true
D. (d || a) === true  // true || 1

// D
```
- `1 == true` 的返回值是 `true`，这句话是否正确？
```js
A. T
B. F

// A
```
- 下面代码输出为 `true` 的是?
```js
A. console.log([] === []);  // false 引用对象
B. console.log(undefined == 0); // false
C. console.log(undefined == false); // false
D. console.log(false == '');  // true

// D
```
- 浏览器环境下，以下打印结果为`true`的是?
```js
A. console.log("12" === 12) // false
B. console.log (NaN === NaN)  // false
C. console.log (typeof(null) === typeof(window))  // "object" === "object"
D. console.log ([1,2,3] === [1,2,3])  // false

// C
```
- 以下表达式，正确的是?
```js
A. Number('a') == Number('a') // NaN == NaN
B. -1 == true // false
C. 3 + '2' === 5  // '32' === 5
D. ![] == '' 

// D
```