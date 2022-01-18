---
author: sanmzh
title: html转canvas保存图片
categories: [JavaScript]
tags: [js]
date: 2022-01-18 22:23:02
---

<Boxx changeTime="30000"/>

:::tip 前言
将部分网页保存成图片（截图）<br>
工具：
- [`html2canvas.js`](https://github.com/tomgobich/html2canvas)，`html2canvas-dpi`
- [`jspdf.js`](https://github.com/parallax/jsPDF)
:::

### 使用`html2canvas`截取对应元素并生成`canvas`并保存图片
```js
// ele 需要截取的元素
html2canvas(ele, {
    useCORS: true,  // 跨域相关
    allowTaint: false,  // 图片跨域
    dpi: 288, // 图片质量
    onrendered: function (canvas) {
        // 下载部分
        var eleLink = document.createElement('a');
        eleLink.download = 'fileName';  // 文件名
        eleLink.style.display = 'none';
        eleLink.href = canvas.toDataURL('image/jpeg', 1.0); // canvas转成图片
        // 触发点击
        document.body.appendChild(eleLink);
        eleLink.click();
        // 然后移除
        document.body.removeChild(eleLink);
    }
});
```

### 使用`html2canvas`截取对应元素并生成`canvas`转成图片插入`PDF`
```js
// ele 需要截取的元素
html2canvas(ele, {
    useCORS: true,  // 跨域相关
    allowTaint: false,  // 图片跨域
    dpi: 288, // 图片质量
    onrendered: function (canvas) {
        var contentWidth = canvas.width;
        var contentHeight = canvas.height;

        //一页pdf显示html页面生成的canvas高度;
        var pageHeight = (contentWidth / 592.28) * 841.89;
        //未生成pdf的html页面高度
        var leftHeight = contentHeight;
        //页面偏移
        var position = 0;
        var imgWidth = 595.28;
        var imgHeight = (592.28 / contentWidth) * contentHeight;

        var pageData = canvas.toDataURL('image/jpeg', 1.0);

        var pdf = new jsPDF('', 'pt', 'a4');

        //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        //当内容未超过pdf一页显示的范围，无需分页
        if (leftHeight < pageHeight) {
            pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
        } else {
            while (leftHeight > 0) {
                pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
                leftHeight -= pageHeight;
                position -= 841.89;
                //避免添加空白页
                if (leftHeight > 0) {
                    pdf.addPage();
                }
            }
        }
        pdf.save('文件名.pdf');
    }
  });
```