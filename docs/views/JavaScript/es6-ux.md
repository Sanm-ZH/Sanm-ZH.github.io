---
author: sanmzh
title: ES6 基础运用
categories: [JavaScript]
tags: [js, es6]
date: 2021-10-12 10:38:26
---

<Boxx changeTime="30000"/>

### 对象解构
```js
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

// old
const a = obj.a
const b = obj.b
const c = obj.c
const d = obj.d
const e = a + c
const f = b + d

// es6
const {a, b, c, d} = obj
const e = a + c
const f = b + d

// es6重命名
// 有时与后台返回对不上，可以使用重命名变量名
const {a: a1} = obj
console.log(a1) // 1

```
**注意**：使用解构时，对象不能为 `undefined`、`null`，否则会报错，所以在被解构对象一个默认值
```js
const {a,b,c,d} = obj || {}
```

### 合并数据
合并数组、对象
```js
const a = [1, 2, 3]
const b = [2, 4, 6]
const c = a.concat(b) // [1,2,3,2,4,6]

// es6
console.log([...a, ...b]) // [1,2,3,2,4,6]

const obj1 = {a: 1}
const obj2 = {b: 2}
const obj3 = Object.assign({}, obj1, obj2) // {a: 1, b: 2}

// es6
console.log({...obj1, ...obj2}) // {a: 1, b: 2}
```

### 拼接字符串
```js
const name = '张三'
const score = 66

if(score < 60) {
  console.log(`${name}成绩不及格`)
} else {
  console.log(`${name}成绩及格`)
}

// 在模板字符串中其实是可以进行运算的
console.log(`${name}成绩${score < 60 ? '不及格' : '及格'}`)
```

### if 判断条件
```js
if(type === 1 || type === 2 || type === 3) {
  // xxxxx
}

const conditionArr = [1, 2, 3]
if(conditionArr.includes(type)) {
  // xxxxx
}
```