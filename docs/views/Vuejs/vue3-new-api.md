---
author: sanmzh
title: Vue3 新增常用API
categories: [Vuejs]
tags: [vue, js, vue3]
date: 2021-06-25 10:41:53
---

<Boxx changeTime="30000"/>


:::tip 前言
在 `vue3` 中，`vue` 暴露了很多新的 `api` ，我们可以根据自己的需求按需引入，这样打包模块时会减小体积
:::

## setup
`setup` 函数也是 `Composition API` 的入口函数
```vue
<template>
  <div id="test">
    <div>{{ number }}</div>
    <button @click="add">Add</button>
  </div>
</template>

<script>
// 1. 从 vue 中引入 ref 函数
import { ref } from 'vue'

export default {
  name: 'Test',
  setup() {
      // 2. 用 ref 函数包装一个响应式变量 number
      let number = ref(0)
      // 3. 设定一个方法
      // number是被ref函数包装过了的，其值保存在.value中
      cosnt add = () => number.value ++
      // 4. 将 number 和 add 返回出去，供template中使用
      return {
        number,
        add
      }
  }
}
</script>
```
----
`setup` 函数还有两个参数，分别是 `props` 、`context`，前者存储着定义当前组件允许外界传递过来的参数名称以及对应的值；后者是一个上下文对象，能从中访问到 `attr` 、`emit` 、`slots`

其中 `emit` 就是我们熟悉的 `Vue2` 中与父组件通信的方法，可以直接拿来调用

## 生命周期
| Vue2 | Vue3 |
| ---- | ---- |
| beforeCreate | setup |
| created | setup |
| beforeMount | onBeforeMount |
| mounted | onMounted |
| beforeUpdate | onBeforeUpdate |
| updated | onUpdated |
| beforeDestory | onBeforeUnmount |
| destoryed | onUnmounted |

使用，直接在 `vue` 中导入，再进行直接调用
```vue
<template>
  <div id="app"></div>
</template>

<script>
// 从 vue 中引入 多个生命周期函数
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, unMounted } from 'vue'
export default {
  name: 'App',
  setup() {
    onBeforeMount(() => {
        // 在挂载前执行某些代码
    })

    onMounted(() => {
        // 在挂载后执行某些代码
    })

    onBeforeUpdate(() => {
        // 在更新前前执行某些代码
    })

    onUpdated(() => {
        // 在更新后执行某些代码
    })

    onBeforeUnmount(() => {
        // 在组件销毁前执行某些代码
    })

    unMounted(() => {
        // 在组件销毁后执行某些代码
    })

    return {

    }
  }
}
</script>
```

## reactive
`reactive` 方法是用来创建一个响应式数据对象，该 `API` 也很好的解决了 `vue2` 通过 `defineProperty` 实现数据响应的缺陷

```vue
<template>
  <div id="app">
   <!-- 4. 访问响应式数据对象中的 count  -->
   {{ state.count }}
  </div>
</template>

<script>
// 1. 从 vue 中导入 reactive 
import { reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    // 2. 创建响应式的数据对象
    const state = reactive({ count: 3 })

    // 3. 将响应式数据对象state return 出去，供template使用
    return {state}
  }
}
</script>
```

## ref
`ref` 就是通过 `reactive` 包装了一个对象 ，然后是将值传给该对象中的 `value` 属性，这也就解释了为什么每次访问时我们都需要加上 `.value`
我们可以简单地把 `ref(obj)` 理解为这个样子 `reactive({value: obj})`

```vue
<script>
import { ref, reactive } from 'vue'

export default {
  name: 'App',
  setup() {
    const obj = { count: 3 }
    const state1 = ref(obj)
    const state2 = reactive(obj)

    console.log(state1)
    console.log(state2)
  }
}
</script>
```

:::warning 注意
`.value` 是在 `setup` 函数中访问 `ref` 包装后的对象时才需要加的，在 `template` 模板中访问时是不需要的，因为在编译时，会自动识别其是否为 `ref` 包装过的
:::

**建议**
- 基本类型值（`String` 、`Nmuber` 、`Boolean` 等）或单值对象（类似像 `{count: 3}` 这样只有一个属性值的对象）使用 `ref`
- 引用类型值（`Object` 、`Array`）使用 `reactive`

## toRef
`toRef` 是将某个对象中的某个值转化为响应式数据，其接收两个参数，第一个参数为 `obj` 对象；第二个参数为对象中的属性名

```vue
<script>
// 1. 导入 toRef
import { toRef } from 'vue'
export default {
  setup() {
    const obj = { count: 3 }
    // 2. 将 obj 对象中属性count的值转化为响应式数据
    const state = toRef(obj, 'count')

    // 3. 将toRef包装过的数据对象返回供template使用
    return {state}
  }
}
</script>
```
:::tip 总结
- `ref` 是对传入数据的拷贝；`toRef` 是对传入数据的引用
- `ref` 的值改变会更新视图；`toRef` 的值改变不会更新视图
:::

## toRefs
`toRef` 后，就很好理解 `toRefs` 了，其作用就是将传入的对象里所有的属性的值都转化为响应式数据对象，该函数支持一个参数，即 `obj` 对象

```vue
<script>
// 1. 导入 toRefs
import { toRefs } from 'vue'
export default {
  setup() {
    const obj = {
      name: 'sanm',
      age: 33
    }
    // 2. 将 obj 对象中属性count的值转化为响应式数据
    const state = toRefs(obj)

    // 3. 打印查看一下
    console.log(state)
  }
}
</script>
```
同 `toRef`

## shallowReactive
一个浅层的 `reactive`，一个用于性能优化的`API`
`reactive` 包裹一个对象时，如果对象层级不止一层，那么每层都会用 `Proxy` 包装
如果用 `shallowReactive` 包裹，只有在第一层包装 `Proxy`

## shallowRef
一个浅层的 `ref`，与 `shallowReactive` 一样是拿来做性能优化的
`shallowReactive` 是监听对象第一层的数据变化用于驱动视图更新，那么 `shallowRef` 则是监听 `.value` 的值的变化来更新视图的

结合 `triggerRef` 调用后会里面更新视图

## toRaw
`toRaw` 方法是用于获取 `ref` 或 `reactive` 对象的原始数据的

```vue
<script>
import { reactive, toRaw } from 'vue'
export default {
  setup() {
    const obj = {
      name: 'sanm',
      age: 33
    }

    const state = reactive(obj) 
    const raw = toRaw(state)

    console.log(obj === raw)   // true
  }
}
</script>
```

:::tip
当 `toRaw` 方法入参是 `ref` 对象时，需要加上 `.value` 才能获取到原始数据对象
:::

## markRaw
`markRaw` 方法可以将原始数据标记为非响应式，既使用 `ref` 或 `reactive` 将其包装，仍无法实现数据响应式，其接收一个参数，即原始数据，并返回被标记后的数据

```vue
<template>
 <p>{{ state.name }}</p>
 <p>{{ state.age }}</p>
 <button @click="change">改变</button>
</template>

<script>
import { reactive, markRaw } from 'vue'
export default {
  setup() {
    const obj = {
      name: '前端印象',
      age: 33
    }
    // 通过markRaw标记原始数据obj, 使其数据更新不再被追踪
    const raw = markRaw(obj)   
    // 试图用reactive包装raw, 使其变成响应式数据
    const state = reactive(raw) 

    function change() {
      state.age = 27
      console.log(state);
    }

    return { state, change }
  }
}
</script>
```
改变后，不会更新视图，既没有实现数据响应

## provide 、 inject
与 `Vue2` 中的 `provide` 和 `inject` 作用相同，只不过在 `Vue3` 中需要手动从 `vue` 中导入
- **provide** ：向子组件以及子孙组件传递数据。接收两个参数，第一个参数是 `key`，即数据的名称；第二个参数为 `value`，即数据的值
- **inject** ：接收父组件或祖先组件传递过来的数据。接收一个参数 `key`，即父组件或祖先组件传递的数据名称

```vue
// A.vue
<script>
import { provide } from 'vue'
export default {
  setup() {
    const obj= {
      name: 'sanm',
      age: 33
    }

    // 向子组件以及子孙组件传递名为info的数据
    provide('info', obj)
  }
}
</script>

// B.vue
<script>
import { inject } from 'vue'
export default {
    setup() { 
      // 接收A.vue传递过来的数据
      inject('info')  // {name: 'sanm', age: 33}
    }
}
</script>

// C.vue
<script>
import { inject } from 'vue'
export default {
  setup() { 
    // 接收A.vue传递过来的数据
    inject('info')  // {name: 'sanm', age: 33}
  }
}
</script>
```

## watch && watchEffect
`watch` 和 `watchEffect` 都是用来监视某项数据变化从而执行指定的操作的，但用法上还是有所区别

**watch**：`watch( source, cb, [options] )`

参数说明：
- **source**：可以是表达式或函数，用于指定监听的依赖对象
- **cb**：依赖对象变化后执行的回调函数
- **options**：可参数，可以配置的属性有 `immediate`（立即触发回调函数）、`deep`（深度监听）

当监听 `ref` 类型时：
```vue
<script>
import { ref, watch } from 'vue'
export default {
  setup() { 
    const state = ref(0)

    watch(state, (nV, oV) => {
      console.log(`原值为${oV}`)
      console.log(`新值为${nV}`)
    })

    setTimeout(() => {
      state.value ++
    }, 1000)
  }
}
</script>
```
当监听 `reactive` 类型时：
```vue
<script>
import { reactive, watch } from 'vue'
export default {
  setup() { 
    const state = reactive({ count: 0 })

    watch(() => state.count, (nV, oV) => {
      console.log(`原值为${oV}`)
      console.log(`新值为${nV}`)
    })

    setTimeout(() => {
      state.count ++
    }, 1000)
  }
}
</script>
```
当同时监听多个值时：
```vue
<script>
import { reactive, watch } from 'vue'
export default {
  setup() { 
    const state = reactive({ count: 0, name: 'sanm' })

    watch(
      [() => state.count, () => state.name], 
      ([nC, nN], [oC, oN]) => {
        console.log(oC)
        console.log(nC)
        console.log(oN)
        console.log(nN)
      }
    )

    setTimeout(() => {
      state.count ++
      state.name = 'sanmzh'
    }, 1000)
  }
}
</script>
```
`watch` 方法的第一个参数我们已经指定了监听的对象，因此当组件初始化时，不会执行第二个参数中的回调函数，若我们想让其初始化时就先执行一遍，可以在第三个参数对象中设置 `immediate: true`
`watch` 方法默认是渐层的监听我们指定的数据，例如如果监听的数据有多层嵌套，深层的数据变化不会触发监听的回调，若我们想要其对深层数据也进行监听，可以在第三个参数对象中设置 `deep: true`
:::warning 补充
`watch` 方法会返回一个 `stop` 方法，若想要停止监听，便可直接执行该 `stop` 函数
:::

----

`watchEffect`，它与 `watch` 的区别：
- 不需要手动传入依赖
- 每次初始化时会执行一次回调函数来自动获取依赖
- 无法获取到原值，只能得到变化后的值

```vue
<script>
import {reactive, watchEffect} from 'vue'
export default {
  setup() { 
    const state = reactive({ count: 0, name: 'sanm' })

    watchEffect(() => {
      console.log(state.count)
      console.log(state.name)
      // 会有一次初始化打印
      // 0
      // sanm
      // 一秒后
      // 1
      // sanmzh
    })

    setTimeout(() => {
      state.count ++
      state.name = 'sanmzh'
    }, 1000)
  }
}
</script>
```

## getCurrentInstance
`Vue2` 的任何一个组件中想要获取当前组件的实例可以通过 `this` 来得到，而在 `Vue3` 中我们大量的代码都在 `setup` 函数中运行，并且在该函数中 `this` 指向的是 `undefined` ， `Vue3` `setup` 中可以使用 `getCurrentInstance` 获取 `vue` 实例

```vue
<template>
 <p>{{ num }}</p>
</template>
<script>
import {ref, getCurrentInstance} from 'vue'
export default {
  setup() { 
    const num = ref(3)
    const instance = getCurrentInstance()
    console.log(instance)
    // 主要使用 ctx 和 proxy

    return {num}
  }
}
</script>
```

## useStore && useRouter && useRoute
参考：
- [vuex](https://next.vuex.vuejs.org/zh/)
- [vue-router](https://next.router.vuejs.org/zh/introduction.html)

`useStore` 、 `useRouter` 和 `useRoute` 都是只能在 `setup`中才能使用

```vue
<script>
import { useStore } from 'vuex'
import { useRouter, userRoute } from 'vue-router'
export default {
  setup() { 
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    // 和 vue2 使用方法类似

    console.log(store, router, router)
  }
}
</script>
```

## ref
获取到标签元素或组件，在Vue2中，我们获取元素都是通过给元素一个 `ref` 属性，然后通过 `this.$refs.xx` 来访问的，但这在Vue3中已经不再适用
```vue
<template>
  <div>
    <div ref="el">div元素</div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup() {
    // 创建一个DOM引用，名称必须与元素的ref属性名相同
    const el = ref(null)

    // 在挂载后才能通过 el 获取到目标元素
    onMounted(() => {
      el.value.innerHTML = 'xxxxxx'
    })

    // 把创建的引用 return 出去
    return {el}
  }
}
</script>
```
:::tip 补充
设置的元素引用变量只有在组件挂载后才能访问到，因此在挂载前对元素进行操作都是无效的
:::

如果引用的是一个组件元素，那么获得的将是该组件的实例对象