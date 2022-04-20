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
    "revision": "5c919c2e0d004984fedc60878c13ac51"
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
    "url": "assets/js/12.bc270c2c.js",
    "revision": "5836caac95e500d395e558b1c45916aa"
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
    "url": "assets/js/16.78c85eeb.js",
    "revision": "cef37685232b5de38aee67b007a10165"
  },
  {
    "url": "assets/js/17.af257281.js",
    "revision": "ffbc560c2d40e2e7bb5f218ac2a96857"
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
    "url": "assets/js/22.c3c65816.js",
    "revision": "d8e788cbca5948c0c9baf923a0950817"
  },
  {
    "url": "assets/js/23.6566d17c.js",
    "revision": "5eee3b513d08a6036584062a0b97d6f5"
  },
  {
    "url": "assets/js/24.e8d6ea93.js",
    "revision": "33e4a55be3016eb1ac9b39f45d196930"
  },
  {
    "url": "assets/js/25.7326f3a4.js",
    "revision": "f5ecdf478de16669ac2717939f03b913"
  },
  {
    "url": "assets/js/26.06757a2f.js",
    "revision": "c45883129b6fabdcdcaedd10dcc846b5"
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
    "url": "assets/js/29.ccf5eeac.js",
    "revision": "9c9a69a713921fcbe5b725ab2cf55473"
  },
  {
    "url": "assets/js/30.2f61f800.js",
    "revision": "3a8ab08d2bcd7e55194dfa917cc309a5"
  },
  {
    "url": "assets/js/31.8f70eb26.js",
    "revision": "ef9b16b35264b920914a6fda46f3d1dd"
  },
  {
    "url": "assets/js/32.b490e248.js",
    "revision": "11d163cd6a014ebf01237baad362a311"
  },
  {
    "url": "assets/js/33.108605df.js",
    "revision": "7031229b2f657ab4ec6d0950c5db39a8"
  },
  {
    "url": "assets/js/34.d7f07cea.js",
    "revision": "749b6349919092d49f3651b427ddb7e3"
  },
  {
    "url": "assets/js/35.9417acb0.js",
    "revision": "be3afbe79b36ba7abaa1e6844d203c51"
  },
  {
    "url": "assets/js/36.61976d83.js",
    "revision": "6dfe4d5faa1e9ab8c31dbfd25fdbc3f5"
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
    "url": "assets/js/40.a2c93067.js",
    "revision": "dbfc7a4aa27901b30ea779d55b04fbd1"
  },
  {
    "url": "assets/js/41.38b72106.js",
    "revision": "77b2c2dc3136ebe98805df8af85fad37"
  },
  {
    "url": "assets/js/42.ec17817a.js",
    "revision": "c410af3a52a975d5d541d5bb793bb864"
  },
  {
    "url": "assets/js/43.d9aaf73b.js",
    "revision": "b5e4b645a624083dff06694d4b2c88a9"
  },
  {
    "url": "assets/js/44.30345fb9.js",
    "revision": "ee86abdec840384f6dde0f2aad5fbad7"
  },
  {
    "url": "assets/js/45.72da343b.js",
    "revision": "9d26504dd5aabffe4f04f2b46fe8b295"
  },
  {
    "url": "assets/js/46.6205d764.js",
    "revision": "38656e38f64a91ee6a2a9ba62db1b89f"
  },
  {
    "url": "assets/js/47.bd915dcb.js",
    "revision": "c0c2ed933ceb299ceb9eb7e935024aea"
  },
  {
    "url": "assets/js/48.6b8a67a7.js",
    "revision": "c66cd1125e355964ee56e76299c16170"
  },
  {
    "url": "assets/js/49.bc8ddab9.js",
    "revision": "d0bff3653291a19f154546ddfe2d1a0d"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.d87c3130.js",
    "revision": "adf0f5d69042aab9debc33d992b75d7f"
  },
  {
    "url": "assets/js/51.5f4a187d.js",
    "revision": "63d229698b7e78db6336f9256168044b"
  },
  {
    "url": "assets/js/52.30cbf94c.js",
    "revision": "75c8b7f80f41b87bf5dbc3d5fa0c916a"
  },
  {
    "url": "assets/js/53.07ce294d.js",
    "revision": "8dd575bb6cb96ee43cc05453def92fc1"
  },
  {
    "url": "assets/js/54.71ff814a.js",
    "revision": "1a51a2c8717474122df7bad3548285a2"
  },
  {
    "url": "assets/js/55.12377039.js",
    "revision": "127979f799916b4a789b0e5b333ff7e6"
  },
  {
    "url": "assets/js/56.fd7ee72c.js",
    "revision": "fb9ca50c717c6b09cddde288cc32e0bc"
  },
  {
    "url": "assets/js/57.c52c246e.js",
    "revision": "0b93e8de00b33db3d5fd344d367d0fb1"
  },
  {
    "url": "assets/js/58.7ed71750.js",
    "revision": "94762b29513df2edb81435485729a9c2"
  },
  {
    "url": "assets/js/59.bd7741a8.js",
    "revision": "4e9f94023793ce8b8f966441da3bea79"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.6e6a241a.js",
    "revision": "60507a67b257f30b55125bbd827a5394"
  },
  {
    "url": "assets/js/61.be2b7c70.js",
    "revision": "121b0d6a3f313eadfecb3233aaa797fb"
  },
  {
    "url": "assets/js/62.4b9d1b51.js",
    "revision": "a88016502cbe70410f4875451c1f6765"
  },
  {
    "url": "assets/js/63.15a41875.js",
    "revision": "16955af7923e0897989ef1f6372f9c27"
  },
  {
    "url": "assets/js/64.e9b6a76f.js",
    "revision": "ffea23e67cfc3091243161d442559d78"
  },
  {
    "url": "assets/js/65.4194c48a.js",
    "revision": "9c07b037f1d7948dd2028bc9f5ed454e"
  },
  {
    "url": "assets/js/66.60260528.js",
    "revision": "cbdf62af9889dab19cc4a761648eefc8"
  },
  {
    "url": "assets/js/67.26ded9e9.js",
    "revision": "059c5d1347a4eca7d67afca684ec4ace"
  },
  {
    "url": "assets/js/68.ac46adcb.js",
    "revision": "c96a505ad575aa0d57fa893baa84f801"
  },
  {
    "url": "assets/js/69.a84471b4.js",
    "revision": "7090fa902b34ba3c4b937db4a6331f9b"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.7f13b181.js",
    "revision": "4c50bbac0ee77cb008d1813610bcdb6d"
  },
  {
    "url": "assets/js/71.819d5365.js",
    "revision": "207a088c4fdd8b69459ede8e6ffe1aa9"
  },
  {
    "url": "assets/js/72.5a99f9e4.js",
    "revision": "3ee776f24ae7eb269815e4b01488cfb5"
  },
  {
    "url": "assets/js/73.81214c42.js",
    "revision": "0e52584f7d576cdfe34788226dd11430"
  },
  {
    "url": "assets/js/74.d7c82612.js",
    "revision": "449a55540625d2672c5f34fbd94c6a8c"
  },
  {
    "url": "assets/js/75.47e21442.js",
    "revision": "61f7994331fdd6fa050c65e93260a3c9"
  },
  {
    "url": "assets/js/76.60510056.js",
    "revision": "e12bcc8f3287ebbdc41455d76f6396f6"
  },
  {
    "url": "assets/js/77.c3dcf6a2.js",
    "revision": "09645f865e80dadb269f4e52e34890e6"
  },
  {
    "url": "assets/js/78.16aa48b8.js",
    "revision": "ebbfa8dec7790d5de969ff712cacfaff"
  },
  {
    "url": "assets/js/79.09d46683.js",
    "revision": "6f4c7c73473dd148b43ce2896eb1d2bb"
  },
  {
    "url": "assets/js/8.d0a11db5.js",
    "revision": "7d37d11592a9ea48a943d72bd0dbb6e1"
  },
  {
    "url": "assets/js/80.c65770a9.js",
    "revision": "fb0192f8094f856627f5794cc767ab85"
  },
  {
    "url": "assets/js/81.2e66957a.js",
    "revision": "bc7f7e4e318cea05ca1a01c6d51b540e"
  },
  {
    "url": "assets/js/82.645e05b1.js",
    "revision": "34ca5e1a3f3d017c93a57657d655667f"
  },
  {
    "url": "assets/js/83.9a7381a6.js",
    "revision": "83f7a3fd06342e08366221b2f4dd4c39"
  },
  {
    "url": "assets/js/84.e2893447.js",
    "revision": "0a2a0337cef048dabadc457aac53cb13"
  },
  {
    "url": "assets/js/85.5079192d.js",
    "revision": "c86aaca5adcb1ee12e138bbcbafe5ade"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.330af81b.js",
    "revision": "b1a6a8dcb1b2315dfb60834f0f93465f"
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
    "revision": "7d0f6c7d054c87769e491b74884cdbcc"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "ecdfba00f07277fdbb7d0721292a6e2d"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "46bc7eaab2ed7f8e21676466af72ac97"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "8abb9fa9dc71c917cfb13e94d46d1f7f"
  },
  {
    "url": "categories/index.html",
    "revision": "517c8b232cafee5f335b19b3f557b68f"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "d5b9f69736e4a2acc35fdefd0f9ab4f3"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "47896f5f6d35d346424677db0ca4188a"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "75b5e170d54886a1d09908f2eb07ccb9"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "30bd8beddbaa520d9581617f70721310"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "a3295c23fc9295edec48f8dac0d867c2"
  },
  {
    "url": "categories/other/index.html",
    "revision": "6b8ba3277b5c3f7e0419f14e902a5118"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "3b8e4f59691091f1e438eb810d72e01c"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "af9993e71e3b5983a4921440768c6a76"
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
    "revision": "039714b4e33a9ebd6bbde40797d9277c"
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
    "revision": "101c3ba8abf036c445adfbccf5ab4b2a"
  },
  {
    "url": "tag/App/index.html",
    "revision": "75af84787f0ca3398cd86f077fce5362"
  },
  {
    "url": "tag/array/index.html",
    "revision": "26847aa7e4caebc6a5389ae9a6a847b4"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "209d4d012fc42f6c1d54855c166c7ebf"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "93e80e6f47c9ae1b10126bbbedc93608"
  },
  {
    "url": "tag/css/index.html",
    "revision": "384a5aaa2d9432b9faf017e18baf3940"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "00a376c054c03127e2f51b3fed6f9d00"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "e9fa6194e28a8bf7e8bee25ed9a303f8"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "a52fa2fb8a58fe63d53e45bef83f3eb4"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "39173569b6d601f9ab2cb0952726bf9c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "197ac9c0f0c797a1630555b7174b80e1"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "0a50dbb3544f57bca7cf6582d3ed1e1f"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "388463d4408cd8e01429890b418afd73"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "7f96e061f2005f9cb12422104d1aa3cf"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "3c99ef4ecafe0519329ce1e19a522d8f"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ed41d94d284ce2fe70146fb0dd510fc4"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "389320039190760b09de9bef5c88081e"
  },
  {
    "url": "tag/index.html",
    "revision": "a19910869241370ce639a9e8263c1642"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "533c054c836b75909f003082e7bc8a96"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "6f636fc3e56a13351794265a031e99a5"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "0d560aaf56d0d837b7d9321a33f66547"
  },
  {
    "url": "tag/js/index.html",
    "revision": "2521dc4b86dcfa4e1b6f20c12f8f03b7"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "8337297ada1fdcd3091301558beac207"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "632d9204c6f6bb728ffb5837f379dd4d"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "4b2c7cf879640143069ff8d2e5299560"
  },
  {
    "url": "tag/js/page/5/index.html",
    "revision": "3447d507dfdb397e75882a7259b073d6"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "3f45a2f2a0f315a6e826f374280711a8"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "7f71c79f84f5ff4e3ebac8655210f597"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "7972d21525125d351ca838ed70db5d03"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "698c9c365e144b7a3ab9a4e88752ac1c"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "29cd6201eb1e0ce7221aee6d9bb98056"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "1c81873ef8e4fc66cc6fb7a1c16a3191"
  },
  {
    "url": "tag/project/index.html",
    "revision": "d6303b0a2696f7a829d026f0bd4fc42f"
  },
  {
    "url": "tag/react/index.html",
    "revision": "47b4f7c90ec9cdef9ad298dcf44ecc94"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "ab33219a1aa33507a145e9868e5c2631"
  },
  {
    "url": "tag/router/index.html",
    "revision": "c948c4dd6128fcf6434cb21aeec5d740"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "383788209846ca0510cd8c774d7a3462"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "82dacccded3c2137257229de57df23f6"
  },
  {
    "url": "tag/style/index.html",
    "revision": "856e9c1f056d7ddb1039a505d89d16bd"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "4a1bdc055950b0cdfb4c5d138349f1e8"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "de702579e0bf5d9d838ca707f38de112"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "f5d91d153583640bfcc3f9e9e64e684a"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "6f394370653380bc9f8045656cea044a"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "9973415f882899ff947201203aeffd8b"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "6d9b6b4e40ce8a7d7d85a990cd723118"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "934133d7b32881d48f72a0f7ca64aa35"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "b1171f07d6877863139ef3d0e336d9ea"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "df6b80f0af755a7b61d0529b25bdfce6"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "b140b0b91b539c1eac5309d5f61bad0f"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "f5356d650b4fd76a0c1edd7b8476f21b"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "852790de6e3d59fcf0b973fa7a78a508"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "379e058b334a272b13186fea6f4a9f96"
  },
  {
    "url": "timeline/index.html",
    "revision": "4feedd82e4b122c0948916eca48f8279"
  },
  {
    "url": "views/about/index.html",
    "revision": "9907c931f04fa3915f5be375470057a2"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "f59b4839ba339853502e50854df6dcad"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "d4c9c392b2cf56ef8378d8442bb641fa"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "b6df0c2ac3bf9cab408e83b35cfebfd1"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "f9816f8195a5dffb7b141558ced731a1"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "d045be598b745e9ca387643018c51a22"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "3421d71ba2cf5c158fef6abf22ec338f"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "363a5b283cd2755f91d771d8db9835fc"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "b0b37d64fbeda12aeafe8d4be8810577"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "2e2799259e4517d5ba9a04f54c2940e3"
  },
  {
    "url": "views/JavaScript/algorithm-10.html",
    "revision": "3408f919383823fef58ac79b652636ab"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "0a4164cb7bd6105ff23e00216e0efe51"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "6e36256d5cfaa74cb07072819bba0de6"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "8e85949d2916d602e494923bca458665"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "c2d74a3501dd24b3b61d361b34efc974"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "d4e37970518d5d3e101e677ccedfbea2"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "63325af56435d2b31f346d30a8e2461c"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "82bcc37dc2a623db5f812d8576015d60"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "b216e03f0b7e7f26b24ca1dfd3be5b21"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "18b8ce66093e271e69e00d1184ad757f"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "5bc689f9ce182af35bd618f2bb21f410"
  },
  {
    "url": "views/JavaScript/download-file.html",
    "revision": "076525432dc8694e0d742dda9427d0b4"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "5bbe55d904e89fd845703ba627995c8c"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "3593b9dd104564de4e254cd579001d48"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "e28d0b39d3781a767a0688a267073361"
  },
  {
    "url": "views/JavaScript/fetch-synopsis.html",
    "revision": "74d4cd7317acca535b8aefd7c15c7783"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "14a77904dc77d07ad2551a5633f2f33d"
  },
  {
    "url": "views/JavaScript/front-end-written-test-100.html",
    "revision": "881d1b03c008ac62c167354b1ee306ad"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "c6e22a1c39992c54dba5afbc8f82a86d"
  },
  {
    "url": "views/JavaScript/html2canvas.html",
    "revision": "0332d2657e282bf3efc54b37ba01d9c7"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "15a7eb63496ee4f4a535384b083b4f15"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "e0cc072e0699fd8c88b68004fe315dd8"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "ff8cca72889091156a1002f7bd5ae06e"
  },
  {
    "url": "views/JavaScript/javascript-topic-list.html",
    "revision": "1cb037d3b87dd1608693473c3014232b"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "4dadfcb3457507f2f959006a38af1d2c"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "fd4e1bbfc15724638229f6dd84a62848"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "fcc7af22e6a670a33379cd332a68f716"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "eadb118a85e1ada040a001e09612ddc5"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "c609b3b1ca6e65892d29ec583ec60eba"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "0005b1e1fb45a5ed35ae72dd4dfe823d"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "83585740602cca72c7b59fd64176e69e"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "b281a8544b32c5d0fae840598ec53290"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "875953f8ba61ab6eba3276b2b8b2c438"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "d16b08e71cb9af87a258c2237dfc5286"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "95500fdb249f2644d470f1b085ed7167"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "2d3f7da219c80fc4d3a12ce2efc3bc28"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "fa88e0165e90539572b3f68f2cdba5dd"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "47316b2241cf02049a634276ca5d8d2c"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "2584e95eb0d29fe41f446e0c4f83d599"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "ecca9c9f54bf4405fff69c6a399094a6"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "d0f8925f150e7ef1ad2bd73298519066"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "fb49db2d680f0a89c7d1cf45626d9213"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "f1a7938d6687d1a1eabdfa5b9ee0dec2"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "637fc3a58e0361650024a01ef003ab81"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "2833d94b8fa03b664bd211d3519ac76d"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "d1160a89ec29c99b5c505639d3c358b2"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "c8cd2c34cef7ebcde5ceb5b9e90ad57b"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "4925f7892c63119f6703d27e1523d7ef"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "eba085a54a3ddd6b18d47806dc8ab2e2"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "4511a052e69be990ee5c88960618f659"
  },
  {
    "url": "views/project/index.html",
    "revision": "427573a5d555122e74972a6f677840f0"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "f7aa1f1f0d44ebf5e3b8120a7aae4c70"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "4fce657846bce98e8410c9df9a8ae7e4"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "9a5b7c4ef9ada8537d1d4d9b103e8aa8"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "752cd15192165a02f3d22b4d4f67deb7"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "423d9a08126845e655e8a9ac7d7bb6e3"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "a22a530ca66fd5c23c71a63b09866e8c"
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
