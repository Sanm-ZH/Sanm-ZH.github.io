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
    "revision": "c39f6d981eacde0f27249a4d4eeedcde"
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
    "url": "assets/js/12.990a84b4.js",
    "revision": "8310f0535ef4eaa26fd0eb2a32c59a76"
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
    "url": "assets/js/16.51e9592f.js",
    "revision": "5b92b649a786ae4229fc476529829a50"
  },
  {
    "url": "assets/js/17.4e853ddf.js",
    "revision": "8a5b6852d819d5d8eda8bfbd7b9e23f7"
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
    "url": "assets/js/20.00cfc794.js",
    "revision": "4943a77f2b0626d0e0126dd93bd16646"
  },
  {
    "url": "assets/js/21.911cd16b.js",
    "revision": "547c51e8d047eb985008a648f37a36e4"
  },
  {
    "url": "assets/js/22.c3c65816.js",
    "revision": "d8e788cbca5948c0c9baf923a0950817"
  },
  {
    "url": "assets/js/23.a81d5355.js",
    "revision": "1704a2b7f369cffb1a4255f45ed5275d"
  },
  {
    "url": "assets/js/24.5860e35b.js",
    "revision": "36b9c0aa43ae4ac6f5ebabfaf4ce9095"
  },
  {
    "url": "assets/js/25.1fcf0b2b.js",
    "revision": "ad4d3ffb397c2c028409c851231d5218"
  },
  {
    "url": "assets/js/26.91ae4a5c.js",
    "revision": "24adfd7cb49e13c33dd0e4b16932ccfe"
  },
  {
    "url": "assets/js/27.c5da92e3.js",
    "revision": "419f514f921a81d27e6f54bfa3038bd2"
  },
  {
    "url": "assets/js/28.e11f2b5a.js",
    "revision": "0a8be1848e2d17039788e5007f2fffdc"
  },
  {
    "url": "assets/js/29.62cc7e35.js",
    "revision": "2e4b1d9d1dbccd44398481421b7273a6"
  },
  {
    "url": "assets/js/30.2f61f800.js",
    "revision": "3a8ab08d2bcd7e55194dfa917cc309a5"
  },
  {
    "url": "assets/js/31.fdf13ba2.js",
    "revision": "14dd15c0921d57a325e2661bcdfd4b88"
  },
  {
    "url": "assets/js/32.1c52eadd.js",
    "revision": "4a49ea36a60e922af25f4a685f9c3095"
  },
  {
    "url": "assets/js/33.c588936d.js",
    "revision": "ab70637bd7d5fa35165e9481a6639ac3"
  },
  {
    "url": "assets/js/34.add3e433.js",
    "revision": "4c0ee662e13d63e64624eac66b50ac65"
  },
  {
    "url": "assets/js/35.f7f9fd2a.js",
    "revision": "a5f3cece42577b2fe0bd91b3cdcf92de"
  },
  {
    "url": "assets/js/36.cc72c121.js",
    "revision": "9e70e3a46082a748ac25a80d076cfb93"
  },
  {
    "url": "assets/js/37.a2ce3cb0.js",
    "revision": "d915a3f9d31fd0168d0329c260d28abf"
  },
  {
    "url": "assets/js/38.4b10c147.js",
    "revision": "5b22a500dbdda0b2510ae4edee24ec47"
  },
  {
    "url": "assets/js/39.b6ac8f58.js",
    "revision": "d2015018ce8aa77478825fe17b69d2dc"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.69ed5257.js",
    "revision": "ebe7f017b79acb9c6083ed1d27972454"
  },
  {
    "url": "assets/js/41.9552633b.js",
    "revision": "e0c12ade33d21ef3f2196786cf744d08"
  },
  {
    "url": "assets/js/42.17113908.js",
    "revision": "25f6cdc8b7ade8887be095551471b88e"
  },
  {
    "url": "assets/js/43.994e1d8d.js",
    "revision": "ec64543b39601cc10acf5a745faf8ad1"
  },
  {
    "url": "assets/js/44.2bb94349.js",
    "revision": "ef5904b50fbe756d5700305fe4590fb3"
  },
  {
    "url": "assets/js/45.2fab12d4.js",
    "revision": "5d0743bf3dae91b505a48fa9aedaf036"
  },
  {
    "url": "assets/js/46.b75ba226.js",
    "revision": "e6335d6eff78a6ef639aa018e442618d"
  },
  {
    "url": "assets/js/47.3ede28f4.js",
    "revision": "f3e2445c20eb6784025ed5160b922f47"
  },
  {
    "url": "assets/js/48.0ee7c759.js",
    "revision": "ee9ebc48737e022f250ec0579a53dc4e"
  },
  {
    "url": "assets/js/49.68d1c1c8.js",
    "revision": "822ae13004e0e3f638c47591c7afd8fb"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.71ed403e.js",
    "revision": "5e413d04ae5fe325ea83100aae2d3ff1"
  },
  {
    "url": "assets/js/51.1f02f508.js",
    "revision": "5f219a7073a1e5654d064aa0c42c4892"
  },
  {
    "url": "assets/js/52.96bb282b.js",
    "revision": "eaab0b8377676f05d3fc94024624edcb"
  },
  {
    "url": "assets/js/53.d029e050.js",
    "revision": "c90835dd3d44a5179c9725e33c587b4c"
  },
  {
    "url": "assets/js/54.0814a2ae.js",
    "revision": "5c67b0e840c19fb665a877f6e1564f82"
  },
  {
    "url": "assets/js/55.2ba1f910.js",
    "revision": "ccd3eca44bfa5c497ecf08070a319570"
  },
  {
    "url": "assets/js/56.dbc04684.js",
    "revision": "0ed37f74502ea7ff50d70c909b02d914"
  },
  {
    "url": "assets/js/57.79ab38e5.js",
    "revision": "c9bbf0da2df2aedc39ba05afab608f74"
  },
  {
    "url": "assets/js/58.ef8f7e97.js",
    "revision": "eddfff2a4d81cb81fe8b6d525a923d13"
  },
  {
    "url": "assets/js/59.92d6c2b3.js",
    "revision": "8d03dd238e299705f13d0a191979f5c9"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.2211a99a.js",
    "revision": "0f670a1060b479d67a8f6466f2f89350"
  },
  {
    "url": "assets/js/61.903c1d51.js",
    "revision": "6714442e558e0f204a0f0d5902ad8e1e"
  },
  {
    "url": "assets/js/62.55ed3dee.js",
    "revision": "5c1e4a7d50295b35138cd68aa689d3f6"
  },
  {
    "url": "assets/js/63.dceafece.js",
    "revision": "087aabd026c109f2f5e6c2262c26243c"
  },
  {
    "url": "assets/js/64.77ca2572.js",
    "revision": "bab587da69efe4ae7b677c88617bc1eb"
  },
  {
    "url": "assets/js/65.9a84ae2f.js",
    "revision": "2377b74ce4fbb17d77d87b40adf8821c"
  },
  {
    "url": "assets/js/66.7be0bb87.js",
    "revision": "5dac73386f178eb00501bb39d4ccafc7"
  },
  {
    "url": "assets/js/67.9a309391.js",
    "revision": "b323cf26eae4f53113ad124349710a52"
  },
  {
    "url": "assets/js/68.f4de740c.js",
    "revision": "317747ea2d521a05ab99651913a1b8d2"
  },
  {
    "url": "assets/js/69.447c311b.js",
    "revision": "8a62938ad576df64e97800142238d9b7"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.ca1a23ed.js",
    "revision": "daebdccddf1d3436edf29a3d6e8b8488"
  },
  {
    "url": "assets/js/71.20d02219.js",
    "revision": "e9c088b52ebbce91e11b7b6bfd5522ee"
  },
  {
    "url": "assets/js/72.dfa58f91.js",
    "revision": "1ff3da643e60e3e82a57d4fcdb494483"
  },
  {
    "url": "assets/js/73.880bbb7d.js",
    "revision": "3ac68be7d823d1732f800555285a3bea"
  },
  {
    "url": "assets/js/74.32b2f36e.js",
    "revision": "2bc16c61601538e69293e8165e1f8ac3"
  },
  {
    "url": "assets/js/75.7243c619.js",
    "revision": "49fd55e60ea803339e5c9dd94f31d273"
  },
  {
    "url": "assets/js/76.3844292b.js",
    "revision": "0b2ee8bdddb2e271512ad7fdbbe433b4"
  },
  {
    "url": "assets/js/77.79b7ffa1.js",
    "revision": "0d2ec2b59f6c37dc9f146079ab260237"
  },
  {
    "url": "assets/js/78.6e10ce92.js",
    "revision": "7eec053bd8705476d8c07cf2484aebc3"
  },
  {
    "url": "assets/js/79.283454a6.js",
    "revision": "5f918a1408929606a8d016a4c55c9116"
  },
  {
    "url": "assets/js/8.bd50d723.js",
    "revision": "9f653970bc5b97fc7093283ea4650109"
  },
  {
    "url": "assets/js/80.d1b0f2ca.js",
    "revision": "d39be2184cb58a712157e04dcd4348fe"
  },
  {
    "url": "assets/js/81.9d50284c.js",
    "revision": "c1ee46f69a4dfcbe5c8dab285176995c"
  },
  {
    "url": "assets/js/82.ccbbc7f2.js",
    "revision": "22bc694961008568c927fd906bcb9f40"
  },
  {
    "url": "assets/js/83.d0860b42.js",
    "revision": "c6db1da6cc095ae4e23cbd0de20fddee"
  },
  {
    "url": "assets/js/84.bf89455e.js",
    "revision": "0dcd0eb582400ea90700860146891e63"
  },
  {
    "url": "assets/js/85.89dbd474.js",
    "revision": "9749f1f0e1be0215c036ebdc811a7770"
  },
  {
    "url": "assets/js/86.df2636d1.js",
    "revision": "965928b64424ef9052585c74a8a4c490"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.28bf10b8.js",
    "revision": "d67b2a9d3a64b65ae92468cfbb930c36"
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
    "revision": "c16a9489acca9fbc83dd7486763ba9d9"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "299b5211c7092fb9e07bf7b47f0bbad8"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "77f8125e1e5e021104bb1be0b8f4312d"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "42bedf02cfcec3283ac2cfac3b40668e"
  },
  {
    "url": "categories/index.html",
    "revision": "3848f3cc838212af04e693c6d07c5e31"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "94c1e388af1f8c86e86b2c4f402180ac"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "47b6043291ca98856ab2153818070fee"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "e10c6c755dfa8b3c7fefd5f9ab4b26c1"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "57a6ad3879287e1ca802373183171ade"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "707439199ab7ed6c2095d9f2dd32ace6"
  },
  {
    "url": "categories/other/index.html",
    "revision": "cb9fb34fd28f7f03ef4113cb49ea73e5"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "f5df041df54f907a3b3e75994b9fb7ee"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "1f2b0eebf2f8852d65cd5cd5660d8aa1"
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
    "revision": "46e36b8425a997b0870f75654ea185c3"
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
    "revision": "597a4f2c8eef440625af04121e6bb9f7"
  },
  {
    "url": "tag/App/index.html",
    "revision": "457e5162d86af72be338b625604b6076"
  },
  {
    "url": "tag/array/index.html",
    "revision": "9869a79536f3e356767c4cc950b0046d"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "b01d4d06142ac53bb1e6d1795374bd52"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "7d2a255cad1a31ae56fab829f5bcd840"
  },
  {
    "url": "tag/css/index.html",
    "revision": "8a3dc5d8e99a2be7a54cddc014bca192"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "0c023ce5180ca23addbd04c0d5e31439"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "476859f67723d7fac8f6485a8e17878f"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "55f28a13410cb94147b18a97c923f899"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "d410336ee0cb734df74f987a99ddde72"
  },
  {
    "url": "tag/git/index.html",
    "revision": "41923d3ffcd44836f38eaf923ad7fa5d"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "5ac3d8e2515888502415015f05823abc"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "4a8530ea87eae5fb52b8c813ab1246ea"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "3d8520f02b1248494e98d11f216f06ca"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "7b4b69234f7f5ed05a9ab1fd2868d642"
  },
  {
    "url": "tag/html/index.html",
    "revision": "95a64a622e4b11c84e347dcba1daf367"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "622ba2124a2e3d305d943d5393cb7984"
  },
  {
    "url": "tag/index.html",
    "revision": "a25553a7789cde202efae550bf32d48f"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "ba8743f2e75329f4af8896659854f5f6"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "aedf6e74313eb6d810302d0257c87662"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "b384832c18b486c81e0aef6f598ccc80"
  },
  {
    "url": "tag/js/index.html",
    "revision": "07dbc50b5d201c37670c131f10c3809f"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "b2e3ec154fb19bc0de7c88f739ccee89"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "b5a7b54b90a0f470521f1dcd43106361"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "b525a4db9fc089261103dd36cfce4610"
  },
  {
    "url": "tag/js/page/5/index.html",
    "revision": "b23b835fe6522cf005e6a6eb78aab861"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "785a4d9e0a1fb628756b2734dd94c7ec"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "c6571b68c39e6b8bee1ec6738c8e2f05"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "39a031d0a549a6a6e3b0686a81f8c864"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "e876b54d969385f10e9465672896003b"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "cdff40ba0ec9331a594708fd8743f7d1"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "46892d7cb9418b9fdebd7c6db62c0834"
  },
  {
    "url": "tag/project/index.html",
    "revision": "4768707aeb3b8c673f3325cd48112d3c"
  },
  {
    "url": "tag/react/index.html",
    "revision": "59cd4bf52942b60beac5dea9992d7085"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "58b1f1517d928cfdb94a835e72311276"
  },
  {
    "url": "tag/router/index.html",
    "revision": "1f8680e1a2a622215539e407abb1d35d"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "f2a9d78847a77d76dd99c7165d9a4a15"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "c197be6862aad9e9cbbe6ffadb3c20dd"
  },
  {
    "url": "tag/style/index.html",
    "revision": "fb22f03f66619e6b629c12fd8a938eb6"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "8de7bf7da68eff500ed50d1b7e093b87"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "4083680a2fa59d182a5dac8cd59348c4"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "48781f3fdce23a423d518cac5e96da28"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "62951fd6d7627e30189f09ed5cd8c466"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "7e6fea76353b28a8b18310c88b1fc191"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "fd6a5eab86a5341b280ca61f49128e57"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "9065d3aef51666cd3a5cc8b3df2fb32b"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "020154fc099348f594d52adb14fc5f63"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "a68ea5189e6c1c822ac1983f09974519"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "57ba56b600e7fa6aeeb90158f2301532"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "7f0eb7ed445347c4590c68b12b6f52da"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "22aa5a5893d3c77a1c8f2e9def3c3cea"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "f8aa25374139ba4210166ec7624c5ab4"
  },
  {
    "url": "timeline/index.html",
    "revision": "10bfa9f458a32a45a0f8512e3dbb215e"
  },
  {
    "url": "views/about/index.html",
    "revision": "c0f47053de2020c83ea0b9e3695b3379"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "0da5796f6f229633e13112aa88271226"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "4e92c74b8b66a8402f1476c80fadb6b8"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "729f022ba147fd6c540718477f92ab5f"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "91550855f8566baf4a15dd40bb1e9a4e"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "2c28fb8a4b9afbd26f26446908585036"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "6137f3997b1148a6f3a63efea7ff7015"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "36ed7ea2532002c269921e0779e32e96"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "08ffb39f6ed053f12828f930b10c0537"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "526430a15ad76a7fd726e678fc45e152"
  },
  {
    "url": "views/JavaScript/algorithm-10.html",
    "revision": "3687d9d0587a0bd7d9faec3c2d4731cd"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "2d87be5e305148ba7ca65bbf57ca0230"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "ae05492bd3dd9a8ded4016686b901b62"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "c68fceb9f53dbee3e9063b7d5235fd76"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "d43f8854d8125990c91e315af7a340f2"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "4bab02a4d2d3034df13d69c1bd68b5e2"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "c1c7f605d95ef2608132e4a657b1ca4e"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "4c8402f112a74d83b20a0bcd4d8729e8"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "4e53c01d733c261b67dc58d4250d09ba"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "3157fa9d5b8306c4a0ee8a76780da6b9"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "22bd20559055ba146cb1845f47ddcbef"
  },
  {
    "url": "views/JavaScript/download-file.html",
    "revision": "545d59a47ef1152320e20d0b38bc1c71"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "6898e5566a1de49a5e234827dbd2f2dd"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "5f0ae7fa9c7fcb72da4cceb3d6cf24f7"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "9ad5cd918d4322f7dfdfb3660b97bfa2"
  },
  {
    "url": "views/JavaScript/fetch-synopsis.html",
    "revision": "cd1edeeff9d7dfe118d9757643991beb"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "e418156d9282436299d6bfc1f656c979"
  },
  {
    "url": "views/JavaScript/front-end-written-test-100.html",
    "revision": "0443c9b8e724fac3f804ca42f8e4c527"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "f9539711333aaa7a24fa4ffe91ffd29c"
  },
  {
    "url": "views/JavaScript/html2canvas.html",
    "revision": "051c2ff6e8a87b44530a90c363e78638"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "148964c527d31bf9d7b3162bd6bb6f03"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "e53d9e5d0e91bb2eb07a3daba86ac1ce"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "9f194682ef9cd6b33d7f5be78b341f35"
  },
  {
    "url": "views/JavaScript/javascript-topic-list.html",
    "revision": "74a566ad64e5c475d8403f57c86d0e1a"
  },
  {
    "url": "views/JavaScript/js-extends.html",
    "revision": "13bc65ee5f68c1622c9e50af6404a10c"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "cd4cce20bfd3f63ea4f885f65398db8c"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "16bf02494da01c6abec79e1db8455c89"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "e29633ec3d7c1aa1743e18ae1613ba83"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "bd1a6728677c0b8a33c3fad6378da4fd"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "dc34383607bf5d20538970e9af81fe37"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "3e1c5b443f956e96b9e8371a3840459d"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "27d73916c074f2972771e1761992202d"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "f2e0deeb6bde3828f2c855b54da4dafe"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "d058160495fdf57732a490b0222cd9e3"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "9f6f6b008e612b78b6c94aa2740c5d67"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "3d22d48533674bebf3aaf1f341cb9fbe"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "1e6b4a3c72f424a1560e72b79b85bb6e"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "f0933ef873df5266e627d5a3194f7647"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "9ca221ddd922fc6aeab4f32b81c90ef8"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "cebddaeb19265a6ba2221e43a5022d06"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "7c8763ed44a699ff9f8466211e1999b8"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "406889ad0e176f7d5c4ef5b81bdf4361"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "f68f1e3cead494ae01487330c7af3bd9"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "e777e7fe2b98683a5a83133a69483fb1"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "6112e69719eba493f70a75feea231e48"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "3900d2ea92b48d3b2fa8c30a6aa95871"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "fd1d947673742f7e3cf5fa2286a3167a"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "09ae1dc504e3d74fc72f399af2cb8c50"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "2960e231b917714f0713d3036272e01c"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "8912094d5198a95b103390e415dfd031"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "124968c1e3da483894e1ed7ef3f56158"
  },
  {
    "url": "views/project/index.html",
    "revision": "a60297ee72bef893ad93e91d7218b663"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "eac0f8159c2f557fda1ff48d027c8c77"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "4bc1d8fdf5749edf5c4189e02e1076c9"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "7bd526bd2f4aa4b3b478bf47a5a75c91"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "9b3f604de9009afb6b6e1e19d4028b1b"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "b9c3e090588f1666b20f6e3fcd3c1362"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "85c7637644f126f5984ea538b01b837a"
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
