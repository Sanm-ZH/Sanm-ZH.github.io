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
    "revision": "a595f79082d999973307f33dc621b816"
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
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
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
    "url": "assets/js/10.72027cf5.js",
    "revision": "fe870b6edbeff7ce6d48b0a5f31f19fd"
  },
  {
    "url": "assets/js/11.ba830d2c.js",
    "revision": "b1986032a2aeb174a230dcc92094288f"
  },
  {
    "url": "assets/js/12.621766ae.js",
    "revision": "3abd14ba014abd3dc139c96239aaff58"
  },
  {
    "url": "assets/js/13.687a7d7d.js",
    "revision": "752398222d814d969388783e852e850f"
  },
  {
    "url": "assets/js/14.7a0e477e.js",
    "revision": "73a44a1f05fc0156519bc4b68d4bcf0a"
  },
  {
    "url": "assets/js/15.a340dfb1.js",
    "revision": "e7c4a10908a81d5970868fb1e2db072a"
  },
  {
    "url": "assets/js/16.c778b12c.js",
    "revision": "599aeed1594b3a587654ee12dfa1d2ba"
  },
  {
    "url": "assets/js/17.4d5428e9.js",
    "revision": "af28776c97de8209a5bfe1d23f8d38c1"
  },
  {
    "url": "assets/js/18.39d35373.js",
    "revision": "43da764ad37682f5cc19b9bf91251ee2"
  },
  {
    "url": "assets/js/19.98376533.js",
    "revision": "be5dea62aba2d6d3f0f33719e6940d6f"
  },
  {
    "url": "assets/js/2.619a8525.js",
    "revision": "40224473ccc02c5dd118ec62dc3e7880"
  },
  {
    "url": "assets/js/20.7fecce9e.js",
    "revision": "652398f74fc88e0a8cf8c8ae397956a1"
  },
  {
    "url": "assets/js/21.436136ad.js",
    "revision": "73cad98d8b3d29fbb7d0454b28691c94"
  },
  {
    "url": "assets/js/22.452ff4c6.js",
    "revision": "f587abbc1be72dc29aa5936d51647f5d"
  },
  {
    "url": "assets/js/23.f7cd4680.js",
    "revision": "c7fa034f04d9bbfe5dc71857dd5abb13"
  },
  {
    "url": "assets/js/24.2dcd6da9.js",
    "revision": "893bdfb06c58eeb87c904d7ffeca1dcc"
  },
  {
    "url": "assets/js/25.f29c492e.js",
    "revision": "c7d678a702c98ed74eadc4f51bd22f2c"
  },
  {
    "url": "assets/js/26.0150abfa.js",
    "revision": "79d7c795206079b10eb7714a235835af"
  },
  {
    "url": "assets/js/27.debd9e66.js",
    "revision": "b43ec468e25f8f77ed603649dd50269c"
  },
  {
    "url": "assets/js/28.ecb65eb8.js",
    "revision": "5c0619943a15c58cc0e8235002cba1ff"
  },
  {
    "url": "assets/js/29.ca866e9d.js",
    "revision": "8af9c104369b6208257a26041e547ebe"
  },
  {
    "url": "assets/js/30.ed8d795e.js",
    "revision": "19d972d7d43545fb94eaac3209f428bc"
  },
  {
    "url": "assets/js/31.695b01c3.js",
    "revision": "6e8ff6d3875f878f20bee351b7bf6c6b"
  },
  {
    "url": "assets/js/32.1702ad84.js",
    "revision": "6721fbbd4498613a1cef8124eb73f662"
  },
  {
    "url": "assets/js/33.716af1ae.js",
    "revision": "319d62ab94b4c5105a4a48ed8cca3ce9"
  },
  {
    "url": "assets/js/34.6062996e.js",
    "revision": "2e9f95c28429d6bad28c926d25186b34"
  },
  {
    "url": "assets/js/35.7d174a2a.js",
    "revision": "de6dcb98d304f6691d79b60faa3c77cf"
  },
  {
    "url": "assets/js/36.3fca7851.js",
    "revision": "d269838bb87166a82c756ca00e568625"
  },
  {
    "url": "assets/js/37.d146fb08.js",
    "revision": "84d68241ad723f274515ce71dfb8a4a7"
  },
  {
    "url": "assets/js/38.a5672b58.js",
    "revision": "5215060134c5b3d14107661e32115a8a"
  },
  {
    "url": "assets/js/39.df1ec771.js",
    "revision": "b2d510f850a09624e6defe61b1d316f2"
  },
  {
    "url": "assets/js/4.79d6d2e1.js",
    "revision": "f25e7d0641e446d22a0a43330a4c9223"
  },
  {
    "url": "assets/js/40.fff485dd.js",
    "revision": "43966a4ffc1055b2d02dd072fd158a07"
  },
  {
    "url": "assets/js/41.f6017874.js",
    "revision": "75b2d99729caf4ad104d83c28578c929"
  },
  {
    "url": "assets/js/42.7fbe57a5.js",
    "revision": "6281f793fc39b4560a9b60549cb0ced4"
  },
  {
    "url": "assets/js/43.a089837f.js",
    "revision": "68c2e48968106f4d22faa8c572df39ae"
  },
  {
    "url": "assets/js/44.641b3c84.js",
    "revision": "b9e48c6255f894fbb7f8ede8350c08ec"
  },
  {
    "url": "assets/js/45.649bb8ae.js",
    "revision": "54f85f6f5dbba060934703537e8ee4f4"
  },
  {
    "url": "assets/js/46.bbfa8aa3.js",
    "revision": "c87f3a2a9eb00a77ae134858d184813b"
  },
  {
    "url": "assets/js/47.8542446f.js",
    "revision": "718b1acf1544d7a6ab04f0a08ce37fb4"
  },
  {
    "url": "assets/js/48.c344c018.js",
    "revision": "5a1ade76c0ef89d0fff485c38ba7bc9b"
  },
  {
    "url": "assets/js/49.ed1f1506.js",
    "revision": "b5ce7eb5bf75e70241cf95a540c262b4"
  },
  {
    "url": "assets/js/5.f2ef66f9.js",
    "revision": "093767b37b78d413fd4c0fbaeeb1c7f8"
  },
  {
    "url": "assets/js/50.62e4e4cf.js",
    "revision": "deee9d4559780c9ff5913eee0e174b3d"
  },
  {
    "url": "assets/js/51.60f35917.js",
    "revision": "c81cfad4fa28d1f8c879284357d7c0a8"
  },
  {
    "url": "assets/js/52.db575a2b.js",
    "revision": "644e41d2ad676540455e087128d45be5"
  },
  {
    "url": "assets/js/53.067492ba.js",
    "revision": "86fe93ff8aaf05004473a8e8a406a49a"
  },
  {
    "url": "assets/js/54.216021b2.js",
    "revision": "86c837c32ff33d6929ba844b0c7e82ea"
  },
  {
    "url": "assets/js/55.5e6e7dd8.js",
    "revision": "32d0538a0e1ac37a199a5f1ec3977e38"
  },
  {
    "url": "assets/js/56.8e8a999e.js",
    "revision": "10ac6999820a44d762794a14f334468f"
  },
  {
    "url": "assets/js/57.7b9732a2.js",
    "revision": "5555e72db671d4c8436e63aa0ed99cdd"
  },
  {
    "url": "assets/js/58.c9fa90bf.js",
    "revision": "0ccb51a571f5371900e7471a5b27368f"
  },
  {
    "url": "assets/js/59.48307f5d.js",
    "revision": "18182c4aa92541538776df0b6be49532"
  },
  {
    "url": "assets/js/6.d342ea68.js",
    "revision": "792926563ac5c33fb88a571d87318d19"
  },
  {
    "url": "assets/js/60.03c8df82.js",
    "revision": "293dd236ea0fb976713ec953802561fb"
  },
  {
    "url": "assets/js/61.89e1dd39.js",
    "revision": "6687fd0baad33f3c897c512c9906e609"
  },
  {
    "url": "assets/js/62.56e0af2d.js",
    "revision": "086e5c0be19cdaa8381d2e741bf5ac77"
  },
  {
    "url": "assets/js/63.f329dbae.js",
    "revision": "d3389db811683f7482ee6f6b2c9ea242"
  },
  {
    "url": "assets/js/64.ec61af2c.js",
    "revision": "6d77b33226854443a2070d76427ceb69"
  },
  {
    "url": "assets/js/65.6278f967.js",
    "revision": "a1a71f617b4e28590b119eb2ac3bf061"
  },
  {
    "url": "assets/js/66.648db6ac.js",
    "revision": "0f31b02c0517c14b5435832a1491382e"
  },
  {
    "url": "assets/js/67.03fe0c22.js",
    "revision": "99a1c0e949b9e0126bfb1aa919c17259"
  },
  {
    "url": "assets/js/68.15e141ff.js",
    "revision": "bed728d443596e025277e8476cf993c7"
  },
  {
    "url": "assets/js/7.59a38e1a.js",
    "revision": "a3311a794a5c1a22ecd24820f72b8d4c"
  },
  {
    "url": "assets/js/8.4553a682.js",
    "revision": "9d33dc13647ff2284b52d267cb56a8ff"
  },
  {
    "url": "assets/js/9.744191d0.js",
    "revision": "066fa2cba7f930c891ffcbc8079c6f19"
  },
  {
    "url": "assets/js/app.5d6ec842.js",
    "revision": "b93261582c3a631ebc519c02eaaf9cb4"
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
    "revision": "df86f2afa7c299e6e8fc6a354a9a0bff"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "b44f02d24de3223ea52ba8534497f581"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "094ca507f742030299707215a6ab4efd"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "f6f38600e7ae24a6447bb321821ac09d"
  },
  {
    "url": "categories/index.html",
    "revision": "2cf92525e6cfb1f8bf6eb8f7525d16bc"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "59a4780abdf59b21cce59a8ca9b0b4eb"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "4122a53dd087554bd581c7c7e42b7647"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "ef36c63ef16556d98cdad684e08e4e25"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "0966281a4e4851abc271f002f9f9e6a9"
  },
  {
    "url": "categories/other/index.html",
    "revision": "31d8048c84f211bfd4a7fdcd292678c0"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "34d28c9ba00be5982ef1477a7b714074"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "7eb98279a702e435729937d25f944542"
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
    "revision": "c22f50a659ccd70bbde48004a3f1f870"
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
    "url": "self-blog.jpg",
    "revision": "adb6dc7dc0094c1d160cb8fd601514cd"
  },
  {
    "url": "self-resume.jpg",
    "revision": "0b07c2fcf77fb875cd329e73ff1e1f38"
  },
  {
    "url": "tag/algorithm/index.html",
    "revision": "0b2fa9669b0dc1a113d6ffa6eeb40035"
  },
  {
    "url": "tag/App/index.html",
    "revision": "369358dd2dccbbcb8fd89f1ed549fd8e"
  },
  {
    "url": "tag/array/index.html",
    "revision": "690d5d9f1135820e434b0c2183a6f926"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "a78d62d70364eb1f31f01a7d1876ad55"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "3197e09af238f7f614a0beec92681cda"
  },
  {
    "url": "tag/css/index.html",
    "revision": "a9bdc62a6c15c13cf4f79e8cd1dcdbcd"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "853491e91e78d3be44ab389b2c460e61"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "31a178519fefb19b54ac2a45dad37eb2"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "30438aa28369d373bd5bb556be10380c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f5eb4871ffd95ba65978437270e41c2e"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "243a310f5dd44177cf0a869c4c61ea03"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "c911f31124bd89a8a6447911b7c741c3"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "309a4d86bfe47733a0df431ab8f2240d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "10baa9cb58ae22dd573012d6fb971a39"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "46c2cfd1768d1b1f19d7d8008985213d"
  },
  {
    "url": "tag/index.html",
    "revision": "6e9695faba1e9faea5259947d29c07df"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "65f15af2a70b3fa70219e5ed4aaccf20"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "562fa57aa12c885c8e0f5c626934ea3e"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "0f2ac5f9c04b0a338e7926bab0c4f353"
  },
  {
    "url": "tag/js/index.html",
    "revision": "637c484e86450da940299b9e486cf57f"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "2e6336669471053118476330fbff6306"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "7d649146e50d4730eac32a7399f8077a"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "0cfbb5e3154b5429bbfcb7576bc49909"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "197aeab947966b1d638a303166b0d411"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "36329ee2f3d1fb1554c89c27d00dfaa0"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "89d95449dbed69f972d88f56f14acec5"
  },
  {
    "url": "tag/project/index.html",
    "revision": "c8b4eaac3fa2e17c24f1531e3ddd4c74"
  },
  {
    "url": "tag/react/index.html",
    "revision": "16a4b05780e6fdf0d5cbc5ac501bcb8b"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "83aa89480065f051d80af33e2a676079"
  },
  {
    "url": "tag/router/index.html",
    "revision": "654dd3072c3980b433217a5b6ce19059"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "8901c559eaaf0a3d9143755d30de3196"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "73f97b506586a6712db7758bc0b31215"
  },
  {
    "url": "tag/style/index.html",
    "revision": "d904575029ce1e5229ffd14a6351a60f"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "ec568f190d337ddbcd70e303c8612fa7"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "7116fdf5be97e4cff62e183866874e0a"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "7b8dba172dbe75db6807fa11cdcdcb2c"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "369db1e858ccb4bb0bab9403bd29d2f0"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "b348bf75d755e6ea5f0f0c3200343e43"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "3b13dbc075c87c9987ff21cf8978882e"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "983653265c6d90b3450a1398dbac4ef6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "aee502521aa70baf5371ba0e9eea257e"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "955014a9b593eb8c311ade47bc4941f3"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "dff8c78f10ecc31aec8a9ec117f541b0"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "56a8e04f0bff8d61594eef28a711f10d"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "68048406575ca6e48f4af416f953d250"
  },
  {
    "url": "timeline/index.html",
    "revision": "9003960c7fd0fe38e8fdb8ed1e837b10"
  },
  {
    "url": "views/about/index.html",
    "revision": "24c024d650ae3a565b38104cc65f3b2f"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "acfde314b177d643114e9ff6b0355c64"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "26ff06a01d56a511d869111c406c6a63"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "1b3683690ac44bdb0aff5c1b6c3e3843"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "b26d1fcf31e56677b966cd37f74c6386"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "0be60ca134d2990054cb07bb3bc9477e"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "99dc62c43afe7178300ad4b340d412a8"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "7ef7bf19784e3747a3ba755cceb50a43"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "1d15caa0c3d535f40d6e1cd7efa205b2"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "953e23381708a17ebd7f4541599416b8"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "6109eba77aebe6fc56baf25d83a44784"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "7f5b8024f010f926f75b1836ab88c4e6"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "a6e0922934f04f70d83561334a8fcf35"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "f14746d83ff7183f1bee0322cc1932e9"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "0fcf853ab5a88924b901382642c3f27b"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "bae7ad4cc2032ae30d48cdbf448125de"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "5bdb66d9a1aeae707eeeed1732652dac"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "69bc312639a71b3f876676acf13bc48a"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "bee7e1462e6e36eefaeb2120df762032"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "cd1c2a638b915c952ab666c1d6c653d0"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "197b445a08397511439f20077228eccb"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "69a518ae041ba73263cecd6fb9d68ae9"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "54d4e06795c6bba4aa0af0e56bf4ce2f"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "a8406f93f662505b2898466925b1ab2f"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "48c8c5dcd24cd76d56d01897258d12e4"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "69ec9f4c6147db774780cce28e840cc7"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "c6bceec6ee7cf21fa0175571713fd693"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "49f25ef514520a41de7f43d8baff08b2"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "15f5570620ba4febd231d3431490c0fd"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "92287585f0da14233228b8f156d028e8"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "9fc43955d6927f2b6a7b1c3ca5c9a321"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "260fed799b13c4697fc885c038b9466f"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "ac0390907bbf8c72ef3894d77ad8cd68"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "a652dbe5250fb91770c343fb4d20b269"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "affab9fc5ac2dad1f1db5186ad526b6e"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "708f09a64c4cafb6563770e874acf648"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "05cbeb96990e2319e4ce046732c76495"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "cb2c824ca4771f02ccfa35846f1ddbca"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "2e70d0dc4888d2bcff5fa4a8b4c83b64"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "65d78fbde30f95c914869effb2794aba"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "7b3414a9df9b7f30bd974a8b46ff2792"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "5a683563618d3b63703ecf2eb64fb427"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "dcdbd9dafd82f283839bca24e70a05e4"
  },
  {
    "url": "views/project/index.html",
    "revision": "d64f0b273ff14de2e0a31456fd06f2e5"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "8f9e1b90fd6aac118d40744582eb2e0d"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "1c54a3722f266d68070119492bc2d216"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "15d350fb33000a6f8b8dc6349c10f7eb"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "7008f02b5f384c188a85c0cf20c120a1"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "2c7fb18cb9e2fa3a7763e943639f193f"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "a57c582968530c772206c2c062db4401"
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
