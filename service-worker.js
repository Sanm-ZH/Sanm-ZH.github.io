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
    "revision": "9109f6d8b5b4d33031b4535f8abcc8a3"
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
    "url": "assets/js/13.620d94d8.js",
    "revision": "91a883c1c85e9202715a3e767b9c6918"
  },
  {
    "url": "assets/js/14.bcf5abf7.js",
    "revision": "1c25c82cdd86ddd7e1e8ea40a372f1a2"
  },
  {
    "url": "assets/js/15.c89c101b.js",
    "revision": "78e4a049db8efdca95b186e34c868c29"
  },
  {
    "url": "assets/js/16.07b97e7d.js",
    "revision": "e79c249681d3e0e29a44c7844d5caedb"
  },
  {
    "url": "assets/js/17.26c1c1df.js",
    "revision": "65c481250c1929eea4f416f85f8b7965"
  },
  {
    "url": "assets/js/18.1ec2efca.js",
    "revision": "2b31ad89a6238965466bf16b70321291"
  },
  {
    "url": "assets/js/19.e65b07e6.js",
    "revision": "9475340ba49e7b0152b2d8a2dbe065d1"
  },
  {
    "url": "assets/js/2.007020fc.js",
    "revision": "a512856137615802f4c75fd8b7bba926"
  },
  {
    "url": "assets/js/20.1c5cb00a.js",
    "revision": "1967d783b298d8adc9c2a59086f66ce6"
  },
  {
    "url": "assets/js/21.918af318.js",
    "revision": "2c1f51e5e2098af24aabc75176ec9aab"
  },
  {
    "url": "assets/js/22.e666cfa8.js",
    "revision": "8d7fc9d7aa9b4b125c332d18dd6af388"
  },
  {
    "url": "assets/js/23.0a7ca8a2.js",
    "revision": "150edca13c8026c385fd891aa09d63ff"
  },
  {
    "url": "assets/js/24.dac3970b.js",
    "revision": "2608c93f469470af93c92a16f1605559"
  },
  {
    "url": "assets/js/25.b84775ab.js",
    "revision": "df3924b6c0c11543d57928c2bbd704a2"
  },
  {
    "url": "assets/js/26.201b0753.js",
    "revision": "6b4b1298d31ee41b00e23c928406486d"
  },
  {
    "url": "assets/js/27.5a36e60a.js",
    "revision": "35cca2f492c5ad906b7d442c6b8c1b91"
  },
  {
    "url": "assets/js/28.210c7e26.js",
    "revision": "03710ee1164e8cc4bb6edfd8a1cdcc8e"
  },
  {
    "url": "assets/js/29.5e1c2fcd.js",
    "revision": "50583bb230909c6f64bc4e5a422e915b"
  },
  {
    "url": "assets/js/30.9057ecb5.js",
    "revision": "8b38edd2a463ed8f7767c82d6224640e"
  },
  {
    "url": "assets/js/31.b642d894.js",
    "revision": "63c5cf092ea099ceb60d08cd6d26dabe"
  },
  {
    "url": "assets/js/32.5fc7d66a.js",
    "revision": "fc3297de7857ec84b9b3d13cc14f0307"
  },
  {
    "url": "assets/js/33.8000dfb2.js",
    "revision": "c6fff98e62a74c4d6275241a666d896a"
  },
  {
    "url": "assets/js/34.a344efd8.js",
    "revision": "c020fb80de6615e09423093c2f7f557b"
  },
  {
    "url": "assets/js/35.3a0ed58e.js",
    "revision": "c16a8d2bf61fc0935526beb7b531497e"
  },
  {
    "url": "assets/js/36.b1b1c64d.js",
    "revision": "6fa9643696172932f1ca5dbc4656bf24"
  },
  {
    "url": "assets/js/37.b68b4a8d.js",
    "revision": "4f72adc09cb8e5939db91d5ab65e7fc2"
  },
  {
    "url": "assets/js/38.70bbb61a.js",
    "revision": "fd28517fdfdab34befaee9b43db4738e"
  },
  {
    "url": "assets/js/39.eb322d64.js",
    "revision": "51b67b41bfd2db5837437fffe908d30b"
  },
  {
    "url": "assets/js/4.9399de0a.js",
    "revision": "97d0bdc814204324e0107e18e6ab7f92"
  },
  {
    "url": "assets/js/40.1647d001.js",
    "revision": "d9588779207a2befff3b0ea52ec51a57"
  },
  {
    "url": "assets/js/41.0b0bce73.js",
    "revision": "49f330f1cb0803bc1f89af1ec73fec2f"
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
    "url": "assets/js/app.6cbf3b60.js",
    "revision": "1c4829acbc2a320b618b18dbfc283390"
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
    "revision": "1b528185a8066307be27d7bee7b64b70"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "a89b7fa3fd1beba57a2b6f12b5beb88f"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "87ae6166654e33f1a08854aad752be03"
  },
  {
    "url": "categories/index.html",
    "revision": "143365a0fe063f5335b017cc4ef3722d"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "2e4052095a1ca86f6c7ac33bd151533e"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "84a3e5f4bd385d8a04f95220f6d61162"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "e8bb7b3fc3ea15250d357ddcdc234aef"
  },
  {
    "url": "categories/other/index.html",
    "revision": "5984871fd6ef1ce099b87dcc9f756474"
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
    "revision": "71c1ddd9bee93ba529f814b5713da8ba"
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
    "revision": "7f5628eb04a2c409c898fb74bd7b7139"
  },
  {
    "url": "tag/array/index.html",
    "revision": "757842bf069654b1a79420067d804767"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "7d7c0d480e70816beb2a0f5f15d366bb"
  },
  {
    "url": "tag/css/index.html",
    "revision": "bc2aa41578fd2ccd6751993f478505b0"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "affee5ace2d81478bf5faeccd298da79"
  },
  {
    "url": "tag/git/index.html",
    "revision": "93663d7b18e9e77d99db8cc738d3c95b"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "13518572329b4518d9210ddd8d394839"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c50b5dea90acd7e3eee4090cf25b968e"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "b6b057473f024b2287aa9ba2a012ac11"
  },
  {
    "url": "tag/index.html",
    "revision": "900196e3708e183d6bd73638e48a1418"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "ba030c7cda0e5a42d352fe21ae20c439"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "b2d9ec8c942a94c723f8c94f797b3605"
  },
  {
    "url": "tag/js/index.html",
    "revision": "7d9487edcd3f2138b4a44f72d3a2a80b"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "7f0ecf4188285d016cb814f8ba99a0a9"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "b1cc8774948f4e082e36e1b0f99dbd15"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "647d381ff762e4acbaa94aebf0263d56"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "64865862589e24eae1d13e49b0f4fb1e"
  },
  {
    "url": "tag/project/index.html",
    "revision": "af8e161cb3ef98175db0510f6935b157"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "4a60850e5f0aa0adb7a5f1b601044512"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "e15ef74905b51d0d23a3a2905011b29b"
  },
  {
    "url": "tag/style/index.html",
    "revision": "9d41bc6625c3d715976787622734a399"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "3504750f26a4c7c74a802a30c7228d5f"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "88deefec3de5661ae2c476012cf316b3"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "ed0f34a43d5ab7475531e59f3c1d40a2"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "a27b574944d60a83e30d0117de2bfd7e"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "4963e9fcc7ca199654381b8c8c9b4ca6"
  },
  {
    "url": "timeline/index.html",
    "revision": "ed4a010ec0896427c2a3136bac9111fe"
  },
  {
    "url": "views/about/index.html",
    "revision": "fc3f94c892ebe148cc0ecf24c96b8172"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "9274a93f16900763df98e31f54a16d20"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "0343b3b83eb6466ab24bd704eef8a946"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "856ff45ceb51a40325b545acd16acb33"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "57a738de836c84f411df75fa4de39c7c"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "aadf280dfab84c3aa164e33e31302304"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "3e485575ead59bd514a2219580b3139a"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "7073d4a6d9fed9444d57cf06c8c1a6c5"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "aed836419b90794c4c23c7ec8c9a26ce"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "ee135df53e4dbe51254f75a91f256f4d"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "5e64fad6049e6b29489e444b8a039187"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "e7f3bb0d3a4550a6fe0e36acb069a313"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "4b4452b8a2b7942af56dbb7aceba661b"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "a3062c8ad9962a0dff5ed1983e537dee"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "c63594f78acad41d5d4cf50c73c12fce"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "74abea66898258140f6c8579776391e6"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "16412c7c484426090e665197db8e5595"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "7e9307f4ef8c348a759119811900900a"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "0ce706aaa2b8aa0a5c3408a3786628d5"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "bed6759b9190a45a1938d8cbd473b7fd"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "0588184c51e55eb183dceb0e5ca48c4a"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "88a92be43d373cadeaf37658263fae17"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "8ec1cad6e81249f3a5be7e11d811a09b"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "d305c331b2b2b44df5c2eebd06576a19"
  },
  {
    "url": "views/project/index.html",
    "revision": "6d0c58ecb2eca29723a55a5e15cb12aa"
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
