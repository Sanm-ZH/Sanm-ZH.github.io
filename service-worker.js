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
    "revision": "1b2c00ac9e3624e1e3d1092d8f307608"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.0f208eb6.css",
    "revision": "835688273ddd64c1b110c21f4c9f1f60"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
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
    "url": "assets/js/1.806e9581.js",
    "revision": "8cec8d948a1b929ab5156b259262abc6"
  },
  {
    "url": "assets/js/10.a299d969.js",
    "revision": "eb988c81432f888a51fc608e74e30b6d"
  },
  {
    "url": "assets/js/11.d94e9d5e.js",
    "revision": "070b480506ccff00f8924f4432bebabb"
  },
  {
    "url": "assets/js/12.44ed928c.js",
    "revision": "6911108564bad548f3d756384bdee12f"
  },
  {
    "url": "assets/js/13.c665a2c5.js",
    "revision": "d0717adc250b8532f27386d592cbceb6"
  },
  {
    "url": "assets/js/14.9af93f94.js",
    "revision": "dc3ae91d3c9f1a455fe001d2212ded50"
  },
  {
    "url": "assets/js/15.c89c101b.js",
    "revision": "78e4a049db8efdca95b186e34c868c29"
  },
  {
    "url": "assets/js/16.5fa6d4d9.js",
    "revision": "cc6c9bdb386067f71bb168e81b222120"
  },
  {
    "url": "assets/js/17.80f6e11f.js",
    "revision": "c8d2b7c044c436542da81bf7dbd54d8c"
  },
  {
    "url": "assets/js/18.494de33b.js",
    "revision": "5edd530fb13816b39f7dd4f3c6175be1"
  },
  {
    "url": "assets/js/19.53d90eaa.js",
    "revision": "1246c0b860a91e8fb53253784b114526"
  },
  {
    "url": "assets/js/2.007020fc.js",
    "revision": "a512856137615802f4c75fd8b7bba926"
  },
  {
    "url": "assets/js/20.ecee53be.js",
    "revision": "d051dfaec0aa6fcaea279a84c35cc590"
  },
  {
    "url": "assets/js/21.b88be584.js",
    "revision": "0e5bff2197859569d01146ad2d5b544e"
  },
  {
    "url": "assets/js/22.821a3719.js",
    "revision": "eef17f98cd5344c3309e5faa7ffd6b72"
  },
  {
    "url": "assets/js/23.434607a5.js",
    "revision": "96c47d9c015542b945ef7c92df56a95b"
  },
  {
    "url": "assets/js/24.75ea603e.js",
    "revision": "55e960262d36674090c75649a6728463"
  },
  {
    "url": "assets/js/25.7903a67f.js",
    "revision": "53d31c28b2e41bcf6185203c1b04d014"
  },
  {
    "url": "assets/js/26.06567e05.js",
    "revision": "97f6f840e0d2ed4cf2e0e64e909c4611"
  },
  {
    "url": "assets/js/27.425d1047.js",
    "revision": "595c6669651decb6297590922f935769"
  },
  {
    "url": "assets/js/28.3834a657.js",
    "revision": "797823805582c940ae7bb34fd013eb6f"
  },
  {
    "url": "assets/js/29.dec4e86c.js",
    "revision": "056120883d990b7026e2f8669738db63"
  },
  {
    "url": "assets/js/30.3fc95efc.js",
    "revision": "c0c16b61032290b5d20165ed141d0bc8"
  },
  {
    "url": "assets/js/31.9caccc09.js",
    "revision": "d3f6fcbf8292806219b5d78c1e205ca6"
  },
  {
    "url": "assets/js/32.ee1fee16.js",
    "revision": "eda4f49b2252a72f71a5c942ef10f10e"
  },
  {
    "url": "assets/js/33.7e88fd14.js",
    "revision": "97c73b76bee65ede4b0fd315c6c684e2"
  },
  {
    "url": "assets/js/34.299f99b4.js",
    "revision": "4f8001f1ec7f8da8b4c35efd962b9d86"
  },
  {
    "url": "assets/js/35.dbcbdfcb.js",
    "revision": "c2e9b599648ab414b8f5de067e29dba9"
  },
  {
    "url": "assets/js/36.92382208.js",
    "revision": "af2d09dd950ce8bb817d6ef457e05823"
  },
  {
    "url": "assets/js/37.d7752d40.js",
    "revision": "5a958ecd4c296082da18513ba899ae52"
  },
  {
    "url": "assets/js/38.b9d04f5a.js",
    "revision": "6095c3f077c18a20b01aee044605406a"
  },
  {
    "url": "assets/js/4.9399de0a.js",
    "revision": "97d0bdc814204324e0107e18e6ab7f92"
  },
  {
    "url": "assets/js/5.dac2baa2.js",
    "revision": "2411297477d1bcdd266e4e76d795b550"
  },
  {
    "url": "assets/js/6.c4317521.js",
    "revision": "5dfc767c0cdb33595b49b64560ec8398"
  },
  {
    "url": "assets/js/7.0fac8c34.js",
    "revision": "a0c08cef35c778d83d26509104244329"
  },
  {
    "url": "assets/js/8.2f7be112.js",
    "revision": "13842b2481c5e6db8cb362b867d4ab2b"
  },
  {
    "url": "assets/js/9.b48d5daf.js",
    "revision": "03065e9bc3bfc6528af085131235ce28"
  },
  {
    "url": "assets/js/app.78e547e7.js",
    "revision": "a0bb132908782718c64793183076747a"
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
    "url": "categories/app/index.html",
    "revision": "6f8ab54660f90b73cc835aa16bfe3fd7"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "b1da6c8c91f079d8ab5dfc3789fee158"
  },
  {
    "url": "categories/index.html",
    "revision": "e60392dcfeddeeab83a963eb31a67301"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "856045692d4b4c2715a47df85ad47a68"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "9d88f5757f6e1151c9be62de33d7fd0a"
  },
  {
    "url": "categories/other/index.html",
    "revision": "f340ee4b93c2299be1f2793380e8846d"
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
    "revision": "1efce0f53d4eef515bc1c1723a802b4c"
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
    "url": "tag/App/index.html",
    "revision": "091bb7564354c128c25bfb34e6a4fbb4"
  },
  {
    "url": "tag/array/index.html",
    "revision": "f3a0905d850785372b6683ced19e3ba4"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "68c4b85174016aa37fd63a561cd886b1"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "51af75ae76ad30bfe974bcb17c0ee07e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "5aca28566cdeef78ef68c06504b6ac2d"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "e91eb0a21bd81d42ffe006ac92bf8c9e"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ed345bab013a585e77f77461d52c9afc"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "db9463e759a352d487620282e4ff5519"
  },
  {
    "url": "tag/index.html",
    "revision": "4d41516f31bef664a4ab148ae1bb6f4c"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "43a8e6cdfd866e299dff1c3066e136e9"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "1e7e5f435cd769ac9b0af42d8563968a"
  },
  {
    "url": "tag/js/index.html",
    "revision": "d7d155cacc7fdc3888939a406ecd5b02"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "9f9093af2f47c4f1fc2a1ec1e0687227"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "8821570a158832d839911de56217d53d"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "7ff09e7d6833c6bd327d37e379547cfd"
  },
  {
    "url": "tag/project/index.html",
    "revision": "65323de66974d28d0f03e337dfd235fa"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "c98acd71fb6a04d6a7ca196bd6c911f8"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "91daeeffc65836c539ca3e239917ccdd"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "f6dacff007e8694a6d039b7a0488e93a"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "76009b8c20be5656291310610d5b3790"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "7c7addbeeae8c0bc4bc0e9d65409294f"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "6602190d78ff8599ff7dd28df9a03c1e"
  },
  {
    "url": "timeline/index.html",
    "revision": "d15f3e15f188eda833962744ab371822"
  },
  {
    "url": "views/about/index.html",
    "revision": "fdb566ce592f169f674587ddca1bd185"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "2b833105d196ddf1146d4f05863996ac"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "6792a1e8dfb8c27b57c4b8f035372d5d"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "e87e897993c3281fb364650885f9d9b6"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "bbc1680ce4e297ad0aa9a7b04dade4d9"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "c390a0905e8c97ce936307fd0d2f15de"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "b23510a00362463f76ed31f921689dcf"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "4b9dde2c96e618bde2b046415a5591a9"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "47f3a012dd6fcb8952906c5c05252bde"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "2d4d5b5147ad473bb530d5db6b17cc0b"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "df7688777c64377cc2330187ef18505d"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "d94c0fc94f1d9db3df302da46b5aa90e"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "e4cef3014008d5144241d51625e7e551"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "c38ce7f4f635295c8ae2cc658b24709e"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "1ba50c72c5d514c98ea7ce63aaf5eeed"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "6a60ffee551aeafc2e9dea608947c6b8"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "a54f77655af19236b5cd11d41634df3f"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "a54f77655af19236b5cd11d41634df3f"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "87f8688b66d7a7a950896e298bb8c7a7"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "e9c7c0e711ac5929c939dab8e821ca6a"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "12be5c936fce8c854d605e3a884ed019"
  },
  {
    "url": "views/project/index.html",
    "revision": "d83330b8377b8b26205c278e6693c8c2"
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
