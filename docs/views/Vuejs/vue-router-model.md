---
author: sanmzh
title: Vue-router 两种模式及实现原理
categories: [Vuejs]
tags: [vue, js, router]
date: 2021-07-09 11:29:49
---

<Boxx changeTime="30000"/>

:::tip 前言
前端路由有两种模式分别是 `hash` 和 `history`
`history` 是 `HTML5` 新推出的一个 `API`
:::

## hash 模式
`hash` 模式是一种把前端路径用 `#` 拼接在真实 `URL` 后面的模式</br>
当 `#` 后面的内容发生变化时，浏览器不会重新发起请求，而是触发 `hashchange` 事件

```html
<!-- router-hash.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>router-hash</title>
</head>
<body>
  <a href="#/page1">页面1</a>
  <a href="#/page2">页面2</a>
  <div id="routerView"></div>

  <script>
    function routerChange() {
      const app = document.querySelector('#routerView')
      app.innerHTML = window.location.hash
    }
    window.addEventListener('hashchange', routerChange)
  </script>
</body>
</html>
```

把 `app` 当做容器，点击 `a` 标签，触发容器更新，大多数前端框架哈希路由的实现原理就是类似

### hash 模式的优缺点
**优点**
- 只需要前端配置，不需要其他配置
- 兼容性好，老版本浏览器都能支持
- `hash` 值改变不会向后台发送请求

**缺点**
- `hash` 值前面要加 `#`，不符合 `url` 规范

## history 模式
`history API` 是 `H5` 提供的新特性，允许开发者直接更改前端路由，更新浏览器 `URL` 而不重新发起请求

```html
<!-- router-history -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>router-history</title>
</head>
<body>
  <a href="javascript:toPage1();">页面1</a>
  <a href="javascript:toPage2();">页面2</a>
  <div id="routerView"></div>
  <script>
    function routerChange() {
      const app = document.querySelector('#routerView')
      app.innerHTML = window.location.pathname
    }
    function toPage1() {
      history.pushState({}, null, '/page1')
      routerChange()
    }
    function toPage2() {
      history.pushState({}, null, '/page2')
      routerChange()
    }
    window.addEventListener('popstate', routerChange)
  </script>
</body>
</html>
```

`history API` 提供了一些方式供开发者使用

```js
history.replaceState({}, null, '/page2') // 替换路由
history.pushState({}, null, '/page1') // 路由压栈 替换当前地址 被替换地址进入访问历史
history.back() // 返回
history.forward() // 前进
history.go(-2) // 后退2次
```

监听 `popstate` 事件，能监听：
- 点击浏览器**前进后退**
- 手动调用 `history` 的 `back`、`forward`和`go`方法

**监听不到**
- `history` 的 `pushState` 和 `replaceState` 方法

浏览器在刷新的时候，会 `按照路径` 发送真实的资源请求，如果这个路径是前端通过 `history API` 设置的 `URL`，那么在服务端不存在这个资源，于是就会返回 `404`

所以线上部署基于 `history API` 的 单页面应用，一定后服务端配置重定向才行，否则会会出现 `404`

```sh
# nginx.conf
try_files $uri /index.html
```

### history 模式的优缺点
**优点**
- 符合 `url` 地址规范，不需要 `#`

**缺点**
- 兼容性不如 `hash`，且需要服务器支持重定向，否则一刷新页面就 `404`
- 利用了 `HTML5 History` 对象中新增的 `pushState()` 和 `replaceState()` 方法，需要特定浏览器的支持

## 传统路由跟前端路由区别
**传统路由**：当用户访问 `url`，对应服务器会接收这个请求，解析 `url` 中的路径，从而执行对应的处理逻辑。这样就完成了一次路由分发</br>
**前端路由**：不涉及服务器，是前端利用 `hash` 或 `HTML5` 的 `history API` 来实现的，一般用于不同内容的展示和切换