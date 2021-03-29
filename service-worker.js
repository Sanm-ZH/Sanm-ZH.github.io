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
    "revision": "cb02554c654039ae671f0797533e24a2"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.805a5e3a.css",
    "revision": "510e762896d2259bf41476a2115f9aa4"
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
    "url": "assets/js/1.a6fe4717.js",
    "revision": "db068133594016f2e48c1232bedeeb18"
  },
  {
    "url": "assets/js/10.23a73a95.js",
    "revision": "cbb3bcc0b02d8da88d9736095ed297ff"
  },
  {
    "url": "assets/js/11.e6b4c602.js",
    "revision": "ec8dd5aab4db60a98838b3b6c41193b1"
  },
  {
    "url": "assets/js/12.f8855228.js",
    "revision": "31e133eba4e677b0dfc19b089086a4e4"
  },
  {
    "url": "assets/js/13.4237214f.js",
    "revision": "24458556579a3f80037ed100e6681c62"
  },
  {
    "url": "assets/js/14.94fb075e.js",
    "revision": "549ef35c37540364beca4e52fe14e978"
  },
  {
    "url": "assets/js/15.863cd1d1.js",
    "revision": "a358dfc7e4a1312a840671fa52614318"
  },
  {
    "url": "assets/js/16.6f794ec3.js",
    "revision": "5c831e0a4ca5188e332744dd3ad39eb3"
  },
  {
    "url": "assets/js/17.6092bd98.js",
    "revision": "9b6d7f3b8dc675d7f3628d25151ffc8e"
  },
  {
    "url": "assets/js/18.7a73e6b2.js",
    "revision": "f23a83a2872a571d255006306b08595e"
  },
  {
    "url": "assets/js/19.86e29277.js",
    "revision": "5bc94e9e0a02b1d0e8701ee1029a762f"
  },
  {
    "url": "assets/js/2.f486cf1f.js",
    "revision": "4bbc3750c83275f5e7bcf990cb493135"
  },
  {
    "url": "assets/js/20.234b668f.js",
    "revision": "6f6470b973d97f8857c031801e70f22f"
  },
  {
    "url": "assets/js/21.8a4df895.js",
    "revision": "87ecbbbe7f0f5fc2d0f115009424a495"
  },
  {
    "url": "assets/js/22.0864937a.js",
    "revision": "afa8a9d403f04146b9a11e047543ddd9"
  },
  {
    "url": "assets/js/23.1af41ea9.js",
    "revision": "584945abcf2d01901e852faf5ee78dc7"
  },
  {
    "url": "assets/js/24.484d3ea9.js",
    "revision": "ed893bb3cf919a81b7d186206c28e65c"
  },
  {
    "url": "assets/js/25.4f91d7ef.js",
    "revision": "2967bf30aed435c486c6cd57eb31903d"
  },
  {
    "url": "assets/js/26.6821812e.js",
    "revision": "fc8a2fe827a7ecca7e167062798f8ed6"
  },
  {
    "url": "assets/js/27.37942939.js",
    "revision": "d54f0884e449c9c1635e170c03c66f08"
  },
  {
    "url": "assets/js/28.4be824bc.js",
    "revision": "75d5076607886cf2673f8b97d416ee14"
  },
  {
    "url": "assets/js/29.a65c6753.js",
    "revision": "7e7b5704d14425af643b303ce21566f8"
  },
  {
    "url": "assets/js/30.ca41c19f.js",
    "revision": "a6e5a73941dfbbf4dd311fec9b919ece"
  },
  {
    "url": "assets/js/4.e26dde13.js",
    "revision": "06d6d98e2ecdcd93e3295ee8b83fc402"
  },
  {
    "url": "assets/js/5.c249e83e.js",
    "revision": "a0e366e1a010a5c4ad9a08190282622e"
  },
  {
    "url": "assets/js/6.60e51ad8.js",
    "revision": "987c4599302975226af5949f10638dda"
  },
  {
    "url": "assets/js/7.ac720216.js",
    "revision": "803979e8d1e0c92cde1a0f7cc62c1104"
  },
  {
    "url": "assets/js/8.34921347.js",
    "revision": "1796ba4ed8ae5cc3078bb3bc45e18c63"
  },
  {
    "url": "assets/js/9.08c80928.js",
    "revision": "002caaf97763683403b4109d5c8ab72a"
  },
  {
    "url": "assets/js/app.55dfc062.js",
    "revision": "4166af4c037aa9fd014241d4be003445"
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
    "revision": "9b4bf578493ef8fbec2e50e5cbd603f8"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "d9cd57b6d9383d6d9b17d81c45846414"
  },
  {
    "url": "categories/index.html",
    "revision": "7d32d3df76bc7b2bf833f682ff120ec0"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "8eef974e8e267ed49ae6b6f7f24075f3"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "c1acae93d78dec09e109ed0c7e7966b9"
  },
  {
    "url": "categories/other/index.html",
    "revision": "9142d8a5bb23fc42a8c49367c58ab1d2"
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
    "revision": "dee00d1f265e982b0b3e4e806341dfbe"
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
    "revision": "5b2b14177d37247860a7eb886c1e01da"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "3910708da95a8afdfda83ffe8597e23c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4201d0c4d13a2322995a8f11e267595f"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "c589af9f3344008ef93685f3f91240e1"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "c845422163102b8397fffdb354708232"
  },
  {
    "url": "tag/index.html",
    "revision": "2a5565784eedf52db8a91cd053521a96"
  },
  {
    "url": "tag/js/index.html",
    "revision": "b18aa6e29d11676009e5e1fb8a260c9a"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "34123b1fa96786253627d4f0c11e553b"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "94835567389b37b55c4139a7254bd91f"
  },
  {
    "url": "tag/project/index.html",
    "revision": "da755f9946d8d769c121503b9f4ea679"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "5090fbb8b7b3e4b2c24327bca5ca1339"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "095d13a17b51efab7b175ec25c41791b"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "8b8e0654b9d4c56f7aae232ca0e0b511"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "901fe5266385920f5fd1e184bf7d27b9"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "3256f0b4ece8ca48b7faf4513400f724"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "0bbb37a21e98a4cd26b852a99b6df2b8"
  },
  {
    "url": "timeline/index.html",
    "revision": "247ec56a7c3599f4e2ee87202ebc1726"
  },
  {
    "url": "views/about/index.html",
    "revision": "cb0e1091e14e4c623c99049b0534d6d2"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "96b466a4cb44c3aeaae22c67151875c2"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "935199fc59c7e946d1b8e9a0aabdf52b"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "4f2c08232ebb19b9afc2ceaa708f0f53"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "13351a4af8e92e065e05ef7545f917e8"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "023a0f5996562703c53b16c2b5ef967a"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "8916a27575496ff5e664a9c46fdba096"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "a07d234ac1f9fd2f2d0e3f92d78c586c"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "931cb72f4968358959e1333aa34f92ce"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "c9c7bea9d7a5661715690893777622c0"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "e31e3d689f338979aff58d11a465eeac"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "d7372e71511005375f56a46be51fdb84"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "622107ab8448177c95cacb7372acf8d9"
  },
  {
    "url": "views/project/index.html",
    "revision": "c3319e31868c2d75cd08a6335cdc8de6"
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
