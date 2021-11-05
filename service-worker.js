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
    "revision": "e2609c8046fd908ae20e79637f1304d4"
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
    "url": "assets/js/17.7acb9b2a.js",
    "revision": "315a1d6bdcfa7feff5137b05577f6668"
  },
  {
    "url": "assets/js/18.93ec21e2.js",
    "revision": "3db852903ef3b35ea475bb0a2262ee9f"
  },
  {
    "url": "assets/js/19.ef423df0.js",
    "revision": "1ee327d07f187227d1c0b9a6a397b2b7"
  },
  {
    "url": "assets/js/2.8da2a3cf.js",
    "revision": "6cc7ef250e62d4461602fc96fe9de15b"
  },
  {
    "url": "assets/js/20.00cfc794.js",
    "revision": "4943a77f2b0626d0e0126dd93bd16646"
  },
  {
    "url": "assets/js/21.123eea38.js",
    "revision": "be8b59f9486c9fe9e232c4b2d3c1d4af"
  },
  {
    "url": "assets/js/22.54bfc20b.js",
    "revision": "ff2e286d7d2635628546d64f06344718"
  },
  {
    "url": "assets/js/23.13eb0f82.js",
    "revision": "1e569c3e914ba9e596d8aa7bae47516b"
  },
  {
    "url": "assets/js/24.f0becd98.js",
    "revision": "0ef3a3efbfc4113045a5a2d5c553b861"
  },
  {
    "url": "assets/js/25.8cafd27d.js",
    "revision": "681bd113e7e102e29a0e5070e5ee4e48"
  },
  {
    "url": "assets/js/26.ab475016.js",
    "revision": "df9185acd1f90b6452dd65924ae2f4c5"
  },
  {
    "url": "assets/js/27.6457e7eb.js",
    "revision": "aab6daa5b2e53a10b1347e7739671a1a"
  },
  {
    "url": "assets/js/28.33c30e64.js",
    "revision": "c336a90fd198a20e56046b04abda1fbd"
  },
  {
    "url": "assets/js/29.f7673169.js",
    "revision": "e38240fca4c7140265777e9c30b03a88"
  },
  {
    "url": "assets/js/30.ea63b391.js",
    "revision": "6790c13c050be2c841970a7eb46f48f8"
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
    "url": "assets/js/34.d54e72dc.js",
    "revision": "a6586a717cfff4434be924ce872e90a5"
  },
  {
    "url": "assets/js/35.ed27a9f9.js",
    "revision": "40829664e66606dcf986f8a085d3e9fa"
  },
  {
    "url": "assets/js/36.02a78da4.js",
    "revision": "37e97a7aff8f807f6b05771c15ea35fe"
  },
  {
    "url": "assets/js/37.efa87194.js",
    "revision": "ffe78f40834987698d5c0634d9e75ff3"
  },
  {
    "url": "assets/js/38.c5336f5b.js",
    "revision": "76cd59ef60e02cf1f37d12ed237dd006"
  },
  {
    "url": "assets/js/39.a060227a.js",
    "revision": "213a2fb3619221048f34e6b8463c00db"
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
    "url": "assets/js/41.c82f9660.js",
    "revision": "5f1d022dac520c1c26fc6cf86299a7fc"
  },
  {
    "url": "assets/js/42.823f871e.js",
    "revision": "050de3efec1f1b054bddafe866e2941c"
  },
  {
    "url": "assets/js/43.1c2c3753.js",
    "revision": "b179b4c272b2edec463b29716ef05fb4"
  },
  {
    "url": "assets/js/44.ed9b4dbe.js",
    "revision": "ffc4490ded44fea1cf184741e85492b7"
  },
  {
    "url": "assets/js/45.e13f346e.js",
    "revision": "9d2e34badb8c5248391336ee189d669b"
  },
  {
    "url": "assets/js/46.b832d7de.js",
    "revision": "4edc5b9efba8132508e8870724fafc6b"
  },
  {
    "url": "assets/js/47.783924d4.js",
    "revision": "d1db12d0c589ef7d6f46c1505b54df64"
  },
  {
    "url": "assets/js/48.91853677.js",
    "revision": "df6cc0482bc700421b0bc61bdc866045"
  },
  {
    "url": "assets/js/49.707364da.js",
    "revision": "53123c9098a29e62eea077147b4ad297"
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
    "url": "assets/js/52.f367d620.js",
    "revision": "5d882c0ec4adcc1531d35d2befb4f8ba"
  },
  {
    "url": "assets/js/53.83cce2f0.js",
    "revision": "4f59d31ce2b559bb7a53e5759b955284"
  },
  {
    "url": "assets/js/54.8a8669f2.js",
    "revision": "e02eafc6053eae3e13d538783d580206"
  },
  {
    "url": "assets/js/55.a9155b81.js",
    "revision": "03b31ca94ba200213d60d3e9373b4f26"
  },
  {
    "url": "assets/js/56.a9466eb0.js",
    "revision": "ac15afa200ace98b2dcf86a99afcbd11"
  },
  {
    "url": "assets/js/57.f71fdf1a.js",
    "revision": "ee178b73485126bd6f1e78fd112a81d5"
  },
  {
    "url": "assets/js/58.c4bd77dd.js",
    "revision": "2917115a38ea922d46172a1497812526"
  },
  {
    "url": "assets/js/59.2f242a27.js",
    "revision": "edff8ad48af786f58354421a1ce3d639"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.697f8b82.js",
    "revision": "28c5ce10a2560258285df1a9fda5eb92"
  },
  {
    "url": "assets/js/61.c40d6dc6.js",
    "revision": "2ff3a5f8c64fddeb6654d6a2b1a4ba95"
  },
  {
    "url": "assets/js/62.bc3666bf.js",
    "revision": "c6c461269d0ee934b4acc6f7f0a1ea48"
  },
  {
    "url": "assets/js/63.bdde678d.js",
    "revision": "c0bfb0b83c077c0dba30b0affa31743c"
  },
  {
    "url": "assets/js/64.d3a220d4.js",
    "revision": "936763e544374c9eac9f1b1b958258ca"
  },
  {
    "url": "assets/js/65.9299525b.js",
    "revision": "20335ba1a188456b0a6d2a058f958ccf"
  },
  {
    "url": "assets/js/66.ae3d4d7e.js",
    "revision": "35ab4e1ba28725d5a0fa7e511314a8d6"
  },
  {
    "url": "assets/js/67.4ad053c5.js",
    "revision": "e2d27bbfcd6157e0f5b7a52b7bd248bb"
  },
  {
    "url": "assets/js/68.8b41d733.js",
    "revision": "8c433af43ae20c058cb4169d5bd97579"
  },
  {
    "url": "assets/js/69.5ac4fa72.js",
    "revision": "857948b57af781d77bd755d60a6618b3"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.6987cf19.js",
    "revision": "efbd3e86dcd515b74b6e01c04a639afc"
  },
  {
    "url": "assets/js/71.31911f88.js",
    "revision": "4842749480885beb9c5dc147987d77a0"
  },
  {
    "url": "assets/js/72.384c6613.js",
    "revision": "72f92ad2216f192ba6b4d49fc91924d7"
  },
  {
    "url": "assets/js/73.87cde36c.js",
    "revision": "6415ba85ae83214dc63187ae5538efd9"
  },
  {
    "url": "assets/js/74.1c122308.js",
    "revision": "0307bb7862b0afec5826481e4be038f0"
  },
  {
    "url": "assets/js/75.c8310472.js",
    "revision": "306db5df4e469d7c385f7c71a8d54589"
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
    "url": "assets/js/8.bd50d723.js",
    "revision": "9f653970bc5b97fc7093283ea4650109"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.7e049b6c.js",
    "revision": "277e278f5740af1447a63781de012f71"
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
    "revision": "8a28c93af64f721714b2cd01c1c6b3d9"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "146e6fb602b841043ff0d629d4dca564"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "7a1f4619a14d433cb0b2f60a9e80ec35"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "6f52a2e364c4a5aced758b353dfceca4"
  },
  {
    "url": "categories/index.html",
    "revision": "ed1cbf95bfe2d3e8cd585c787a3097c8"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "14d1cfae18c3977a14b3339884a92516"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "57ed1390bc8d3b06e49d5452e365bddc"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "47aee98a677be42f4a895a1bac8bf2d0"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "304bf7c2859243a52a22ac913f80204e"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "f8040bbac212a0bfa9550b13111cf49b"
  },
  {
    "url": "categories/other/index.html",
    "revision": "8cd8d7e1433156333b51f50114b875bf"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "ce344a18a2b9531b937af40dba0353f9"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "9add7022fe0c07111b6195d0eea310ef"
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
    "revision": "becd5e621559185bdc39ccbc4354254e"
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
    "revision": "a0bde34a31097ac0ba180b7f8ea279f9"
  },
  {
    "url": "tag/App/index.html",
    "revision": "3979f3083627a1580fe01c327551d7c2"
  },
  {
    "url": "tag/array/index.html",
    "revision": "2ad4727540f12d01ffb8d2315c834824"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "c9d439847c308e6d405786b7a83f571e"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "d4152c8124fd67dfe558bbf946846020"
  },
  {
    "url": "tag/css/index.html",
    "revision": "7c5b30ff62008af1b49c1decceec2482"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "265baf40963c895a743b98f7d39b8fd3"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "4c33c0dbc08a13b8e5141bd6d084411f"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "d91a511dd23e06505471bc72998c4fbe"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "b8434ccbc2b1646258ac8b72b3f5efb2"
  },
  {
    "url": "tag/git/index.html",
    "revision": "91481d7543299ceacdc582389917b5df"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "ac287bb9074ca40680ddf1c1e52e15fa"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "7ba3c6c031bbf31ddfcba4ef3bc4eadd"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "7b9c9e8291c2b82732a72c8d6dce9f47"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "5f4ea6fd95a62485fb4bc09171280dbb"
  },
  {
    "url": "tag/html/index.html",
    "revision": "56829a4f190976ea336b507365212270"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "4090189b801de7fd49d22334bccb7dcb"
  },
  {
    "url": "tag/index.html",
    "revision": "370862fd7ebcc967b97f7022f4a2818c"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "e1a861f88e1cdbefc78c019a8d050e2b"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "7b1e81fda706be33f8b4d3d80eca4bae"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "db1c1393333910c584a7ef2a7fc4dee5"
  },
  {
    "url": "tag/js/index.html",
    "revision": "848d8e41fec254a99b90b6b72891b2bc"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "f4e187ddeb4272bb633d4b3f879ab6d8"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "86437414fc9ce7db9889f055d9ee0259"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "3cd7c07071c30130c27377d9de12fcda"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "476a9322bfb7b3d0edb058c56671e8dd"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "88bd2a86a593a7496f7a51e79b5f7289"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "6bb7c7c35ab1e552ff9f1146e8493db1"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "1a110e0e76e07b770f6e371639694e55"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "8a7507ef730cfb88743745063cdeed6c"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "a23a7564b7d16b6431078ded0adb4d09"
  },
  {
    "url": "tag/project/index.html",
    "revision": "c10cadbb3fc9d0966635d6e593769597"
  },
  {
    "url": "tag/react/index.html",
    "revision": "30780553016ef25c758143b304db0ff1"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "ed3383d1ada0094d7b6f322148bc2802"
  },
  {
    "url": "tag/router/index.html",
    "revision": "6d397ec5561629915846de0665987b12"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "7fa33dbc2aaf90ffd74773b6b52e074f"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "a8f1222925fcf12c162d54926371047b"
  },
  {
    "url": "tag/style/index.html",
    "revision": "db97498214f5bf957f6e2e5a7e045fe8"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "c3e1af89c5b4b9f0a467561cce86400e"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "047bd41af1a36db00d85a1b016e215f7"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "14ec3350f5ca3b21aa10b6c811814148"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "f2d2909ea858dacf513fa2a383dc1ddd"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "38f5a16de6b0968f27ecc23d02187503"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "814e35d22657f08f9bdf61148a6fce19"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "aa780e6a19cdcda0af8986d26ebfe012"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "eafd27fbcdc48676ea0100dbe316b3d4"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f41cac5741ffa0fe7ba9d29099551935"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "2ab564cfb0af5ba3bb3ff59309df4eb9"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "0c0c862fa33bd1ce730aa395dac360c3"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "06280d103dceef99dbbcb2391354f3f9"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "8929593fd5186c23ccbacc2406419055"
  },
  {
    "url": "timeline/index.html",
    "revision": "8971973070d3c279403c0ae71a0291df"
  },
  {
    "url": "views/about/index.html",
    "revision": "20e1bf183dd0a54e3243f9c478175942"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "94bc25c4e1d37ee1dca0f6dd4acf7f5c"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "547c16af4ac32771d964eac44d6bffbc"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "20e05241355921a2cf7c72f027f308b0"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "a167d8040a72a3d75e715dd54bf2cd60"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "b231768b5da270dae71aadf5cab8c90c"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "9628fe0800c02c629204958866a646c0"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "f4e0ead8cfd82433166efcb9c3a57777"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "9850498273d657202ee489c593fed4c6"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "c5deef29d8d6bf022be0d4d6a42badd4"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "3ba7b653dd25eafd8367398f4fdf1550"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "879f8b3d05084e3b9584f81c53b7672a"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "29e4b02678e1252819ced3ec123bf188"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "41f51e3f22ad505357902c357b706317"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "d3ca52c7fbc59b7fb093285d7042b9ab"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "899a017bfda5f2e5bfb82046f16e90dd"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "0089cda525dbedf3ab7030dc33098c3e"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "fb65710201db0750cb7f229fe7eb0814"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "9e9476d53b0313fbd0fa479f626ae8d8"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "18241c33fe029be5f97c95e4e6e4f66e"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "908010c80b38f85b04f30ec2cf6aa458"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "234e33aa10e81af84f6078fdb4ad17cb"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "454d0e50fcf8c9b08f3810f68078eeb5"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "6479adb60722e6caa48fe96520ae70a8"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "8b5e40ff235040f40f0d0aa33b9c8302"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "8d5e39214e6d548a394462a376dd6918"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "b156eee5554977099546e718c9c1bc49"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "7e303876d8fc1011ef7b9dd0815e5cca"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "f8a8ec1a08a8043182ec371375328d65"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "577b35ba2fc376dddfc84ab3fc63a0e4"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "ac9148964b6e293e62bfe9598c06b040"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "7398d9dbd173ec787418c603aefac609"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "a24c0b7b2b8e7bfa1deaf8f1a52c354e"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "6fd23d3b134069a8cf8ca4130785577c"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "234d622aa13099447bd598013e2d4840"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "53a076f3937214c544c42d293f0aed48"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "a3658f85470da4bbc492896dc381d61c"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "94a7382720c90e3fc0132d8ceb8ac2ae"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "f6b4eb82dbca6c698a57ba6b219d1352"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "37dba08a82b5bb4eb6cbfbadb0094b85"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "29af54193917d0c5f5db7a8633049bf6"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "01b416f8d0d834e9c0c7195986d6a201"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "3ee5e315b6b9afaf7857de7cb785a562"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "64004e6728175b62456ad67eb8b209c9"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "1538443b04ce1c2c97cb48aace55ba65"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "afb2cb820fc7e933fa50c0c24274e399"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "353255a223cfff79c58f9714581a1364"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "d5275b390723f8f374b3895def37bdd2"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "764fb41a4454af04f3250b8558c831c0"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "b570404f15fca7934d268a113a78f3e7"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "8947ae4f5337a4d4501634713263c92a"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "c36f735d820fe2e3994f6061647d84e0"
  },
  {
    "url": "views/project/index.html",
    "revision": "872116d7ef478ff7ed460f7142d017b3"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "adfa571ebc8c1503e662cd36a6b8c704"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "b4588ada140eac30bf90763d4ebbe94c"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "e49cfa1953893376ea9284954cf67f2e"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "c6e3efe6182358fb99e8e1ac25a5964f"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "ce9b502a5c9d7498fbc88272cd717ab2"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "be11d05c0e626bd722216d9754b11552"
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
