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
    "revision": "36ccefd82af6b60aeb589c09d76cb049"
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
    "url": "assets/js/19.46c43b77.js",
    "revision": "3a84c9f6b315cebb6cd994049203c287"
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
    "url": "assets/js/21.911cd16b.js",
    "revision": "547c51e8d047eb985008a648f37a36e4"
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
    "url": "assets/js/24.9ce6e1ef.js",
    "revision": "2c84e252d859fbfb07c4dda419dd92c7"
  },
  {
    "url": "assets/js/25.4f8d6e4c.js",
    "revision": "399fabab62f38e9f93b92041928e03ef"
  },
  {
    "url": "assets/js/26.ab475016.js",
    "revision": "df9185acd1f90b6452dd65924ae2f4c5"
  },
  {
    "url": "assets/js/27.6457e7eb.js",
    "revision": "aab6daa5b2e53a10b1347e7739671a1a"
  },
  {
    "url": "assets/js/28.33c30e64.js",
    "revision": "c336a90fd198a20e56046b04abda1fbd"
  },
  {
    "url": "assets/js/29.f7673169.js",
    "revision": "e38240fca4c7140265777e9c30b03a88"
  },
  {
    "url": "assets/js/30.ea63b391.js",
    "revision": "6790c13c050be2c841970a7eb46f48f8"
  },
  {
    "url": "assets/js/31.7c45663f.js",
    "revision": "87d5832261a0a7dc96a4af3106defbab"
  },
  {
    "url": "assets/js/32.6e5fc71d.js",
    "revision": "de384d96bfc9894891a247dae5b73f2c"
  },
  {
    "url": "assets/js/33.b05cabba.js",
    "revision": "e7da33bb4e00a942dbddd8c9b54c44eb"
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
    "url": "assets/js/37.1c15e92e.js",
    "revision": "d7d594afde3ce521f3276d9c3a11d81a"
  },
  {
    "url": "assets/js/38.a2b86df3.js",
    "revision": "e3a04c381a64c450238e695d9143e2cb"
  },
  {
    "url": "assets/js/39.772f8235.js",
    "revision": "124168010178ba8931439275aec2efbe"
  },
  {
    "url": "assets/js/4.4b7092ab.js",
    "revision": "6fea9b540627ab0912439b91508d3ae3"
  },
  {
    "url": "assets/js/40.69fe6ae7.js",
    "revision": "9a025643eb42e826a3059111099f90da"
  },
  {
    "url": "assets/js/41.9c96dff1.js",
    "revision": "cec1b9c7b23a3e29ef2f3ff8cc2375f8"
  },
  {
    "url": "assets/js/42.bc15c088.js",
    "revision": "07760ab0420b7bd54fe96d15c62a05fb"
  },
  {
    "url": "assets/js/43.73ac72e8.js",
    "revision": "6416cadb4afcd8691f26c28a83760bb1"
  },
  {
    "url": "assets/js/44.878959e6.js",
    "revision": "17bc09906720ff94155cf1e7aadd9908"
  },
  {
    "url": "assets/js/45.2b3458eb.js",
    "revision": "5b381de253d0b8839651d357dba418c6"
  },
  {
    "url": "assets/js/46.674bafc6.js",
    "revision": "ae1c1e86296161e4d43e0d3b513d4e88"
  },
  {
    "url": "assets/js/47.2bf4a9ae.js",
    "revision": "fd9c666c7f91c4cc089ac26771e561d9"
  },
  {
    "url": "assets/js/48.8771233b.js",
    "revision": "ecceda7cd1766aaa223572bea0fd97dd"
  },
  {
    "url": "assets/js/49.fe670f5d.js",
    "revision": "075cdcaaa4ea1523866a9d7d41a6de08"
  },
  {
    "url": "assets/js/5.8f9ff6ee.js",
    "revision": "55804dc7a58e4854761fa9e9ac07fa0b"
  },
  {
    "url": "assets/js/50.49076c1b.js",
    "revision": "f32d71dbce6a8d273a2852e2f17821fe"
  },
  {
    "url": "assets/js/51.3c4daa29.js",
    "revision": "2e5a8a779fbdc6abb7795f2bdb38f38a"
  },
  {
    "url": "assets/js/52.0a3071a5.js",
    "revision": "12d09bdf6116c12d44ecc5dfd80215e5"
  },
  {
    "url": "assets/js/53.a363fe33.js",
    "revision": "8667f3dcb8c07b34c166aca5dd9eb623"
  },
  {
    "url": "assets/js/54.cc617cd6.js",
    "revision": "85f345fc4878814176db542382ebe4ef"
  },
  {
    "url": "assets/js/55.de798604.js",
    "revision": "231395fd3add1dd9519fa69dfc4a4a7c"
  },
  {
    "url": "assets/js/56.c9ed5e74.js",
    "revision": "92522147ded14dfc16af36bcd035f645"
  },
  {
    "url": "assets/js/57.2a3f1268.js",
    "revision": "71c0ea7d83813b1cff8759cfd98e6738"
  },
  {
    "url": "assets/js/58.f237e7f4.js",
    "revision": "73bb4733d68615814e7d89be28f6c9c9"
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
    "url": "assets/js/60.f10885bb.js",
    "revision": "be300853e16b1ced9c6224ef6c9fe1e7"
  },
  {
    "url": "assets/js/61.a983ea62.js",
    "revision": "7bf72a27f04a5a339ff9cf6e44c0384c"
  },
  {
    "url": "assets/js/62.71bc0536.js",
    "revision": "b16cf9c02d96eba7cb8328a74b99f610"
  },
  {
    "url": "assets/js/63.b38c9cc1.js",
    "revision": "5dd515e4071b2fdf3f72a3a9c095452e"
  },
  {
    "url": "assets/js/64.230c1eb4.js",
    "revision": "99ad1a45a8328d1b518b3bbee91b9012"
  },
  {
    "url": "assets/js/65.e6f40698.js",
    "revision": "a18d038573d4185b72f2a9a75c7d4822"
  },
  {
    "url": "assets/js/66.0f040ac3.js",
    "revision": "55b9151967f9350bedbfbe400f894a08"
  },
  {
    "url": "assets/js/67.4ad053c5.js",
    "revision": "e2d27bbfcd6157e0f5b7a52b7bd248bb"
  },
  {
    "url": "assets/js/68.51649528.js",
    "revision": "8cd9e165187e84f43369addc39d5c9f5"
  },
  {
    "url": "assets/js/69.aae3ffd0.js",
    "revision": "b91b9a7e6481a073e451f76480fb8c17"
  },
  {
    "url": "assets/js/7.8b9b79e0.js",
    "revision": "20137b512810a3aa6fe7f5fb30007425"
  },
  {
    "url": "assets/js/70.1c88a64d.js",
    "revision": "494fe19504e217e7c86fb35a665b0164"
  },
  {
    "url": "assets/js/71.0ebec9dc.js",
    "revision": "86dcef51cf94387e10e957605c0f68fd"
  },
  {
    "url": "assets/js/72.04c22846.js",
    "revision": "55af356d967736de54e426c94d5e285b"
  },
  {
    "url": "assets/js/73.d5c7c624.js",
    "revision": "041f65c92a319399a871bec330ab937b"
  },
  {
    "url": "assets/js/74.4543ecbb.js",
    "revision": "aeec91b72286d00461fa525901005754"
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
    "url": "assets/js/8.fb700b15.js",
    "revision": "17f0fb49dc4b2e419c612efdc0d2f447"
  },
  {
    "url": "assets/js/9.ebfa90cb.js",
    "revision": "81fe09c20feadc2674b4062b68cacfb3"
  },
  {
    "url": "assets/js/app.6848a8eb.js",
    "revision": "87d1e791e16ca568ccd11f5514ad2e18"
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
    "revision": "1d508eb4cbc0c73a65d235919e95a1a4"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "32e0b73912f894842240610c6a5c252b"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "45de0c92b07a9b598a18ddb3c8b299b4"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "e30e51ccf935c4c318ce077fe0493808"
  },
  {
    "url": "categories/index.html",
    "revision": "5cf6f84626d008ebced505274af19df8"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "6a025d144474ba43a524f918869a0def"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "03b33291308d2eaf0cce4d6f67926645"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "d330e49fb525a6117e82181d664aa8b9"
  },
  {
    "url": "categories/JavaScript/page/4/index.html",
    "revision": "c83be95308897becb820d85123be0193"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "41323dc2e9f6ef4ba23056b6f6c7299b"
  },
  {
    "url": "categories/other/index.html",
    "revision": "bda10ea8f8b69b2d89c993c9d65796e7"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "88417be70209f5ab17f59fbd69146338"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "5408b7ed4e0fa338be120b6e962e20a8"
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
    "revision": "e8eb0ddfd6b5b71da06f7c8e4a08e339"
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
    "revision": "572e499c49afc2e35bba3995dc12e8b6"
  },
  {
    "url": "tag/App/index.html",
    "revision": "7fa42610b269804d5768e91df840caea"
  },
  {
    "url": "tag/array/index.html",
    "revision": "11d3cbd953b1b64824786172a1ee99e8"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "536d41d56a056fd14524f5fdfed78a2e"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "19fb6ab8576a2fb150c98a4a61761c36"
  },
  {
    "url": "tag/css/index.html",
    "revision": "a251720858337f9ce2c885ec8d67f50e"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "c38333233d460e8c4378d1f559a24555"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "713b4d3aed76a3a986db91ac476c17c1"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "f88802954de4df8499208c735504d195"
  },
  {
    "url": "tag/es6/index.html",
    "revision": "a4880c1328a31e8d3f81cf0c7e6a5c6f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7f28d00e2b7acc53db44e58f4aab093a"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "6cbf5177d3fc199cdb7fa39505b2d9e0"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "815845b84e8926b8b8e54c19aafb6e3d"
  },
  {
    "url": "tag/gzip/index.html",
    "revision": "9dab273d87df1ef9f122451529af7d5f"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "44470ce6663949af9cfe4ba34428ff0c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "4a4d8ab462118d069bb246dffd260e33"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "cb8b0cc33a6c23d48b9eedd7002f79cd"
  },
  {
    "url": "tag/index.html",
    "revision": "98ab6d9c821a8295571a033719b0cbfd"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "fe299ab0c606eaaa48eba5f123254613"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "a942b59dbc9be4c4dfacfed29ceb177a"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "f9603fad3e9ab70b2a049c495b57a10f"
  },
  {
    "url": "tag/js/index.html",
    "revision": "c09e411bbb21cec875599ab8739435cb"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "bf2ab7ac6092d3ae110285026bda8130"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "3f94f8a56e05c2b5154901287e2c0ae0"
  },
  {
    "url": "tag/js/page/4/index.html",
    "revision": "96897b02c5287ff010f19360def9168e"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "700d2dd4354f6ef0d0b441466839656d"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "f30711e83f2d59dfbb5c6e1d6c243891"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "88c31c1baf7279a9193a0dc562df214a"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "23a107563989ce34b1eb4da8252395c9"
  },
  {
    "url": "tag/project/index.html",
    "revision": "7ae1802a415d38134b575d3e7d462207"
  },
  {
    "url": "tag/react/index.html",
    "revision": "c31b05ea4e65c5fea5fee31de278c402"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "9d1ccb9189d7bee5d38a29f50cee00f9"
  },
  {
    "url": "tag/router/index.html",
    "revision": "015f0b3121199a5cfdb309a41746e8dc"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "ab77411168ffb130f6663ef13ee46973"
  },
  {
    "url": "tag/sort/index.html",
    "revision": "9c00391e074846b8fbf1bcf7d8ae63dd"
  },
  {
    "url": "tag/style/index.html",
    "revision": "6ad27bbb585d8461d005af5d4d4e40e9"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "5ab67987903b7641e839cd9cdb0edddc"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "9374aa55018c61688316503b594b83b6"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "d72aa3d8797df14b877d7fbacd14326c"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "6f15d131324fafa8dc55d88f040a8455"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "a221c3ba686ed2e07103f2731b229416"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "3a09cddaf2d4bc1bbbdee35d591f673b"
  },
  {
    "url": "tag/vue-router/index.html",
    "revision": "d31f2f3e3c586a24e79960f8ce3f6931"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "f82857ff494359d34b8780fb1494910b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1a42cc90de745e6743682e68bdf264e4"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "890ad97d6d131024a75192dbe064ceb5"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "fa7aa72b7cdc6bb854500bed3e9ca59a"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "7ebcecedbcf53359b5121be380de83c9"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "819a487d14eb3d57da62f5e6ad4caf1c"
  },
  {
    "url": "timeline/index.html",
    "revision": "21b528f1c4da94aafcff4bb5eb07ecd7"
  },
  {
    "url": "views/about/index.html",
    "revision": "7810e9f9724bb4981d6cea6c225a0727"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "1fb6975589c858bbe5c3f33d4d62e061"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "086a5046c14c7f306fd24c4ff49d65b9"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "ce3f22a88b0914236100b778e3183659"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "be86d10df8073879016b7aa0b5b9bb89"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "4b0eb9901ac440800fe3953b6d1da144"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "db11ef02835229812b52a8707b0f9028"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "c9e0e8824584b1fd4b67dcaccd9558c5"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "3a3910ad4b2a79caf2ecee2f860ba2e0"
  },
  {
    "url": "views/Css/technologyToMasterIn2021.html",
    "revision": "ff036264021927ff923139a6cb04e42d"
  },
  {
    "url": "views/JavaScript/algorithm-sort.html",
    "revision": "cf8e5448713a68ab33379985d883e079"
  },
  {
    "url": "views/JavaScript/base64-gzip.html",
    "revision": "89fc2f43425bb8d989af4d00d751651a"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "56691b245d3fcebcafd59733cf81f376"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "fac342ba5128b922ef78dc44803c0aa8"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "e68b4282f94c0222faa36d96e2f5fd2b"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "3debf75fed302d427950b27a23cb94bc"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "6e3f3ef43d4692e28654a5388ac45ad5"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "0ea3a8f79a85f35cfd585a76c15763b7"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "8e8663ebb2b1ad1436d98b634b1c8c4a"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "91b3811120c8df7588c44e903347ce73"
  },
  {
    "url": "views/JavaScript/es6-ux.html",
    "revision": "44354403a2374b00882bb88e53be3479"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "c554b341d96e5801b502d068f1c4f606"
  },
  {
    "url": "views/JavaScript/file-base64.html",
    "revision": "feba891f0ba2bb462d9b5518e4486bb2"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "29b64b4912308ee8ebf322233cbf951e"
  },
  {
    "url": "views/JavaScript/image-compress-spin.html",
    "revision": "b73fd31cefd835a764593f8f384ecf8f"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "e0ca3f00b6e2d309eb833dfa5ee0a87b"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "846cdfae0ef8d467ce3577f108287357"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "028e3b2319ad569ea083c00965346dd4"
  },
  {
    "url": "views/JavaScript/js-style.html",
    "revision": "070a501f2c1b9a55860ea977f1efa9ab"
  },
  {
    "url": "views/JavaScript/NaN.html",
    "revision": "2bf5d63f327933baaadf2891a2edccdb"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "8c019f4f6f9771fcc8452cd386402e02"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "7a8595ca3fa430af4962af0fee564609"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "5ce9119b51899feb24dd3d16cde5268a"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "871e32754c1dee63056ca3bde732cc74"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "5859fb812865006ad10a9078427f0231"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "d81aebf56e5e03648b7a0be1110441aa"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "a3e039c1177de5753fc4e70e33361701"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "57ceee3286538f7f2c52e17d223c57d6"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "e1bcaa0625045cef864f5e19ec186ae8"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "d2d37b074b13e8a639ef686655e83d45"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "cfecc836823c2d6dfde9010e6cadd25a"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "d32dae10d9b4c7311e03c6dc9fafa315"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "c984c90e813699b199e7b7c0e40665e3"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "204850ea05a53614aaeacd59c1d3e2fe"
  },
  {
    "url": "views/JavaScript/vue-router-params.html",
    "revision": "1cdf8a53b72db47f5fb1f32e0c47682a"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "1fd78a30d3a8524d4ca9496dc860fa5f"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "ce67fc49fcf2fb925e58ffd4c4e50be5"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "9bbddfe93e85454a81123b4de04e49eb"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "f41bd697ae9e412a920f3d35a8659eb7"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "d66b12da559be793078244f2baf114ce"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "bd314b2c71dff9d1312ab7d5c6adcda9"
  },
  {
    "url": "views/project/index.html",
    "revision": "b7a6e43de05e1612938157d6ced54a8b"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "0d33aa704a2739ba0d3ded0d9cf81489"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "dbbfdba94ceec1460b2efb4f9246bd2b"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "353451261730086ba750326131f0b758"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "b56531612ed8d16ff22914b7dd8fc4b5"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "1d65be9f52698cb17e9c9c6fb65b5498"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "bd7d2375d7aa807da4449c112cbc2966"
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
