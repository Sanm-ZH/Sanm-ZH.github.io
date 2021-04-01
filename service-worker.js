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
    "revision": "7806ff1e4588f317801328ff03a93c82"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.3ce87cf1.css",
    "revision": "fedccbff341828abf450c2282f7674de"
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
    "url": "assets/js/1.c58f6ea1.js",
    "revision": "87fd1291d973cb4c1937e6647c64c2f8"
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
    "url": "assets/js/12.6ea38575.js",
    "revision": "3117ac8ed3cfd8a05d14f27ea904fb5b"
  },
  {
    "url": "assets/js/13.5779b8eb.js",
    "revision": "b2d8d0fba44badcc13f5dc25e008b48c"
  },
  {
    "url": "assets/js/14.916fcff5.js",
    "revision": "3302ffc4c43f3fdfcf126c1ded66c8ae"
  },
  {
    "url": "assets/js/15.dc2a595b.js",
    "revision": "6b30f5f17eb695d5b55cea903325420d"
  },
  {
    "url": "assets/js/16.7366c4cf.js",
    "revision": "da205e3af8766b95dbaebc1ed9449798"
  },
  {
    "url": "assets/js/17.d5bb031f.js",
    "revision": "d130c344f428e562739b6c19ce966778"
  },
  {
    "url": "assets/js/18.1d8e9486.js",
    "revision": "d7d41b079bada4973c0d63191b5c6613"
  },
  {
    "url": "assets/js/19.f0d8f9c2.js",
    "revision": "09570c4451b632e32946bf02daeee5f7"
  },
  {
    "url": "assets/js/2.f486cf1f.js",
    "revision": "4bbc3750c83275f5e7bcf990cb493135"
  },
  {
    "url": "assets/js/20.83eb93dc.js",
    "revision": "0db258e191c14a4b4f4adddbcc6c0bba"
  },
  {
    "url": "assets/js/21.c673540c.js",
    "revision": "94f66ae2265f5cac61291a33b7efe418"
  },
  {
    "url": "assets/js/22.fc3123b9.js",
    "revision": "450130d670eb292088562153abb4075e"
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
    "url": "assets/js/25.80eb4fb9.js",
    "revision": "dc23732235a2aa52bccfc74194b0f4b8"
  },
  {
    "url": "assets/js/26.41a10dee.js",
    "revision": "f834c08fa6f05fba750e21426501ac57"
  },
  {
    "url": "assets/js/27.37942939.js",
    "revision": "d54f0884e449c9c1635e170c03c66f08"
  },
  {
    "url": "assets/js/28.959c612a.js",
    "revision": "636011c077746eb353e5a14a9abdbf33"
  },
  {
    "url": "assets/js/29.a2c5aa08.js",
    "revision": "fdc1c3bffad2ace0dadc7b0330e26557"
  },
  {
    "url": "assets/js/30.20addeee.js",
    "revision": "87f823700ea047a67b40bb3dad6d260c"
  },
  {
    "url": "assets/js/31.bf9b5698.js",
    "revision": "f1ad85ed6193b6aaeac5329ad38b0e05"
  },
  {
    "url": "assets/js/4.d04ef7a2.js",
    "revision": "4c6575f3f61149988da11a8d6e0ec0e0"
  },
  {
    "url": "assets/js/5.4550bf5d.js",
    "revision": "31b26a08673127fa0579ab9cd9b7d524"
  },
  {
    "url": "assets/js/6.4a6790f8.js",
    "revision": "a57ad78ac65fb98fd8b593c7fceb1054"
  },
  {
    "url": "assets/js/7.2cec05cd.js",
    "revision": "42c187897b7d04be2beb4e7d2d4c0639"
  },
  {
    "url": "assets/js/8.34921347.js",
    "revision": "1796ba4ed8ae5cc3078bb3bc45e18c63"
  },
  {
    "url": "assets/js/9.d73f523c.js",
    "revision": "dfd5fb91679a89cc5edbd0509a5c33ce"
  },
  {
    "url": "assets/js/app.dd1c0aa5.js",
    "revision": "7742f8843b807a37913cb70178f22f80"
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
    "revision": "c2d44b0cb9f63039a4b1dcc42c1615ff"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "47f06a671d0296d54662cc1790791f06"
  },
  {
    "url": "categories/index.html",
    "revision": "24b18936c495096d010ef6cd7508e4aa"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "4a1d4df2c8a10185fa9a2106514973aa"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "ab549f725dac65f944e20a579fe91062"
  },
  {
    "url": "categories/other/index.html",
    "revision": "f250b2c41a65c20fdd668dd5d690e524"
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
    "revision": "ef8034f9f341b2ef05742ce9b8eeaa5b"
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
    "revision": "ba15a3ad6c4e992a51eb6b333f640c88"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "25f837b590bf80a530d65b3ea7f3bad8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "998507a6f2eb53742f543dde9da87894"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "ce1465803370b77e0a3ef409a2348257"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "3a5e6634b18350501f627bfe556400d5"
  },
  {
    "url": "tag/index.html",
    "revision": "a19918d3d3a7874afba486c91d7b779c"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "245f6ab0ce2f206a25df5fd09863ce35"
  },
  {
    "url": "tag/js/index.html",
    "revision": "4fabf3f246604fa4bd803816f03353d1"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "7f85ae6b9c269de5f5cbb31683ebaa97"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "faed9e7e09c71280ad25c8d585c78cf0"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "03656900c9e51d4d2887359a30f59ce5"
  },
  {
    "url": "tag/project/index.html",
    "revision": "5a1027874358bc29be337f37939aa7ba"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "3edf4f10a936a4da4a2211923e1919a9"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "54c76271e6bf4abce69cd170d352bc06"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "18fef28dfc6eeb9167cd6a0b04823bf2"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "5673e8db5d9da99344ba03dc7d637a68"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "c0cd0a224a753647b963090739afced5"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "709e2fec1671fc1eba816ce9be66f669"
  },
  {
    "url": "timeline/index.html",
    "revision": "77c673876450e8a322a2475920b7c7b4"
  },
  {
    "url": "views/about/index.html",
    "revision": "c31cd6d121d20344c0cf495c012abec7"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "3f84785e53d9a26590ed1f62f810017d"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "ca04e1a51d0c97e682702dcb9f3b535e"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "37ef55994eb60ab4d41c7431a282cb54"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "f4b920ab1ba828a26852642b553d6409"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "a5e8d6d1037a27dd00be67a52a5d9d7c"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "3f0d93aec50c56c00a9c86d60cc08902"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "35f5e0795d1f15558e7c927e2e05eee9"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "c92713db1b72120ed2eb9e3f247f108f"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "0a6eae507885c2e7fbc8b27032396e25"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "31ede02a7861d36e49faa1a9ae38ae89"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "d34c9ad07ce01e310ae4d18e8eae3d68"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "5e94389206dff8d3f74d670412bf59a4"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "638cdbe65d01d3f30765390d972db996"
  },
  {
    "url": "views/project/index.html",
    "revision": "5097522796d4a6b098f9a1b0c203a7cb"
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
