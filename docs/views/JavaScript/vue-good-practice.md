---
author: sanmzh
title: Vue 优秀写法
categories: [JavaScript]
tags: [vue]
date: 2021-05-06 16:17:16
---

<Boxx changeTime="30000"/>

## v-for 中使用 key
将`key`属性与`v-for`指令一起使用可以让程序保持恒定且可预测

`Vue`就可以跟踪组件状态，并对不同的元素有一个常量引用。在使用动画或`Vue`转换时，`key` 非常有用

如果没有`key` ，`Vue`只会尝试使`DOM`尽可能高效。这可能意味着`v-for`中的元素可能会出现乱序，或者它们的行为难以预测。如果我们对每个元素都有唯一的键引用，那么我们可以更好地预测`Vue`应用程序将如何精确地处理`DOM`操作

```html
<!-- bad -->
<div v-for='item in items'>  </div>

<!-- good -->
<div v-for='item in items' :key='item.id'>
```

## 事件中使用短横线命名
在发出定制事件时，最好使用短横线命名，这是因为在父组件中，我们使用相同的语法来侦听该事件

因此，为了确保我们各组件之间的一致性，并使您的代码更具可读性，请在两个地方都坚持使用短横线命名

```js
this.$emit('save-btn')
```
```html
<parent-panel @save-btn="handleEvent()" />
```
## 使用驼峰式命名 props，模板中使用短横线
在 `JS` 中，驼峰式声明是标准，在`HTML`中，是短横线命名。因此，我们相应地使用它们

Vue 已经提供了驼峰式声明和短横线命名之间转换，因此除了实际声明它们之外，不用考虑其他

```js
// bad
export default {
  props: { 'first-name': String }
}
// good
export default {
  props: { firstName: String }
}
```
```html
<!-- bad -->
<panel firstName="sanm" />
<!-- good -->
<panel first-name="sanm" />
```
## data 始终返回一个函数
声明组件`data`时，`data`选项应始终返回一个函数。如果返回的是一个对象，那么该`data`将在组件的所有实例之间共享

大多数情况，构建的是一个可复用的组件，因此希望每个组件返回一个唯一的对象
```js
// bad
export default {
  data: {
    name: 'sanm'
  }
// good
  data() {
    return {
      name: 'sanm'
    }
  }
}
```
## 不要在同个元素上使用 v-if 和 v-for 指令
`Vue` 优先使用`v-for`指令，而不是`v-if`指令。循环每个元素，再进行 `v-if` 判断

优化办法是遍历一个计算属性，使用一个处理好的数据进行遍历

```html
<!-- bad -->
<div v-for="item in items" :key="item.id" v-if="item.index < 30"></div>
```
```js
// good
export default {
  computed: {
    cheapItems: () => {
      return this.items.fitler(item => item.index < 30)
    }
  }
}
```
**优点：**
- 渲染效率更高，因为我们不会遍历所有元素
- 仅当依赖项更改时，才会重使用过滤后的列表
- 这写法有助于将组件逻辑从模板中分离出来，使组件更具可读性

## 验证 props
当项目比较大，或往后会变大，使用组件是会不知道`props`的格式、类型、等等一些约定；所以编写`props`验证就很有必要了

```js
export default {
  props: {
    status: {
      type: String,
      required: true,
      validator: function (value) {
        return [
          'syncing',
          'synced',
          'version-conflict',
          'error'
        ].indexOf(value) !== -1
      }
    }
  }
}
```