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
    "revision": "aad75998372d253c503969fa0045ad68"
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
    "url": "assets/js/14.48e998a7.js",
    "revision": "3fea7d47943b1829c8d8ea0b7fa5cb2f"
  },
  {
    "url": "assets/js/15.c89c101b.js",
    "revision": "78e4a049db8efdca95b186e34c868c29"
  },
  {
    "url": "assets/js/16.e5e50927.js",
    "revision": "942acb0cfddb688d79f5a2c3e428caf0"
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
    "url": "assets/js/20.fc00c185.js",
    "revision": "aaeb3838c38b62a4b25a3134965f8fbf"
  },
  {
    "url": "assets/js/21.3bf66d13.js",
    "revision": "c8ebbdfa900152a489fab9ff1207f239"
  },
  {
    "url": "assets/js/22.5acde597.js",
    "revision": "7b1644c537288c60bc86f713534e674e"
  },
  {
    "url": "assets/js/23.4a533bbe.js",
    "revision": "aad80fe9af4a70db0dc5776eea2fb70a"
  },
  {
    "url": "assets/js/24.80e1f906.js",
    "revision": "914bf6f960b96251e9914cd0e32c8660"
  },
  {
    "url": "assets/js/25.4ed086a8.js",
    "revision": "59664c7eae5b5f65bb60d5da512e939d"
  },
  {
    "url": "assets/js/26.c4d4a368.js",
    "revision": "44ccf116b3947f8d18f5e2b158ae0f0f"
  },
  {
    "url": "assets/js/27.0f5b5cb4.js",
    "revision": "7879fd2fc50b5e8a26bf95343196fcd3"
  },
  {
    "url": "assets/js/28.716a6f01.js",
    "revision": "e43bcccc73c92d35ce32e87382958b34"
  },
  {
    "url": "assets/js/29.53784785.js",
    "revision": "de078c882cbec4c9e22508e537240db5"
  },
  {
    "url": "assets/js/30.f2ec837c.js",
    "revision": "3b572fbda371912068cf3e7a542b51da"
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
    "url": "assets/js/app.29b3abe9.js",
    "revision": "3701745ed1dc1c0d65525d9442b5dafa"
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
    "revision": "a26cce02846d1ae84d57484ae50317ff"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "b37dfac4bfbf6f14d0b4f4362820a736"
  },
  {
    "url": "categories/index.html",
    "revision": "65f0692e8b6cdd939df2c78047fe5425"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "a5d89b455c67303372f9809ed3d57bfa"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "99e608c6e01d0121af19925b0b12560f"
  },
  {
    "url": "categories/other/index.html",
    "revision": "90874a371c03b0bcebd5502a9e22e018"
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
    "revision": "b3ed0d9bda892eaeb3c3d4ae1386bac8"
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
    "revision": "37a064e1fb3703fb31a2cb66fed0ee17"
  },
  {
    "url": "tag/array/index.html",
    "revision": "d7be2f61a7ff3898647761e84485d0e9"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "3a039579866f1c6381ac995ea3cb86fe"
  },
  {
    "url": "tag/git/index.html",
    "revision": "20932326355cadbb9f997fe58405970b"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "ae7f632fbadc3a0ce656f62e9b639306"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "ea352da076fd24691a8658926e15284d"
  },
  {
    "url": "tag/index.html",
    "revision": "82c8f04941452d5e242944071deb2ec4"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "53966a60d93733564112d826d60128b5"
  },
  {
    "url": "tag/js/index.html",
    "revision": "20ad85cf8a99003e072c5177f8ef760f"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "f917ccc224926f18fbea75c21d0f0146"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "e7cdf5e0c165b8899acfa1ed54a50677"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "e85c54de100493c85b2a5009ca128b76"
  },
  {
    "url": "tag/project/index.html",
    "revision": "adac3dff733ef001d808d761f2fae846"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "61b8450363ea09d14cce4fcf367892fb"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "7a81206e6d76f09312b44854727a6eb7"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "b70f2d9a5803076ccc83688f5f526de9"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "22c5e1402f0801ef3769ba0529e428a6"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "739dcdc7c1746a60bdd9bc06fcb07ce8"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "093e7160bdb653d5269c4cf3542dff7b"
  },
  {
    "url": "timeline/index.html",
    "revision": "23495ccfc69829fc8340f99fbbc9662f"
  },
  {
    "url": "views/about/index.html",
    "revision": "ff6f0ba0bef08a8c7596782f26b14d71"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "f43f4b22e43689077e9aca0ca5803a48"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "e38a990ff499e0cbf5f8769c7c02f17d"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "85851a6a4e89afbea0746cab4022882c"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "1d233120877244929d7d670d4bf17122"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "4364e4db40e840c3c5c83aa52a082544"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "8c09ec17816f4035208915bd85484f9b"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "054eb6346288f71f90cb03f8fee9d75c"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "cfec8228b08e511687e038209f44431a"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "604bf82e7fd9486c92423b4c81b0dccd"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "1a6216c363bec8a2489038b0f21ce274"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "b74af38e9682efeb726ab947ceb01962"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "efe1dfab4119170e3d2f99da1cf3434b"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "71804a959572a140553386c9bf939937"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "601a4982b1b631e0cca5a83c35abf61a"
  },
  {
    "url": "views/project/index.html",
    "revision": "0675af0c2b0bc3af25402b5f019a46e3"
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
