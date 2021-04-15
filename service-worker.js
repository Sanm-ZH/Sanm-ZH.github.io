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
    "revision": "565cd1154343a2ad1f2c560916fadea1"
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
    "url": "assets/js/13.64e81306.js",
    "revision": "ed2e21b4855a4aee9d86015f9977ab36"
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
    "url": "assets/js/16.a39fc74b.js",
    "revision": "6147a66e120900b20371815642348218"
  },
  {
    "url": "assets/js/17.d6594c78.js",
    "revision": "b95a800a11217616e79e7822b723802a"
  },
  {
    "url": "assets/js/18.494de33b.js",
    "revision": "5edd530fb13816b39f7dd4f3c6175be1"
  },
  {
    "url": "assets/js/19.1d2cdc32.js",
    "revision": "b0cc48955d765bdba2699871c32264fc"
  },
  {
    "url": "assets/js/2.007020fc.js",
    "revision": "a512856137615802f4c75fd8b7bba926"
  },
  {
    "url": "assets/js/20.70adbf4f.js",
    "revision": "03713097fb722374c1b40182d6e7dcc6"
  },
  {
    "url": "assets/js/21.3ae6ddf3.js",
    "revision": "0c2b5cb4f6804cf88cf5865a31a4298d"
  },
  {
    "url": "assets/js/22.c2e2ef09.js",
    "revision": "df17745321d85c092fb2e67955a8eacb"
  },
  {
    "url": "assets/js/23.8421fdfb.js",
    "revision": "c6d0b4c0a0f7edc0200213cd1a2eb730"
  },
  {
    "url": "assets/js/24.9912b437.js",
    "revision": "b431bac327421769dd18bb520fb60990"
  },
  {
    "url": "assets/js/25.e166c1db.js",
    "revision": "85614b4cf3b1ee0bfc9d3f09b65c951d"
  },
  {
    "url": "assets/js/26.3f7c0c37.js",
    "revision": "71b42f29ebd4da77bf7cd5976d280c8d"
  },
  {
    "url": "assets/js/27.54994d9d.js",
    "revision": "44dd5fa9d781aae0916a1bebd5c47079"
  },
  {
    "url": "assets/js/28.d4ae6460.js",
    "revision": "f0a94f9a0b8f9322b2513e8164a7db08"
  },
  {
    "url": "assets/js/29.ef68fb3a.js",
    "revision": "df39bef87f15b02d5c3c912a39e5a124"
  },
  {
    "url": "assets/js/30.306a7018.js",
    "revision": "126014842b7d308630f6f16d1c8c6f89"
  },
  {
    "url": "assets/js/31.d2df464e.js",
    "revision": "0ce078e52b5a6752749dda24f40d989a"
  },
  {
    "url": "assets/js/32.07a27dd7.js",
    "revision": "61b67254ae9465f4266a541ab29a6ce6"
  },
  {
    "url": "assets/js/33.24b5f283.js",
    "revision": "83a31eb13395eacc569ad4a76d5a024e"
  },
  {
    "url": "assets/js/34.8de8f0d6.js",
    "revision": "f551633ebf28f79244772b2d69681746"
  },
  {
    "url": "assets/js/35.0ccfc001.js",
    "revision": "11f8184f51f31074072dd7e40316f1ad"
  },
  {
    "url": "assets/js/36.9f31af85.js",
    "revision": "c355d4d2237b8cab7c5433864d90a5f1"
  },
  {
    "url": "assets/js/37.5b463060.js",
    "revision": "e2e1608a03d8a2faa38280c0a003bb1e"
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
    "url": "assets/js/app.d977968d.js",
    "revision": "11668d58d7dd81e1afedbd3a38eee6e6"
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
    "revision": "a9852de1e489232a187b9bd2f068a83b"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "86d7ca3b9ed973f4c125d5f7915a2b2d"
  },
  {
    "url": "categories/index.html",
    "revision": "68ceea266b33caf391b5930251edfc11"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "51047f4320acca24e0c88ca019186c4b"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "ab88671752e2ee816e88030e72289040"
  },
  {
    "url": "categories/other/index.html",
    "revision": "c7dfe5330ae278b89c1a1e234bd0198f"
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
    "revision": "e9707837f6dff93f45744c1ae975f7f5"
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
    "revision": "72d6d62d7b6c671dbf158170ec88de7a"
  },
  {
    "url": "tag/array/index.html",
    "revision": "23e3541fdc2a331b5a6fe1e395dd1f5a"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "2447a660c83866d37d631eaf26eec830"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e1820b84aaceb73f7ebb96113583d3ed"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "7f029ea514a9b3441c415c666424c83d"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "ed032cd671862bf48e72259d78d9ce4c"
  },
  {
    "url": "tag/index.html",
    "revision": "77a5fa6aa63824e1ddfdbe841d29b621"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "7c2683395d16f5f9c52017332f620ac5"
  },
  {
    "url": "tag/js/index.html",
    "revision": "d3fdf328112ebb727d0a1706c01ef6d2"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "dd7b50a985ae775685e4b436aa9b5f4c"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "9609efc2287d19574d6d48190cc797ea"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "a4f47a82af290afea4c4ac40e8f61230"
  },
  {
    "url": "tag/project/index.html",
    "revision": "616b1f48f3e1df5ccc6e4db4043fc08c"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "34f14c85af624a763f7f037b36da10d3"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "b4271be546dc9507ec0e9ee81f135565"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "6ec11181a8f0e32f18d51afb0d556384"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "82ae53592f3c0510f3fd73dbd0222cc8"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "830c5aa9eff149e68f33a5a5ac79db5c"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "07b29157745c6942a526cea6bc5bbb16"
  },
  {
    "url": "timeline/index.html",
    "revision": "68a028efd9b65d316f740536591edad9"
  },
  {
    "url": "views/about/index.html",
    "revision": "b085e4b23cbd16def2a07768eaeb17b3"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "77c800f74f41dc1812ed607ed17ae82a"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "a29f355c5c155c4563e8a6801e33a8c0"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "85df79a0058e04875c0071d5371fcd7e"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "2f07b6dcbce4c9a2195a459ebcfdb534"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "87bc2c760c8fc8a335e8d814eb14cc77"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "dece6a8159e89bd15616cfdfdd98c91b"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "c9f50fd4cb9aa248e4951e7a4a6f2dbe"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "90f4e1200d78a9f4f0704569bebb6ed8"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "c73c367ab2c41f506cad6c7cea8eaf2e"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "be3703826ab9b6268cea797ecc262190"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "3a9550db4a5f9cfeb49baa3008bb6586"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "798e2cba0d88366f2b912dcaf0b22255"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "c2a50aa358e6a82be08fa8c5b5585419"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "414987a404d94f6f7b5a1d20e31c5055"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "7d5061e28cb44b46fdf2bf43e644c80f"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "7d5061e28cb44b46fdf2bf43e644c80f"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "fc315098c1ffa4d4ff6c140135855e4f"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "de0a9aaedffab403b9ad51eee8624b93"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "c51b82eab6a9073b51023f805df36c99"
  },
  {
    "url": "views/project/index.html",
    "revision": "ad8f796b43bb56c9715fd4ef43cc93b7"
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
