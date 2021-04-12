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
    "revision": "561c4275b9d4be7c151ec43277309b85"
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
    "url": "assets/js/13.94191d93.js",
    "revision": "d76337259024254b4d0794c0bfef8162"
  },
  {
    "url": "assets/js/14.f57d8a8f.js",
    "revision": "b655b56c5096b5686a331e6c24c669b9"
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
    "url": "assets/js/17.fcba5dbe.js",
    "revision": "cd0087c1ba121c651c044cd6e8b1dd70"
  },
  {
    "url": "assets/js/18.8cd577d6.js",
    "revision": "f4e5162a087dd9d1a241a41dee425a53"
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
    "url": "assets/js/20.23193200.js",
    "revision": "842f030e95c8031c4b5783961bb9a452"
  },
  {
    "url": "assets/js/21.e25ebde5.js",
    "revision": "9c0085e9f0bbfc5d3184ca76bfff4b86"
  },
  {
    "url": "assets/js/22.cfd16be1.js",
    "revision": "e42fdf7c892b2b063c2e3a50e7303b5e"
  },
  {
    "url": "assets/js/23.607644a1.js",
    "revision": "fbb832f9b08ee2deb465ffdfbae4f2fd"
  },
  {
    "url": "assets/js/24.853d9813.js",
    "revision": "dee4b531e126ee438b8ec627850964b0"
  },
  {
    "url": "assets/js/25.7b07c0ac.js",
    "revision": "acf5e6a89b3376bde0eec65b6a6b241f"
  },
  {
    "url": "assets/js/26.1c5e4b87.js",
    "revision": "61142e739a704e34463c0cb6f9643adc"
  },
  {
    "url": "assets/js/27.97c0c690.js",
    "revision": "bf41531abfb1a7847def5d73c1981a63"
  },
  {
    "url": "assets/js/28.88d9f046.js",
    "revision": "086fe3cad2201be6f6f36efc30c4df77"
  },
  {
    "url": "assets/js/29.4a2aa1bc.js",
    "revision": "5680f76aff7c718be8a851b8457f8c0d"
  },
  {
    "url": "assets/js/30.c94ab943.js",
    "revision": "250e64682391008edeed6e490aaae679"
  },
  {
    "url": "assets/js/31.bf567c85.js",
    "revision": "6dd3730f54e7c5e0e1b1cfe44cde147f"
  },
  {
    "url": "assets/js/32.3b8dec06.js",
    "revision": "3f26264009dbde26a5be44494e826ffe"
  },
  {
    "url": "assets/js/33.d86ddab5.js",
    "revision": "ecab5eedf1374a4d2780bbd81c50cf97"
  },
  {
    "url": "assets/js/34.7b2e3151.js",
    "revision": "94a139e8a1c62b63185d7c657a6fd1c3"
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
    "url": "assets/js/app.5258193f.js",
    "revision": "7a39fef8fca8ac14e93f9f387c4338e0"
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
    "revision": "be0c0dd2712044068a3d4e9f8699877a"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "05db8573acc54f27d525a70c89580631"
  },
  {
    "url": "categories/index.html",
    "revision": "018fcda30feefdc33dfcb10bd037550e"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "fa543dd491b881028b6732b97e6ff2c4"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "e8144610375f406b6fbc11c0e5ecee88"
  },
  {
    "url": "categories/other/index.html",
    "revision": "0d3b6de0c3abb90a37a1576579e6a65d"
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
    "revision": "d63339f18762d98bb9bc75c7951b296f"
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
    "revision": "049a20a6f383205a552c973598a64651"
  },
  {
    "url": "tag/array/index.html",
    "revision": "084cf7722ad61f0642df8d560639eec4"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "5629557f071cd0305bb792653c0b6e2c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d47dd4c6974857ddaec3df2f914a1af4"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "1e559fbb32ab6fd4afa868e1a5087f8f"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "1b91edc0fad6eb945f54cad381e98114"
  },
  {
    "url": "tag/index.html",
    "revision": "4e535ea947e40c83c2c6c05584e397c2"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "ad9cf48a6bfc9dca74590e3a622180b4"
  },
  {
    "url": "tag/js/index.html",
    "revision": "12f2b27297a0d7a344ebfe787792a27e"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "e29d6d07f3b08fc7426ae791a605b61d"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "de4e5a817f2f61b410198479aa7975e4"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "c0ecf8f3214d225bd58b80adbd4638ae"
  },
  {
    "url": "tag/project/index.html",
    "revision": "56a402ed1295022d2d949f0617b9a016"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "afc5dc4cf9913661436b24053b90209d"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "d10c2da003406c0aa7a54e273fc83ca0"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "ae24932c702e97b9e6bae8badda44326"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "c257c3a034e52fab7e3b1da662a704a6"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "9ddff86babdc3b2c2148191dff393b77"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "ab620a1606e1895c4a360d13cde8e888"
  },
  {
    "url": "timeline/index.html",
    "revision": "e60c0756a202c93e64e22ffcfb803283"
  },
  {
    "url": "views/about/index.html",
    "revision": "031b7388c882d5ebe29ec663056f31e1"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "665ed49e8a56336642adbbe4abdc186a"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "e61d2cab703bf6e238ef2a85ea48a95e"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "810712d2c4f25bff813027a01b5fa5ab"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "1dd8eb4e06d31e25d17a54ecd41bd374"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "76c5564794a2e5c2bd6f5be8e07ed5c5"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "71f30fbf88ab2c179b338a9f35758229"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "2bcbc11e115fba800f132334c828bf22"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "50482c9d7d25a5e62ef71ae839c4a0a4"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "dd437a135120fe1e46ffe5defd0ac488"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "d15763d1967758f92fb57bc3832c7408"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "d7f0323204fe4ae026ca256a5b30a635"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "4ad926a3527bb8570b4dcedba1eff220"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "ffce858872b40eca07cc216b06a27f09"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "986f7cf587cad9c0747e2dbac0413348"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "4090b9340c5ca185de39fbdf1e561aad"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "f619fdf9edfaed77d1124a45cae284da"
  },
  {
    "url": "views/project/index.html",
    "revision": "d80321a36d396aa87ae4d0ff910d2bdd"
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
