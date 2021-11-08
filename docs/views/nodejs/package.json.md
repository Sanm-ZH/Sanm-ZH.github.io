---
author: sanmzh
title: package.json 认识
categories: [nodejs]
tags: [npm,pagckage]
date: 2021-11-04 14:18:07
keys: 
  - 'f7e0b956540676a129760a3eae309294'
---

<Boxx changeTime="30000"/>

:::tip 背景
现在前端项目，都有 `package.json` 文件，它是项目的配置文件，常见的配置文件有配置项目启动、打包、声明依赖等等。
`package.json` 文件是一个 `JSON` 对象。

当使用 `react` 脚手架 `create-react-app` 初始化一个项目时，会生成如下 `package.json`：
```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```
:::

## 必须属性
`package.json` 中最重要的两个字段就是 `name` 和 `version`，它们都是必须的，如果没有，就无法正常执行 `npm install` 命令。`npm` 规定 `package.json` 文件是由名称和版本号作为唯一标识符的。

### name
`name` 很容易理解，就是项目的名称，它是一个字符串。在给 `name` 字段命名时，需要注意以下几点：

- 名称的长度必须小于或等于214个字符，不能以“`.`”和“`_`”开头，不能包含大写字母（这是因为当软件包在npm上发布时，会基于此属性获得自己的URL，所以不能包含非URL安全字符（`non-url-safe`））；
- 名称可以作为参数被传入`require("")`，用来导入模块，所以应当尽可能的简短、语义化；
- 名称不能和其他模块的名称重复，可以使用`npm view`命令查询模块明是否重复，如果不重复就会提示`404`。

实际上，我们平时开发的很多项目并不会发布在`npm`上，所以这个名称是否标准可能就不是那么重要，它不会影响项目的正常运行。如果需要发布在`npm`上，`name`字段一定要符合要求。

### version
`version`字段表示该项目包的版本号，它是一个字符串。在每次项目改动后，即将发布时，都要同步的去更改项目的版本号。版本号的使用规范如下：

- 版本号的命名遵循语义化版本2.0.0规范，格式为：主版本号.次版本号.修订号，通常情况下，修改主版本号是做了大的功能性的改动，修改次版本号是新增了新功能，修改修订号就是修复了一些bug；
- 如果某个版本的改动较大，并且不稳定，可能如法满足预期的兼容性需求，就需要发布先行版本，先行版本通过会加在版本号的后面，通过“-”号连接以点分隔的标识符和版本编译信息：内部版本（alpha）、公测版本（beta）和候选版本（rc，即release candiate）。

## 描述信息
`package.json` 中有五个和项目包描述信息相关的配置字段。

### description
description字段用来描述这个项目包，它是一个字符串，可以让其他开发者在 npm 的搜索中发现我们的项目包。

### keywords
keywords字段是一个字符串数组，表示这个项目包的关键词。和description一样，都是用来增加项目包的曝光率的。

### author
author顾名思义就是作者，表示该项目包的作者。它有两种形式，一种是字符串格式：
```js
"author": "sanmzh <zhxpvip7@gmail.com> (https://github.com/sanm-zh)"
```
对象形式：
```js
"author": {
  "name" : "sanmzh",
  "email" : "zhxpvip7@gmail.com",
  "url" : "https://github.com/sanm-zh"
}
```
### contributors
contributors表示该项目包的贡献者，和author不同的是，该字段是一个数组：
```js
"contributors": [
  "sanmzh1 <zhxpvip7@gmail.com> (https://github.com/sanm-zh)",
  "sanmzh2 <zhxpvip7@gmail.com> (https://github.com/sanm-zh)"
 ]
```
```js
"contributors": [
  {
  	"name" : "sanmzh1",
  	"email" : "zhxpvip7@gmail.com",
  	"url" : "https://github.com/sanm-zh"
	},
  {
  	"name" : "sanmzh2",
  	"email" : "zhxpvip7@gmail.com",
  	"url" : "https://github.com/sanm-zh"
	}
 ]
```
### homepage
homepage就是项目的主页地址了，它是一个字符串。
### repository
repository表示代码的存放仓库地址：
```js
"repository": "https://github.com/facebook/react.git"
```
除此之外，还可以显式地设置版本控制系统：
```js
"repository": {
  "type": "git",
  "url": "https://github.com/facebook/react.git"
}
```
### bugs
bugs表示项目提交问题的地址，该字段是一个对象，可以添加一个提交问题的地址和反馈的邮箱：
```js
"bugs": { 
  "url" : "https://github.com/facebook/react/issues",
  "email" : "xxxxx@xx.com"
}
```
最常见的 `bugs` 就是 `github` 中的 `issues` 页面，如上就是 `react` 的 `issues` 页面地址。

## 依赖配置
### dependencies
`dependencies` 字段中声明的是项目的生产环境中所必须的依赖包。

需要注意，不要把测试或者过渡性的依赖放在dependencies，避免生产环境出现意外的问题。

### devDependencies
devDependencies中声明的是开发阶段需要的依赖包，如`Webpack`、`Eslint`、`Babel`等，用于辅助开发。它们不同于 `dependencies`，因为它们只需安装在开发设备上，而无需在生产环境中运行代码。当打包上线时并不需要这些包，所以可以把这些依赖添加到 `devDependencies` 中，这些依赖依然会在本地指定 `npm install` 时被安装和管理，但是不会被安装到生产环境中。

```bash
npm i --save-dev <PACKAGENAME>
# or
npm i -D <PACKAGENAME>
```

### peerDependencies
有些情况下，我们的项目和所依赖的模块，都会同时依赖另一个模块，但是所依赖的版本不一样。比如，我们的项目依赖A模块和B模块的1.0版，而A模块本身又依赖B模块的2.0版。大多数情况下，这不是问题，B模块的两个版本可以并存，同时运行。但是，有一种情况，会出现问题，就是这种依赖关系将暴露给用户。

最典型的场景就是插件，比如A模块是B模块的插件。用户安装的B模块是1.0版本，但是A插件只能和2.0版本的B模块一起使用。这时，用户要是将1.0版本的B的实例传给A，就会出现问题。因此，需要一种机制，在模板安装的时候提醒用户，如果A和B一起安装，那么B必须是2.0模块。
`peerDependencies` 字段就是用来供插件指定其所需要的主工具的版本。

```js
"name": "chai-as-promised",
"peerDependencies": {
   "chai": "1.x"
}
```
上面代码指定在安装chai-as-promised模块时，主程序chai必须一起安装，而且chai的版本必须是1.x。如果项目指定的依赖是chai的2.0版本，就会报错。
需要注意，从`npm 3.0`版开始，`peerDependencies`不再会默认安装了。

### optionalDependencies
如果需要在找不到包或者安装包失败时，`npm`仍然能够继续运行，则可以将该包放在`optionalDependencies`对象中，`optionalDependencies`对象中的包会覆盖`dependencies`中同名的包，所以只需在一个地方进行设置即可。

需要注意，由于`optionalDependencies`中的依赖可能并为安装成功，所以一定要做异常处理，否则当获取这个依赖时，如果获取不到就会报错。

### bundledDependencies
上面的几个依赖相关的配置项都是一个对象，而`bundledDependencies`配置项是一个数组，数组里可以指定一些模块，这些模块将在这个包发布时被一起打包。

需要注意，这个字段数组中的值必须是在`dependencies`, `devDependencies`两个里面声明过的包才行。

### engines
当我们维护一些旧项目时，可能对npm包的版本或者Node版本有特殊要求，如果不满足条件就可能无法将项目跑起来。为了让项目开箱即用，可以在engines字段中说明具体的版本号：
```js
"engines": {
  "node": ">=8.10.3 <12.13.0",
  "npm": ">=6.9.0"
}
```

需要注意，`engines` 只是起一个说明的作用，即使用户安装的版本不符合要求，也不影响依赖包的安装。