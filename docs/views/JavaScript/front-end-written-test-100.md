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