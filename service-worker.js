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
    "revision": "c17db373c8f3b625889b7c24b64f622a"
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
    "url": "assets/js/10.c4b7c76b.js",
    "revision": "15bb8e2b91cd3dab7cde8fd4b10bc203"
  },
  {
    "url": "assets/js/11.e4728432.js",
    "revision": "12fcc4d453472807886dd327472585b0"
  },
  {
    "url": "assets/js/12.d1260977.js",
    "revision": "bdab5bc0f19594fd8365da2ceefb3d2a"
  },
  {
    "url": "assets/js/13.34ba6001.js",
    "revision": "d7b83d2f550718524e3a79a21acd5318"
  },
  {
    "url": "assets/js/14.7a0e477e.js",
    "revision": "73a44a1f05fc0156519bc4b68d4bcf0a"
  },
  {
    "url": "assets/js/15.7ca37a44.js",
    "revision": "8c6cdfd6a2aa5d80f303c75e803a99f5"
  },
  {
    "url": "assets/js/16.5d68f09f.js",
    "revision": "ec9d16770dfe3c682a54bf37da98522a"
  },
  {
    "url": "assets/js/17.2e1591ab.js",
    "revision": "6fdba1b234fa9bc9a19f7c30a82183cb"
  },
  {
    "url": "assets/js/18.074ef318.js",
    "revision": "970c76a4ad175b80167481ee3f0ac8f2"
  },
  {
    "url": "assets/js/19.2333f75d.js",
    "revision": "4527942cd2ff001234edd8594ee1aa4f"
  },
  {
    "url": "assets/js/2.e167c16a.js",
    "revision": "59df426759265d01229f9c17dffdaa0d"
  },
  {
    "url": "assets/js/20.56d6a285.js",
    "revision": "a94eb6f5e152070d61886dc5405f1a8a"
  },
  {
    "url": "assets/js/21.214a7c73.js",
    "revision": "79b32e8417abe5fce1f0e489e4886885"
  },
  {
    "url": "assets/js/22.613c8198.js",
    "revision": "43778bd51ee455f6869444d20f67f80c"
  },
  {
    "url": "assets/js/23.4239a5b5.js",
    "revision": "2f9352c398d611d3af7916f229f64bf3"
  },
  {
    "url": "assets/js/24.cfddb4c0.js",
    "revision": "ba4a0dc79a82e2454b0a3ddc56307a3b"
  },
  {
    "url": "assets/js/25.fc76ff0a.js",
    "revision": "bc3eb9f1fe03abf95fca219d08736361"
  },
  {
    "url": "assets/js/26.fe5ade5d.js",
    "revision": "ea437820c6c129055a7c147c72cbf9e6"
  },
  {
    "url": "assets/js/27.217a0a88.js",
    "revision": "9ed27674a5a5e85f45de8e104f9b75cc"
  },
  {
    "url": "assets/js/28.5bd55b9f.js",
    "revision": "8f20cc074da69a94e649bb48ba1db9b9"
  },
  {
    "url": "assets/js/29.5c4ca842.js",
    "revision": "bbfa035e2f11b6439c2c0e3544bd047c"
  },
  {
    "url": "assets/js/30.bc357148.js",
    "revision": "c449af44532d5d79da439708b2386477"
  },
  {
    "url": "assets/js/31.b646046d.js",
    "revision": "543234528e0740441d0b7132e01f2aee"
  },
  {
    "url": "assets/js/32.40b540b4.js",
    "revision": "a8e284db0444e95f887c3ddc4f6ec5fe"
  },
  {
    "url": "assets/js/33.6ddac86b.js",
    "revision": "ba8fb5f8d842cc5f2b2a806d7ffb3fa9"
  },
  {
    "url": "assets/js/34.cafcf9d1.js",
    "revision": "4f6eb9f1553c377a860e3d64fc6fa8ba"
  },
  {
    "url": "assets/js/35.7655d9fd.js",
    "revision": "17d4bd60e108ff37743ebc5dbc6bfe46"
  },
  {
    "url": "assets/js/36.cdc62e82.js",
    "revision": "a58a4ffafde3d05910217adc28c14aec"
  },
  {
    "url": "assets/js/37.4faeb063.js",
    "revision": "9b0cbf8a4a8a74efffd1cdd8c4e931ce"
  },
  {
    "url": "assets/js/38.c521daea.js",
    "revision": "6248bbc6be8466bd7d8f93f9375b0fe0"
  },
  {
    "url": "assets/js/39.24331d06.js",
    "revision": "a0254cb2f1f781353a3107a4162ea973"
  },
  {
    "url": "assets/js/4.dbfd902c.js",
    "revision": "9e98bdab18227d34a4cfbbfa770c7737"
  },
  {
    "url": "assets/js/40.44172719.js",
    "revision": "eaa31625c9334c166e1d826ededc0cc6"
  },
  {
    "url": "assets/js/41.13326324.js",
    "revision": "f19351ae621e70b878e3651d88a8b013"
  },
  {
    "url": "assets/js/42.9ad008f8.js",
    "revision": "92a5f1cb8e7a07ea951ed3211ec06bb0"
  },
  {
    "url": "assets/js/43.3e5a572e.js",
    "revision": "6ea9637d836e57b83e41dc0c6051caad"
  },
  {
    "url": "assets/js/44.c6900ce2.js",
    "revision": "e8ffed71d43923a6075b27591e618459"
  },
  {
    "url": "assets/js/45.a2563d06.js",
    "revision": "f66a445ca71f08fb69a34029e113fd4a"
  },
  {
    "url": "assets/js/46.126598e6.js",
    "revision": "03091db02b6de3638e640a5570e7fae7"
  },
  {
    "url": "assets/js/47.b5961a24.js",
    "revision": "a7d3563f3fdd6e78aa34fc34e3b9f93b"
  },
  {
    "url": "assets/js/48.bcc09552.js",
    "revision": "0842cd2713651bc2712e2354c1f610ff"
  },
  {
    "url": "assets/js/49.a7be180f.js",
    "revision": "458c4a0fa4ab081494b55cf8a7c2a08a"
  },
  {
    "url": "assets/js/5.94ed9788.js",
    "revision": "ff16986d3345f298914943ca0cad257e"
  },
  {
    "url": "assets/js/50.95fba3f9.js",
    "revision": "e585359e776721293e08a028f33f201a"
  },
  {
    "url": "assets/js/51.493a4f0a.js",
    "revision": "23a5e6cc3b6fea9b9d8b318e0421f676"
  },
  {
    "url": "assets/js/52.f8a3d52a.js",
    "revision": "fb11911e8e471edef6a2cc7188b3c5ed"
  },
  {
    "url": "assets/js/53.06a160ac.js",
    "revision": "2ff5b6499e917a97c27363314931ea36"
  },
  {
    "url": "assets/js/54.26aaaad3.js",
    "revision": "9533fba4debff898407449075c485966"
  },
  {
    "url": "assets/js/55.e9862b78.js",
    "revision": "b357e685ac0f85e8c285ddd590ca0dff"
  },
  {
    "url": "assets/js/56.29435ca7.js",
    "revision": "85ee9db9e7dad7b672aa5ebe3b43b583"
  },
  {
    "url": "assets/js/57.3d419395.js",
    "revision": "e478a713004ae1a84aabe3d781a8e2c2"
  },
  {
    "url": "assets/js/58.ccd413b9.js",
    "revision": "8a49246ccd140295c8e6b9cff6403a3e"
  },
  {
    "url": "assets/js/59.f86c0c87.js",
    "revision": "1507b7fe1fe8b65651a59b83e630b9e0"
  },
  {
    "url": "assets/js/6.5a888bd8.js",
    "revision": "3d625c3e1735247d747309ab8f9472ec"
  },
  {
    "url": "assets/js/60.ab5f853d.js",
    "revision": "5fe6dd2365ecd432016b13f3a780afd6"
  },
  {
    "url": "assets/js/61.28443726.js",
    "revision": "edc537aa26e7f60ffc7dc01beab5e3aa"
  },
  {
    "url": "assets/js/62.0d24c7b0.js",
    "revision": "d3010b86271119d2831582810efa75cf"
  },
  {
    "url": "assets/js/63.e970720e.js",
    "revision": "dd737c5d1bac8cc950bc6d68eb7a4160"
  },
  {
    "url": "assets/js/64.02e6e49f.js",
    "revision": "f5ea1d0df718a1cac42df3bdf106ad0f"
  },
  {
    "url": "assets/js/65.d4a257f8.js",
    "revision": "5961928ac8895676340bc7ebaf2f65d9"
  },
  {
    "url": "assets/js/66.afebdf89.js",
    "revision": "ed97220e99eadea3d13b3d3e26d62559"
  },
  {
    "url": "assets/js/67.69685d93.js",
    "revision": "0b06bb6d0422c0207c117eaa6b0f2e8e"
  },
  {
    "url": "assets/js/68.42d0e5de.js",
    "revision": "5c344683d0507c061362b6b82a63dc97"
  },
  {
    "url": "assets/js/7.6e11225c.js",
    "revision": "ac5eb1db7388b3f234951fcae0f8e9fa"
  },
  {
    "url": "assets/js/8.e0f88a50.js",
    "revision": "9044cd750ad45859cdf5121a1ff73ec1"
  },
  {
    "url": "assets/js/9.eaa01e6d.js",
    "revision": "ecd668a94474d4f54c092e6cf472d77b"
  },
  {
    "url": "assets/js/app.74c8b168.js",
    "revision": "832b8385b1d135d304820591b1062eb3"
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
    "revision": "5140044dd154b0e0952dd7b7e6e53f14"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "6f10668a4fd50f67332b153ae8725c92"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "8efcd49ed4c461d50362e0d3113f8c5a"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "b490e2074392ba7aa1cd94a83b03aacf"
  },
  {
    "url": "categories/index.html",
    "revision": "0117f24f14b1abab3addf7ed654417c2"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "5d2d073af7928cf8deb4e640277054fe"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "ce2ffd2e8db7fb170fc0bd31bedf2b11"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "04b9c1479446958c22879e8f298ccdc0"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "e656269298a3b7c3580b62eca206552a"
  },
  {
    "url": "categories/other/index.html",
    "revision": "cc3ce63d4f6a7f17412e88059c76f653"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "c749fc132f97ffbff170be3ff3a63545"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "7e1c8fc1e4cb3c5c0485de41ac0afdf5"
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
    "revision": "728e8a5790b3ae53ef7acca77ef2fcb4"
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
    "url": "tag/algorithm/index.html",
    "revision": "1dad5ed293cf8bcc824c24c9fd09cc95"
  },
  {
    "url": "tag/App/index.html",
    "revision": "f37eec3ec7117d31d4491f570e0688f6"
  },
  {
    "url": "tag/array/index.html",
    "revision": "2f45029bf1d228d04406a25a9e1e3f16"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "be424b9991c1432f5f1f941c56676f86"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "c396e696c48da2f6fb9784399206d9de"
  },
  {
    "url": "tag/css/index.html",
    "revision": "8eaba7089d91529de88d383689a5b6c0"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "21b28ea169970cd5ff90cf60feff895e"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "303b7eda92cc0351ca298f41bf4b92a3"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "c2fcaf838a4f462fd57203720f3db73c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6c43958571e1795482869f13398b7e3b"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "7ed6e00a039b0236b749db1931a517d2"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "14edee09a0d428ccfe4b09eca1ef475a"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "a47ed05a1e68367027d5926ebbd5cd9a"
  },
  {
    "url": "tag/html/index.html",
    "revision": "8084dc3de809b73a05b2c1a4b185e1ec"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "92a00bad9a10315a4f409b126dd6a9dd"
  },
  {
    "url": "tag/index.html",
    "revision": "48aa0de1aa88ab888d39fe3aa1b1b572"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "6d7d43977a048ced1adfe37b6c52cd81"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "e28e74168418c5c47e0edfc51234b0b3"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "b518ed5e372857e0a46ad01849af0d07"
  },
  {
    "url": "tag/js/index.html",
    "revision": "d8134c1b171831dadcab92cef1422169"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "da9cbe2b2fa8f1161e013fd1b1045f79"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "ee089d3dc557c57830fe9f22eb71b0ee"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "425eed2c46d0c65e79ae9737929dfd3a"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "23e05d7187d9cbcc11c77227f28f7953"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "c801290762a66d54dc8cdcf3437b0a63"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "8af4f51a2f1d24c683c96539f4f93061"
  },
  {
    "url": "tag/project/index.html",
    "revision": "d128b44ebe1a3d1fa25fec4e28d6cbed"
  },
  {
    "url": "tag/react/index.html",
    "revision": "c24aaa23c6432bfec181ca7f5cdf917a"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "6134c9a6536e5808cfdea4d79b985ee1"
  },
  {
    "url": "tag/router/index.html",
    "revision": "1b742182871ec06cb9a279b3d5d96575"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "ce7b2e3e3faad5cb0dd3bb4c25b96be0"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "708bce04b85f5e52bcf08380c2f8f332"
  },
  {
    "url": "tag/style/index.html",
    "revision": "200c62f852bdac2a89f781d96013b2e5"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "9035baee6ba3b618e4128c2a02160fc1"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "50865a95bf1d9770dc0ea7790e82fba8"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "6878b1391b6cc6794ac08a3b9b1912d2"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "ac4bca78462f91d48dffeca565ef9023"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "c554c506c8823aea4bf04e1697792101"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "ca19b7f230db74653f760e5d577096cb"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "fef5d83952d2246deba2ff1a7e4500d7"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "e36314eff9f04e164ed598847af0eeea"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "82d3deb0ee2acf2f4ea37dc3c21fd7d9"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "ab39d856f008e28aa6b613515823ad64"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "d30375795754f4a83964e1ef9208ae9f"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "dffa43cba89646bdc86ef6b2c1bb8a0f"
  },
  {
    "url": "timeline/index.html",
    "revision": "a1514f4c0816452f5979e6fecabbac92"
  },
  {
    "url": "views/about/index.html",
    "revision": "0a694d04dd0cea744827c5602f03d8ac"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "c3100c46228b7bb93cbdb259e6ae85c4"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "31145c77062cc9f6f08f9c0cc485926a"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "41ec6f4344d4e10c13f4dbd3c7224b57"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "91420d0c50c1d634512984f1516b0c05"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "fe9ef0f5da24304af220f9d6de290050"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "81d628abe8e9f6c548469fe04b4191b5"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "bb0c5a1761ab326e608cc289238ae2a3"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "d972bfef9557e0ebf361c6cfbaa58a89"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "48e9e7cb09db476ecfff6eda42f1a733"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "dd2523c79a4b2c04a083e3868c74d6d7"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "80f9603052ad5d5049ffc13fa1f6541b"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "2a05bd612e85b2f9251dfe6e333eaa8c"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "2532533d9f406cf0fd59a11e4cbb6314"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "32498f3d5f6ad1b585a670300219e25e"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "055077d6fad0f878d833e864bb5b6016"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "b523fa40a3c212f0f8f717d2b72e2bbc"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "e014b7e7cf4e6768aaa47830daedbfff"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "99323073ae0a3e8d1a8dd5dfe95e0709"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "0cb64f3ebe877afb447f61707955341d"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "42a57f4df24bb20e09cbf6ca6d9477a3"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "1475613013f098ed6a5f4a2726bb34d9"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "517387b52d223e862d61fb08a4696bb5"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "f123403142b912de7cbc7f6a42c9a6a4"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "7b7830eceb925f080a959e200c3bb504"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "d1b0efa2bb7fd1445164aa63d93f0ec2"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "cec1b573414b70754d538d60b911107d"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "c6051a508c965ca71ea6e564f98ae202"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "de9bf63437a0d38a4735bc7b17847b87"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "9afb535fef39a6f96032824ead4c9515"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "5995b6ebaf95537c763f82551c6be306"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "ab45adb0461bca517aa6255bc6b03f90"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "79f12313b6908e8eb0645cca09ff5579"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "161a1e16aaa89fca536ee38c6bd8a863"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "24c75b5add71cfa2baaae838fd7ce42d"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "4a6fe1f4dc6f65421590452bdebbc13b"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "05eb2f7570283dd0083a579a6d603f9e"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "86be80b06c8b8749a8d36b6982fe75c3"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "7e601ae3a10dd024c113fde72f0934c3"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "fe5553f8465394b13e27e36a6758eee4"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "c6083b052226a28a70d0c865e3abb886"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "7265374283466e03b4f137f5e4b61f35"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "c8c4d422f614039150811de90e730618"
  },
  {
    "url": "views/project/index.html",
    "revision": "e45ab815be73e7719f2d9045b982acb3"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "590b53cd8747f82908c7180757c1e953"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "5f79796998c741301fd2aad9a6ef6889"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "ef907383fa6c1e4fdd2a656f68bb1902"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "6ca33e834f6c5d7d72566eb1a3c90044"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "3e749e3f52ff4a4e347bb6fd26bf2abb"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "ef6a00ced01aeda2801141c03629244f"
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
