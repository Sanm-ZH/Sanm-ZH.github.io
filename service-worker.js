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
    "revision": "1fb0b8829165ecf6061216c2da237477"
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
    "url": "assets/js/12.70df4ae2.js",
    "revision": "e3f5eccb5584d199bb528703d7b675ed"
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
    "url": "assets/js/16.72179cf0.js",
    "revision": "b2e6bdc57785bb759f9d4dd194a2d9cc"
  },
  {
    "url": "assets/js/17.421fb602.js",
    "revision": "13d47556cf362e23f60edc85b30a6317"
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
    "url": "assets/js/20.cd977254.js",
    "revision": "c74ee90c130c8d957e1a9472d33676e1"
  },
  {
    "url": "assets/js/21.c9eb4717.js",
    "revision": "7473fec6da22394edf05496f90537d5e"
  },
  {
    "url": "assets/js/22.b51aa478.js",
    "revision": "614345b001892e7f55ab2ad79485c729"
  },
  {
    "url": "assets/js/23.45707f9d.js",
    "revision": "4e27bb811922db40b149f480ae3a7b54"
  },
  {
    "url": "assets/js/24.79dc48d7.js",
    "revision": "61ecc6c0e3a0a8f3c1060c10ea0a823a"
  },
  {
    "url": "assets/js/25.c879fe6b.js",
    "revision": "d6d66100b2e50a16ac3c47c6e02e01a5"
  },
  {
    "url": "assets/js/26.281ee118.js",
    "revision": "3ae4b048aa576827054ba112114be098"
  },
  {
    "url": "assets/js/27.51d5e808.js",
    "revision": "5bc20ab4cc17cc2cf75bec9443c1f557"
  },
  {
    "url": "assets/js/28.4568842b.js",
    "revision": "b37470166ad27e0338435f167ab7ccc7"
  },
  {
    "url": "assets/js/29.65616335.js",
    "revision": "6190beebed6f680474dc19aac1025e0c"
  },
  {
    "url": "assets/js/30.0a45451d.js",
    "revision": "efd885af828ba49c2d9e2448c9991cce"
  },
  {
    "url": "assets/js/31.66e52537.js",
    "revision": "e69880b99ca135b14a0f97545c29e359"
  },
  {
    "url": "assets/js/32.5bc229f5.js",
    "revision": "28154b916bd7d79ce205a960e5c6b7f3"
  },
  {
    "url": "assets/js/33.8e12c345.js",
    "revision": "ca90a25ee6dde12f83dca91171364414"
  },
  {
    "url": "assets/js/34.6360f090.js",
    "revision": "db82791013906af71bfb091a32f3d96c"
  },
  {
    "url": "assets/js/35.f4f9e2b7.js",
    "revision": "a674e3ba5ae58f3c70cadfa0de2a7259"
  },
  {
    "url": "assets/js/36.33cf97c3.js",
    "revision": "cfe4b6eac4e6d82ecc2b41c42ef01f06"
  },
  {
    "url": "assets/js/37.a7f766fe.js",
    "revision": "adc525251b54a6386e68be3fd5cb36b1"
  },
  {
    "url": "assets/js/38.0e754750.js",
    "revision": "e7dbe4da993ba4adfe9dce0cb040cc42"
  },
  {
    "url": "assets/js/39.1eee8ae7.js",
    "revision": "298b126eb10d147bffad57596bf98e31"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.91c08b81.js",
    "revision": "56d54162344421791b01786f187705c1"
  },
  {
    "url": "assets/js/41.75cd35c6.js",
    "revision": "3e028e96fc2f204d0accf0ad68a25859"
  },
  {
    "url": "assets/js/42.959bbb37.js",
    "revision": "8a37848ea1656fd7796d22bb89766327"
  },
  {
    "url": "assets/js/43.d222db3d.js",
    "revision": "317097240db8cdde323b0067fea04c73"
  },
  {
    "url": "assets/js/44.e67bafb5.js",
    "revision": "723ad1554ecc4342ecff1d85bb1da56f"
  },
  {
    "url": "assets/js/45.4578f088.js",
    "revision": "f34e8312dd29ab949701c767febcf3f5"
  },
  {
    "url": "assets/js/46.bfefe548.js",
    "revision": "9dc45ae6cd97e9a935d58e1fa7ddcfd2"
  },
  {
    "url": "assets/js/47.b0ca626a.js",
    "revision": "0d57cb9f99aa4e295ab56c8bc2cfcc15"
  },
  {
    "url": "assets/js/48.0b822d1f.js",
    "revision": "f27a8daf0e04b1debb0bf5c671a41fb7"
  },
  {
    "url": "assets/js/49.3d32ac06.js",
    "revision": "8c72feb9e9381b1bbf2c8b49f09467f4"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.72de92dd.js",
    "revision": "6cc4412aad1db68c32126784cbfffa21"
  },
  {
    "url": "assets/js/51.5d550499.js",
    "revision": "ff4273b777d2bd08ddacb034a51b8e26"
  },
  {
    "url": "assets/js/52.050e0a6f.js",
    "revision": "e72a2b2f7c5b570dd15d7f38f99fa486"
  },
  {
    "url": "assets/js/53.69dc75e3.js",
    "revision": "c587bef6d079f55c051eea39c65b856e"
  },
  {
    "url": "assets/js/54.75a6a6ab.js",
    "revision": "f111b3b04c932b5b1e68963ff25fc460"
  },
  {
    "url": "assets/js/55.6f618e5c.js",
    "revision": "3fb777aa717f383a1ec9234df32ffbea"
  },
  {
    "url": "assets/js/56.8f95a60d.js",
    "revision": "01fd617bb064d6237884699ce3b7bdde"
  },
  {
    "url": "assets/js/57.86eff077.js",
    "revision": "e1bdbbed671b3d84e18c8be682fd29dc"
  },
  {
    "url": "assets/js/58.b03867d8.js",
    "revision": "bc6b77721f2fece487f5ae5391dc6972"
  },
  {
    "url": "assets/js/59.3b7034b6.js",
    "revision": "b96ce0eddbb1a2cc4200420e6ca42d57"
  },
  {
    "url": "assets/js/6.e6fbf492.js",
    "revision": "d4c20847d666b5ae6f971ad2e3bc7809"
  },
  {
    "url": "assets/js/60.a36618be.js",
    "revision": "72b7989794d66be41927fab2d0e7ef25"
  },
  {
    "url": "assets/js/61.ea8c3fc9.js",
    "revision": "2f8333d4c43de75af7c5dec37a4956cf"
  },
  {
    "url": "assets/js/62.4eb5efb0.js",
    "revision": "70f358cf6e1f14b5113b15bb370a5207"
  },
  {
    "url": "assets/js/63.bdb360b6.js",
    "revision": "1d5e9bfe17f336cf78eb5884a4d43de1"
  },
  {
    "url": "assets/js/64.65995c9e.js",
    "revision": "c4879daea0a4fac08b10688626f8554e"
  },
  {
    "url": "assets/js/65.e6de1ae6.js",
    "revision": "8ec288aca2bdbf196373bbbd9d695d88"
  },
  {
    "url": "assets/js/66.20ab12df.js",
    "revision": "81a9d8ad6447192939f9c32f37e021dd"
  },
  {
    "url": "assets/js/67.89796eca.js",
    "revision": "e98ef4da9d08f8b6a5550efcc6f86105"
  },
  {
    "url": "assets/js/68.e64711cf.js",
    "revision": "146a0d0a907577f265a30245cea3d83a"
  },
  {
    "url": "assets/js/69.7bd83e28.js",
    "revision": "86b35cd8496e37997e7c3485e1b1dc33"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.10d2c6ff.js",
    "revision": "df6cdaef20a1218f75a3e6efb5b4bf60"
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
    "url": "assets/js/app.e0a6930c.js",
    "revision": "b28b919ca90096343fead6c8ab398259"
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
    "revision": "1b3fcbbd10c2dad6d72ecb753b003511"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "72548306115ed95220e0d75f3607cae7"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "4e4ddfe82b0f5f1881e3cd03bd7807e4"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "d1cfdef4a65d2e5c419f2368a0467825"
  },
  {
    "url": "categories/index.html",
    "revision": "7a978a896d21ef8d71ee98974caa10ae"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "99270dbe1733f3565ba26ed8fefa352b"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "2e54303750b5079d6d6f92bc34a92590"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "9e80320bb535a984aac937222f40c4e5"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "fa3696b9ee1fdbd8879144f03f86c8dd"
  },
  {
    "url": "categories/other/index.html",
    "revision": "02be468e512893365ac89d23c34c62dc"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "3dec4c0ec75c52926026fc4370de3008"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "16eaac2269705a6ac68ed77e2b430c9d"
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
    "revision": "6935642b175cd81babec214db6d82e6a"
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
    "revision": "acda25f300b689fe974897973d20ea96"
  },
  {
    "url": "tag/App/index.html",
    "revision": "c5c7e4a435157d9d9a51c1965b087d9f"
  },
  {
    "url": "tag/array/index.html",
    "revision": "9ba6cd35428a4c5fa13b6445016d2fce"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "20d38c9eb05cfee679490bbff581a8e9"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "72d1f33aa89a7d1acc93c1e3dd4c8817"
  },
  {
    "url": "tag/css/index.html",
    "revision": "deb0ae2a0724487b7ce4e7870982d6be"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "104c64d460757eea9c4927d246af4cd5"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "da5db494c257ba128a4f9314d7aec826"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "6db4c46df130623824b08dfe518c6693"
  },
  {
    "url": "tag/git/index.html",
    "revision": "631e3c32d0f6494120f42a64694aebf4"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "76da04030f1fe08eb99c53b079a4e281"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "cd1c22bce96cba7d6be1afd00fafe4de"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "63077d11822981f0f0ad0fcab1fbaa6f"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "51189ffacb2341290a5d952d8ca80e6a"
  },
  {
    "url": "tag/html/index.html",
    "revision": "068b005c5b6f471f9cc3fc33e71de0b5"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "5877f31c55d739ca77be20504e7f4b0d"
  },
  {
    "url": "tag/index.html",
    "revision": "ec886f896d7f94f2006ca4e9b5c2e867"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "67bb8f51c4ccbf261fa0f58cff06a7a1"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "8a3a76c57415d379abc604c82ff261f9"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "9d675a827eb1a5f4ce427ba83f51d550"
  },
  {
    "url": "tag/js/index.html",
    "revision": "e40e5c117e93a6e4d1c62c7e9db17ee4"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "ef0c2888ab67a3b12f90a081a1aee209"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "0bacf4e32acd3b55ccc82b9797d4e3b5"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "496902c4af611b6b513a0e9709d12a3a"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "9d37875d765793bb3e0ce66305ae3747"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "dfc49a24948bfc7eee42567096e3d5f0"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "41e178ff9ed322f4698716ad87d9410f"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "5c195f6559d77596cf304dad02a76655"
  },
  {
    "url": "tag/project/index.html",
    "revision": "7d4b84b164d8f82f529fe15e5c29bf0b"
  },
  {
    "url": "tag/react/index.html",
    "revision": "d65b4d9846dc1299a2a079ea1dd12a28"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "3b9b0afec1d275b1c970d906758a943f"
  },
  {
    "url": "tag/router/index.html",
    "revision": "f166b913706727dfbb4752390a74e868"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "bae60f0876adfcca62ad427e1ff2f8e5"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "ea05b387cffbf5e07f2ca719950c6dd1"
  },
  {
    "url": "tag/style/index.html",
    "revision": "c6ee1ff8f09d5470ccbc10de189f8aed"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "b028ce411cb40859458236a09ebfce2f"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "4dbdfa566c126c72d6c9410d47f6fc72"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "c56c1b4a01e25c1c035f5c71ec278a93"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "0c2c21611029e6c25d7e26cc9a15444b"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "afdc94d53395427d031911b998361a92"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "a7bb3c0df677e27772e4a8258bb25d98"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "3e976f1398bf1a40a6d2de82f25723ba"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "6f5f593525d89e967f757ae2698652c8"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "6d12bbbbca5b648a873057f2e6dc423b"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "cc8c0fd50e7c1f9ee8509c7843d0fbba"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "7f5ac5c894e596148416fb45996a1a8c"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "e41a61d6637c7027fca1f0c959b587ce"
  },
  {
    "url": "timeline/index.html",
    "revision": "7bdc277b6eba57abc2f24fa25d58c09c"
  },
  {
    "url": "views/about/index.html",
    "revision": "c2b27ed0f54daba800f031c1c47b9208"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "84335958590a1c0f25f5d0f014db8466"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "b47b0e45a16ad99d2203d5d2246e85a9"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "46ce86a2d69cb921cbd3a12081c5bfdd"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "ff2570c15265fe9d446737a4e3cd5903"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "567fab03aa063328dc3b7a38919f1185"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "884c375b688bf6b1a556b0c44ce40422"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "fb49a2d2a5aea5cb09d5e50906f90a65"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "111ce2834d432917aabb51dafaffaafc"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "2580790924cd84b549ca0f642a8cb140"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "3ad1c903a15a6bbf4e5be9d2fdfcab1c"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "22017238d8e1ce355c02a49f1f8edecb"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "d14ad5f05156a47a6a552461ddb5c448"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "831ca7c77ba751c71c6197e4278f43b4"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "54b5681a6aeceffbe54b00d08bf34b5d"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "4c125775d8c9844d7c14b49ed07018ae"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "d31faa0906f31e25a823def6ffb18ea8"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "c6def5415ccbdb150844a3a75b4db22c"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "0a1f8f3cf0fdfc72f559a27477c9246c"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "c6b98ef0054acf4ecc5d2a0934f10874"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "bc46688173508d9fc5ea7e013d7a784c"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "44860c9eca0238088968df713ec219bb"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "eab3031354cf814dbe4fb54d0673b422"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "d04f4e0ec92e8609f5d1173389f2215b"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "a373bb6150e04731b7b1c2c06696a2c8"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "18ff944ce7b652d4bb48c4cd7219f824"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "ac0449b5a76b201119073a53c48988a8"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "bac78edeab9e2f0c1d70e7f1a7b45676"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "049a515ee6f456d9c63b13e7e69a495f"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "23b7b84a70c7a2dc9ccdad3041917385"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "57d90482fc56a51eb62244325e8392eb"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "2926e7371396d32aa03347a690c3bd7d"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "5217c3681aeb9813c649892f56769b7c"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "b463a44295f8be09900b639189d7a13a"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "ea23e7db03c4939f72465133ea48c7bd"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "c2480ced27cf4fe902e73bfd5db652bb"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "0cf0cbb00871407165cd8cfc089ad7a9"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "82dc7b6938b9c2fddff77fa6acfae446"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "00af737ca01ab5506617693318e2e696"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "11de061011cac4b428bf0b44a45929bf"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "a3046922150be040f6ac5b21b447b7eb"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "c311662f94c94cf9f11bdacd03bf89f2"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "5be5e9fb64950ff8e438c6c10748ecfb"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "d7bbc4ec70fefaf5f5cf80ffb60f1b51"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "0ffbe64bda468caee5c5829c77419ca4"
  },
  {
    "url": "views/project/index.html",
    "revision": "d6e0cac378f690712f419bc216571842"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "e3052b70db460df98b6e4b4c360a7415"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "774ade5be9b200123b608159a8051bbd"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "26475d4508a2cba96e6cbee3e19e8ec5"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "2994825cbac608a441613bef0cb177ad"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "8cfd03c7ace8d70a6197c6d4e6fca56e"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "7e53b17c11af0293fcc4d435183efa7e"
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
