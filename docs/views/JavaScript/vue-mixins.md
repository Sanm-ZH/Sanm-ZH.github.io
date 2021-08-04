---
author: sanmzh
title: Vue 混入(Mixins)理解
categories: [Vuejs]
tags: [vue, vue-mixins]
date: 2021-05-08 10:52:10
---

<Boxx changeTime="30000"/>

::: tip 背景
当`Vue`项目功能越来越多时，如果有类似的组件，可能会发现自己一次又一次地复制和粘贴相同的数据、`methods`和`watch`。当然，我们可以将所有这些单独的文件编写为一个单独的组件，并使用 `prop` 来尝试自定义它们，但是使用这么多 `props` 很容易造成混乱且难懂

大多数情况只是继续添加重复的代码...
:::

`Vue` 引入`mixin`来解决这类的问题，`mixin`是在不同组件之间共享可重用代码的最简单方法之一。`Mixin` 对象可以使用任何组件选项如 `data`、`mounted`、`created`、`update`等，当组件使用 `Mixin` 时，`Mixin` 对象中的所有信息都将混合到组件中。然后，组件将有权访问`mixin`中的所有选项，就像在组件本身中声明的那样去使用它

```js
// mixin.js file
export default {
   data () {
      msg: ‘Hello World’
   },
   created: function () {
      console.log('这里由 mixin 中 create 方法打印！')
   },
   methods: {
      displayMessage: function () {
         console.log('这里由 mixin 方法里打印！')
      }
   }
}

// main.js file
import mixin from ‘./mixin.js’
new Vue({
   mixins: [mixin],
   created: function () {
      console.log(this.$data)
      this.displayMessage()
   }
})
// => "这里由 mixin 中 create 方法打印！"
// => {msg: ‘Hello World’}
// => "这里由 mixin 方法里打印！"
```
在使用`mixin`之后，该组件包含`mixin`中的所有数据，并且可以通过使用`this`来访问`mixin`中的数据和方法。我们还可以使用变量而不是单独的文件来定义`mixin`

## 发生命名冲突
当`mixin`中的数据、方法或任何组件选项与组件中的选项具有相同的名称时，可能会发生组件与其`mixin`之间的命名冲突。如果发生这种情况，则组件本身的属性将优先
```js
// mixin.js file
export default {
   data () {
      title: 'sanm'
   }
}

// main.js file
import mixin from './mixin.js'
export default {
   mixins: [mixin],
   data () {
      title: 'sanmzh'
   },
   created: function () {
      console.log(this.title)
   }
}
// => "sanmzh"
```

----

## 总结
对于`Vue` 的 `mixin`，我们还有很多要了解，但是上面这些知识在开发中一般足够用了。如果你想了解更高级的主题，比如`Vue`中的全局`mixin`和自定义合并设置，可以在`Vue`文档中找到这些信息，可参考[文档](https://cn.vuejs.org/v2/guide/mixins.html)