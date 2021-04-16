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
