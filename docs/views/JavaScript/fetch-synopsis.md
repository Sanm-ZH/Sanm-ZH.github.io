---
author: sanmzh
title: Fetch简单使用封装
categories: [JavaScript]
tags: [js]
date: 2022-04-15 14:17:49
---

<Boxx changeTime="30000"/>

:::tip 与ajax的区别
`ajax` 与 `fetch` 都是前端开发过程中常用到的数据请求方式。`fetch` 是一种 `http` 数据请求的方式，是 `XMLHttpRequest` 的一种替代方案；`ajax` 使用 `JavaScript` 向服务器提出请求并处理响应而不阻塞用户核心对象 `XMLHttpRequest`。
:::

## api
- **fetch**
    `Fetch API` 提供了一个 `JavaScript` 接口，用于访问和操纵 `HTTP` 管道的部分，例如请求和响应。它还提供了一个全局 `fetch()` 方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源
  - 第一个参数是URL
  - 第二个是可选参数，可以控制不同配置的 `init` 对象
  - 使用了 `JavaScript Promises` 来处理结果/回调

## 基本语法
```js
fetch(url).then(response => response.json())
  .then(data => console.log(data))
  .catch(e => console.log("Oops, error", e))
```

## 封装
```js
window.Fetch = (url,option)=>{
  return new Promise((resolve, reject) => {
    let data = {
      method: "POST",
      headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: {},
    };
    data = JSON.parse((JSON.stringify(data)+JSON.stringify(option)).replace(/}{/,','));
    fetch(url,data).then(res=>{
      // .text()：返回字符串
      // .json()：返回一个JSON对象
      // .formData()：返回一个FormData对象
      // .blob()：返回一个blob对象
      // .arrayBuffer()：返回一个二进制数组
      resolve(res.json())
    }).catch(function (res) {
        reject(res)
    })
  });
}
```