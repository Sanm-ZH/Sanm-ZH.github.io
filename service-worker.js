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
    "revision": "983334c0baeee9643fa867cf65107866"
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
    "url": "assets/js/13.e80dfafe.js",
    "revision": "f13a8c3cb3cd619aa5ead7d9a93e8e0e"
  },
  {
    "url": "assets/js/14.7fd18bd4.js",
    "revision": "d83724000ed5c2e3d9fd73a60fa6f796"
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
    "url": "assets/js/18.9fec13fd.js",
    "revision": "28a82028e8b43ca7c50ea042cb48b02c"
  },
  {
    "url": "assets/js/19.43a9d9c6.js",
    "revision": "3c80b0e34eb6a3b40e8a62376ddbe3d6"
  },
  {
    "url": "assets/js/2.84eb2001.js",
    "revision": "2ccff0e034acc1480cb2f1350e6c5fec"
  },
  {
    "url": "assets/js/20.e13dd6f1.js",
    "revision": "82b4176f8052ceed0009c1589fcebcd4"
  },
  {
    "url": "assets/js/21.28d2daa2.js",
    "revision": "fcee4d436324a67aed333b3111ef4963"
  },
  {
    "url": "assets/js/22.8f18080e.js",
    "revision": "7a513a8db8de5394631877593ca1cfb4"
  },
  {
    "url": "assets/js/23.44c0ad51.js",
    "revision": "a5a5c644d52ac92e7a828be74abc46c2"
  },
  {
    "url": "assets/js/24.95410bc4.js",
    "revision": "24ae8d88c6c4b6a621a72c6d8250467d"
  },
  {
    "url": "assets/js/25.b9c7e299.js",
    "revision": "04032c28e5e6704824e69b52f00521bd"
  },
  {
    "url": "assets/js/26.189617be.js",
    "revision": "6d5dcb8ede51fcee5a0de9a2adf5b97c"
  },
  {
    "url": "assets/js/27.7adea1a6.js",
    "revision": "2191f85d24fba8d6679d46ee9e77ee42"
  },
  {
    "url": "assets/js/28.8b754253.js",
    "revision": "1fe18cbcc5ab110cffd4d95cf84e5f4d"
  },
  {
    "url": "assets/js/29.93562370.js",
    "revision": "b9746368487814e866ac9c88dc7e344d"
  },
  {
    "url": "assets/js/30.5a526dbe.js",
    "revision": "5b98a38b5a7c28451438d267bddf021a"
  },
  {
    "url": "assets/js/31.8827bd1e.js",
    "revision": "98fd7ea549083861815261fde71e7ed3"
  },
  {
    "url": "assets/js/32.b0fcb385.js",
    "revision": "5220b689974e9325555ee333c2d920e2"
  },
  {
    "url": "assets/js/33.41087d46.js",
    "revision": "2f9d75f3e9e31f8af1dece10ddc76aa7"
  },
  {
    "url": "assets/js/34.b729ee38.js",
    "revision": "a389db6023a70652d9ea18c85ecdfe3b"
  },
  {
    "url": "assets/js/35.26968cb1.js",
    "revision": "f4999307ebf6415f67ed894ebf433be9"
  },
  {
    "url": "assets/js/36.475c07c6.js",
    "revision": "d6d78f6eed4b308ddcd07086f985c278"
  },
  {
    "url": "assets/js/37.a9b0cebf.js",
    "revision": "71671b43014bc0eaefd85347783efde2"
  },
  {
    "url": "assets/js/38.60364090.js",
    "revision": "6d627bfc03cb4b17392b8f6a74118b4f"
  },
  {
    "url": "assets/js/39.06c46eb7.js",
    "revision": "9563206bf71abfdc1ce2dd8bec277b3d"
  },
  {
    "url": "assets/js/4.89244cac.js",
    "revision": "392b3b37f5ad45267c83349ce3c594a3"
  },
  {
    "url": "assets/js/40.92a9e91d.js",
    "revision": "1f6931373c2b5931dc9cdf9bca22818b"
  },
  {
    "url": "assets/js/41.cdeec977.js",
    "revision": "2d67d894f2466528bad91c1b3dd899c5"
  },
  {
    "url": "assets/js/42.3add7096.js",
    "revision": "8c15ce6c58322ef6d62180776e6c54f5"
  },
  {
    "url": "assets/js/43.f86fef92.js",
    "revision": "e7d71c0d705971aaf5ea65b790bd28ed"
  },
  {
    "url": "assets/js/44.8979bcf5.js",
    "revision": "6711ab9ca618ef6fb773d8612df99a32"
  },
  {
    "url": "assets/js/45.182b5790.js",
    "revision": "c8000b3fcaa16b022439eb6e1af4b902"
  },
  {
    "url": "assets/js/46.c993c01d.js",
    "revision": "97c573bfe5031dce95e3638b8eec40be"
  },
  {
    "url": "assets/js/47.14b0100c.js",
    "revision": "8a31cb6dfc913062adf04ae26536f8cd"
  },
  {
    "url": "assets/js/48.bd53863d.js",
    "revision": "8fbbe61f9efa874117271170dc4c6c64"
  },
  {
    "url": "assets/js/49.1e35b381.js",
    "revision": "134cb1a5d1e390871444bccd23148f35"
  },
  {
    "url": "assets/js/5.12dbfa45.js",
    "revision": "155722c896205ba3d5c5ac1e113fd56f"
  },
  {
    "url": "assets/js/50.e14e29ed.js",
    "revision": "421d907f082256f0e16f8b825828d5f4"
  },
  {
    "url": "assets/js/51.aeebeae6.js",
    "revision": "b8813c2c90672c8682d340f78ba45652"
  },
  {
    "url": "assets/js/52.882ab1de.js",
    "revision": "2fab3bfb11016a82b1212dbc3f85a4b8"
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
    "url": "assets/js/app.8c7f6a0f.js",
    "revision": "1a66bd7d8377429f5857d45502336fb1"
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
    "revision": "bbbca732867ae96b7e32f99c8dc0097f"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "ef7917c25e8f5801185166ed8a3952d6"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "b675a5b71f783f3b8a52ed3d7d3a80cb"
  },
  {
    "url": "categories/index.html",
    "revision": "3a904604f9c5981c7e00996d5bfae6b2"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "badd7c3ac6e1f6d4748069729e65f7c5"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "8cdfdc5b929ff94eefabfb4887147025"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "e30a70ddcacb3d807bd5333a73740170"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "90cdc0357f69eba62672cb3dd3eb515b"
  },
  {
    "url": "categories/other/index.html",
    "revision": "e31c100614c1fb1564c31120464bea63"
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
    "revision": "ef7f4dab66c7c0edd65a5cc2807b2ec0"
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
    "revision": "b7ec0245527f5f70391bc0d33a9eedfe"
  },
  {
    "url": "tag/array/index.html",
    "revision": "91a58d43b9f07c7857e6f8cb5f8d9a6c"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "fddb56d4f4d80a3722238cf13beed772"
  },
  {
    "url": "tag/css/index.html",
    "revision": "bf7f079413e0f73e102071787206720d"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "620b1f20a2f33693afe4cb9776b8f731"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e10f7b1ba2e18e20b001bf30712c7a0f"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "56a948ebc148b6a75bf2c369c667d32a"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c62439827ffebb2411e583195cec153e"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "cbbe2ac2be8d004716db17e776686964"
  },
  {
    "url": "tag/index.html",
    "revision": "51f2ca6da5fab050047fd793e39b0e1c"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "d4726e4a6d58b5c8541e24aeb6110dac"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "15babfdd9e574a35de949f5250335147"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "84852f3e69c2cb17ea233a307a82d9e8"
  },
  {
    "url": "tag/js/index.html",
    "revision": "987ac917127628e8d69c4a6e1ed72664"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "83037d6363a0cafe64de69857901f177"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "1b1791c9e03084ba67f1918a2d92f097"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "a7f8a0474c733ae963fdc2d95bbed9a5"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "6da43396bc2679431325a3d15a00f79e"
  },
  {
    "url": "tag/project/index.html",
    "revision": "1291ec07c0b650f6651ed6a96baa3297"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "937911c781d43c54cf279e116cf0ce61"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "1e0d6efd7f709c168e2446e1d2935bfc"
  },
  {
    "url": "tag/style/index.html",
    "revision": "ce5223c01f8c8ed0f36e5d6092d637e4"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "957f9880d4a03950567c492efacfe0d1"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "c34bbdd20785a97a75a8f190a9ff9bfb"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "457d79a2b89aee5505a7193b9d7dc979"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "888a7f9832fdfbebb69f2d08ee228936"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "95d9a5ebbdc0cd2daff0d5b97c490410"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "ff56f25448825fbcc761dd405bd441da"
  },
  {
    "url": "timeline/index.html",
    "revision": "6d03cf11ba3d1b6f3e0d2af93776f25c"
  },
  {
    "url": "views/about/index.html",
    "revision": "b3c4699321dd5cdbc17a99269da57e15"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "e2eb00080dbec5d8069679d3be5843ad"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "9b6ad578f9860374eaa011e6c8bed1e5"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "49fa5851ff038b96bbc3e801eaf70741"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "b43caa3d0102f3a3dfef9777de204174"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "fec05067af59203f3cb4f11e07d86f2a"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "c3cd2a4ada9ce2295140732c729ae57c"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "3e93d69e3a6fe6c48392f3c178c857b8"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "d1f799b0f175bce69ebcb49ecd4d0510"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "84c953d9bb6b78ee7bc753ae6713cad4"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "a65611b4a8876faa65132cf5f8af645c"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "ceb129f1d6c0c8ef4b3f958c6d4fd694"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "18fc66b0714c277f263f1040c8d8fa81"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "e264bede0c0764aa66a743693bc6047e"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "6a03cf075f17145a41e5721d04f5eed1"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "3f14f6133c13868fc4431fee51fb8b1b"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "e35188746c282de6881211b3bcfc08d4"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "0ca41b94f0548dfbe56559ad74d59940"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "6d024827d9d986341cb46f054109922a"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "58ce83891afdf9e23691032f61baf692"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "37e5ba7d6eff6ce2bc8cd0017326f9e1"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "8f1a63a03439836d12d2a459055d435b"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "5457ae92abbd6018a3467903eb5fc23a"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "fabb269d0cb3c41f61e86eb12b9ba729"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "31adce9bf480b28359d7318e5a9d8897"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "4608e03c4028aa4d4c67390ca88779ad"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "483ffac47b77ba16bf09bf60c7c6682f"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "cc65cd6284077f8c68ab026b9d0d7482"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "f41f2aa7d25dd42791b4d446f61440a3"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "677095cff443e2ca9a81f5d4de41e9e2"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "38e6cb20043d11fe862dc0586dcf4747"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "0f6cdbcac3b5fbb232d00e3d0d34f8d4"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "f024dd695aa9c5dcc5101b45380d5d6b"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "f93693f3df450d3255589d15b751ae5d"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "8b88ad8d54d7742bb249ae085644b31b"
  },
  {
    "url": "views/project/index.html",
    "revision": "31004d6c3cf97ae13403a2a9bf8d293a"
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
