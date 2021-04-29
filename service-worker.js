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
    "revision": "ae507d4df60777c11c1b947e7ad3132e"
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
    "url": "assets/js/13.4a8b48d9.js",
    "revision": "20591969889923a29d7bdb0db4680dcc"
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
    "url": "assets/js/25.db1ec16e.js",
    "revision": "7d16fb3bf07a13608dd21abcadd8cfe2"
  },
  {
    "url": "assets/js/26.3d702bd3.js",
    "revision": "9f66b1f47592fdb14596734b95c02636"
  },
  {
    "url": "assets/js/27.5652d091.js",
    "revision": "6a8335cec4f110528819ca87a9afb3c4"
  },
  {
    "url": "assets/js/28.a4087c6f.js",
    "revision": "982288f3d7db6ae4e03e918aa53f4b81"
  },
  {
    "url": "assets/js/29.eca55942.js",
    "revision": "40528b5edf2eebf570498f4d9b22e00b"
  },
  {
    "url": "assets/js/30.da3bdc6f.js",
    "revision": "7885ba2e264c32328dc249eb043acedb"
  },
  {
    "url": "assets/js/31.66b07262.js",
    "revision": "71fa0686cbdd358d9dc4cf1ac1f2ab10"
  },
  {
    "url": "assets/js/32.a36af823.js",
    "revision": "2ff0a9c7dc8c40483210d88516ce1ea8"
  },
  {
    "url": "assets/js/33.944e5861.js",
    "revision": "8583154cdbd45d80b5a6ab3e974eda72"
  },
  {
    "url": "assets/js/34.4aa8e7d5.js",
    "revision": "f20483b1b13e5d734c972b7c64e665b6"
  },
  {
    "url": "assets/js/35.97c91fd7.js",
    "revision": "ad4bade17861f71cd3e36bcc9e646905"
  },
  {
    "url": "assets/js/36.36e224b0.js",
    "revision": "a01b077d00d6f12ed06580f725d639bc"
  },
  {
    "url": "assets/js/37.3a70b8a2.js",
    "revision": "56cd88275a66dacc3f45a93cbae288c3"
  },
  {
    "url": "assets/js/38.c88c1f50.js",
    "revision": "64a4554e8d4f49c624cee4a885c15652"
  },
  {
    "url": "assets/js/39.05b7e1a2.js",
    "revision": "67458e566e2143b2f9a8bc1c6a163884"
  },
  {
    "url": "assets/js/4.89244cac.js",
    "revision": "392b3b37f5ad45267c83349ce3c594a3"
  },
  {
    "url": "assets/js/40.37b84b15.js",
    "revision": "2b5777c2105d1040325df0c1237f71a3"
  },
  {
    "url": "assets/js/41.7ffaa25e.js",
    "revision": "17f50d8fcb2ab40c36f44c9130a76506"
  },
  {
    "url": "assets/js/42.9a74777b.js",
    "revision": "ce342f3fa519c15ea321427aa65b3cbe"
  },
  {
    "url": "assets/js/43.42b286e2.js",
    "revision": "c5c402e79313ad65a179fae380551304"
  },
  {
    "url": "assets/js/44.8f90e164.js",
    "revision": "1941c5d485edf9c5e83501cbc8d481de"
  },
  {
    "url": "assets/js/45.e8241f8f.js",
    "revision": "79efa1f9a2c792768b85066e7e757cb8"
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
    "url": "assets/js/app.7a2dde8f.js",
    "revision": "c169f1c276a3259fa329009c10278502"
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
    "revision": "ab98c2e0c76937a0e30705ffc0f66438"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "6597251381be097f8c7cda05f3178f2b"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "f4f5d62c5551de40af5160661cc33ea1"
  },
  {
    "url": "categories/index.html",
    "revision": "708717808ad7ae62b313dc04a0a6584d"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "12b982a41b7b7d7e4f0c36504bace1b1"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "420c44871d54e4d4b295d7f8c19cbdd4"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "a50464ddaf3aa23bbae4428db5f3e580"
  },
  {
    "url": "categories/other/index.html",
    "revision": "1e7b88ad36e4afa8fe5426e8902030d3"
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
    "revision": "7846209a68976ce2aead70d8e2d81bc3"
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
    "revision": "22f0d64160ab4fa0bbfbfb7e386ca0ed"
  },
  {
    "url": "tag/array/index.html",
    "revision": "6644273b8215d14990436fa1be5ba196"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "447ea83de326f09550d0df852e3935f1"
  },
  {
    "url": "tag/css/index.html",
    "revision": "18a27500f227737265dd6820533102db"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "ba2fc3ea0ae8775e5740a0ca5b04742a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1fa713ed017eea7d5031ee234893dd75"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "8a3d4701f62341fd29b3876116ffd7ff"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c48e31fd8b8b913a0b704197893413ed"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "459669d3a89007408c045c8f24e0498a"
  },
  {
    "url": "tag/index.html",
    "revision": "6e71be7f35f956194539d2dcfd8f0b23"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "fc56ee3d71b0e46a808cd5b50ad49981"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "a3372e10eee34c551057acade2f255fb"
  },
  {
    "url": "tag/js/index.html",
    "revision": "3b79a9715c99f4d669debf000aedab51"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "997e8968ad504966578cc5b319d71be0"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "0bafae3ae13fdb3a72f31f837406d3b4"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "aea679a7f637eda244f310086d13e7e4"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "b93533f5bdbd5221bbe3498e67db9d9c"
  },
  {
    "url": "tag/project/index.html",
    "revision": "f60b658fdc6d1629928c27eb38abac57"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "4047499e1852bed97011f9518f734df6"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "455e32b20ca3871b7fd99736b95848bb"
  },
  {
    "url": "tag/style/index.html",
    "revision": "69b623185145457822ea19346cb15dfa"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "778494acf3e700dec46df6721c0834c4"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "36ed2529f857f61ebfadae64b77abe96"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "6798100e851c4b12146c873cc639c8d9"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "40ae7b59e413ea9b93549e398d95e274"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "abfe6a044305e9d47568ba9ae7269c60"
  },
  {
    "url": "timeline/index.html",
    "revision": "7eb7142e537dccaed1538058e62605cc"
  },
  {
    "url": "views/about/index.html",
    "revision": "7fc694bcaa5a90d3de74c4a256a007ba"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "5aa8e81c3a6ca03799781866f6297fee"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "f6b9fc910a179f5c277eecc287cfbfa3"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "e2df3bbc03b3b7bfbd48952913cc832d"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "67fdad8a0ff83c6841c7e333bc5dfa63"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "8523a8910e5ac38dcc39ef7350aacdf2"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "ddcf9eb178522d19ca3fedd701a5b068"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "8886d2c028d1c86c0dc836b37a2c7502"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "800dffbb92096d2bd62b5dae8eba3778"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "5b66ec99a981d3e1584ac0edadf402d8"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "28104257e55880d804777f76102abd43"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "11de637795a3abe8ed6320e550abeb79"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "e4615593e0f9cd13bef1b719dd8c8dd6"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "0b26d028b285d8b7825a92c5f18f90f9"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "38206848a86bd89f72feec6862e850e7"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "d08cb16fe98f118208fbf1bc33d1c716"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "de3af0e9ae068fb8d6442b72689eeb6d"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "73d64506e45a66438eedf19e6f07a1bb"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "814dc64922739a95e2f4dc84a5a6d397"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "71def73be920ec4fbf20b34265c76101"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "03c1c9f65e7f80a19754bc20f65e06db"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "64c9eb0891866bf80a8a0b947c8c905d"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "127bb0be0e56bd65695829899120df7e"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "44df85b753174d362f1116b56c2b7f74"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "a70a3a5df226973b8436401513e5e5f7"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "b8fa99035aadd92832a17e3d39824544"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "8bbee3a3a5a99cf25f27265fcf8d2f06"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "776c18dd74cf5d3167393696c8466506"
  },
  {
    "url": "views/project/index.html",
    "revision": "f24839bd832b964cb977a247549d9c24"
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
