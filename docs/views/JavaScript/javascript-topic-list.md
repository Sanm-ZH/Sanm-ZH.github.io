---
author: sanmzh
title: JS题目（持续更新）
categories: [JavaScript]
tags: [js]
date: 2022-04-11 20:37:56
---

<Boxx changeTime="30000"/>

## 定制化输出数组
:::tip 题目
- 随机生成一个长度为 `10` 的整数类型的数组
- 例如 `[2, 10, 3, 35, 5, 11, 10, 11, 20]`
- 将其排列成一个新数组，要求新数组形式如下
- `[[2, 3, 5], [10, 11], [20], [35]]`
:::

```js
// 1. 获取随机数 0 -99
// 2. 去重
// 3. 排序
// 4. 存储 0-9 10-19 20-29

// 1. 随机数
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1));
}

let initArr = Array.from({length: 10}, () => getRandomNumber(0, 99));
// 2. 去重
initArr = [...new Set(initArr)];
// 3. 排序
initArr.sort((a, b) => a - b);
// 4. 存储
const map = {};
initArr.forEach(item => {
  const key = Math.floor(item / 10);
  if(!map[key]) {
    map[key] = []
  }
  map[key].push(item);
});

const result = [];
for(const key in map) {
  result.push(map[key]);
}
```

## 树结构改为平铺结构
```js
const tree = {
  a: {
    b: 1,
    c: {
      d: '123'
    }
  },
  e: '456'
}
// 结果
const outInput = {
  'a.b': 1,
  'a.b.c.d': '123',
  'a.e': '456'
};

// 方法1：递归
function flatTree(tree, prevKey = '', result = {}) {
  for(const key in tree) {
    if(obj.hasOwnProperty(key)) {
      var newKey = `${prevKey}${key}`;
      if(typeof tree[key] === 'object') {
        flatTree(tree[key], `${prevKey}.`, result);
      } else {
        result[newKey] = tree[key];
      }
    }
  }
}
```

## for循环splice的坑
```js
const arr = ['a', 'a', 'a', 'b', 'c', 'd', 'e', 'f']
for(let i = 0; i < arr.length; i++) {
  if(arr[i] === 'a') {
    arr.splice(i, 1);
    // i--; 解解方法一
  }
}

// 索引问题，长度变化了
// arr = ['a', 'b', 'c', 'd', 'e', 'f']
// i--

// for in 无法解决

// 采用倒序
const arr = ['a', 'a', 'a', 'b', 'c', 'd', 'e', 'f']
for(let i = arr.length - 1; i > 0; i--) {
  if(arr[i] === 'a') {
    arr.splice(i, 1);
  }
}
```

## this指向问题
```js
var name = 'sanmzh';

var person1 = {
  name: 'person1',
  show1: function() {
    console.log(this.name);
  },
  show2: () => console.log(this.name),
  show3: function() {
    return function() {
      console.log(this);
    };
  },
  show4: function() {
    return () => console.log(this.name);
  },
  show5: () => {
    return function() {
      console.log(this.name);
    }
  }
};

var person2 = { name: 'person2' };

person1.show1(); // this -> person1 => person1
person1.show1.call(person2); // this -> person2 => person2

person1.show2(); // this -> window => sanmzh
person1.show2.call(person2); // this -> window => sanmzh

person1.show3()();
// fn = person1.show3() -> this -> person1; window.fn() -> this => window => sanmzh
person1.show3().call(person2);
// fn = person1.show3() -> this -> person1; window.fn.call(person2) -> this => person2 => person2
person1.show3.call(person2)();
// fn = person1.show3.call(person2) -> this -> person2; window.fn() -> this => window => sanmzh

// 箭头函数this指向上级作用域this
person1.show4()();
// fn = person1.show4() -> this -> person1; window.fn() -> this -> person1 => person1
person1.show4().call(person2);
// fn = person1.show4() -> this -> person1; window.fn() -> this -> person1 => person1
person1.show4.call(person2)();
// fn = person1.show4.call(person2) -> this -> person2; window.fn() -> this -> person2 => person2

person1.show5()();
// fn = person1.show5() -> this -> window; window.fn() -> this -> window => sanm
person1.show5().call(person2);
// fn = person1.show5() -> this -> window; window.fn.call(person2) -> this -> person2 => person2
person1.show5.call(person2)();
// fn = person1.show5.call(person2) -> this -> window; window.fn() -> this -> window => sanm
```