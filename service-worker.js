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
    "revision": "1f84a2e061cea4d4ceed8fc375c0dafe"
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
    "url": "assets/js/12.c32e6c64.js",
    "revision": "eef115dda486d170efbbea94941b5e11"
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
    "url": "assets/js/16.e6ae8cb5.js",
    "revision": "97bf77df58f9e2999b243803842b9f46"
  },
  {
    "url": "assets/js/17.55addc5d.js",
    "revision": "1c836bac48a78dc67c94196020a90879"
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
    "url": "assets/js/23.a770d255.js",
    "revision": "d2eb0576dd01805557a6afb77a46e21a"
  },
  {
    "url": "assets/js/24.1ea7bb6c.js",
    "revision": "c22cd6ce0ae04d13ff5eff75a336024a"
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
    "url": "assets/js/27.2c879645.js",
    "revision": "e76e7da795076e266ee7dd42f3a44cca"
  },
  {
    "url": "assets/js/28.b9a0b556.js",
    "revision": "3065107a75af1ac09df92947ce00b0e7"
  },
  {
    "url": "assets/js/29.0ab27415.js",
    "revision": "566cb610daf68605655712b972af561a"
  },
  {
    "url": "assets/js/30.b8c0e7b4.js",
    "revision": "e019b89a380484d38e8afe4b925b5c19"
  },
  {
    "url": "assets/js/31.c27487a9.js",
    "revision": "38d7f6391dc9aa35de703499a1c443b7"
  },
  {
    "url": "assets/js/32.00af4855.js",
    "revision": "5c06b907940801121aeb688675b92903"
  },
  {
    "url": "assets/js/33.45ad7c16.js",
    "revision": "66adb389e919ef0a2645c003e9425293"
  },
  {
    "url": "assets/js/34.d54e72dc.js",
    "revision": "a6586a717cfff4434be924ce872e90a5"
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
    "url": "assets/js/37.7e2bb595.js",
    "revision": "796ec5deaa8e2ee560be8f1377afb84e"
  },
  {
    "url": "assets/js/38.a2b86df3.js",
    "revision": "e3a04c381a64c450238e695d9143e2cb"
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
    "url": "assets/js/40.ad424c90.js",
    "revision": "e5907fbf6d21e0043e1f8e1d5a088226"
  },
  {
    "url": "assets/js/41.ba2e5477.js",
    "revision": "07832ea2ccf1ec569abcb10b1ab085e5"
  },
  {
    "url": "assets/js/42.575a69b7.js",
    "revision": "7272f3fc55c0c08aa86a33089ca013c0"
  },
  {
    "url": "assets/js/43.3c342ef7.js",
    "revision": "4d64b23cd7216c514f9d5526cd058722"
  },
  {
    "url": "assets/js/44.9cf265fb.js",
    "revision": "26900be3255a95018fa454577809e344"
  },
  {
    "url": "assets/js/45.4bc86690.js",
    "revision": "9e1cb55e25fe3b0e5767505a5c5a0290"
  },
  {
    "url": "assets/js/46.5df9d0ed.js",
    "revision": "9fff5d85165d0f2087fe6277469987ea"
  },
  {
    "url": "assets/js/47.24769579.js",
    "revision": "09f9eec5155de7dc102a8b919d8816e7"
  },
  {
    "url": "assets/js/48.48b8811a.js",
    "revision": "ca489d6dcae15afb526ac6102b99e0ae"
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
    "url": "assets/js/50.26694287.js",
    "revision": "2b13f8768206a17f9d6637b568d3660b"
  },
  {
    "url": "assets/js/51.3c4daa29.js",
    "revision": "2e5a8a779fbdc6abb7795f2bdb38f38a"
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
    "url": "assets/js/54.a18b5f23.js",
    "revision": "a711d8d1dfcfad99f4c5941ef8985b5b"
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
    "url": "assets/js/58.dd2d61c3.js",
    "revision": "1f9fcc07f4e60e4d1fe17959c4e57b19"
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
    "url": "assets/js/61.18bff03c.js",
    "revision": "98466563a1f265b0a053a5b7abb0c64e"
  },
  {
    "url": "assets/js/62.2f7d1b04.js",
    "revision": "9d8d4b2bbcbae44e3b82fc939040f6b7"
  },
  {
    "url": "assets/js/63.b38c9cc1.js",
    "revision": "5dd515e4071b2fdf3f72a3a9c095452e"
  },
  {
    "url": "assets/js/64.8a350a45.js",
    "revision": "76cdc2a53f4d142f2f5e795b270de994"
  },
  {
    "url": "assets/js/65.856fe08e.js",
    "revision": "2725de05ffae904b1ac124b6616b46b5"
  },
  {
    "url": "assets/js/66.83d28a1b.js",
    "revision": "c160e14c7c91274cbca833db41998a1b"
  },
  {
    "url": "assets/js/67.49df9875.js",
    "revision": "5da7169cfc587c0d251cf54d58979e1f"
  },
  {
    "url": "assets/js/68.f4a4fe1b.js",
    "revision": "d0b775fee0cc02c5630482d08974d263"
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
    "url": "assets/js/70.39f8b90c.js",
    "revision": "bc8845e37af7da63e1ce9bf77ec9eb08"
  },
  {
    "url": "assets/js/71.d53ac5c9.js",
    "revision": "018d52c0016df06666ca7f1c5803c276"
  },
  {
    "url": "assets/js/72.f69fb48e.js",
    "revision": "14550b81a511ecfa78dc361c2684e738"
  },
  {
    "url": "assets/js/73.d5c7c624.js",
    "revision": "041f65c92a319399a871bec330ab937b"
  },
  {
    "url": "assets/js/74.bafd475b.js",
    "revision": "7a736a1519d1c305446a8af19eb1094c"
  },
  {
    "url": "assets/js/75.04f31868.js",
    "revision": "76ad9b65be61001294f421b1ce78f015"
  },
  {
    "url": "assets/js/76.67d41cb8.js",
    "revision": "df68007c448c6cc37a3e021e0567dd94"
  },
  {
    "url": "assets/js/8.8bbed9cd.js",
    "revision": "b2f0b478fc7fc55cc0f6c16c47937f33"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.84bebca5.js",
    "revision": "77f4607492c048fcaf25e6925cfc3668"
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
    "revision": "81499a64924a422aaf94d4cf68b11237"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "531465dc22407a5941ce8c61cd948d19"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "6a3ee14e7e0495d9485210e5efaaede7"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "850526030c212002d5a536745c012fee"
  },
  {
    "url": "categories/index.html",
    "revision": "df3e6025bb5bf5ae4b5d288ebd7370c5"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "2ca8ac645fdc47098b91df419e40b0b6"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "bc09165f61c94c70378449f80e65291f"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "8abbbeceaabd8ce3482a911fcb714753"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "0fc330246bc3168808aeb973b08f47b7"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "d77c6b2b1dd837875006ddd8f8a60ef9"
  },
  {
    "url": "categories/other/index.html",
    "revision": "708c5d006a7b067e7ec7a662d3d152a1"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "10aa067de45fb33ee91c3be070d8e893"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "02a2eab117422a0b91fc2f9f21a65b72"
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
    "revision": "5ab69d66a77bb73fa7339de061520bcf"
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
    "revision": "8c09852e904a2965da9db811f98aabd0"
  },
  {
    "url": "tag/App/index.html",
    "revision": "d165d6c4405d809e896f027f0ff8ea49"
  },
  {
    "url": "tag/array/index.html",
    "revision": "56f40f0f4fd05518e2e4d13f3b62a12c"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "3b4df1fb808f5b520f020f552a548005"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "c45de2f350e4e56e38974f5470ae4fb6"
  },
  {
    "url": "tag/css/index.html",
    "revision": "3d09eabeb9e48fd28c2e0a5222febfe0"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "35ef006aaa822a06d6071797266125a3"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "66cb90dab4ab640e9a4849652b589b30"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "01bb67b1ec74001f0e59324559d5b025"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "d525d0bece721400f8634de9533d4112"
  },
  {
    "url": "tag/git/index.html",
    "revision": "95c5ff2aa26110a6def1ae1e56cabbc3"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "1511afc6955c585aeda4f49f234743c4"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "4c388751aae69be894910fe37167b892"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "add9d8b9a0c9e4e4855adef837380264"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "8a75cc0e13b7ef317f8d5724e66d6abc"
  },
  {
    "url": "tag/html/index.html",
    "revision": "adf61afbb16585090057387ceff30a68"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "6531e3bb6d2002ac06e30cf423fa07d6"
  },
  {
    "url": "tag/index.html",
    "revision": "1cc93e6352d475a350c51a28c43c9b9d"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "9ed4cc48e6990f70169d04e31e9026e1"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "9e1b12639aefc302722a37a51b6413d6"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "83b81c4fdd1cc9b30c6c3e550d2f813e"
  },
  {
    "url": "tag/js/index.html",
    "revision": "bb3cedef8b4089bbb7141f30d851a1ac"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "83c35b0b9ad62b195f5378fc155ca01e"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "ec38ec0d8cb1d357fea2e94620e43d19"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "b3b45a27810efd802817b314140e9a30"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "3b18bf79bb34b033278a149925223425"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ce4d56c4c8a6da61d430fc80013b51b2"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "9805bbdd833f16c6476ee23065dc35aa"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "f5511f276b034c1e1729f6ee7d7d215b"
  },
  {
    "url": "tag/project/index.html",
    "revision": "94f0245de27cbac145503f2baffca885"
  },
  {
    "url": "tag/react/index.html",
    "revision": "5c96ae40b004030608696416f510db99"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "72dd2ced54a35a58606ee03ff74f8fe6"
  },
  {
    "url": "tag/router/index.html",
    "revision": "6d20f1976bce1a8eeb9199b22dfb2b2a"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "f7e45a81b744b7a8fa5775250a3fdcca"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "a297f8845dce62dd76766367602d0947"
  },
  {
    "url": "tag/style/index.html",
    "revision": "a33e133aa0b6d9b241fa458c52528e0e"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "59d58b344015cb7fdc72ed0957e62877"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "942979c6f4fd953dd9ec21bacbf65b5f"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "bb94cc963d00f230a4381596f0d59789"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "802b7ccdc1b4d883059898e7a39e6509"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "c37a990d27c44cb57d61e48073350542"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "dca4d4aa669d3bcbc1a13dd729976794"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "538b0c2a142cf2c628fc8e95360dd591"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "80d571da11d978b8a8e1170b27ac6a42"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "8ea31ec006e0351ec1ba471c2757fbca"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "93d048aa6695f1623898ffd00f68bd82"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "142784b9720fe6bf3a228cb65d6c1ac1"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "e0c109247203025e4111a8a6bd7cd700"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "1e9f95b4753d4e46259faaf928e30ea5"
  },
  {
    "url": "timeline/index.html",
    "revision": "72c9240866d3cdf9bd238d2eb01242e9"
  },
  {
    "url": "views/about/index.html",
    "revision": "64a425c9eaa68aa1c54930456f1780d5"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "8a90b2d447117ed2dd8ce911edaa818c"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "8a6c2ed8bc94e724a6167cf715330c16"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "81915e383a36093d3a07768b608c5825"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "7bb035259e141da115dde7b61ad7bc76"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "4c7d0e0db6902856cfe7a6fe7d58ddaa"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "02e4185ef4bde811788edf8ea23bf94a"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "c1c888cd893c95a8b5993850359889b4"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "d84733ff3474e3bc485dc4acdb487cd8"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "b59e2ea63dcbaff01b9ae19c08762681"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "ee3e01e5d7898e361b7589ce87aa2ef2"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "ebe28a364f4e5a75e9a8fbd5ffcb1bbf"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "a2d319929cb5a950106805e6191e4151"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "34fadf0ca3ccbf4728fbb0a6ff225c94"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "ad5b2e25aa22290cea069e41455625cc"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "19644af95bf6fc7948d00d377ac995b3"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "cf7ca0e277b47c04243a28dc1acd0709"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "aa43ea34ec6d9b119e021859ff7ae989"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "941fa9e21a0e2c1d69efa5c96c3c0847"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "86101bc5759c057f214176f762559ff9"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "05ce1b1a610ce69f8b7a6c9388f7f6d8"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "bb53ce57bfb7c3943ae49a03bebce69e"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "b054fd641d6177d445d38d378f84bed9"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "4bfeb4de10678219c89b83b66599a49a"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "d73bd196ee4a742a38aeb1f4ffaaf8cb"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "7ae0b1b13c625617804881fc352b8eb9"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "030121846a1f7e0b346cb577b8b757a4"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "afee6027aa28150c82cd68ef16eaed25"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "59ce9c717094c10df6ea6b551528d491"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "afe4226e48df27ed45bb77e249e0049d"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "014dcae18422f4abbf58758bf034c83b"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "06d6ed182e36604742758ee885bd8839"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "d20188663b011358d5d3956a480e2f8e"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "cae5ae3e9a1bd563f33ab662d725a04c"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "c28259139abffcd04667cc0f2e24170a"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "10c4a8d5c2013cd5114c1a28bc2cb2ad"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "d29cbfc916b0b45177c2beb6b5c29cbd"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "b7013ff7627125d33be866270791d5f1"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "9ee9830ac883058e4b6a7fc0eab5ea9e"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "0248e152c4bfe0b1ff557f08056b63f8"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "c273d94f9630e9771999dc1074f4b892"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "7f8a3b4929c7736bbf6815e6c7dc6e50"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "151d98c6e9b374028bb6badee70ccf9d"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "ff59f570110b93ec298b04bbc71488c5"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "3a071f8d021ea03b1f7af1fc4f0091f8"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "ecb641c66332c6b9cfd9c9c0342af3d0"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "2d5ed2e5dfc76701c4e41f03dca7c24e"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "202b8ee924dff3373ba19553a31362b6"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "ff42f7aa1e06026dd893cbd17bef490f"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "46de92bde1ec1b6e66a51984c1c58ed0"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "fcdec8c8b3ef16a5715b4421e76962ae"
  },
  {
    "url": "views/project/index.html",
    "revision": "d5ee5ece09ab89f0b6d936d1c6693dfc"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "426f31f753c9e5728f2522e3b3ecd1a8"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "61ab225d00737c9da2641966d8429344"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "4bd5dcc9a1ada4c4a3e2cc43b1dae262"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "3cce59d436e9350f84fc2e826704fbbc"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "37ccc6559a4c3f2ec3ff29c536e53947"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "597c6f47cb7eec52208b3840085a6357"
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
