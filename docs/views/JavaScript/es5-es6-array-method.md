---
author: sanmzh
title: ES5 ES6 数组方法
categories: [JavaScript]
tags: [js, array]
date: 2021-04-08 10:15:06
---

<Boxx changeTime="30000"/>

::: tip
ES5 ES6 数组常用方法<br>
:::

## ES5数组方法

### **indexOf**

> 用于查询数组是否存在某个值，存在返回该值下标，否返回`-1`

```js
var arr = [1, 2, 3];

console.log(arr.indexOf(3)); // 2
console.log(arr.indexOf(4)); // -1
```

### **map**
> 数组函数方法，回调内有三个参数，`value`，`index`，`self`，返回值是处理完的结果，生成一个新的数组

```js
var arr = [1, 2, 3];
var res = arr.map(function(value, index, self) {
    console.log(value); // 1 2 3
    console.log(index); // 0 1 2
    console.log(self); // [1, 2, 3]
    return value * 3;
})
console.log(res); // [3, 6. 9]
```

### **forEach**
> 遍历数组方法，回调内有三个参数，`value`，`index`，`self`，没有返回值

```js
var arr = [1, 2, 3];
var res = arr.forEach(function(value, index, self) {
    console.log(value); // 1 2 3
    console.log(index); // 0 1 2
    console.log(self); // [1, 2, 3]
    return 123; // 没有效果
})
console.log(res); // undefined
```

### **splice**
> 数组删除或替换内容，接收三个参数，操作会对原数组产生影响
- 第一个参数，删除或添加的位置
- 第二个参数，要删除几个，为0不删除
- 第三个参数，向数组添加内容

```js
var arr = [1, 2, 3];

arr.splice(0, 1) // 把第0个位置，给删除一位
console.log(arr) // [2, 3]

arr = [1, 2, 3];
arr.splice(0, 1, "sanm")
console.log(arr) // ["sanm", 2, 3]

arr.splice(0, 2, "sanm")
console.log(arr) // ["sanm", 3]
```

### **slice**
> 截取数组，接收两个参数，生成一个新的数组，返回截取的数组
- 第一个参数，开始的下标
- 第二个参数，截取位置前一个的下标

```js
var arr = [1, 2, 3];
var res = arr.slice(1, 3);
console.log(res); // [2, 3]
```

### **filter**
> 过滤数组，返回符合满足条件的数组对象，生成一个新的数组

```js
var arr = [1, 2, 3, 4];
var res = arr.filter(function(item) {
    return item >= 3
})
console.log(res); // [3, 4]
```

### **every**
> 是否全部符合条件，返回`Boolean`，全部满足返回`true`，否则`false`

```js
var arr = [1, 2, 3, 4];
var res = arr.every(function(item){
    return item > 1;
})
console.log(res); // false
```

### **some**
> 存在符合条件，返回`Boolean`，有一项满足返回`true`，否则`false`

```js
var arr = [1, 2, 3];
var res = arr.some(function(item){
    return item === 1;
})
console.log(res); // true
```

### **reduce**
> 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值

**参数**
- Accumulator (acc) (累计器)
- Current Value (cur) (当前值)
- Current Index (idx) (当前索引)
- Source Array (src) (源数组)
```js
var arr = [1, 2, 3];
var res = arr.reduce(function(prev, cur) {
    return prev += cur;
})
console.log(res); // 6
```

### **reverse**
> 数组反转

```js
var arr = [1, 2, 3];
var res = arr.reverse();
console.log(res); // [3, 2, 1]
```

### **join**
> 数组拼接，返回字符串

```js
var arr = [1, 2, 3];
var res1 = arr.join('-');
var res2 = arr.join(':');

console.log(res1); // 1-2-3
console.log(res2); // 1:2:3
```

### **sort**
> 数组排序，返回新排序后的数组

- 返回值为正数，后面的数在前面
- 返回值为负数，前面的数不变，还在前面
- 返回值为0，都不动
```js
var arr = [1, 3, 4, 5, 6, 2];
var res = arr.sort(function(x, y){
    return x - y;
})
console.log(res); // [1, 2, 3, 4, 5, 6]
```

### **concat**
> 合并数组，返回合并后的数组

```js
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var res = arr1.concat(arr2);
console.log(res);
```

### **push**
> 数组末尾添加元素，返回值为数组的`length`属性，原数组会更新为添加元素后的数组<br>
> 参数为添加元素，多个可用`,`逗号分隔

```js
var arr = [1, 2, 3];
var res = arr.push(4);
console.log(res) // 4
console.log(arr) // [1, 2, 3, 4]
```

### **pop**
> 删除数组末尾元素，返回删除的元素，原数组更新为删除后的数组

```js
var arr = [1, 2, 3];
var res = arr.pop();
console.log(res); // 3
console.log(arr); // [1, 2]
```

### **unshift**
> 向数组开头新增元素，返回数组`length`属性，原数组会更新为添加元素后的数组

```js
var arr = [1, 2, 3];
var res = arr.unshift(0);
console.log(res); // 4
console.log(arr); // [0, 1, 2, 3]
```

### **shift**
> 删除数组开头的元素，返回删除的元素，原数组更新为删除后的数组

```js
var arr = [1, 2, 3];
var res = arr.shift();
console.log(res); // 1
console.log(arr); // [2, 3]
```

### **toString**
> 将数字转换为字符串类型，返回一个字符串<br>
> 数组某一项如果为对象，则会转换为`[object Object]`

```js
var arr = [1, 2, 3];
var res = arr.toString();
console.log(res); // 1,2,3
```

### **Array.isArray**
> 检测是否是一个数组，返回`Boolean`

```js
var arr = [1, 2, 3];
var res = Array.isArray(arr);
console.log(res); // true
```
