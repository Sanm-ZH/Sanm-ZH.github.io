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
    "revision": "25eaf6929d88e9b54f4f7885b7547ef7"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.bb34b5fa.css",
    "revision": "ae3d6bae98654aa1133f4c49f35ebc97"
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
    "url": "assets/js/13.f7c8cb53.js",
    "revision": "d817b7e3713b2b2743a3a2ff4cf345af"
  },
  {
    "url": "assets/js/14.47fa5c1a.js",
    "revision": "792f407f191863294adc555f4f371b0a"
  },
  {
    "url": "assets/js/15.25ee8ace.js",
    "revision": "53d1de72c7fe68ed4af1f86040ba82fb"
  },
  {
    "url": "assets/js/16.64c7b502.js",
    "revision": "2140c23074ac59d2dedb6016bf12ecf2"
  },
  {
    "url": "assets/js/17.5ce2fa3b.js",
    "revision": "94bc6a45ab21901453bfea26f68b098e"
  },
  {
    "url": "assets/js/18.9bf6c7bc.js",
    "revision": "866ba03b415d3804f495825b0b746bd2"
  },
  {
    "url": "assets/js/19.e87ab3e2.js",
    "revision": "85cdf4fd4ea5b0cdd4bd7f0c356d5638"
  },
  {
    "url": "assets/js/2.84eb2001.js",
    "revision": "2ccff0e034acc1480cb2f1350e6c5fec"
  },
  {
    "url": "assets/js/20.0be9d3f5.js",
    "revision": "18aa3596d06aaa4d878d8324402a3a45"
  },
  {
    "url": "assets/js/21.c86f82fc.js",
    "revision": "2d494b6c1ce54406643f03e6749f1913"
  },
  {
    "url": "assets/js/22.f9ccd47a.js",
    "revision": "e9c6838cdbcb0d9a637a8d6f6e8bade3"
  },
  {
    "url": "assets/js/23.06efe03f.js",
    "revision": "df414965db6fd4b582685011c213bf35"
  },
  {
    "url": "assets/js/24.876ab06f.js",
    "revision": "f98714417c71016f75eec4ddf1f8ca47"
  },
  {
    "url": "assets/js/25.47fee2ad.js",
    "revision": "f98c5e077f00e28fc331560724e0539d"
  },
  {
    "url": "assets/js/26.0d295fad.js",
    "revision": "1a563982f28e620695626ca4aa3d5a16"
  },
  {
    "url": "assets/js/27.4ed35c28.js",
    "revision": "6beba376504a8b005b27b35b94f2a3cb"
  },
  {
    "url": "assets/js/28.7b151fb9.js",
    "revision": "ee94d3714d4a7877be68c7c863d79c84"
  },
  {
    "url": "assets/js/29.83f93530.js",
    "revision": "270add85fef9266e4f46d19365fbe869"
  },
  {
    "url": "assets/js/30.fb87bc4c.js",
    "revision": "6c9aaffc0ecac64b76d4b82014f699dc"
  },
  {
    "url": "assets/js/31.cfd16aa1.js",
    "revision": "2007884b26434849c04b0b95d0f4bb1a"
  },
  {
    "url": "assets/js/32.2f5e46d3.js",
    "revision": "f75ab6e5f7b11c1440871914ff57c28e"
  },
  {
    "url": "assets/js/33.a6e1c0e2.js",
    "revision": "a9db81c6e8d3495a037e6fe9f2a81043"
  },
  {
    "url": "assets/js/34.ed0e55dd.js",
    "revision": "d942966d450148b00df9f264a453310f"
  },
  {
    "url": "assets/js/35.41052ec2.js",
    "revision": "168fdd8f14d16b890179e6825225fd19"
  },
  {
    "url": "assets/js/36.8731b3d4.js",
    "revision": "5a1e9cce72606ad19c2c68045410bf9e"
  },
  {
    "url": "assets/js/37.eb7d5e5f.js",
    "revision": "fae43cc7732c29e2890bbd2b15a0afe9"
  },
  {
    "url": "assets/js/38.366d5e12.js",
    "revision": "1ce7b9db764088961846f586dd526c3c"
  },
  {
    "url": "assets/js/39.ebddc714.js",
    "revision": "e42d4d8111cc973e5c7339e26f24226c"
  },
  {
    "url": "assets/js/4.89244cac.js",
    "revision": "392b3b37f5ad45267c83349ce3c594a3"
  },
  {
    "url": "assets/js/40.19ed2089.js",
    "revision": "027c8e8fdc68a2875ce7b0e2d78fea2b"
  },
  {
    "url": "assets/js/41.5c8f8eee.js",
    "revision": "a49fd4537bd1401544e9ec8e3e201f2c"
  },
  {
    "url": "assets/js/42.15ed70f8.js",
    "revision": "0e130ef0b885c810f609b6d076873458"
  },
  {
    "url": "assets/js/43.71c888ea.js",
    "revision": "c0aa3e664c1527d189cfee8e45d22caf"
  },
  {
    "url": "assets/js/5.12dbfa45.js",
    "revision": "155722c896205ba3d5c5ac1e113fd56f"
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
    "url": "assets/js/app.f3674efe.js",
    "revision": "35ef773bed45bda7502f54157b707410"
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
    "revision": "ef3e7d63a10633278b1a09e52aaca0ff"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "c5ef81790a1a0c009cfd8122f1c62c25"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "5b559a4fba8f9bb37b4d4621e32dc38e"
  },
  {
    "url": "categories/index.html",
    "revision": "35fd562acc4c034b432f5ecd43a4a829"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "58dc0442ad0d370b2624baec38400107"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "560ceb3a31f7d391505bc51048c1dcde"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "e23729e349a098d3682362bf43ffcfd1"
  },
  {
    "url": "categories/other/index.html",
    "revision": "d36faff9e39e3769b39752bc2e4f738b"
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
    "revision": "50c89d9d48aed47df67d92c30aeef4cd"
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
    "revision": "84d36074f818af1c7eae2fc0483d5032"
  },
  {
    "url": "tag/array/index.html",
    "revision": "b3fd2fbc53591c69a8a1109cdc80c4e3"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "f7070f30a5e10a433599b34234d52fd9"
  },
  {
    "url": "tag/css/index.html",
    "revision": "dbe18ebcead0d4175d08019e7d58d56a"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "b33b9d1c73b663c337cb8ce592e3553a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f9cce8f9cdd1104eacf5e897fd72c0bf"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "aba433cf6d71f28c7d2b215b451bad13"
  },
  {
    "url": "tag/html/index.html",
    "revision": "79bbbf67b05e92c2ebe4b24f842ae458"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "0166fe81bce72eb52f09eef6e404501d"
  },
  {
    "url": "tag/index.html",
    "revision": "915c27959b9e7fc355bcb6d13020de44"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "291aad5300c740e7b394d1004030eddb"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "cf7bb96ee9f7aae50c19317b679d361c"
  },
  {
    "url": "tag/js/index.html",
    "revision": "654f96603480c4a490248df21d22002f"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "8d9e4266d171cb604a9ad39da9fa602f"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "e1903876252048b7a53f11b9e1d45d06"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "705b4a8572301ff3667601bedc65c232"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "c3e3a0bf1b7389349126193343dd0850"
  },
  {
    "url": "tag/project/index.html",
    "revision": "0ae48f3a824ec51cfedd628687ca2fed"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "6084f4589dcb3ee1545b6fa01d2255c5"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "e8c2763df0b4b461a31712488ac6a8d5"
  },
  {
    "url": "tag/style/index.html",
    "revision": "3bd4c7f75d8f7655ab36760edf22fcdd"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "8c802befd9212679d88eda5abfbf0407"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "7bd7630e402d0d7c9842f34610db00e6"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "3687d371cc2ed419aa69850434336272"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "db350f4a9209212c16e41881401b1250"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "33e6c45ea704aaa2a3d9f258848e00c8"
  },
  {
    "url": "timeline/index.html",
    "revision": "636e7f1194035d61b47308a9a41c03d7"
  },
  {
    "url": "views/about/index.html",
    "revision": "4d50d68664edfbaccd63a84755930163"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "73782bd4a6a3ee0b785ab64c4859ffec"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "fbedede8d4c062a8465abb05a8864630"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "4cef8cd99d8f2d64cdf6a23c4d1bbc8b"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "6bcc43a43f6bfce8b521c5fdaaad8ea0"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "94c59a146fbb5a225c22b210a1bdda00"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "125a7e3410417a4b97d9a2dea4b36b3b"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "41d1bcaf9bf264aa77bd3a5166904dac"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "a5ed7e769bd84c08feb8b4e64767dca1"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "496adff83d46e4d2291e9f8f9b2adf3c"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "f6a61887718a9c94d882ffbe1a2e15e6"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "250023d71d14bfdf9a5d5c4307eb2c68"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "a9e3a036319aede457f6cb23bf876c2b"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "d53fcce59ed8e9cf033f93eb29efb4b3"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "bba100da8fced8c323b71f75334bed9a"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "51cccec1a47e1e71e7edb860b4581b03"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "22bc51761d2db86c72480e241a694dfb"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "e309180ce0c9862bb92e089bc12a5d8d"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "9acb9ef3e5121d11b380cfbd25afe458"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "e1038782d9a078dd5e5e78ecde9fae32"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "961af5f58cd353a3a9c386eb1032c307"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "41dfbef4b2b9773899dfabdc7b93c7db"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "205e365d0db4cfbaf0358b256b91c667"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "0adf023383e0c3704db76d2b94c2e451"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "d6519ea6a702d9f53b9ae6f296ebfd39"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "40059bf968503fdb46d5c7acaccad2f5"
  },
  {
    "url": "views/project/index.html",
    "revision": "5a59efe156fa79171a230d3916dcfa33"
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
