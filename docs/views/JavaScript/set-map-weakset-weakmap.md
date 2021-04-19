---
author: sanmzh
title: Set/WeakSet/Map/WeakMap详解
categories: [JavaScript]
tags: [js]
date: 2021-04-19 13:47:55
---

<Boxx changeTime="30000"/>

## 前言
ES6+ 中，`Set`、`Map`、`WeakSet`和`WeakMap`的区别。

`Set`（集合）和`Map`（字典） 主要用在与 **数据重组** 和 **数据存储**。

## Set(集合)
ES6新增的一种数据结构，类似于数组，但成员是唯一无序的，没有重复值。

```js
const s = new Set();
[1,2,1,2,3,4,5].forEach(x => s.add(x));

for(let i of s) {
    console.log(i); // 1 2 3 4 5
}

// 数组去重
const arr = [1,2,1,2,3,4,5];
[...new Set(arr)] // [1,2,3,4,5]
```
`Set` 内部会自动判断内部是否存在，需要严格相等 `===` ，和严格相等区别是 `NaN`，`Set` 内部 `NaN` 是等于自身的，而严格相等不相等。

```js
const s = new Set()
s.add(1)
s.add('1')
s.add(NaN)
s.add(NaN)
console.log([...s]) // [1, "1", NaN]
```

### Set的属性和方法
- **size** 元素数量
- **add()** 新增元素
- **detele()** 删除元素
- **has()** 判断是否存在
- **clear()** 清空集合

`Array.form` 方法可以将 `Set` 数据结构转换为数组
```js
const set = new Set([1,2,3,3,4])
const arr = Array.form(set)
console.log(arr) // [1,2,3,4]

console.log([...set]) // [1,2,3,4]
```

### Set的遍历
遍历的顺序为插入数据时的顺序

- **keys()** 返回一个包含集合中所有键的迭代器
- **values()** 返回一个包含集合中所有值的迭代器 (`Set.prototype.values === Set.prototype[Symbo.iterator]`返回`true`)
- **entries()** 返回一个包含 `Set` 对象中所有元素的键值对迭代器
- **forEach(callback, thisArg)** 参考 `forEach`

```js
const set = new Set([1,3,4,2])
console.log(set.keys()) // SetIterator{1,3,4,2}
console.log(set.values())   // SetIterator{1,3,4,2}
console.log(set.entries())   // SetIterator{1,3,4,2}

set.forEach((value, key) => {
    console.log(`${key}: ${value}`)
    // 1: 1
    // 3: 3
    // 4: 4
    // 2: 2
})
```
> ps：可以将 `Set` 转换成数组，再去支持数组 `map`、`fitler` 等方法

### Set的应用
利用 `Set` 的特性可以轻松实现去除操作，下面利用特性实现 `交集（Intersect）`、`并集（Union）`、`差集（Difference）`

```js
const set1 = new Set([1,2,3])
const set2 = new Set([4,2,1])

let intersect = new Set([...set1].filter(value => set2.has(value)))
let union = new Set([...set1, ...set2])
let difference = new Set([...set1].filter(value => !set2.has(value)))
console.log(`交集：${[...intersect]}，并集：${[...union]}，差集：${[...difference]}`)
// 交集：1,2，并集：1,2,3,4，差集：3
```

## WeakSet
`WeakSet`对象允许将**弱应用对象**存储在一个集合中

### WeakSet与Set的区别
- 与`Set`相比，`WeakSet` 只能是**对象的集合**，而不能是任何类型的任意值。
- `WeakSet`持弱引用：集合中对象的引用为弱引用。 如果没有其他的对`WeakSet`中对象的引用，那么这些对象会被当成垃圾回收掉。 这也意味着`WeakSet`中没有存储当前对象的列表。 正因为这样，`WeakSet` 是不可枚举的。

### WeakSet 属性和方法
- **WeakSet.prototype.constructor** 构造器
- **add()** 添加元素
- **has()** 判断是否包含
- **delete()** 删除元素
- **clear()** 清空所有元素，**方法已废弃**
```js
const ws = new WeakSet()
// new WeakSet([iterable])
// 如果传入一个可迭代对象作为参数, 则该对象的所有迭代值都会被自动添加进生成的 WeakSet 对象中。null 被认为是 undefined。

const info = {name: 'sanm'}
const obj = {}
ws.add(info)

ws.has(info) // true
ws.has(obj) // false

ws.delete(info) // true 是否删除成功 若果不包含，删除会返回 false
ws.has(info) // false
```

## Map(字典)
### Set和Map的区别
- 共同点：集合、字典的`key`是不能重复的
- 不同点：集合是`[v, v]`结构，字典是`[k, v]`结构

### Map的属性和方法
- **size**  元素数量
- **get()** 返回`Map`中的指定元素，`xx.get(key)`
- **set()** `Map` 对象添加或更新一个指定了键`（key）`和值`（value）`的（新）键值对
- **has()** 返回一个bool值，用来表明`map`中是否存在指定元素
- **delete()**  方法用于移除 `Map` 对象中指定的元素
- **clear()**   方法会移除Map对象中的所有元素

```js
const map = new Map();
map.set('info', {name: 'sanm'})
map.set('obj')

map.size // 2
map.get('info') // {name: "sanm"}
map.has('info') // true
map.delete('info')  // true
map.size // 1
map.clear() // undefined
map.size // 0
```
任何具有 **Iterator** 接口、且每个成员都是一个双元素的数组的数据结构都可以当作`Map`构造函数的参数
```js
const set = new Set([['info', {name: 'sanm'}], ['info2', {name: 'sanm-zh'}]])
const map = new Map(set)
map.get('info') // {name: "sanm"}
const map2 = new Map(map)
map2.get('info') // {name: "sanm"}
```
`Map`的键和内存绑定的，只要内存地址不同，就是两个值，`NaN`还是视为一个
```js
const map = new Map();
 
map.set(-0, 123);
map.get(+0) // 123
 
map.set(true, 1);
map.set('true', 2);
map.get(true) // 1
 
map.set(undefined, 3);
map.set(null, 4);
map.get(undefined) // 3
 
map.set(NaN, 123);
map.get(NaN) // 123
```

### Map遍历方法
- **keys()**    返回所有键名迭代器
- **values()**  返回所有值迭代器
- **entries()** 返回所有成员迭代器  (`Map.prototype.entries === Map.prototype[Symbol.iterator]`返回`true`)
- **forEach()** 遍历所有成员

### Map数据结构转换
`Map`结构转为数组结构，比较快的方法是使用扩展运算符`(...)`
```js
// Map <=> Array
const map = new Map([[1,1],[2,2],[3,3]])
[...map] // [[1,1],[2,2],[3,3]]

// Map => Object
function mapToObject(map){
    const obj = {}
    for(const [key, value] of map){
        obj[key] = value
    }
    return obj
}
const map1 = new Map([['name', 'sanm'],['sex','男']])
mapToObject(map1)   // {name: "sanm", sex: "男"}

// Object => Map
function objectToMap(obj){
    const map = new Map();
    for(const [key, value] of Object.entries(obj)){
        map.set(key, value)
    }
    return map
}
const obj = {name: "sanm", sex: "男"}
objectToMap(obj)    // {"name" => "sanm", "sex" => "男"}

// Map => Json
JSON.stringify([...map])
```
## WeakMap
`WeakMap` 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。

`WeakMap` 的 `key` 只能是 `Object` 类型。 原始数据类型 是不能作为 `key` 的（比如 `Symbol`）

### WeakMap属性合法方法
- **WeakMap.prototype.constructor** 构造器
- **set()** 设置一组`key`关联对象，返回这个`WeakMap`对象
- **get()** 返回`key`关联对象, 或者 `undefined`(没有`key`关联对象时)
- **has()** 根据是否有`key`关联对象返回一个`Boolean`值
- **delete()** 移除`key`的关联对象。执行后 `WeakMap.prototype.has(key)`返回`false`
- **clear()** 从`WeakMap`中移除所有的 `key/value` **方法已废弃**

## 总结
- **Set**
    - 成员唯一、无序且不重复
    - `[value, value]`，键值与键名是一致的（或者说只有键值，没有键名）
    - 可以遍历，方法有：`add`、`delete`、`has`
- **WeakSet**
    - 成员都是对象
    - 成员都是弱引用，可以被垃圾回收机制回收，可以用来保存DOM节点，不容易造成内存泄漏
    - 不能遍历，方法有`add`、`delete`、`has`
- **Map**
    - 本质上是键值对的集合，类似集合
    - 可以遍历，方法很多可以跟各种数据格式转换
- **WeakMap**
    - 只接受对象作为键名（`null`除外），不接受其他类型的值作为键名
    - 键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的
    - 不能遍历，方法有`get`、`set`、`has`、`delete`

