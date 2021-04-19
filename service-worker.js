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
    "revision": "4894841ec08b2245a58da24b0a59f40f"
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
    "url": "assets/js/13.48884b59.js",
    "revision": "30e1a7cedd9397f34acedcb067a327d9"
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
    "url": "assets/js/16.52b6a9b9.js",
    "revision": "cff845dffc1d56f7b86356e1c3be9a84"
  },
  {
    "url": "assets/js/17.fb30565b.js",
    "revision": "374fc4aa77dce6dec31c7f948ee24107"
  },
  {
    "url": "assets/js/18.c1acf622.js",
    "revision": "241f2db5ec2e0f283150707ea3a888c3"
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
    "url": "assets/js/21.70bd560e.js",
    "revision": "80e79f059f05454e3dde7c06bc212acf"
  },
  {
    "url": "assets/js/22.479d568f.js",
    "revision": "60c5d8e664810d9cb2c798a7fcb6251e"
  },
  {
    "url": "assets/js/23.bd30cc59.js",
    "revision": "252e8c3e8eeccb824299726b67ff6026"
  },
  {
    "url": "assets/js/24.14046656.js",
    "revision": "38ea0cc40472ab042ac710f46a096e39"
  },
  {
    "url": "assets/js/25.4ce0cba4.js",
    "revision": "3a78664601e1edff50eafe9e337402dd"
  },
  {
    "url": "assets/js/26.2ad8c948.js",
    "revision": "2dc13d56ba37971c4d13fc2a4b509b7e"
  },
  {
    "url": "assets/js/27.1e0b8115.js",
    "revision": "d35fb33d9776894a44983f3f43308afb"
  },
  {
    "url": "assets/js/28.62723a9f.js",
    "revision": "57db0789b78e6c399d07188ca9311cbb"
  },
  {
    "url": "assets/js/29.c88767e8.js",
    "revision": "41f06293f699353b0c6f1b73752da918"
  },
  {
    "url": "assets/js/30.ceef208e.js",
    "revision": "4fac8a2202aba28ec8945c60a7a786e9"
  },
  {
    "url": "assets/js/31.270976fd.js",
    "revision": "547fd07c8aac85abf0cdf1bdf5cdcb91"
  },
  {
    "url": "assets/js/32.8903597b.js",
    "revision": "876041d3d16207a00ae0114298fd9c3c"
  },
  {
    "url": "assets/js/33.2c4c38a0.js",
    "revision": "0fab26712aa5312b8376bb13ee15868f"
  },
  {
    "url": "assets/js/34.39e0e4d6.js",
    "revision": "8807a91e995b39953810be7ae2081f35"
  },
  {
    "url": "assets/js/35.ff79af4e.js",
    "revision": "7bf56498f21bfd83d6b2bc60db676f48"
  },
  {
    "url": "assets/js/36.e44f85e8.js",
    "revision": "8866d30234eceb9ed9decb15b766847f"
  },
  {
    "url": "assets/js/37.538f91ad.js",
    "revision": "432e067fe5a99fb0d6b3b61a75f4a457"
  },
  {
    "url": "assets/js/38.c2ebe4a0.js",
    "revision": "c9b143e8261ebbf91ab7e1f24d453705"
  },
  {
    "url": "assets/js/39.1a1db749.js",
    "revision": "4a3b2e7ab800157c0272432c6d30bfa8"
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
    "url": "assets/js/app.4a265d5a.js",
    "revision": "baa9231e4649e932f07c6249fcbe5db9"
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
    "revision": "72d5a18fa4770ca560c4ee1b0892e131"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "ebf8a2b5bb5341de6dec8e85c264ffcc"
  },
  {
    "url": "categories/index.html",
    "revision": "b5cd560d9ffdaec492bc10d89a62b202"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "32694b4a0707a191e741196d3fbe3cca"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "86114106af55f91c5df938a5bfcd8af7"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "e494007d67890319e8669d12c6f2613c"
  },
  {
    "url": "categories/other/index.html",
    "revision": "39f6d1f5bdd875e2fe566deb8f7e4d00"
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
    "revision": "ccb65e312c00117106109714e16b9328"
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
    "revision": "a634da9d9f5f0ea5f1ca6c4fd07fc7c7"
  },
  {
    "url": "tag/array/index.html",
    "revision": "5bcbdea045a1b196ee3896faee0abed1"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "198bb1a2e56dcf272e5df2257aa87e4f"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "9f0e809a58348d8f60ab2d216cd2680d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f54a6f9a5b416f27a84bac12f8e01f0c"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "00587dcf8351cf4fbeec17e9a5e6e9e5"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a008d666b15387cd21c884d55e2f7168"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "2a1721c32ba3afa5becc274619d2513d"
  },
  {
    "url": "tag/index.html",
    "revision": "30454f8abe53ee2648c779a671567d5d"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "3a76640f1eb02000be3cae997850ef44"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "83a7f3c96001e87b439dd43d2b20b8a2"
  },
  {
    "url": "tag/js/index.html",
    "revision": "3d863fd4ac741ba60de9356b70de6f25"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "f95d682803e8863ec3fc4684dfdcdbf8"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "2dcad4a10592513a7df2b8ecfec75ee8"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "e62fec0d93040b20ed493ceb795f70cd"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "86978b5186428b6f665966e442b21e31"
  },
  {
    "url": "tag/project/index.html",
    "revision": "681015e8582144cc687985b3cc002dc0"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "60a588c7964c4c9571fa88e233961749"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "c0a0d4f86d6627ab3c53933dde331827"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "8f9b079407085210bce24442287e28f7"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "0dc4974174eb8e1409b845b68c13c5a0"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "6dde20a2e2018f0fee341b4a842b4f11"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "b4495f9525d96799f722f6f8be466a50"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "71d722a1adaf4603a775adcce3ce7e8d"
  },
  {
    "url": "timeline/index.html",
    "revision": "3913ef0cb66a55177422123912a2ae8e"
  },
  {
    "url": "views/about/index.html",
    "revision": "c696cc7c542a17951dba827e76d5145f"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "9d213838bd6013a01c7e0d934925b1b6"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "0a1311f24608b1fc9eb547aae63f1a52"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "93fab505d4cb648cf563cdcb2610fcb0"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "dcf0380a62d054dd9408f348157ccfe2"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "342a4878894f8c6aec98edef76994959"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "f3a861520f329110ad46c2efaae1f962"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "6214fcd54dede83568f03eb684cf4ece"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "c36a4c3d5fca9ec3e1b12a547aba995e"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "e5b0f6e21bc9e3184d8df219f8e683d6"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "0646ce45e337f619c342930098fd0a4e"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "5cc988b88e88cea550ba390f58277587"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "185d99d8a6a4510dcfe5460e9ac0ee40"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "665ad5e48f3c92dbbeb897cfbb59a6a2"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "8e57ef7c30b6e706b2b6a85ee3a82e38"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "a8022c171dbf1748abf50dbb8d2b5ee2"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "2fb562424e9f62718035a8d1e9753c6c"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "fa5bbdfbae6bb6bc89aa648c579cfa3a"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "bfde6744ac8e3bdc74db224c50c679e7"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "22f164a25fc8880140f917d21b68d05b"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "acd16ac95bf94145ce9c2f5f04a7e41a"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "90a7c8dcbe48ef36f17bca23dbaf9f23"
  },
  {
    "url": "views/project/index.html",
    "revision": "590ee388a687ade26e31601beccf0b15"
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
