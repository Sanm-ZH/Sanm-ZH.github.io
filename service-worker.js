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
    "revision": "f231a7aee0c078104fafe8fa634d7517"
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
    "url": "assets/js/12.625d34a1.js",
    "revision": "7fb151113cae0a41e95a2625b2e45957"
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
    "url": "assets/js/16.11d95844.js",
    "revision": "e2950379279d5b70ba7417fcdd1303f4"
  },
  {
    "url": "assets/js/17.f6b7c033.js",
    "revision": "3ec9dfabebd89f579b87368c4666c642"
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
    "url": "assets/js/21.8e0e791c.js",
    "revision": "2d5e83b052331fc8e7963ccebbf11768"
  },
  {
    "url": "assets/js/22.87ed77d0.js",
    "revision": "fc9a1bc72ae294605a23ff595327a495"
  },
  {
    "url": "assets/js/23.13eb0f82.js",
    "revision": "1e569c3e914ba9e596d8aa7bae47516b"
  },
  {
    "url": "assets/js/24.1ea7bb6c.js",
    "revision": "c22cd6ce0ae04d13ff5eff75a336024a"
  },
  {
    "url": "assets/js/25.19b1ef05.js",
    "revision": "0209426a70bcfabf81c4e2a8d93deb97"
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
    "url": "assets/js/29.d12cc4bf.js",
    "revision": "426e91d65ca5265ed0600f5dae1dc874"
  },
  {
    "url": "assets/js/30.b8c0e7b4.js",
    "revision": "e019b89a380484d38e8afe4b925b5c19"
  },
  {
    "url": "assets/js/31.4135af1e.js",
    "revision": "4fe2bafb57b060f079a3f87d6f492fe4"
  },
  {
    "url": "assets/js/32.00af4855.js",
    "revision": "5c06b907940801121aeb688675b92903"
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
    "url": "assets/js/36.39f2053a.js",
    "revision": "b3faa92a0e2904e064f1dd06d434cf2a"
  },
  {
    "url": "assets/js/37.1c15e92e.js",
    "revision": "d7d594afde3ce521f3276d9c3a11d81a"
  },
  {
    "url": "assets/js/38.c5336f5b.js",
    "revision": "76cd59ef60e02cf1f37d12ed237dd006"
  },
  {
    "url": "assets/js/39.d07e3202.js",
    "revision": "4a1a468c1577100c18eaafdcd9e38855"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.717f94cf.js",
    "revision": "1465275e804a8619b9e7ec32181afe4a"
  },
  {
    "url": "assets/js/41.9c96dff1.js",
    "revision": "cec1b9c7b23a3e29ef2f3ff8cc2375f8"
  },
  {
    "url": "assets/js/42.823f871e.js",
    "revision": "050de3efec1f1b054bddafe866e2941c"
  },
  {
    "url": "assets/js/43.360dbd1b.js",
    "revision": "b50b67323c4c81fd1f1af28d944d7e29"
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
    "url": "assets/js/47.2bf4a9ae.js",
    "revision": "fd9c666c7f91c4cc089ac26771e561d9"
  },
  {
    "url": "assets/js/48.8771233b.js",
    "revision": "ecceda7cd1766aaa223572bea0fd97dd"
  },
  {
    "url": "assets/js/49.29484086.js",
    "revision": "ed44a19a414fa2ba2b2ead092fd88540"
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
    "url": "assets/js/51.8928a695.js",
    "revision": "ec3e48446924fcf5bdcbd57ee228addb"
  },
  {
    "url": "assets/js/52.6cfc3d5b.js",
    "revision": "1a07be6e47a86461e9f77d5b2ce6eda1"
  },
  {
    "url": "assets/js/53.83cce2f0.js",
    "revision": "4f59d31ce2b559bb7a53e5759b955284"
  },
  {
    "url": "assets/js/54.152a4285.js",
    "revision": "8bed0abe6da1493211b77835bd05972b"
  },
  {
    "url": "assets/js/55.2768e581.js",
    "revision": "aa137aea9012f1700dd626f53251b419"
  },
  {
    "url": "assets/js/56.756f2aeb.js",
    "revision": "4547b8b03d22278ca7230f917875d682"
  },
  {
    "url": "assets/js/57.67ed7276.js",
    "revision": "d6a685020a82e931fa754d0d1aa43fa3"
  },
  {
    "url": "assets/js/58.96f0b5a2.js",
    "revision": "d8f4357e109b97c0a2a439c864bcce75"
  },
  {
    "url": "assets/js/59.4b2b2030.js",
    "revision": "7e36794cc51b212df548c36558fa2c56"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.94143968.js",
    "revision": "57ce3f9bfa6c9c3926e5a8f1c27b996e"
  },
  {
    "url": "assets/js/61.cfb96002.js",
    "revision": "1e654ba3e75e3ea38c5361c81c534014"
  },
  {
    "url": "assets/js/62.255aba0d.js",
    "revision": "a5a7d10e256c94e027702f31a72055a5"
  },
  {
    "url": "assets/js/63.9c1134c7.js",
    "revision": "944ece7d2c7c815f394a59a51da7ec98"
  },
  {
    "url": "assets/js/64.3fd6e1c4.js",
    "revision": "f23d369c7bb13f26e38f9fbdf6500311"
  },
  {
    "url": "assets/js/65.b29e7964.js",
    "revision": "cdc0b8ef38be69a4e6c4a2e3d17f0de1"
  },
  {
    "url": "assets/js/66.d8d043c0.js",
    "revision": "38afb0ef49f63fe84c7bc51875384959"
  },
  {
    "url": "assets/js/67.ca71072a.js",
    "revision": "7caece8a17106ca5748f194caa63c7e4"
  },
  {
    "url": "assets/js/68.b9dbc516.js",
    "revision": "7031ce75ef0c7d20bfbd57c20c04572e"
  },
  {
    "url": "assets/js/69.16521a3e.js",
    "revision": "0c204a6f750e27ae05824e9e957ef42f"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.17803cfa.js",
    "revision": "6a794fcfda5a3061a31d6f3c82c34e8d"
  },
  {
    "url": "assets/js/71.88a403a3.js",
    "revision": "a0481ee21b4bdea67d4593f41a503c43"
  },
  {
    "url": "assets/js/72.ed73c79e.js",
    "revision": "496791938f39ea7b3ab8f2c77b334b54"
  },
  {
    "url": "assets/js/73.56f89f96.js",
    "revision": "bf67ffa2f99a7fabff1fdc5af80ef776"
  },
  {
    "url": "assets/js/74.10d7601f.js",
    "revision": "e9fc04d090dc3cb4090fbbea4eb3634b"
  },
  {
    "url": "assets/js/75.cfa0a5e1.js",
    "revision": "c0fdbc4c25dc134b0f95d5dd3719273f"
  },
  {
    "url": "assets/js/8.21661618.js",
    "revision": "de0f01633ec9a27e10d329594e212dc2"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.b1e8f9ad.js",
    "revision": "8ff9c547ac28ace49a311cf2210c83fa"
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
    "revision": "6ba3667557b2bc9004077cac9d0d1f90"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "a7123169e1188cf17db23805e471569a"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "4dfd94984607fff43205bba86708b76c"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "bf54a881c63f498395bcb01d800d6bbd"
  },
  {
    "url": "categories/index.html",
    "revision": "2696aaa60ab1a0050a5c449cafe0551d"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "7e0b1baef47898790afe1bff6905a031"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "45f4b483f4fc2b3c000869bfcf75cf7e"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "ced86d1c29113840377adc20f863f160"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "986a6196a4ff82b3deeed48d3d5c1525"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "d1b6b9f968a0608993a2b8329ff2adaf"
  },
  {
    "url": "categories/other/index.html",
    "revision": "0e7c0ea6acb2b13549726efde5b60f5b"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "41e193ae545883f740eac1fec6c7738e"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "c9ce6111eeec0e14698ab556943df344"
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
    "revision": "9f934a8d4b03887560fa4d51319b9bca"
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
    "revision": "350044374f76c5417ac5188d8282e47f"
  },
  {
    "url": "tag/App/index.html",
    "revision": "8915a0df785d7df23ba522468b7108cd"
  },
  {
    "url": "tag/array/index.html",
    "revision": "1f613bd1565b6487d01a1b3992d2b48d"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "9a066640c8e0825dff35c3076642d15e"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "bb8f9023f24e83aa4094f9ad292cd9f2"
  },
  {
    "url": "tag/css/index.html",
    "revision": "8def0e47f89d20d6f1d8003a419807ce"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "bc4e58d8ca41656f4bfc3747c9cd0330"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "2abbeb7a726ea39fa88de13133201765"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "5bd6c057b3b15c7d556ed705cc303c67"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "702625a5590b23cdcfc37ac578e4714c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "abd95b0776f7304f614428a23e7ba74b"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "be5c0a90fea7fadb75830d632be095fb"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "b8055ce5f3c13279d2b29319492fc062"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "94cddea4108e240c149b55389a83d027"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "4c995cdda969a886a00bfa56bb0b88f5"
  },
  {
    "url": "tag/html/index.html",
    "revision": "3c790d14940c3a31d84d4849be8bacbd"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "f3830c793f24d4398e4bd55440afe4ae"
  },
  {
    "url": "tag/index.html",
    "revision": "920bb89e9f6a0548ef645db81ba3de7f"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "761e1df991add642f2e18038e40d7265"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "3622fd77ffc05cde9dce01a85b8f5657"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "86186b1e1f08d6f991408cc94f373408"
  },
  {
    "url": "tag/js/index.html",
    "revision": "276a135911933524e3f4fd2b61783b59"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "df8ad6e5d22b04ee285b6beb6cf2541a"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "d18321a491f18805c45ac490f7482786"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "5283b278a505c72e72566eb5cba31fc3"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "7d56f9e11e919d21b0a741f7447caa51"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "397fc0eafb8a2c9b6404c619d179dcbc"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "c19c153ca77de49915c6db76a8ee504e"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "e306621923991a9ce76be91945228c2c"
  },
  {
    "url": "tag/project/index.html",
    "revision": "8fe026abdb30a59b88ce82d508e2de1c"
  },
  {
    "url": "tag/react/index.html",
    "revision": "52f801145d86555fb401301abc97d385"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "123c4667160987ccca881c7ce1d50dd7"
  },
  {
    "url": "tag/router/index.html",
    "revision": "7f71d7ab6fbac5759ce44bd05cb16a8f"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "4a2fec270ad55bdbd1849a113e38361f"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "c0e7829bee041d512bfd64989c23f7b0"
  },
  {
    "url": "tag/style/index.html",
    "revision": "05edb69bfe0c1fe5e1b98584a6c84d05"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "1c6b6eaa042c2cb9c0648ddf4108ac11"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "6404b6b6d4c265fe79f41c3ca9b29b1f"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "f97a5792ad607fa79abec075ed74aab2"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "b55b1487ca902e26c97d772445837cde"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "ac4783ab1031e4ea00592eb8136c8560"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "e379535827a8da8a1c0820b887d2b588"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "861cb82a8bd69f958c2dd9d628fb6349"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "da6b2f532ae364ad9113436ee7b581d0"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "4ed40885271bfd13341b113e25e6faaa"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "d8e235c6977e779cb6cc8198c3cbba4c"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "8b3132f9c5715e25922039315f6a69ed"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "b254c9316e412b2ca8e1b2fc05bdd0f7"
  },
  {
    "url": "timeline/index.html",
    "revision": "57111feb1678d256508343f9c585bb20"
  },
  {
    "url": "views/about/index.html",
    "revision": "1fdc15440fc4fc88eab438e2fd8c66d5"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "3e8171d51656b32b8db3143d4d0d5300"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "897bcc95cd6d72c4ddcdff326710c0e8"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "6a1920f17b880a43555f8fce3d0ef995"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "a91938a2dab0ce1d3cf79c2db77703bb"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "ff57f22b30ae3a7e6cc12b4ed1329f07"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "3a63373063e0fa76042bd081213f5247"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "2d2b8a7f4f548960444f8825bbf68b88"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "14c4d3fbcb7f4d7d0b44a10c1cb898f5"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "dfa0f2079f487ba3ee2edd5827e32bc0"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "ac8fe13fe1b8136ca2395644a4942c4b"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "bd6c0019f8a276036868b1c2dbaaa443"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "76ad05fa9abec4e9374649662abae4da"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "a53560037a83172d89e58bfbed52ab56"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "ae241b5e20e340b3cf2cafc1cfdf25f2"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "72b387f9b552657e170c545b417b344a"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "59fd14f4320da5107c6f21d324000776"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "a5b3d34455db7d40b7f683bbf503ce70"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "b8ae805270c4bb57cff003bc48a53405"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "3b245efa05b96bdbf00a302c43181bd2"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "4534b52e7d002847775b7461385de4a6"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "e3ffe97995991559223c80d8b040e2c2"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "125ce953aa949a0851863c73764d6134"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "b5453444f0a750d8a6c752201daec721"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "738f5a556ab2e27c4d9b67f7394f11c4"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "24c1c33ad88c362d6876a3c3b5d3df6d"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "82c4c874293ad241dfbec3db48510649"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "03bd4a6059c753302625d40a8764453e"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "33bc97aacde7000ccbc02ff66b3faeb8"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "b1fe4d595595e9ba7f9199a6c38f4bbf"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "92db52e28062460298ebe1b3ef2ebfd8"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "468b7004ae87b61dd264953ba9599572"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "2fd571912fec27bce11e3bcc141c721b"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "cb511095c2d93a5953c6cc9e38b2c48d"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "1619ead2c33435e0be79dfb8d536c5d6"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "996607d4a2e4db1213a2c8d7e81106bc"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "1d0ccd8e3e7cd5278d8804ce9b1a23c1"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "a5aec23c100a96c6c859de320cc46f8a"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "76f931b676febde453e43efd1a1acec0"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "f6a94e2a929f33565be64dcf37362ba5"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "c0449268d8f00688cef4712fa08aa190"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "0b450d693395c79f4ae79d82baa4f3c9"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "881abcd13289196909e62d35def5c251"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "29ecc473382d80cba10741c3ee4806cd"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "1607c5ab8deb08d1248b0c132bf4cff3"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "1c02f161b5122c446a767837f2801f5c"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "64c95bae44d72350384506c1f0a780ed"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "9fae7f75f6d70717ef57e75f46621206"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "d2e4774a46c5f976fbf5f963b09cfde2"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "92954a38310167bf1d4a42cd09366bc2"
  },
  {
    "url": "views/project/index.html",
    "revision": "15b60f90599a52edd4304b7a506c5747"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "c4de9a1fa0cc2673ce7abca1bc1a23c9"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "f9bd892b015e20c24dc8b8eb19dedb21"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "5b5cae6d47f914b2d652555a555f9feb"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "9864b2a2847f3021edf97fd81cfa8a36"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "e12aa94fc3dc435498f4a19670ab747a"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "8abac9dcc2b1dc427d86f0d4ebf2e28f"
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
