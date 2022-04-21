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
    "revision": "79c38312bd6a4f8e1739b2c0b4052c5a"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.6b748862.css",
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
    "url": "assets/js/13.76c1e773.js",
    "revision": "bc5b0b280ebedf39a323a196414e4755"
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
    "url": "assets/js/17.5b4a3c89.js",
    "revision": "5564723e5d1d6b0160e8ee9a814f55a0"
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
    "url": "assets/js/20.312cf94e.js",
    "revision": "ec4b5f11718fdbe80c593edfb66a9b6c"
  },
  {
    "url": "assets/js/21.123eea38.js",
    "revision": "be8b59f9486c9fe9e232c4b2d3c1d4af"
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
    "url": "assets/js/24.5860e35b.js",
    "revision": "36b9c0aa43ae4ac6f5ebabfaf4ce9095"
  },
  {
    "url": "assets/js/25.182aac8a.js",
    "revision": "4239767c469f1f6f29f39a88e37e6177"
  },
  {
    "url": "assets/js/26.73a8cba0.js",
    "revision": "460d86f52d3d125abc3844c4c122fd13"
  },
  {
    "url": "assets/js/27.ced3316f.js",
    "revision": "54e63543eb9f587635dfd57d7d5da6bc"
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
    "url": "assets/js/32.1c52eadd.js",
    "revision": "4a49ea36a60e922af25f4a685f9c3095"
  },
  {
    "url": "assets/js/33.50f55d8f.js",
    "revision": "2d58aecf08a02a700c55db6893bbf7f0"
  },
  {
    "url": "assets/js/34.4826fd5b.js",
    "revision": "2998ceeb082e137612cc955c011415cb"
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
    "url": "assets/js/37.55179c10.js",
    "revision": "02f98b29a2d04f312ca65d00924f1d18"
  },
  {
    "url": "assets/js/38.bff3f7d5.js",
    "revision": "1cf9735fa75c0020a638504784b7d729"
  },
  {
    "url": "assets/js/39.c07e2bb0.js",
    "revision": "d3e23632f697cb58ae401a9258d73997"
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
    "url": "assets/js/41.9552633b.js",
    "revision": "e0c12ade33d21ef3f2196786cf744d08"
  },
  {
    "url": "assets/js/42.fd773719.js",
    "revision": "891f56109f15386ebdcfb8787159bd5d"
  },
  {
    "url": "assets/js/43.d9aaf73b.js",
    "revision": "b5e4b645a624083dff06694d4b2c88a9"
  },
  {
    "url": "assets/js/44.9f9a5c71.js",
    "revision": "0adfc2e62bb16adb6a7ff762262bec8b"
  },
  {
    "url": "assets/js/45.417d61d5.js",
    "revision": "1a159d251406b4fe8b1194d2de3729b8"
  },
  {
    "url": "assets/js/46.2838b1c4.js",
    "revision": "ce37148b0666b39bbef95b5e679be6ce"
  },
  {
    "url": "assets/js/47.c9525b9b.js",
    "revision": "4f5eba132f5509cf85c145cd06af5ebc"
  },
  {
    "url": "assets/js/48.ef447b89.js",
    "revision": "aa5d79b6bc6fd2e4b121c0f75ae7a95a"
  },
  {
    "url": "assets/js/49.11495516.js",
    "revision": "2e1f73ae81eff781e3213570fe264bcf"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.5da5256c.js",
    "revision": "a834fbf72475994b144c9c08a8f8435a"
  },
  {
    "url": "assets/js/51.60fdbd32.js",
    "revision": "aed658c68f60837fff7dabbfbf984a76"
  },
  {
    "url": "assets/js/52.1233d260.js",
    "revision": "20f49d4b08f897c7c0e554197a8e0616"
  },
  {
    "url": "assets/js/53.080e966e.js",
    "revision": "35bf0f275f4e5490fb441ebe00b4fe51"
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
    "url": "assets/js/59.76004149.js",
    "revision": "8817a44a438457b70f0060bc835614f2"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.7e381574.js",
    "revision": "c3eb4336fac7f097b110872a356924f8"
  },
  {
    "url": "assets/js/61.5cc66bdb.js",
    "revision": "bbb3e8191abc3cb7c07c951026cef59b"
  },
  {
    "url": "assets/js/62.02a29365.js",
    "revision": "3d9fe8830aa0abd978077483d7b52d11"
  },
  {
    "url": "assets/js/63.15a41875.js",
    "revision": "16955af7923e0897989ef1f6372f9c27"
  },
  {
    "url": "assets/js/64.0ee89ec8.js",
    "revision": "5a995615d54a7f1f1912cd452f1e4c31"
  },
  {
    "url": "assets/js/65.4194c48a.js",
    "revision": "9c07b037f1d7948dd2028bc9f5ed454e"
  },
  {
    "url": "assets/js/66.c8886e6d.js",
    "revision": "bc9a44d7d00a803a99d131869d66e9b2"
  },
  {
    "url": "assets/js/67.ef3d6483.js",
    "revision": "762d5a9b98841c3e2a68049b689a23d1"
  },
  {
    "url": "assets/js/68.ade834fa.js",
    "revision": "83a8689d0d578ca0f4db7938b4fd195b"
  },
  {
    "url": "assets/js/69.acff5b75.js",
    "revision": "d377fa44b9feeb5ee90671237ff8bc7b"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.3e4414f3.js",
    "revision": "1af8b785793c8dc0dca9b6c2b87b30ec"
  },
  {
    "url": "assets/js/71.5312be80.js",
    "revision": "734e72f9d1c8fc635adb36eb53f4fd89"
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
    "url": "assets/js/75.c358500c.js",
    "revision": "bfe7f0362d9b5c039ae17ad1e3f22090"
  },
  {
    "url": "assets/js/76.8ac42f09.js",
    "revision": "8f2d8f517de7d091bc13145ded6d2fea"
  },
  {
    "url": "assets/js/77.b161126e.js",
    "revision": "ac023da5b8142bd3e90cfca8ffd31de4"
  },
  {
    "url": "assets/js/78.32234c8a.js",
    "revision": "cf4cf2148da4106ef29cb68a574d7e73"
  },
  {
    "url": "assets/js/79.cfe9ce15.js",
    "revision": "23ce21bc4d1e16beff13ddb34f5a2e02"
  },
  {
    "url": "assets/js/8.bd50d723.js",
    "revision": "9f653970bc5b97fc7093283ea4650109"
  },
  {
    "url": "assets/js/80.a7e510e3.js",
    "revision": "4c12788552d6d003175bb6d040293575"
  },
  {
    "url": "assets/js/81.68f429a9.js",
    "revision": "af09b1de2f8c8441a02f654b55545ae0"
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
    "url": "assets/js/84.242fb867.js",
    "revision": "21a655470227f2c4a4afb0b157e23b2e"
  },
  {
    "url": "assets/js/85.5079192d.js",
    "revision": "c86aaca5adcb1ee12e138bbcbafe5ade"
  },
  {
    "url": "assets/js/9.60abb5d3.js",
    "revision": "bf518093395819f5e73426b3f00e2dd3"
  },
  {
    "url": "assets/js/app.e5b54aac.js",
    "revision": "a24569ec180f22f1cb6dbcf646d9ee20"
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
    "revision": "ee75a0ddec2e082f14ee95729dac7428"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "bd1b9ab9e1ca49520d0a19944871d909"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "37c75a0de0465801c4def6585e6f4815"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "9fb60a98fa649b538af9642627f018cb"
  },
  {
    "url": "categories/index.html",
    "revision": "776167346a35e35ca4b6b1e8065fb35a"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "47db0eb79c6ee5bc7c87639d333af5de"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "394b52a6e149273835dd649039d47e14"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "ee886d56a4f05db3ba4f52ea071ac47d"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "2da4442c656825434222f248f891f0f4"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "c3335aa9fdc0cd05fa95e04215465922"
  },
  {
    "url": "categories/other/index.html",
    "revision": "2142ec957e0bfb7ee4d099c7bda5fc50"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "63eb0dfef5ade72f03c3b3ad7aade741"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "7b34d746932e0bc7e5d49e66e0689410"
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
    "revision": "801baaff352b496be250a7ad8c1b3026"
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
    "revision": "4f9ba0837ea0c6947ccdb763daa9a4ed"
  },
  {
    "url": "tag/App/index.html",
    "revision": "5c2aad36e72729dafdbb8ab7f03fb7c1"
  },
  {
    "url": "tag/array/index.html",
    "revision": "8aa4a4f9afb2166709fd629167a02882"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "dd92469f6e3ed71fedaf826d93634b80"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "896c3d02e89dd59319746214ed98ff10"
  },
  {
    "url": "tag/css/index.html",
    "revision": "256a24ef733dc9f3523423720b7b03fc"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "cce72b7c47c46b6e0262b1637eb4f0a6"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "f3449fd18ce16884ba9a6e91b70a8906"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "a7c204c170969a13eb9ad231db5971ee"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "a56f1adaef5065250d42af172ea51b06"
  },
  {
    "url": "tag/git/index.html",
    "revision": "eec815f911507a14c2362fee74864744"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "06b7a9411f469c7933ef7d6379035ea8"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "98ab775568275c05f5fa6ebec207ed59"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "31e2a93c43d0808127f2226d78d1c293"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "7316bdabf3e2effd1e94b52f3576cea8"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7f84548923d3795eb3628ad0b4a214a0"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "d9b3110443096a270ed90b379d9203ed"
  },
  {
    "url": "tag/index.html",
    "revision": "e02ebd01019fd2378574428a41b7b4ac"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "b076cda6cac028c9af052d6cde1b4bfc"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "aa7670655cd247433393a079dc929b5e"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "f182871a38c4ec151689a1c00f68dcba"
  },
  {
    "url": "tag/js/index.html",
    "revision": "554e62069bcbb70a9aed8f7179040faf"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "c9e1806c3ae1790d878add286dd1d3b3"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "056d58ce0678b686bcf5cbdf53b37fd8"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "e7078c2e3337e7e6bf2a07d5f6cb6c06"
  },
  {
    "url": "tag/js/page/5/index.html",
    "revision": "2161b1bfb73097582c1e3c38d9c16250"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "bd6d6f08c7f9e6215b4d9902e8032609"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "8e75bd6f1b354982a30d190d9f500010"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "e5ad9026b1bee4e829998ebdeca9f53a"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "a856b6f68eaba85ae0a2d1cf5536e673"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "2645e73b0abcc00acea94a397b77f89f"
  },
  {
    "url": "tag/pagckage/index.html",
    "revision": "44aa1b7e0b3f3f50cd85592cd33c8579"
  },
  {
    "url": "tag/project/index.html",
    "revision": "ad61a4f59fbd07ce6b5c4a1ee504e37b"
  },
  {
    "url": "tag/react/index.html",
    "revision": "2597855bb1dba06a16adc4142a58066a"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "f7ec4a41c7a2682948b142038df91652"
  },
  {
    "url": "tag/router/index.html",
    "revision": "eb9b0650f37a60fa84c0204bb950c003"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "20bfcba8af1088d21d70b2959c18185e"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "4e21a5a3a989a8dc164672c40d31863f"
  },
  {
    "url": "tag/style/index.html",
    "revision": "f5a93c44d4088fbb4f0a03c980c99f32"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "1c99ea30f4eac56aae3de7a4ba2db2ca"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "0faa1590972e0de67ec4573d7257bd6e"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "b45eb87696846ffb81f00d881c9391aa"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "33c473f699d35a907519c90451665cab"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "32aca8422562f2cc11cd0af5aa3bba98"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "bf64f1874ab38322e4d7081cfd3d3dcf"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "3a7ecd4b99478cc536c8b89ad772a323"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "4ce2425d21ba131b2d17699ae5155da5"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "64e44c5aa495d33c511c0280c14ebf04"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "8dfe2d2db6a4c95a58390d74fddb6fbc"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "5500409d2df7ab4f82b8ba83bade6514"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "2837c0b46678f435c77f2565ff7ec782"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "67782acd7f268051a19869d6675de215"
  },
  {
    "url": "timeline/index.html",
    "revision": "45c9440f906569f8a6827b2a130e1375"
  },
  {
    "url": "views/about/index.html",
    "revision": "8220b77deaf13f5aa349896eeca83eb4"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "263de4383abb82023ac86b6a8d0ddc74"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "c175495bfeb020be77f2bc81b0894c5d"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "c46ac85b60ce1f1d0aa483462819072f"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "62902cb64805b9b3d6bddfb0c121645e"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "3a0418213cacd328cc510e36eb493e67"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "9d033ef7701638d2005ff8a90b4c6d30"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "956e692651257932a08ca8748164b723"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "c0154239b2f4864d8237004056e42582"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "a5a97a6938293825d286d4b9ce2f15f2"
  },
  {
    "url": "views/JavaScript/algorithm-10.html",
    "revision": "84fb18e39cd79fa8185ee2b3424817b7"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "ddaa97b390c9b5da1d9d64fd51d2ca55"
  },
  {
    "url": "views/JavaScript/array-reduce.html",
    "revision": "951ef8e79efdc659fc9755da1c95d8d5"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "d2b23ec9a8923a4aec2f13d062290f4b"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "4a8e2b2b75c225a259babb9361bdcbd2"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "a6cd6893c39e35060e2c5b08cc75994d"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "655811128337755596c192156449b119"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "d16d7e970c14b9bd323d8dc3fe111599"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "4a8527f873f971fc686b2d5a30e63516"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "5d954541331ca934273316cfcd21f521"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "c9260bc1583f6514d074d767ad868d46"
  },
  {
    "url": "views/JavaScript/download-file.html",
    "revision": "9357519926cd96e3746644444de54120"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "82482afb6ce7355d869a25a385f7cab0"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "d213545384c3641a30dace25b8fabef2"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "d417262c69eab173cfb380e7be161347"
  },
  {
    "url": "views/JavaScript/fetch-synopsis.html",
    "revision": "2469ff02e293f39addb15648922d0600"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "34cc9c8c84af3f7981e152f64392e37c"
  },
  {
    "url": "views/JavaScript/front-end-written-test-100.html",
    "revision": "ca6cd53973ff9ffdfda6acf0e17be5c0"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "f98c31342617ca5938bcbf9fc196abed"
  },
  {
    "url": "views/JavaScript/html2canvas.html",
    "revision": "bab07b74debe27f750420863338d8580"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "53356c20ed37a1c4f4303e74aca9e78a"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "a7afc942003584eae5266fa3efb86a4c"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "97ddd47179e715bd93dee9dcb8e10ad2"
  },
  {
    "url": "views/JavaScript/javascript-topic-list.html",
    "revision": "8a95cd1506e64db2281864a8066d47d6"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "07fee89ccf019cca0ca2e2a02f944d70"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "2c960195b8e036085e5fc1359415967e"
  },
  {
    "url": "views/JavaScript/local-storage.html",
    "revision": "a82cfb2df0a5557d01462fd60a3265e5"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "1d8aacdc37f1f094de31daab6be16d62"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "fe1a7458700c1334012e3463993f05f1"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "0b64a8689786386178cd4b9ca41a189b"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "90f77f60af81794488b9a3488a6fb4c4"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "f2f9fe86b056fd4e97df8f1b7d4cb3a2"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "018d530ef5a108660c8c86d30391d04d"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "d1c86b0af8ca24b1d2b62aea35a49c52"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "295810be1edf4473aabd93d06875ee5c"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "72072fa8a04d53368b558cd6750b7578"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "7b16fcc69d8c9aa3e9b2ad2607df603a"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "5b87bd6bc31bceaff447de3d49169ffb"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "6a72b6cdfbe7b98079f8feac02ab23ee"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "b98d0c729dc46b961bb33ae1dabc9fdc"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "4f8e9614a1aac7135f42525a8f14f436"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "c583e76da52d3f196723655fdc6b7f5b"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "5da10ffc7dbb2382cd8ab12c94e696bd"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "304411e5ac24b5ad1984b897246a6192"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "fbb670895693c4a49e42ad2a2fd7b115"
  },
  {
    "url": "views/nodejs/package.json.html",
    "revision": "3de67b5dd8a919955db14d286ccad41b"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "3c6df1312e9d024ba93e462d747de657"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "64749cb382278832a66501189e20909a"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "adf73c4018f3950e3dbd5a6e2531bf64"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "1687e0ad02e03056cf8534e4217efa4e"
  },
  {
    "url": "views/project/index.html",
    "revision": "0647d5a025a05c8c99647eb2daa20ee2"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "949948aec28bfeb074709e889b7ba68b"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "609ed5fdfd7edf13ec8aa2dd8ccc4f2c"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "d0350e390f2390406ab7d7ce451589aa"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "13c34a7317dbeaaf656218eb781e6362"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "e5305effc9de57118a79afc92e099d4b"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "3b2cff79064304c05cf49d86e4802fbd"
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
