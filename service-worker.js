/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d109f1df23b6789a4ad34e60ffa5ca45"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.112ab001.css",
    "revision": "3245ee944a947158ada9be71fbf6dfd8"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bubbleSort.33a947c7.gif",
    "revision": "33a947c71ad62b254cab62e5364d2813"
  },
  {
    "url": "assets/img/countingSort.827d96b8.gif",
    "revision": "827d96b8ca3682e8775f4916f22b45ac"
  },
  {
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "assets/img/insertSort.366d07ff.jpg",
    "revision": "366d07ffc40fb12aa8780b791cf86b90"
  },
  {
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
  },
  {
    "url": "assets/img/mergeSort.cdda3f11.gif",
    "revision": "cdda3f11c6efbc01577f5c29a9066772"
  },
  {
    "url": "assets/img/quickSort.c411339b.gif",
    "revision": "c411339b79f92499dcb7b5f304c826f4"
  },
  {
    "url": "assets/img/quickSort2.c411339b.gif",
    "revision": "c411339b79f92499dcb7b5f304c826f4"
  },
  {
    "url": "assets/img/radixSort.6690b105.gif",
    "revision": "6690b1054909755ffcca96feb7a4d3ec"
  },
  {
    "url": "assets/img/sort-divide.3b37f014.png",
    "revision": "3b37f014fba8e0f89ef690c09ccf29df"
  },
  {
    "url": "assets/img/sort-merge.b5b2bd5e.png",
    "revision": "b5b2bd5e7e6234404a932704eaf2dc69"
  },
  {
    "url": "assets/img/sort-triangle.2b2fe723.png",
    "revision": "2b2fe7233fb2f4f1abfa7d4075006dd8"
  },
  {
    "url": "assets/img/vue3-doc-home.9d103c9f.jpg",
    "revision": "9d103c9f522aa15d9aaaa8df4734ae81"
  },
  {
    "url": "assets/img/vue3-ts-vite.4931da9a.jpg",
    "revision": "4931da9a7dc6b6f08832ef3c4c1bc36e"
  },
  {
    "url": "assets/js/1.8bd2d91b.js",
    "revision": "f4f3ffe9040e5ab8d4bb0086edf2ec86"
  },
  {
    "url": "assets/js/10.2dbc2b31.js",
    "revision": "745bd529916b8c32c6e030a2805d25a3"
  },
  {
    "url": "assets/js/11.4a76b79b.js",
    "revision": "29c99ca84927c75e394ef91f86771f61"
  },
  {
    "url": "assets/js/12.531cdc5f.js",
    "revision": "250b73a79dd660bf18982de2bd1c5402"
  },
  {
    "url": "assets/js/13.24a30a2f.js",
    "revision": "88dce7d53094faa03efb0fe6ab92544d"
  },
  {
    "url": "assets/js/14.7a0e477e.js",
    "revision": "73a44a1f05fc0156519bc4b68d4bcf0a"
  },
  {
    "url": "assets/js/15.d9827512.js",
    "revision": "a139f52d0638c9ec07d57384aea523a2"
  },
  {
    "url": "assets/js/16.e7ffa33b.js",
    "revision": "0410def15d82f16d2ba47e5b178927b0"
  },
  {
    "url": "assets/js/17.85e3f1bd.js",
    "revision": "a2fcf9dc58a85c3015f2c1d380403031"
  },
  {
    "url": "assets/js/18.93ec21e2.js",
    "revision": "3db852903ef3b35ea475bb0a2262ee9f"
  },
  {
    "url": "assets/js/19.46c43b77.js",
    "revision": "3a84c9f6b315cebb6cd994049203c287"
  },
  {
    "url": "assets/js/2.8da2a3cf.js",
    "revision": "6cc7ef250e62d4461602fc96fe9de15b"
  },
  {
    "url": "assets/js/20.ce9579e9.js",
    "revision": "fdce7117046a36aad810b78f4e566689"
  },
  {
    "url": "assets/js/21.da422fb6.js",
    "revision": "4ed336510310dc742c8ade38d71bea08"
  },
  {
    "url": "assets/js/22.87ed77d0.js",
    "revision": "fc9a1bc72ae294605a23ff595327a495"
  },
  {
    "url": "assets/js/23.a5f79d21.js",
    "revision": "f9c3dd640c14917b06dd5c087ad2e5df"
  },
  {
    "url": "assets/js/24.9ce6e1ef.js",
    "revision": "2c84e252d859fbfb07c4dda419dd92c7"
  },
  {
    "url": "assets/js/25.8cafd27d.js",
    "revision": "681bd113e7e102e29a0e5070e5ee4e48"
  },
  {
    "url": "assets/js/26.17c66217.js",
    "revision": "cf72643efa398dded3e70ead5c39a76d"
  },
  {
    "url": "assets/js/27.6457e7eb.js",
    "revision": "aab6daa5b2e53a10b1347e7739671a1a"
  },
  {
    "url": "assets/js/28.9c92bd42.js",
    "revision": "d735fee5daae7df7ea8bcd3c7f0aa594"
  },
  {
    "url": "assets/js/29.3d2bce54.js",
    "revision": "22cbff5ce1ffe0d9db951f73ca3262b8"
  },
  {
    "url": "assets/js/30.b8c0e7b4.js",
    "revision": "e019b89a380484d38e8afe4b925b5c19"
  },
  {
    "url": "assets/js/31.7c45663f.js",
    "revision": "87d5832261a0a7dc96a4af3106defbab"
  },
  {
    "url": "assets/js/32.6e5fc71d.js",
    "revision": "de384d96bfc9894891a247dae5b73f2c"
  },
  {
    "url": "assets/js/33.b05cabba.js",
    "revision": "e7da33bb4e00a942dbddd8c9b54c44eb"
  },
  {
    "url": "assets/js/34.c36e899a.js",
    "revision": "bb213d24a1a1bf97099fdb7539a1c8b2"
  },
  {
    "url": "assets/js/35.3c46bc45.js",
    "revision": "cc40920d94b3b21acacfa31b144be4b4"
  },
  {
    "url": "assets/js/36.ba2080b6.js",
    "revision": "43fd6a8ffe0af7865578f0eef18512f4"
  },
  {
    "url": "assets/js/37.6f9090b5.js",
    "revision": "d30bc7f3a7ba726d2ae79f3cfda0bd2e"
  },
  {
    "url": "assets/js/38.88001375.js",
    "revision": "3ac2c9a3d0a3283df25cf7823d927e07"
  },
  {
    "url": "assets/js/39.772f8235.js",
    "revision": "124168010178ba8931439275aec2efbe"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.d0aebd31.js",
    "revision": "805847510c399af6fab5f68d9ea349b6"
  },
  {
    "url": "assets/js/41.b421cf13.js",
    "revision": "3d6a8d6136dc7aa5fab14aa92a5cfd7d"
  },
  {
    "url": "assets/js/42.e6db95b5.js",
    "revision": "4706de5a32f4dcaec399327187f136d6"
  },
  {
    "url": "assets/js/43.73ac72e8.js",
    "revision": "6416cadb4afcd8691f26c28a83760bb1"
  },
  {
    "url": "assets/js/44.d4f8bf5c.js",
    "revision": "c59728465444dc91c9c2aaa6cd5d7f4a"
  },
  {
    "url": "assets/js/45.2b3458eb.js",
    "revision": "5b381de253d0b8839651d357dba418c6"
  },
  {
    "url": "assets/js/46.5df9d0ed.js",
    "revision": "9fff5d85165d0f2087fe6277469987ea"
  },
  {
    "url": "assets/js/47.899ed514.js",
    "revision": "6f6fc42a7858a05108a4040c5a842ae0"
  },
  {
    "url": "assets/js/48.2fe82852.js",
    "revision": "0fcd44ab4610ba7811e8a5d6f541d6ab"
  },
  {
    "url": "assets/js/49.34d3af73.js",
    "revision": "a03208cb03f26ffd95229f1dbeacfb6a"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.69877009.js",
    "revision": "008f4cf76f743beadf39c8e366b3c2cb"
  },
  {
    "url": "assets/js/51.17f8cebe.js",
    "revision": "1f0d904c4e9a5e8247b6efaebe77f4a8"
  },
  {
    "url": "assets/js/52.42cccaf6.js",
    "revision": "fec40bb35081152916be9df1ef3ef1da"
  },
  {
    "url": "assets/js/53.15efcfe8.js",
    "revision": "6cd299ce9348ee49a288de48db0cce84"
  },
  {
    "url": "assets/js/54.3ec95bdf.js",
    "revision": "d0512f18cede9dcdc61ba7440f53dfe5"
  },
  {
    "url": "assets/js/55.a9155b81.js",
    "revision": "03b31ca94ba200213d60d3e9373b4f26"
  },
  {
    "url": "assets/js/56.fb46cc03.js",
    "revision": "c662d5a18103525a0ef0f1ccd1ef2fdf"
  },
  {
    "url": "assets/js/57.2a3f1268.js",
    "revision": "71c0ea7d83813b1cff8759cfd98e6738"
  },
  {
    "url": "assets/js/58.f237e7f4.js",
    "revision": "73bb4733d68615814e7d89be28f6c9c9"
  },
  {
    "url": "assets/js/59.4df1a71f.js",
    "revision": "1dc2dd70198c5da2a19b167054d06c99"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.f10885bb.js",
    "revision": "be300853e16b1ced9c6224ef6c9fe1e7"
  },
  {
    "url": "assets/js/61.996f8851.js",
    "revision": "922891a7141a2dfa641e0627ceef6731"
  },
  {
    "url": "assets/js/62.b9db9afd.js",
    "revision": "f27d21423eeb5e7ff4a6076fa68ed147"
  },
  {
    "url": "assets/js/63.9a00e6ed.js",
    "revision": "919564de090f2d46f9daa646dd7d9324"
  },
  {
    "url": "assets/js/64.8310cd04.js",
    "revision": "d3af5a66b78803af829ea48c6e4d0f3a"
  },
  {
    "url": "assets/js/65.9299525b.js",
    "revision": "20335ba1a188456b0a6d2a058f958ccf"
  },
  {
    "url": "assets/js/66.90b4b3a9.js",
    "revision": "94d0c51dbd6fb252ce2b3e7c0cbf6f24"
  },
  {
    "url": "assets/js/67.bf8dbc1e.js",
    "revision": "3cec76d1011ed176731b4d4f38f68587"
  },
  {
    "url": "assets/js/68.af6f36e3.js",
    "revision": "d17d8acc0daf3c8967bc7c64fb93c732"
  },
  {
    "url": "assets/js/69.1a2b97a0.js",
    "revision": "710b0509219316584ecebd8459388aa4"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.31fb6056.js",
    "revision": "ac55167e8fd9192635931e7f5de7aed9"
  },
  {
    "url": "assets/js/71.975047b7.js",
    "revision": "747eae4d98bec19c7736ee1b8388e425"
  },
  {
    "url": "assets/js/72.384c6613.js",
    "revision": "72f92ad2216f192ba6b4d49fc91924d7"
  },
  {
    "url": "assets/js/73.34aaf598.js",
    "revision": "106168e42a77649df2f423cb8c9c0556"
  },
  {
    "url": "assets/js/74.d88dc0b1.js",
    "revision": "05a00fc1e0c46414510dea0430f46af0"
  },
  {
    "url": "assets/js/75.6064c13a.js",
    "revision": "acbe7910507609c53345eb3d763f4884"
  },
  {
    "url": "assets/js/76.7051a5dc.js",
    "revision": "17b2773486aa7abf08830d9acd6cc410"
  },
  {
    "url": "assets/js/77.3c5a0ce1.js",
    "revision": "da798cc6568eac28b700f357bf85b426"
  },
  {
    "url": "assets/js/8.d0a11db5.js",
    "revision": "7d37d11592a9ea48a943d72bd0dbb6e1"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.1657d6be.js",
    "revision": "d0c85f1cc3d4142fc750bc28a7214069"
  },
  {
    "url": "assets/vue3-doc-home.jpg",
    "revision": "9d103c9f522aa15d9aaaa8df4734ae81"
  },
  {
    "url": "assets/vue3-ts-vite.jpg",
    "revision": "4931da9a7dc6b6f08832ef3c4c1bc36e"
  },
  {
    "url": "bubbleSort.gif",
    "revision": "33a947c71ad62b254cab62e5364d2813"
  },
  {
    "url": "categories/app/index.html",
    "revision": "74ffc44f615c4aced22c18b0b9bde61b"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "00fe8d190ddeeb6dc3c0790e3239506f"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "f9ec772ff05e56be50515e74002f7f1d"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "30c635aebac997475251cfc2143be176"
  },
  {
    "url": "categories/index.html",
    "revision": "6a7ea6a3109489d1b3827eaf2c03c6ab"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "5c19c6ff7de27ce642eac735a4d1a08a"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "1bd759ffa2607ac805e06c6aff3848a0"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "f7a81b5fbc1ec2c968dc205f301c1d31"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "a2eea31bbefd24a4e54f4c30a5c86bf9"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "5d294d6c1eb505115377187e055888e4"
  },
  {
    "url": "categories/other/index.html",
    "revision": "8f0d4760efcaf9533a02c2298e054383"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "af9da65d811d2260797cbcda60427b51"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "bf82c31081bfe6e8f078986b3db2c7f8"
  },
  {
    "url": "countingSort.gif",
    "revision": "827d96b8ca3682e8775f4916f22b45ac"
  },
  {
    "url": "green-book.jpg",
    "revision": "608eb7a85f964c86a3f9d4a9ed59f1e9"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "c8b00d812608bf98f806b55fa4140795"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "ee9693b6d1323c35ab47222d8f2cb237"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "110f83b3656390243816823b863d19f9"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "083fd5693709f1bb756d7146f92cfff0"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "0ad9644b653ab367462d48e9cb31653f"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "6537810f5c1f67bd9f285ab8f817dc33"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "7afb2b4fd95bd147a9f9c9dcd8be96a7"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "322c094e811fa22948fa838553168be6"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "6537810f5c1f67bd9f285ab8f817dc33"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "86902dea6b16aaf02b26ef1299313344"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "9c4b5b6a6755765277a8d344cef51a90"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "e217effa9bf49048ebe5f0c3c0b9bf83"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "73680937b571e80d379a0d099979548f"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "cf0c951947bdfe5abdfc0fe63e7ff297"
  },
  {
    "url": "index.html",
    "revision": "46542b60bb0a999a2d4d7504b1f0e0c8"
  },
  {
    "url": "insertSort.jpg",
    "revision": "366d07ffc40fb12aa8780b791cf86b90"
  },
  {
    "url": "kesshouban/model.2048/texture_00.png",
    "revision": "2e6411636e81d3e58e8315bfa586ba8d"
  },
  {
    "url": "lufei.jpg",
    "revision": "2496fc988426e1c3c1a3b88f1983b51b"
  },
  {
    "url": "mergeSort.gif",
    "revision": "cdda3f11c6efbc01577f5c29a9066772"
  },
  {
    "url": "quickSort.gif",
    "revision": "c411339b79f92499dcb7b5f304c826f4"
  },
  {
    "url": "quickSort2.gif",
    "revision": "c411339b79f92499dcb7b5f304c826f4"
  },
  {
    "url": "radixSort.gif",
    "revision": "6690b1054909755ffcca96feb7a4d3ec"
  },
  {
    "url": "self-blog.jpg",
    "revision": "adb6dc7dc0094c1d160cb8fd601514cd"
  },
  {
    "url": "self-resume.jpg",
    "revision": "0b07c2fcf77fb875cd329e73ff1e1f38"
  },
  {
    "url": "sort-divide.png",
    "revision": "3b37f014fba8e0f89ef690c09ccf29df"
  },
  {
    "url": "sort-merge.png",
    "revision": "b5b2bd5e7e6234404a932704eaf2dc69"
  },
  {
    "url": "sort-triangle.png",
    "revision": "2b2fe7233fb2f4f1abfa7d4075006dd8"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "8561cbe52155db4eb855f3c7a988a933"
  },
  {
    "url": "tag/App/index.html",
    "revision": "b19ca6e75c115d4e4732a44773122bfd"
  },
  {
    "url": "tag/array/index.html",
    "revision": "580f88b52592361dd8e0feb00ba78369"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "199401984615055d4142bfdc0c110ef4"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "e1c4df0eff15fb1ddc7f3ad4cfe64ec9"
  },
  {
    "url": "tag/css/index.html",
    "revision": "89d21e6ec6e6fca7299657d84434173e"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "8fe8c06b5b0987e4722fcb100a98d568"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "954d05414dece36ec4e14da111c22f63"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "d222b12856978437e59bc5acee8fba2d"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "7f5e399bb6749567f980f269b5f4b5df"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4a4420496ec79333f468547cce498afd"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "d997c98d1d1761c4e01d954b2e06e8df"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "eed5fb20adb386ef22c83d40c7e9fe86"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "51afc6fa94ce0c05d700f40f2e0f1725"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "9283fc35440f3f63adf4b6c759444ab0"
  },
  {
    "url": "tag/html/index.html",
    "revision": "db3c51233eddc02f425c16575390d3f7"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "cc015fe67d2ee4344e8bad2b3512dd23"
  },
  {
    "url": "tag/index.html",
    "revision": "f34dc30c73b4349e335c9afa2be2992b"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "c84809d02e548b0065c35eab7351e851"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "d5e9acbcea1f2302b3db4d0d784cb4ae"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "a9a3dadfa2beeb2296936f2e7ee49aa0"
  },
  {
    "url": "tag/js/index.html",
    "revision": "32e9d01cf9ddba23a945227551bfedb8"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "5d04dd903a50b321e176681f9663c891"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "ad169cee6de628f8b5ce87a08d4be02d"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "40ea4fc99d30fe28c65a1f7246a51e56"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "313e4ee197d8d1fa2c24b39367a54a4d"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "5148b20bab72a0a9588b67104dcc9b07"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "c32c86aebabe7174a16a55575c90af9c"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "1e918515bb938f001ccc95ba44c33100"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "6858e9dee4c3788580ce875829791ec1"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "01b095e8d636aff607dff7f765d5ca4c"
  },
  {
    "url": "tag/project/index.html",
    "revision": "3f20fe480e06bb138860b9f60aa124d2"
  },
  {
    "url": "tag/react/index.html",
    "revision": "b347cd35bfd7c148dee83cee5d384d44"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "02f449a218865869235522f0cbecd37b"
  },
  {
    "url": "tag/router/index.html",
    "revision": "bf02637a43e9d50f52dc2549f7a9ce69"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "4e7011e74077dbb780c7c13847febf84"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "c64e4058c676954a1d26dfe598d62bf0"
  },
  {
    "url": "tag/style/index.html",
    "revision": "ac3bc2038a441b46049e989aa89aac80"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "8ff3a988a6b8af48aa05d8e18e43c37f"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "899c09fc70ed6dbf000b2004512277f3"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "a4b2b8a5355a21402bf6e26126597657"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "392e3972a4a014804191e0508181e43c"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "162f45208755b24fa91743f07c9284f8"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "3a85f767894c1ce555d79bbd3222222e"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "65b48784063fd0f4017da1260451f055"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "07a7e52245051d9fa3e8c0dab7c9163b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d3bd42d7ebfbdca4e26fd843caaf1b4f"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "42a2c02c48e42da294e8dd99cbcc1a6d"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "bb41ac78055c9ac620734c895a2bc195"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "f02b65a00941d1b1c1606375530de0c4"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "33901f0c9fe5c340da7787136adeefc1"
  },
  {
    "url": "timeline/index.html",
    "revision": "a701c73a4db861f766d8e7d57fd1eb11"
  },
  {
    "url": "views/about/index.html",
    "revision": "a7bf19fed1bae556558c47014a5623cf"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "4c08284aa9fedf2e3ddb1af7d6aed0f2"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "eb82a8bb3401509f89c72945199da05d"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "56bb9c9fce5d0bdb22c562597509e7ad"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "c8f3d550710c65d18e4323e81d62cc78"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "9380621a2343bd64952a3363f9141404"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "c78da4d6fd12a26904d8f44c06598d64"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "3d4b7eb6e7cc1bd541fe275a08707348"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "4711d4c107c18f0462b752f3ac2d82cb"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "bfcfcd273fe05137afef355f8f88b34e"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "575983679a9b97ee98c8fd3ff7d86256"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "e7b19a39e6e8def36d21007c5d2bdfba"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "bd6269429ef7483931ecff2b4bee4011"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "d59b4e5afe3b6dcbd8093cc8ff45a601"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "c3b4c5007a740831b320c221a6668fc9"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "ed4fa1d96c372e3be905790022c01fe1"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "47b9ec83816685a8a17f55bb49807441"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "8746a155f259902faa5b03cce2940b79"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "d62a6182c72562f16a225d67ac462e44"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "15a755c515a9308c3ae2de82a31ef733"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "333a25068badfc5cf93119dd49702b9b"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "aac0ccdc6130fdb87c04ac5a908982a3"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "1067fdde82d2d5021035a8bc09e964c8"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "f1375547dc724e74cd4fff020d7dad0b"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "c2eade19f4aa9adffd4656319d675837"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "76d1349a2e41cef0d5b123f62c2e8451"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "a60e39f67f8a3660e822db92d63e7f27"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "fa14e73ea5def279130ccd9cb808dcd2"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "2aa85cb6139d1fb4fd5ab6dcd8077d3d"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "d9f20a6182f34c1711930d57b2e5b7b1"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "352a5bf7a6a2dfff8f76b56e47d9ca1e"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "c8e75821f59ade57b31af0cc013f07f5"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "aaedf6491f88640f27ae98566d77f267"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "74b213d8ce59a633ea961602f66125eb"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "c7c7589ce0cd0cf6e243cb829383b52b"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "6a77f4bbbfcfe5cd9cdd974cab9fb3c2"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "459451f024f49eba7afeedbadfa247bb"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "086862f36e9e70e99862738ee71e89c8"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "bbec13e684d521653e8fcd2a23990dfb"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "9bf98ea90c146e20ba3ae9dacf56e8a9"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "ee4a286f1adb6d1f7137efa8f3b48e2b"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "80a667e1923e02a8dd985365290aae57"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "715797c85bfa0c65955387b4ea11eef2"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "f0d62001be7efe753e5bf88647636514"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "c44526f179892b62412901c951762af8"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "30c5d5c247539f91b7eb5cb1baf7acba"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "25dbd55cec46b2594ff486bb51525e76"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "02f492df1c915569c18c906b1c13e454"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "e30706d46fd10db4c5866dcfa5359cb5"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "772f4ded807371cf45637c1f99b1452f"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "c319cb8f191561bdc8a37eb3159b478c"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "c13c2205c4a210b6f8d5bc8c8b89be3f"
  },
  {
    "url": "views/project/index.html",
    "revision": "85fe0bc444269d5677b2312d88ae90b5"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "d9c97ac42f9c16edc6fbbe3dfd512f8e"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "d762cc003f0e575592324631785f6135"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "682d6a38eca2a4a934564cba1ec46bc4"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "7ae70726798fce72a30faff25a5ff7a2"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "cbe865ecc5056e580d740d6a74b2e646"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "af062c08e8e3d0e2926483d470ce3ac8"
  },
  {
    "url": "vue3-doc.jpg",
    "revision": "21dae5052b51835978e456e993450f4b"
  },
  {
    "url": "vue3-ts-vite.jpg",
    "revision": "4931da9a7dc6b6f08832ef3c4c1bc36e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
