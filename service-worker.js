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
    "revision": "7028849a66df95abb5eccc79b329b485"
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
    "url": "assets/js/14.6966ab59.js",
    "revision": "0830ff385ac746cfd1607d7e88626707"
  },
  {
    "url": "assets/js/15.c89c101b.js",
    "revision": "78e4a049db8efdca95b186e34c868c29"
  },
  {
    "url": "assets/js/16.be8971f8.js",
    "revision": "c52acfd7abf11d7020c3da69151ec7d1"
  },
  {
    "url": "assets/js/17.e16cff2d.js",
    "revision": "8f6f6f36e23d9803858f6722517a3d07"
  },
  {
    "url": "assets/js/18.5ccc7dc9.js",
    "revision": "051e73cde9f2bb5e1d5961680598a803"
  },
  {
    "url": "assets/js/19.93a03c7a.js",
    "revision": "c9ffaae1e8ade1e0bc52139ab9172cd5"
  },
  {
    "url": "assets/js/2.007020fc.js",
    "revision": "a512856137615802f4c75fd8b7bba926"
  },
  {
    "url": "assets/js/20.71365d1a.js",
    "revision": "c762b8aa6b5886bd1ec027a0853ad2cf"
  },
  {
    "url": "assets/js/21.5625244a.js",
    "revision": "2053b09af60d462af1e786ad08e892e5"
  },
  {
    "url": "assets/js/22.ab84e62c.js",
    "revision": "9736b218801317637c3b99e70c1751aa"
  },
  {
    "url": "assets/js/23.63367be7.js",
    "revision": "63265f7f224f27b1c4520e129be88f07"
  },
  {
    "url": "assets/js/24.26a85949.js",
    "revision": "a7c8b26c38a4dd45b5bee193f75de648"
  },
  {
    "url": "assets/js/25.96d6a8c7.js",
    "revision": "d2f0b06273e3e8163fc497f66bfa5215"
  },
  {
    "url": "assets/js/26.3bb4658b.js",
    "revision": "74c8242d1eba95dbace0130e675dfdea"
  },
  {
    "url": "assets/js/27.26548a78.js",
    "revision": "b1b66055a3ce6ba2063a71ef0c1838f3"
  },
  {
    "url": "assets/js/28.a55247e0.js",
    "revision": "e9a263ea4099bd620d8a1b5a04556231"
  },
  {
    "url": "assets/js/29.9f11e56c.js",
    "revision": "17f09b33c1644abf57330b0aef31ace6"
  },
  {
    "url": "assets/js/30.b4af1e2b.js",
    "revision": "7ef7af7acadce70af99b1646300398c6"
  },
  {
    "url": "assets/js/31.6e2397ff.js",
    "revision": "7d7184d22eef22dcc141348dafa6794e"
  },
  {
    "url": "assets/js/32.c5ec8acf.js",
    "revision": "d3bdb08648ef19aafe987077c213ba93"
  },
  {
    "url": "assets/js/33.c21e7862.js",
    "revision": "7660372d89f10ff88234cdbd5d17ab65"
  },
  {
    "url": "assets/js/34.eaa9bc68.js",
    "revision": "8e58886987ba385789dcae0588aa1ef9"
  },
  {
    "url": "assets/js/35.772c5fbd.js",
    "revision": "43969d842770949913ef24996349c267"
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
    "url": "assets/js/app.f3067671.js",
    "revision": "28cae0ec93401097716e62d0957ad83c"
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
    "revision": "6da4336d9883ba859b659b4bfca43940"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "78516ac38375f696c52f475e5afef9a6"
  },
  {
    "url": "categories/index.html",
    "revision": "4370ba4a6d7327ca3ecd3f9cf3c52de6"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "8d26ce3e1dc3dd71de3d6d4530f27c2b"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "1f533e26b8c370ab18efa5f9daf898b3"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "e5290d450cce4d27d7bf16ce7192fd3a"
  },
  {
    "url": "categories/other/index.html",
    "revision": "5b5ad25890593d3fc23f427bac580cee"
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
    "revision": "2e99d9789271c8d8cb6f65711aafc31d"
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
    "revision": "3c16d1c3cc5fa565202d41c0381f24e6"
  },
  {
    "url": "tag/array/index.html",
    "revision": "8b73873d59eecb478488b6f72a8d4ef7"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "9527e3881c0b747cac75ac872d997ee9"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "82fe4c5defa83552ac4677be6f334852"
  },
  {
    "url": "tag/git/index.html",
    "revision": "875717c35dd4c3e06e668f98f6557939"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "94505d52738da1eeb54bc047d9a24414"
  },
  {
    "url": "tag/html/index.html",
    "revision": "0128e3f7600da40430aabca07a219191"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "a55f984394cc053bf9d4b1da210a433a"
  },
  {
    "url": "tag/index.html",
    "revision": "f94892a4a2c1dd9df1abd10d88b6c676"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "08114836aad3074e2ebdcd2259af68cb"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "1392a5107b7c1765b07c91756a9178f1"
  },
  {
    "url": "tag/js/index.html",
    "revision": "f30147654ff3f2b3e5891c264fb440f5"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "04d33b340d9705408cfbc449db492a52"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "20316c1a61f3f26930eca9d86bcad019"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "5b5be01024ed58e3ecf27352991e7513"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "71a29bd767e8b7953946473ce373a6fc"
  },
  {
    "url": "tag/project/index.html",
    "revision": "0a9aa8c683c9a9e3aa5662ceefa8b6c1"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "64f59da436a59e8da997210a78fa45cd"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "fbab54a3753836db7b587de69790d004"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "ed5ec8938ffcaef2c3c03031f5d839ec"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "560f99e152fe3c940a03a10d5fc9b089"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "686388f96db23edbbc4f89e0c07a504c"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "736e1c881b7f617c435419a6159c40ca"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "39b9d81185db34553527c44c7d85ec61"
  },
  {
    "url": "timeline/index.html",
    "revision": "c44a72ca62956215daba8e5e0b62fdd5"
  },
  {
    "url": "views/about/index.html",
    "revision": "80e31efd51ed3ae4c119f0cdb8abc7e1"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "49408fcff7280a28f39667b360bbaae8"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "7dcae92120d95a2da1a199dae2ca046a"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "5e57961844fce70f4abe30c6453a337d"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "ad93b2f23c0ac697942edbd6a85152c9"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "dbc637c36f504cd54305bbbe314751b3"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "54ec6b4dc6c4c86280cbe21a77f05607"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "f9d0b7b9d29ef862f0e92f9b803ce1ff"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "87bbe66deb5f94ec2c77334f0cc67e29"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "ae43eb23e73a9edb730736e11e998517"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "be891def31a641cbf0f0e2822a310691"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "bcdc50ccaa987cfdb6179f9ebc634830"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "73d63cb796d3c9a91659f8bfb647be3e"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "e07751a55016282bb89864aa2de12833"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "e4bb0a61936bf06d6ad8c66d317f48f4"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "a2bed5d2ec8865878623f58ac87f5c12"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "c7419e894b9ce7cc634234994f7a7450"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "2546ac41ebcdb8fa51eb3451f1db7f7c"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "e3ddaa4094eba560d2cda5530db1ed5d"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "52e712fd7a254d081f368f5dd1a19582"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "eb6b14f712c9e420a24147cb6b1c2a39"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "2833489405301b3f1609dc05ed647289"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "2b342bb968f53e7df9fa649868fde28b"
  },
  {
    "url": "views/project/index.html",
    "revision": "b91e7751f55a7061ac67aa13ed4675b9"
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
