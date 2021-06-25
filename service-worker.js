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
    "revision": "4f0057eb02b1bc8fbff702407737a5c4"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.112ab001.css",
    "revision": "3245ee944a947158ada9be71fbf6dfd8"
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
    "url": "assets/js/11.5a84d28f.js",
    "revision": "f9d7950ce242d78c9aef4ec03465129e"
  },
  {
    "url": "assets/js/12.197c922f.js",
    "revision": "2715f3d992c129d68c2ac39c4f773de3"
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
    "url": "assets/js/15.cdc79412.js",
    "revision": "50fd7c34b747c8f19dc460ba8cc5d827"
  },
  {
    "url": "assets/js/16.1990ec13.js",
    "revision": "53e49ebc8839f689207832a96b373418"
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
    "url": "assets/js/19.e1e39252.js",
    "revision": "5153640166d283e686682e57f0b1bcf4"
  },
  {
    "url": "assets/js/2.9adac331.js",
    "revision": "cab4cc227c378410a0b07075c0979a27"
  },
  {
    "url": "assets/js/20.acafdc59.js",
    "revision": "e4dfd314caa4268d7931e6bb3914a41f"
  },
  {
    "url": "assets/js/21.f2a3e9a7.js",
    "revision": "198e4553fd721ccdac1a74a9bc634222"
  },
  {
    "url": "assets/js/22.539b1f99.js",
    "revision": "8a8c4166db27ffe9a459d6797603543f"
  },
  {
    "url": "assets/js/23.65b23cff.js",
    "revision": "e440f29ac9a7caf684af53b6cdbe342e"
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
    "url": "assets/js/26.9f7add02.js",
    "revision": "3d686a9adb78986c1b2171be2d1be03b"
  },
  {
    "url": "assets/js/27.6b915a4f.js",
    "revision": "ada236ca38b41793bb96426a4c94bfb6"
  },
  {
    "url": "assets/js/28.13f12b09.js",
    "revision": "0ae7fd7b30c41a12c5dfb44a709f548c"
  },
  {
    "url": "assets/js/29.213b1e1c.js",
    "revision": "c2262f6bdcb873c51fb4e1b4fc6630d3"
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
    "url": "assets/js/32.e55b3a7b.js",
    "revision": "42ae5891ee703958f4cdaacb44842a43"
  },
  {
    "url": "assets/js/33.59ed93f2.js",
    "revision": "8e90130dff7602f82b93d94a149b7104"
  },
  {
    "url": "assets/js/34.3ba627f1.js",
    "revision": "115794a90122832081d5f965911a714f"
  },
  {
    "url": "assets/js/35.93524e5e.js",
    "revision": "fa773fce15c71aa334fea54d192e3bdb"
  },
  {
    "url": "assets/js/36.30952302.js",
    "revision": "d9e641bdfdbb52c84d04408955ee96d1"
  },
  {
    "url": "assets/js/37.ef7d21e4.js",
    "revision": "e06d3b14258d3124d5494163b7e12fc4"
  },
  {
    "url": "assets/js/38.549a1959.js",
    "revision": "50d45c94aa92b082c4069de627aa6755"
  },
  {
    "url": "assets/js/39.7a5fdf4e.js",
    "revision": "7261c8f4d53f05d44adfdf1d2758244c"
  },
  {
    "url": "assets/js/4.0b5dcfe8.js",
    "revision": "5bb816872853e0319c7e856fa0584e8a"
  },
  {
    "url": "assets/js/40.bf4d6fa9.js",
    "revision": "7a78bb57ce2bac689fa6531370626d03"
  },
  {
    "url": "assets/js/41.56fbb304.js",
    "revision": "49a26be9994fc0e617975627e28c1e97"
  },
  {
    "url": "assets/js/42.c03a0316.js",
    "revision": "db71515738655633c5888857c7692c1c"
  },
  {
    "url": "assets/js/43.a8093356.js",
    "revision": "8cff90c25454d604dee3b740eb405270"
  },
  {
    "url": "assets/js/44.9b32d77f.js",
    "revision": "0862915448ad29071f25c88e3c251b21"
  },
  {
    "url": "assets/js/45.7d39a64c.js",
    "revision": "9b96634f8b41bc1845a5c5d0d284e9bb"
  },
  {
    "url": "assets/js/46.c6726ff6.js",
    "revision": "0bc233c10d8eead9fea4bc00003e4981"
  },
  {
    "url": "assets/js/47.1f6ee8e9.js",
    "revision": "51ffea0ab380eb5028b29e5a86116ce4"
  },
  {
    "url": "assets/js/48.f40f8a5b.js",
    "revision": "297e01c74f6ea9897df2a13e2f037cc4"
  },
  {
    "url": "assets/js/49.a3993ab6.js",
    "revision": "fcc0a57c308c62c02b5c0de7c4e12017"
  },
  {
    "url": "assets/js/5.eef939d2.js",
    "revision": "bebf86a9ff48608f03df079be2f2e9ab"
  },
  {
    "url": "assets/js/50.7935e579.js",
    "revision": "c44c37e5f057e8053fe32cd1f0e0781c"
  },
  {
    "url": "assets/js/51.635d1195.js",
    "revision": "84000a891269e0b95010ec233c03161c"
  },
  {
    "url": "assets/js/52.768bedfb.js",
    "revision": "742dfe634051342b1a4ac57a1c683532"
  },
  {
    "url": "assets/js/53.45859232.js",
    "revision": "35860402bd43aae516d6c80393a40876"
  },
  {
    "url": "assets/js/54.7a32d4eb.js",
    "revision": "c65a2f7b4d3070edc5dd3694267d0f1b"
  },
  {
    "url": "assets/js/55.8df06be9.js",
    "revision": "17112f5a1a6e5770bfc0dd3cc65569dd"
  },
  {
    "url": "assets/js/56.18fd2eef.js",
    "revision": "b78c00daa6c788aff4ca0358dd2ba176"
  },
  {
    "url": "assets/js/57.b0583670.js",
    "revision": "e2cb11c1955afc1b700373aec7158667"
  },
  {
    "url": "assets/js/58.68fd4304.js",
    "revision": "47d11fbb99586ce6a454494825efaa31"
  },
  {
    "url": "assets/js/59.8d60b978.js",
    "revision": "4e6e51211a8aa4ae82076d7392fdd006"
  },
  {
    "url": "assets/js/6.3bd14d99.js",
    "revision": "9045e0447eb6e0cc6f2a1c7234a69692"
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
    "url": "assets/js/app.453d1b95.js",
    "revision": "8d2206e5aa174ad8b34ea395aaa4e6a2"
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
    "revision": "1609afe8cd038b3ea46a13664ef0b936"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "aa703bceca262d00e3ad1076775ba797"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "9ebaf022f3f24a4d26b43c5f384d7367"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "b1e6e549f8345bec138c851cd43ab85a"
  },
  {
    "url": "categories/index.html",
    "revision": "426d104f602c1a9a598cc6ce462617b9"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "e695a6968629ed7ec92ad6b1c7b64adc"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "3bea99d19bcba136a01c84020cc53771"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "563b062f13e984b8afd658f322790037"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "8c41180449386a26f97059c55e51ebaa"
  },
  {
    "url": "categories/other/index.html",
    "revision": "295ce6b8565c54a676ad2a2e7a077a00"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "87fbdd1e17b628c318e8a0e6df852fae"
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
    "revision": "ff0becd6d074369c0cea2c03e1078036"
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
    "revision": "3488f240f559bc5f44ca12478eab2318"
  },
  {
    "url": "tag/array/index.html",
    "revision": "a30657b985b193ccd5e23ff5ce8540e3"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "2306e55ecaac5917c8542dd76b8d5fa6"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "47d9167c83bf6f23e927f899f3926fb2"
  },
  {
    "url": "tag/css/index.html",
    "revision": "717377fe2083eb6af08aa2c987b781f8"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "26348d10bb985a43d3c5ddf5f4edb2e5"
  },
  {
    "url": "tag/git/index.html",
    "revision": "28f1f8c3ef346610e79bf50171736fce"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "6026b49dc03c8bf2122753c8df37b1f8"
  },
  {
    "url": "tag/html/index.html",
    "revision": "79a60c4eb696924f73b35777052aca2b"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "2a2ec09115cd8f401233cbaa06e32fc9"
  },
  {
    "url": "tag/index.html",
    "revision": "b352899021b05aa4729c4daee8f408a9"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "2a2d443939a0ff5640a4c9221f33ca18"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "f0c0e29600dcfbc0028e2456001b2f77"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "a0f7743b40b9218d7346569510b5e702"
  },
  {
    "url": "tag/js/index.html",
    "revision": "9939f429ef9f7ac69d86a5e8cf9ed4ac"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "433c48e1267b585a6d87f0d3deda722f"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "ede43a8e2821187cd4f13935c5fd622b"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "6047f44cab8ca058166da079238a1f96"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "3bae8e3e9e8ce9f47bbde9ebdf0050f9"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "a5bad45748d71eb1e847cbb6485d7509"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "51461cf98261e38dae741996965b0bab"
  },
  {
    "url": "tag/project/index.html",
    "revision": "317da57255036fc180bc4e8cb0802356"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "2e54310323617c25812da77cb2aca37b"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "7db7d1ecc1f018bd27a259112260df6e"
  },
  {
    "url": "tag/style/index.html",
    "revision": "71548021386e9d5ae0644b149e9e9817"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "87c80f5011fa06707355b8560638d37b"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "63fc20b92a56cc778b6f20b8d656504f"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "6f80f4c18feffbbf4eb87eb1ab3bd0d6"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "b4890693c14ed1880fec9c7c8285d3b7"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "63cd25015fa7f3260d46da7e492a5f15"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "cee0017eb78e613ad2869d07842c77e2"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "607268cb5c1b4397ce0cf6dabea6d85a"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "c167c7d8b1444900bd730cc0efac8c31"
  },
  {
    "url": "timeline/index.html",
    "revision": "5b143ce39361d1ca3fb437033bdb453c"
  },
  {
    "url": "views/about/index.html",
    "revision": "007907661a45003bad4d19629eadc431"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "febe62370d53112972f9d45897f8e792"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "f9f33939c32aa6d23eadac4b19db06ea"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "881da0a0c200a8549c8db27e03d8befd"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "5aa6d7951b4ca9d53f2e5a673ac46202"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "1af97ea111b14a32edf6b6aabc5782c1"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "31e25768e0bc5d689102ef88355fdba9"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "fec5060f6918a73206f1afb59f755a12"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "7da809e3dd0eb8ebf7ea6c5026857a38"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "0ea6b69ae2dd9cb943cae703c853e7c5"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "86c78fc881d5d82582e9a9aaa6d9c357"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "bec0501d7865ab0029bfc02821c6dc63"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "fa2fc0faa4accc0e209c3dec4fb3b21c"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "4c318b4e8a28c5850d3edf11d1cd680b"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "784a3420239f9aa8fb6e19ae8e33c13e"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "efb9e3cab130765b80710cadd8ae3736"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "1ac422d4ae7dd80fa41ea9e45d382884"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "f08ae81f3f607c3697786aaa764bfb0b"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "2504e5b2f915f1f2aa6103687af10153"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "56211d8db403485db0d9f6c9598bdbaa"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "0f565132b2a1f4fc5e3751bf76fad735"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "7ebd7ae7b84c8a79d04f5560a3c184e3"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "caacbd6049d7b515f62f84af35fa0c2b"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "445ccd39ddc3bef9e2fe72deb66c76c3"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "b9e4454ccf663e94ec5ff367b41d9b09"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "ca5dcb5132353b12093bf75dacf22393"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "edecdc805eea1f3dc67627805c4d2e56"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "fedf86f6f8b005295fe83f5279ebb304"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "a53a1b4d65395fc1a7264d5ca1768bfc"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "0ff9f6e932b7f1f21a21916b7ecacc7a"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "0bda1b7fbc19e0750359ff981ad3a34f"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "e2d8689f97ebf08bbd8d618ee56fd505"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "452b4b6a7a39bebc4595caffcb24bc3c"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "271bcd86f9e2cc9ba03f2ce91a6dbdca"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "e521775bb1969fd6670fb0f0944b2a81"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "4dd31aaed0e4da05bd1974c047d8422e"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "29714f416dfafb739cd29e8cbf33516e"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "802cf9289a0641bb480d746bc9313018"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "76fec30309b8bd5ebaec2f80c2b5d02c"
  },
  {
    "url": "views/project/index.html",
    "revision": "13b49bf1f52d20797db535dc6662c761"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "ef0e16940f1bfe0efd88d51dd6f731a6"
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
