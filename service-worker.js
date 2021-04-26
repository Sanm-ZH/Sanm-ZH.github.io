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
    "revision": "151ebcea8fe55c37f70685491974613c"
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
    "url": "assets/js/13.f956a781.js",
    "revision": "e06cad4c1fe69bd8c490b4cf12127f24"
  },
  {
    "url": "assets/js/14.7d513b1f.js",
    "revision": "4b9f59febbc95a15cdfcd161575a5e14"
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
    "url": "assets/js/17.b4baa107.js",
    "revision": "91bff3d20c1280808869d99299a921ab"
  },
  {
    "url": "assets/js/18.3415f1e1.js",
    "revision": "5a0bdd32a121a0daac8560f081ff7153"
  },
  {
    "url": "assets/js/19.797c341f.js",
    "revision": "3cf3d353014c6bb8560bb7e897a46325"
  },
  {
    "url": "assets/js/2.84eb2001.js",
    "revision": "2ccff0e034acc1480cb2f1350e6c5fec"
  },
  {
    "url": "assets/js/20.fc4b1a6e.js",
    "revision": "cd8ad417b9e9e7e9b07d796e80d1838c"
  },
  {
    "url": "assets/js/21.baad90be.js",
    "revision": "e8d53a51095e9499069e6a9e349b12a0"
  },
  {
    "url": "assets/js/22.f9ccd47a.js",
    "revision": "e9c6838cdbcb0d9a637a8d6f6e8bade3"
  },
  {
    "url": "assets/js/23.9864a099.js",
    "revision": "a28cb491e99750d443f2e996db24f6ba"
  },
  {
    "url": "assets/js/24.362854d8.js",
    "revision": "876c500df6c3bc9d19ad46198bc6f7e4"
  },
  {
    "url": "assets/js/25.eace0691.js",
    "revision": "258063781d87e1dd69a56c05a162a9dd"
  },
  {
    "url": "assets/js/26.0d295fad.js",
    "revision": "1a563982f28e620695626ca4aa3d5a16"
  },
  {
    "url": "assets/js/27.b47f4858.js",
    "revision": "dc414f7cf4da5c0adacb8631b4d812f7"
  },
  {
    "url": "assets/js/28.7b151fb9.js",
    "revision": "ee94d3714d4a7877be68c7c863d79c84"
  },
  {
    "url": "assets/js/29.8e1ac661.js",
    "revision": "9f053caccd6c12ddbfc6c8b07720dcde"
  },
  {
    "url": "assets/js/30.dac6f10e.js",
    "revision": "26f67416daa52d97fe3fd2000b2687df"
  },
  {
    "url": "assets/js/31.67ea410b.js",
    "revision": "1d9b5cc8a63cae18505d1c7ee00c6165"
  },
  {
    "url": "assets/js/32.731c3eca.js",
    "revision": "715a512f1f959fe700b221abd764adad"
  },
  {
    "url": "assets/js/33.a54dae91.js",
    "revision": "8027b6411cd342ad52bd657542fb1d3e"
  },
  {
    "url": "assets/js/34.94757b85.js",
    "revision": "1034e7e3b7de9842bf4f6f67fce2ac07"
  },
  {
    "url": "assets/js/35.3334c9c7.js",
    "revision": "6a89c00bc099db97cb4be1d1954ea9e6"
  },
  {
    "url": "assets/js/36.ed6cb09d.js",
    "revision": "0e4b3f7c4144f7f8def5aadd0502a418"
  },
  {
    "url": "assets/js/37.5461ab63.js",
    "revision": "f17df0976ce90835efd6601f1418870c"
  },
  {
    "url": "assets/js/38.aaaaed11.js",
    "revision": "7da0b53507e4fafaee68aeadc6cedf1b"
  },
  {
    "url": "assets/js/39.a0c26dcf.js",
    "revision": "2205e8711ac347157c5edcefbb542b89"
  },
  {
    "url": "assets/js/4.89244cac.js",
    "revision": "392b3b37f5ad45267c83349ce3c594a3"
  },
  {
    "url": "assets/js/40.4fb6f903.js",
    "revision": "cc2e102d5fccee8c7199485b6a7c6b5c"
  },
  {
    "url": "assets/js/41.1fbc08cf.js",
    "revision": "fd784a2c736984af14611abbae49dbf1"
  },
  {
    "url": "assets/js/42.5aabe7b1.js",
    "revision": "74ad9742e7e35c0e451ee58038f66ab9"
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
    "url": "assets/js/app.ae52a1ed.js",
    "revision": "ca4d5a95dc0cfe92e1bef31b1e21fd36"
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
    "revision": "3c6fc86c3fd23c4506ca667a10801f99"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "c14d125b78cfd8f5e2cf263dee391e47"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "98041b49c8791ada551fb15a62a6fcf8"
  },
  {
    "url": "categories/index.html",
    "revision": "678ff6857fe0394a560b7e0735accb55"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "5b979fa253699078b15421d7443fcce2"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "47e7cdddf6543e790245abc1c6946c11"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "cd2514579914fc177349766bf8b7c496"
  },
  {
    "url": "categories/other/index.html",
    "revision": "73be1779e9fcf0a3d00dfde76485c481"
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
    "revision": "a2717debf3bf04f36c1fd7b49ac9d99b"
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
    "revision": "1fa8c87c2e35246454cc3ee88fe9a773"
  },
  {
    "url": "tag/array/index.html",
    "revision": "4fe874adb191e73b8459b545ca3170d4"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "36ba6fa12840b48308fc0e8b90cf3245"
  },
  {
    "url": "tag/css/index.html",
    "revision": "520b9a322fedc49c441094282831d664"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "9b63d7d5232d950658e3d3d0954abe73"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b75619cdc14f4af9f4779eba26b588ec"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "9013a97bfd8eeede574e29df2a733d97"
  },
  {
    "url": "tag/html/index.html",
    "revision": "8559dd690fc5000982c9663ddd3b5fe2"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "a88dcf3713e06dcf4dcfedd295d2d7b6"
  },
  {
    "url": "tag/index.html",
    "revision": "b014449a4f2d37dc814463003a28b210"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "7dd7603dcf02ce8bc0d4142189e2d9d2"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "cd7be626870ef2e3b07cea61007e0a85"
  },
  {
    "url": "tag/js/index.html",
    "revision": "d16c13e8791b53be49dea341e69bd196"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "8d9d4159713bd88329136192f5a88090"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "1432d8d03c1650cb0934bd9a75982fe2"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "88e5ecb2c4085f2a1ecb440fb92c97c5"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "3b52cacb315235be43c93882b153e401"
  },
  {
    "url": "tag/project/index.html",
    "revision": "ac9a3ad1eacf33d98475e47d9a9cc56e"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "b7cf9057501359f042410cc9142686b7"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "8003f73332b248b96b6ee3cfa4cabe30"
  },
  {
    "url": "tag/style/index.html",
    "revision": "167bbc02ce32d529c885f162a0fbaf41"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "fffb071f0092e8ad2fc0b35a6af2dabd"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "b5e48e4cb2421de87ee7a79fc2d3f8b0"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "41ef4a428b243c8c4884c115ed531085"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "cd890393994d09c3aba1dc556b503b01"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "eb7f257132e50e83a9e0fc3c2ac01a1f"
  },
  {
    "url": "timeline/index.html",
    "revision": "056089da7fc32ab9b45c7eb7354a03fc"
  },
  {
    "url": "views/about/index.html",
    "revision": "07adaec0ab1b50678873d73501d722a7"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "2d69a5b7e65f16364ff9a28b2d756018"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "7556ffdad33de6a671379367559b2373"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "ef6ab4911a8ac1d248030ee20f277929"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "e88fddb1d34966186f7a6d7bf043ed76"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "0c9939e3e6826a22923d871bf205dc54"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "5f217c07e978765a94fa09198ac44a9f"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "89b721daf68d090674b490e0dea53976"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "b0c09d753ed2241c89ac398afa26b6bb"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "61c14ede6432e02a878725fc813931e0"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "0265e026557bcf2e27e6f577e1b3d9d8"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "24fd645b0dd9c139fd3c57cf120ae5d4"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "c80ba7e9fe9ff1997951f32ff23b49e8"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "f86d7635f28679e17d853f9b01c32b4c"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "9d686f273166eb20be4cc05a376b262a"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "fd47c55b1fcaaff580f72637cb5a5a51"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "30e8e6b4b2395ce386fcb2731ef7b696"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "f571d885bd4dbf5decfcf3d0a60533b2"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "8e7389f88c43299e816a9090f6550d33"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "b848a7c00a05e9923ebc26358519e9ef"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "e7170228f8d41ee503b1fb9c73c374e7"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "e8b48158e28ed47329a0224d72bd9dc4"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "57f5f62ac5330f91a155734f5c473355"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "59fc4baa88280f97b1b22d694ceb3f0e"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "4f47a8b6772bddc4bc41346a5d85a6b1"
  },
  {
    "url": "views/project/index.html",
    "revision": "d3e99c354553b284afb455babc1b032b"
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
