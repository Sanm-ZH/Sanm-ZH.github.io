(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{570:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("Boxx",{attrs:{changeTime:"30000"}}),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[s._v("思路")]),a("ol",[a("li",[s._v("从 "),a("code",[s._v("rgb(255, 255, 255)")]),s._v(" 中提取出 "),a("code",[s._v("r=255")]),s._v(" 、 "),a("code",[s._v("g=255")]),s._v(" 、 "),a("code",[s._v("b=255")])]),s._v(" "),a("li",[s._v("将 "),a("code",[s._v("r")]),s._v(" 、 "),a("code",[s._v("g")]),s._v(" 、 "),a("code",[s._v("b")]),s._v(" 转换为十六进制，不足两位则补零")]),s._v(" "),a("li",[s._v("组合 "),a("code",[s._v("#")])])])]),a("h2",{attrs:{id:"提取r、g、b"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提取r、g、b"}},[s._v("#")]),s._v(" 提取r、g、b")]),s._v(" "),a("h3",{attrs:{id:"match-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#match-方法"}},[s._v("#")]),s._v(" match()方法")]),s._v(" "),a("p",[s._v("利用 "),a("code",[s._v("match()")]),s._v(" 方法，取出"),a("code",[s._v("r")]),s._v(","),a("code",[s._v("g")]),s._v(","),a("code",[s._v("b")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgbToHex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("sRGB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("^(rgb|RGB)\\(\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3}\\s*),\\s*(\\d{1,3})\\s*\\)$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" rbg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sRGB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" rbg\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// test")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgbToHex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rgb(255,255,255)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ["rgb(255,255,255)", "rgb", "255", "255", "255", index: 0, input: "rgb(255,255,255)", groups: undefined]0: "rgb(255,255,255)"1: "rgb"2: "255"3: "255"4: "255"groups: undefinedindex: 0input: "rgb(255,255,255)"length: 5__proto__: Array(0)')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgbToHex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rgb(13, 101, 255)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ["rgb(13, 101, 255)", "rgb", "13", "101", "255", index: 0, input: "rgb(13, 101, 255)", groups: undefined]')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("code",[s._v("r=rgb[2]")]),s._v("、"),a("code",[s._v("g=rgb[3]")]),s._v("、"),a("code",[s._v("b=rgb[4]")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgbToHex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("sRGB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" rgb "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sRGB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\d+")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" rgb\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// test")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgbToHex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rgb(255, 255, 255)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ["255", "255", "255"]')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgbToHex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rgb(13, 101, 255)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ["13", "101", "255"]')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"replace-split"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replace-split"}},[s._v("#")]),s._v(" replace + split")]),s._v(" "),a("p",[a("code",[s._v("rgb(255, 255, 255)")]),s._v(" 的每一个色值是通过 "),a("code",[s._v(",")]),s._v(" 连接一起的")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgbToHex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("sRGB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" rgb "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sRGB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("(?:\\(|\\)|rgb|RGB)*")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("','")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" rgb\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// test")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgbToHex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rgb(255, 255, 255)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ["255", "255", "255"]')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgbToHex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rgb(13, 101, 255)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ["13", "101", "255"]')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"转为十六进制、不足补零"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转为十六进制、不足补零"}},[s._v("#")]),s._v(" 转为十六进制、不足补零")]),s._v(" "),a("p",[s._v("转换为十六进制，可采用：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("(+n).toString(16)")]),s._v(" 或 "),a("code",[s._v("Number(n).toString(16)")])]),s._v(" "),a("li",[a("code",[s._v("parseInt(n, 16)")])])]),s._v(" "),a("p",[s._v("不足两位则补零：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("('0' + r16).slice(-2)")])]),s._v(" "),a("li",[a("code",[s._v("r16.padStart(2, '0')")])]),s._v(" "),a("li",[a("code",[s._v("(r < 16? '0':'') + r16")])]),s._v(" "),a("li",[a("code",[s._v("r16.length < 2 ? '0' + r16 : r16")])]),s._v(" "),a("li",[a("code",[s._v("((1 << 24) + (Number(r) << 16) + (Number(g) << 8) + Number(b)).toString(16).slice(1)")])])]),s._v(" "),a("h3",{attrs:{id:"组合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合"}},[s._v("#")]),s._v(" 组合")]),s._v(" "),a("h3",{attrs:{id:"reduce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reduce"}},[s._v("#")]),s._v(" reduce")]),s._v(" "),a("p",[s._v("输出可为大写（ "),a("code",[s._v("#FFFFFF")]),s._v(" ）或小写字符（ "),a("code",[s._v("#ffffff")]),s._v(" ）")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("rgb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("acc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cur")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" acc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" hex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("toUpperCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("或")]),s._v(" 通过 "),a("code",[s._v("+")]),s._v("字符串拼接")])],1)}),[],!1,null,null,null);t.default=e.exports}}]);