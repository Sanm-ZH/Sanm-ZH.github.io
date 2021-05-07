---
author: Matt Maribojoc
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
## 组件名统一使用驼峰或者短横线
推荐使用驼峰式，因为大多数IDE自动完成功能都支持它

```js
// bad
mycomponent.vue
myComponent.vue
Mycomponent.vue

// good
MyComponent.vue
```

## 基本组件应该相应的加上前缀
基本组件是仅包含以下内容的组件：
- HTML 元素
- 额外的基础组件
- 第三方的UI组件
为这些组件命名的最佳实践是为它们提供前缀`Base`、`V`或`App`。同样，只要我们在整个项目中保持一致，可以使用其中任何一种
```js
BaseButton.vue
BaseIcon.vue
BaseHead.vue
```
命名约定的目的是使基本组件按字母顺序分组在文件系统中。另外，通过使用`webpack`导入功能，我们可以搜索与命名约定模式匹配的组件，并将所有组件自动导入为`Vue`项目中的全局变量

## 单实例组件命名应该带有前缀 The
与基本组件类似，单实例组件(每个页面使用一次，不接受任何`prop`)应该有自己的命名约定。这些组件特定于我们的应用，通常是 `footer`，`header`或`sider`

该组件只能有一个激活实例

```js
TheHeader.vue
TheFooter.vue
TheSidebar.vue
ThePopup.vue
```

## 保持指令简写一致
例如：
- `@`是 `v-on` 的简写
- `:` 是 `v-bind` 的简写
- `#` 是 `v-slot` 的简写

## 不要在 created 和 watch 中调用方法
`Vue`开发人员经常犯的一个错误是他们不必要地在`created`和`watch`中调用方法。其背后的想法是，我们希望在组件初始化后立即运行`watch`
```js
// bad
created() {
  this.handleChange()
},
methods: {
  handleChange() {
    // stuff happens
  }
},
watch () {
  property() {
    this.handleChange()
  }
}
```
但是，`Vue`为此提供了内置的解决方案，这是我们经常忘记的`Vue watch`属性。

我们要做的就是稍微重组`watch`并声明两个属性：

1. `handler (newVal, oldVal)` 这是我们的`watch`方法本身。

2. `immediate: true` 代表如果在 `wacth` 里声明了之后，就会立即先去执行里面的`handler`方法，如果为`false`就跟我们以前的效果一样，不会在绑定的时候就执行
```js
// good
methods: {
  handleChange() {
    // stuff happens
  }
},
watch () {
  property {
    immediate: true
    handler() {
      this.handleChange()
    }
  }
}
```
## 模板表达式应该只有基本的 JS 表达式
在模板中添加尽可能多的内联功能是很自然的。但是这使得我们的模板不那么具有声明性，而且更加复杂，也让模板会变得非常混乱

```js
// bad
{{
  fullName.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}}
```
基本上，我们希望模板中的所有内容都直观明了。为了保持这一点，我们应该将复杂的表达式重构为适当命名的组件选项

分离复杂表达式的另一个好处是可以重用这些值

```js
// good
{{ normalizedFullName }}

// The complex expression has been moved to a computed property
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```
----
作者：**Matt Maribojoc** 来源：**medium** </br>
[https://medium.com/better-progran/12-vuejs-best-practices-for-pro-developers-28d1f629018c](https://medium.com/better-progran/12-vuejs-best-practices-for-pro-developers-28d1f629018c)