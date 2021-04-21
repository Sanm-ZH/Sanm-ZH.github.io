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
    "revision": "df5ae1a1115cd27c44f7f8ef47a436d4"
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
    "url": "assets/js/13.48884b59.js",
    "revision": "30e1a7cedd9397f34acedcb067a327d9"
  },
  {
    "url": "assets/js/14.bcf5abf7.js",
    "revision": "1c25c82cdd86ddd7e1e8ea40a372f1a2"
  },
  {
    "url": "assets/js/15.c89c101b.js",
    "revision": "78e4a049db8efdca95b186e34c868c29"
  },
  {
    "url": "assets/js/16.8e112d37.js",
    "revision": "367055b876b825f16e4b4db24693229c"
  },
  {
    "url": "assets/js/17.fb30565b.js",
    "revision": "374fc4aa77dce6dec31c7f948ee24107"
  },
  {
    "url": "assets/js/18.76f9df93.js",
    "revision": "a2c4411461b5a6258e09a36335c63d69"
  },
  {
    "url": "assets/js/19.4cdcb193.js",
    "revision": "719c8e1be1a798a8b9cf9a1c538de977"
  },
  {
    "url": "assets/js/2.007020fc.js",
    "revision": "a512856137615802f4c75fd8b7bba926"
  },
  {
    "url": "assets/js/20.1c4f9306.js",
    "revision": "7fe955b4884254dee2ad8e17cba4bd41"
  },
  {
    "url": "assets/js/21.5625244a.js",
    "revision": "2053b09af60d462af1e786ad08e892e5"
  },
  {
    "url": "assets/js/22.fcae4c36.js",
    "revision": "b534dcf8d6674013be7ff155e4c79c8e"
  },
  {
    "url": "assets/js/23.63367be7.js",
    "revision": "63265f7f224f27b1c4520e129be88f07"
  },
  {
    "url": "assets/js/24.9562be33.js",
    "revision": "d7cdc80e72701db553cbe6d115828cbd"
  },
  {
    "url": "assets/js/25.868291ff.js",
    "revision": "15510d2fd77ddbea7c12f2d4cd83526d"
  },
  {
    "url": "assets/js/26.73c9015a.js",
    "revision": "3692a2c49eb6e8c6e5d4ea7e79219669"
  },
  {
    "url": "assets/js/27.61daa155.js",
    "revision": "3b4dfe85670de196e780dc5864638995"
  },
  {
    "url": "assets/js/28.9c4871da.js",
    "revision": "611062bc191304f8dd7964644607c9fe"
  },
  {
    "url": "assets/js/29.c781faa3.js",
    "revision": "316c69426d9e9c8aee1670776ca520d8"
  },
  {
    "url": "assets/js/30.51135a8d.js",
    "revision": "e10ef20aa71399333a331b4dd962ce5e"
  },
  {
    "url": "assets/js/31.baf0372a.js",
    "revision": "87ea35fccc5c7a6cfd83db114c8b97fc"
  },
  {
    "url": "assets/js/32.8903597b.js",
    "revision": "876041d3d16207a00ae0114298fd9c3c"
  },
  {
    "url": "assets/js/33.15c7c718.js",
    "revision": "89ecf23967a997455ddac0149c51b3de"
  },
  {
    "url": "assets/js/34.39e0e4d6.js",
    "revision": "8807a91e995b39953810be7ae2081f35"
  },
  {
    "url": "assets/js/35.095e2494.js",
    "revision": "2628340c260be38b515ff4f9d8c67e1f"
  },
  {
    "url": "assets/js/36.e44f85e8.js",
    "revision": "8866d30234eceb9ed9decb15b766847f"
  },
  {
    "url": "assets/js/37.f5d256de.js",
    "revision": "3aeaa6dafa6f87659241a3719897d5d6"
  },
  {
    "url": "assets/js/38.c2ebe4a0.js",
    "revision": "c9b143e8261ebbf91ab7e1f24d453705"
  },
  {
    "url": "assets/js/39.1a1db749.js",
    "revision": "4a3b2e7ab800157c0272432c6d30bfa8"
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
    "url": "assets/js/app.09079fe6.js",
    "revision": "684b4f46327c49f086ae79f95322b7b5"
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
    "revision": "27ce4c271919fe0bb3fece80c2c7bb97"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "fb8ca9b1fabf5f400c9fde56baa4a46e"
  },
  {
    "url": "categories/index.html",
    "revision": "d59f0df91545d2cbe32f525416c82e49"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "66c068d3009452911e99c36a83564f61"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "910480340b7a34844d64f03da251bdad"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "c1bea8ab7dbd22fde574cfdfe4526f5b"
  },
  {
    "url": "categories/other/index.html",
    "revision": "16f5fbb6de3cd772c4f8fb30a685682b"
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
    "revision": "a7e6b3e3263f2ecb1b43bb9b42db26c1"
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
    "revision": "e5e21005c9dea79855f20466feb8c629"
  },
  {
    "url": "tag/array/index.html",
    "revision": "f5dbf0492f7090257af83983d4e8a3ee"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "d7cd96a3f2a86b47d0cac63b253d9fce"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "afb4ca4c2386e52c72dd3aed3ef6a4ab"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1cd185dc8d26d364914df7b1ed9e4e4c"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "e413299e99df1a2035f48c36f8d54600"
  },
  {
    "url": "tag/html/index.html",
    "revision": "65671352e11a95f082aa8012f2708306"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "5bd2b464d35617e36a13dfe7be200db6"
  },
  {
    "url": "tag/index.html",
    "revision": "0876111c7d9175aca4739722da30bf20"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "be2933e1c0c57d6d4b4031428d2d035f"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "b255b2d0b56d9af44d36c01828f5003b"
  },
  {
    "url": "tag/js/index.html",
    "revision": "bfffd1583007453be3c080f6994cf58d"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "255df0791043e746b63bb9e6c592a8fe"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "16a3dbb9dc5cafd2e31e2c629e2a79b2"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "cd304ea8d77c2c51782b40f9ee34e790"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "514fa593606af7a7d8e1306f88e944fa"
  },
  {
    "url": "tag/project/index.html",
    "revision": "00025b004985e002bda67c0859c54826"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "185ae16c0a19afd9c8ffd1422e604b2e"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "68810c2d6e29821f4b5d3f7682ae7eb5"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "c66a0c4af293b6d905009e9e605f92cd"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "a31b1e99b7cdc6a7d9f5667bec398f28"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "70763729db404c11829c765b098d148a"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "3bc714dd87a9fd1ad1f835643ef354d9"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "2c3ad74d335bad2d5a0b6ab54764669e"
  },
  {
    "url": "timeline/index.html",
    "revision": "b0a6834fb06c40ac784205c4a3ea39a7"
  },
  {
    "url": "views/about/index.html",
    "revision": "0c9a0d542c917aed314d85c005c04470"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "e256053de9f57f431ff81d7a12ba8c3e"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "50bf1afc22893887fa4e8e338542607e"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "f01995fe5db97fa733be21623446b53e"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "ed5be6f4465d39a5079d145d82092e64"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "1c644703d58f4755831bf0633c8f8d3c"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "3d7ab65ce40a4572183ceb5eb2957269"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "2b8c002382568d37d6791f3dd0c0063d"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "47178a3c5339cf44e64ec2d25e980099"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "5c0ad12fbdd16a3ce178a00bab5076df"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "eaef02584abf073bfe2063f759a02485"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "d285c8641c666282e2abcbc718f40c3a"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "826f20d95ba48feb87296d157b7e59f0"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "d9d1cb28fbb0c0b13c66ce325b2812e9"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "9b857cf210e27a2d9bbe5c1ed309f1c1"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "c393d2d03153d684814aead048bafdf5"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "dccc363ab9a5ef0209b01237f4dfde22"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "957f44dd6ed8037bf31f4f8a29a37bb8"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "4e536430c34ac76c17a415346f8cc051"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "3d9800cd39d0aa382ccf2aec5120cf2b"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "fde29c8e39304bf7ad3b04e21458bb5a"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "7d99f2fbf1daba1b75daed65bbb4c645"
  },
  {
    "url": "views/project/index.html",
    "revision": "dd347a69510e51ae0b57ce638e120f6d"
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
