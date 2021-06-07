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
    "revision": "cabb9ed6951bebf2605a5314e268fa53"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.6b13fb1c.css",
    "revision": "d5e2323fadc368807db4dc926ba72639"
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
    "url": "assets/js/11.f4fb01e5.js",
    "revision": "91fdb510ff5f260147c5b929a1a0f6e0"
  },
  {
    "url": "assets/js/12.1070ee49.js",
    "revision": "9df52343e1c19f56eb3bbcf2e13224fe"
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
    "url": "assets/js/15.ae021954.js",
    "revision": "002ca490abd6f0f144817f5d0b539352"
  },
  {
    "url": "assets/js/16.052b606b.js",
    "revision": "99a173b610d2f76f0c0528452a046a4f"
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
    "url": "assets/js/21.01d972d1.js",
    "revision": "c4a2d0ce085aa387aed474f963899839"
  },
  {
    "url": "assets/js/22.539b1f99.js",
    "revision": "8a8c4166db27ffe9a459d6797603543f"
  },
  {
    "url": "assets/js/23.8fbf2325.js",
    "revision": "6fc076f4bf084057466a850834a083f0"
  },
  {
    "url": "assets/js/24.b2d5b7ae.js",
    "revision": "ad69c0719839120e3138a285341dbbc5"
  },
  {
    "url": "assets/js/25.153e9169.js",
    "revision": "4d3a5455db5fe3de127dbbe6117701c7"
  },
  {
    "url": "assets/js/26.d2f6d627.js",
    "revision": "f0755ec846ec22a56dd1d17166c902a2"
  },
  {
    "url": "assets/js/27.6b915a4f.js",
    "revision": "ada236ca38b41793bb96426a4c94bfb6"
  },
  {
    "url": "assets/js/28.77d69b98.js",
    "revision": "f80705b63d2b475e677e42bcf6587152"
  },
  {
    "url": "assets/js/29.c4eda9b1.js",
    "revision": "4388b81d0cda28a18bc9ace1f010c015"
  },
  {
    "url": "assets/js/30.5e553f1c.js",
    "revision": "3a18b9565e0872f5b70a21d3a075d914"
  },
  {
    "url": "assets/js/31.aefa3625.js",
    "revision": "0c685edee2e9e6068279a2cf89a9bb5e"
  },
  {
    "url": "assets/js/32.990901c7.js",
    "revision": "73ee16f91ed3db9c96bb1fce4a87d886"
  },
  {
    "url": "assets/js/33.f6a8b061.js",
    "revision": "63664f969deb1309d2a33b35e83e51ad"
  },
  {
    "url": "assets/js/34.051843e9.js",
    "revision": "1aec3d0d0ad3c273781aa194f79ee6a8"
  },
  {
    "url": "assets/js/35.ca98eef9.js",
    "revision": "ed0011dc475eb53fab555deb13cee509"
  },
  {
    "url": "assets/js/36.5d810eea.js",
    "revision": "8d299cba295fe2fd241b07ebe4908d51"
  },
  {
    "url": "assets/js/37.19793fe4.js",
    "revision": "6b6628787646e94301aa37dbf1d99daa"
  },
  {
    "url": "assets/js/38.a19d9dbf.js",
    "revision": "7228044193fe32742a5a1d2268009aaf"
  },
  {
    "url": "assets/js/39.5485c832.js",
    "revision": "38edade8b842b7053615ef424e4a50d7"
  },
  {
    "url": "assets/js/4.0b5dcfe8.js",
    "revision": "5bb816872853e0319c7e856fa0584e8a"
  },
  {
    "url": "assets/js/40.69874f97.js",
    "revision": "05a2bfeceb2abf7192b400ab3cdd731f"
  },
  {
    "url": "assets/js/41.bd593eed.js",
    "revision": "8206226e1ca5a561916bafdfd380d948"
  },
  {
    "url": "assets/js/42.945ca886.js",
    "revision": "791dca56f4a399c81577e7cd926c0e62"
  },
  {
    "url": "assets/js/43.7b061dd1.js",
    "revision": "0f88b4dc212e4009cc776c3fba4c9aff"
  },
  {
    "url": "assets/js/44.98d4d7ea.js",
    "revision": "d0ec9b3f768c9007377e31906a6bab11"
  },
  {
    "url": "assets/js/45.0c2951c1.js",
    "revision": "2f1b386d703371e1328c8a6308695c1e"
  },
  {
    "url": "assets/js/46.2ba2999e.js",
    "revision": "7a78974f4540fc55f8175dfc29372228"
  },
  {
    "url": "assets/js/47.1014b57c.js",
    "revision": "7f6be501bf45f40e2a5136ec3fea4c3f"
  },
  {
    "url": "assets/js/48.63cac31d.js",
    "revision": "e0a083a80fbb8dcfd0cad79fd8dbb631"
  },
  {
    "url": "assets/js/49.ada69a55.js",
    "revision": "a50dd380c6c9f5bfc67296385b795c8b"
  },
  {
    "url": "assets/js/5.eef939d2.js",
    "revision": "bebf86a9ff48608f03df079be2f2e9ab"
  },
  {
    "url": "assets/js/50.0b2f5f10.js",
    "revision": "9f6ce6b7c1cd0bfdf90527458003c227"
  },
  {
    "url": "assets/js/51.821a53dc.js",
    "revision": "7085e6d68ab0de2b4a734d834d03038a"
  },
  {
    "url": "assets/js/52.ae747020.js",
    "revision": "d514ecd3a330c7704d7710e834c00542"
  },
  {
    "url": "assets/js/53.26fa83fc.js",
    "revision": "ccd02111a85934c824f292ee5cb4b9e1"
  },
  {
    "url": "assets/js/54.0334dbe3.js",
    "revision": "56388c31543cd0f22cd019d09bf815b3"
  },
  {
    "url": "assets/js/55.30bfc8d2.js",
    "revision": "97ab7511172784d8c455c36fd9416b30"
  },
  {
    "url": "assets/js/56.a6b234d9.js",
    "revision": "e051cc3f8f47c422c99a26ff29c416ac"
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
    "url": "assets/js/app.f5d0cf01.js",
    "revision": "5c27b1942e9a38f32ba27042381932fd"
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
    "revision": "dd40d96ae82c4bbe0875ddd8f3002fc8"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "98fa44ea8edc118ab9c0fd27f21954ed"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "649c7372df3be3dc14dd13841a52cc31"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "5199f7bddb341005b2556b4229cf857c"
  },
  {
    "url": "categories/index.html",
    "revision": "ee555628563a61802af21ec0c0b21018"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "7c2f25ee1e698d30b6b1f85dde17c6cf"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "007f16b4ce38a16ca7c06a1f3aed8117"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "41cbf352d27d1f5dc1837e26000925ec"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "f6353f5bfc40721d9beb6d2536feecfa"
  },
  {
    "url": "categories/other/index.html",
    "revision": "f3dbf7926fa705932e65f2ace34f4f32"
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
    "revision": "93f01672bf063d71c6d65854aa401ad9"
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
    "revision": "9d8e89eb83b38b97c826486f0123c442"
  },
  {
    "url": "tag/array/index.html",
    "revision": "e2f53dabf2d61b0be0014c231b499d5d"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "62206d15d871d4e626434bfdb2626e27"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "6dbf2cd7793e3b10da25b05598bc1e34"
  },
  {
    "url": "tag/css/index.html",
    "revision": "01dae1bc22cd42da4c72d141d201623c"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "8309bbe2c409beec15eb7c9b243dc83c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "fcb7e668853bf56d4902691fb6c5da6f"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "56e840b1778b606b062600b7516eac26"
  },
  {
    "url": "tag/html/index.html",
    "revision": "65c01083de8199c2ce5f627c073924c3"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "3c83c22ffd04a4bbdbaf901aa4f46f56"
  },
  {
    "url": "tag/index.html",
    "revision": "9bed777247fa7a57b6908f0c19e717ae"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "a5a9e39c3b0f1eefaa102e3167d25f47"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "05ecc5aa3dcb36e5cee66c1b52b65901"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "1e112eae91df3021d2d1c26132c8aeab"
  },
  {
    "url": "tag/js/index.html",
    "revision": "afab74ec567e8728876c2afd17f95740"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "ec33cbb8be2433d0e31ab885f4c04c43"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "0e658d7a2f1289ecd343187303194588"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "ad708132157c6d55539367b2ab5284b4"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "f2bf4bfa59286dafddde1d16057c5363"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "e772b0260f3342938def58073a053e20"
  },
  {
    "url": "tag/project/index.html",
    "revision": "df45e2d9aec4168f1c5967a4a9def59f"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "7d0c73e0701c342fa61f6d2342fd3021"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "893a4bf47590fd76d3c8b06ee2b0d1fb"
  },
  {
    "url": "tag/style/index.html",
    "revision": "25f0c88435efe7c17bd0edf912207fdd"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "0e2caa02045da3a858d5377aaeeac249"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "bad54edfed06fba0379ffd85bb6122a1"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3f92d93a1a10cae41b25b7fd7c3eb767"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "ebfb0e23a586ed6e2bd979ad0b139b62"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "dd30721b04ccac1167472edfab82ea6a"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "3eb0188679548bb15a2862203d177a50"
  },
  {
    "url": "timeline/index.html",
    "revision": "051183f4141ce64bb47e63059cf5128a"
  },
  {
    "url": "views/about/index.html",
    "revision": "4af371cae3c6ef894c02ee66f3d04283"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "96fcc591c41392269c80343953ce2754"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "90e6c2dea6dceb7d080f8dae8d507212"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "3e36d4f0cdcb06ee5187fa516af202ad"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "cb66027d8675013b9b3c8e21f7287bc1"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "045f4a443cdd2f2e1efb06cd1607141a"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "3571407e284385276b6786b3014804ea"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "d5ad8f9ee2bff1c0127dcdebe916ea0b"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "afaa4e58c81a29834eb4a7e0c071d59e"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "15dbd559f5a2cc6bc32dc030e295c4ab"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "690e7916814552f975c5538befd61bf8"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "9fb9214fd55e25fd320926bb11d09e5e"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "bc050d95d667331f8fb75de4e5e3e270"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "06c13889907926e0166c28dc288ff5d4"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "45a23fd18a6f918f930a33e1eeedcc24"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "ad824cc13200a6a70f438e2379069ae7"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "0e3af67b130941507a1ed2aee71667a5"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "2406595511bc3f5c3b4a546646bf43bf"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "e4c51622941ccc70ceb48883c8865355"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "795edf1ed4b0c790137fb73959268630"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "f1fe071ed9f0d9372efb7e38f3c094bf"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "412d1694e7a675881be2729ba475eee9"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "dd5c2bf65acc911a5eddc51d90a13b73"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "224b6f97f7a7fb4d2421c451060887b0"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "3c2875a48eed56fcfb2fc04a7cd91ab1"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "4ff456e40d5df02b88ade354898914ad"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "f31326fc56465167dfcece1eebb1f97f"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "dcbaccdc3702528a829673ef4210d5a7"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "6338ed583352cb3a8527c8ddfdb0d1d7"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "309cf5711567a8c97a2c53e39dcea936"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "5d9f9f37dd6a73865a3481769d79248e"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "f39d4e8a9d6bbf7f0ba0c5071f5a149b"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "b0890f2382348d90642d5ec2660d6cc9"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "b8a77c921c7b2a8564a0dbd1bd5eb658"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "0097367135d3247e505955d772c71aee"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "10d26fc2238368215fdcef1fa8a5bf0d"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "0fc4ab4f42cbfc2b1a214a7be66f24d1"
  },
  {
    "url": "views/project/index.html",
    "revision": "dd2984d216491b1051af0cf2e402dfec"
  },
  {
    "url": "vue3-doc.jpg",
    "revision": "21dae5052b51835978e456e993450f4b"
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
