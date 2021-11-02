---
author: sanmzh
title: Vue Router 组件传参
categories: [Vuejs]
tags: [vue,vue-router]
date: 2021-11-02 20:39:03
---

<Boxx changeTime="30000"/>

### params传参
```js
// router.push() 可以传递一个字符串路径或者一个描述路径的对象
this.$router.push('/home')

// parmas 不能和 path 一起使用，如果提供了将会忽略 params
this.$router.push({ name: 'Home', params: {name: 'sanm'} })

// 组件通过 route.params 获取传递的参数
this.$route.params // { name: 'sanm' }
```

### query传参
这种和传统的传参一样，参数会拼接在 `url` 后面，如：`xxxx/xxx?id=3&name=sanm`

下面三种方式都是可以进行 `query`传参的
```js
this.$router.push('/xxxx/xxx?id=3&name=sanm')

this.$router.push({ path: '/xxxx/xxxx', query: {id: 3, name: 'sanm'} })

this.$router.push({ name: 'xxxx', query: {id: 3, }, params: { name: 'sanm' }})

// 组件通过 route.query 获取传递的参数
this.$route.query
```

### hash传参
这种和传统的传参一样，参数会拼接在 `url` 后面，如：`xxxx/xxx#user`

下面三种方式都是可以进行 `hash`传参的
```js
this.$router.push('/xxxx/xxx?#user')

this.$router.push({ path: '/xxxx/xxxx', hash: '#user' })

this.$router.push({ name: 'xxxx', hash: '#user', params: { name: 'sanm' }})

// 组件通过 route.hash 获取传递的参数
this.$route.hash.slice(1)
```