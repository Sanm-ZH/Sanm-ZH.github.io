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
    "revision": "06d1f6bb5ab2c32b50d8e0cb31d9308d"
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
    "url": "assets/js/13.80205833.js",
    "revision": "38fba92a9610a9f45435f85d27343e67"
  },
  {
    "url": "assets/js/14.787e8b31.js",
    "revision": "0f788a2d5294a09d4085e3bc8f4d32ec"
  },
  {
    "url": "assets/js/15.c89c101b.js",
    "revision": "78e4a049db8efdca95b186e34c868c29"
  },
  {
    "url": "assets/js/16.82b513e6.js",
    "revision": "694c69b8144fc172a34da1b917d76542"
  },
  {
    "url": "assets/js/17.e16cff2d.js",
    "revision": "8f6f6f36e23d9803858f6722517a3d07"
  },
  {
    "url": "assets/js/18.47d8b51c.js",
    "revision": "f00e65c7739adca017a8d8f2abcd356e"
  },
  {
    "url": "assets/js/19.543dac93.js",
    "revision": "fe7c4939217f2724474a3a3f8657163e"
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
    "url": "assets/js/21.faee23a3.js",
    "revision": "69c5a67ff5d979bd80185d1f325d50da"
  },
  {
    "url": "assets/js/22.8e2156e9.js",
    "revision": "df83ca9104e062df44bab16fcc1e1b07"
  },
  {
    "url": "assets/js/23.bd30cc59.js",
    "revision": "252e8c3e8eeccb824299726b67ff6026"
  },
  {
    "url": "assets/js/24.4d33c228.js",
    "revision": "c5fed803a3c2a847a96dd9166ee631ec"
  },
  {
    "url": "assets/js/25.2279f515.js",
    "revision": "fa8775c9f1243449a0cb70b901a20fbc"
  },
  {
    "url": "assets/js/26.34bb6d09.js",
    "revision": "a2679ebb49d46b21211feeceac03c0c2"
  },
  {
    "url": "assets/js/27.57724535.js",
    "revision": "b04e458f61c727a934e5e6b35ef1eaee"
  },
  {
    "url": "assets/js/28.628336cf.js",
    "revision": "77eb71f03fa38883a4a2a6d2a795ad52"
  },
  {
    "url": "assets/js/29.77692eef.js",
    "revision": "23a2be9cfffbc88455952f3709408fcc"
  },
  {
    "url": "assets/js/30.e2b59709.js",
    "revision": "c1ebcb8e580619966cef5f10ad61ae5e"
  },
  {
    "url": "assets/js/31.ea69f800.js",
    "revision": "516e0fca7778f23ae748c20ba54e5ab9"
  },
  {
    "url": "assets/js/32.c5ec8acf.js",
    "revision": "d3bdb08648ef19aafe987077c213ba93"
  },
  {
    "url": "assets/js/33.8fd539c5.js",
    "revision": "380400e5dc792207540297a745024d76"
  },
  {
    "url": "assets/js/34.8800271e.js",
    "revision": "5be19bf9218cbd44ad4bb5725eb76370"
  },
  {
    "url": "assets/js/35.62c17249.js",
    "revision": "7e09dcc774cfbecf216e92147ee1cd4c"
  },
  {
    "url": "assets/js/36.2b3d7f1d.js",
    "revision": "fd70e24f61d1c849b3c070efd9912a21"
  },
  {
    "url": "assets/js/37.be29cfe3.js",
    "revision": "75ac1821b4a4c0a73f0a3f339e63f854"
  },
  {
    "url": "assets/js/38.05989592.js",
    "revision": "478b3f41e27c776ad27f7e9db5909b19"
  },
  {
    "url": "assets/js/39.c0dd2ef3.js",
    "revision": "1fcc8fa904cfe6959030944e74332def"
  },
  {
    "url": "assets/js/4.9399de0a.js",
    "revision": "97d0bdc814204324e0107e18e6ab7f92"
  },
  {
    "url": "assets/js/40.3c53fca1.js",
    "revision": "73039b5b180b1483b331ec18899c7b59"
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
    "url": "assets/js/app.3fc02dfe.js",
    "revision": "967b8e232702d30c930b757204699e7b"
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
    "revision": "ed9a76dcdf5c887bd204b34dcf9e71fb"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "9de8687d6547bd96c43d79c6d9a811f4"
  },
  {
    "url": "categories/index.html",
    "revision": "157115fa601e3e91468dbea9e1a2c371"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "8e5aaf5bfe9e80b22ff71210eb9f4730"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "4a06aef13c114098237e2dd382e436d1"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "3a3e563c10499152cdc677c34ca3aeec"
  },
  {
    "url": "categories/other/index.html",
    "revision": "92ad7a9102787220c1f875ef7c345249"
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
    "revision": "be2167dab20c9fd06b9f4959f388379b"
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
    "revision": "d519aae6d2ad5ae5aff30d7050bf2283"
  },
  {
    "url": "tag/array/index.html",
    "revision": "ada0cfeca112f1146aee77d650878fa5"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "87fbd9c200e43a8f2fd9ea7bcd71c0e6"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "667d94d12e31083e51724ec7437a2971"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4d888693ae74080c8556d7251276b95e"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "b2a572f88a35c57849a9eb241801413d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "f49f80dc2b8cc284867b05e7c93cbf30"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "d1799754ee119aaa9825e918ffa40e9c"
  },
  {
    "url": "tag/index.html",
    "revision": "7fbc4489a1a033830453907721bd6289"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "23ef6e4e62b2977237dc62018e6d8658"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "cb2a34cd467ef01e6368b9a90abbee96"
  },
  {
    "url": "tag/js/index.html",
    "revision": "21d73edc05706d29457a9da077a866a3"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "92f18c4d0fab474a5aa3f1b5b146d7d9"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "7a2debfca7722ef2f3410d9f36e0c3bc"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "e3f192cc78012e8ec0ce723787d460ae"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "f1eab776dca5cf49916f47d55b65c3a5"
  },
  {
    "url": "tag/project/index.html",
    "revision": "d5da89f5c1afe8b6fce3cdbf4523ea8b"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "7cf6da224a3533b4c69bf9cef34ca9a9"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "2fae5525a83db646993c475955a16661"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "fc8681705b409d902c8546f64ca75545"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "62daeec0469acfb98522722c1ac84ddb"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "fa26edbd23f4854f34cba5c6126defae"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "aaba0c05530ef89e835dfca29c53873e"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "16164238b8220560ad7f792a4d2565c5"
  },
  {
    "url": "timeline/index.html",
    "revision": "4bdce6fc9148302e645e1e67731f4e99"
  },
  {
    "url": "views/about/index.html",
    "revision": "ac93542017b9041bbd49f264518c7626"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "32de9032ea5c27339c64ff2d0d0332d4"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "a53d7c4d853a63e3adf975e6c6185801"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "d12d90ed6033e1f97dc2b7d697a144c1"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "252558056d3654cf82a21bdd03109a8f"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "5c6efc33ea536b5ca5bf9354ab767251"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "e17a938bb69e7aae0535c0080f181573"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "8e529333b7fa87e15b4c7c1458278916"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "9f144460ce50e3d28cdf931cd720fcc5"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "fc8d7bac3d7c20d5623fee1ed3bcce16"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "b7e32ebacce5290ec6fbaceb24de957e"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "3fc49d6da2384bb10ba30de8ece8cd02"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "a9ff5fbec876c1143758a7978145bed2"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "75edaf0b24c2108778b4b8870b4cc5ce"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "c44eb09be8633605504a382ab171c6c8"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "b13f45e31f136e1c8afbc00a8dcb276e"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "f139ba034180ab2e8cf50d0df67160ca"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "22adea067b662bb32805a33eda8eb2f3"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "9d56889e44b5702deba1d3978d12689f"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "26b2d6312a75b6c70e3f1092bd86297f"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "abb3b7db982ba1e7c6398aca2dace422"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "4d33bfd7619abe067a7d7db870e82570"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "967a2c870cca5ae4d922de8e3e43c80e"
  },
  {
    "url": "views/project/index.html",
    "revision": "710efd0185c88aaee5c58a5b30eafb48"
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
