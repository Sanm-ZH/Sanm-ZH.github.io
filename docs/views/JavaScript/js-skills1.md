---
author: sanmzh
title: js技巧
categories: [JavaScript]
tags: [js, utilsFn]
date: 2021-06-23 14:32:57
---

<Boxx changeTime="30000"/>

## if层级嵌套优化
```js
if(条件1) {
  if(条件2) {
    console.log('xxx2')
    if(条件3) {
      console.log('xxx3')
    }
  }
} else {
  throw new Error('xxx1')
}
```
优化
```js
if(!条件1) throw new Error('xxx1')
if(!条件2) return
console.log('xxx2')
if(条件3) console.log('xxx3')
```

## Array的妙用
### Array.includes 判断多个if条件
```js
if(x === '1' || x === '2' || x === '3' || x === '4') {
  console.log('gg')
}

// Shorthand
if(['1', '2', '3', '4'].includes(x)) {
  console.log('gg')
}
```

### Array.find 查找符合条件的数组元素
```js
const typeList = [
  { label: 'java', value: 1 },
  { label: 'js', value: 2 }
  { label: 'python', value: 3 }
]

for(let i = 0, len = typeList.length; i < len; ++i) {
  if(typeList[i].label === 'js' && typeList[i].value === 2) {
    return typeList[i]
  }
}

// Shorthand
typeList.find(item => data.label === 'js' && item.value === 2)
```

### 补充
- `Array.some` 是否有一项满足条件
- `Array.every` 是否全部都满足

## 比较大小
当数据没有转换成数字类型时，用 `a > b` 会出现错误
```js
'10' > '100' // true

// Shorthand
'10' - '100' > 0 // false
```

## if，for...in，for...of 的使用
- 能用三元运算符就用，减少 `if` 的嵌套
- 减少多余条件判断，查询结束立即返回 **（早返回，多返回）**, 如果是函数返回 `if` 里面和外面返回相同的数据类型
- `if...else` 多个条件时以 `else` 结尾，因为符合防御性编程规则
- `NaN` 不应该用于比较，应该是判断是否是数字
- `switch...case`使用在至少有三个判断值，`case` 不可省,每次 `case` 必须用 `break` 跳出
- `for...of` 遍历数组和字符串
- `for...in` 遍历对象
- `for...in` 遍历对象包括所有继承的属性，所以如果只是想使用对象本身的属性需要做一个判断
- 在循环内部声明函数慎用，因为是循环执行完成函数调用才会执行
- `return` 后面不要写代码

## 字符串拼接
字符串拼接使用`join()`，避免使用 `+` 或者 `+=` 方式拼接较长的字符串

可以使用数组保存字符串片段，使用时调用 `join` 方法。避免使用 `+ 或 `+=` 的方式拼接较长的字符串，每个字符串都会使用一个小的内存片段，过多的内存片段会影响性能

## 统计数组中相同项的个数
```js
const carsObj = cars.reduce((obj, name) => {
  obj[name] = obj[name] ? ++obj[name] : 1 // obj[name]存在就加一，不存在就为1
  return obj
}, {})
```

## 批量接收多个请求返回结果
在下面的代码中，我们从`/post`中获取一个帖子，然后在`/comments`中获取相关评论。由于我们使用的是`async/await`，函数把返回值放在一个数组中。而我们使用数组解构后就可以把返回值直接赋给相应的变量
```js
async function getFullPost(){
  return await Promise.all([
     fetch('/post'),
     fetch('/comments')
  ])
}
const [post, comments] = getFullPost()
```