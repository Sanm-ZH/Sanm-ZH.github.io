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
    "revision": "0dcc85e35dc0df27e224d18bc10db14b"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.2b1ec754.css",
    "revision": "bbb5bec38babcddeb804427aea7b9a8e"
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
    "url": "assets/js/1.650b4186.js",
    "revision": "f8418141f41614155406525eeb8b4334"
  },
  {
    "url": "assets/js/10.70acf79f.js",
    "revision": "96c72a058d362119db6c5080319bc9b3"
  },
  {
    "url": "assets/js/11.9a7089d4.js",
    "revision": "c1e62285faf0693ff10811ca427fe769"
  },
  {
    "url": "assets/js/12.dae79cbd.js",
    "revision": "7d70747f712995252e632ebd94e8c65f"
  },
  {
    "url": "assets/js/13.3e3d1cc9.js",
    "revision": "1da6861437838281d59dc419f95463cc"
  },
  {
    "url": "assets/js/14.912b17d3.js",
    "revision": "7ce7978f45373b0c42c910a39183f942"
  },
  {
    "url": "assets/js/15.25ee8ace.js",
    "revision": "53d1de72c7fe68ed4af1f86040ba82fb"
  },
  {
    "url": "assets/js/16.21f45953.js",
    "revision": "a960a15b3dc9747acbefaaef3344de12"
  },
  {
    "url": "assets/js/17.1154bca2.js",
    "revision": "b237dad9ce9b26265d6ce61657594b7f"
  },
  {
    "url": "assets/js/18.9fec13fd.js",
    "revision": "28a82028e8b43ca7c50ea042cb48b02c"
  },
  {
    "url": "assets/js/19.7b51cc51.js",
    "revision": "be7cd50e9698931580d7c14d41588fb9"
  },
  {
    "url": "assets/js/2.84eb2001.js",
    "revision": "2ccff0e034acc1480cb2f1350e6c5fec"
  },
  {
    "url": "assets/js/20.c0462edf.js",
    "revision": "316a39ed4371690f7290b82d1a6da3f7"
  },
  {
    "url": "assets/js/21.e95984e9.js",
    "revision": "293011e74905e5f7ffaed7a4f07b559e"
  },
  {
    "url": "assets/js/22.5c8020b3.js",
    "revision": "096b4572a360d3a4fb2ea05d316f0406"
  },
  {
    "url": "assets/js/23.f800bdc7.js",
    "revision": "8d75ca2109928a303178b76dbec2df37"
  },
  {
    "url": "assets/js/24.4aeda5b8.js",
    "revision": "7bb64949a5847dc0d3795d86f3af6c81"
  },
  {
    "url": "assets/js/25.d40bed94.js",
    "revision": "93b1f337916a451ca578f5ca54964c19"
  },
  {
    "url": "assets/js/26.242f33cc.js",
    "revision": "67b1fcf5da68baf29566f67454ebe1ff"
  },
  {
    "url": "assets/js/27.ffe5565d.js",
    "revision": "fa43cafc1f806e630ab60b3b7c003340"
  },
  {
    "url": "assets/js/28.e87890dc.js",
    "revision": "6646e454929974f1b13697693fdb33dd"
  },
  {
    "url": "assets/js/29.01b54574.js",
    "revision": "88ed55a0981342bea08b2900371199ae"
  },
  {
    "url": "assets/js/30.cc9fbf2e.js",
    "revision": "eb59f55cb349857684a6463b2672108e"
  },
  {
    "url": "assets/js/31.ef3925f9.js",
    "revision": "392cfb4fe3511ba93922f11908c9e7d3"
  },
  {
    "url": "assets/js/32.c923d325.js",
    "revision": "8a578d63d450bf0ba92381e71129e27e"
  },
  {
    "url": "assets/js/33.4de21ced.js",
    "revision": "8b071b98e9b8d43eae1726b2aa912eff"
  },
  {
    "url": "assets/js/34.5094df4c.js",
    "revision": "162a8e78f8c5d1e299946a546cc3dc25"
  },
  {
    "url": "assets/js/35.e5f1dfa9.js",
    "revision": "9c9ae9244a1d04377f34aac8dab78ec1"
  },
  {
    "url": "assets/js/36.b7f94aa0.js",
    "revision": "41c6ae1ec9f6f72c86da622ff03863f6"
  },
  {
    "url": "assets/js/37.551dae6c.js",
    "revision": "32ab53859c550685c049f061db6adf44"
  },
  {
    "url": "assets/js/38.979cd3cf.js",
    "revision": "73cd7d670bf3017133fe6ad21a7b7cc7"
  },
  {
    "url": "assets/js/39.0249a6ae.js",
    "revision": "fb81cfa2fc8eaa5d8e11e95ca42706de"
  },
  {
    "url": "assets/js/4.89244cac.js",
    "revision": "392b3b37f5ad45267c83349ce3c594a3"
  },
  {
    "url": "assets/js/40.448f7e38.js",
    "revision": "b21028992a501af71439daae80874faf"
  },
  {
    "url": "assets/js/41.cfd8bc91.js",
    "revision": "33e952632baa4bf4f3f3b6ba7f50b00e"
  },
  {
    "url": "assets/js/42.3b27d2fe.js",
    "revision": "9088a7515df6f5cd4a0d9933f7740d92"
  },
  {
    "url": "assets/js/43.5145656a.js",
    "revision": "52c1eab9ac197cf713c9ae8907406d37"
  },
  {
    "url": "assets/js/44.489b69a4.js",
    "revision": "63c1d01f00bf11847d7a18a08c0caf3b"
  },
  {
    "url": "assets/js/45.4222a3a5.js",
    "revision": "8ecdf1339ed0f1d1e513ac97977ca62b"
  },
  {
    "url": "assets/js/46.bcbea7ff.js",
    "revision": "169bf48ee6c622f66d8d206d533ca8fe"
  },
  {
    "url": "assets/js/47.49cdf265.js",
    "revision": "c4e60a7b592c2c44a5e9474f59e8818a"
  },
  {
    "url": "assets/js/48.272f7759.js",
    "revision": "6898afd6abf87b975b390907c62d5156"
  },
  {
    "url": "assets/js/49.de5a90ae.js",
    "revision": "c8ff8a2a40b923ad32ffc3f31cd695d0"
  },
  {
    "url": "assets/js/5.12dbfa45.js",
    "revision": "155722c896205ba3d5c5ac1e113fd56f"
  },
  {
    "url": "assets/js/50.78957b9f.js",
    "revision": "345dafe84b008e1a06891fcfd5c4d883"
  },
  {
    "url": "assets/js/6.269d5922.js",
    "revision": "232e26c579028b946ac9097554b328b5"
  },
  {
    "url": "assets/js/7.9d35b2f6.js",
    "revision": "1b547d164df16e5e7fbf0d5282da315a"
  },
  {
    "url": "assets/js/8.a1b874c8.js",
    "revision": "da6fc8a99a45bf458840332ae398e381"
  },
  {
    "url": "assets/js/9.bb076b48.js",
    "revision": "322f3db24f9315fcee2aae4ed469f53d"
  },
  {
    "url": "assets/js/app.df32c0ff.js",
    "revision": "d3c5050632f5b6bb04f2516277e0497b"
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
    "revision": "e5f6ebca403c16819b4301a8eb8b5b7a"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "e85b756a7ee4dbddbad3fb9d6d8a0825"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "170bc7e489a177d1d9138c48075e7370"
  },
  {
    "url": "categories/index.html",
    "revision": "4b9fa7844bc3c3b6bc1729bb1856c734"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "2e997c5d0dcab39e1d076995a9ce4c11"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "5c1c672e65f45983cc6dc0822d29a685"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "17d5a62ad398377b73b70d18b4864415"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "c6c7c13e5e57a39f4cb2e68e01ebc9c3"
  },
  {
    "url": "categories/other/index.html",
    "revision": "1fe875bd90dcc98e0228c445b7521f54"
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
    "revision": "a317e28eccc17954ac64a9b820f17cc6"
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
    "revision": "c96a98e831e6f4ce2f13c17573707532"
  },
  {
    "url": "tag/array/index.html",
    "revision": "5bd89e65d26343f70c3d3152f4c512e6"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "814960bd781f38c220d87c9ece996caa"
  },
  {
    "url": "tag/css/index.html",
    "revision": "a02de6c2e59b16aeb7d7cedfdbf10d91"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "d5126cd8e24ba7c6afafa9196efd2d61"
  },
  {
    "url": "tag/git/index.html",
    "revision": "da2384ab1bdc84ba8fab0ffa33e87788"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "86aa05651cfe062fd95e25d7002d8391"
  },
  {
    "url": "tag/html/index.html",
    "revision": "03a2c7d1893436ea9a778f58155c102d"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "6da9ab23919242e017e60a14bc79248d"
  },
  {
    "url": "tag/index.html",
    "revision": "defa2ea9731bb96cfbe4f06ba2e0492a"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "b01a119456b4643e96f1d466c00fb1c7"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "fe3115df94e321aeb6e86f610dedc25f"
  },
  {
    "url": "tag/js/index.html",
    "revision": "633f8dcaa90f95a9c2c493bf062c171e"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "1ea56a240c0849536e736fe649417ec1"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "46d7a547c2fd9e11ec59f83f5104a66b"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "d6a3b4be692dbac454cd3b8c9c96a0d0"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "652f1aa35ddcdf8182ab2860ff7e9485"
  },
  {
    "url": "tag/project/index.html",
    "revision": "3b33fc9c34cc223cfff5ba35a21549b4"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "7dd8a60ff139165ffef69f87951fd444"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "5f6c84d42fdcfe3e887b50d2117e799d"
  },
  {
    "url": "tag/style/index.html",
    "revision": "8ae8e7142b045f2223c0470336b1a4e3"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "6da2c22a1f5d8e6a7a8968e15e6823bb"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "8f5aac09ba012cff53605ace041b25ea"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "409bee72c41da24ce95a45df01070133"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "99e3d23a002a19837acf629995644c8c"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "d358563e4aeddbf090c809087bacc6b3"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "50f12bd2554ca5bb0b17bd60c15681db"
  },
  {
    "url": "timeline/index.html",
    "revision": "4f5221280abc5f269fb04ddb29416bf2"
  },
  {
    "url": "views/about/index.html",
    "revision": "3611ec8b894846193947eb3555d99f67"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "b3ed6b91c1d4190f0e8ae527f28a51f8"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "ef848ff039b1f050838911017fc3fffd"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "4b460abbd7f203c8d2921ad84390c15b"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "8269b9f77412e41c321ab5f4acd4f454"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "f18de3ff5c709064553d58221022f59d"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "6ac4d04743eba842ee598338949ee0f2"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "f3f1815e6e7469b041ecf98685a48aeb"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "3dba1df265d287a49be8dc633a5f0741"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "d42ecdb6144dfc7ad032656c91d1f96b"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "ad9561a0f0493064e2a1cb503b26b918"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "9be1871d94b4059428c18add188debf3"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "1a7792756fdd550c80ac79438b6a8cde"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "0848fcf38a49434c154aebbe6892c2d1"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "77ff40072b2bf75134740debceca4341"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "6ee04452f3d84ba82b6270278964211b"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "49bbbb1c715e9052f7ad1de574466cc3"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "87a87b0bb70dc57c7c98419788b36116"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "e4676a33de7a02dbcf19a3d1a214bcbc"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "60bf125477eac180a4779aa78103dfec"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "809c0a08ee3f014246284565ddd76f45"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "7f23b347d5b68fd7c5ad0bd31072a98d"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "d660f8613c527d544153f85bf291ae92"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "bc0e8436463066e3c696b56b0abda4a4"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "721e3b77fdd6260c8786c726d9d2e158"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "0bff5aad59ef7e3557410e85d8461a31"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "969ee70191a012fa7d7e7a653b124ff4"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "f4058b1441e3cc15aaf68f7dc76a5463"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "faa3701c4e732e8082eb2506aecc9bbf"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "fe9670643bbde9062cd70e9a53c01ab6"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "24a8b89713eaf620288c22b9d7174bc1"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "f9b65921a1714d9fa591ea19968b17a5"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "1f50ed70f7c35992e8cd825445e89204"
  },
  {
    "url": "views/project/index.html",
    "revision": "a7ae3e5f81f87c40868f1e93c95174d3"
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
