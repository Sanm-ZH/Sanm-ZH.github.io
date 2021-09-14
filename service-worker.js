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
    "revision": "2436df4db90da26da15830df63ff4d30"
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
    "url": "assets/js/13.8c3edaa7.js",
    "revision": "efebef256d451f7c30ce63e567f3375d"
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
    "url": "assets/js/17.ce5f4078.js",
    "revision": "8c3dab567045e0e939fcc143f42c5382"
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
    "url": "assets/js/21.3a3c4b23.js",
    "revision": "7dd07bc92069432e9c5b9952ba31d255"
  },
  {
    "url": "assets/js/22.53fd1a66.js",
    "revision": "537f982abdc37cd5806f51b2349ce591"
  },
  {
    "url": "assets/js/23.acea7c86.js",
    "revision": "69c1da38734568b6f4b3c9e852f35e1f"
  },
  {
    "url": "assets/js/24.36f02303.js",
    "revision": "33da8727cb299982a9cb04ea6f479573"
  },
  {
    "url": "assets/js/25.b6129ce9.js",
    "revision": "e2d033782eac96fa13f3b769d9c5305a"
  },
  {
    "url": "assets/js/26.a3947108.js",
    "revision": "869c36bc0c3ae90f6a4d5f1abad52c5f"
  },
  {
    "url": "assets/js/27.217a0a88.js",
    "revision": "9ed27674a5a5e85f45de8e104f9b75cc"
  },
  {
    "url": "assets/js/28.24bf2e21.js",
    "revision": "39a94af876bc1f0c719e99499770ecbc"
  },
  {
    "url": "assets/js/29.2ecce7f4.js",
    "revision": "36d15c636ef001d6e6d58aebd8aab03f"
  },
  {
    "url": "assets/js/30.02a1f2b5.js",
    "revision": "daad3e8d75e38c401845e1dfb236df45"
  },
  {
    "url": "assets/js/31.3edbd0ce.js",
    "revision": "29c6b566d6fd835aa45c17bf17b6a2a3"
  },
  {
    "url": "assets/js/32.624650e6.js",
    "revision": "5605a92c4261a8daf816219658daec29"
  },
  {
    "url": "assets/js/33.6ddac86b.js",
    "revision": "ba8fb5f8d842cc5f2b2a806d7ffb3fa9"
  },
  {
    "url": "assets/js/34.95088d40.js",
    "revision": "fe2816de0b5e8c81afc796eb50e596de"
  },
  {
    "url": "assets/js/35.61ddf4d7.js",
    "revision": "1fef41aa113513711b88197366b5d1c1"
  },
  {
    "url": "assets/js/36.32d699c0.js",
    "revision": "7eb790c59e1cdc0d65ab4ebd53bdeecc"
  },
  {
    "url": "assets/js/37.28ef8fbd.js",
    "revision": "a45bfe3b6070a04a1038dd7fd0df7c96"
  },
  {
    "url": "assets/js/38.c0f80268.js",
    "revision": "31513864e09dbd11757f6aadab1cb888"
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
    "url": "assets/js/40.d4913263.js",
    "revision": "511e9285557e814772460d723d3cdfb8"
  },
  {
    "url": "assets/js/41.b75eb297.js",
    "revision": "a2c258bcd7262a6ad1cb55e8599d6a15"
  },
  {
    "url": "assets/js/42.77fbceab.js",
    "revision": "7b824a4d426d795a7a18a61a07b9ab50"
  },
  {
    "url": "assets/js/43.8ff9fb1c.js",
    "revision": "4e3e74c7c90d9039ea7faf0b90caa880"
  },
  {
    "url": "assets/js/44.c6900ce2.js",
    "revision": "e8ffed71d43923a6075b27591e618459"
  },
  {
    "url": "assets/js/45.35bfa6ec.js",
    "revision": "c652a0e78a5d78ba23b7ef8af850666b"
  },
  {
    "url": "assets/js/46.b1fef1ab.js",
    "revision": "43b0f3b0b10a1da9e98a1a4f6ad66ca7"
  },
  {
    "url": "assets/js/47.69374f5f.js",
    "revision": "8bfd6c534c74124abbf3140f87c18a7c"
  },
  {
    "url": "assets/js/48.1b8ffd1c.js",
    "revision": "7e3f2d9ef15fb008f98f537f7387b487"
  },
  {
    "url": "assets/js/49.30968526.js",
    "revision": "ef3fc1af981362e6e0e4ce687b7a34b1"
  },
  {
    "url": "assets/js/5.94ed9788.js",
    "revision": "ff16986d3345f298914943ca0cad257e"
  },
  {
    "url": "assets/js/50.c407add3.js",
    "revision": "623dc208f9632bca4c49b4813933c8af"
  },
  {
    "url": "assets/js/51.9d27ddd1.js",
    "revision": "7f83302d0ff6e71c7d49f35a5d106d83"
  },
  {
    "url": "assets/js/52.f8a3d52a.js",
    "revision": "fb11911e8e471edef6a2cc7188b3c5ed"
  },
  {
    "url": "assets/js/53.42fa5b26.js",
    "revision": "63d85baefbc165cd155ecb5eb1c6f933"
  },
  {
    "url": "assets/js/54.18fbca79.js",
    "revision": "7ea440e198fae4cdccf5dcaf811c3344"
  },
  {
    "url": "assets/js/55.1b818af0.js",
    "revision": "634c07212e7ae4f1c06b518301bb69ca"
  },
  {
    "url": "assets/js/56.43f215f2.js",
    "revision": "22f0ba50d0f93561eaf96bf9c12d2934"
  },
  {
    "url": "assets/js/57.d6871548.js",
    "revision": "29eca276a7fb8ddda4e48bae1c31678c"
  },
  {
    "url": "assets/js/58.b3a45aea.js",
    "revision": "f87275f73e8e33415b0b85c12a585ed9"
  },
  {
    "url": "assets/js/59.6e1fbe6c.js",
    "revision": "c711c440d3b3cb4319304982ad7a639e"
  },
  {
    "url": "assets/js/6.5a888bd8.js",
    "revision": "3d625c3e1735247d747309ab8f9472ec"
  },
  {
    "url": "assets/js/60.a36cd60c.js",
    "revision": "d03bc53f584b97353f53e02f5965b3a4"
  },
  {
    "url": "assets/js/61.6f8f2f2a.js",
    "revision": "1c7c09a91720c9a7841d4dad4333f62c"
  },
  {
    "url": "assets/js/62.9d975441.js",
    "revision": "89c19883c2a6354e1a466c84624ae6c9"
  },
  {
    "url": "assets/js/63.925aa6eb.js",
    "revision": "beb5b1ca0aa47e7f557dfd0cef7c692e"
  },
  {
    "url": "assets/js/64.02e6e49f.js",
    "revision": "f5ea1d0df718a1cac42df3bdf106ad0f"
  },
  {
    "url": "assets/js/65.ce83e2f3.js",
    "revision": "293ee76d57855454dcdfe02d503cf219"
  },
  {
    "url": "assets/js/66.4ff8ce40.js",
    "revision": "33b109f42ecbef92c941b5767b0c7be1"
  },
  {
    "url": "assets/js/67.0df9cdef.js",
    "revision": "9a97e978012647bcedcc6108c605e6c8"
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
    "url": "assets/js/9.0c836eaf.js",
    "revision": "4d78f7c51577c291882b4a496f3011a5"
  },
  {
    "url": "assets/js/app.af5d59bd.js",
    "revision": "0adec61384436be643e019eb0c31407c"
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
    "revision": "33bb4eaa771c4b9b56cc1ac221ca66a7"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "aca7c9c7c75c83ad625c7ae91b3e5470"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "dbf323789056eb138e1ce0bf9f776d72"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "ebf892b45160ea8a8338c031e0597f70"
  },
  {
    "url": "categories/index.html",
    "revision": "35af71a3654b8104b7a600045b30abfd"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "cbc0b84d59da02719220260016411ecf"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "253893c7868ac3d074c310cbfdd202ca"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "47627c4673512c8a295eb9f4395e4ed1"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "65df6659258f089a6090c502cee8c449"
  },
  {
    "url": "categories/other/index.html",
    "revision": "e6b099a8ce26385cc5aad4a8e51378b4"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "6d7183cbee01fd066c77b67fb0947c5e"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "9bd6ced90caea0480e68a38bf62f5702"
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
    "revision": "5e80ec2bc3deb4e49e5489ae60e2fe3a"
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
    "revision": "1e33719d2acdeeb0149a82615f55a4b4"
  },
  {
    "url": "tag/App/index.html",
    "revision": "107ecb36cf257ddbd87fff8f0e4a5105"
  },
  {
    "url": "tag/array/index.html",
    "revision": "00e29ee27241dd6ffd24d9e476f5b23c"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "aabba42909ad86a5bbe7983e887ca96e"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "413465298e92bf4473510dd8b07d4379"
  },
  {
    "url": "tag/css/index.html",
    "revision": "04c93a6790162ea3f5f674258a111482"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "b12bf71ea868cd8c329aea05af7caaeb"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "600a5c7a9f09a53760a156858b7d4b7c"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "ffd731677f936161b30a1f3c2f7c9c10"
  },
  {
    "url": "tag/git/index.html",
    "revision": "104a3999b1905b6848fe188271c1d893"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "605bc1f1d70f7f1b9b68f3784444ca70"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "c156abe763fa2088af958d188e18c47a"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "fbc00ef4854733703ce5c51298ad1be2"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c581c002356579763f3a1f9f3ec07cda"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "e8f3fdf31330e07d9673ab370e43aecd"
  },
  {
    "url": "tag/index.html",
    "revision": "b40a6cc315051772d35cdf92263a294f"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "4dc39e2bc2d19cefefd8a364011d1c46"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "0c058658f72f4675834bd8645ba0a434"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "5f6d851e4ac6aee177a098ee2aaa36e8"
  },
  {
    "url": "tag/js/index.html",
    "revision": "813fd4cd2b8005b5142338ef1be880d2"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "4b322a1aa1f08dc10a988b71c8b2795d"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "71192fc29f633b5314b4c22fc0b51aa0"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "4d53b24ad8d354484a49a9083fe2eff9"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "6c1c21be90c70be526c0503ab611232f"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "d6cba917d5d5357c99b641aeb1ddad18"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "6acde0793662e9fcdb4bcabbe0f0e522"
  },
  {
    "url": "tag/project/index.html",
    "revision": "3cc781af03692c4a65a6e4f16edad591"
  },
  {
    "url": "tag/react/index.html",
    "revision": "5e1796eb0a7cb7193cc24073ea1eefb9"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "977df2d54481ce1ce7fbcd96e5a71453"
  },
  {
    "url": "tag/router/index.html",
    "revision": "8dd39f46c241545d7520a1d884ac644b"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "adef8a26a58b5685e87dba2dc9a29ec7"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "302cbbe1502286f5f7ce836f7e1e5f10"
  },
  {
    "url": "tag/style/index.html",
    "revision": "5d0acbd17898f2bc1631c97e77df38a0"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "56c12048f735e0176ec14fb51db83730"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "33d273852ab4e345fd182bb47a58a102"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "b489a0ea9c6c374fc739e26766bd7c53"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "689d29ad3a44e72eecb4a21d7c7bf69c"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "0f7c69a5477fe5ae4cf95456d2bf4a2f"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "cde17507c1d3acf6af112b1c05cdb7ae"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "aa95af55dfd07f51f8af4802136a60f6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "f78fec2a34170c6b705a5a96f743807e"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "fee1e820686f1275a0bebe05d84f9217"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "81ee352512ceea72646fb0b5a7474eca"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "8702e82710b1c498bd68d6a348298e47"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "581bea5aede32f36e12c6caf49484177"
  },
  {
    "url": "timeline/index.html",
    "revision": "4f327e288322740c80937b7e172ea2be"
  },
  {
    "url": "views/about/index.html",
    "revision": "0bdf4a9a7909dfb38c8b7340c8cad922"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "a4a1cd9d181b0633e6cb2c10cff6739f"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "72e62e4c1bf52529c7660367e39bd764"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "9363fdd5f67f52a4e10918b702c87c00"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "94fe4b8377f193991e7473e4213bee6c"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "d977a180b5cf86619af7003149940f04"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "1f5db845b0025bfffd6296e086d7e2b7"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "695fa491f544eb627f39c8bca7f608e3"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "1ac9d3401c0307505615af1c5bd20ac0"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "1e80b9d391913857ace0a2206b1e5067"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "1026ebfa184940ba2ba2e982d6832460"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "d55be76e4c6086dc4a7df8394005ee2a"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "694c68cb5dccfbc0e6ad8dd4f28370b5"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "2d56a271f6353b534249d3d369567d42"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "c01684e9bb60a37b5fdba805d9990da9"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "9ac68c3f0518195533332b24b85bb6b1"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "81aa01fae16268074b6e80faaec4283a"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "bb8e9b65f4f780b6cc0bdec072d356f5"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "22bbb258bc396edf22b3e528abe7e464"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "14852ad94649b0d9033cd3e825830ddb"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "ce46712c1eec74fa5250900cb3be5670"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "4c74670e0df597794adec1dbbe3a5ead"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "fe9ef39c302673688b59a96b48b46abc"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "f95d0fa8698e600cc0ae57ad15d2c15e"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "6a02eadeae8db90dfe5eeaea3bf29a19"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "157eec513d5ed3cd039f36b8075e6e62"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "792ad7fd02eb8bd509149b18a2ad812e"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "ea172fbbf0ffd6db1e33bb3385df743c"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "823cb9def04ee49051b92334d12577fb"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "5dabae9857c32dac59103bb80d859366"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "b32d1c6967da963a889866adb63f1357"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "2efaf0f89566d341a82cdf33476a74bf"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "cea09f7e7bfd7fd22b405a83a08872b2"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "01fc1057cb911c44283e27d8a038474c"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "da9bf142aabc9a371761b613ad0a8e4e"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "5bbc966773503b24621db09435da92e2"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "838d13a7592fe18fa46da7d6acdc25b6"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "9816f6c5e75b63c5c872efe7603c9966"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "8d591032757f6c4f80c8697b524baf35"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "95162ae2ea5957d2cd0ab54cb021be6f"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "668b547f0bc3dd39584abad7ed028f86"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "c63462824b58cb9ce8b18f7ec2744b69"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "dd6d26047af1d47d94747a75585b6d26"
  },
  {
    "url": "views/project/index.html",
    "revision": "88151098292a27a814c5488487820650"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "4190a4e26ea42de6e0615c7f64ec04e6"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "38404407d07d118276ca2916194c27a4"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "0a6cdd3a792337715d604b875d6b216e"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "26a93bca7688292377e20e0beec309a1"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "e75e87e4d368765d531897a9ea661054"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "3b1c786ebd0e21d1d1075056a6d6f2d6"
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
