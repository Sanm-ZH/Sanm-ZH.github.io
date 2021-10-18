---
author: sanmzh
title: ES6 基础运用
categories: [JavaScript]
tags: [js, es6]
date: 2021-10-12 10:38:26
---

<Boxx changeTime="30000"/>

### 对象解构
```js
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

// old
const a = obj.a
const b = obj.b
const c = obj.c
const d = obj.d
const e = a + c
const f = b + d

// es6
const {a, b, c, d} = obj
const e = a + c
const f = b + d

// es6重命名
// 有时与后台返回对不上，可以使用重命名变量名
const {a: a1} = obj
console.log(a1) // 1

```
**注意**：使用解构时，对象不能为 `undefined`、`null`，否则会报错，所以在被解构对象一个默认值
```js
const {a,b,c,d} = obj || {}
```

### 合并数据
合并数组、对象
```js
const a = [1, 2, 3]
const b = [2, 4, 6]
const c = a.concat(b) // [1,2,3,2,4,6]

// es6
console.log([...a, ...b]) // [1,2,3,2,4,6]

const obj1 = {a: 1}
const obj2 = {b: 2}
const obj3 = Object.assign({}, obj1, obj2) // {a: 1, b: 2}

// es6
console.log({...obj1, ...obj2}) // {a: 1, b: 2}
```

### 拼接字符串
```js
const name = '张三'
const score = 66

if(score < 60) {
  console.log(`${name}成绩不及格`)
} else {
  console.log(`${name}成绩及格`)
}

// 在模板字符串中其实是可以进行运算的
console.log(`${name}成绩${score < 60 ? '不及格' : '及格'}`)
```

### if 判断条件
```js
if(type === 1 || type === 2 || type === 3) {
  // xxxxx
}

const conditionArr = [1, 2, 3]
if(conditionArr.includes(type)) {
  // xxxxx
}
```

### 列表搜索
```js
const a = [{id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'}, {id: 4, name: 'a'}]
const result = a.filter(item => item.id === 3) // [{id: 3, name: 'c'}]

// 如果是想过滤出唯一项的内容时可以使用 find，找到符合条件的项，就不会自动继续变量查找
const result1 = a.find(item => item.id === 3) // {id: 3, name: 'c'}
```

### 扁平化数组
```js
const deps = [
  '行政部': [1, 2, 3],
  '人事部': [4, 5, 6],
  '销售部': [7, 8, 9]
]
let member = [];
for (let item in deps){
    const value = deps[item];
    if(Array.isArray(value)){
        member = [...member,...value]
    }
}
member = [...new Set(member)]

// es6
member = Object.values(deps).flat(Infinity)
// 使用Infinity作为flat的参数，使得无需知道被扁平化的数组的维度
```

### 获取对象属性值
```js
const name = userObj && userObj.name

// 可选链操作符
name = userObj?.name
```

### 添加对象属性
```js
const topicObj = {}
const index = 1
let key = `title${index}`
topicObj[key] = '题干'

// es6
topicObj[`title${index}`] = '题干'
```

### 非空的判断
```js
if(value !== null && value !== undefined && value !== ''){
  // xxxx
}

// es6+
if(value??'' !== '') {
  // xxxx
}
```

### 异步函数
```js
const fn1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    })
  })
}

const fn2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2)
    })
  })
}

const result1 = () => {
  fn1().then(res1 => {
    console.log(res1) // 1
    fn2().then(res2 => {
      console.log(res2) // 2
    })
  })
}

// es6 async await
const result2 = async () => {
  const res1 = await fn1()
  const res2 = await fn2()
  console.log(res1)
  console.log(res2)
}

// 并发请求时可使用 Promise.all
const result3 = () => {
  Promise.all([fn1(), fn2()]).then(res => {
    console.log(res) // [1, 2]
  })
}

// 如果并发请求时，只要其中一个异步函数处理完成，就返回结果，使用如下
Promise.race()
```