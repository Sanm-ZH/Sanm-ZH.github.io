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
    "revision": "c43072b91d5bec36297e8481810dc111"
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
    "url": "assets/js/13.0e348e8b.js",
    "revision": "98ca01f33b49c088e3e7d895edc55715"
  },
  {
    "url": "assets/js/14.b76b55d6.js",
    "revision": "1e6628019c2a70c6ccecd1c5e1a36ee1"
  },
  {
    "url": "assets/js/15.c89c101b.js",
    "revision": "78e4a049db8efdca95b186e34c868c29"
  },
  {
    "url": "assets/js/16.7604c946.js",
    "revision": "30b995ba96bc3846792b33acf8e94702"
  },
  {
    "url": "assets/js/17.d44a9f10.js",
    "revision": "6f92a9fbbcc95088477df23216f284ad"
  },
  {
    "url": "assets/js/18.6971ef82.js",
    "revision": "c08261f95ea6a5a932441d3497de260e"
  },
  {
    "url": "assets/js/19.c68185d9.js",
    "revision": "49b714766ba7de2c898b540bfda57390"
  },
  {
    "url": "assets/js/2.007020fc.js",
    "revision": "a512856137615802f4c75fd8b7bba926"
  },
  {
    "url": "assets/js/20.6512c9c1.js",
    "revision": "2972a6c29c832a022cffd9a74cbb87d4"
  },
  {
    "url": "assets/js/21.f7e486f6.js",
    "revision": "9429adb51c9f89c5db9ff40391a99d23"
  },
  {
    "url": "assets/js/22.d18c8a5e.js",
    "revision": "d2c97bfa5ea7eabfd95f8ab0b6fdc807"
  },
  {
    "url": "assets/js/23.799f12f7.js",
    "revision": "3f16343d82feed3401f4ed486b8adb19"
  },
  {
    "url": "assets/js/24.389562be.js",
    "revision": "346a4cd6fe1595c9ad3b415970828e40"
  },
  {
    "url": "assets/js/25.b9f03eb2.js",
    "revision": "11bb0d2c5d0391fb30907bff973561e6"
  },
  {
    "url": "assets/js/26.1b133e0b.js",
    "revision": "28f6dd7bbfd3571b40ed3a77af89ab97"
  },
  {
    "url": "assets/js/27.8a571d69.js",
    "revision": "137aab380d528f00c04a637d23694dc7"
  },
  {
    "url": "assets/js/28.3c6bee5b.js",
    "revision": "1686a24e07e40dedf9cc6a44ce61fc7f"
  },
  {
    "url": "assets/js/29.1a89887f.js",
    "revision": "f8ef2bd39f90f9c96f440f3e490c0a09"
  },
  {
    "url": "assets/js/30.a6912f62.js",
    "revision": "487af3cb306b9dc5cdeed7109810d721"
  },
  {
    "url": "assets/js/31.f1bc0797.js",
    "revision": "677533082a994db8affeddaa1980d0ba"
  },
  {
    "url": "assets/js/32.3af526f1.js",
    "revision": "8541102db7b8d618265892d298a560d9"
  },
  {
    "url": "assets/js/33.ae467dc6.js",
    "revision": "2f38bd787be1ff42572aa66f2a0c16ba"
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
    "url": "assets/js/app.7389c49c.js",
    "revision": "0b34c99549e239f6190ccb2bd9bd43e9"
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
    "revision": "47a562310adec5d09ff401c1259b7461"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "f3444076ec9769082d12ae5cf5b28197"
  },
  {
    "url": "categories/index.html",
    "revision": "50cdfb7cde765f32379d11304990b5cf"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "797a0895d48f6253c20a1b5c0bcd72a0"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "74ca4a736ef897538769530ee31c382e"
  },
  {
    "url": "categories/other/index.html",
    "revision": "25bb09a49d5b272d525880afb87c1a06"
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
    "revision": "b79db7a32d3bc63137e44ef2b19e34ce"
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
    "revision": "2e45902e1039bc054c222ef1523c83de"
  },
  {
    "url": "tag/array/index.html",
    "revision": "2139654eac85a269bb3cce81a29025e6"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "990ff32996a1a1279c0bea1dd094f1f6"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e1544445f58351fb20f8ffe47f34e545"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "4770ac8c66c8cc5a31fdcd7186dd968e"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "31ce919f81894bd708295edf55787fbf"
  },
  {
    "url": "tag/index.html",
    "revision": "aecdac492653f6a8b337e2a9242b8a13"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "fda51b1289258adbcafdd3f1a9ad53fe"
  },
  {
    "url": "tag/js/index.html",
    "revision": "44d998aaff7de983d63517335df6c38c"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "2600351dc330003d67b48b201e537fe8"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "aa2814e285e8cd31fc07e12745a7c691"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "193671749d52ec26ee1254bec95b1b3c"
  },
  {
    "url": "tag/project/index.html",
    "revision": "cb2bf96e0a060f84b722919aaeec6dae"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "2ad07de6347ebd519e9138af710d63fb"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "b0b1b2c62e5f5d37b6983eb929ef820d"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "33c9def0c44593cce194791777b79ae9"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "0965c66b3c1f698613ad5c94ccceaaf9"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "4c63ccb1aa79202bfecdc197afe9bb43"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "4e0a1688dc5aefd8a20774b5016b2f59"
  },
  {
    "url": "timeline/index.html",
    "revision": "8dbff52e37b28f346a3c549274a3d33b"
  },
  {
    "url": "views/about/index.html",
    "revision": "4dcdb6bd70a91950f2fe582897fed61e"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "932ff9c4de37370bc40e208770e7ac30"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "9eea9056e39b898e3f478dd70287bab6"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "0103dc01c4a1cef41a35082545438266"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "8c5dadf409db76f145d8853cdd62cae8"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "8c57e918d53ba30a2e42d41c5ca23315"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "31b288ae42c41c61be549fa3b49e3c2e"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "09141c9db91423b75dd1759ab40db3b4"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "7abdc6ccaa38064d4e3abd0eefc0c872"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "ea83469ea79ee2ed91bf809a1217fd47"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "fba4fea0f5d8cca958b913ae295f4046"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "2ed181c51fb751c79fab0aeba308d3e9"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "0c4d6ff304740460c1c773a663e3d246"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "a2bc25955c07a195f0806d0bf2b1019a"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "76a2cd92953530c0842ce83b267ae5fa"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "71f30e9b2d1b1067f1154da6aa1b82c9"
  },
  {
    "url": "views/project/index.html",
    "revision": "49f966981beea6515d2177e65129dad4"
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
