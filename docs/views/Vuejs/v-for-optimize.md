---
author: sanmzh
title: v-for 小技巧
categories: [Vuejs]
tags: [vue, v-for]
date: 2021-08-05 15:14:18
---

<Boxx changeTime="30000"/>

### `v-for` 循环中使用 `key`
在 `v-for` 循环中使用 `key`。通过设置唯一的 `key` 属性，可以确保你的组件按期望的顺序排列。如果我们不使用 `key`，`vue` 将会使 `DOM` 尽可能的高效，这可能导致 `v-for` 元素可能出现乱序或其他不可预测的行为。对每个元素都有一个唯一的键引用，可以更好地预测 `DOM` 将会如何被操纵。
```vue
<template>
<li   
  v-for='item in list'  
  :key='item.id'    
>  
  {{ item.name }}  
</li> 
</template>
```

### `v-for` 中不要使用 `v-if`
在 `v-for` 循环中使用 `v-if` 来过滤数据很常见的错误，虽然这样看起来很直观，但它会导致一个巨大的性能问题 `vue` 的 `v-for` 优先于 `v-if` 指令。这意味着你的组件会遍历每一个元素，然后检查 `v-if` 条件查看它是否应该被渲染。
:::tip
把 `v-if` 与 `v-for` 放在一起使用，无论条件是什么，都会将遍历数组的每一个元素。
:::
```vue
<template>
<ul>  
  <li   
    v-for='item in list'   
    :key='item.id'   
    v-if='item.status'  
  >  
    {{ item.name }}  
  </li>  
</ul>
</template>
```
一般情况都是，不同状态有对应的列表，如果非要处理，可以提前处理，保证 `v-for` 遍历的是已经处理过的数据

针对上面问题可以用下列方法优化：
- 计算属性
- 过滤方法
- 循环放到 `v-if` 包装中

**计算属性**
```vue
<template>
...
  <li v-for='item in listFilter' :key='item.id' >  
    {{ item.name }}  
  </li>
...
</template>

<script>  
  export default {  
    data () {  
      return {  
        list: []  
      }  
    },  
    computed: {  
      listFilter: function () {  
        return this.list.filter(item => !!item.status)
      }
    }
  }  
</script>
```
**方法**
```vue
<template>
...
  <li v-for='item in listFilter(false)' :key='item.id' >  
    {{ item.name }}  
  </li>
...
</template>

<script>  
  export default {  
    data () {  
      return {  
        list: []  
      }  
    },  
    methods: {  
      listFilter(status) {  
        return this.list.filter(item => !!item.status === status)
      }
    }
  }  
</script>
```

**`v-if` 包装**
```vue
<template>
<ul v-if='isShow'>
  <li   
    v-for='item in list'   
    :key='item.id'   
  >  
    {{ item.name }}  
  </li>  
</ul>
</template>
```

### 访问索引
```vue
<template>
  <li   
    v-for='(item, index) in list'   
    :key='item.id'   
  >  
    {{ `${index} - ${item.name}` }}  
  </li>  
</template>
```

### 迭代对象
```vue
<template>
<li v-for='(products, index) in products' :key='product._id' >  
  <span v-for='(item, key, index) in product' :key='key'>  
    {{ item }}  
  </span>  
</li> 
</template>
```

> ps：在 `v-for` 还可以使用 `for of` 遍历方法