---
author: sanmzh
title: ES6 promise
categories: [JavaScript]
tags: [js]
date: 2021-07-28 13:53:52
---

<Boxx changeTime="30000"/>

:::tip
`Promise`是一种异步编程的解决方案，解决了传统回调的一些痛点
:::

### Promise 立即执行性
```js
const p = new Promise((resolve, reject) => {
  console.log('立即执行')
  resolve('返回成功')
})

console.log('后执行')

p.then(res => {
  console.log(res)
})

// 执行输出
// “立即执行”
// “后执行”
// “返回成功”
```

### Promise 三种状态
```js
p1 = new Promise((resolve, reject) => {
  resolve(1)
})
p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 800)
})
p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3)
  }, 500)
})

p1.then(res => console.log(res))
p2.then(res => console.log(res))
p3.catch(res => console.log(res))
```
`Promise`内部实现是一个状态机，`Promise`有三种状态: `pending`，`resolved`，`rejected`。当`Promise`刚创建完成时,处于`pending`状态；当`Promise`中的函数参数执行了`resolve`后，`Promise`由`pending`状态变成`resloved`状态；如果`Promise`的函数参数中执行的是`reject`方法,那么`Promise`会有`pending`状态变成`rejected`状态。

### Promise 状态不可逆
`Promise`的状态一旦变成`resolved`或`rejected`时，`Promise`的状态和值就固定下来了，无论后续再怎么调用`reslove`或是`reject`方法，都不能改变它的状态和值。

### Promise 链式调用
```js
p = new Promise((resolve, reject) => {
  resolve(1)
})

p.then(res => {
    console.log(res)
    return res + 2
}).then(res => {
    console.log(res)
}).then(res => {
    console.log(res)
    return Promise.resolve('resolve')
}).then(res => {
    console.log(res)
    return Promise.reject('reject')
}).then(res => {
    console.log(res)
}, err => {
    console.log(`err：${err}`)
})

// output
// 1
// 3
// undefined
// resolve
// err：reject
```
- `return`一个同步的值，或者`undefined`(当没有返回一个有效值时,默认返回`undefined`)，`then`方法将返回一个`resloved`状态的`Promise`对象，`Promise`对象的值就是这个返回值。
- `return`另一个`Promise`，`then`方法将根据这个`Promise`的状态和值创建一个新的`Promise`对象返回。
- `throw`一个同步异常，`then`方法将返回一个`rejected`状态的`Promise`，值是该异常。

### Promise then 回调异步性
```js
p = new Promise((resolve, reject) => {
  resolve('成功')
});

p.then(res => {
  console.log(res)
})

console.log('谁先')

// output
// 谁先
// 成功
```
:::warning
`Promise`回调函数中的第一个参数`resolve`，会对`Promise`执行**拆箱**
`Promise`回调函数中的第二个参数`reject`不具备**拆箱**的能力
:::

### Promise 异常
`Promise`中的异常由`then`参数中的第二个回调函数(`Promise`执行失败的回调)处理，异常信息将作为`Promise`的值。异常一旦得到处理，`then`返回后续的`Promise`对象将恢复正常，并会被`Promise`执行成功的回调函数处理。