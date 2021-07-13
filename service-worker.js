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
    "revision": "e8a08433ea472dd6a2d2ba875168f788"
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
    "url": "assets/js/11.881904ba.js",
    "revision": "a4e357f213ab8d6f675543fb3ef23bc3"
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
    "url": "assets/js/15.5c2ade55.js",
    "revision": "7f1dc278a05674baa0db19b0921a4d6a"
  },
  {
    "url": "assets/js/16.15f6b3f8.js",
    "revision": "a201bd54e24a00f585286fe5d5f9a8bb"
  },
  {
    "url": "assets/js/17.aa0e0e4c.js",
    "revision": "b1a255ceda6be5ae41b12a3454f5c4d8"
  },
  {
    "url": "assets/js/18.bbc82f7e.js",
    "revision": "c984211c7a59d2c17043ebe2b9e249c1"
  },
  {
    "url": "assets/js/19.a488c086.js",
    "revision": "54f969a832619546867dd75a3683dc9c"
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
    "url": "assets/js/22.f344a4db.js",
    "revision": "4ae879fd376a92077b99468516d1ed9f"
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
    "url": "assets/js/26.b0268967.js",
    "revision": "239dda357ca8dad0249752c347a13ea7"
  },
  {
    "url": "assets/js/27.07db2fbf.js",
    "revision": "80bec0d7e47b628bb37d878c2b8318b7"
  },
  {
    "url": "assets/js/28.5240d613.js",
    "revision": "0c940ae882388b2c009e475ca5df4fcf"
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
    "url": "assets/js/31.88b563eb.js",
    "revision": "ec2a47b15cf0de88fab0ed99bf514c73"
  },
  {
    "url": "assets/js/32.c31d6e5d.js",
    "revision": "9ec7d220eada4300654b5cd19114b4a9"
  },
  {
    "url": "assets/js/33.edc30b80.js",
    "revision": "bed800d52b6541948c11c3fbacac5810"
  },
  {
    "url": "assets/js/34.3ba627f1.js",
    "revision": "115794a90122832081d5f965911a714f"
  },
  {
    "url": "assets/js/35.d17f0a66.js",
    "revision": "af5dbf1e65b26526ae1ba12e9b601b2e"
  },
  {
    "url": "assets/js/36.f6eddc59.js",
    "revision": "4bff673c8076840c62da6f502f8a6c56"
  },
  {
    "url": "assets/js/37.77832327.js",
    "revision": "bcf7e0ef79fe993044d957a0e8b0ed55"
  },
  {
    "url": "assets/js/38.331eeb20.js",
    "revision": "052fd26d1e227d98b0967f4918b10e04"
  },
  {
    "url": "assets/js/39.1ab0772b.js",
    "revision": "a84e68cab9aa2fd7644c6e3f3a7b419d"
  },
  {
    "url": "assets/js/4.0b5dcfe8.js",
    "revision": "5bb816872853e0319c7e856fa0584e8a"
  },
  {
    "url": "assets/js/40.c17e6b29.js",
    "revision": "35b0007e3d40f3177324020ad7b6ada5"
  },
  {
    "url": "assets/js/41.e4be2ec2.js",
    "revision": "822a3295b001ebcc01da73feab69ec75"
  },
  {
    "url": "assets/js/42.aaadcd8a.js",
    "revision": "9b3d440bb2a52d877d3179d99ebb84ac"
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
    "url": "assets/js/45.ba909b44.js",
    "revision": "afd250f1d88299becfc899e481c6591b"
  },
  {
    "url": "assets/js/46.92695d97.js",
    "revision": "c7627634d957c2d0ff24033a9d1e9abc"
  },
  {
    "url": "assets/js/47.6b7cd097.js",
    "revision": "1e6102e66b0863cd11ac6b43f048d107"
  },
  {
    "url": "assets/js/48.a6d8b606.js",
    "revision": "f190e5d1c9ebedb84354ed499691b0fd"
  },
  {
    "url": "assets/js/49.fc715418.js",
    "revision": "4453eac5e8562f180b64e69dd3c10ac1"
  },
  {
    "url": "assets/js/5.eef939d2.js",
    "revision": "bebf86a9ff48608f03df079be2f2e9ab"
  },
  {
    "url": "assets/js/50.b331b22b.js",
    "revision": "2f292365e7906277b950e296e9437a4c"
  },
  {
    "url": "assets/js/51.9d151000.js",
    "revision": "73cbc586f82b7ce31f5f8d7485496439"
  },
  {
    "url": "assets/js/52.7f8c15f7.js",
    "revision": "cee162462ed31d00eae3dcfff74d508f"
  },
  {
    "url": "assets/js/53.1b2eab13.js",
    "revision": "5d7cb18b709036a1697d96256b2116cd"
  },
  {
    "url": "assets/js/54.934f9a5e.js",
    "revision": "6dea1b236bce05374281a34f5422a469"
  },
  {
    "url": "assets/js/55.81b8c3d9.js",
    "revision": "56a9e30140f7bd9280b150dfda139205"
  },
  {
    "url": "assets/js/56.006f8975.js",
    "revision": "333f506ead163eb801476068be8784bd"
  },
  {
    "url": "assets/js/57.e1c493e9.js",
    "revision": "a688c58f91ef4d0b039b9a5f5843d22e"
  },
  {
    "url": "assets/js/58.5a39bc6b.js",
    "revision": "444fced921aab7ade701eb10fe157a5a"
  },
  {
    "url": "assets/js/59.e10d996b.js",
    "revision": "4efa0374c3453c09be50728183cb8f34"
  },
  {
    "url": "assets/js/6.3bd14d99.js",
    "revision": "9045e0447eb6e0cc6f2a1c7234a69692"
  },
  {
    "url": "assets/js/60.df424ecb.js",
    "revision": "2ce2625f831bfdde3a66af5f5308eaf9"
  },
  {
    "url": "assets/js/61.a865af36.js",
    "revision": "838aa6284c0d7df163bcf2f705114eae"
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
    "url": "assets/js/app.26207336.js",
    "revision": "100c1c9f440a0e63c94cedd220f3dd88"
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
    "revision": "e30a0c8987500d171ec2c78e5c469e99"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "f5f2d69b2817c2a3a8f185fd89033c1a"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "957790e68e31e3bdcc3d70677b56e41e"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "23ea33ec08c38c88f090a4e43c5f7419"
  },
  {
    "url": "categories/index.html",
    "revision": "f1aa37a8310f4f88d9a468215698bdcc"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "3e17ab13fe5be7bea1944a5a7413f25b"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "468d79aa83d761ca5f4278052359d047"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "61026a125dbbee0cb5bb6dd2cc5cf6ed"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "c594c015f8e23df10fcc7bf365fd0763"
  },
  {
    "url": "categories/other/index.html",
    "revision": "96f74327700798a3bf7d368f515e46b7"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "2218d217dc15a5e77c488f3222a6f1b1"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "82cef37eb9eadc3d7785599eea136a76"
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
    "revision": "3dacf46b03f6769ae359faebc0921e7d"
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
    "revision": "ca23b4671ea3f588069a4eea73670f63"
  },
  {
    "url": "tag/array/index.html",
    "revision": "de8cd73a97bc7a1f6064bae6ac373b08"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "be9240075ce69b9c407d9af9920f3899"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "c286315d29533142abe8087bea21bc32"
  },
  {
    "url": "tag/css/index.html",
    "revision": "d453addb152eadbe94878d24613aac08"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "752ec5399c36a9e7e0c3800dd37622e3"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7ac19dc45bb16e8b9c4b594305cfac57"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "c82e3ea122319e57bd6fde158b1e7c42"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "1392d0c12e49502340792dd50e0b1a9c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "3afa43b385438ab2804c78b7de63313e"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "bd0f05b50b0d25bb9398916cdd692514"
  },
  {
    "url": "tag/index.html",
    "revision": "e3d9e12e750cfa615ec74d93de4781f4"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "f8964c01c246cd0127b03c9a3f216880"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "87a147ad1cd3987cfae1e223941e01b3"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "b221783d79ad3483f272817d8eb2dd82"
  },
  {
    "url": "tag/js/index.html",
    "revision": "48b03565773478b606784fd20a472062"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "9feacf56d80b2cb1fc8dee1d5f3ac5dd"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "01c72f4f1f55d8a088d773a0cfdaa64c"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "c0c83b267e97c544e8924bec920fda8c"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "20db7f70aeed1c1c2c29a4a1581751b3"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "15754cc36024411276f1c398d8bdafac"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "a350cd6eed0b9d9ed20c9618bf72293d"
  },
  {
    "url": "tag/project/index.html",
    "revision": "4d1a56ed5a8498a1dc4d05e2dd86cbbb"
  },
  {
    "url": "tag/react/index.html",
    "revision": "199e7aeb920a2690b47b98d8b60eb58b"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "0f1dfd1c11cdc1ae389d9ac9c2c4dc0a"
  },
  {
    "url": "tag/router/index.html",
    "revision": "be91118e8bc8cc411c6ef997485b8908"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "2d774edf5a5b58ff22fd511b24e707cb"
  },
  {
    "url": "tag/style/index.html",
    "revision": "20a42d8ee3702065c2790860be439db3"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "a870c0c4ef18f2e0f45dddebf650a723"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "595b005f8ab4c065ee2ab47246b00362"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "1001b20234a20b0dcffc1524cd157678"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "17e91ab56b8513869f7957deca2f178f"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "d5c450f70115f6ce14ad4061d6709e76"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "a3431eb59447c12f4cb18569870b7133"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "b2f63afe53b534e4524a263290aecc89"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "85fd18b58544d8bd307b8ac1e9f92c6e"
  },
  {
    "url": "timeline/index.html",
    "revision": "f130166b0b492b13af27cc9aa84004ad"
  },
  {
    "url": "views/about/index.html",
    "revision": "c9af4f2ad2e01486a10db725d0c5d4f9"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "8feba7b93006e564176918fcf9d87f89"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "10da30ea996aaf50655e4fa953498472"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "ae94fd1f8bf85355a606fd9399b0ef87"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "6692aec108139bdab952fcfd877259e1"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "d6f142b3af1fc60589d0eea1a42eb7c4"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "66f26a94998bfcf583e695fc4475bf35"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "25d15c388ba878f462b0213933d81726"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "f35f90302d57e4d7d642928bb55b3ec7"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "fa286fd4b1ef512ae4c6207e196500dd"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "0bd2eeff7d8ec04f7cbab4ba23fcaa7c"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "80d28b51b6b4a1154e34d3cceeaf99a8"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "cd39b9f2add85969c30675ca2279039f"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "444b44dcc7ba27f8f51f2a9b9983984d"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "0d8e450d13a73ce5693c6c6a20e3fb4c"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "eea50e4ed7ade5feaefb1135beddf650"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "65227518c44594e4f0e9b3949ef6e37e"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "9e6c5216ef07c0d92d997a5eb8410188"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "545bcb301729a5192797da34a4bda3e4"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "0d7fe6050e3c518dc603c4de3b0d6343"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "75864ddb07255a83689198f0b63e9fee"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "3835371981931ecdd9b610344aa91a8c"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "f9b06e0dd6e1fb20ef74fa161ce30cb4"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "f8c3a2e764a9d08aafe069b2ee6ac98e"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "9a0a16461ace5b6ba43afa4e359f2f30"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "a5dd450978c9d33db5ea00558fac1a89"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "d10cb714ec73e3939347d61189c62113"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "c1d70dcf04ce42d661d5dcb41aabf477"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "bf8c874af1c9eaa9d90760cba4214dae"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "f1ca4b3ecce5559fbf5f2ee0cebd11de"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "3e70c23d0e06dc2cc0060a033f18dda5"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "3bb2f89add856f174eacbda1dedcd868"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "e3cdf60ff0b8db9f2f9e2985326c31d0"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "7fc92ac563be34f31c33d661df538137"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "48cb91fd9ffa5db4356d3f225fa436c3"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "890da7369d43d6e9be01c247e30eeea1"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "50a58e0ece385e68b8c05c4ce75fbe2a"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "a637f61a6b55476539a04cf6561bc218"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "87d2fa8d587ca66027f48c789438c87a"
  },
  {
    "url": "views/project/index.html",
    "revision": "ea24454d48457abfbd28f75fce36f09c"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "b4c579484964d1ced543b1ac6a937418"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "f9faec8a3d727186d113f326314ab474"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "b9c611234fd9d0f0ecbf4b7661b91d3f"
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
