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
    "revision": "e044b5b92d340c4d212e98572de5e4f2"
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
    "url": "assets/js/10.6894f043.js",
    "revision": "7be3213a8e238c2c8a95d59816760f46"
  },
  {
    "url": "assets/js/11.88238165.js",
    "revision": "253690a08a3f511213f93b51a96d34d5"
  },
  {
    "url": "assets/js/12.282c8127.js",
    "revision": "2fdf4ca085ff8306a3a1a4342813d545"
  },
  {
    "url": "assets/js/13.d298b13d.js",
    "revision": "5027fad74e07520fdd722b3694070c67"
  },
  {
    "url": "assets/js/14.7a0e477e.js",
    "revision": "73a44a1f05fc0156519bc4b68d4bcf0a"
  },
  {
    "url": "assets/js/15.d8ba3473.js",
    "revision": "c613e6cd9f2acd7333ba1319cae81cba"
  },
  {
    "url": "assets/js/16.05bee2a9.js",
    "revision": "a457a65d06abae781aafa348dc1cbdf9"
  },
  {
    "url": "assets/js/17.73777eb5.js",
    "revision": "c2742c0dffd83b27ac6b1189ce1449d6"
  },
  {
    "url": "assets/js/18.5d0e4a3a.js",
    "revision": "3386cb14ac7e26cf4a9b109a620188b1"
  },
  {
    "url": "assets/js/19.fe48b6c8.js",
    "revision": "66b4be85e6ac7f6dc0b69565a9eb337b"
  },
  {
    "url": "assets/js/2.ed24d7c8.js",
    "revision": "0c1c8a4a8fc11d82e7aae6b7333ab6a1"
  },
  {
    "url": "assets/js/20.33e6ca92.js",
    "revision": "e2c1bb1959eeaf1e08d9cafd4f5d2f14"
  },
  {
    "url": "assets/js/21.0ce7d125.js",
    "revision": "b9572f7e193bc493d201b16cb2eb9e41"
  },
  {
    "url": "assets/js/22.e707f628.js",
    "revision": "7ea07309f686dff845ea597f17ee043e"
  },
  {
    "url": "assets/js/23.41883d0f.js",
    "revision": "cb19eac0db0ab2ac24491feed4531593"
  },
  {
    "url": "assets/js/24.d087b8eb.js",
    "revision": "77260938e3f348dc21977a5633816c08"
  },
  {
    "url": "assets/js/25.becbe83a.js",
    "revision": "6a82b1d82d886e1e1ecc4514dcfa6048"
  },
  {
    "url": "assets/js/26.fad58d24.js",
    "revision": "e1dcc724fc38d41a9a89ac2301c58638"
  },
  {
    "url": "assets/js/27.3d0c372d.js",
    "revision": "d0971ec525ac9e7ee87afcb4becac514"
  },
  {
    "url": "assets/js/28.ee8564a3.js",
    "revision": "b99c1d6e9798f478e735a99f2d397ad8"
  },
  {
    "url": "assets/js/29.1979a377.js",
    "revision": "59df483b1903517402044ed7b7ed3639"
  },
  {
    "url": "assets/js/30.02a1f2b5.js",
    "revision": "daad3e8d75e38c401845e1dfb236df45"
  },
  {
    "url": "assets/js/31.e26dea7e.js",
    "revision": "aef19e31ab6a32b00bb30fea7e6d23cc"
  },
  {
    "url": "assets/js/32.c47b5a15.js",
    "revision": "4aa6628134423684583e4d7292bfbbfd"
  },
  {
    "url": "assets/js/33.87d2251e.js",
    "revision": "572c2960151a65b88116afb42570342a"
  },
  {
    "url": "assets/js/34.408a2924.js",
    "revision": "5f31f074595edc71cb9200ee7b737ad3"
  },
  {
    "url": "assets/js/35.3a8e0e18.js",
    "revision": "4b7af2711733cedc6c8551c0b63038de"
  },
  {
    "url": "assets/js/36.74c79180.js",
    "revision": "370c12de510448808159f6758a3b954b"
  },
  {
    "url": "assets/js/37.72de29c7.js",
    "revision": "fb20eb09a270de11bf7f21c09cde130a"
  },
  {
    "url": "assets/js/38.7f1b1c7a.js",
    "revision": "5e08a0f7b80559a800855e39c807a384"
  },
  {
    "url": "assets/js/39.bd93074c.js",
    "revision": "a9e34f733607d89378fcdd2b8772efa1"
  },
  {
    "url": "assets/js/4.14fe9c99.js",
    "revision": "3d2e79e78d3d7a08ad7779aa751939cb"
  },
  {
    "url": "assets/js/40.c0dcf566.js",
    "revision": "906a5195f2e679d48d8dcf25af064379"
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
    "url": "assets/js/43.81aca5da.js",
    "revision": "f82ef5481375982a78f4c0f100445b0d"
  },
  {
    "url": "assets/js/44.4edda636.js",
    "revision": "90edc3491bb1abd6d582aeb2d3b4e5fe"
  },
  {
    "url": "assets/js/45.480badeb.js",
    "revision": "d6c0c23c2e4f93b578b6c8eac52bba9f"
  },
  {
    "url": "assets/js/46.41bca4ef.js",
    "revision": "9b682c8359307371139d92ad58db30f6"
  },
  {
    "url": "assets/js/47.955ef85d.js",
    "revision": "3c4a72c50dfdd600f4b2cf8a050543d9"
  },
  {
    "url": "assets/js/48.cd610134.js",
    "revision": "fedcb74bfd1bc8399d4dbfcaa4cbf7bd"
  },
  {
    "url": "assets/js/49.78267ec7.js",
    "revision": "1df1b257fc4871627a93f59fdbdb3eb0"
  },
  {
    "url": "assets/js/5.9384e6a7.js",
    "revision": "f0a9fe16999dfb95538152119597d7dc"
  },
  {
    "url": "assets/js/50.c407add3.js",
    "revision": "623dc208f9632bca4c49b4813933c8af"
  },
  {
    "url": "assets/js/51.493a4f0a.js",
    "revision": "23a5e6cc3b6fea9b9d8b318e0421f676"
  },
  {
    "url": "assets/js/52.53ca6ecc.js",
    "revision": "2e7162d4f901561df30de9973973f344"
  },
  {
    "url": "assets/js/53.067492ba.js",
    "revision": "86fe93ff8aaf05004473a8e8a406a49a"
  },
  {
    "url": "assets/js/54.26aaaad3.js",
    "revision": "9533fba4debff898407449075c485966"
  },
  {
    "url": "assets/js/55.deb95c62.js",
    "revision": "31af340e2ad7831667052e9fe7d34f9c"
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
    "url": "assets/js/59.8a2ec2d0.js",
    "revision": "967c3d09e2a6c655b8c16416c8f2327c"
  },
  {
    "url": "assets/js/6.1d1737a7.js",
    "revision": "d4ebb5cad3926247eb6fc648b0d14a82"
  },
  {
    "url": "assets/js/60.7385071f.js",
    "revision": "629c4a824a5f0391c6e57a391f561538"
  },
  {
    "url": "assets/js/61.28443726.js",
    "revision": "edc537aa26e7f60ffc7dc01beab5e3aa"
  },
  {
    "url": "assets/js/62.a065ed87.js",
    "revision": "4f3b29a02f8f2cc9ae29e8ecf38529af"
  },
  {
    "url": "assets/js/63.0de75160.js",
    "revision": "63ddaacf9dc01b00ceaddb760cb63e70"
  },
  {
    "url": "assets/js/64.e8c3a6f6.js",
    "revision": "f82dd5965e5261a18ba5526d16b15059"
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
    "url": "assets/js/67.badd4066.js",
    "revision": "50f3b4852ea0bddd8be811f93ed2e45c"
  },
  {
    "url": "assets/js/68.03a5d2ae.js",
    "revision": "47e01304f93835da554392fc4ec07d39"
  },
  {
    "url": "assets/js/7.efa69eca.js",
    "revision": "febdce6e2b93919ca8dd50a0bda8482b"
  },
  {
    "url": "assets/js/8.d8ee4430.js",
    "revision": "a828de73a27ce7717623475cf1e3eb75"
  },
  {
    "url": "assets/js/9.1d4826a6.js",
    "revision": "a80dc55374c59a9fde7fefab19a4632d"
  },
  {
    "url": "assets/js/app.4468ad80.js",
    "revision": "fbdf9715189214ff6b90abc9067f95ea"
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
    "revision": "0c4684f3291393bbe336bafa0e8f7b22"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "2433e71059666d54fec5294235e28e01"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "d6fbc55f40a3726a7f67743b7ddae83f"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "e31194aeaea2417d038e295c4b871533"
  },
  {
    "url": "categories/index.html",
    "revision": "b748241f64ff96f87e4df440b9b3404f"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "5f308d71df58abe5eb3adb613c10aceb"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "90f9863397e11c40ea1ae68164997775"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "e04f3ed8245b360c1b816de8ae96ecd5"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "cd25c6ae00476078ea26e8c65a170f3f"
  },
  {
    "url": "categories/other/index.html",
    "revision": "3b553775e494ba3d1344725ddb9732a5"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "95760675714d43a65cb2bbd5f15c1189"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "f4b5c1e9aa863c0b88bd798432913c5c"
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
    "revision": "44cf4016b647daa061d56a0579cd4d61"
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
    "revision": "d2fce9082ff4ef9b09e1d9b2a1c1a691"
  },
  {
    "url": "tag/App/index.html",
    "revision": "2cbf7f600d44ab8c0dbd7ce388c8746c"
  },
  {
    "url": "tag/array/index.html",
    "revision": "514ad49d0fafbef35c391b20c3f4ada2"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "3079aea15102421bc9946b4438433f11"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "26e40715209d844cfa8023f16da0ec3e"
  },
  {
    "url": "tag/css/index.html",
    "revision": "1bf72369a60d98f48f6f48106f3f01cc"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "dc8c02f67d2f41130f822fc1cce02edb"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "8c1d234073b6a78fe147f81831e395ea"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "041383a1bd0709985e1487d17ee7fa0b"
  },
  {
    "url": "tag/git/index.html",
    "revision": "9242a4cd41b1d365d357fd1a6ae73c79"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "f97b73c173256e85e4d8e61b0da4f0ea"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "54089c7e1825be04af2bed5f9bf8ea77"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "5e74a3f88cbff9b8e99ecb76a0b90c8c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "045e87b4ba4d321a0a7d3faf1d00415e"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "7e402cbca571440e60a5796dd263613e"
  },
  {
    "url": "tag/index.html",
    "revision": "1ac0fca36840bd605508686076efe04c"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "5b94ed70a6a12eccb79054752f60b6d6"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "e6ee50603ee9e9ae7803ae2c721661e1"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "84ffff8250153f4fc98842a15c0ab1ea"
  },
  {
    "url": "tag/js/index.html",
    "revision": "82f578ddbfeb2aa6602f077a29bb7624"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "555ba84a4063065fa3d611b5c459766e"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "28a9b0ddbbca4cd7d13f29772145c79a"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "14cf5d9d3cd7c09f1675c42719651853"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "e581597d584da5c3e00cfa143160d171"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "2cab69cf61514a332659b6806b93c48a"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "a0420d28666cf7f528ac8d05e79379b3"
  },
  {
    "url": "tag/project/index.html",
    "revision": "4717aead41eb095a023a31305a7ae600"
  },
  {
    "url": "tag/react/index.html",
    "revision": "f6625ed5059d3c5d5b971d124a249cf3"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "ec9e83a5041fcaa86211c2f09ad576a4"
  },
  {
    "url": "tag/router/index.html",
    "revision": "919362c8c00418c628c9d07d0c1a80cc"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "2b80468b186b02fc51e698c9f5f4f7d4"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "d306d97903614df3a71ba2013e15d1ea"
  },
  {
    "url": "tag/style/index.html",
    "revision": "1e894b7dfb7518abdacbed943da443e1"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "2c1a08c455803e2e6422caa9db61ab3e"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "2f1dd5d2032b7d704f4583a2b13da47a"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "99336f28dbefa4d9ff75894704344034"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "5fceb5368516d4fad5d0b941a846e0d3"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "45d303297f54a5c19e1f7ddad72c18b6"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "a6d375b20ebf17d2585fba1cc95d56bf"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "1df73c1b21a09fda889ef90d305b7a45"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1f6c6aa37feda01bc226cdbe75fa658e"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "ed75a8b3894665ca2758b4a19817aaa6"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "50cec6c28ecd91e4a391ab4c61010d73"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "cb19b75fa6d60c11ec240a32e5baccb2"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "a003ffe74104a6cdf20adbda3989c5c3"
  },
  {
    "url": "timeline/index.html",
    "revision": "69843dd83e37d13cae8c83140232bb70"
  },
  {
    "url": "views/about/index.html",
    "revision": "5f0f35f5d2d9841650ddced40234faf4"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "aefbe3211968b6f919ce710104f8c44e"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "8e4fd5f038b404449edba4d11d7dda7e"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "d93fbe49f1ec291b39a86cebb5340ef2"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "36e5f4144c596aa645d64a397ad0b2c5"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "4b8bbb9668610dd5dc1ec1ca6778ebbb"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "56f8ec0d3be48a900b825e6b10b12a42"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "b9a5cc2226bcf42195c3212399abb79f"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "ebbad735ccfcd30e808aefaa64323fa4"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "83b30e52e921ca4dda883bad11502b5e"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "d58abec38915e23cfefdd54438783500"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "88f82c6dbd32d134804c36906a54f3fb"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "29e34fac0bca22c43ea1b445f01ca13a"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "35e4564ada516b856a668d14d0d5dc62"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "381fc8baea55d5bfc808be30f50ea0d4"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "2e491b3ccfd5951e24694bd478d6996f"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "b81f16282ec7f5fef68a1b12e719a66d"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "086f2e353c1f5d20b9f30d5f407040aa"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "13ee87ae9dbc2497fdcadbc8eba4e1e8"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "1e75e8ed3293ec56b426906d4da6983a"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "3589a5452166725d136a5603bae1494e"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "0004e2ad016cef9d623147d5bf8de212"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "df020cf2fa2481ec9c6e6ba03081688c"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "25b9ceab987c60ff71706cdb0e779ca5"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "524560efa60054cd1e316b3641b3b979"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "c219ebc17af658e562a29ec69cb77171"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "79f919804d8590099831e3d08286c9eb"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "206bcbe9dbafdb21ff2c440475f7b2f8"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "6dd5ebb7266f9e53421eecaf3a4af2b1"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "70b4b0f3985b5b28797d7a91e4e2cb5b"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "81aa857d4ea54d140cc067ab71889729"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "05d45e0926a3b48478c1f74e170bd763"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "0a1edeef35139168a3dcb2969233baf3"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "010de23f00124fb76598720f5226a5a3"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "89dbe57e5d80a40ea5867ca84a2e7052"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "f6c6758aca110180d0fd9a89b1d63142"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "cfc8d2d7778dbd5354638301537af4b7"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "6c78ccc8eaea935258f91d5b8ce637f3"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "f977d4da76e9010e05c5cec1fab16e9a"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "61e442a0f3dacea345632b80108ba9f6"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "37333e91f7b13079f44fe7fc30b842cb"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "3a81ddaeff980cfb06f434b5d1896007"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "fd765ee0a9ec7e80c958407457a5d38d"
  },
  {
    "url": "views/project/index.html",
    "revision": "804c0caa1c94bc0e5ac31f0641b713b4"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "ee8f50d9be40bec2fbead9536c2d802b"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "414a241f0037d8783354dcd9fa43c568"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "0c429cbb39ae3fa9b579bcdf97af972e"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "39885aa9446972bade67b940f011e97c"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "48ead1337b005fb63d4564231f3114ff"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "86f6b7cd3cc8d380a6076422aaea8fa2"
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
