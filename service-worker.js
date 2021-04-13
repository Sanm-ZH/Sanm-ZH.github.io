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
    "revision": "53975ba10ada9d4f32c9569a362adcae"
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
    "url": "assets/js/13.38937048.js",
    "revision": "5341d97470a7e463f2c44228f7325b8c"
  },
  {
    "url": "assets/js/14.18bb5095.js",
    "revision": "d4ffa1dd534b12339e58aff1b757fe83"
  },
  {
    "url": "assets/js/15.c89c101b.js",
    "revision": "78e4a049db8efdca95b186e34c868c29"
  },
  {
    "url": "assets/js/16.da7d5c6c.js",
    "revision": "6e5a81f3d7ea3f05d944f4de1b0ec10f"
  },
  {
    "url": "assets/js/17.fcba5dbe.js",
    "revision": "cd0087c1ba121c651c044cd6e8b1dd70"
  },
  {
    "url": "assets/js/18.55f3ea4b.js",
    "revision": "cfec2f732c9e132063c748f20597d850"
  },
  {
    "url": "assets/js/19.947fca46.js",
    "revision": "e02b7d4c7c72c59a2ddfd2b2f674ed0e"
  },
  {
    "url": "assets/js/2.007020fc.js",
    "revision": "a512856137615802f4c75fd8b7bba926"
  },
  {
    "url": "assets/js/20.c7b870fb.js",
    "revision": "4e53a30071287180d143732884a9f679"
  },
  {
    "url": "assets/js/21.17ac5cf5.js",
    "revision": "6e8dc543448283203c0d13a2b1b95b02"
  },
  {
    "url": "assets/js/22.85c846ef.js",
    "revision": "1cfe389e4906f28e4303d96b8d3c3343"
  },
  {
    "url": "assets/js/23.f0631bfc.js",
    "revision": "6a6929d1c80dd4a8d8d48776ffc77f12"
  },
  {
    "url": "assets/js/24.bd8ad0bc.js",
    "revision": "173ef14c04fec7c812da67b7fd5d9c25"
  },
  {
    "url": "assets/js/25.9fc0ba44.js",
    "revision": "d85bef2dcf10daf6e2cdfbe8b6b8c832"
  },
  {
    "url": "assets/js/26.f1b2cc6c.js",
    "revision": "ba1c5aafe1eb32ed25db6827e4fb0b52"
  },
  {
    "url": "assets/js/27.b27b7946.js",
    "revision": "37e02748f1864b63c62d78fb531ed0d5"
  },
  {
    "url": "assets/js/28.08222342.js",
    "revision": "5b8bbc9b43146d3f5d32e661b82dd396"
  },
  {
    "url": "assets/js/29.315f70c8.js",
    "revision": "aa49c4b9c3e5c0db503738cb374190fa"
  },
  {
    "url": "assets/js/30.677032e4.js",
    "revision": "132072ba9cc56a64577d6cbc2504307a"
  },
  {
    "url": "assets/js/31.43e3766d.js",
    "revision": "6cad9591ff290feaa9ec570356f51b2e"
  },
  {
    "url": "assets/js/32.0f82422f.js",
    "revision": "fc1bdefebe1fcf29e902019037fbf8cb"
  },
  {
    "url": "assets/js/33.adc9e528.js",
    "revision": "a4e72d6b4752baffbb3e625ec325ee18"
  },
  {
    "url": "assets/js/34.e367bab4.js",
    "revision": "bd09b099bdeba16103c085cbae5af64b"
  },
  {
    "url": "assets/js/35.44370964.js",
    "revision": "e3b0d83a872c1b15ed4431595a4be379"
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
    "url": "assets/js/app.ae33769c.js",
    "revision": "72e7fd28c22e51c273dbb26f1499b748"
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
    "revision": "47beea982588a1b49c8e016c9275fcee"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "0e892753a08aa5b9a5b5c848c2caf8c2"
  },
  {
    "url": "categories/index.html",
    "revision": "5846b32ce13375113d4acf91a72efb2d"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "0958a80d5528ada8fd3bd6ae99beb74b"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "da1b05b2b717f6fb3c360c05e39f7fd0"
  },
  {
    "url": "categories/other/index.html",
    "revision": "e4d15ba8dfebf0985e92315de96c7b40"
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
    "revision": "ec4497c3854fb2f6053cb75a5049a532"
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
    "revision": "e11158dbdb2aa0c4a3a06a597556c73b"
  },
  {
    "url": "tag/array/index.html",
    "revision": "5e6ea0d5472a81d091dc73238fe4501e"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "e2bb9664b787fabd301cf9deb1ee897e"
  },
  {
    "url": "tag/git/index.html",
    "revision": "26b592395290342b4ed7cd4e7cdfd370"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "6c812fd604bf0f260a33cdc498b9b6d4"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "33e857f6596041b8ae60a62bed89a552"
  },
  {
    "url": "tag/index.html",
    "revision": "068afa17bfea05a286be5b77ef046538"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "6ae4b072817e9f238ae13301ad7eb127"
  },
  {
    "url": "tag/js/index.html",
    "revision": "78dd49ead2d6fce4292ea97d720db821"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "88f6febf099335ceb03cbd312aa0dea9"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "4189ba23d3332c6fbb3b96b39f1bcb22"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "137583704d9d7c83472d50129a020404"
  },
  {
    "url": "tag/project/index.html",
    "revision": "7948cdb48fd922f3b9a40e0d2968fd57"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "ad1639c2ebebc018b9c41303c8653f0b"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "db51ad37ce2f3f9a8f009d67567a5a82"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "85e8c294d08c672802d022b9b2b3eafc"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "e1c1b6569de9c9b4f5c8a2512fe029c1"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "4f43d2768ba81fb7f5d187348782015a"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "31e621587fa34a0584dae59d819d41e1"
  },
  {
    "url": "timeline/index.html",
    "revision": "2dabf60a7b62abe72f047b3d0c67856a"
  },
  {
    "url": "views/about/index.html",
    "revision": "ab562bd0a8a6a0f6c6be7a1ad1a47b54"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "fa27dabc0544ccd372e8e2fc6ee5d059"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "3525e4191af5a9d7aaa825c7e82b577e"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "0d26b78e12c684abc42c5ebfa330f739"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "a4daa271592140645889acdea57eb273"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "1a8bbd0c3ef1e26c84d28b23ee2aa26e"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "ee76d286b638c1e938d560efd6a2ec42"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "0a127592ffecba84e4d7994d84248aef"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "116c0132d0560153d36029fdb79cc742"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "8f800832536c466b20ba7b130938fcec"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "3c5bec2e10dbdde8b1bf24a457e1c0d3"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "761e1b145503345f56719d17bca1e911"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "034f443f8a8997cdd24582895bb2cff3"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "914ab446da869d46a70f42d726e7683b"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "948ba648e1cb0080253446ecf4b114df"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "37752c5dfb5ff27b78086f820955ed44"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "7eaf2b08999582ead004d77b109d1df9"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "06651ae4ec326e53b279a5c386fa42d0"
  },
  {
    "url": "views/project/index.html",
    "revision": "a9716188e37efb6894f7417ecd519f85"
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
