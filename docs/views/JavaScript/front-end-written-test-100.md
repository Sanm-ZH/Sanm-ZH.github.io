---
author: 战场小包
title: 前端笔试题
categories: [JavaScript]
tags: [js]
date: 2021-11-23 16:58:32
---

<Boxx changeTime="30000"/>

## 单选题
### JS基础
#### js概念与类型检测
- 以下不属于 `typeof` 运算符返回值的是？
```js
A. "string"
B. "function"
C. "object" // typeof [] => "object" typeof {} => "object"
D. "null" // typeof null => "object"

// D
```
- 执行以下代码，错误的输出结果是？
```js
A. 输入：typeof {"x":1} 输出："object"  // 'object'
B. 输入：typeof 1 输出："number"  // 'number'
C. 输入：typeof [{x:1}] 输出："array" // 'object'
D. 输入：typeof NaN 输出："number"  // 'NaN'

// C
```
- 可以用 `typeof` 来判断的基本类型有?
```js
A. undefined
B. null
C. array  
D. object

// A
```
- 以下不属于JavaScript基本数据类型的是?
```js
A. Boolean
B. undefined
C. Symbol
D. Array // 数组、对象

// D
```
- 以下关于JavaScript中数据类型的说法错误的是?
```js
A. 数据类型分为基本数据类型和引用数据类型
B. JavaScript一共有8种数据类型  // 基本数据类型：string boolean number undefined null symbol（新增） 引用数据类型：object array function
C. Object是引用数据类型，且只存储于堆(heap)中 // 引用类型是存放在堆内存中的对象，变量其实是保存的在栈内存中的一个指针（保存的是堆内存中的引用地址），这个指针指向堆内存。
D. BigInt是可以表示任意精度整数的基本数据类型，存储于栈(stack)中 // 新增的一种基本类型

// C
```
#### 逻辑判断
- 请选择结果为 `ture` 的表达式？
```js
A. null instanceof Object // false
B. null === undefined // false
C. null == undefined  // true
D. NaN == NaN // false

// C
```
- 下列代码结果为 `true` 的是？
```js
A. Symbol.for('a') === Symbol.for('a')  // true
B. Symbol('a') === Symbol('a')  // false
C. NaN === NaN  // false
D. {} === {}  // false

// A
```

- 下列代码结果为 `true` 的是？
```js
var a = 1;
var b = [];
var c = '';
var d = true;

A. (a || b) === true  // (a || b) => 1
B. (b && c) === true  // (b && c) => ''
C. (c && d) === true  // '' && true
D. (d || a) === true  // true || 1

// D
```
- `1 == true` 的返回值是 `true`，这句话是否正确？
```js
A. T
B. F

// A
```
- 下面代码输出为 `true` 的是?
```js
A. console.log([] === []);  // false 引用对象
B. console.log(undefined == 0); // false
C. console.log(undefined == false); // false
D. console.log(false == '');  // true

// D
```
- 浏览器环境下，以下打印结果为`true`的是?
```js
A. console.log("12" === 12) // false
B. console.log (NaN === NaN)  // false
C. console.log (typeof(null) === typeof(window))  // "object" === "object"
D. console.log ([1,2,3] === [1,2,3])  // false

// C
```
- 以下表达式，正确的是?
```js
A. Number('a') == Number('a') // NaN == NaN
B. -1 == true // false
C. 3 + '2' === 5  // '32' === 5
D. ![] == '' 
// TODO: ![] == '' 还需了解

// D
```

### Math
- 如何把 `7.25` 四舍五入为最接近的整数？
```js
A. Math.round(7.25) // round 四色五入
B. Math.ceil(7.25)  // 向上取整
C. round(7.25)  // round不存在该方法
D. Math.rnd(7.25) // 拼写错误

// A
```

- 下面哪个选项可以产生 `0 <= num <= 10` 的随机整数？
```js
A. Math.floor(Math.random()*6)
B. Math.floor(Math.random()*10)
C. Math.floor(Math.random()*11)
D. Math.ceil(Math.random()*10)

// CD   B选项结果不能到10
```

- 以下 `( )` 表达式产生一个 `0~7` 之间 `(含0,7)` 的随机整数？
```js
A. Math.floor(Math.random()*6)
B. Math.floor(Math.random()*7)
C. Math.floor(Math.random()*8)

// C
```

### 字符串
- `split()` 方法用于把一个字符串分割成字符串数组。
```js
A. T
B. F

// A
```

- `String` 对象的哪个方法可以寻找子字符串并返回该子字符串位置
```js
A. match()
B. indexOf()
C. search()
D. concat()

// BC
```

### JSON
- 下面哪一个是JSON数据？
```js
A. {"name":"xiaoming",age,"student"}
B. {"name":"xiaoming","age":"student"}
C. {"xiaoming","student"}
D. ["xiaoming","student"]

// B
```

- 下面分别使用 `JSON.stringify` 方法，返回值 `res` 分别是？
```js
const fn = function(){}
const res = JSON.stringify(fn)
const num = 123
const res = JSON.stringify(num)
const res = JSON.stringify(NaN)
const b = true
const res = JSON.stringify(b)

A. 'function'、'123'、'NaN'、'true'
B. undefined、'123'、undefined、'true'
C. undefined、'123'、'null'、'true'
D. undefined、'123'、'null'、undefined

// C
```

### Array
- js数组中不会改变原有数组的方法是？
```js
A. push // 直接在末尾添加
B. concat // 连接两个数组后生成新数组并返回
C. sort // 对原数组进行排序操作
D. shift  // 移除数组第一项 移除最后一项 pop 方法 第一项前面添加元素 unshift

// B
```
- 下列哪种数组的方法不会修改数组本身?
```js
A. slice  // 返回一个新数组 begin end 不包括 end，对之间的元素进行浅拷贝
B. splice // 方法向/从数组添加/删除项目，并返回删除的项目，会改变原数组
C. sort // 排序
D. unshift  // 第一项前面添加元素 改变数组本身

// A
```
- JavaScript中需要往数组末尾处添加一个元素，应该使用以下哪个方法?
```js
A. push // 末尾添加
B. pop  // 删除末尾
C. shift  // 删除开头
D. unshift  // 添加开头

// A
```
- 以下js操作Array的方法中不能添加元素的是?
```js
A. push // 末尾添加
B. pop  // 删除末尾
C. unshift  // 添加开头
D. splice // 删除，添加

// B
```
数组以下哪个方法会影响原数组？
```js
A. concat // 生成新数组
B. splice // 删除原数组
C. slice  // 生成新数组
D. join //  生成新数组

// B
```
- JavaScript中，下列哪一个Array的方法的返回值类型和其他不同
```js
A. concat // 返回新数组
B. shift  // 返回删除元素
C. filter // 返回符合条件新数组
D. map  // 返回数组

// B
```
- 如下的Array.prototype上的方法中，那个方法不会改变原有的数组？
```js
A. push
B. slice
C. splice
D. sort

// B
```
- 对于一个数字组成的数组 nums，现在需要执行在不改动 nums 的基础上去重操作，返回一个新的无重复元素的数组，以下几段代码能完成这一操作的是?
```js
// (1)
const newNums = Array.from(new Set(nums))

// (2)
const newNums = nums.filter((n, i) => {
    return nums.indexOf(n) === i
})

// (3)
const newNums = nums.forEach((n, i) => {
    return nums.indexOf(n) === i
})

// (4)
const newNums = nums.reduce((acc, n, i) => {
    return [].concat(acc, nums.indexOf(n) === i ? n : [])
})

A. (1)、(2)、(3)、(4)
B. (1)、(3)、(4)
C. (1)、(2)、(4)
D. (1)、(4)

// C
```

### 正则
- 正则表达式 `/^d+[^d]+/` 能匹配下列哪个字符串？
```js
A. 123
B. 123a
C. d123
D. 123def

// C
```
- 下面哪个不是RegExp对象的方法?
```js
A. test
B. match
C. exec
D. compile

// B
```
- 以下哪项可以去除变量str中的所有空格？
```js
A. str.replace(`/\s*/g,""`)
B. str.replace(`/^\s|\s$/g,""`)
C. str.replace(`/^\s*/, ""`)
D. str.replace(`/(\s*$)/g, ""`)

// A
```

### 其他
- 下列函数哪个不是JavaScript的全局函数
```js
A. encodeURI
B. parseFloat
C. round
D. eval

// C
```

- 编写高性能JavaScript，以下描述错误的是
```js
A. 遵循严格模式："use strict"
B. 将js脚本放在页面顶部，加快渲染页面
C. 将js脚本成组打包，减少请求，尽量减少使用闭包
D. 使用非阻塞方式下载js脚本，最小化重绘(repaint)和回流(reflow)

// B
```

- 有关JavaScript中系统方法的描述，错误的是？
```js
A. parseFloat方法：该方法将一个字符串转换成对应的小数
B. isNaN方法：该方法用于检测参数是否为数值型，如果是，返回true，否则，返回false。   // isNaN 是不是数值型
C. escape方法： 该方法返回对一个字符串编码后的结果字符串
D. eval方法：该方法将某个参数字符串作为一个JavaScript执行题

// B
```

- 下面列出的浏览器，无webkit内核的是()
```js
A. chrome
B. Safari
C. 搜狗浏览器
D. Firefox

// D
```

- 下列代码哪个能够实现获取形式为 2017-08-01 形式的日期( )
```js
// A
var formatDate=getDate()
// B
var formatDate = new Date()
// C
var formatDate = function (date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    
    var d = date.getDate();
    return y + '-' + m + '-' + d;
};
// D
var formatDate = function (date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
};

// D
```

- 下面哪一项不能最小化重绘(repaint)和回流(reflow)
```js
A. 需要对元素进行复杂的操作时，可以先隐藏(display:"none")，操作完成后再显示
B. 需要创建多个DOM节点时，使用DocumentFragment创建完后一次性的加入document
C. 尽量避免用table布局(table元素一旦触发回流就会导致table里所有的其它元素回流)
D. 尽量不要使用 css 属性简写，如：用border-width, border-style, border-color代替border

// D
```