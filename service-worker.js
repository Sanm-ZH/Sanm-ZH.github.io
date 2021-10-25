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
    "revision": "c5299c073d9a1f3a925117399133b302"
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
    "url": "assets/js/12.33f73ae9.js",
    "revision": "a7c52d08594d7ab82a299be42f2a4886"
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
    "url": "assets/js/16.ee53473a.js",
    "revision": "f7b747dc75cf32ce6a09ae890956eaa6"
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
    "url": "assets/js/20.ce9579e9.js",
    "revision": "fdce7117046a36aad810b78f4e566689"
  },
  {
    "url": "assets/js/21.123eea38.js",
    "revision": "be8b59f9486c9fe9e232c4b2d3c1d4af"
  },
  {
    "url": "assets/js/22.089dc762.js",
    "revision": "3a48bfa694fcdfffc1e47097b2b6ed16"
  },
  {
    "url": "assets/js/23.a55694e2.js",
    "revision": "33d1ba6dde65930572ee6b18f3f3dbe9"
  },
  {
    "url": "assets/js/24.7cccf57b.js",
    "revision": "4776815a72328aaa78231431cb939d81"
  },
  {
    "url": "assets/js/25.5db746a9.js",
    "revision": "c344be70bbdc34318fbb236c9362d6bf"
  },
  {
    "url": "assets/js/26.a7db7bd0.js",
    "revision": "bb751fdc240b9123eeb1cf8660571090"
  },
  {
    "url": "assets/js/27.a4e60147.js",
    "revision": "2b596bf2bac1658eeb4b59f8f67ce21a"
  },
  {
    "url": "assets/js/28.93d1a578.js",
    "revision": "9a723a84d7b20c9ca22f3a7e91764e3c"
  },
  {
    "url": "assets/js/29.8cd365de.js",
    "revision": "3e23166185f14a159fb342979c971ea3"
  },
  {
    "url": "assets/js/30.7a87163d.js",
    "revision": "7c59be7be0ab65b3e2ef3861fd2d7f8a"
  },
  {
    "url": "assets/js/31.e6635ca6.js",
    "revision": "ee61f18bd6e84a4d68b6e734dc00b2a2"
  },
  {
    "url": "assets/js/32.f674d7a1.js",
    "revision": "0f27ba82820701daf249258c2769b6fd"
  },
  {
    "url": "assets/js/33.e8664580.js",
    "revision": "0d5f0dfad1359b51de3244578c2d8574"
  },
  {
    "url": "assets/js/34.6a860752.js",
    "revision": "d6bedadf6ad931c5d1b5c6826d95627d"
  },
  {
    "url": "assets/js/35.8d7ebea0.js",
    "revision": "ae235df07ed21fd470dc4702a113ed45"
  },
  {
    "url": "assets/js/36.deb6c18a.js",
    "revision": "5ef73c361edf9579e08664eccc184aa5"
  },
  {
    "url": "assets/js/37.7f510e05.js",
    "revision": "fc62a177b93c8f8b470dc78b94381582"
  },
  {
    "url": "assets/js/38.8929c3ef.js",
    "revision": "983d828d33b20a87a9a85e01ff156f46"
  },
  {
    "url": "assets/js/39.ee8c9bc3.js",
    "revision": "d2eb4f04554ffc9b3f7719259f7aac09"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.15b714d4.js",
    "revision": "4b249c7e18f2512e49331cf9bae0b5ef"
  },
  {
    "url": "assets/js/41.3589c64c.js",
    "revision": "461e73f26b0335f88ca0792acb68f562"
  },
  {
    "url": "assets/js/42.b094686a.js",
    "revision": "bfaef023c5a518d10801758361e47183"
  },
  {
    "url": "assets/js/43.151f844e.js",
    "revision": "8aeb70ad01f61bce09bbc9deabd82ead"
  },
  {
    "url": "assets/js/44.b7690dc6.js",
    "revision": "a4b351b9f9a8f91eba2fcac94ffdd66a"
  },
  {
    "url": "assets/js/45.d775fa50.js",
    "revision": "3edfd76a179da041af06b301fad17d37"
  },
  {
    "url": "assets/js/46.8077c00a.js",
    "revision": "ed2878e1dfc0862cf0e3415a6bfdbc62"
  },
  {
    "url": "assets/js/47.3a604f6b.js",
    "revision": "f7f1e37d4be58bedd3c0e76266d9e5a3"
  },
  {
    "url": "assets/js/48.69a4aa4c.js",
    "revision": "94c9325de903cc7f50fb27ff00b5b1ce"
  },
  {
    "url": "assets/js/49.e3c0044a.js",
    "revision": "5f85293c388c93e381a9902311f10da9"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.47463afb.js",
    "revision": "9465a149fe358236688003ee0d9c26d4"
  },
  {
    "url": "assets/js/51.f3b39532.js",
    "revision": "1928438963ab699754601d0285c99e5c"
  },
  {
    "url": "assets/js/52.59df1b09.js",
    "revision": "5baa0f42156be516cfe319ab312c16dd"
  },
  {
    "url": "assets/js/53.2bbbe7a6.js",
    "revision": "e7f8441b252bda0d0db4333c34186e9e"
  },
  {
    "url": "assets/js/54.9a79aa19.js",
    "revision": "72562be1049d091da04c39921041913d"
  },
  {
    "url": "assets/js/55.f2fa98b4.js",
    "revision": "bf5880721a41fe55becb3ff8ebb44287"
  },
  {
    "url": "assets/js/56.ee935841.js",
    "revision": "30a449ef93aec7bf4436b282b2edb959"
  },
  {
    "url": "assets/js/57.afcd2e98.js",
    "revision": "c917e4d1d436208b55c517ad4cfee7eb"
  },
  {
    "url": "assets/js/58.9028c5b8.js",
    "revision": "f0fd9f07b3e7ba6d7395de12d005407f"
  },
  {
    "url": "assets/js/59.186a45f3.js",
    "revision": "788e3db64cc46ded18cdbea2b76af91e"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.4b454bd9.js",
    "revision": "5e8f88671d10f9ea38e76e3d061795d7"
  },
  {
    "url": "assets/js/61.0b0e19f8.js",
    "revision": "d9d9aeafd75544af9b2bf42e2eb88ca0"
  },
  {
    "url": "assets/js/62.267b4c2a.js",
    "revision": "c9fd874d44ff1040f6280da09f622052"
  },
  {
    "url": "assets/js/63.620e8c8c.js",
    "revision": "558a828069550a8c3a487476d35fcecb"
  },
  {
    "url": "assets/js/64.8660ca38.js",
    "revision": "e83fe461f58264acb4156df6f6590139"
  },
  {
    "url": "assets/js/65.e38315ed.js",
    "revision": "3ebf4821ed3689b8cdec9f928a01d801"
  },
  {
    "url": "assets/js/66.8537b3b7.js",
    "revision": "58ab906539033fcc8025c4779e652c33"
  },
  {
    "url": "assets/js/67.4bf5b0bb.js",
    "revision": "c833e565e2bbb5ee741b43042f9343cc"
  },
  {
    "url": "assets/js/68.216ca5c8.js",
    "revision": "c4d651dd9500ff79d1951dfd4a8011af"
  },
  {
    "url": "assets/js/69.8556a414.js",
    "revision": "f37ea408652a16a62613b1c9c5baaebe"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.6cdc3054.js",
    "revision": "4982c87ef5ff3dc444c9e170d466398a"
  },
  {
    "url": "assets/js/71.601487a9.js",
    "revision": "b2c210c68da4e9635fb35e25519c36ac"
  },
  {
    "url": "assets/js/72.c5761862.js",
    "revision": "037fba101e9633a5439675d75e0baea1"
  },
  {
    "url": "assets/js/73.d16601f5.js",
    "revision": "241e847d83b22877edccb1f746ae5ad8"
  },
  {
    "url": "assets/js/74.71a99af8.js",
    "revision": "6c9ed04359877c7bd6b90d41c9ee992f"
  },
  {
    "url": "assets/js/8.2768ec37.js",
    "revision": "1582749e28268a55fd7dcf00b87f3cb0"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.37384170.js",
    "revision": "42c883bc01601b72b9d6be7a28e18b93"
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
    "revision": "fef24c2bb2caee82709d6486672cbe3a"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "c70d6cf11702b016680204670b3bf616"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "cfaa76a05646d9c165d7b9fd80ee6ce3"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "7c1c68cefaf5b64fec5c1c2692c964e9"
  },
  {
    "url": "categories/index.html",
    "revision": "154a445ef871d3a4031174d8a430586c"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "3dea588172af8366e617ae44dd423d3f"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "b36e1b58ce5c9cd3851dfb0d49d4abdc"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "8d9a0f0e883a66935569f2a93e929210"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "4a93453c7c22b5c29c1b820a1f25d061"
  },
  {
    "url": "categories/other/index.html",
    "revision": "e4ccb16ca20da3f2a72a8321b59fc65b"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "ae738e2e658877c62a0caeb4943ff79c"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "c1e6176bfb6c1a7fd56324afcd7a12ee"
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
    "revision": "65c65c798a918283799f02f16255d6d1"
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
    "revision": "8ca673f69906084b718f025a2cd21b06"
  },
  {
    "url": "tag/App/index.html",
    "revision": "1f5b563cd105c8ed117499f3957b5797"
  },
  {
    "url": "tag/array/index.html",
    "revision": "11cf05d1383be8d02086f1b3934483f1"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "1968157db4367cbd43babd3498ce0a77"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "49964c47ccb218e0d25778fe289bd4e4"
  },
  {
    "url": "tag/css/index.html",
    "revision": "38ddb6de017a84ef46c8f64d41feed9c"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "2c39a409c3702042fbe73d098dcc1134"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "dc6ed438f83a1a2ba1b8b81f90786dad"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "4560d222885cbefe270b7a4c28e2de83"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "1ddcf21798d6819c00efdd0566777c33"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8edf2a58c43b20595489139d97a01381"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "88f4df32b1ed979ee6afcbf2abb12d5e"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "849710d929826a76baa07566d08a6aa9"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "b4cce90a980ec804a9bf089307b25833"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "caa24a2eae2dc9e1ce21b3d7532c50aa"
  },
  {
    "url": "tag/html/index.html",
    "revision": "91f9c8f307f7ad1948afff997f35deac"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "cb2c25a4289d82a2cf2d31201be982e2"
  },
  {
    "url": "tag/index.html",
    "revision": "a40729749a1064436b1539c7592605a7"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "f17d5ca95cae46767b8fb9c76622d216"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "9732c530de193b01531e206269e377a9"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "0b447bdc97814bce723c0a0cc50fc0ab"
  },
  {
    "url": "tag/js/index.html",
    "revision": "ddf8f11712615a7065fcf87aa8e33db0"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "81d446764afc69408c74dc82623a8201"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "ecc6548f25e5afb19e960ac51ab3a4aa"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "d3afb8ba636764722c1974985f04bfdf"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "c3b2d1d59ef0518f548cb511757d8d87"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "91426d73e784ae5f5dc327062de12c74"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "a64aed4b9f8c318e7a77660779aef1fe"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "a0c5055e47707c4127253d3fae6c4ce6"
  },
  {
    "url": "tag/project/index.html",
    "revision": "27c0ff41aed737436a1a4de59c77731e"
  },
  {
    "url": "tag/react/index.html",
    "revision": "b6174a9da04c3cc47fb52bdc3bf3a0ec"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "ffb73037a9055569122f981082f799f9"
  },
  {
    "url": "tag/router/index.html",
    "revision": "8136963fd92e3a90340a6f49cbdbc426"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "44f55b2401e231fbc387da7c12620164"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "67d2840d21876e63726956fb238ce236"
  },
  {
    "url": "tag/style/index.html",
    "revision": "93f464a69836571e2db0e093a4e21f70"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "61cab0cbc93fbb8afafa9a516c5da06e"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "0cca058699d284f19f6fca3f2a5a3567"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "8656c3deb3568335649ae33c931e801a"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "e39e937be831f378e25d40d063a1a319"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "5929ccb0cb04daa59d6242c29d4ba00e"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "2d18e69c8182f13951fe1b00ae921c4e"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "9f0e7dfb2928ea33f30dd362e8b4062d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "79ba39cc20a54d712b63b4fc7de91860"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "ff082b85847d1fb7f0a7167a8084e024"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "ff932c72c45cff471fd1696dfe942568"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "f5c761fc53eace307dec8ec865beb9ed"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "7e4c64a335557cf8ea8e6ad4646970e0"
  },
  {
    "url": "timeline/index.html",
    "revision": "5da50fa33fdd031e4bfcc32fd29b772d"
  },
  {
    "url": "views/about/index.html",
    "revision": "03eb57189f90933a738fade5a2800757"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "e3dafbe7f962f874857f7f9260279782"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "0c3964880a59c31df7ba07fc5e4bc23e"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "f71a082734e09e5c440cb815a21e41d4"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "d0d6ed9baf9e8d164dcd19be41013818"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "640b1ce6412967980e39b50a007bf638"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "d39889289758f4d556763ddfd3237884"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "adbc2d6b73e82997d458765a79d2866a"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "f4498d156c52f1204cbb3dc38025877a"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "d8add8837d514951e212276ddff9fded"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "92b25637735b4456a5710b63ab68cc2e"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "c50bda0fe55773c48a6788fe16ef9203"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "6a053804dc4432d995b8ed6e7843695e"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "51ad7149d4c7a8e30fe201679f16c4a7"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "6ca5353640e9e476dc2ff4899bba1147"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "b7ea5046b56f81f048293ad645a6dac7"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "0fa2ef43e2a974e51c5ea0513843b56d"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "399a20ff023f098062703c7cab3215fd"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "5c25eac273f4ee85c42b300d7271c196"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "0c23424861bde37ed0a74ee39f54a14f"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "569a479a6c8917e5634de9538bdc8bd3"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "f3b0e1959de42b429c098de9d5628970"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "f8c9091995e507bd07523afadc68de39"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "daca4a85b5df6093ccf2b95a5bee8f20"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "cf2ca8da8748c818cd009ed161b0b8f7"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "b872a67f8cbe8d053bf3454c0e72a16f"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "d028ebce628acde3b2ffb7fc409c5c23"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "b904d683d94cff01cea2796167641b0f"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "aa2869be46a64e9837bf08372e70b4c9"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "dda568b20180876befd96fffa7ae3924"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "24f228d29515122638d9fe165365c67b"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "c5edf4f617dc99089b99b2b4ec4588ff"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "c5189222c182684e993332ce213ee450"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "9b07d66406440f1d3f5b6598d24486fb"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "b0f9f251dc97c67f47c7c87da4d1fb5e"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "cd07c76b90bb1e75cade9e4934bd29d2"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "60acb91b8fd190cd5df8d7bc23ffdfa3"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "465e6e6af4376935a6d60dcf137960fc"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "15ee4b8f297ec6df540cd9b251621ea4"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "890181f03b4114a8777ce186c5302b1d"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "dfcb888964859796b5bd731ebf2024fd"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "9e1766afe699b5dd3bccc2efdc05401e"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "621ed3c798df35b1ce5ef867581efc94"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "d53db64ef03664c765d01822547209e8"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "7d45f635a2b00aa3b89df6a5aa365660"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "f81cb66e1f154e4030c86adeccafef2c"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "2d14515e721612f36b0b2fc850a0a66e"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "9cf1a85d6bb5a1c330b34d849a2f3227"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "7db21e4fe31a3e0e3e941a42af0b3712"
  },
  {
    "url": "views/project/index.html",
    "revision": "2534d643d1f07b903e6c8c4c1b5d454d"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "b9fdccb4883001a94e975a59aa26e3a3"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "b17937c3e02581009d56aac0bd0495e9"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "8e91423efe443311acff142db3f64974"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "bf172d66518712a02fe115fbc2c4b6c6"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "cff404636e191ef4037cf1850485db5f"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "d9350615f17e061e6d3f60341ebf47df"
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
