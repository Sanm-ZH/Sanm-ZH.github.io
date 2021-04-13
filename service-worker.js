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
    "revision": "6e894f62d944179c6e5fbe9e9e40d4c8"
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
    "url": "assets/js/14.76faab7f.js",
    "revision": "124cc20ca7ac62c93543fa1d275d2004"
  },
  {
    "url": "assets/js/15.c89c101b.js",
    "revision": "78e4a049db8efdca95b186e34c868c29"
  },
  {
    "url": "assets/js/16.a39fc74b.js",
    "revision": "6147a66e120900b20371815642348218"
  },
  {
    "url": "assets/js/17.41910c2c.js",
    "revision": "2aa5059960d74a211a5f83c4e7e52ccb"
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
    "url": "assets/js/20.23193200.js",
    "revision": "842f030e95c8031c4b5783961bb9a452"
  },
  {
    "url": "assets/js/21.e25ebde5.js",
    "revision": "9c0085e9f0bbfc5d3184ca76bfff4b86"
  },
  {
    "url": "assets/js/22.4c1e066f.js",
    "revision": "b87a11d8406fc66e7cc562f10954b66f"
  },
  {
    "url": "assets/js/23.58bd6c88.js",
    "revision": "e7bd6951aa5958b66735092e79c234e5"
  },
  {
    "url": "assets/js/24.7ddeef66.js",
    "revision": "b9ef4f9e3a785765b49f67b6fed393fe"
  },
  {
    "url": "assets/js/25.0dc15757.js",
    "revision": "468a5aafd08dc347e5ffbf4c50038064"
  },
  {
    "url": "assets/js/26.5e37b826.js",
    "revision": "1e478a38c8fc8b8b1dd1edf6977e0869"
  },
  {
    "url": "assets/js/27.40af32a5.js",
    "revision": "ad4036638fed2a80696e0a9c5ab71a55"
  },
  {
    "url": "assets/js/28.60b3ae20.js",
    "revision": "b149347490964e2e3df4c44d564c7171"
  },
  {
    "url": "assets/js/29.2ca41f5a.js",
    "revision": "715c245308a1fc8e54c759648746451d"
  },
  {
    "url": "assets/js/30.df4965e1.js",
    "revision": "9e96393542a3d67e9d9f40d4bcfa26d5"
  },
  {
    "url": "assets/js/31.1a191239.js",
    "revision": "cd210923f51f8f79bc066a0b1fc0d1e2"
  },
  {
    "url": "assets/js/32.42896955.js",
    "revision": "0d966681bdd4b66cf75119392024dfcc"
  },
  {
    "url": "assets/js/33.497be588.js",
    "revision": "e5565c23c39f8537b380f9c58bf82abf"
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
    "url": "assets/js/app.afa30cad.js",
    "revision": "bcaa205ad9cec4e7ec6195ca1fafb503"
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
    "revision": "f069079f38826eaba157dfe74ecdd5cc"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "dc276c1e38ad8c0005cd144257b82b10"
  },
  {
    "url": "categories/index.html",
    "revision": "cdf02fd79c42a7a93fbae081bddc3f6d"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "0bd62f3a00772b9f6ddd1fc69a93dc23"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "cc40d3b3ed739beae7b2c36af8ed5a71"
  },
  {
    "url": "categories/other/index.html",
    "revision": "758f3f328128f790dab23246004952e1"
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
    "revision": "f50968bc45b165acd2ada42aeec7ae20"
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
    "revision": "ba6a730128f50f5daa6772cdc21b4f18"
  },
  {
    "url": "tag/array/index.html",
    "revision": "40f9ca037ca2e329f3377f55fd7093b2"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "40332aba663328fd1f23b1cdeefe7b36"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1f0bfadfeef1ef5cfcdc6c6a97b29e55"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "89ebf2a947307218e754305d95f6822b"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "842dbc7164f71b1fa7fcdc3eac2627b8"
  },
  {
    "url": "tag/index.html",
    "revision": "35e3e845ead077bf9eea3e3f05c5d51c"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "85a6248cc6d7fbd7d7c98033979c205a"
  },
  {
    "url": "tag/js/index.html",
    "revision": "bca36206aab945c7fe2c91a29de61f5a"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "003be03394e53d9e3e37536cbb8fe6f5"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "a3b472db929742d6b10cf234495d1994"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "9bc7116a2c65aa42ac312fa71126b432"
  },
  {
    "url": "tag/project/index.html",
    "revision": "c3d256a5b69f40de1bcebfce0302ac38"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "29418fbce92fa05374cc0e45a703853f"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "cc6bc6772d50b2e8bfa7d0013f0855b6"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "7d9eb02b9e0282615649f20b14098664"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "cf408e20f15549c1a6eeaeb26b271f10"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "b310df4c6a26753e7645d8cbecb10eb0"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "fe8c048eccdf2592d2757fc59ceedde4"
  },
  {
    "url": "timeline/index.html",
    "revision": "88c5142cf14f9054d1f00e62bcd2f76f"
  },
  {
    "url": "views/about/index.html",
    "revision": "114224ac7eb5c00a51abd1f30e14c791"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "b59abf5baf0ba98c8bd6f730ff5d7ff3"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "a4ba89c2647285b5f863dd5687fcc8c2"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "14ebe6005bf0f55a494000bfaf5a7484"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "9eac3c03b554151cc6f0092af81e3ab0"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "b967782cb4cc3358be0125708521cdb1"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "e8d73e10201bdaea8646e3d2b8cd933a"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "7a9ad8081a2703185642a8d80cd30e38"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "8497017d0e1eadc5e523580767ed1d74"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "82d8a2973733d8965b16f3bc607fcd7d"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "e4c5c30f78662fc440ec34a7111dd587"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "84fef704c1188725874acb18653de675"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "1de8ab6c4f1548f3c3f5b75812ed9479"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "bb26de17d24af2e6537f1e0267aaeee5"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "97bae212f34698af5dd47df2e85d0263"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "9ca0a7b2c002bd218ad8f71995d4ea44"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "db92a1e4c39455d6f22142bb6df199a4"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "8d7dc1356deafb6aa4934d5165791d4b"
  },
  {
    "url": "views/project/index.html",
    "revision": "e5096bcfd55e574b1375d5697d8710d0"
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
