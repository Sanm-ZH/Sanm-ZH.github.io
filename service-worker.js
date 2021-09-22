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
    "revision": "eafa98e0e0ddaf27a889c586205aaf19"
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
    "url": "assets/js/12.caa085df.js",
    "revision": "c9eba37882e1832cb26888153f6619ac"
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
    "url": "assets/js/16.daab217e.js",
    "revision": "ecc6916af925c8c67692f0e29ee2f8e5"
  },
  {
    "url": "assets/js/17.f96fcad6.js",
    "revision": "012054ded4a4e1c412ff0e76bbe1faea"
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
    "url": "assets/js/20.9c0ddba1.js",
    "revision": "26ce06a134b8051f5b55f58b26d3c75d"
  },
  {
    "url": "assets/js/21.b5e583cd.js",
    "revision": "f7923de80ff015b7380b5d9ef19f811a"
  },
  {
    "url": "assets/js/22.30d29c00.js",
    "revision": "930900ae4576ba984c37abb270c77197"
  },
  {
    "url": "assets/js/23.45707f9d.js",
    "revision": "4e27bb811922db40b149f480ae3a7b54"
  },
  {
    "url": "assets/js/24.478fccee.js",
    "revision": "dfc1b1e27c05bc62e91a2885c497a06c"
  },
  {
    "url": "assets/js/25.99aeab3b.js",
    "revision": "c9ae4d2e8a85da39da371f9f565f1e37"
  },
  {
    "url": "assets/js/26.0c960cf5.js",
    "revision": "6f8121c2e125351d7954ea8b74ff47e2"
  },
  {
    "url": "assets/js/27.f25285c4.js",
    "revision": "56644b3e5013359169aea68d3dd1d7d6"
  },
  {
    "url": "assets/js/28.71040f71.js",
    "revision": "7b4ef77cacda0eeb8a01df6d010063fc"
  },
  {
    "url": "assets/js/29.2012aea5.js",
    "revision": "3c0cc8db52c09519756b6e7ba051bd9c"
  },
  {
    "url": "assets/js/30.97232520.js",
    "revision": "6a45f1183fa78751ec6c31d21e38db82"
  },
  {
    "url": "assets/js/31.2f187e59.js",
    "revision": "b4bf83b15bda69b58c967a86da032bcd"
  },
  {
    "url": "assets/js/32.5f0c0fd2.js",
    "revision": "7b0d7b22a409441fa6eda5d8e2f09ab6"
  },
  {
    "url": "assets/js/33.76793540.js",
    "revision": "917f6230a83ec067f85a88ba2e123fc1"
  },
  {
    "url": "assets/js/34.7aeabe24.js",
    "revision": "d4960f949976e493e33e3e559dafab16"
  },
  {
    "url": "assets/js/35.f7c0f977.js",
    "revision": "936d534e46e54c1b5db9938b9c6a3be5"
  },
  {
    "url": "assets/js/36.f6605ec5.js",
    "revision": "c84dc0836605bae72567d827bdd2658b"
  },
  {
    "url": "assets/js/37.f7f0f377.js",
    "revision": "56f27835a6ad653f6faa3d8bfa2ca1d2"
  },
  {
    "url": "assets/js/38.a4827032.js",
    "revision": "7575175c7037ade227254c2ff41f712b"
  },
  {
    "url": "assets/js/39.8694926a.js",
    "revision": "da3d9f6a4ae84afc16725cc1eeab1552"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.b6699113.js",
    "revision": "58669673cbdb4eb0662692868959c9dd"
  },
  {
    "url": "assets/js/41.426cf183.js",
    "revision": "d94b50f8c41aa6cec5cea409cb3297b2"
  },
  {
    "url": "assets/js/42.c0836df1.js",
    "revision": "0e342cdcb1e14cda657893bb758f6fc8"
  },
  {
    "url": "assets/js/43.b1fc6dbf.js",
    "revision": "f791549bd2346fed2664c092e5817455"
  },
  {
    "url": "assets/js/44.7fee5db8.js",
    "revision": "9ac8b90ac44503fa0ffa26de170eee99"
  },
  {
    "url": "assets/js/45.a8396a36.js",
    "revision": "c426406ef9386521a559d3ebb53ffc43"
  },
  {
    "url": "assets/js/46.b9c62357.js",
    "revision": "7559b95fa89b38c4bfb4a94f1b059823"
  },
  {
    "url": "assets/js/47.b383516f.js",
    "revision": "3e94ab7c670f171b992067f65bc633f0"
  },
  {
    "url": "assets/js/48.3b07f972.js",
    "revision": "ad9e869bc87662f5dd7133b790e79e0e"
  },
  {
    "url": "assets/js/49.326da45f.js",
    "revision": "443767ce2404a6cf60329e7a42d6d4eb"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.9898476c.js",
    "revision": "48603f8241f480abd9d1ae3eb21c1f72"
  },
  {
    "url": "assets/js/51.51e26c99.js",
    "revision": "db8cd751950c304efbb8e0bf26b8cd38"
  },
  {
    "url": "assets/js/52.d07562a7.js",
    "revision": "feda6d7ea12a577a006e3e2631a6bf60"
  },
  {
    "url": "assets/js/53.e8541d3c.js",
    "revision": "eb70d063b7a591e44f43f0263d2128cf"
  },
  {
    "url": "assets/js/54.984ae997.js",
    "revision": "31a11588da81c2fba54f6537f4ea2190"
  },
  {
    "url": "assets/js/55.05bfaf17.js",
    "revision": "ebb5efff1cf858c609a1ba5680fe4ab6"
  },
  {
    "url": "assets/js/56.ba74306e.js",
    "revision": "16dc3c1a3a1182bfa1d76c162e41a31b"
  },
  {
    "url": "assets/js/57.e8696a1d.js",
    "revision": "f4fe4910bd9d0f9f269dffaa2ef7cc4d"
  },
  {
    "url": "assets/js/58.22ff171b.js",
    "revision": "2bd039a5c9c73eff18f383ab5759c03d"
  },
  {
    "url": "assets/js/59.048f28f6.js",
    "revision": "e8f57f79e97861a5f5f7eb8e7482a5b2"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.8a0b85c3.js",
    "revision": "a0dd4a4b86895ebf5caea256c7e7669a"
  },
  {
    "url": "assets/js/61.4fc29a7d.js",
    "revision": "89229274ce963c0454b68ea13f3c40ac"
  },
  {
    "url": "assets/js/62.078e45a1.js",
    "revision": "2b26e5a0f9cdd970e96af81c76cceadc"
  },
  {
    "url": "assets/js/63.0d2f2c59.js",
    "revision": "024d48550ad2ac1f95c047ea726064a1"
  },
  {
    "url": "assets/js/64.cb908f18.js",
    "revision": "d9dff2074d2b8d86ec25b5f246f352bd"
  },
  {
    "url": "assets/js/65.7e45640f.js",
    "revision": "812c9b0f76979052b9fff1e60eeaf0aa"
  },
  {
    "url": "assets/js/66.1afea2f0.js",
    "revision": "d8f8787de84797daedd321eb466ae3e7"
  },
  {
    "url": "assets/js/67.0697cadb.js",
    "revision": "dcc51c2ea4cfd3a24183ba8bbd49b9ae"
  },
  {
    "url": "assets/js/68.f95148df.js",
    "revision": "f23c1506bb3b41719f8dbce828c57665"
  },
  {
    "url": "assets/js/69.9ffa2fa5.js",
    "revision": "b21161fc990667a3e2a9c60d5f96ce4b"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
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
    "url": "assets/js/app.19b2c178.js",
    "revision": "91a482cd4b3590f55d49b7ac0e37070f"
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
    "revision": "20c68d5f98f17f227e976640d5745141"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "0024318ccbfc0326d7f79f588ddfce92"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "f996c36fb9ec70ec934d65b07f65236f"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "12e5300e039eb4110d0742714efa596f"
  },
  {
    "url": "categories/index.html",
    "revision": "899c776ab64e8fff0577237a0cfccd23"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "8644e0975cd822796f04c56524fa162e"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "7ae8740cee609efbb2d160823fe05e1b"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "2d71fc449cf9cb3623bac16babb4f501"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "aea72279a6dbe0338f91b378692e526b"
  },
  {
    "url": "categories/other/index.html",
    "revision": "4b0abf999d474dece65e5819404c6cb9"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "4286bfb8512d459da6572dd88d2ac4d9"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "b02a26edd26bd321ddf42a7d10e305f7"
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
    "revision": "720ebf2d03d299e28b2c77279cef05ef"
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
    "revision": "e378e437805baeb271a49215eb0d9e53"
  },
  {
    "url": "tag/App/index.html",
    "revision": "08e6835d7e577306109e536b6f048a98"
  },
  {
    "url": "tag/array/index.html",
    "revision": "d4d0fc842f0c4feebdb3d3c923bf61e8"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "09af9a7c1f37a40fea2456a12f6141ed"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "1f0c419a81ec728817832dde866d112d"
  },
  {
    "url": "tag/css/index.html",
    "revision": "78a65fb8ef8a778c2f49d3be1678f93d"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "cb4f9a1af5eabbef8b39bd27c35a6538"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "01617d5d5c55c9da1e94e186b00844b6"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "5458d27bcbe183cb23c01e7ce2c87063"
  },
  {
    "url": "tag/git/index.html",
    "revision": "45c8659114eee4f8712c1ff59de5d1fd"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "95bd7173ed4e15ad600c2e0aa53894bd"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "50d0b4cf8542b92874b19cd08211f866"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "3e0cb5d5854d9faab21e529bc445b103"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "1b3e91693e036c854c9356ac45fb0f3e"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4431289f949c2217078cfbd0ce3d93cf"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "0f23914f0fc8072305857a5b707f3325"
  },
  {
    "url": "tag/index.html",
    "revision": "d5b20b24d105c52b660195fec25f865e"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "4d0edbc3163db12ef739cc2527c3d015"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "f4ad87153120a8dff9862f1d0670ad6f"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "3427a47f412d64e79f32d07217d7b9ae"
  },
  {
    "url": "tag/js/index.html",
    "revision": "7ea1b72c3eadbf612398cc50905a57a4"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "f759d9b0167bebfac0c4f9353987ca50"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "3c97907afc490d80b881dc915a962149"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "abd4a0fb4a9c09ed51abb98ea22d28b7"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "6114bbcaefbb8caffff9d9cfd9343d13"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "c427f7fa8fe873b414088417b4548440"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "1c7264c049a900e7c881a503d81a344a"
  },
  {
    "url": "tag/project/index.html",
    "revision": "189c0c82ade1d16a13d1165883ef268e"
  },
  {
    "url": "tag/react/index.html",
    "revision": "666ff971211af8e0df87d61f11397836"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "e790b55de391bbf3331d7d27b1fbe47d"
  },
  {
    "url": "tag/router/index.html",
    "revision": "785723559a3393ab4b438c5e8f7ccfed"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "663069cc34874babc6bbd1b72105dabd"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "ca8e1ed6ceee8a95fdf0597b32aafd77"
  },
  {
    "url": "tag/style/index.html",
    "revision": "7f3789672b0b0745dbd17e0ef2addb83"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "e10c3c38858183e79a84413ee2ce6139"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "2c9d85948111ffce89466ce3fd7b3cb7"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "4ca797595970964d100d989f213de6c2"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "9d4343261488d7268d0660980c51ca33"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "b540693a69e76efce6d9f2736b45e238"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "676896a181aa5fcdb2f63454ef28c82b"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "4ecaf3566b7e4161b4f1f761dfd1d2be"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "9ac754d52c00705bd92d7bf56df958e1"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "b75de81d6b0931016fad823789ea7bc1"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "833d6d41785ae8595518a10445ab2b02"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "118431494beb897330d216a19da9984c"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "903bdb48fff064a2914c9e8f3d153593"
  },
  {
    "url": "timeline/index.html",
    "revision": "1f87767f0495ec35d40aea750d81675a"
  },
  {
    "url": "views/about/index.html",
    "revision": "35760bbd9cf99b0af80bc2245e9c16f1"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "815d88fb8c56f7fdf9b2ee20f8e03032"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "6cf03d342025cc990be03f0107c9d960"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "e8825a07cb86e211b55021a5dd4f0207"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "8ab6cddd179821d52146c485034d2b41"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "b82a1006650b1b218545a5006136bde7"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "83fbd057c3317b1012d28d916f317827"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "91fc7bbfc4acbf14ef2eb62b4f9dddab"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "38dff240574a104e1b5f6511663ed20e"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "a93139685b99416dcdd81eb699e2ef6b"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "00071a2b07aa8adc30d12d5884e67ead"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "0fe3f72562afd08302ee2e310ce88f5b"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "d92f6efe5b56dcaf2d1d7d37dc618755"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "1da9546a9090938d98a6217320b0e5f9"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "696cbf1ee21c0674a9960bf34d5bd0d3"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "464981c68a2c9796a741e74f160b74f4"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "ec4e606cbdeb122811b36d0baa404e3c"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "666734f88a58be323b1d4f4ff44b91e1"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "8bb9c1c66502716a8439525eebb36012"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "74edc5a860a154c0e018605789dc8c58"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "b1415198589d809b320af4b71b19ab62"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "7cbb7f8758a36ae6b344af62436d1369"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "5ab2c3008a129f9591ec3428a37e0032"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "236b9db2378b63438bd0913396432b23"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "26465ecd75761efa08af3a682b080c8b"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "b7811f49ebe209f77eda5aa9b7211d55"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "ad1d767726b6ffb30c8954ef78a86d13"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "633ca31c97ace3628ca6c961539a087f"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "deb6fc940bee5e3757a57057dd6e5f7e"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "8f77628c45f67b13c535dfe0a7dc5478"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "a91223ed3ef31ae5d062ede5f743fc9d"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "03012552d8ac7b0856c67bd74f1732dd"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "c48f2508361a8bfe9578a59c0172b9aa"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "ac753d2795ca0183b2a4ebf76b00cc88"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "da162e444e1205711a93acbd81236fd3"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "224463a2c7c7f4bfe3e0c0e132100a7e"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "73c2c6579bd530d2f7f68f0cdb50af72"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "59675baa5d2af4b948022e766e1fb7b6"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "55fc413c167f440b522431e5277d14f9"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "ceeb8e79f35995d8fba23428b7513321"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "725bb646322d6c399dbe28f595fe44bf"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "e229322e76fa91421d0cbc1a86a6cead"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "b10e501062910c167d45be5f135ccecc"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "344bfe95ec53d49ad9803bd6ee5eebb3"
  },
  {
    "url": "views/project/index.html",
    "revision": "dcd99e87c5465cde871d3464bfd2d71b"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "75d8174c5ba079b6da64fec601eba712"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "ff05a0a60f2db66e361437bfa094c711"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "e948b57db8337998e1453140ecc26b8e"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "0ac6cc005851714e38207cc1181cbb66"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "3aee1e03dddb9dfaa741c15ac5fa984c"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "2bc87921d4945c41b4780098888b991d"
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
