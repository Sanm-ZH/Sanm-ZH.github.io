---
author: Michael Thiessen
title: Vue 作用域
categories: [Vuejs]
tags: [vue, vue-scope]
date: 2021-05-08 10:35:55
---

<Boxx changeTime="30000"/>

:::tip 前言
`Vue` 除了 `JS` 已有的功能外，还具有自己独特的作用域。作用域控制可以使用那些变量以及在何处使用。它控制它们对应程序不同部分的“可见性”。
:::

**`Vue` 中4个级别的作用域：**
- 全局作用域
- 子树作用域
- 组件作用域
- 实例作用域

## 全局作用域
`Vue` 应用程序中的全局作用域与任何编程语言中的全局作用域类似，这些变量在应用程序中的任何地方都是可用的。

可以把全局作用域看作应用程序作用域，因为它将作用域限制为整个应用程序。

**使用全局作用域**
使用全局作用域的主要方式是向`Vue`原型添加一个值：
```js
Vue.prototype.$globalValue = 'Global Scope!';
```
通过将其添加到 `Vue` 对象的原型中，可以在应用程序的每个组件上自动使用它。可以像这样直接从组件访问它：
```js
export default {
  mounted() {
    console.log(this.$globalValue);  // 'Global Scope!'
  },
};
```
使用`$`作为这些变量的前缀是一种标准做法，因此我们知道它们是全局值，而不是每个组件唯一的。

`Vue`、`vue-router`和`vuex`(以及许多其他库)都使用这种技术来定义全局值。例如，来自`vue-router`的`$route`对象是这样一个全局作用域的变量。

## 子树作用域
大多数时候，全局范围有点像大锤，我们需要一些更精确的东西。子树作用域中的变量作用域是应用程序的特定部分，而不是整个应用程序。

此级别的作用域可能是最少使用的，但是在确实需要使用时非常方便。通常，一组组件需要共享很多相同的数据，并且通过`props`传递数据非常繁琐。

此作用域最适合用于共享上下文信息，这些上下文信息可以根据组件在应用程序中的位置进行更改，可以是这样的：
- **本地状态和数据** 如果只有一小部分应用程序需要使用 `Vuex`，则无需使用 `Vuex`。如果使用`props`传递会变得繁琐且麻烦，此时，子树作用域可能是我们最好的选择。
- **配置** 有时我们需要组件以某种特定方式运行，但仅在应用程序的一部分中运行。例如，注册表单中的所有`Input组件`都需要验证，但是我们不想在整个应用程序中都要求验证。

**使用子树作用域**
子树作用域是通过使用`provide`和`inject`创建的。我们提供希望可用于整个子树的值，然后将它们注入需要它们的组件中。

## 组件作用域
更具体一点，组件作用域使变量可用于单个组件。但是这不应该与更具体的实例作用域相混淆。

如果一个变量具有组件作用域，那么它就是一个组件的所有实例都可以使用的单个变量。我们可以拥有几个相同的组件，并且它们都能够访问相同的变量。

你可能熟悉 `JS` 中的模块作用域。在单个模块或文件中定义的任何内容都属于相同的模块作用域。由于组件是在单个文件中定义的，所以组件中的所有内容都在相同的模块作用域内。

**使用组件作用域**
要使用组件作用域，我们需要在与组件相同的文件中定义一个变量：
```vue
<template>
  <div class="new-component">
    {{ componentScope }}
  </div>
</template>

<script>
const componentScope = 'This is in the component scope';

export default {
  data() {
    return {
      componentScope: componentScope,
    };
  },
};
</script>
```
在此组件中渲染的变量`componentScope`是相同的变量，不管使用此组件多少次，`componentScope` 始终只有一个，没有多个副本。

如果此组件的一个实例修改了`componentScope`的值，则该组件的每个其他实例都会更改。不应使用这种方式在组件之间进行通信，但这是共享数据的一种好方法。

## 实例作用域
实例作用域是我们可以获得的`Vue`作用域变量最常见形式，具有实例作用域的任何变量仅可用于组件的特定用法。我们通常将其称为内部状态，有时也称为局部状态。

**使用实例作用域**
无论何时使用`data()`函数或使用`computed props`，都是在使用实例作用域。

甚至直接向组件实例添加属性也可以达到以下效果：

```js
someMethod() {
  this.newProperty = 'Instance scope';
}
```
但是，如果以这种方式添加属性，则**必须记住**，它们**不是响应式的**。
-----
作者：**Michael Thiessen** 来源：**Michael** </br>
原文：[https://frontendsociety.com/why-you-shouldnt-use-vue-component-ff019fbcac2e?gi=ce7b162d53d4](https://frontendsociety.com/why-you-shouldnt-use-vue-component-ff019fbcac2e?gi=ce7b162d53d4)