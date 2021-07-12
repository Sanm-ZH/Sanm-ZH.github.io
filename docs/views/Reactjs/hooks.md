---
author: sanmzh
title: Hooks对应react class component
categories: [Reactjs]
tags: [react, js, hooks]
date: 2021-07-12 13:42:24
---

<Boxx changeTime="30000"/>

## 在 `Hooks` 中对应 `class` 生命周期
### `constructor`
```jsx
function useConstruct(fn) {
  useState(fn)  // fn 只会执行一次 在 render 之前
}
```

### `componentDidMount`
依赖项给空数组，只会执行一次
```jsx
function useMount() {
  useEffect(fn, [])
}
```

### `componentDidUpdate`
依赖项不传值，任何触发的 render 都会执行
```jsx
function useDidUpdate(fn) {
  useEffect(fn)
}
```

### `componentWillUnmount`
```jsx
function useUnMount(fn) {
  useEffect(() => fn, [])
}
```

**Demo**
```jsx
import React, { useState, useEffect, useRef } from 'react'

// constructor
function useConstruct(fn) {
  // useState 传入初始化函数 fn 只会执行一次
  useState(fn)
}

// componentDidMount
function useDidMount(fn) {
  // 依赖项给空数组，只会执行一次
  useEffect(fn, [])
}

// componentDidUpdate
function useDidUpdate(fn) {
  // 依赖项不传值，任何触发的 render 都会执行
  useEffect(fn)
}

// componentWillUnmount
function useUnMount(fn) {
  useEffect(() => fn, [])
}

function Block() {
  const [count, setCount] = useState(0)
  const instance = useRef({})

  useConstruct(() => {
    instance.current.name = 1
    console.log('Block Component----Construct')
  })

  useDidMount(() => {
    console.log('Block Component----componentDidMount')
  })

  useDidUpdate(() => {
    console.log('instance.current.name', instance.current.name)
    console.log('Block Component----componentDidUpdate')
  })

  useUnMount(() => {
    console.log('Block Component----componentWillUnmount')
  })

  console.log('Block render')
  return (
    <div style={{backgroundColor: '#eaeaea'}}>
      <p>Block组件</p>
      <p>count: {count}</p>
      <br />
      <button onClick={() => setCount(count+1)}>点击 count+1</button>
    </div>
  )
}

export default function ParentComp() {
  const [unMountBlock, setUnMountBlock] = useState(false)
  return (
    <div>
      <p>unMountBlock: {unMountBlock?'true':'false'}</p>
      <br />
      {!unMountBlock ? <Block /> : null}
      <br />
      <button onClick={() => setUnMountBlock(true)}>点击卸载 Block 组件</button>
    </div>
  )
}
```

## 在 `Hooks` 中对应钩子 `shouldComponentUpdate`
通过 `useMemo` 来实现 `shouldComponentUpdate`，依赖项填写当前组件依赖的 `props`，`useMemo` 内部对依赖项进行浅比较，其中的任何一个依赖项变化时，重新 `render` 组件。 与 `Class Component` 不同的是，比较操作在组件外部。

```jsx
import React, { useState, useMemo } from 'react'

function Counter(props) {
  console.log('Counter render')
  return (
    <div>
      <p>count: {props.count}</p>
    </div>
  )
}

function Time(props) {
  console.log('Time render')
  return (
    <div>
      <p>time: {props.time}</p>
    </div>
  )
}

export default function Demo() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(0)
  const [count2, setCount2] = useState(10)

  // 用于实现 shouldComponentUpdate
  // 与 Class Component 不同点：当前是在组件外做比较
  const child1 = useMemo(() => <Counter count={count} />, [count])
  const child2 = useMemo(() => <Time time={time} />, [time])

  return (
    <div>
      <p>count: {count}</p>
      <p>time: {time}</p>
      <p>count2: {count2}</p>
      <br />
      <button+ onClick={() => setCount(count+1)}>count+1</button+   <br />
      <button onClick={() => setCount2(count2+1)}>count2+1</button>
      <br />
      <button onClick={() => setTime(time+1)}>time+1</button>
      <br />
      {child1}
      {child2}
    </div>
  )
}
```

## `Hooks` 中的 `this`
通过使用 `useRef` 来模拟实现, `internalRef.current` 可以认为是当前 `this` 变量，来绑定相关变量

```jsx
import React, { useEffect, useRef } from 'react'

export default function useThis() {
  // internalRef.current 默认值为 {}
  const internalRef = useRef({})
  // internalRef.current 类似于 this 变量
  const self = internalRef.current

  if (self.didMount) {
    console.log('componentDidMount', self.didMount)
  }

  useEffect(() => {
    self.didMount = true
  }, [])

  return (
    <div>
      <p>如何使用this 变量</p>
    </div>
  )
}
```

## `Hooks` 中获取上一次值
借助 `useEffect` 和 `useRef` 来获取上一次的值
```jsx
import React, { useState, useRef, useEffect } from 'react'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default function Counter() {
  const [count, setCount] = useState(0)
  const previousCount = usePrevious(count)

  return (
    <div>
      <p>count: {count}</p>
      <p>previousCount: {previousCount}</p>
      <button onClick={() => setCount(count+1)}>点击 count+1</button>
    </div>
  )
}
```

## `Hooks` 父组件调用子组件
`Hooks` 实际上仍然是 `Function Component` 类型，它本身是不能通过使用 `ref` 来获取组件实例的，所以在 `Hooks` 中想要实现 父组件调用子组件的方法，需要两个**API**来配合使用，即 `forwardRef` 和 `useImperativeHandle`。在子组件中使用 `useImperativeHandle` 来导出方法，并使用 `forwardRef` 包裹组件, 在父组件中使用 `useRef` 传递 `ref` 给子组件。
```jsx
import React, { useRef, useImperativeHandle, forwardRef } from 'react'

const TextInput = forwardRef((props, ref) => {
  const inputRef = useRef(null)

  const handleFocus = () => {
    inputRef.current.focus()
  }

  // 暴露方法给外部组件调用
  // useImperativeHandle 应当与 forwardRef 一起使用
  useImperativeHandle(ref, () => ({
    focusInput: handleFocus,
    hello: ()=>{}
  }))

  return (
    <div>
      <input ref={inputRef} type="text" />
      <br />
      <button onClick={handleFocus}>内部调用 Focus the input</button>
    </div>
  )
})

export default function Parent() {
  const inputRef = useRef(null)

  const handleFocus = () => {
    console.log(typeof findDOMNode)
    console.log(inputRef.current)
    // 调用子组件方法
    inputRef.current.focusInput()
  }

  return (
    <div>
      <TextInput ref={inputRef} />
      <br />
      <button onClick={handleFocus}>父组件调用子组件focusInput</button>
    </div>
  )
}
```

## `Hooks` 获取父组件，子组件的 `DOM` 节点
`findDOMNode` 用于找到组件的 `dom` 节点，用于相关的 `dom` 处理操作
```jsx
import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import {findDOMNode} from 'react-dom'

const TextInput = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <input ref={inputRef} type="text" />
      <br />
      <button onClick={handleFocus}>内部调用 Focus the input</button>
    </div>
  )
})

export default function Parent() {
  const inputRef = useRef(null)

  const handleFindDom = () => {
    const node = findDOMNode(inputRef.current)
  }

  return (
    <div>
      <TextInput ref={inputRef} />
      <br />
      <button onClick={handleFocus}>父组件调用子组件focusInput</button>
    </div>
  )
}
```

在 `Hooks` 里面无法通过一个 `ref` 同时实现两个功能，只能通过规范的方式来使用，比如：

```jsx
import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import {findDOMNode} from 'react-dom'

const TextInput = forwardRef((props, ref) => {
  const inputRef = useRef(null)
  const compRef = useRef(null)

  const handleFocus = () => {
    inputRef.current.focus()
  }

  useImperativeHandle(ref, () => ({
    // 导出方法
    focusInput: handleFocus,
    // 导出当前 dom 节点
    compRef: compRef
  }))
  
  return (
    <div ref={compRef}>
      <input ref={inputRef} type="text" />
      <br />
      <button onClick={handleFocus}>内部调用 Focus the input</button>
    </div>
  )
})

export default function Parent() {
  const inputRef = useRef(null)

  const handleFocus = () => {
    // 获取 TextInput 组件的 dom 节点
    const node = findDOMNode(inputRef.current.compRef.current)
    console.log(node)
    // 调用 TextInput 组件方法
    inputRef.current.focusInput()
  }

  return (
    <div>
      <TextInput ref={inputRef} />
      <br />
      <button onClick={handleFocus}>父组件调用子组件focusInput</button>
    </div>
  )
}
```