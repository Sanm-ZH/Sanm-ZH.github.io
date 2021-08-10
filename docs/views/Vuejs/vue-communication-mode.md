---
author: sanmzh
title: vue 通信方式
categories: [Vuejs]
tags: [vue]
date: 2021-08-10 11:35:40
---

<Boxx changeTime="30000"/>

### Vue2组件通信

> 父组件向子组件传值
### `props`
- 父组件以属性的方式传值给子组件
- 子组件通过 `props` 方式接收数据
```vue
// parent.vue
<template>
  <Child :pData="pData"></Child>
</template>

<script>
import Child from './Child'
export default{
  name:'Parent',
  components:{ Child },
  data() {
    return {
      pData: '父 -> 子 props方式'
    }
  }
}
</script>

// child.vue
<template>
  <div>父组件传递的原数据：{{ pData }}</div>
  <div>根据父组件传递数据新生成的数据：{{ mData }}</div>
</template>

<script>
export default{
  name:'Child',
  props: {
    pData: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      mData: 'Child：' + this.pData
    }
  },
  watch: {
    pData(nV) {
      this.mData = 'Child：' + this.pData
    }
  }
}
</script>
```
使用`vue`时要遵守`单向数据流`机制，子组件不能直接修改父组件传递的值

> 子组件向父组件传值
### `$emit()`
- 子组件绑定自定义事件
- 使用 `$emit()`触发更新

```vue
// child.vue
<template>
  <button type="button" @click="handleClick">点击更改<button>
</template>

<script>
  export default{
    name: 'Child',
    methods: {
      handleClick() {
        this.$emit('triggerEvent', '子级触发')
      }
    }
  }
</script>

// parent.vue
<template>
  <Child @triggerEvent="handleChange" />
</template>

<script>
import Child from './Child'
export default{
  name: 'Parent',
  components: { Child },
  methods: {
    handleChange(msg) {
      console.log(msg) // 子级触发
    }
  }
}
</script>
```

> 兄弟直接传值
### `$emit`、`props`组合使用
- 父组件引入两个子组件
- 父组件当做中间人（桥梁）

~~demo 略~~

### bus方式
- 创建一个公共的`bus.js`文件
- 暴露出`Vue`实例

```js
// bus.js
import Vue from 'vue'

export default new Vue()
```
```vue
// a.vue
<template>
  <div>
    <span>组件A</span>
    <button @click="handleClick">点击更改</button>
  </div>
</template>

<script>
import { EventBus } from "./bus.js"
export default{
  name: 'A',
  methods: {
    handleClick() {
      EventBus.$emit('clickChange', '点击更新')
    }
  }
}
</script>

// b.vue
<template>
  <div>
    <span>组件B</span>
  </div>
</template>

<script>
import { EventBus } from "./bus.js"
export default{
  name: 'B',
  mounted:{
    EventBus.$on('clickChange',(msg)=>{
      console.log(msg) // 点击更新
    })
  }
}
</script>
```
通过引入`bus.js`文件，使得`EventBus`获得Vue实例，实际上和上一种方式是类似的

> 直接访问组件实例
### `parent`、`children`
- 子组件通过 `$parent` 获得父组件实例
- 父组件通过 `$children` 获得子组件实例数组

直接访问组件实例，可以获取到组件的方法、data的数据等，并可以直接使用和执行

父组件获取子组件实例是返回数组的形式，使用时要精确到某个组件

### `$refs`
- 父组件使用 `$refs` 获得组件实例
```vue
// parent.vue
<template>
  <Child ref="child" />
</template>

<script>
import Child from './Child'
export default{
  name: 'Parent',
  components: { Child },
  mounted() {
    console.log(this.$refs.child) // child组件实例
  }
}
</script>
```

> 多组件或深层次组件通信
### `provide`、`inject`
- 父组件使用 `provide` 注入数据
- 子组件使用 `inject` 获取数据

`provide` 数据可以提供给所有子组件、或更深层次的子孙组件

```vue
// parent.vue
<template>
  <Child :pData="pData"></Child>
</template>

<script>
import Child from './Child'
export default{
  name:'Parent',
  components:{ Child },
  provide: {
    return {
      pData: '父 -> 子注入方式'
    }
  }
}
</script>

// child.vue
<script>
export default{
  name:'Child',
  inject: ['pData'],
  created() {
    console.log(pData) // 父 -> 子注入方式
  }
}
</script>
```
**好处：**
- 父组件不需知底
- 子附件不需溯源

### vuex
- 相当于一个公共数据的仓库
- 提供一些方法管理仓库数据

参考：[vuex](https://vuex.vuejs.org/zh)

