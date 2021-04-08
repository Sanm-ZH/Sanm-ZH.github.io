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
    "revision": "c8f2cb58d1484ab1bb4f4d7e6419d355"
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
    "url": "assets/js/16.e656e436.js",
    "revision": "c15c3d9f7a1d83aa27b64f0606d0b596"
  },
  {
    "url": "assets/js/17.354d102a.js",
    "revision": "0156c1927793f6f48e18b1581c4d4b26"
  },
  {
    "url": "assets/js/18.090904c8.js",
    "revision": "341e3f5b7edf75b6f4c668dfb6d37c76"
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
    "url": "assets/js/20.fa419273.js",
    "revision": "b3cdec06ea62f344346a3665120076dc"
  },
  {
    "url": "assets/js/21.67a1f084.js",
    "revision": "262f1eca5b6a129456576d113efc9f51"
  },
  {
    "url": "assets/js/22.94db715b.js",
    "revision": "3ce2e09e2c5e4dbe60ec7df750975022"
  },
  {
    "url": "assets/js/23.4a533bbe.js",
    "revision": "aad80fe9af4a70db0dc5776eea2fb70a"
  },
  {
    "url": "assets/js/24.f6bea536.js",
    "revision": "35e3b2afb6e32920ac5240285b50437f"
  },
  {
    "url": "assets/js/25.3129f212.js",
    "revision": "ae45935884ac7896d83e503180a9a6af"
  },
  {
    "url": "assets/js/26.3464e507.js",
    "revision": "77b56342ec1c4a988704f4dbf1b56362"
  },
  {
    "url": "assets/js/27.4073d0e4.js",
    "revision": "e7b0091c75843777a8a965c340a9b780"
  },
  {
    "url": "assets/js/28.1c88c7aa.js",
    "revision": "df952b814cca48b7d605d4d0704b7a98"
  },
  {
    "url": "assets/js/29.1ab74a03.js",
    "revision": "c0a5b1cf6e17d9b5b7d0888a4b885133"
  },
  {
    "url": "assets/js/30.f1e19743.js",
    "revision": "fda9ecf912eefb2e2ec02affe7363495"
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
    "url": "assets/js/app.b4e5bd81.js",
    "revision": "8ece2a902c3df4776d6212f5c8700fda"
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
    "revision": "29782c9da49b78480315e94b1fde3682"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "29e6c9bee9856c7218a42afb305f32de"
  },
  {
    "url": "categories/index.html",
    "revision": "a59237eaa4f642dbd1e267c4967fa161"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "1eb59f6f57013be6820bf5a880ee0f59"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "0240a8ff7495f7692811b73b9218b164"
  },
  {
    "url": "categories/other/index.html",
    "revision": "b630fc07813aeec184aa0eaa3873d797"
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
    "revision": "435503e7ffefb4343051ab67c1e057c1"
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
    "revision": "efb118191016fabfcd71db7cbc5d6b23"
  },
  {
    "url": "tag/array/index.html",
    "revision": "a834fef4b85c8c614cda6f182c61b24c"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "cd321d575244a965492ae6e24880bc56"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6d486b6dabefe00c13631d35a96149f0"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "8439e14577bc55939d6e6babde282db1"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "bdc98c6b7787bdc27ffa86fd0d132540"
  },
  {
    "url": "tag/index.html",
    "revision": "9ba6066d9c93ab621a969cdbf54e844a"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "da096995912a6660aa084a5613dd6e0c"
  },
  {
    "url": "tag/js/index.html",
    "revision": "cf0204d7cd4a8715980b802808cffbf1"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "d12d50ec9a8fd110e7f12f8ebd526cdc"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "5c1492544bc73195678d335be21ff6bd"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "e0f89befdaa05306d874f5413ad4e5c1"
  },
  {
    "url": "tag/project/index.html",
    "revision": "26ad16c912a08181504ef898a52b81b3"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "3d460b23598bffea36ba70fd12b6e57b"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "76028d68b156447181199caa6d889df2"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "0c6b9328583877a574a7b8c4dd1fb0b2"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "8ea198f0dcbec6b768b6ad3bbf009f56"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "b438f070a02c48086b13cd03c3ad681c"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "49e4a28f785a947ea27cc55b16176bd9"
  },
  {
    "url": "timeline/index.html",
    "revision": "0f684d5364e2fdeb2b56ecb5804ca886"
  },
  {
    "url": "views/about/index.html",
    "revision": "94a82b8e768141a2a96fe33def9e3503"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "f9dac0fd815bb5a556c3fce5501a4c2b"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "2edfa33e620bee671df84b4f2dffab8c"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "c7ff777e01c5a8255ca05e41f781db8d"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "defae925f65538423ee04f1f8721c519"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "6a1ff88a71cf8e721c1397eaa9303c70"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "e708d1995a95e7d5a37d4ed0763a7f26"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "58fb372cf73248ee8ecef4ed65bc0e83"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "99cd21812edc6a3d2afb6a1d6ec7b5a7"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "ab8cd7a008cb80cd8efbd187f2e9e533"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "a04dd4ad07060ab0a4ab63be291f5c7f"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "4e01e05eedbbdcfa92f21fb350cd455f"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "943878074268a2ac4e5c60a55811db12"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "979b96cf335ee63bcc3f09f3786b7d57"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "bd10b746792fcbdce81f099b91f9708d"
  },
  {
    "url": "views/project/index.html",
    "revision": "16394bb4e1df4dfaaa7cf0bc3cbb27e5"
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
