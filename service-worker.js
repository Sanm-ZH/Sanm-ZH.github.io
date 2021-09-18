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
    "revision": "d89d816324457485b803851ed2aab972"
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
    "url": "assets/js/12.18e3aeb3.js",
    "revision": "a7f61258ec328899441e54b418af89df"
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
    "url": "assets/js/16.1f2d4b58.js",
    "revision": "c57553dfdb010423b5d55d9eb65abf2c"
  },
  {
    "url": "assets/js/17.932cf385.js",
    "revision": "82d9cf5564dd09bcbe181d8269baa5e2"
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
    "url": "assets/js/20.565a06ae.js",
    "revision": "d9f195009e7c23d1147d6a0752adcb10"
  },
  {
    "url": "assets/js/21.9fa7b2b8.js",
    "revision": "afb819ef7a465c07be84371dc6deb513"
  },
  {
    "url": "assets/js/22.93491b18.js",
    "revision": "1cf80ad17af45da7563ffd21cda012ab"
  },
  {
    "url": "assets/js/23.acea7c86.js",
    "revision": "69c1da38734568b6f4b3c9e852f35e1f"
  },
  {
    "url": "assets/js/24.d087b8eb.js",
    "revision": "77260938e3f348dc21977a5633816c08"
  },
  {
    "url": "assets/js/25.6c7b1ca9.js",
    "revision": "de089ac5c7f4c9518e4917e729eab1ea"
  },
  {
    "url": "assets/js/26.a3947108.js",
    "revision": "869c36bc0c3ae90f6a4d5f1abad52c5f"
  },
  {
    "url": "assets/js/27.7598234b.js",
    "revision": "12d530380c35ac8750521839bf047194"
  },
  {
    "url": "assets/js/28.a6840d05.js",
    "revision": "bf0e6e9817436ddc96c99dc6394ebe01"
  },
  {
    "url": "assets/js/29.94d39fe6.js",
    "revision": "7401c5636941397bed5197e948fc5330"
  },
  {
    "url": "assets/js/30.fc155550.js",
    "revision": "3bdf3bcb04e201dee40926c3f2610895"
  },
  {
    "url": "assets/js/31.50f3ff8d.js",
    "revision": "ada70c732861be00034b8f58e1c2d24a"
  },
  {
    "url": "assets/js/32.638da158.js",
    "revision": "47f9082d0cbcdc595ed7d962aef6137b"
  },
  {
    "url": "assets/js/33.5247c7bb.js",
    "revision": "c1a872cc8d238b392de70dc7fc16d1dc"
  },
  {
    "url": "assets/js/34.44e054a3.js",
    "revision": "ed753e762237b85735075fbb7d057ce3"
  },
  {
    "url": "assets/js/35.fadc514d.js",
    "revision": "3e9923f064390bd1ae00df91b0d82dd8"
  },
  {
    "url": "assets/js/36.6d1ec829.js",
    "revision": "6550efa840c5bc646dcaeba9d4368d9d"
  },
  {
    "url": "assets/js/37.0e98a6be.js",
    "revision": "b62f92fb53817ed612eabcea1afc6c7f"
  },
  {
    "url": "assets/js/38.f0c746df.js",
    "revision": "e8cee20c02261099e71e224c3afd1dfe"
  },
  {
    "url": "assets/js/39.fb0e1d50.js",
    "revision": "57b919841911893afd88568410e75462"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.7dd33af7.js",
    "revision": "5694fd0eb42d66e7aab86842d34005e3"
  },
  {
    "url": "assets/js/41.db5c8efe.js",
    "revision": "bfa34eef1b0223d132b463ab66377905"
  },
  {
    "url": "assets/js/42.fc4f7407.js",
    "revision": "a01e73a58c28af205bc6082dac805f85"
  },
  {
    "url": "assets/js/43.3313384c.js",
    "revision": "5d2029e2ca7cfeb5cb7b8b33897e624a"
  },
  {
    "url": "assets/js/44.61e5f3e5.js",
    "revision": "4bc5a8dc67d5d9d13ff6a12677739bcf"
  },
  {
    "url": "assets/js/45.f7694ec1.js",
    "revision": "bf7bc76755537d9764460fdb93d6621e"
  },
  {
    "url": "assets/js/46.c52c5c38.js",
    "revision": "41267d80c5f3e8103c6e46128c4f4624"
  },
  {
    "url": "assets/js/47.bacc3985.js",
    "revision": "750b41f92d0df04d3e699d8174261a1e"
  },
  {
    "url": "assets/js/48.26e4d526.js",
    "revision": "375dfb6770e3178fcdef97c8a4b9b6e5"
  },
  {
    "url": "assets/js/49.02553645.js",
    "revision": "1512eaf2f5df79e60d46cd869c0c4c49"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.b86edacc.js",
    "revision": "77f251008c1af916178cb8b1beb37e36"
  },
  {
    "url": "assets/js/51.36ac630a.js",
    "revision": "ad9ced30ade69ec57ac4c1da286299d0"
  },
  {
    "url": "assets/js/52.caf8ef89.js",
    "revision": "4924b683f3fdb20f3bf575b2168aafcb"
  },
  {
    "url": "assets/js/53.388c042e.js",
    "revision": "9d4b2d3caea572e5d27978743aaa7fe0"
  },
  {
    "url": "assets/js/54.536f16cc.js",
    "revision": "04a6521639e4e8fd33735351dbaa21d5"
  },
  {
    "url": "assets/js/55.1201d71a.js",
    "revision": "3f0ead8818f3c26a327130b24dcc602b"
  },
  {
    "url": "assets/js/56.fc2aeca6.js",
    "revision": "f335820fd7e6cb115b36914ff51c971f"
  },
  {
    "url": "assets/js/57.0e235e45.js",
    "revision": "e956a1aafd4e85bb51fbf4d678852dc2"
  },
  {
    "url": "assets/js/58.6051281b.js",
    "revision": "4687a8793e5854f874b73a7c097f6007"
  },
  {
    "url": "assets/js/59.5a23e5c1.js",
    "revision": "64e8b1740e40ebf39e1a31a5641fe379"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.bf6e141c.js",
    "revision": "5ecbfe22292a91d61886c244eec9ff96"
  },
  {
    "url": "assets/js/61.2959f5c4.js",
    "revision": "aa937cfdc84e6e5e1255b7e426a9fe8a"
  },
  {
    "url": "assets/js/62.fab0f7ad.js",
    "revision": "7e2bffa2ffb1c66dbee936ed96b11ad9"
  },
  {
    "url": "assets/js/63.925aa6eb.js",
    "revision": "beb5b1ca0aa47e7f557dfd0cef7c692e"
  },
  {
    "url": "assets/js/64.a8a6f46f.js",
    "revision": "e81fca2a42158147cec4182617367178"
  },
  {
    "url": "assets/js/65.6214038e.js",
    "revision": "02652f7003fe8a473ca394e1068beeb4"
  },
  {
    "url": "assets/js/66.a14b73e2.js",
    "revision": "fc8f837f2f06b3dd9745eb2073b5cd19"
  },
  {
    "url": "assets/js/67.06bcf8bd.js",
    "revision": "447bc22dcda62e9c1a3207291d08f70b"
  },
  {
    "url": "assets/js/68.a0c6c99c.js",
    "revision": "f0a908ea4c4dd7631cabb91e10bb4ac7"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/8.16182210.js",
    "revision": "a168ec365dad2d153f4abdc169ae3982"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.612edf90.js",
    "revision": "ca5ef37283c1734eef80a824f644ecbb"
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
    "revision": "7db7b0f37dab2a2a9d05a55b479a611f"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "8ba78bb3f71e310ff2b1a1c561f20e18"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "04a1f518a2f9ffe736cc448261f38d90"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "1f8110505980a076b61829e62fb29676"
  },
  {
    "url": "categories/index.html",
    "revision": "46ae91135ed84b08a631ade5ad3ea99d"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "410060fb0cfbea7389bc7d88396f620c"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "d02688331afa5ec764d8111326772cf3"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "a891597b4ab7b11d4f6fdca9b00fd761"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "0c95e8920ef280f3bd0395e296d150f2"
  },
  {
    "url": "categories/other/index.html",
    "revision": "53cacf3dd64af9b18fc76159f96b8349"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "23e9d2856152f733b6d54d99f1789dab"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "5ec79f949f10dcca06c3f97eeb65e3fd"
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
    "revision": "4caff8abe2a4991e514f585ba8912363"
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
    "revision": "4ffc99890c548979de4a712ca9eb6a04"
  },
  {
    "url": "tag/App/index.html",
    "revision": "d703dbd31b3bc020d2ec180f2953c78b"
  },
  {
    "url": "tag/array/index.html",
    "revision": "9c4a58cd5b1dc450b68d5d0eb6162b9d"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "0741df55053023af9675f264a0116736"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "52c256be366b25a4c39fe834995df719"
  },
  {
    "url": "tag/css/index.html",
    "revision": "2e94c6d3c2e93f6af04084cb89ecb040"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "7be0e8841a3bd2cd788633f9796a9276"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "2595c3558d248ef63515b2d9a4adf0ed"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "a19659b5afd0dd37d79746ce52f3fa35"
  },
  {
    "url": "tag/git/index.html",
    "revision": "95ead294d15d518c66e40401042712cc"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "9ffcd8a7e0bfbadb9448fa7e83dc9882"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "b15b2ff0ce66ab7bfa0804c345a4fb49"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "b7e4b36e0ccf0ad078847ac52ff68517"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c6185b74e431b2c7bd93304f91e35903"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "27b8b29645b15b555b642341652bf081"
  },
  {
    "url": "tag/index.html",
    "revision": "5972ae7e1e9e2c14f8a1434a6eb04231"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "1a2e5b931cd71975e081685221588835"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "8f7ab98d64565f57c61dd2278d038f2f"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "e0122cc4ad9c0963e032cf090ea23e5e"
  },
  {
    "url": "tag/js/index.html",
    "revision": "8c3516639cfd0648cf3d0fc920ea17a9"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "66c895957bcaffd0bab347c61541fab9"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "fcfa27af3f58c3f12f37c0eef4b19565"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "c0ee25e2824d2b288589d1324ee471c6"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "1e30308f3a7aecd09b8f80344ac83340"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "5fb9393a926f03a04fbd3216ce8ca149"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "a4603f9fdce28c46e18e0d1268b02169"
  },
  {
    "url": "tag/project/index.html",
    "revision": "bc8b863e64b4e0dd48319b5503e2c1a0"
  },
  {
    "url": "tag/react/index.html",
    "revision": "2601cea8b5f97e10a8a35d95fcd76e37"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "6e5ce0340418bd90541eb0a42aff91aa"
  },
  {
    "url": "tag/router/index.html",
    "revision": "a9deb1cd1c918634d886fe88ca7cc412"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "c3abbe606cc878dae7b13d1196dcec52"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "b1b9192ac847f3174d3a03f29b878fb1"
  },
  {
    "url": "tag/style/index.html",
    "revision": "193ec4856ace2f54ad39055a5b1bdbcd"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "4d1775020c7448760d0819f8890fb191"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "0487b006021859b75dc903b50df5a148"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "e409e249866aad776f7f39c16c99b8c0"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "9bf36ad31cfaba1ed9ce8aee0287a35b"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "2f68f94e8aba4164b4240e318775b488"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "ebf77cac704ec6161747e3ba5ed99286"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "048c809ce5668d80fc3c8db213ff2b3c"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e93915ab1c089a2f2bba6a94d7165a0a"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "143de44d9b72fd90a9b0b193bd6130f6"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "1450cd05a2adc60baf8e445ba75a1026"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "ef86411096198df5c5a453fa64cd8957"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "560eb29cc70923fc7fbcb32cd897f14b"
  },
  {
    "url": "timeline/index.html",
    "revision": "39bcb512bed440cc4710be45912fdc28"
  },
  {
    "url": "views/about/index.html",
    "revision": "e6fd4601e6747a2a0eb8000a77891884"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "e4e867f33e4982c82faad516485fe510"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "53d4f3c4cefd77ac0c6c69ffe2ba9042"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "f7bddd8a5a600b96587cb7cf8cba9fe0"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "c295355be27893afa602024ca39bfb76"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "14e983cce740fd6fc97d925479e2231d"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "5bb1e7fd6cb52c2c9c493b4e95dabfb8"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "304c5c45683e278a93dc07a3fab58426"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "72036d9fb2b8a4177500cab20b0e9e6f"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "24769a933b2702fa33cb7d6a7ea66ac8"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "0643bfea53194a651e30d925e1f8772c"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "3b35d9af86c797c797788d40ccae85bf"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "2dfb53535fc60adefe35acd817299a8d"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "adf421f047f60abdc7e7dd1a23956515"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "ff445aa6344511380dd6e6d4c143a374"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "103029d58c64507c4e9da1c205c04460"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "2af8f0a79c20ad32dd53e350d8b45a89"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "4c945319e2ab6f124ed797ba25a26720"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "e6ac5ba89efc3ab07163866075ecb3df"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "8f8be17528ecde3d3ab14f7bace23caa"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "a6627fa8268539422b9b757e517e6b0b"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "5146ede0beafef0a6fc9d8d176bb2f5f"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "629786cb68b68b2b4dabb69da52be8a7"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "d415f441d96e3c1be8697b52381afb39"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "d7166fa0a7c71d5a0cf33a3736b0df0c"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "3bbcd97ccb3b7e439fcc6087e79be1f2"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "ba1acb8ccb19cb67293387a86174f9f6"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "797b48f380acf408b1e34a9bcd481bfa"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "5da0f9a150c2841d7c33f99cd0e6bcc5"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "aa33b95e9710b1c0adb0eb12bb59f680"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "660e936c8e5f00387a1e708ca43ce3ae"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "769bff3a6983f7292126a6f50f637f74"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "4355b1a30f3708ae5a1a936ceef7b160"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "f5718b55090a06076d8c223fb56faa95"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "15e447d06ef41ef7bca06715e765788f"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "7afa602c3ae6e7a5fd4d4065eb2d7f56"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "c01710c602724031268132d06ac1a4dd"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "83645658973d009fbaf0204d15dc91c0"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "3d3e63eab3ef5aebb3f25520dca43b4c"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "8262a36118c251954dbe8f1149e94776"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "cf37a2d8e6079961530f79b6a53ee7e4"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "24d53c2574802dfcee05d3a21b456124"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "945aa3937f3600a43d9260d194c6691f"
  },
  {
    "url": "views/project/index.html",
    "revision": "87b8f02379a87b1438ef81012afff6ef"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "dc07d631ec622338d236a9f6a4fb6d9a"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "21f12c3927d5b5e691a682ff7046366c"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "91ab8eede8af109f17cdfbc182cfa74a"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "d6012761c1d9ac750c11d83bd832c1a1"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "073b278ad1ca085d950cf9b898df956b"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "f2c327e262c744317ba823b026c3e5ae"
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
