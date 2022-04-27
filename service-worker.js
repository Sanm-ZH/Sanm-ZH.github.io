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
    "revision": "3ad217c5b1402fa32e3fb558c4521c82"
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
    "url": "assets/js/12.ad505c2d.js",
    "revision": "5c8614ebcd7ea083d0d34f717178c499"
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
    "url": "assets/js/16.70959c74.js",
    "revision": "d1c876f822ce0eb7afe7d4ef0f2e2ad1"
  },
  {
    "url": "assets/js/17.613d1f0e.js",
    "revision": "f087f00d1b59f8632dcf8409b7f690e1"
  },
  {
    "url": "assets/js/18.93ec21e2.js",
    "revision": "3db852903ef3b35ea475bb0a2262ee9f"
  },
  {
    "url": "assets/js/19.b1ff4cd8.js",
    "revision": "b23f32a2ef8e1d86219444e9444688f0"
  },
  {
    "url": "assets/js/2.8da2a3cf.js",
    "revision": "6cc7ef250e62d4461602fc96fe9de15b"
  },
  {
    "url": "assets/js/20.1dce0569.js",
    "revision": "4f99e99a10d42843634f6040a4b73b0c"
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
    "url": "assets/js/23.f07ca881.js",
    "revision": "b3788de624d2922a87f5658f06651a52"
  },
  {
    "url": "assets/js/24.0a3790b7.js",
    "revision": "5d057e17f46259dc6404176516d8d939"
  },
  {
    "url": "assets/js/25.1fcf0b2b.js",
    "revision": "ad4d3ffb397c2c028409c851231d5218"
  },
  {
    "url": "assets/js/26.73a8cba0.js",
    "revision": "460d86f52d3d125abc3844c4c122fd13"
  },
  {
    "url": "assets/js/27.9a0ef5a0.js",
    "revision": "1c346dca883932d4ca13cff992831acf"
  },
  {
    "url": "assets/js/28.689e6af9.js",
    "revision": "e96f5469703edef135289c83391b796d"
  },
  {
    "url": "assets/js/29.9a0735a7.js",
    "revision": "238f6c5fbb89dc2f23e42dd73b3031a9"
  },
  {
    "url": "assets/js/30.3621bbdd.js",
    "revision": "288e1b2162f5a5595744734df2b07d23"
  },
  {
    "url": "assets/js/31.7ca42690.js",
    "revision": "a869840c42412fdb23adb4ac895dc764"
  },
  {
    "url": "assets/js/32.a030070e.js",
    "revision": "5d879c5d0ded102600b5ae39f5452d70"
  },
  {
    "url": "assets/js/33.c09a7c80.js",
    "revision": "8056d14a43058952eed74c186504e2d1"
  },
  {
    "url": "assets/js/34.358fe83e.js",
    "revision": "0d35fcffef806ba74efa847b541f177b"
  },
  {
    "url": "assets/js/35.8086e334.js",
    "revision": "a81e8fd5d6439fc6005c80838f84c371"
  },
  {
    "url": "assets/js/36.cf71a789.js",
    "revision": "6d71d1d29368a16c73b5bc683e86ca81"
  },
  {
    "url": "assets/js/37.231f76e3.js",
    "revision": "2d3bba867d0c7fe2459df418e0297774"
  },
  {
    "url": "assets/js/38.bff3f7d5.js",
    "revision": "1cf9735fa75c0020a638504784b7d729"
  },
  {
    "url": "assets/js/39.6d8c000f.js",
    "revision": "8f176434d78dc84c0015d0d68266c137"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.29f85752.js",
    "revision": "ad033c5f6107be70de83965440ebb648"
  },
  {
    "url": "assets/js/41.dbf8c539.js",
    "revision": "19d6c8efced482dd006b97ea3a33677f"
  },
  {
    "url": "assets/js/42.013732ff.js",
    "revision": "f210f56df4d4135ac0e81c90b69e89c5"
  },
  {
    "url": "assets/js/43.524b1a40.js",
    "revision": "3e4029e6bc3b286df89277031bd3260d"
  },
  {
    "url": "assets/js/44.7dc0e3cc.js",
    "revision": "e1f98acb328093881ac936183fa5c3cc"
  },
  {
    "url": "assets/js/45.6de9b2ba.js",
    "revision": "f7d96792a4f9d175b05c1fb9888b8987"
  },
  {
    "url": "assets/js/46.9a0140d2.js",
    "revision": "1839749f7c83245142a29280605d2e13"
  },
  {
    "url": "assets/js/47.63c72dba.js",
    "revision": "815c38a870dd32b6703bb746d1d9e4bd"
  },
  {
    "url": "assets/js/48.00427ea5.js",
    "revision": "2a1c15675072b91d59dd7284e27f3ced"
  },
  {
    "url": "assets/js/49.5a9e6d49.js",
    "revision": "26a7c3b4155cc888b86096b761d747c9"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.f5a155db.js",
    "revision": "4782cd42a92cbd3f8cd51848346065bb"
  },
  {
    "url": "assets/js/51.6b43ab3d.js",
    "revision": "916719c063b4b47a96f20dbe69a4250a"
  },
  {
    "url": "assets/js/52.655f476b.js",
    "revision": "7cbde1863ddf835d0642d3ee73f73b39"
  },
  {
    "url": "assets/js/53.31fb2f6b.js",
    "revision": "e6e749032b69188163ab45f8d27d9482"
  },
  {
    "url": "assets/js/54.8aa6afcc.js",
    "revision": "32ae9f3f4a7a0fecaa77f5bc6837b910"
  },
  {
    "url": "assets/js/55.acfaab93.js",
    "revision": "2b69f2a43c5d54e5ef0728abb0818c85"
  },
  {
    "url": "assets/js/56.f8b16c98.js",
    "revision": "8f57b1e74399dcd5c40aa7ac8ccd5717"
  },
  {
    "url": "assets/js/57.6c3c244a.js",
    "revision": "b3a32203578ae38b78c077e80d6b358b"
  },
  {
    "url": "assets/js/58.05ff2a11.js",
    "revision": "4fa31145b483dcbea70fa075b8c0c0e3"
  },
  {
    "url": "assets/js/59.1c548125.js",
    "revision": "87eeb32c1bc4a6b8521658ce31b0379d"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.1b4cae52.js",
    "revision": "f70554ab9e6354127afaa891b45ceb2f"
  },
  {
    "url": "assets/js/61.f21cd978.js",
    "revision": "4bbc8b4681a7ee2a6538db0290af116f"
  },
  {
    "url": "assets/js/62.1616ae12.js",
    "revision": "910a9cf79a1ea9b52d59adb71dafc296"
  },
  {
    "url": "assets/js/63.3d4bc397.js",
    "revision": "5d56ef71a82b9aa4a203f3a52a162018"
  },
  {
    "url": "assets/js/64.b2e0f0a9.js",
    "revision": "72672738b1073e66d182bec4bf928ddb"
  },
  {
    "url": "assets/js/65.cb1828d2.js",
    "revision": "accfe2a114a9ad7b99e92ec51bc7a402"
  },
  {
    "url": "assets/js/66.158e8b77.js",
    "revision": "5d25fa40b4fecc6e6497ec62309f7730"
  },
  {
    "url": "assets/js/67.b6a9738a.js",
    "revision": "9080ca17871604ecab10ee36709f2dae"
  },
  {
    "url": "assets/js/68.db4fa636.js",
    "revision": "754e11aaeed994b73713191d8e188caf"
  },
  {
    "url": "assets/js/69.a0e96c36.js",
    "revision": "7b5ed38c9a9740270d85d73364d74f0c"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.7a70890c.js",
    "revision": "be1d3806863b0cf5d2eaa81bb75e41e1"
  },
  {
    "url": "assets/js/71.1eb838a0.js",
    "revision": "3402706f5580477fd0c0869e070c1bcc"
  },
  {
    "url": "assets/js/72.975fef77.js",
    "revision": "ad0ff414cc8af0a2a2b224ccf123b01c"
  },
  {
    "url": "assets/js/73.f15e2cd5.js",
    "revision": "b783eec97746aeb9cc0f4ac5639aee79"
  },
  {
    "url": "assets/js/74.2187f1c7.js",
    "revision": "1d598d4a1782af43c11029d9e925fafc"
  },
  {
    "url": "assets/js/75.6f93d183.js",
    "revision": "42496cd0cf619ed526c179fbb61242df"
  },
  {
    "url": "assets/js/76.edb25f89.js",
    "revision": "bf4900dafd0fc62a29a8a2d78f9aba7a"
  },
  {
    "url": "assets/js/77.8a822b93.js",
    "revision": "ea5cf59c75c365a8070df5db73ec7404"
  },
  {
    "url": "assets/js/78.21a78707.js",
    "revision": "4a7e2ea0aecd2424ad24fb9c9e7f9d61"
  },
  {
    "url": "assets/js/79.5950c557.js",
    "revision": "05ba6d67caa7255d81a9420c160bf17d"
  },
  {
    "url": "assets/js/8.d0a11db5.js",
    "revision": "7d37d11592a9ea48a943d72bd0dbb6e1"
  },
  {
    "url": "assets/js/80.4c776944.js",
    "revision": "19c8bea23146d4b02c3ea16f905f2ba0"
  },
  {
    "url": "assets/js/81.051cd224.js",
    "revision": "d31ca52703ad4df60d249cdb0ec13922"
  },
  {
    "url": "assets/js/82.e279afbb.js",
    "revision": "0dd8b3088fbc5838d33de6941b8a64a6"
  },
  {
    "url": "assets/js/83.6a6b530b.js",
    "revision": "20a9a9db035a8ae35b4b5542a299dd6d"
  },
  {
    "url": "assets/js/84.8fbf6eb9.js",
    "revision": "12f1945f1fb0b856a55bcea68f219b38"
  },
  {
    "url": "assets/js/85.d948f4b4.js",
    "revision": "fa23f3eb52d1e220da3bb7e5350abef1"
  },
  {
    "url": "assets/js/86.8fefd9f7.js",
    "revision": "b7078a92813fb436b6c717240e9b7ef7"
  },
  {
    "url": "assets/js/87.998b9848.js",
    "revision": "1dc5101c7e67e867861de53d14dd8d6b"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.3ed474de.js",
    "revision": "579bce6ee75fb2837e0fee9c8dc5ede0"
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
    "revision": "b72823631686b6665a0e54a036abee87"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "ba4e5162cb0ac275f698d452ebc995de"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "6e72fe3a2f37aefb5a41deba64e6d015"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "69564aa38485405c000917fe2d2a1841"
  },
  {
    "url": "categories/index.html",
    "revision": "ba0260d52cfce4e55fbefa0fb3e314b2"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "2a2d392acc7829d3aa10a7ea10fc45c4"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "e7f750725a017d4fc2724263559202f6"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "9f13f6e3d3070a6ec3f6c39d53ff8e72"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "17e156beb9c45e32dc6ac590c78f9c0d"
  },
  {
    "url": "categories/JavaScript/page/5/index.html",
    "revision": "d3a82268bf33f4cc5d34bf10ac71915a"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "940974a5afac7d6375952f1a1824409e"
  },
  {
    "url": "categories/other/index.html",
    "revision": "c8650dad2646939f736510121e706a8a"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "2298e058fdac98a4e4625936e8b8013f"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "1f5b7b35b532de1bc84165890382e82c"
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
    "revision": "8758bb74fcc2223172a0678db4def34b"
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
    "revision": "9a99079d499f536b281a5ced63604770"
  },
  {
    "url": "tag/App/index.html",
    "revision": "caf1ac0bc8efffd41bcbee62e2b32011"
  },
  {
    "url": "tag/array/index.html",
    "revision": "765677839a2c677d8fd18b716cde1826"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "8622a343aaf04292b8390e6dabfcf954"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "5d6e14083f7a9b21c64ca4fc95096cb1"
  },
  {
    "url": "tag/css/index.html",
    "revision": "2694aee8bd8281c46838e05e82fc8009"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "d0365517ae4875cbd7c95687c2fd9815"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "fa43d48f9d71d60d2b0ed61fd2d01b94"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "03f4e989f26b3f1112c59c95d847c602"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "6ed2758d963317d0fd500cceb9fbcf75"
  },
  {
    "url": "tag/git/index.html",
    "revision": "543924da559bf24919826dd6ca0cdf8a"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "51f55a15843a6f82fa4e6e9b1d136983"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "8adbcec827b7afd98e1635034b1abb80"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "8b58e255dadce0b214a2fe28f44db7e6"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "9d274f3907a68fafe4eb0148dfb051f3"
  },
  {
    "url": "tag/html/index.html",
    "revision": "e1367d640f63011d86bed804d6c1c827"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "3151db106faffa567ccc238cda1b0530"
  },
  {
    "url": "tag/index.html",
    "revision": "d244ee38eb3f7c1d41e83beaf10662d9"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "7e7cf9d03afef93fc2de883b4d6f93ff"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "13e99f0da45350bd0e2513b7989924b2"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "16f5dedc83511ec66b6f8477fdaab54e"
  },
  {
    "url": "tag/js/index.html",
    "revision": "9dc552c3846b4736c5e6499d39767a0a"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "62b172ea07b292f894023ba236d2714a"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "ffc30fc1120ef19ce6b6d6d25a364283"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "b42686d151dc3280051adc2c487ce4a8"
  },
  {
    "url": "tag/js/page/5/index.html",
    "revision": "c7d6129651162295ceee201591a9f6c0"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "0b23247f96ade12c14ede6bb15e91324"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "d0307830063e72e903da3c1246eedba0"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "82f595551fa711674eec3807b769111f"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "2a9b78a2272669411cb2d866450efde9"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "7549af3b1008ec0a5d3a78439c7b418c"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "5025b90472c315d600c20e1e50fc97c8"
  },
  {
    "url": "tag/project/index.html",
    "revision": "b331ee29bd2faf6b8511b9255c12f138"
  },
  {
    "url": "tag/react/index.html",
    "revision": "fa17205329c6f1ef2ea854e796a930ae"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "c79eb1c02a6101fabb7447346b06d2ae"
  },
  {
    "url": "tag/router/index.html",
    "revision": "43f83e5deea20024c2ba7b607fe61647"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "8cb2e634f014643534cffb4286f479ea"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "b30b0a1fa24ca6cf19afd9c483da9441"
  },
  {
    "url": "tag/style/index.html",
    "revision": "9d2f6783f3c9cc1af8aa00a246b4e839"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "6af7c2f84b7405cad6765be5114876bc"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "5ce2234c498ac9d2b4545cc6483b7b92"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "749ec6220f74c6f8bf9cf3b980c9a0f8"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "de9f9c1bdc2bce1dbf3bac0e43df586e"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "e231eabb9c295203c5b5740ac4983508"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "1ef8ad0ff61c85e2f9c96426af2f8c00"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "6343280c965c54487124b255f11b2370"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "976d96b91fcd2e95bb0f3241d350af4d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "0133f0bb09d8019482d7acf0e7cef507"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "5fdb8484e0fd65a6913b6a3d48d66fb8"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "9614c8382c63c5122d03b3b57a5b8321"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "ebf13c0505884fc146b96e6cfe879ca7"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "6eec6f1344925e6efd3182418f3c7f51"
  },
  {
    "url": "timeline/index.html",
    "revision": "6a6b284e6e54e6636dffab31740751bb"
  },
  {
    "url": "views/about/index.html",
    "revision": "f4b8f5eee40c752308ed60f1cf83e6f1"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "323efd998c2d4dbc3304b869e660ebfd"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "b97cae6ad9e952a140725e259a12f120"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "1d4a4bc97422436add2b0aee7092d993"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "5770f9dd7e4d5e1501e6207ac8695680"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "b18260e691ba1e2c343f33b15a239c90"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "ab86e5a7f2e71428ca298a04f615f190"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "dc47d0cbe8c971fce9779ff8c93529f4"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "75af898430f2e91d4cdeddd7a7f7fe6f"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "1b289b3e437094eb39976b1fde189f3b"
  },
  {
    "url": "views/JavaScript/algorithm-10.html",
    "revision": "35b6a0c18897e9260b4eb4746ba14e7b"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "4eb029cb7c9ef10ca67aa5c24439835c"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "0415b3e4df2e4dbd3ceb9c67892ba33b"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "73fee15243c4da63c717792de63c84d3"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "556725f9aceca4e29ce61c4ccbc56803"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "ff94b161860e854150b76433c0640ff9"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "6ad8765af1d89f2a952f3eac25c95400"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "d7dacf2d50036ac1b8bc5f0ed7fc4210"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "9351d1d303625b424ee56e5b5674763b"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "25be0d6358b006709a91cb2273ff2231"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "0f7afde9104837758c6442275dc88fcf"
  },
  {
    "url": "views/JavaScript/download-file.html",
    "revision": "bfa5e3d7a9ea2c8c9eb7520c6000dc35"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "2a403380f52b3c16cbdb40e5072499cb"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "73c221eb9d665f7907a4ec5ec8fd11a7"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "0b798fe003dcdb83f76de6e283ba6e6d"
  },
  {
    "url": "views/JavaScript/fetch-synopsis.html",
    "revision": "00f2176b469ce71f002d1b84d964ec10"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "33f4d7ab0b3f0032840400e4cfa82b81"
  },
  {
    "url": "views/JavaScript/front-end-written-test-100.html",
    "revision": "b2eabf8b0ddb38d79e4d72e96d48af92"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "3710c6802e83e9501d9c97df4c3f6bed"
  },
  {
    "url": "views/JavaScript/html2canvas.html",
    "revision": "b3955a3a976718dd3e582ab6912353db"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "1d4ffad6457b434a2dd0a6aa3857f38a"
  },
  {
    "url": "views/JavaScript/initerview-question-list.html",
    "revision": "3a5c8f0c81f8bcaec08b6602dfcc3ecf"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "6f96992c57fd9e057c20fe9efb143a3d"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "2267fa8412e5e4127158fe91726c87d8"
  },
  {
    "url": "views/JavaScript/javascript-topic-list.html",
    "revision": "8f8d3fb74b29300021bbcb67a6740ffe"
  },
  {
    "url": "views/JavaScript/js-extends.html",
    "revision": "3ff0f79002e108afc79c8c6a3f6ef85b"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "f4acbd8fcd4084a95b43ce90e9b2db87"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "442197e7fee0a5bc21dc8a9d6d272b7c"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "6086e6fc04d14da4e15fe2b29a7d75e9"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "8b5d56452a66aa972bb9cdf48530680e"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "c3e9fd1bc39a49ca440bc73ef7254b5f"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "019cdc2bd1f567cb8ce31e8c943b1d3e"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "852b583a4eebc8981f0f3d38fc345afa"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "7fe4eccf69385b21af85ab851d8aa396"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "b119c51d29f8c68586b3c1670a796b28"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "2a8d817adcfef63e0e967bd14ebcdcc8"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "01f41cbeceebd45f08005e312bc905f7"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "6a71c92b156903e7dcfdac04352f73ac"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "969fd48a54ab59d2790e23c45cb2aa46"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "447f511ac520eb4bf5ce25fdda025d79"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "baaa138a5a83b9a220301fe1b2fafa3a"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "c170768b1137fe320a84e84462c21110"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "7d3aa15d9b66f4fc6f9643bc4d2a3537"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "c2312ec8dc216bc1b089be607dd1b00a"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "451f103e3cb6b4c09dca5f2071267d43"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "ca2e0a0890f3ae532d0cd3780b0fb40d"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "ed86e4a9c9537f549d2f07ad9dfa00c2"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "9a73467bfa6fa7c155cceda6f15dbde6"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "b841a8ed717ea6e3fa780c40c4431db2"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "10fc2114801267d69f3fe1e54e226cb3"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "5bf9777d4c3aa669f7326446c517711e"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "8b69f5be604219f72dd68b19c31ffab6"
  },
  {
    "url": "views/project/index.html",
    "revision": "964637fdb0bc780e60b67f11b3ecb421"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "c290ce7da671edc5e60d96ffc5e55c62"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "49a85bfb4e2c26f4da8e8a14f389dcd0"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "be030e97a60e523576e5607f0e27ccb6"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "4bce3a9e6fad59cc3341e4c8618972dc"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "1b20258e758a25e6b5a4af2b27ff7382"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "8d5eabaaf227920d73b8d18cc0c27763"
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
