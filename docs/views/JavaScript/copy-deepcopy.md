---
author: sanmzh
title: 浅拷贝与深拷贝
categories: [JavaScript]
tags: [js, utilsFn]
date: 2021-04-15 10:46:16
---

<Boxx changeTime="30000"/>

:::tip 背景
`JavaScript` 中有多种复制对象的方法，但如何才能正确的复制一个对象呢？
:::

## 前言
- **浅拷贝** 创建一个新的对象，对象有原对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的是基本类型的值，如果引用类型，拷贝的就是内存地址，一旦其中一个对象的改变了这个引用类型的地址（内容），就会影响到另一个对象（**修改一个会影响另一个**）。
- **深拷贝** 将一个对象从内存中完整的拷贝，从堆内存中开辟一个新的区域存放新对象，且 **修改一个不会影响另一个**。

:::warning
 `浅拷贝`只是复制指向某个对象的指针，而不是复制对象本身，新旧对象还共享同一块内存。`深拷贝`会创建一个一模一样的新对象，新旧不共享内存，修改不会影响原对象。
:::

## 赋值区别
当我们把对象赋值给另一个新的变量时，赋的其实是该对象的再栈中的地址，而不是堆中的数据。也就是两个对象指向的是同一个存储空间，无论那个对象发生改变，其实都是改变存储空间的内容。

- **浅拷贝** 堆中创建内存，拷贝前后对象的基本数据类型互不影响，但拷贝前后对象的引用类型因共享同一内存，会相互影响。
- **深拷贝** 堆内存中开辟一个新的区域放新对象，对对象的子对象进行递归拷贝，拷贝前后的两个对象互不影响。

## 浅拷贝实现方式
### Object.assign()
`Object.assign()` 方法可以把任意多个源对象的可枚举属性拷贝给目标对象，然后返回目标对象。
```js
const obj1 = {info: {name: 'sanm', sex: '男'}, grade: '三年级'};
const obj2 = Object.assign({}, obj1);
obj2.info.name = 'sanm-zh';
obj2.grade = '七年级';
console.log(obj1);  // {info: {name: 'sanm-zh', sex: '男'}, grade: '三年级'}
```

### 函数库lodash的clone方法
```js
const _ = require('lodash');
const obj1 = {info: {name: 'sanm', sex: '男'}, grade: '三年级'};
const obj2 = _.clone(obj1);
console.log(obj1.info === obj2.info);   // true
obj2.info.name = 'sanm-zh';
obj2.grade = '七年级';
console.log(obj1); // {info: {name: 'sanm-zh', sex: '男'}, grade: '三年级'}
```

### 展开运算符
ES6+的特性，与 `Object.assign()`的功能相同

```js
const obj1 = {info: {name: 'sanm', sex: '男'}, grade: '三年级'};
const obj2 = {...obj1};
obj1.info.name = 'sanm-zh';
obj1.grade = '七年级';
console.log(obj2);  // {info: {name: 'sanm-zh', sex: '男'}, grade: '三年级'}
```

### Array的concat和slice方法
数组的浅拷贝，返回一个新的数组

## 深拷贝实现方式
### JSON.parse(JSON.stringify())
```js
const obj1 = {info: {name: 'sanm', sex: '男'}, grade: '三年级'};
const obj2 = JSON.parse(JSON.stringify(obj1));
obj1.info.name = 'sanm-zh';
console.log(obj2); // {info: {name: 'sanm', sex: '男'}, grade: '三年级'}
```
这种方法虽然可以实现深拷贝，但是不能**处理函数和正则**；因为函数和正则被`JSON.stringify()`和`JSON.parse()`处理后，得到的正则不再是正则（为空对象），得到的函数（为null）。

### lodash的cloneDeep方法
```js
const _ = require('lodash');
const obj1 = {info: {name: 'sanm', sex: '男'}, grade: '三年级'};
const obj2 = _.cloneDeep(obj1);
console.log(obj1.info === obj2.info); // false
```

### jQuery的extend方法
```js
$.extend(deepCopy, target, object1, [objectN])  // 第一个参数为true，就是深拷贝
```

```js
const $ = require('jquery');
const obj1 = {info: {name: 'sanm', sex: '男'}, grade: '三年级'};
const obj2 = $.extend(true, {}, obj1);
console.log(obj1.info === obj2.info); // false
```

### 手写递归深拷贝
```js
function deepClone(target,map = new WeakMap()){
    if(typeof target ==='object' && target !== null){
        if (target instanceof Date) return new Date(target);        
        if (target instanceof RegExp) return new RegExp(target);
        // 利用weakMap处理循环引用，有就直接返回
        if (hash.has(target)) return hash.get(target);

        //获得所有属性的描述信息，可处理带有比如enumerable、set、get等描述信息的数据
        let allDesc = Object.getOwnPropertyDescriptors(target);
        //创建一个新对象，使用现有的对象来提供新创建的对象的proto
        let result = Object.create(Object.getPrototypeOf(target), allDesc);
        //以上两行逻辑实现了浅拷贝并且处理了原型链

        hash.set(target, result);
        //Reflect.ownKeys 可获得不可遍历属性和Symbol属性
        for(let key of Reflect.ownKeys(target)){          
            result[key] = deepClone(target[key],hash)       
        }        
        return result;
    }else{
       //基础类型、function。
       return target;    
    }
}
```