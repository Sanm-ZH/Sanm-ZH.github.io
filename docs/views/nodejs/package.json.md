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

