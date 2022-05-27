---
author: sanmzh
title: CommonJS、AMD、CMD、UMD、ES6 模块化编程
categories: [JavaScript]
tags: [js, module]
date: 2022-05-24 14:36:27
---

<Boxx changeTime="30000"/>

:::tip 背景
随着网页功能越来越多，交互越来越复杂，`JavaScript` 代码越来越庞大，越来越复杂。

`JavaScript` 模块化编程，已经成为已成为一个趋势，同时模块规范使我们可以加载社区开源的的模块进而提升工作效率。

自己按规范写的模块也可以上传社区，促进社区繁荣。
:::

## CommonJS
`CommonJS`是一个更偏向于浏览器的规范，`NodeJS`采用了这个规范。`CommonJS`的是一个模块就是一个脚本文件，`require`命令第一次加载该脚本是就会执行整个脚本，然后在内存中生成一个对象。
```js
{
  id: 'modle_id',
  exports: { .... },
  loaded: true,
  ...
}
```
- **`id`** 为模块名
- **`exports`** 是该模块导出的方法
- **`loaded`** 表示该模块是否加载完毕，等等。

后续需要用到这个模块时，就会到`exports`属性上取值。即使再次执行`require`命令，也不会再执行该模块，而是去缓存中取值。
```js
// math.js
exports.add = function(a, b) {
  return a + b;
}

var math = require('math');
math.add(1, 2); // 3
```

**特点：** 由于`CommonJS`是同步加载模块，这对于服务器端不是问题，相当于模块放在本地，等待模块加载是很快的操作，但是对于浏览器来讲，他需要从服务器加载模块，涉及到很多外在隐私（当超过等待时间，会造成“浏览器卡死”，等未知问题）

## AMD
为解决`CommonJS`不适用于浏览器端，推出了`Asynchronous Module Definition`即`AMD 异步模块定义`，它采用异步方式加载模块，模块的加载不影响后面代码的运行。（**这里的异步不是指不堵塞浏览器的其他任务（Dom构建，Css渲染等），而是加载内部是同步的（加载立即执行回调）**）

`AMD`也采用`require`命令加载模块，但是它不同于`CommonJS`它要求两个参数：
```js
requrie([module], callback);
```
第一个参数是一个数组，里面的成员是要加载的模块，`callback`是加载完成后的回调函数，将上面的代码改成`AMD`方式：
```js
requrie(['math'], function(math){
  math.add[1, 2]
})
```
其中，回调函数中参数对应数组中的成员（模块）

`requrieJS`加载模块，采用的是`AMD`规范，也就是说，模块必须按照`AMD`规范书写。

模块书写必须使用特定的`define()`函数定义，如果一个模块不依赖其它模块，那么直接写在`define()`函数中。
```js
define(id?, dependencies?, factory);
```
- **`id`** 模块名，不写模块默认名字为加载脚本的文件名
- **`dependencies`** 模块的依赖项，已被模块定义的模块标识数组字面量，依赖参数是可选的，如果忽略，默认为`['requrie', 'exports', 'module']`。然而，如果工厂方法的长度小于3，加载器会选择以函数的长度属性指定的参数个数调用工厂方法。
- **`factory`** 模块的工厂函数，模块初始化要执行的函数或对象，如果为函数，它应该只被执行一次，如果是对象，此对象该为模块的输出值。

```js
// math.js
define(function(){
  var add = function(a, b) {
    return a + b;
  };

  return {
    add: add
  };
})

requrie(['math'], function(math){
  math.add[1, 2]
})

// 如果math模块需要依赖别的模块
define(['dependenceModule'], function(dependenceModule){
  ...
})
```
当`require`函数加载`math`模块时，就会先加载`dependenceModule`模块。

**特点：** 当有多个依赖时，就将所有的依赖都写在`define()`函数的第一个参数数组中，**所以说 `AMD` 是依赖前置**。这不同于`CMD`规范，他是依赖就近的。

## CMD
`CMD`为就近依赖，延迟执行，可以把你的依赖写进代码的任意一行：
```js
define(factory)
```

`factory` 为函数时，表示是模块的构造方法。执行该构造方法，可以得到模块向外提供的接口。`factory` 方法在执行时，默认会传入三个参数：`require`、`exports` 和 `module`
```js
// CMD
define(function(require, exports, module) {
  var a = require('./a');
  a.doSomething();
  var b = require('./b');
  b.doSomething();
})

// AMD
define(['a', 'b'], function(a, b) {
  a.doSomething();
  b.doSomething();
})
```
`AMD`规范实际上是推广`Seajs`的产物。

同样`Seajs`也是预加载依赖`js`跟`AMD`的规范在预加载这一点上是相同的，明显不同的地方是调用，和声明依赖的地方。`AMD`和`CMD`都是用`difine`和r`equire`，但是`CMD`标准倾向于在使用过程中提出依赖，就是不管代码写到哪突然发现需要依赖另一个模块，那就在当前代码用`require`引入就可以了，规范会帮你处理预加载（加载代码前将`require`提到前面所有运行完再执行后续代码）。但是AMD标准让你必须提前在头部依赖参数部分写好，这就是最明显的区别。

`sea.js`通过`sea.use()`来加载模块。
```js
seajs.use(id, callback?)
```

## ES6
#### 与`CommonJS`不同
- `ES6`模块输出的值是值的引用，输出接口动态绑定，而`CommonJS`输出是值的拷贝
- `ES6`模块编译时执行，而`CommonJS`模块总是在运行是加载

#### `CommonJS` 输出值的拷贝
```js
// a.js
var b = require('./b');
console.log(b.foo);
setTimeout(() => {
  console.log(b.foo);
  console.log(require('./b').foo);
}, 1000);

// b.js
let foo = 1;
setTimeout(() => {
  foo = 2;
}, 500);
module.exports = {
  foo: foo,
};
// 执行：node a.js
// 执行结果：
// 1
// 1
// 1
```

上面代码说明，b 模块加载以后，它的内部 `foo` 变化就影响不到输出的 `exports.foo` 了。这是因为 `foo` 是一个原始类型的值，会被缓存。所以如果你想要在 `CommonJS` 中动态获取模块中的值，那么就需要借助于函数延时执行的特性。

```js
// a.js
var b = require('./b');
console.log(b.foo());
setTimeout(() => {
  console.log(b.foo());
  console.log(require('./b').foo());
}, 1000);

// b.js
let foo = 1;
setTimeout(() => {
  foo = 2;
}, 500);
module.exports = {
  foo: () => {
    return foo;
  },
};
// 执行：node a.js
// 执行结果：
// 1
// 2
// 2
```

#### 总结
- `CommonJS` 模块重复引入的模块并不会重复执行，再次获取模块直接获得暴露的 `module.exports` 对象
- 如果你要处处获取到模块内的最新值的话，也可以你每次更新数据的时候每次都要去更新 `module.exports` 上的值
- 如果你暴露的 `module.exports` 的属性是个对象，那就不存在这个问题了

```js
// a.js
var b = require('./b');
console.log(b.foo);
setTimeout(() => {
  console.log(b.foo);
  console.log(require('./b').foo);
}, 1000);

// b.js
module.exports.foo = 1;   // 同 exports.foo = 1 
setTimeout(() => {
  module.exports.foo = 2;
}, 500);

// 执行：node a.js
// 执行结果：
// 1
// 2
// 2
```

#### ES6输出值的引用
在 ES6 模块中就不再是生成输出对象的拷贝，而是动态关联模块中的值。

#### ES6 静态编译，CommonJS 运行时加载
关于第二点，`ES6` 模块编译时执行会导致有以下两个特点：

`import` 命令会被 `JavaScript` 引擎静态分析，优先于模块内的其他内容执行。

`export` 命令会有变量声明提前的效果。

`import` 优先执行: 在文件中的任何位置引入 `import` 模块都会被提前到文件顶部。

```js
// a.js
console.log('a.js')
import { foo } from './b';

// b.js
export let foo = 1;
console.log('b.js 先执行');

// 执行结果:
// b.js 先执行
// a.js
```

从执行结果我们可以很直观地看出，虽然 `a` 模块中 `import` 引入晚于 `console.log('a')`，但是它被 `JS` 引擎通过静态分析，提到模块执行的最前面，优于模块中的其他部分的执行。

由于 `import` 是静态执行，所以 `import` 具有提升效果即 `import` 命令在模块中的位置并不影响程序的输出。
```js
// a.js
import { foo } from './b';
console.log('a.js');
export const bar = 1;
export const bar2 = () => {
  console.log('bar2');
}
export function bar3() {
  console.log('bar3');
}

// b.js
export let foo = 1;
import * as a from './a';
console.log(a);

// 执行结果:
// { bar: undefined, bar2: undefined, bar3: [Function: bar3] }
// a.js
```
从上面的例子可以很直观地看出，`a` 模块引用了 `b` 模块，`b` 模块也引用了 `a` 模块，`export` 声明的变量也是优于模块其它内容的执行的，但是具体对变量赋值需要等到执行到相应代码的时候。

#### 模块不会重复执行
无论是 `ES6` 模块还是 `CommonJS` 模块，当你重复引入某个相同的模块时，模块只会执行一次。

**CommonJS 模块循环依赖**
```js

// a.js
console.log('a starting');
exports.done = false;
const b = require('./b');
console.log('in a, b.done =', b.done);
exports.done = true;
console.log('a done');

// b.js
console.log('b starting');
exports.done = false;
const a = require('./a');
console.log('in b, a.done =', a.done);
exports.done = true;
console.log('b done');

// node a.js
// 执行结果：
// a starting
// b starting
// in b, a.done = false
// b done
// in a, b.done = true
// a done
```

当你从 `b` 中想引入 `a` 模块的时候，因为 `node` 之前已经加载过 `a` 模块了，所以它不会再去重复执行 `a` 模块，而是直接去生成当前 a 模块吐出的 `module.exports` 对象，因为 `a` 模块引入 `b` 模块先于给 `done` 重新赋值，所以当前 `a` 模块中输出的 `module.exports` 中 `done` 的值仍为 `false`。而当 `a` 模块中输出 `b` 模块的 `done` 值的时候 `b` 模块已经执行完毕，所以 `b` 模块中的 `done` 值为 `true`。

在 `CommonJS` 规范中，当遇到 `require()` 语句时，会执行 `require` 模块中的代码，并缓存执行的结果，当下次再次加载时不会重复执行，而是直接取缓存的结果。正因为此，出现循环依赖时才不会出现无限循环调用的情况。虽然这种模块加载机制可以避免出现循环依赖时报错的情况，但稍不注意就很可能使得代码并不是像我们想象的那样去执行。因此在写代码时还是需要仔细的规划，以保证循环模块的依赖能正确工作。

一种解决方式便是将每个模块先写 `exports` 语法，再写 `requre` 语句，利用 `CommonJS` 的缓存机制，在 `require()` 其他模块之前先把自身要导出的内容导出，这样就能保证其他模块在使用时可以取到正确的值。
```js
// a.js
exports.done = true;
let b = require('./b');
console.log(b.done)

// b.js
exports.done = true;
let a = require('./a');
console.log(a.done)
```

缺点是要改变每个模块的写法，而且大部分同学都习惯了在文件开头先写 `require` 语句。

**ES6 模块循环依赖**
跟 `CommonJS` 模块一样，ES6 不会再去执行重复加载的模块，又由于 `ES6` 动态输出绑定的特性，能保证 `ES6` 在任何时候都能获取其它模块当前的最新值。

```js
// a.js
console.log('a starting')
import {foo} from './b';
console.log('in b, foo:', foo);
export const bar = 2;
console.log('a done');

// b.js
console.log('b starting');
import {bar} from './a';
export const foo = 'foo';
console.log('in a, bar:', bar);
setTimeout(() => {
  console.log('in a, setTimeout bar:', bar);
})
console.log('b done');

// babel-node a.js
// 执行结果：
// b starting
// in a, bar: undefined
// b done
// a starting
// in b, foo: foo
// a done
// in a, setTimeout bar: 2
```

#### 动态 `import()`
ES6 模块在编译时就会静态分析，优先于模块内的其他内容执行，所以导致了我们无法写出像下面这样的代码：
```js
if(some condition) {
  import a from './a';
} else {
  import b from './b';
}

// or 
import a from (str + 'b');
```

因为编译时静态分析，导致了我们无法在条件语句或者拼接字符串模块，因为这些都是需要在运行时才能确定的结果在 ES6 模块是不被允许的，所以 动态引入 `import()` 应运而生。

`import()` 允许你在运行时动态地引入 `ES6` 模块，想到这，你可能也想起了 `require.ensure` 这个语法，但是它们的用途却截然不同的。

- `require.ensure` 的出现是 `webpack` 的产物，它是因为浏览器需要一种异步的机制可以用来异步加载模块，从而减少初始的加载文件的体积，所以如果在服务端的话 `require.ensure` 就无用武之地了，因为服务端不存在异步加载模块的情况，模块同步进行加载就可以满足使用场景了。 `CommonJS` 模块可以在运行时确认模块加载。
- 而 `import()` 则不同，它主要是为了解决 ES6 模块无法在运行时确定模块的引用关系，所以需要引入 `import()`。

**用法：**
- 动态的 `import()` 提供一个基于 `Promise` 的 `API`
- 动态的 `import()` 可以在脚本的任何地方使用
- `import()` 接受字符串文字，你可以根据你的需要构造说明符

```js
// a.js
const str = './b';
const flag = true;
if(flag) {
  import('./b').then(({foo}) => {
    console.log(foo);
  })
}
import(str).then(({foo}) => {
  console.log(foo);
})

// b.js
export const foo = 'foo';

// babel-node a.js
// 执行结果
// foo
// foo
```

因为是基于 `Promise` 的，所以如果你想要同时加载多个模块的话，可以是 `Promise.all` 进行并行异步加载。

```js
Promise.all([
  import('./a.js'),
  import('./b.js'),
  import('./c.js'),
]).then(([a, {default: b}, {c}]) => {
    console.log('a.js is loaded dynamically');
    console.log('b.js is loaded dynamically');
    console.log('c.js is loaded dynamically');
});
```
还有 `Promise.race` 方法，它检查哪个 `Promise` 被首先 `resolved` 或 `reject`。我们可以使用`import()`来检查哪个CDN速度更快：
```js
const CDNs = [
  {
    name: 'jQuery.com',
    url: 'https://code.jquery.com/jquery-3.1.1.min.js'
  },
  {
    name: 'googleapis.com',
    url: 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'
  }
];

console.log(`------`);
console.log(`jQuery is: ${window.jQuery}`);

Promise.race([
  import(CDNs[0].url).then(()=>console.log(CDNs[0].name, 'loaded')),
  import(CDNs[1].url).then(()=>console.log(CDNs[1].name, 'loaded'))
]).then(()=> {
  console.log(`jQuery version: ${window.jQuery.fn.jquery}`);
});
```
也可以结合 `async/await` 语法糖来使用。
```js
async function main() {
  const myModule = await import('./myModule.js');
  const {export1, export2} = await import('./myModule.js');
  const [module1, module2, module3] =
    await Promise.all([
      import('./module1.js'),
      import('./module2.js'),
      import('./module3.js'),
    ]);
}
```
动态 `import()` 为我们提供了以异步方式使用 `ES` 模块的额外功能。 根据我们的需求动态或有条件地加载它们，这使我们能够更快，更好地创建更多优势应用程序。

#### export
一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果希望外部文件能够读取该模块的变量，就需要在这个模块内使用export关键字导出变量。
```js
// profile.js
export var a = 1;
export var b = 2;
export var c = 3;1234
```
下面的写法是等价的，这种方式更加清晰（在底部一眼能看出导出了哪些变量）：
```js
var a = 1;
var b = 2;
var c = 3;

export {a, b, c}
```

#### import
`import`命令可以导入其他模块通过`export`导出的部分。
```js
var a = 1;
var b = 2;
var c = 3;
export {a, b, c}

//main.js
import {a, b, c} from './abc';
console.log(a, b, c);
```
如果想为导入的变量重新取一个名字，使用 `as` 关键字（也可以在导出中使用）。

```js
import {a as aa, b, c} from './abc';
console.log(aa, b, c)
```

如果想在一个模块中先输入后输出一个模块，`import`语句可以和`export`语句写在一起。
```js
import {a, b, c} form './abc';
export {a, b, c} // 使用连写, 可读性不好，不建议
export {a, b, c} from './abc';
```

#### 模块的整体加载
```js
// 使用 * 关键字。
import * from as abc form './abc';
```

#### export default
在 `export` 输出内容时，如果同时输出多个变量，需要使用大括号`{}`，同时导入也需要`大括号`。使用`export defalut`输出时，不需要`大括号`，而输入`（import）export default`输出的变量时，不需要大括号。

```js
// abc.js
var a = 1, b = 2, c = 3;
export {a, b};
export default c;

import {a, b} from './abc';
import c from './abc'; // 不需要大括号console.log(a, b, c)
```
本质上，`export default`输出的是一个叫做`default`的变量或方法，输入这个`default`变量时不需要大括号。
```js
// abc.js
export {a as default};

// main.js
import a from './abc'; // 这样也是可以的
import {default as aa} from './abc'; // 这样也是可以的
console.log(aa);
```