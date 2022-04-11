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
    "revision": "eaf9301f665b41773a88ed271ec7c3af"
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
    "url": "assets/js/12.a88a3864.js",
    "revision": "a1a9648718988c0808ae232a00747e1b"
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
    "url": "assets/js/16.9bff3c14.js",
    "revision": "8204f9c640ed761676488566317bed60"
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
    "url": "assets/js/24.5860e35b.js",
    "revision": "36b9c0aa43ae4ac6f5ebabfaf4ce9095"
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
    "url": "assets/js/29.ccf5eeac.js",
    "revision": "9c9a69a713921fcbe5b725ab2cf55473"
  },
  {
    "url": "assets/js/30.c4fd6fb2.js",
    "revision": "d08ff862bc683c88c98f7f2bc98bb801"
  },
  {
    "url": "assets/js/31.ef581477.js",
    "revision": "0ce6f517156dfcd23edb8a687f33abc5"
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
    "url": "assets/js/34.4fa26d68.js",
    "revision": "d492a568568e97df86202b4a32f84653"
  },
  {
    "url": "assets/js/35.ff4f42a4.js",
    "revision": "be6d4f7b487aff677d77e06b7547d591"
  },
  {
    "url": "assets/js/36.2aa673a2.js",
    "revision": "b5d178817b4cfe2cc02147033b45047b"
  },
  {
    "url": "assets/js/37.d439e551.js",
    "revision": "258cc15e6a57e2a0eabe5785dff6472e"
  },
  {
    "url": "assets/js/38.27fae00d.js",
    "revision": "e55a939389a859f39dd7a49d84c518ff"
  },
  {
    "url": "assets/js/39.371e816f.js",
    "revision": "2f2dcd1fd41110eff3652a7ba99b2738"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.8ebd136b.js",
    "revision": "4bd9d3dcd51c937f8ce626327d96e3cc"
  },
  {
    "url": "assets/js/41.b91b5cb2.js",
    "revision": "ebb42bbf13a3f6010027be6da2f00d76"
  },
  {
    "url": "assets/js/42.6bd7ec9e.js",
    "revision": "4547b9680141d0c54019c14994ebb5e2"
  },
  {
    "url": "assets/js/43.c7d709cd.js",
    "revision": "efb493d9e3d79d8f3fd8250fb057e3f7"
  },
  {
    "url": "assets/js/44.929db5be.js",
    "revision": "94ab7103421ea0859196699b95696187"
  },
  {
    "url": "assets/js/45.e2383624.js",
    "revision": "933eb0f8b64357b3a6cb3ba9cff39273"
  },
  {
    "url": "assets/js/46.876d7dfe.js",
    "revision": "dfb6312d8a5abbf9fa29d4abbc7e4c80"
  },
  {
    "url": "assets/js/47.663b6237.js",
    "revision": "76b70526d2ade2178e765877f81eca39"
  },
  {
    "url": "assets/js/48.fef939f0.js",
    "revision": "c958f460f57161870b75b056cbbab7ad"
  },
  {
    "url": "assets/js/49.8b64d450.js",
    "revision": "bfc197f4871f8fbfd93c1b6246c2f36e"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.fcc1668a.js",
    "revision": "725ca65a183202fceb3b7acb91dc1273"
  },
  {
    "url": "assets/js/51.cd23d5e8.js",
    "revision": "1660342b5722ad50885ec395454582e0"
  },
  {
    "url": "assets/js/52.f894be31.js",
    "revision": "9045d6de2dfa31f810f579053071690d"
  },
  {
    "url": "assets/js/53.4c559cf7.js",
    "revision": "2e5af16496159b4f312dd5cc7a97d07b"
  },
  {
    "url": "assets/js/54.f5ea17e5.js",
    "revision": "e86ee12cc3b0a07fec79d6c47420eeaa"
  },
  {
    "url": "assets/js/55.0ea0ab26.js",
    "revision": "b04ab8ba412f18fdb384ec7b33f7dc7f"
  },
  {
    "url": "assets/js/56.1dbfa7aa.js",
    "revision": "38a61df7b0d2d3919ca9f175a8271bfd"
  },
  {
    "url": "assets/js/57.4a38b7ab.js",
    "revision": "b3d9bf04fee082848ba6b4589ae025af"
  },
  {
    "url": "assets/js/58.1dff677c.js",
    "revision": "273c9f2c781a173c5b4e2984da060298"
  },
  {
    "url": "assets/js/59.83f41da0.js",
    "revision": "8fb31160af79a6191e3919ff1dd26ce0"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.d65940a4.js",
    "revision": "b8f63880301d4175fa4f694c4a83bed2"
  },
  {
    "url": "assets/js/61.6aeba240.js",
    "revision": "5dcd01b6f0abcd132c532bcd7fabed3c"
  },
  {
    "url": "assets/js/62.373d4e0b.js",
    "revision": "3d68fac198f0fb786df34fb59c2d0348"
  },
  {
    "url": "assets/js/63.5138833e.js",
    "revision": "c7fa02cb91506c52cb6c1f5e6f2759cf"
  },
  {
    "url": "assets/js/64.6c3d4ca2.js",
    "revision": "1a07a6f59c438a4c953f69bb1adc324f"
  },
  {
    "url": "assets/js/65.ef2958ea.js",
    "revision": "945702f89888f7d0a9c4928c5f42f811"
  },
  {
    "url": "assets/js/66.6de302f5.js",
    "revision": "7e2aeb93e7a0d9c09b0674142f38b4e8"
  },
  {
    "url": "assets/js/67.cb3ed056.js",
    "revision": "de394025750b20ffb9aa886383e525f5"
  },
  {
    "url": "assets/js/68.a685c817.js",
    "revision": "dc20c060bba6d72af0d014196376c3bc"
  },
  {
    "url": "assets/js/69.5349b21a.js",
    "revision": "3e8d82883ea2df5d975ebac12d75417b"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.da749e1b.js",
    "revision": "52f0b0cb6df8c35b780354e8e24df7b6"
  },
  {
    "url": "assets/js/71.e7dfa220.js",
    "revision": "2781aa12850043c33db90ece9f712364"
  },
  {
    "url": "assets/js/72.4e626fa8.js",
    "revision": "ae15de6525843308c80684e9ed7266e1"
  },
  {
    "url": "assets/js/73.2a0efa81.js",
    "revision": "e4913f402baf6770dfd466cd7a228105"
  },
  {
    "url": "assets/js/74.3357b047.js",
    "revision": "340bcc89adcd4fbd2d6a0743a1b505df"
  },
  {
    "url": "assets/js/75.2f4cd16a.js",
    "revision": "8b85be23d6a3b7602a71b34d3b576a9e"
  },
  {
    "url": "assets/js/76.21ed4b36.js",
    "revision": "1e7850e8cc60821e6a89b138b060efa0"
  },
  {
    "url": "assets/js/77.5877b21d.js",
    "revision": "b4f082fdc9aef06a2f64e916fa968e36"
  },
  {
    "url": "assets/js/78.1ac6ee69.js",
    "revision": "023a37604a21727a9c13112eacb6f6c0"
  },
  {
    "url": "assets/js/79.f8d914ba.js",
    "revision": "327ba32f1d72f7a0ede1a8597a1df26e"
  },
  {
    "url": "assets/js/8.bd50d723.js",
    "revision": "9f653970bc5b97fc7093283ea4650109"
  },
  {
    "url": "assets/js/80.f570fec5.js",
    "revision": "58c357b98a15785bced2937bfc4b9928"
  },
  {
    "url": "assets/js/81.b2ce5f57.js",
    "revision": "7a70ff777b27e876b2d859d8f692d080"
  },
  {
    "url": "assets/js/82.5728f0fc.js",
    "revision": "316d13ba4be2725076000639d8ece451"
  },
  {
    "url": "assets/js/83.4aa85222.js",
    "revision": "ba84a3f9daaffee8fbbd921c06b7fd0e"
  },
  {
    "url": "assets/js/84.5a97be83.js",
    "revision": "b6cf5b5620c200d2ffca73ae516c60ca"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.dca2d74f.js",
    "revision": "abcf6f9733fb51a3c236e2fd725d610c"
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
    "revision": "b43107d5c52d284eb091b88307894537"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "347b33f34fe69979317068cd5d078b89"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "eabc0a80e9e9f01e1beb92f3d4d59c8f"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "c2fc0e4fb86ff75d02a0ec19e19600cd"
  },
  {
    "url": "categories/index.html",
    "revision": "cfa3c8edaabf597a941917a4e1bea875"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "4870a04689db7e4f8f0ec6a62cc1e631"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "15cd347f77d2b389a194067d2c58c925"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "a829d5f1d198a8a75b59d1938037f3ab"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "5944062c76619d99c4ded3d25d9978ca"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "e4887fb0af8711aeadf2f79eaee61553"
  },
  {
    "url": "categories/other/index.html",
    "revision": "59161b402e965eed2650c475ca1156d2"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "ffc5968f67f62502e0d3b16545fb1798"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "802fd9b09fc687a8b4e9e456864ba9e3"
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
    "revision": "fd547506bed5b9719f0381c2a51513d8"
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
    "revision": "41f11a3bf63e9a7c5e81c13bf1174e83"
  },
  {
    "url": "tag/App/index.html",
    "revision": "9e4d7376a12bd72d3a7c1811165ea46f"
  },
  {
    "url": "tag/array/index.html",
    "revision": "5054c87350ca145507c7739b25ca379a"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "7030563e62f179cbbc37f41b5ce67b7d"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "e60e921e1b96a5a125e5c93a038745dd"
  },
  {
    "url": "tag/css/index.html",
    "revision": "bd100685287c2ecb0bc1fdae66638ad0"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "e973ba370f9aed204ac6f630d85a8787"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "dd7faf835ce42684674596cb18c7c572"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "b15a6efd58d220f88e385122e5208f6e"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "ad75e1f0cda5e7ff428023165a550843"
  },
  {
    "url": "tag/git/index.html",
    "revision": "0696089126aee5a1a05dffa0eed8fa83"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "d2c0517ea51a66f38356153958c4f103"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "fd3cf7f308c6f233407c59722ec6d433"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "190420655ea40e2c1f2d413d2fabc782"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "48a8de07c056957442bd8956838613aa"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4929a790b0c042bad4351e6a7e9faf25"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "c4ec011d234e09d00cf35535292e71b9"
  },
  {
    "url": "tag/index.html",
    "revision": "de30387e4df350a5b55aa6489576509a"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "94437618ffaa71227db7875548ce0e67"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "4c7853537afae95ce262f9956d79887e"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "7086f020ee8c309c6ac69786a2e80dc3"
  },
  {
    "url": "tag/js/index.html",
    "revision": "30a338844cbd82515ea9c988bac1f405"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "00691d0ff706884d5ad13b34bd8d6438"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "8108c1626422e40416f9506cbf947792"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "e0810f94964f01c7fd32bd80b2e5b306"
  },
  {
    "url": "tag/js/page/5/index.html",
    "revision": "1e6b77a0b6c5884bc94b591553cc63a1"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "bcb3822add00d3a190e6560ac5b28c50"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ba7646ea24173add4dfa37b4cf5e659b"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "f9c8bb2a3aaffe1ea00e4ce31a0df7ad"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "d17391260709c7d7ffbe9bb5fe4693bf"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "f59d6a1ce62d9a93f65fe26f97149e35"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "6da8f47128a8d428139c08eb2c7be6fa"
  },
  {
    "url": "tag/project/index.html",
    "revision": "259529e923724b79828570f8999c8e6a"
  },
  {
    "url": "tag/react/index.html",
    "revision": "6197250a3050e01a720225c09d86e923"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "e110168c54696332c791c2eae16167f7"
  },
  {
    "url": "tag/router/index.html",
    "revision": "5910ad9c66af2f54ced88e4380f7f2a0"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "89fe906a48cc79c649d276e35a71cb95"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "8cab19781ef13993ca5f487fb3fc72e7"
  },
  {
    "url": "tag/style/index.html",
    "revision": "9f2b0bb375d4fa0738d126262f01dbf8"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "c5120516e0029727918461adcda1d3c4"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "250c26554b9ec5b038ef56840384283b"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "8734a81785cdbbb944af302dd41c4b2e"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "f24610c708da20de8fafa6f0957c643e"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "78b8df91d28a7bc8f07d4813ff866eb3"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "eae459510738fc9d076b632245c57732"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "c19a1393e9a66100cfc2ade37af88099"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "9af10c47f64a86ea637d678d721c175d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "53450c81f9cd70ee66c0437985314720"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "53b1ec68404f590cf851eb67211fa0f2"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "051a68b1b58af535512d802c37811a41"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "48580643fc45b36c94b4ddc1e05f45c1"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "4090ba056a2bddb8248a55799dabedef"
  },
  {
    "url": "timeline/index.html",
    "revision": "0f59f0ab141dacd6bbe5b4e66647650c"
  },
  {
    "url": "views/about/index.html",
    "revision": "7566d0526d15c37a5f11f46a56917254"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "0a95c07f7e51b43ff816fc8df43a8744"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "3ab06055fb0e4085dbab66313b1e00c9"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "2bc19d24e84d5187bed9a9bebb2b7b3a"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "fcd0c7de32f97a125fe0456b9cc2a5cb"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "d32dadd49e9fafc87cf42ab4c2d9f623"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "0cac62bfcdda819947a53832b445b370"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "2f31bea7ce6d3ff9a2d9bc44b4bd1f32"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "2590d7ff6e886dcf53f58136699ec19d"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "bf0f222b3e0eca0cebc48cf86aebb3dd"
  },
  {
    "url": "views/JavaScript/algorithm-10.html",
    "revision": "922d9cee16012569c8d793b3dc374ce2"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "a29b5837a2194c42deeef30209a1a352"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "9be3fdf0d26bb7f07409c7d9183a4bf5"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "549f3fb620d24e4901008ebd1b5f95b1"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "aaba344fa0b57abd7b06589ce255f8d3"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "6df7d75742bac2337e48bf7b76d95ab0"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "fbc226080d8249819799626487ade501"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "159fda76945f9166a7f01514f91bcad2"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "47f100732a9fc08f5d0e135d1da436b4"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "60ec4913e879d2872a9071ea299a4996"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "e624329110ce2551a9bb834c6e647d69"
  },
  {
    "url": "views/JavaScript/download-file.html",
    "revision": "14d84188c33af77363f33629365a7ef9"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "cd1dd13031e9c1ab4c74d7ed5c5cdebc"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "1b9b7265d9d0f6d976867d57d3c137f7"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "83478439fb0bc3430c9571393aebc67e"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "793417a19d29173e9fa5f9f92d2c1e72"
  },
  {
    "url": "views/JavaScript/front-end-written-test-100.html",
    "revision": "9def6ed144317da9a1f1e709cb6bb416"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "6d996223a9cacb8bbd61df538c55b656"
  },
  {
    "url": "views/JavaScript/html2canvas.html",
    "revision": "d0097d9015315d56232d30db59ba3c35"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "c17a72220d1d9db6077215991ec11216"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "ebc5f0c2b98522b1366166ccb0236750"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "f04cfb43ef06916e7a5ed93bee5447ee"
  },
  {
    "url": "views/JavaScript/javascript-topic-list.html",
    "revision": "3811bb2e13aa492abd9982ced991981a"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "dba4f9000ac2e86b0a7abacf2a9983d5"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "6a391a0b2ab971e401d36190f072bdd4"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "fb7da4c6016a30ba235c9af61f323864"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "497dcdd1b50c16d78a4a7996c967e013"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "cae2e7c8a808d2c68915709537e77ed9"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "f4b5ce3a140b0bde5aea21067edbc79e"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "d11791938cc81d22d9c001ce690a2233"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "d388735d6b0440975778b3a7d09a8ea2"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "2fd760d40e93960777c4330b0959c1f6"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "338e80a6cb10b105c455e3d191e6d82f"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "a2ef9281e2e2caf2a9f5b56daebf9a1b"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "fb4bba3142219ca55797f89159ddac96"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "4939b0e2d203dd31a181f796a2a24bd5"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "837dc1d649cc919e801e915b962aa32a"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "8cb93fb9d2fa834c524b17d783662933"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "438b7e734582ed27ceb23352e2cb6124"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "e6b801fda467acc132585b99e9abfc10"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "e9366a05af5d712ca0f905dff96af412"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "d718e4f8bb90376c96e5f7bd03cf306a"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "38eeb8a8dd4f39dcf12842baf9f097b4"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "02ec092280c951b0287106327d85fb68"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "cbd76ece2a127d4753fdd4f310294591"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "586cf7f5d77577e0048b433ff35953bc"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "07cb18e8182f4519015f93eb9f15de9c"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "6f6856ea973da6fa4d20b7faacb765a7"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "b1ce0a7a39e87894dedb0cb6adc1cc05"
  },
  {
    "url": "views/project/index.html",
    "revision": "0bd4b89ed00f00366204e7949d1c4373"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "9514bb86475687b32c0ad57803986033"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "f0ba75f9671b7a87142d0d68772d5fc4"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "5659238013c3cb9feab3bde832637823"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "f80c34a71332dacf1f11a3df5a05ba42"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "f741bb243982133718bbc42abf32e649"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "005643d13d39fad8dde6dd443f39e0e8"
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
