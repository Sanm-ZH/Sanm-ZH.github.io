---
author: sanmzh
title: promise async await学习
categories: [JavaScript]
tags: [js]
date: 2021-07-29 15:53:09
---

<Boxx changeTime="30000"/>

### 有什么用？能提供什么解决方案
是一种新的异步编程方案，优雅的规避了回调地狱
```js
// 这里使用ajax演示，使用别的同理
const http = function(params, successCallback, errorCallback) {
  $.ajax({
    type: 'POST',
    data: params,
    success: function(res) {
      successCallback(res)
    },
    error: function(err) {
      errorCallback(err)
    }
  })
}

// 当需求多次请求且请求直接由关联，就会出现下面的情况
http(param, function(res) {
  var data = res.data
  http(data.id, function(res) {
    var result = res
    ...
  }, function(err) {})
}, function(err) {})

const $http = function(params) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: 'POST',
      data: params,
      success: function(res) {
        resolve(res)
      },
      error: function(err) {
        reject(err)
      }
    })
  })
}

// 一般用法
let data = {}
$http(params)
  .then(res => $http(res.data.id))
  .catch(err => console.log(err))
  .then(res => {
    data = res.data
  })
  ...

// 结合 async await
// 通过 async 包裹的函数可在内部使用 await 关键字
// 使用一个自运行的函数
(async function(){
  const res = await $http(params)
  const res2 = await $http(res.data.id)
  console.log(res2)
})()
```

### Promise常用方法
- **all()**
- **race()**
- **finally()**

#### all()
```js
// 此方法在集合多个 promise 的返回结果时很有用
// Promise.all([p1, p2, p3])

const p1 = Promise.resolve(1)
const p2 = 2
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, 3)
})

Promise.all([p1, p2, p3]).then(res => {
  console.log(res)

  // output
  // [1, 2, 3]
})
```

#### race
方法返回一个 `promise`，一旦迭代器中的某个`promise`解决或拒绝，返回的`promise`就会解决或拒绝

```js
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
var p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "one");
});
var p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "two");
});

Promise.race([p1, p2]).then(function(value) {
  console.log(value); // "two"
  // 两个都完成，但 p2 更快
});

var p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "three");
});
var p4 = new Promise(function(resolve, reject) {
    setTimeout(reject, 500, "four");
});

Promise.race([p3, p4]).then(function(value) {
  console.log(value); // "three"
  // p3 更快，所以它完成了
}, function(reason) {
  // 未被调用
});

var p5 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "five");
});
var p6 = new Promise(function(resolve, reject) {
    setTimeout(reject, 100, "six");
});

Promise.race([p5, p6]).then(function(value) {
  // 未被调用
}, function(reason) {
  console.log(reason); // "six"
  // p6 更快，所以它失败了
});
```

ps: `async` 可能会出现错误，但是可以通过 `Promise.catch` 进行捕获