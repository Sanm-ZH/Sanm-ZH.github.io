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
### 条件类型
类似于三元表达式
```ts
const a = 1
const b = 2
const c = a > b ? a : b
// const c = b
type P = 1
type R = P extends number ? true : false
// tyep R = true
```

### never
[never](https://www.typescriptlang.org/docs/handbook/basic-types.html#never)短路效应：`never`与其他类型作为联合类型时将被忽略
```ts
type P = never | string
// type P = string
```

利用 `never`过滤`null`、`undefined`
```ts
type P = {
  title?: string
}
type NonNullable<T> = T extends (null | undefined) ? never : T
type PTitle = P['title']
// type PTitle = undefined | string
type Title = NonNullable<PTitle>
// type Title = string
```
### 模板字符串
[模板字符串](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)建立在字符串文字类型的基础上，并具有通过联合扩展为许多字符串的能力。 它们的语法与ES6中的模版字符串相同，但用于类型。当与具体字符串类型一起使用时，模版字符串通过连接内容来产生新的字符串类型。

- 基础使用
```ts
type World = 'world'
type Greeting = `hello ${World}`
// type Greeting = "hello World"
```
- 与联合类型一起使用
```ts
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
// type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"
```
### 类型重映射
使用映射类型中的`as`子句重新映射映射类型中的键
```ts
type IndexObject = {[index: string]: any}

type Underline<T extends IndexObject> = {
  [K in keyof T as `_${string & K}`]: T[K]
}
type P = {
  title: string
}
type UnderlineP = Underline<P>
// type UnderlineP = {
//  _title: string
// }
```
为举例的JS代码写上类型
```ts
type IndexObject = {[index: string]: any}

type Underline<T extends IndexObject> = {
  [K in keyof T as `_${string & K}`]: T[K]
}

function warpObj<T extends IndexObject>(t: T): Underline<T> {
  let _b = {} as Underline<T>
  for (const k in Object.keys(t)) {
    _b[`_${k}` as keyof Underline<T>] = t[k]
  }
  return _b
}
warpObj({ title: 1 })._title
```
### infer
使用`infer`关键字从真实分支中进行比较的类型进行推断

- 推断数组元素类型
```ts
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type
const a = [
  1,
  '2',
  false
]
type ArrElement = Flatten<typeof a>
//  type ArrElement = string | number | boolean
```
- 推断函数返回值
```
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type Num = GetReturnType<() => number>;
//  type Num = number
```

- 推断函数参数
```ts
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

type Num = Parameters<() => number>;
// type Num = number
```

## 组合使用
实现`useRequest`:

- 函数必须返回`Promise`
- 对函数返回`Promise`进行拆包
- 函数参数必填提示（函数内部参数为必填时 必须传递）函数重载

```ts
import React from 'react'

// 辅助类型
type RequstPartialFC<P> = (params?: P) => Promise<any>
type RequstRequiredFC<P> = (params: P) => Promise<any>
// Promise 拆包
type PromiseType<T> = T extends Promise<infer D> ? D : never

type OtherConfig<T> = {
  initFetch?: boolean
  initState?: T
  onError?: (error: any) => void
}

// 辅助函数
// 仅当key变化时执行
export function useEffectKey<T>(effect: Function, key: T) {
  const ref = React.useRef<T>(key)
  React.useEffect(() => {
    // ref.current !== key时执行
    if (ref.current !== key) {
      effect()
    }
    ref.current = key
  }, [effect, key])
}
// 函数重载
function useRequest<P extends any = any,T extends RequstRequiredFC<P> = RequstRequiredFC<P>, D extends PromiseType<ReturnType<T>> = PromiseType<ReturnType<T>>>(
  request: T,
  params: P,
  config?: OtherConfig<D>
): [
  D | undefined,
  {
    retry: (params?: P) => Promise<void>
    loading: boolean
    error: boolean
  }
]
// 函数重载
function useRequest<P extends any,T extends RequstPartialFC<P>, D extends PromiseType<ReturnType<T>>>(
  request: T,
  params?: P,
  config?: OtherConfig<D>
): [
  D | undefined,
  {
    retry: (params?: P) => Promise<void>
    loading: boolean
    error: boolean
  }
]
// 函数实现
function useRequest<P extends any, T extends RequstRequiredFC<P>  | RequstPartialFC<P>, D extends PromiseType<ReturnType<T>>>(
  request: T,
  params: P,
  { initFetch = true, initState, onError = () => {} }: OtherConfig<D> = {}
): [
  D | undefined,
  {
    retry: (params?: P) => Promise<void>
    loading: boolean
    error: boolean
  }
] {
  const [data, setData] = React.useState(initState)
  const [loading, setLoading] = React.useState(!!initFetch)
  const [error, setError] = React.useState(false)
  const fetchNum = React.useRef<number>(0)
  const [key, setKey] = React.useState(0)
  const getData = React.useCallback(
    async (localParmas?: P) => {
      if (loading && !(initFetch && fetchNum.current === 0)) {
        return
      }
      let num = fetchNum.current
      localParmas = localParmas || params
      fetchNum.current++
      setLoading(true)
      try {
        const res = await request(localParmas)
        // 过期请求
        if (fetchNum.current !== num) {
          setError(false)
        } else {
          setData(res)
          setError(false)
        }
      } catch (error) {
        console.error('[useRequest]', error)
        setError(true)
        onError(error)
      } finally {
        setLoading(false)
      }
    },
    [loading, initFetch, params, onError, request]
  )
  React.useEffect(() => {
    if (initFetch) {
      setKey(pre => pre + 1)
    }
  }, [initFetch])
  // key 变化时请求
  useEffectKey(getData, key)
  return [data, {
    retry: getData,
    loading,
    error
  }]
}

async function getUser() {
  return new Promise<{
    name: string
    age: number
  }>((relove) => relove({
    name: 'xxx',
    age: 24
  }))
}

async function getDetail(id: number) {
  return new Promise<{
    content: string
    id: number
  }>((relove) => relove({
    content: 'xxx',
    id,
  }))
}

const [data] = useRequest(getUser)
const [detail] = useRequest(getDetail, 1)
```