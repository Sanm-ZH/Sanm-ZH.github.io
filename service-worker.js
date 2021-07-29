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
    "revision": "a024c3567638d0125b33c026b3deb933"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.8af3f27a.css",
    "revision": "dbb68b98af594779ffeb4dcb9d6c2198"
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
    "url": "assets/js/1.8bd2d91b.js",
    "revision": "f4f3ffe9040e5ab8d4bb0086edf2ec86"
  },
  {
    "url": "assets/js/10.6c8c863b.js",
    "revision": "3d37181c160552c2121a933650ce70ba"
  },
  {
    "url": "assets/js/11.856698d4.js",
    "revision": "2f4d25ea90f2285f74ddb85af685fc04"
  },
  {
    "url": "assets/js/12.d0502fc5.js",
    "revision": "ae4ca837eb0aee1aba56051fa53c8f7a"
  },
  {
    "url": "assets/js/13.c2fcae97.js",
    "revision": "f843a0e864804ec320b796e201e40a43"
  },
  {
    "url": "assets/js/14.031dae51.js",
    "revision": "c36c1e0f20657b760149b449358c65f5"
  },
  {
    "url": "assets/js/15.19ce2623.js",
    "revision": "03702a2ab3a4eed067c5ef331ed8dddf"
  },
  {
    "url": "assets/js/16.1f7193d1.js",
    "revision": "7e3b7b72c721e95f56e58e94bdc7f655"
  },
  {
    "url": "assets/js/17.aa0e0e4c.js",
    "revision": "b1a255ceda6be5ae41b12a3454f5c4d8"
  },
  {
    "url": "assets/js/18.d7dd8047.js",
    "revision": "3a4af7879b7d377a16a15c8863d01841"
  },
  {
    "url": "assets/js/19.2142c6d2.js",
    "revision": "cd28be68f46d4ee067b87740a8f13d30"
  },
  {
    "url": "assets/js/2.9adac331.js",
    "revision": "cab4cc227c378410a0b07075c0979a27"
  },
  {
    "url": "assets/js/20.a11cc96d.js",
    "revision": "08f932aeeb9ba9dec6813fa4ee0b15ac"
  },
  {
    "url": "assets/js/21.9ff39e52.js",
    "revision": "9f240f0a32df7325fd66179efa348601"
  },
  {
    "url": "assets/js/22.11a569d4.js",
    "revision": "089e62a5ae860fc79e95a74da2541210"
  },
  {
    "url": "assets/js/23.cf8354d2.js",
    "revision": "17eb2acdef4d0148698a1907cf9cb899"
  },
  {
    "url": "assets/js/24.958cfc6f.js",
    "revision": "9b554738061c758a52a6900336d322ff"
  },
  {
    "url": "assets/js/25.1e00733c.js",
    "revision": "e61a0a531eac98d467a48b0f419f9ec5"
  },
  {
    "url": "assets/js/26.b0268967.js",
    "revision": "239dda357ca8dad0249752c347a13ea7"
  },
  {
    "url": "assets/js/27.6b915a4f.js",
    "revision": "ada236ca38b41793bb96426a4c94bfb6"
  },
  {
    "url": "assets/js/28.2a71ce8a.js",
    "revision": "52819308a06f98496778b8db024dae4c"
  },
  {
    "url": "assets/js/29.7c8f6907.js",
    "revision": "6d80048e1d266d709816131aa6bdf195"
  },
  {
    "url": "assets/js/30.5e553f1c.js",
    "revision": "3a18b9565e0872f5b70a21d3a075d914"
  },
  {
    "url": "assets/js/31.451a5976.js",
    "revision": "bd1ec8ce2a6b0083d10a4a077bd9036f"
  },
  {
    "url": "assets/js/32.f790af6e.js",
    "revision": "2c7d2303acf4da0ff9c1ea4ed402ec6f"
  },
  {
    "url": "assets/js/33.59ed93f2.js",
    "revision": "8e90130dff7602f82b93d94a149b7104"
  },
  {
    "url": "assets/js/34.a0a94115.js",
    "revision": "ada00ac144c16a0e0898204760f42f47"
  },
  {
    "url": "assets/js/35.594a036d.js",
    "revision": "1264d9bc69e7b0a298794081c2f2bc7b"
  },
  {
    "url": "assets/js/36.4ffc1e0d.js",
    "revision": "5bd896aa1c7aa4240305245c4caeee6f"
  },
  {
    "url": "assets/js/37.f370b59a.js",
    "revision": "3c532bd5b7101d7cd8706649cc3e7014"
  },
  {
    "url": "assets/js/38.f65b609b.js",
    "revision": "507b00f18e7d1290010172296ca938e7"
  },
  {
    "url": "assets/js/39.f3663f7f.js",
    "revision": "5689c21b73aa5b09fedcbd51ac65ffbb"
  },
  {
    "url": "assets/js/4.0b5dcfe8.js",
    "revision": "5bb816872853e0319c7e856fa0584e8a"
  },
  {
    "url": "assets/js/40.506f8f70.js",
    "revision": "65fcdeca365822c086c375d444acd209"
  },
  {
    "url": "assets/js/41.a796e092.js",
    "revision": "5023e15ea5ae633a7649211aaa86889a"
  },
  {
    "url": "assets/js/42.c2fcb723.js",
    "revision": "4d548496dcf86f14baa7aee1aee4a11e"
  },
  {
    "url": "assets/js/43.d2902670.js",
    "revision": "261fa5d3e65e5f24c8e140748cd8fc28"
  },
  {
    "url": "assets/js/44.6999424e.js",
    "revision": "c248f98e13333f032440a9c01471c87a"
  },
  {
    "url": "assets/js/45.084bd109.js",
    "revision": "ea74890691977cffeb2f7305096909ae"
  },
  {
    "url": "assets/js/46.5a9c1061.js",
    "revision": "5be667eb79f042e8fed3d05ae4d10b51"
  },
  {
    "url": "assets/js/47.0da4b0ef.js",
    "revision": "cffef5267dad08110df257be10cf4c4e"
  },
  {
    "url": "assets/js/48.f71e21e2.js",
    "revision": "55e0578b5ebcf9cc0eba9d5d918aaae9"
  },
  {
    "url": "assets/js/49.4da09759.js",
    "revision": "88fa190710213099d147780e87329f2b"
  },
  {
    "url": "assets/js/5.eef939d2.js",
    "revision": "bebf86a9ff48608f03df079be2f2e9ab"
  },
  {
    "url": "assets/js/50.824ba27f.js",
    "revision": "bc2cc4f75f3e032320b8b6f05c57b005"
  },
  {
    "url": "assets/js/51.cf391640.js",
    "revision": "418651547a17ce9d081460b1ee91ff39"
  },
  {
    "url": "assets/js/52.d9b5b453.js",
    "revision": "691449ed388d011c6ec9d612939b1027"
  },
  {
    "url": "assets/js/53.12f4c5a6.js",
    "revision": "cb71eea3b6614121cf00211e2c7cf370"
  },
  {
    "url": "assets/js/54.8cea17ec.js",
    "revision": "4a208a6a52e707ce3484b952180eb5de"
  },
  {
    "url": "assets/js/55.c34a6e2c.js",
    "revision": "abc73b4a065179d66e146c3e7a719576"
  },
  {
    "url": "assets/js/56.42bd7ee2.js",
    "revision": "cf0c271fb5117b09aa20367252980d7b"
  },
  {
    "url": "assets/js/57.d742547a.js",
    "revision": "a9f3c36a81cb52bf38ccc30b11b5b7d3"
  },
  {
    "url": "assets/js/58.ee34fae5.js",
    "revision": "2d4fca650185aff6c84f30b21f92f781"
  },
  {
    "url": "assets/js/59.d67da3d2.js",
    "revision": "165b964cb8248435dc3bb3e34c284082"
  },
  {
    "url": "assets/js/6.3bd14d99.js",
    "revision": "9045e0447eb6e0cc6f2a1c7234a69692"
  },
  {
    "url": "assets/js/60.8463ae99.js",
    "revision": "0252564d9149ace825411bd2ccdd1051"
  },
  {
    "url": "assets/js/61.6d1221ae.js",
    "revision": "2557daaba8d818cfefeac2d781fadc72"
  },
  {
    "url": "assets/js/62.d3c6f7e9.js",
    "revision": "d230184f4a07034a49accc9f37d18f87"
  },
  {
    "url": "assets/js/63.5747546d.js",
    "revision": "a5f4e507af6cf0f4f83bbb9b221c2744"
  },
  {
    "url": "assets/js/64.c6724c28.js",
    "revision": "b0d21ef364f44dd2933e11e504ca32f2"
  },
  {
    "url": "assets/js/65.e7c78a32.js",
    "revision": "41a20f8d1c114bec87ba96ed283ebff3"
  },
  {
    "url": "assets/js/7.dbd27f9e.js",
    "revision": "63df5a9e6928d9c387f70ead9d24e2af"
  },
  {
    "url": "assets/js/8.f86fee8a.js",
    "revision": "ce141b1bfb3d7c27b56b9a783e0413f2"
  },
  {
    "url": "assets/js/9.95bc360c.js",
    "revision": "7c2c4d5f747c42afbef39d09de262a27"
  },
  {
    "url": "assets/js/app.e57146da.js",
    "revision": "c9331d0eb5ba20067d2737677966baa4"
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
    "revision": "23ec24d6c976da3fc71a891f89c664ac"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "59bb7dc995565bc76f7c43ba23862787"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "3cb0b383ade7cb6bddbe9188a59a3442"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "35e69c4d1084cc9d4ce2c386c2cde8f8"
  },
  {
    "url": "categories/index.html",
    "revision": "781603bb72869c19aa94be96f25d35b7"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "2d7885aa37e00ce44d0f337dacb1f048"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "1696341a1ccf4f0e126848d46e509e30"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "409666f78e789be4b1987f54ffd09cfa"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "dfaee9f68c83e92ce6e1bad7a843d487"
  },
  {
    "url": "categories/other/index.html",
    "revision": "ce76694e3a53a57a043b4434c56fa40b"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "151c6934674e82ac0aa9b44d3c11bf66"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "be1b8e8fac23d832fb2d0e0732976c84"
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
    "revision": "c0f8b1608e316ffd697859ee63a223d4"
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
    "url": "self-blog.jpg",
    "revision": "adb6dc7dc0094c1d160cb8fd601514cd"
  },
  {
    "url": "self-resume.jpg",
    "revision": "0b07c2fcf77fb875cd329e73ff1e1f38"
  },
  {
    "url": "tag/App/index.html",
    "revision": "cf0ec9e75c122a084fe78043daa2f9c7"
  },
  {
    "url": "tag/array/index.html",
    "revision": "30c2662a030d5de38380850701a532ec"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "386c14004e8d3cf9fce7773779146d06"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "ea3a01a07ffaa3c861e19222fded6dfa"
  },
  {
    "url": "tag/css/index.html",
    "revision": "51c6a6e6b77216e87073c6b4befb56fb"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "76e603841667911f72b9dfd1cb5c1722"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "06bb8a489122485c390f971406061beb"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "c7fda56cb7cc1bd817e61cdd0a550de1"
  },
  {
    "url": "tag/git/index.html",
    "revision": "5ddfdc93ab232fccd5de922423893a6a"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "8037e199c2dd7a7884c17f100738386f"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "7047e086df04dcaaf59de3483086e72c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "1f5a383b52628e3294e0f13af226593a"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "b6b841525bc84ac393c18aab9b488d70"
  },
  {
    "url": "tag/index.html",
    "revision": "5969dec77d2f7637ba4eb8512cd25be6"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "6ba89c7b5061a1438de9e58f38d721fc"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "1d6c15b6f0dc7be3c2ca6ec7a3f1a44c"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "830f02c590626b56521123cc72a0f22b"
  },
  {
    "url": "tag/js/index.html",
    "revision": "2532368657ea73cc095b0c49c80158f1"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "c6101409a3b31f3f976e37ff544c70e8"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "10b83c8706ba46d5000178ff6e9e3584"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "43ca60dbd63444cc596aa8df97c47e5e"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "2e4a692e204a9e385b21ee7d76fe6836"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "6a3f0053530e3e6ac3a66ca9da83241a"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "f23b6c40487ebf50053cc762f7d85606"
  },
  {
    "url": "tag/project/index.html",
    "revision": "01988bbe813765ef8129d0aab45d6eea"
  },
  {
    "url": "tag/react/index.html",
    "revision": "5f574f06b28f0567a10474956eaec898"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "6265a173918d20d22dfb0866dfede92f"
  },
  {
    "url": "tag/router/index.html",
    "revision": "db7dad644cbf563acd8f4e614065f532"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "a9a79272465ebe5362de0d12cc9354c7"
  },
  {
    "url": "tag/style/index.html",
    "revision": "6250d08db3d534722bbaf463f2033c83"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "4e5ce09d27d8ff06896ee480eeddc5e5"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "91928a10bce04aa7bfb430617fdf1165"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "55fe357612cd41362adb5976524c24c2"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "deccc7d0419a50e74971e76af4b9e4ff"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "4904f048a7678b5a1bcd2b37303ecae2"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "74aab1c97af703ae74a1ef2086f9c7bf"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "a36e11fe5bb84b03b3f11906bd0f554d"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "f52091328a078ed1221aba2a0acce7d5"
  },
  {
    "url": "timeline/index.html",
    "revision": "92fcbbf969dd20d3a250264ba0660dd4"
  },
  {
    "url": "views/about/index.html",
    "revision": "55a818f7b49a07a16261bd1275b25388"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "aa23b8162415c07c9b33cbd76f7e233b"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "9f0095fe5c72e8e2242d1c1b4bb20d3a"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "9dbb3c6b91059d6065775c602c597ebd"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "3f8882dc20c3ac14323bb3b81defb1b4"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "f4ec54366b3b82b79bd343542479b78e"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "59abab673f0ef0ee6ab7a3c07bd4e57f"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "b3441685e6c8e567f9e0b84f2ba8827a"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "90258bb815a8480ecdafb2affb8f3731"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "2541a53e1272b859c483634f8d9adf12"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "cbad25318a3f3a67236c0b441c7868d7"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "3a8f4f2e332026fbcbead4d16e214548"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "46823c62a3f84b77520b383f57aaf955"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "5be832d065ec6aaeb78c1d1e6f062b0d"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "8642645ae24dd7163f59255387dee265"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "fc2e8019d3bb3a56f3b91d583c575d23"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "a7d5b1a716e721bf040c46877347c99b"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "b7ec4048903898bc2c78318aa6630b5b"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "6ee54017eb9948b47ee5693a6d016f34"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "7bddba2b4e05514ee25fe1ba648c3b13"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "aa5a4f0d24cb1892d3ba096be446a64a"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "40a77552e3da586e66930b5f1ba9a86f"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "981386f8961fca7ad16b539d98c7e764"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "ce224c8a1146fc906523f30155d65511"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "9d44f6c47e48ac30b55275738d4713db"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "618942049b3a7c9e0177238ff1ccd177"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "b8b9e27fcd0c249e2f644c01a2dce1cb"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "28a9ee15ef94f7352868c6efdb617821"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "e657dbef42f8bd1291bd3bcda23549e2"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "eb47578c4dcd3c14bde78c950b7246e6"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "2c3eb4ebb1aabe62ee95d6610c6a94c6"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "1b8adbc14396c57e9f80b3bc6ea3eae6"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "8e23c991c62d0e338160423dd2de879d"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "24d8061959f89cf00ac3c22a389ebc7e"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "9ef8418e964055ad624cc0c8ba977544"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "ac1f529f114165a2ad3aba671cca2d88"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "031a86608c2958190588735dbc3ba3ef"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "66dd66010a6368ce44fd4c2f65992f62"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "60e3f359ce8dc0fc2b317879b8783920"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "82613a868c29ff91634073ab9c7dee60"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "0fee46f30fbc41e0bf4aa09dd93f459d"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "1650da0261a03d73d3a30c931f03088f"
  },
  {
    "url": "views/project/index.html",
    "revision": "53b7d196f6e619d62f409ce2915022a5"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "ea68ca2ea898405149e528bc958ca34b"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "3d6d4ad063be34429c56754d3213b293"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "c63011dcb2c554a265182c89435ee619"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "b72495028fa557ec781b6d77ab86cd83"
  },
  {
    "url": "vue3-doc.jpg",
    "revision": "21dae5052b51835978e456e993450f4b"
  },
  {
    "url": "vue3-ts-vite.jpg",
    "revision": "4931da9a7dc6b6f08832ef3c4c1bc36e"
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
