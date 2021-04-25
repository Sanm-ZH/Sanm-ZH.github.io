---
author: sanmzh
title: TypeScript 基础篇
categories: [JavaScript]
tags: [js,ts]
date: 2021-04-16 16:52:38
---

<Boxx changeTime="30000"/>

:::tip 前言
**TypeScript**：以`js`为基础构建的语言；可以在支持`js`的平台中执行；`js`的超集，`ts`扩展了`js`，并添加了类型；`ts`不能直接被`js`解析直接执行，需要经过编译生成`js`。

`ts`增加了类型，支持`ES`新特性，添加`ES`不具备的新特性，丰富的配置选项，强大的开发工具。
:::

## 安装
在`nodejs`环境下运行：
```bash
pnpm i -g typsrcipt

# 对ts进行编译
tsc xxx.ts
```

## 基本类型
### 类型声明
- 类型声明是`ts`非常重要的一个特点
- 通过类型声明可以指定`ts`中变量的类型
- 指定类型后，当位变量赋值时，`ts`编译器会自动检查是否符合类型声明，符合则赋值，否则报错
- 类型声明给变量设置了类型，使得变量只能存储某种类型的值

### 语法
```js
let 变量: 类型;
let 变量: 类型 = 值;
function fn(参数: 类型， 参数: 类型）:类型 {
    ...
}
```
### 自动类型推导
- `ts`拥有自动的类型推导机制
- 当对变量的声明和赋值是同时进行的，`ts`编译器会自动推导变量的类型
- **变量的声明和赋值时同时进行**，可以省略掉类型声明

<table>
    <thead>
        <tr>
            <th>类型</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>number</td>
            <td>任意数字</td>
        </tr>
        <tr>
            <td>string</td>
            <td>任意字符串</td>
        </tr>
        <tr>
            <td>boolean</td>
            <td>布尔值true或false</td>
        </tr>
        <tr>
            <td>字面量</td>
            <td>限制变量的值就是该字面量的值</td>
        </tr>
        <tr>
            <td>any</td>
            <td>任意类型</td>
        </tr>
        <tr>
            <td>unknown</td>
            <td>类型安全的any</td>
        </tr>
        <tr>
            <td>void</td>
            <td>没有值或undefined</td>
        </tr>
        <tr>
            <td>never</td>
            <td>没有值  不能是任何值</td>
        </tr>
        <tr>
            <td>object</td>
            <td>任意的JS对象</td>
        </tr>
        <tr>
            <td>array</td>
            <td>任意JS数组</td>
        </tr>
        <tr>
            <td>tuple</td>
            <td>元素，TS新增类型，固定长度数组</td>
        </tr>
        <tr>
            <td>enum</td>
            <td>枚举，TS中新增类型</td>
        </tr>
    </tbody>
</table>

### number
```js
let num: number = 3
let num2: number = 0x22
```
### boolean
```js
let isShow: boolean = false
```
### string
```js
let name: string = 'sanm'
name = 'sanm-zh'
let firstNmae: string = 'ZH'
```
### 字面量
```js
let result = '优' | '良' | '差'
```
### any
```js
let d: any = 3
d = 'sanm'
```
### unknow
```js
let notSure: unknow = 4
```
### void
```js
let unusable: void = undefined
```
### never
```js
function error(message: string): never {
    throw new Error(message)
}
```
### object
```js
let obj: object = {}
```
### array
```js
let arr: number[] = [1,2,3]
let list: Array<number> = [1,2,3]
```
### tuple
```js
let info: [string, number]
info = ['sanm', 3]
```
### 类型断言
```js
let bolgWebSite: unknown = "sanm-zh.gitee.io"
let strlength: number = (bolgWebSite as string).length

function getLength(content: string | number): number {
    if ((<string>content).length) {
        return (<string>content).length
    } else {
        return content.toString().length
    }
}
```

## 编译选项
### 自动编译文件
编译文件时，使用 `-w` 指令，编译器会自动监听文件的变化，文件变化后自动进行重新编译
```bash
tsc xxx.ts -w
```
### 自动编译项目
在项目根目录配置创建一个`tsconfig.json`文件，在根目录运行`tsc`可以编译整改项目
配置如下：
```js
// tsconfig.json
{
  "compilerOptions": {
    "allowUnreachableCode": true, // 不报告执行不到的代码错误。
    "allowUnusedLabels": false,	// 不报告未使用的标签错误
    "alwaysStrict": false, // 以严格模式解析并为每个源文件生成 "use strict"语句
    "baseUrl": ".", // 工作根目录
    "experimentalDecorators": true, // 启用实验性的ES装饰器
    "jsx": "react", // 在 .tsx文件里支持JSX
    "sourceMap": true, // 是否生成map文件
    "module": "commonjs", // 指定生成哪个模块系统代码
    "noEmitOnError": true,  // 当有错误时不生成编译后的文件
    "alwayStrict": true,    // 用来设置编译后的文件是否使用严格模式
    "noImplicitAny": true,  // 不允许隐式的any类型
    "noImplicitThis": true, // 不允许不明确类型的this
    "strictNullChecks": true    // 严格的检查空值
    "removeComments": true, // 是否移除注释
    "types": [ 
        //指定引入的类型声明文件，默认是自动引入所有声明文件，一旦指定该选项，则会禁用自动引入，
        // 改为只引入指定的类型声明文件，如果指定空数组[]则不引用任何文件
      "node", // 引入 node 的类型声明
    ],
    "paths": { // 指定模块的路径，和baseUrl有关联，和webpack中resolve.alias配置一样
      "src": [ //指定后可以在文件之直接 import * from 'src';
        "./src"
      ],
    },
    "target": "ESNext", // 编译的目标是什么版本的
    "outDir": "./dist", // 输出目录
    "declaration": true, // 是否自动创建类型声明文件
    "declarationDir": "./lib", // 类型声明文件的输出目录
    "allowJs": true, // 允许编译javascript文件。
    "lib": [ // 编译过程中需要引入的库文件的列表
      "es5",
      "es2015",
      "es2016",
      "es2017",
      "es2018",
      "dom"
    ]
  },
  // 指定一个匹配列表（属于自动指定该路径下的所有ts相关文件）
  "include": [
    "src/**/*"
  ],
  // 指定一个排除列表（include的反向操作）
  "exclude": [
    "demo.ts"
  ],
  // 指定哪些文件使用该配置（属于手动一个个指定文件）
  "files": [
    "demo.ts"
  ]
}
// ** 任意目录
// * 任意文件
```
::: details 一个较详细的 tsconfig.json 配置文件
```js
// 
{
  "compilerOptions": {
    "incremental": true,                       // 是否启用增量编译
    "tsBuildlnfoFile": "./buildFile",          // 增置编译文件的存储位置
    "diagnostics": true,　　　　　　　　　　　　 // 是否显示诊断信息
    "target": "es5",                           // target用于指定编译之后的版本目标 version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'
    "module": "commonjs",                      // 指定模块生成方式，["commonjs", "amd", "umd", "system", "es6", "es2015", "esnext", "none"]
    "outFile": "./app-js",                     // 将多个相互依赖的文件生成一个文件，可以用在AMD模块中
    "lib": [],                                 // TS 需要引用的库，即声明文件，es5 默认"dom", "es5", "scripthost"
    "allowJs": true,                           // 允许编译：IS 文件（js、jsx)
    "checkJs": true,                           // 允许在JS文件中报错，通常与allowJS _起使用
    "outDir": "./dist",                        // 指定输出目录
    "rootDir": "./",                           // 指定输入文件目录（用于输出）
    "declaration": true,                       // 生成声明文件
    "declarationDir": "./d",                   // 声明文件的路径
    "emitDeclarationOnly": true,               //只生成声明文件
    "sourceMap": true,                         // 生成目标文件的    sourceMap
    "inlineSourceMap": true,                   // 生成目标文件的 inline sourceMap
    "declarationMap": true,                    // 生成声明文件的 sourceMap
    "typeRoots":[],                            // 声明文件目录，默认node_modules/@types
    "types":[],                                // 声明文件包
    "removeComments":true,                     // 删除注释
    "noEmit": true,                            // 不输出文件
    "noEmitOnError": true,                     // 发生错误时不输出文件
    "noEmitHelpers": true,                     // 不生成helper 函数，需要额外安装ts-helpers
    "importHelpers": true,                     // 通过tslib 引入 helper 函数，文件必须是模块
    "unoEmitOnErrorM": true,                     // 发生错误时不输出文件
    "noEmitHelpers": true,                     // 不生成 helper 函数，需额外安装 ts-helpers 
    "importHelpers": true,                     // 通过tslib引入helper函数，文件必须是模块
    "downlevellteration" : true,               // 降级遍历器的实现（es3/5)
    "strict": true,                            // 开启所有严格的类型检查
    "alwaysStrict": false,                     // 在代码中注入"use strict";
    "noImplicitAny": false,                    // 不允许隐式的any类型
    "strictNullChecks": false,                // 不允许把null、undefined赋值给其他类型变置
    "strictFunctionTypes": false,              // 不允许函数参数双向协变
    "strictPropertyInitialization": false,     // 类的实例属性必须初始化
    "strictBindCallApply": false,                // 严格的 bind/call/apply 检査
    "noImplicitThis": false,                   // 不允许this有隐式的any类型
    "noUnusedLocals": true,                    // 检査只声明，未使用的局部变置 
    "nollnusedParameters": true,               // 检查未使用的函数参数
    "noFallthroughCasesInSwitch": true,        // 防止switch语句贯穿
    "noImplicitReturns": true,                 // 每个分支都要有返回值
    "esModulelnterop": true,                   // 允许export = 导出，由import from导入 
    "allowUrndGlobalAccess": true,             // 允许在模块中访问UMD全局变置
    "moduleResolution": "node",                // 模块解析策略
    "baseUrl": "./",                           // 解析非相对模块的基地址
    "paths": {
       "jquery": ["node-modules/jquery/dist/jquery.slim.min.js"]
     }
    "rootDirs": ["src", "out"],                // 将多个目录放在一个虚拟目录下，用于运行时
    "listEmittedFiles": true,                  // 打印输出的文件
    "listFiles": true,                         // 打印编译的文件（包括引用的声明文件）
  },
  "include": [                                 // 指定一个匹配列表（属于自动指定该路径下的所有ts相关文件）
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": [                                 // 指定一个排除列表（include的反向操作）
    "node_modules"
  ],
  "files": [                                   // 指定哪些文件使用该配置（属于手动一个个指定文件）
    "demo.ts"
  ]
}
```
:::
## 使用webpack打包
```js
// webpack.config.js
// webpack.config.js
// 引入一个包
const path = require('path');

// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
 // 指定入口文件
 entry: "./src/index.ts",
 // 指定打包文件所在目录
 output: {
  // 指定打包文件的目录
  path: path.resolve(__dirname, 'dist'),
  // 打包后文件
  filename: "bundle.js"
 },
 
 // 指定webpack打包时要使用模块
 module: {
  // 指定要加载的规则
  rules: [
   {
    // test指定的是规则生效的文件
    test: /\.ts$/,
    // 要使用的Loader
    use: 'ts-loader',
    // 要排除的文件
    exclude: /node-modules/
   }
  ]
 }
};
```
## webpack
通常情况下，实际开发中我们都需要使用构建工具对代码进行打包，TS同样也可以结合构建工具一起使用。
- `webpack`：构建工具`webpack`
- `webpack-cli`: `webpack`的命令行工具
- `webpack-dev-server`: `webpack` 的开发服务器
- `typescript`: ts编译器

```js

// webpack.config.js

// 引入html插件
const HTMLWebpackPlugiin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// 配置webpack插件
plugins: [
 new CleanWebpackPlugin(),
 new HTMLWebpackPlugin({
  title: "这是一个自定义title"
 }), // 自动的生成html文件
]

// 用来设置引用模块
resolve: {
 extensions: ['.ts', '.js']
}

// 指定webpack打包时要使用模块
module: {
// 指定要加载的规则
rules: [
  {
  // test指定的是规则生效的文件
  test: /\.ts$/,
  // 要使用的Loader
  use: [
    {
    loader: "babel-loader",
    // 设置babel
    options: {
    presets: [
      [
      // 指定环境的插件
      "@babel/preset-env",
      // 配置信息
      {
        targets: {
        "chrome":"88"
        }
        "corejs": "3",
        // 使用corejs的方式 usage表示按需加载
        "useBuiltIns":"usage"
      }
      ]
    ]
    }
    }
    'ts-loader'
    ]
    // 要排除的文件
      exclude: /node-modules/
    }
  ]
}
```
:::details ts项目常用npm包
```txt
TypeScript：

typescript；
ts-loader；

Webpack：

webpack；
webpack-cli；
webpack-dev-server；
html-webpack-plugin；
clean-webpack-plugin；

Babel：

core-js；
babel-loader；
@babel/core；
@babel/preset-env；

Less & CSS资源：

style-loader；
css-loader；
less；
less-loader；
postcss；
postcss-loader；
postcss-preset-env；
```
:::
## 面向对象
程序之中所有的操作都需要通过对象来完成。
- 操作浏览器要使用`window`对象
- 操作网页要使用`document`对象
- 操作控制台要使用`console`对象

计算机程序的本质就是对现实事物的抽象，抽象的反义词是具体，比如：照片是对一个具体的人的抽象，汽车模型是对具体汽车的抽象等等。程序也是对事物的抽象，在抽象中我们可以表示一个人，一条狗等。一个事物到了程序就变成了一个对象。

## 类
```js
class Person {
 // 直接定义的属性是实例属性，需要通过对象的实例去访问：
 // const per = new Person();
 // per.name
 
 // 使用static开头的属性是静态属性（类属性），可以直接通过类去访问
 // Person.age
 
 // readonly开头的属性表示一个只读的属性
 
 // 定义实例属性
 name: string = 'jeskson';
 // 在属性前使用static 关键字可以定义类属性（静态属性）
 static age: number = 18;
}
const per = new Person();
// console.log(per);
// console.log(per.name, per.age);
sayHello(){
 console.log('hello');
}
// 不加static，实例对象调用
// 定义static，类方法或属性
```
### 构造函数
```js
class Dog{
 name = 'wang';
 age = 1;
 bark(){
  alert('wang');
 }
}

const dog = new Dog();
const dog2 = new Dog();

console.log(dog);
console.log(dog2);
```

```js
class Dog {
 name: string;
 age: number;
 // constructor 被称为构造函数
 // 构造函数会在对象创建时调用
 constructor(name: string, age: number) {
  // 在实例方法中，this就表示当前的实例
  // 在构造函数中当前对象就是当前新建的那个对象
  // 可以通过this向新建的对象中添加属性
  this.name = name;
  this.age = age;
 }
 bark() {
  alert('sanm-zh.github.io');
  // 在方法中可以通过this来表示当前调用方法的对象
  console.log(this.name);
 }
}
const dog = new Dog('baidu', age: 1);
const dog2 = new Dog('taobao', age: 2);
console.log(dog);
console.log(dog2);

dog2.bark();
```
### 继承
```js
(function(){
 // 定义一个表示狗的类
 class Dog{
  name: string;
  age: number;
  
  constructor(name: string, age: number) {
   this.name = name;
   this.age = age;
  }
  
  sayHello() {
   console.log('taobao.com')'
  }
 }
 
 const dog = new Dog('taobao', 1);
 console.log(dog);
 dog.sayHello();
})();
```
使用继承后，子类将会拥有父类所有的方法和属性

使用继承可以将多个类中公有的代码写在一个父类中，这样只需要写一次即可让所有的子类都同时拥有父类中的属性和方法。

子类覆盖掉父类方法的形式，称为方法**重写**。

```js
class Dog extends Animal{
 run() {
  console.log();
 }
 sayHello() {
  console.log();
 }
}

```
### super 超类
```js
(function(){
 class Animal{
  name: string;
  
  constructor(name: string) {
   this.name = name;
  }
  
  sayHello() {
   console.log('动物叫');
  }
 }
 
 class Dog extends Animal{
  sayHello() {
   // 在类的方法中 super 就表示当前类的父类
   super.sayHello();
  }
 }
 
 const dog = new Dog('taobao.com');
 dog.sayHello();
})();

class Dog extends Animal{
 age: number,
 constructor(name: string, age: number){
  // 如果在子类中写了构造函数，在子类构造函数中必须对父类引用
  super(name); // 调用父类的构造函数
  this.age = age;
 }
 sayHello() {
  // 在类的方法中 super 就表示当前类的父类
  // super.sayHello();
 }
}
const dog = new Dog('taobao');
```
### 抽象类
以`abstract`开头的类是抽象类，不希望这个类创建对象的时候。

抽象类中可以添加抽象方法，抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写。
```js
abstract class Animal{
 name: string;
 
 constructor(name: string) {
  this.name = name;
 }
 
 // 定义一个抽象方法
 // 抽象方法使用abstract开头，没有方法体
 // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
 abstract sayHello():void;
}
```
## 接口
```js
(function(){
 // 描述一个对象的类型
 type myType = {
  name: string,
  age: number
 };
 
 // 接口用来定义一个类结构
 // 用来定义一个类中应该包含哪些属性和方法
 // 同时接口也可以当成类型声明去使用
 
 interface myInterface{
  name: string;
  age: number;
 }
 
 interface myInterface{
  gender: string;
 }
 
 const obj: myType = {
  name: 'dada',
  age: 1
 };
 
 const obj1: myInterface = {
  name: 'dada',
  age: 1,
  gender: '男'
 };
 
})();
```
接口可以在定义类的时候去限制类的结构

接口中的所有的属性都不能有实际的值

接口只定义对象的结构，而不考虑实际值

在接口中所有的方法都是抽象方法

```js
interface myInter{
 name: string;
 
 sayHello(): void;
}

// 定义类时，可以使类去实现一个接口
// 实现接口就是使类满足接口的要求

class MyClass implements myInter {
 name: string;
 constructor(name: stirng) {
  this.name = name;
 }
 sayHello(){
  // 接口就是就类的限制，定义规范
 }
}

```
## 封装
```js
(function(){
 // 定义一个表示人的类
 class Person{
  private _name: string;
  private _age: number;
  // public 修饰的属性可以在任意位置访问（修改）默认值
  // private 私有属性，私有属性只能在类内部进行访问修改
  
  // 通过在类中添加方法使得私有属性可以被外部访问
  
  constructor(name: string, age: number) {
   this._name = name;
   this._age = age;
  }
  // 定义方法，用来获取name属性
  getName() {
   return this._name;
  }
  // 定义方法，用来设置name属性
  setName(value: string) {
    if(value>=0) {
      this._name = value;
    }
  }
  
  // TS中设置getter方法的法方式
  get name() {
  console.log('get name()执行了');
   return this._name;
  }
  set age(value) {
   if(value>=0){
    this._age = value;
   }
  }
  }
 }
 
 const per = new Person('jeskson', 18);
 console.log(per);
 
 // per.name = 'dadaqianduan.cn';
 // per.age = 12;
 
 // console.log(per.getName());
 // per.setName('jeskson');
 // per.age = 2
 
})();
```
## public
```js
class A {
 public num: number;
 // private num: number;
 // protected 受保护的属性，只能在当前类和子类中使用
 constructor(num: number){
  this.num = num;
 }
}

class B extends A {
 test() {
  console.log(this.num);
 }
}

```
### 语法糖
```js
class C{
 // 可以直接将属性定义在构造函数中
 constructor(public name: string, public age: number){

 }
}
```
## 泛型
在定义函数或是类时，如果遇到类型不明确就可以使用泛型
```js
function fn(a: number): number{
 return a;
}

function test(arg: any): any{
    return arg;
}
```
`any`会关闭掉类型的检查，任意类型

`<T>`就是泛型
```js
// 类型不明确时，使用泛型
function fn<T>(a: T): T{
 return a;
}
// T只有在函数的执行的时候，才能定义

fn(10); // 不指定泛型，ts可以自动对类型进行推断

fn<string>('jeskson'); // 指定泛型

function fn2<T,k>(a: T, b: K): T {
 console.log(b);
 return a;
}

fn2<number, string>(123, 'dadaqianduan.cn');

// 限制泛型的类型

interface Inter {
 length: number;
}

function fn3<T extends Inter>(a: T): number{
 return a.length;
}

fn3('123');
fn3({length: 12);

```

### 泛型类
```js
class MyClass<T> {
 name: T;
 constructor(name: T) {
  this.name = name;
 }
}

const sanm = new MyClass<string>('sanmzh');
```