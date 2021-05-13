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
    "revision": "16cb43493482211b8fcff8b24c431267"
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
    "url": "assets/js/13.0bfe06f2.js",
    "revision": "cb5c712089096c277e0f7a6d2d618277"
  },
  {
    "url": "assets/js/14.c302071f.js",
    "revision": "401777670746bf7421b40a8bf6d84f11"
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
    "url": "assets/js/17.93b68a38.js",
    "revision": "700c8a5616adaec4228b608fcc86b726"
  },
  {
    "url": "assets/js/18.6edde462.js",
    "revision": "414a6991b11f8fa4f6db1408ebab51d4"
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
    "url": "assets/js/20.bbd5d332.js",
    "revision": "4c9ec29024c72d03d804befcbb67ea5c"
  },
  {
    "url": "assets/js/21.1d6d931e.js",
    "revision": "77ff302926d73611f698d19a4dec9130"
  },
  {
    "url": "assets/js/22.4f5e8fa7.js",
    "revision": "96527b5d79a72213d10a1d098855c930"
  },
  {
    "url": "assets/js/23.47fc37a9.js",
    "revision": "09daf69aff76b586d947d39eb546ed04"
  },
  {
    "url": "assets/js/24.38f58045.js",
    "revision": "b5aa07ade6e6c539553d689be5486c3f"
  },
  {
    "url": "assets/js/25.6ff5c6d2.js",
    "revision": "f8965d436ecda84e949ad1ebf89e9834"
  },
  {
    "url": "assets/js/26.ccd7cc7a.js",
    "revision": "05376d3e574e0f4e705bd97b12d3c46f"
  },
  {
    "url": "assets/js/27.4f82416c.js",
    "revision": "95191fa2a696f251f0577d8a0abaf36e"
  },
  {
    "url": "assets/js/28.bccb0bc1.js",
    "revision": "8d26133f4a6a5161e26a992d656c5c6d"
  },
  {
    "url": "assets/js/29.5af0ab0a.js",
    "revision": "c422ce29b173762e3200852b021980c2"
  },
  {
    "url": "assets/js/30.ee03390c.js",
    "revision": "4a668fd9f4284eaa4679998ffc50f84d"
  },
  {
    "url": "assets/js/31.89b20150.js",
    "revision": "5bdb7c19c0be8e08b7df7c28fda3194c"
  },
  {
    "url": "assets/js/32.55f3a8f3.js",
    "revision": "0aa2cdeb6af402eee961e3c3c338ec07"
  },
  {
    "url": "assets/js/33.4e88ae77.js",
    "revision": "cf92508c4d702984006d8a37213911f2"
  },
  {
    "url": "assets/js/34.882e9447.js",
    "revision": "69e4d1d767fcab3826223638ac3ff9bd"
  },
  {
    "url": "assets/js/35.82c37ac9.js",
    "revision": "ac7aa24aed544ddd38a6502f76fd7c82"
  },
  {
    "url": "assets/js/36.b2f7af6a.js",
    "revision": "341bfe06161505c182dd5b71d91f2cf4"
  },
  {
    "url": "assets/js/37.dca7b0fb.js",
    "revision": "a568d732ddab58c830f7849db26ad841"
  },
  {
    "url": "assets/js/38.26f20fc2.js",
    "revision": "ef281acc5a4e9e53f7dfec862ee939fe"
  },
  {
    "url": "assets/js/39.b5dc7a94.js",
    "revision": "57e2f102e490ae80e3f7d8a396c2bf10"
  },
  {
    "url": "assets/js/4.89244cac.js",
    "revision": "392b3b37f5ad45267c83349ce3c594a3"
  },
  {
    "url": "assets/js/40.d0683289.js",
    "revision": "9484792ad614823ed0fdb1fed9bfd41f"
  },
  {
    "url": "assets/js/41.f9eb8b76.js",
    "revision": "f96d7d6521757ed6aa341d1f36d7d36f"
  },
  {
    "url": "assets/js/42.2a222dac.js",
    "revision": "03941623957f4b91bb6d6ef81086cbb4"
  },
  {
    "url": "assets/js/43.211f15c2.js",
    "revision": "ef0db0daeda8a3856cc54b4f21c6c972"
  },
  {
    "url": "assets/js/44.9847c0f6.js",
    "revision": "8e697c0d212e797355b8116ec3ef5b8c"
  },
  {
    "url": "assets/js/45.b4f075d0.js",
    "revision": "05809ca6ff526ae09ba83e3431fc2337"
  },
  {
    "url": "assets/js/46.b3da2483.js",
    "revision": "b79e34da3d15f49a5b28343729dd960f"
  },
  {
    "url": "assets/js/47.b8debffc.js",
    "revision": "a5ec97801e94a8d6f76846ae379d4c62"
  },
  {
    "url": "assets/js/48.ac57eb6c.js",
    "revision": "8270a9dec1d6a96ddf6640c7854eec0b"
  },
  {
    "url": "assets/js/49.78f1f9a3.js",
    "revision": "a041b4bad9041a1f19f42a493e03eed8"
  },
  {
    "url": "assets/js/5.12dbfa45.js",
    "revision": "155722c896205ba3d5c5ac1e113fd56f"
  },
  {
    "url": "assets/js/50.679f51f9.js",
    "revision": "7b66fbe534b863887f56755579e709f2"
  },
  {
    "url": "assets/js/51.b1d25d1a.js",
    "revision": "d72b12bf416840f17fb9cad2d203e781"
  },
  {
    "url": "assets/js/52.c17a5c6f.js",
    "revision": "f124c22ec8781c16c78fd01d7b6ccbca"
  },
  {
    "url": "assets/js/53.138f9cc9.js",
    "revision": "8d451980d20ae8e60a6cf306a82cd7fd"
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
    "url": "assets/js/app.fc2450a6.js",
    "revision": "fe4e402ab60f34671c98220e51cf17b3"
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
    "revision": "5578c58c7298ee36f47fedbfd12e468a"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "4a4143f920488a8be0d78885f1070594"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "23f2bd37ad4a3fa8cf18138488c8d162"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "fb08c5a9720d348211e10874c7754c8f"
  },
  {
    "url": "categories/index.html",
    "revision": "32ee4c7b850979b2540dfeef1ff5ccdd"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "d9697770cf7bab1c6c71d334c5083782"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "1f1dff231f47d8443cc080a3032912e4"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "895423444e43b87d4c649c528bf69cca"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "6a5a9e5aa73d5929f9b5a8b151daa3da"
  },
  {
    "url": "categories/other/index.html",
    "revision": "3674c1cfb82ed77bf5cb021ab500bcba"
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
    "revision": "5b47f07f595c779113ddefb8afddf181"
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
    "revision": "c040940207c3a8ec4bff7aee651908e9"
  },
  {
    "url": "tag/array/index.html",
    "revision": "1ce6b8d62b1b2356f261273083a3010f"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "c17758c9011b7c047b8b043f765401b0"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "fce3dd6e326af3898ff0d1f63586b57d"
  },
  {
    "url": "tag/css/index.html",
    "revision": "e4b883b9e209edd71befd0453b1a6211"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "5585fd397f94834550ee8ec1b44f0e51"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e053566cd7aaa599a657a08ab81d8ad5"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "7f8790353fc0f540550f4beabad38784"
  },
  {
    "url": "tag/html/index.html",
    "revision": "ca37fbbcb0b4197cac6009df4872ffa5"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "9a8056ff4d7da2e4cedb757b1c5b2c6a"
  },
  {
    "url": "tag/index.html",
    "revision": "96b6ee22c11b9d0fa314dcefdff664e6"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "eccee8fee6301143279aabf3090fcf25"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "0b3782be51fde54c9940592c5a5e86ae"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "744bfa228413892a0da9db6c488ce026"
  },
  {
    "url": "tag/js/index.html",
    "revision": "1c75d23ba14408bbaf70d948da76f269"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "3aebdb4e4c99a8340e6fdbe79594155b"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "5f0f2c63f0ede406acf9bb7aa8a6107a"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "167dc96808d41b917874aad6c004dda3"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "188d373a360cb9631725e7c123a90232"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "cc430e202b4ee2c29d74f69644fa4ac2"
  },
  {
    "url": "tag/project/index.html",
    "revision": "52fc68ea8e84ee8a3f84bcba734f5399"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "5c4a793a53d971c445a79ddbe4006e3c"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "335d18734c1f11844bd3cdb84fb8b116"
  },
  {
    "url": "tag/style/index.html",
    "revision": "b220cb702de6d2da125ba0b5d7d8f8a7"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "05825c4fecba081737980f52ab0fbb56"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "e6a87c70a0f88aa250647d8c1ccd8384"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "6ab0c31294f1694b3fcc43efb8e4a23e"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "a652ffb0c143bd07e1f131918fd40156"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "4f1eea3be7d86423c557d8f691e34196"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "27f694abbd5cb9dc2934ad066123e494"
  },
  {
    "url": "timeline/index.html",
    "revision": "becc0082d8f00a3c4d43b662bc502640"
  },
  {
    "url": "views/about/index.html",
    "revision": "f7bea6a10f62e963d4acde985424b30a"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "f0ef5e2d9d499eadbb11af778d07d161"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "8c4f739aaecab32ec2a28cbc56548d75"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "d2f0c6a67b4370e6a8bd0c5afe9db57e"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "f89694e20c4c5fb946c3e2f80157309c"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "af14a3e46c1966294ec049a209036ad8"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "e56e836738b37cbc8203913e3a53c63a"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "8a35d312a717e84c15fa8a0942c51959"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "59831cc90ed9a4c2b507dcff86e94164"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "f3d233d4636b3bb56af4a827a6ce5332"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "de20f49178de4349d886ccd719f64a29"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "e34c74b769ccdb7edb021b0121483fb7"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "bb67845a574b740e37d5dcc7755a19da"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "59b21c616dd70e69d557f88df8f72a2b"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "26255cf67bd98461f4397298e5c557ed"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "7b64b9949eef4519a0cdb9e027d2428d"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "7e0996d9f63121ced511b45239271cad"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "e7f9dff7dacfe41b081a41c53385d748"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "f07a8d01de550dc81504904f96bda3d5"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "a0991b81fde7b052ae65619c966a51f6"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "3b20a96142da366ffbec064bf29516fe"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "19a4f04a9e169fe18c414ad64869ca42"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "daed6858954ae570e60207450e9e84ee"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "552b78ace792fce0132bb743446e4231"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "3f312437dd0fb391ba0377a9cf16785c"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "842b9d226623fc316bd29f866bffeb5e"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "7a22adbe9cb50d258904ea8395bfef74"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "52119bf9deb3f324dda9f96ba924418c"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "155173263a710ee40dc9e21eae916cf3"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "dda1412d5bc828ab069b8de190142abb"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "c283142645b6c5cb142d24c81bc076bc"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "9a31d73e6334ce43e9e2c7679257c826"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "ee5397835326fccb08b1e602f5f6781b"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "d599b0da248efce5c4a0357c16ab91d4"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "d943040fe8545e63a68956bcc4ac692e"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "e3ca7041f15a322d2f279f2a018a1f55"
  },
  {
    "url": "views/project/index.html",
    "revision": "ff10a5c4dd2046198649c412afc054cd"
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
