---
author: sanmzh
title: TOP 面向类型编程
categories: [JavaScript]
tags: [js,ts]
date: 2021-04-27 10:33:59
---

<Boxx changeTime="30000"/>

## 基础知识点
### keyof 类型运算符
`keyof`[类型运算符](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#the-keyof-type-operator)接受对象类型，并生成其键的字符串或数字文字并集：
```typescript
type Props = {
    title: string
    isShow: boolean
    page: number
}
type PropsKey = keyof Props
// type PropsKey = 'title' | 'isShow' | 'page'
```
### 索引访问类型
使用[索引访问类](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)型来查找另一种类型的特定属性
```typescript
type Props = {
    title: string
    isShow: boolean
    page: number
}
type PropsKey = keyof Props['title']
// type PropsKey = string
```
### 类型映射
[类型映射](/views/JavaScript/type-oriented-programme.html#类型映射) 一种类型 => 另一种类型
```typescript
type Props = {
    title: string
    isShow: boolean
    page: number
}
type PropsKey = keyof Props
// type PropsKey = 'title' | 'isShow' | 'page'

type CopyProps = {
    [K in PropsKey]: Props[K]
}
// type CopyProps = {
//     title: string
//     isShow: boolean
//     page: number
// }
```
### 映射修饰符
在映射期间可以应用两个附加的修饰符：`readonly`和`?`。 分别影响可变性和选择性，可以通过添加`-`或`+`前缀来删除或添加这些修饰符。如果不添加前缀，则假定为`+`。
```typescript
type Partial<T> = {
  [K in keyof T]?: T[K]
}

type Props = {
  title: string
}

type PartialProps = Partial<Props>
//  type PartialProps = {
//   title?: string
// }
```
### 对比JS
```typescript
// T 泛型
// K 类型参数
// T[K] 索引访问类型
// ? 映射修饰符
// [K in keyof T] 映射
type Partial<T> = {
  [K in keyof T]?: T[K]
}
// T 参数
// K 内部变量
// T[K] 索引访问
// _b[`_${K}`] 索引访问
// for in loop
function Partial(T) {
  let _b = {}
  for (const K in Object.keys(T)) {
    _b[`_${K}`] = T[K]
  }
  return _b
}
```
### 扩展实现
**必选**
```ts
// -?
type Required<T> = {
  [K in keyof T]-?: T[K]
}
```
**只读**
```ts
// +readonly
type Readonly<T> = {
  readonly [K in keyof T]: T[K]
}
```
**可修改**
```ts
// -readonly
type Readonly<T> = {
  -readonly [K in keyof T]: T[K]
}
```
## 进阶
