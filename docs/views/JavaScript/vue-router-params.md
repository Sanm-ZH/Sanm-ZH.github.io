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

### props传参
:::tip
组件中用 `$route` 传参其实限制了组件的灵活，因为它只能用于特定的 `url`。
使用 `props` 传参，这很好的解决这个痛点，但使用这种方式传参，需要在路由配置中进行配置。
:::

```js
// 将 props 设置为 true 时，route.params 将被设置为组件的 props
const routes = [{ path: '/user/:id', component: User, props: true }]

// 也可以配置成 props 对象
const routes = [{ path: '/user', component: User, props: { id: '3' } }]

// 也可以配置成一个函数，函数返回对应的 props 对象即可
const routes = [{ path: '/user', component: User, props: () => { id: '3' } }]

// 组件获取参数
const User = {
  porps: ['id']
}
```
**注意**：路由 `props` 传参时，尽可能保持无状态，因为它只会在路由发生变化时起作用。如果你需要状态来定义 props，请使用包装组件，这样 vue 才可以对状态变化做出反应。

### 其他传参
- 通过 `vuex` 传参
- 本地存储
  1. Local Storage
  2. Session Storage
  3. IndexedDB
  4. Web SQL
  5. Cookies