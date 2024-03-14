---
author: sanmzh
title: vue3 Hooks的一些理解
categories: [Vuejs]
tags: [vue, vue-hooks]
date: 2024-3-14 17:24:22
keys: 
  - 'f7e0b956540676a129760a3eae309294'
---

<Boxx changeTime="30000"/>

:::tip 背景
对于组合式API官方的解释是：在 Vue 应用的概念中，“组合式函数”(Composables) 是一个利用 Vue 的组合式 API 来封装和复用有状态逻辑的函数。

但是官方并没有对自定义Hooks做任何定义，却潜移默化的使用这个方案，很多开源项目也在推崇这个方案。

所以对于我们学习者来说，学习组合式API是一个很值得的方向。

> ps：文档只阴阳了一波`React Hooks` [证据](https://cn.vuejs.org/guide/extras/composition-api-faq.html#comparison-with-react-hooks)。
:::

<!-- more -->

