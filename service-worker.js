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
    "revision": "50c32ac67ba17e8776713bdee74530a9"
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
    "url": "assets/js/13.92b294df.js",
    "revision": "87d402140b672c710db2e3b621e3c8c2"
  },
  {
    "url": "assets/js/14.9346c9b9.js",
    "revision": "99015a1464381bec5d39ef28141c4cae"
  },
  {
    "url": "assets/js/15.25ee8ace.js",
    "revision": "53d1de72c7fe68ed4af1f86040ba82fb"
  },
  {
    "url": "assets/js/16.9f88736c.js",
    "revision": "51fa32c201dc47d1ec083a133dd0d9d8"
  },
  {
    "url": "assets/js/17.672ec1e8.js",
    "revision": "baaaa74cf862965f6214502e50898171"
  },
  {
    "url": "assets/js/18.57723555.js",
    "revision": "bb7b4d2add32ee1189085d2013f5324d"
  },
  {
    "url": "assets/js/19.ac590f39.js",
    "revision": "34625a19a41be10e71689433d6c2e51b"
  },
  {
    "url": "assets/js/2.84eb2001.js",
    "revision": "2ccff0e034acc1480cb2f1350e6c5fec"
  },
  {
    "url": "assets/js/20.f1d1b6a1.js",
    "revision": "8fc67354c83fc2f4359b2a5cdaaca2d1"
  },
  {
    "url": "assets/js/21.aebabd0d.js",
    "revision": "4be25a95ee74a832a41aa34ba343d5af"
  },
  {
    "url": "assets/js/22.f88784c0.js",
    "revision": "1d005792be59c99ec2e093d6efdb2a11"
  },
  {
    "url": "assets/js/23.d7584533.js",
    "revision": "7164a1a5bb9bcc11b2c27b379b3c9ad6"
  },
  {
    "url": "assets/js/24.d3cf067f.js",
    "revision": "9b820f3fe1c2418d78205ced817942e0"
  },
  {
    "url": "assets/js/25.d40bed94.js",
    "revision": "93b1f337916a451ca578f5ca54964c19"
  },
  {
    "url": "assets/js/26.389b8918.js",
    "revision": "0f35e73b959a43ad10fd0f4a9d36fb87"
  },
  {
    "url": "assets/js/27.bda9f7dd.js",
    "revision": "7e10952eac7dcd10cdd3ef51e6b296ad"
  },
  {
    "url": "assets/js/28.20280c7d.js",
    "revision": "138ab02f4dc293f401cd0d8f04f730c0"
  },
  {
    "url": "assets/js/29.f4d48da0.js",
    "revision": "6ae5b2279ffa6f1e5255b655ba480e14"
  },
  {
    "url": "assets/js/30.da3bdc6f.js",
    "revision": "7885ba2e264c32328dc249eb043acedb"
  },
  {
    "url": "assets/js/31.9f30f0dc.js",
    "revision": "fca980e2f5177a36a4eb66a5d7d8bb29"
  },
  {
    "url": "assets/js/32.a36af823.js",
    "revision": "2ff0a9c7dc8c40483210d88516ce1ea8"
  },
  {
    "url": "assets/js/33.111dbf03.js",
    "revision": "1f0a0a44665b19f247beb6cc745563e4"
  },
  {
    "url": "assets/js/34.cc53249e.js",
    "revision": "8bbe13cdc20104e5507ed0c200484baa"
  },
  {
    "url": "assets/js/35.57907ec8.js",
    "revision": "0e90cd93f5edaa8af471e46d56576332"
  },
  {
    "url": "assets/js/36.6cfb1c1b.js",
    "revision": "df4f1f43f8ce979983d4eeeb1d14e900"
  },
  {
    "url": "assets/js/37.61218c7e.js",
    "revision": "fb56b501b8d9d5e89e8f70456c14f522"
  },
  {
    "url": "assets/js/38.8ab595e7.js",
    "revision": "859e3d232e7aa8dd5371df7eb4bbc93c"
  },
  {
    "url": "assets/js/39.fa093184.js",
    "revision": "216d26d3f4365aab31ff6ca2073724d4"
  },
  {
    "url": "assets/js/4.89244cac.js",
    "revision": "392b3b37f5ad45267c83349ce3c594a3"
  },
  {
    "url": "assets/js/40.90c16a51.js",
    "revision": "0a37a787ebaa5385e176aa52e44e38d4"
  },
  {
    "url": "assets/js/41.a1be3952.js",
    "revision": "8d73b605b62dd75e54c4e7099b8d22c0"
  },
  {
    "url": "assets/js/42.7cbfa705.js",
    "revision": "55c708f4a49eb571befe0bfc27247871"
  },
  {
    "url": "assets/js/43.851c3939.js",
    "revision": "29de0ab82993e17899449d6b0c2d813b"
  },
  {
    "url": "assets/js/44.66a803bb.js",
    "revision": "33acca209a520392d83ff51e1980bd6a"
  },
  {
    "url": "assets/js/45.bb3866ab.js",
    "revision": "d9e26bc9a89f363ebccd8371c326bf98"
  },
  {
    "url": "assets/js/46.bbfbe228.js",
    "revision": "adb90e896400ddf4d90d727c2f06a32c"
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
    "url": "assets/js/app.30f44b56.js",
    "revision": "fe66d879e650934d6a371f5213ea6b14"
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
    "revision": "13f2ec46f0c8a1b4d9840717cffa6321"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "c51db70fe0149e31a329d95e3cb95524"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "948de7fb6c0bc465f5f0c78c34a7764b"
  },
  {
    "url": "categories/index.html",
    "revision": "4d1dd602aa3754ae7e1711b1623e84e0"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "d4aa82bbe0182f6507b78406c4c9a3f6"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "047c28913272c5fbf20349d37616a530"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "6725f3d3b3994fb52fad9780a7f377ca"
  },
  {
    "url": "categories/other/index.html",
    "revision": "1b3318e9eb0afb6dacedaf6fd8ce5240"
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
    "revision": "6d26d709132b3f25741cbf999fd6651e"
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
    "revision": "2682bf23baa6a83eb47aca941f742088"
  },
  {
    "url": "tag/array/index.html",
    "revision": "0fa422806e2e77a545b1bba4d629d208"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "d3406fa0679fa4e859373903f08f78fa"
  },
  {
    "url": "tag/css/index.html",
    "revision": "0bd9fd7877bffa807a53fe266d116602"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "8f3f077d557acb3b3e2315f22063548a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "0a112abbc6b20e03a2ac8147af97fa8c"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "7d92a03a05ef70bafa55938c618b5614"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2e8f2c95121d4bef219de2f19acd7594"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "36b2794dc420f34c2afb47c558604dac"
  },
  {
    "url": "tag/index.html",
    "revision": "c137f8c77ed53c8189f0c1f79265a1c6"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "bc49c963cd8ff2377d61b974fec4c3d8"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "5aa66bb184d706188471df471af2866c"
  },
  {
    "url": "tag/js/index.html",
    "revision": "480b8a19fef3d5c23fc650231a5038cd"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "44e14633253bd1a931c4b3fdd327a27d"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "2bc2338865e8e6b85b5bae84c6de0ebd"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "63d493b4b25e66b3df6b10bba16bec13"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "4b34f2a3000e2fd46cea2f5b9ef0651b"
  },
  {
    "url": "tag/project/index.html",
    "revision": "4fdc44c78b0a8cb1bc0d253298a6fa18"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "e1775365813273e37156c76caec4c330"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "2e95df7d5c7ad802f795633ee05ae755"
  },
  {
    "url": "tag/style/index.html",
    "revision": "dbf3b8ec3616f69b401505c856e3a539"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "ab65b7388bc7491940cd6ac1591d42ee"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "3cc9ff122353eaff9c136cd3091d241d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "555e44d071eb8a3f9174cff6cb422772"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "1a1821d372eb889ddf0227c2b5fffff3"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "9abcea40ca79df458f9055e3fb33f70a"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "acd7e5c8bc7177a2a04258d0683fe5ea"
  },
  {
    "url": "timeline/index.html",
    "revision": "af43aefd650cf83296162562468e7cb9"
  },
  {
    "url": "views/about/index.html",
    "revision": "3798591110283bd76196c0a6054d0892"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "95fae547da45dd81842d8c1fc8fac2e3"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "6fc8a4b9ce539ed97a689cbc42bc97c7"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "8093047a4d79548d914ee0f79b73c6d9"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "6416e49f81cb8c97dd8e7577271a4f52"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "21527da2bfbaf37aa1958eda2c43738f"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "2c91c6dbfc3eefba74a53a4dcba90065"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "50aaff3c6ceae6f0ee782d4f936ce73e"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "52e72d856460803e98b0aea172cdc408"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "1aa035eacc81e2887c7989a7fed57440"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "277715702712e0c64650fddc1c633101"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "7a9fbe7e9d59f5d9e4c986453866152b"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "2f014d50dd719a6b7eddd40140879a03"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "ae48b66879262bb2eca520b59cb17e55"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "aa2a8f454e3ef059f3bae08413581e31"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "8671b4998713f3c48dde03951cb1ea68"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "490ad655dd6574190e04761163eccae4"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "9b4717cdc386609c72aa0cc62e71041e"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "2bc2c37a66f482b790905964656a5d49"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "6eb4296c825370d65f6ec560d0f6bd2a"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "3535ab537efdc1565b9ff4a6e93a2002"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "6804bc71ef105bae7b58551acbe422dd"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "09889c888c0eb95fd6142e5acc4ecbec"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "09e497ad3c989c6b556c379a6d599281"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "ae4dc464d2df1ae754f5836820054ac9"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "d917f46b4f92f65b4ce5f4e6824cb02b"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "747f3235ca25b133c088e4331dae7ec2"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "33547c39e4809b5d61697d5dd4fa4ed1"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "0f0ba6d940a267b6f90a50323283fd1e"
  },
  {
    "url": "views/project/index.html",
    "revision": "93c78290411a51cd14721ea67de47734"
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
