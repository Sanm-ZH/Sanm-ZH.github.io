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
    "revision": "2c86dcfa1978126cce7c3397556679fa"
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
    "url": "assets/js/13.0649d3db.js",
    "revision": "627414749bb103541fed79ab71d64431"
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
    "url": "assets/js/16.bbcc4d06.js",
    "revision": "1fb6db58edb9eb5eb0e64b31261fd831"
  },
  {
    "url": "assets/js/17.7cbcead7.js",
    "revision": "071a582fa3d0c1515e6a9793fd6f23e3"
  },
  {
    "url": "assets/js/18.982abf59.js",
    "revision": "9ef3e0b4cd78216eabff5de105c4907a"
  },
  {
    "url": "assets/js/19.b6eb6bf7.js",
    "revision": "1783ef04c6aa1284139a0a03f620290e"
  },
  {
    "url": "assets/js/2.007020fc.js",
    "revision": "a512856137615802f4c75fd8b7bba926"
  },
  {
    "url": "assets/js/20.ca36272f.js",
    "revision": "359b2373b30d62b8d41b447c1a12a548"
  },
  {
    "url": "assets/js/21.001e8e3b.js",
    "revision": "dccb14a5bb72c370877363fed4435ed8"
  },
  {
    "url": "assets/js/22.52c5c8fc.js",
    "revision": "cdd295dcf324c06c55d229f182739c71"
  },
  {
    "url": "assets/js/23.d8036ec4.js",
    "revision": "9fe795f7479b21204cea2b6207eddfe1"
  },
  {
    "url": "assets/js/24.80e1f906.js",
    "revision": "914bf6f960b96251e9914cd0e32c8660"
  },
  {
    "url": "assets/js/25.87a8b789.js",
    "revision": "06a84baab45e546edcbeffbfb6c8a0af"
  },
  {
    "url": "assets/js/26.4383142e.js",
    "revision": "757b9cbbc8194c29b724102f1ae343ba"
  },
  {
    "url": "assets/js/27.617f70bf.js",
    "revision": "03de250d99205b78a9c35ddc828c0a48"
  },
  {
    "url": "assets/js/28.5d9fb95b.js",
    "revision": "d7b4bdc3abcaa0f6d32c27fbb0af54e8"
  },
  {
    "url": "assets/js/29.e5975cd0.js",
    "revision": "a355a642f768433bc4ba4fb2a7ead536"
  },
  {
    "url": "assets/js/30.ba6c90e5.js",
    "revision": "dd890525004a0003069d0d412270863a"
  },
  {
    "url": "assets/js/31.79b6835c.js",
    "revision": "0c8a9a758a5fffe835fdfaaa942dcb26"
  },
  {
    "url": "assets/js/32.10e52cec.js",
    "revision": "ada2a489d4025729f62d63b65173c496"
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
    "url": "assets/js/app.11ec31b9.js",
    "revision": "0d548251498d52d985b2707c76dc3180"
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
    "revision": "b0e3cb07846b400a325c25a45700d9e9"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "bb8398bf65797ccd536e173c3475dde6"
  },
  {
    "url": "categories/index.html",
    "revision": "7c887ce49631a6374ab99b4c7a68240a"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "80a8f5ff34918b1add6168c8d953e3e2"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "ce81fb4f49380c67b0dce4d225f9e3cd"
  },
  {
    "url": "categories/other/index.html",
    "revision": "cc68621b245255b699f90a5b0b7f7466"
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
    "revision": "54cb7fb751e1d70d033c31f510420f9d"
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
    "revision": "18de547ba746dac7f43a36a1c429e3b4"
  },
  {
    "url": "tag/array/index.html",
    "revision": "ffd0af50244add741967ad6e82638709"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "e89cb1e7ccd4b1eab00515feec6efc05"
  },
  {
    "url": "tag/git/index.html",
    "revision": "09abbbf225bcb8e4d551235d48e53e02"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "38b973e4f28edc670dbcc3687d6edceb"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "659141e4d7680ab8f5fadbf1d0bbaefe"
  },
  {
    "url": "tag/index.html",
    "revision": "17d8f4335ce1085ee2d389a95cd1e191"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "0c516f449b1414218ee5c7ae34865a54"
  },
  {
    "url": "tag/js/index.html",
    "revision": "fc0d8ee835e68c39a906bff9a34bf610"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "087a76920ae042c509049cda9620f5e6"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "4b757e9ca892bbd2ab8f64357ac31a8d"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "5d6bd773b23ccf9415ef39297eb93e59"
  },
  {
    "url": "tag/project/index.html",
    "revision": "2c49dda74735323b5c8d9a3d56f172ef"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "9c5c62d5cc380fe71b3e6f94525bfe48"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "23efb63a0a5c9d61eab2416fdef68e29"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "7d3546119fb40dcec72400ba4aea9541"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "640fd8d6ee4a62df80de9907e30d1f57"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "60972e90ce27d0696a8355a43a14a54c"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "e984adc1191b5997b115de4d011ca5e8"
  },
  {
    "url": "timeline/index.html",
    "revision": "376941feb01413d21409e373230c0d93"
  },
  {
    "url": "views/about/index.html",
    "revision": "42eeeeca13d8b3cb8d7189bf1f83499b"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "f24bd6a155077555757cda87e698af8f"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "d930990c3aad500cf9c7769543fb8969"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "81d66eb173d4a6396a03c6107b75b062"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "0d54045854969cabfe10d81707f21d59"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "35609db75467ca2e4030113554f1dd1c"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "3159ed2f55c7866811f6bae32511dec4"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "988dba15db6ef21737a7bc796e9c0b75"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "abb3d9494ff87aab4040eb6d97b94e5a"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "69a8448e37f884f129766f5e8aaf251b"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "be6fe3dd540121410adfa05ba574c166"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "a1934da5ea2817126382c2569496281f"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "016686a14db532e9952868c58925303c"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "b0938c057a4494dd8e4e27aef07f1765"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "cd51124e52890535a1f3e01377bc501e"
  },
  {
    "url": "views/project/index.html",
    "revision": "628cdc7b01270e46a2d0dce03fe051ac"
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
