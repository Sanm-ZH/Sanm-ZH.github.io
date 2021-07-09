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
    "revision": "9aaaa31e8db96475f721ca03f8f15fc4"
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
    "url": "assets/js/11.f6cab0c5.js",
    "revision": "5f566fa1925876c3baaa6cf0be1e8397"
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
    "url": "assets/js/15.a37468ed.js",
    "revision": "0ca7d18bb2d810daec13431773157995"
  },
  {
    "url": "assets/js/16.dae2be3c.js",
    "revision": "34c985508fed6f059ff263076ccec63a"
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
    "url": "assets/js/20.78041f1e.js",
    "revision": "6c566d9cdcbe138990c01878e7fe1313"
  },
  {
    "url": "assets/js/21.3aaa74ea.js",
    "revision": "3418dff06985acbc044650b0aa40d084"
  },
  {
    "url": "assets/js/22.b1b95053.js",
    "revision": "8c7f01311cd63190a5b4632007115df3"
  },
  {
    "url": "assets/js/23.c2f96094.js",
    "revision": "c6113c56fe3b37e511fc3354dd364419"
  },
  {
    "url": "assets/js/24.223fb68a.js",
    "revision": "dc7cf7eb2502e18a2032552655db2db3"
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
    "url": "assets/js/29.5c344726.js",
    "revision": "e6d3bdeafca5da56cee1b9a4e121f42e"
  },
  {
    "url": "assets/js/30.5eba18ab.js",
    "revision": "e8d7fdaf618f25e7e3d6e4b06e8931d5"
  },
  {
    "url": "assets/js/31.48adb241.js",
    "revision": "d1f8c2740b3c1f4dac31cb1fcc3b0c7d"
  },
  {
    "url": "assets/js/32.f658733c.js",
    "revision": "543c66dac769b846c6dae0dbada26f54"
  },
  {
    "url": "assets/js/33.edc30b80.js",
    "revision": "bed800d52b6541948c11c3fbacac5810"
  },
  {
    "url": "assets/js/34.bdb0cca7.js",
    "revision": "68ca7c04d48f3756278649a1489ad887"
  },
  {
    "url": "assets/js/35.e7292851.js",
    "revision": "958f54fd8eab7050d10b27623048dadf"
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
    "url": "assets/js/38.e63a1bd2.js",
    "revision": "80b7cf1e1972355da26484324c4172ac"
  },
  {
    "url": "assets/js/39.adef3be1.js",
    "revision": "1b82b5d210037214d651820205a35ea4"
  },
  {
    "url": "assets/js/4.0b5dcfe8.js",
    "revision": "5bb816872853e0319c7e856fa0584e8a"
  },
  {
    "url": "assets/js/40.6bb603f1.js",
    "revision": "a9f2b6f9a7ebfc6a4effa01b3a880ead"
  },
  {
    "url": "assets/js/41.812175f6.js",
    "revision": "4d59ab54907e4f8090fd3c7659c7dc7f"
  },
  {
    "url": "assets/js/42.beb4b7dd.js",
    "revision": "3344e110d2140d34c5b72ed7508defb8"
  },
  {
    "url": "assets/js/43.ab3c8eaa.js",
    "revision": "8c15824cb97476601ca94e3f471342bb"
  },
  {
    "url": "assets/js/44.5e3b7d40.js",
    "revision": "ce0636474bc20a68c395de562510401d"
  },
  {
    "url": "assets/js/45.afe6221f.js",
    "revision": "d48421afefee618dbe1bfa2be7992f17"
  },
  {
    "url": "assets/js/46.2a028d90.js",
    "revision": "602820e7a0e22b327caef1188bda31b7"
  },
  {
    "url": "assets/js/47.468695fd.js",
    "revision": "ddd3b9e40a83525da1bf215dd4ced69e"
  },
  {
    "url": "assets/js/48.0d7a3e23.js",
    "revision": "3eda715efc4d1cadcc27589110148d6f"
  },
  {
    "url": "assets/js/49.49b58b4b.js",
    "revision": "8e4881007687efda6b13b9e82990ea6e"
  },
  {
    "url": "assets/js/5.eef939d2.js",
    "revision": "bebf86a9ff48608f03df079be2f2e9ab"
  },
  {
    "url": "assets/js/50.12108b04.js",
    "revision": "7e18e40e1b6ae60539073145c1690bc8"
  },
  {
    "url": "assets/js/51.834f03f7.js",
    "revision": "8498c771d0c8d43e0d8c4413998a6f9c"
  },
  {
    "url": "assets/js/52.600ffa5f.js",
    "revision": "0d5c06e3f48b8d7782bfbd68e0d9435b"
  },
  {
    "url": "assets/js/53.15f2a732.js",
    "revision": "9f347cc872e8db9674acb5c8ff65f609"
  },
  {
    "url": "assets/js/54.5c7bf358.js",
    "revision": "c4abfae389d20747613221355929188d"
  },
  {
    "url": "assets/js/55.5d62d70b.js",
    "revision": "af0ae93691d6afd2774b02599d068309"
  },
  {
    "url": "assets/js/56.72c9097f.js",
    "revision": "7abebccb318f156178b07b5436974b9f"
  },
  {
    "url": "assets/js/57.9209485b.js",
    "revision": "e71391814f5d18639b08fbdac422a3d5"
  },
  {
    "url": "assets/js/58.27f76718.js",
    "revision": "7a33b3d69ad010aa6b8c67ae60fb582f"
  },
  {
    "url": "assets/js/59.269ee96c.js",
    "revision": "edfbcb59557bfc780b2374f33580f444"
  },
  {
    "url": "assets/js/6.3bd14d99.js",
    "revision": "9045e0447eb6e0cc6f2a1c7234a69692"
  },
  {
    "url": "assets/js/60.7920df5f.js",
    "revision": "ce6aa86ccedf96a89e826f8546a88b2e"
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
    "url": "assets/js/app.877ca92c.js",
    "revision": "e4060be4760617b11f4744ec26e0b18c"
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
    "revision": "8d2b4b32bc94573714c180606c85b28c"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "ba5e03e9d251b17e82bf29e926118097"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "e411faa560e077677de975ab9594dc02"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "a6215fcd1d4c070287aa1f755708ceb7"
  },
  {
    "url": "categories/index.html",
    "revision": "d0eb29db57125995da801b0a258a99b7"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "96d095c826c00ef30b1e56313a07bc35"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "cdbdfde0ada5cca2eb8a17c53599c98f"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "aacc9fde38f8c208f0637eb39e556ce6"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "dd54458c25807f4850d79d7a11213a97"
  },
  {
    "url": "categories/other/index.html",
    "revision": "a1828d1cea2abda683ef30c60e3a277b"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "8b059c518888e0dfaa6ad698151ac047"
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
    "revision": "8c3af9d0d612a0cdf24d54f2ff7c252d"
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
    "revision": "04bdf151f5010a84c2cb1ec6f045d50a"
  },
  {
    "url": "tag/array/index.html",
    "revision": "29ba82b90b62a7b39a35fbe23d381859"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "ea064cebf42ea85d2823d4950f7067a9"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "987db2e7e62746493cb14a53d51349c9"
  },
  {
    "url": "tag/css/index.html",
    "revision": "9e3be5c0bf574592069a5aee1c0311ca"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "18838e8c2a41e9fe63c18af0704ef7a4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7790b69dee9188f396753e6bad2ddfc1"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "d91cba571f56227e0ee87e70706e09fc"
  },
  {
    "url": "tag/html/index.html",
    "revision": "1cbd3c21b39dd320e9289cb49e16d835"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "dbf987493e2cee61971b8cd5727efdb4"
  },
  {
    "url": "tag/index.html",
    "revision": "b8f71a83e0af66ed23fb3f226a698f6c"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "2a785beeb0b07ba113490f8846d845fa"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "460930c97bc9a83b4aa47b705db45cd7"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "e8e595fe62f21553aad3cbbf4ed59d34"
  },
  {
    "url": "tag/js/index.html",
    "revision": "d7032c0256707aa18988a408b3be842a"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "a71b4d4ca6da24181f57d5c6c3250c87"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "ad1725158a05e415d10e707e1721a41b"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "91eb2e274de0f26392a2eb89e1342e2c"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "066e1d1b76d96d620e42aa26b5378ae1"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "d3454a9cf59b750c5665cda61e944e31"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "329d9a577d365245cf0ae7219a07ab9b"
  },
  {
    "url": "tag/project/index.html",
    "revision": "7922c6b8dda1e0d2b0bc9fd04e283260"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "87e1f706ad9f20844adc5c97093a7f07"
  },
  {
    "url": "tag/router/index.html",
    "revision": "219d4e49d21e074e83b4bab732344413"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "b741575aeb56ad3e5d5cd08dad19e0c3"
  },
  {
    "url": "tag/style/index.html",
    "revision": "0e9bd1cbc43f3bc7ff4be3bdb5c6186c"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "6ad6a7d278c05d8af9d9ef4aa29e52c6"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "b1e7c3ab606a5007d1a66ddc5af650b7"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "bf03b1bbe3f4fcbb6d7f26cb3e836f5e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "9074b01ac9344464e1e76b04bba69d1f"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "c27ec807b4b9b2c1bf67f134e089f58a"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "27c42374f2f45df8bb3ef9936b92730f"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "dfb49f93d4058c4335b4690bff8d49ff"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "b8728a2facc927d60c639e470e623a23"
  },
  {
    "url": "timeline/index.html",
    "revision": "66c4b6e18301558ce8e635f2be10f7ee"
  },
  {
    "url": "views/about/index.html",
    "revision": "5352e0618b0522c966b2f970484ae9ee"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "217610aeaa74f778fcb687abec01b4cb"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "25be3e317dc9b00423e2f61727f2f451"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "efdf9df8dd1e7ba083321e1213845f71"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "26d550498f72d1ae2e801dc84c3e1a58"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "8c06759ca0c8d08748bae8c621a3e779"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "c9db0722a9cc9b1b6b65f63c012f6fff"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "de750cf60be551542c368e977e1188d4"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "764821100dcf20a46871a8fa2146f038"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "c7e319d8e054be16c0b8b61b0cb815bf"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "4e4a7210a19b3c57996f178ef923aedd"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "b93516c86f17c5771a58052b4f001a3c"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "f8bb20fc752bd1ca3cc9ef139867e0a9"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "dd919f6463571535fa649df5453c28d0"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "ee9a5c06964163a9898bb88bedc32d45"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "39e716e444c22c031ed31c505a1bfc55"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "72086f02043cecf704c453ce20345b49"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "066be22b39a6d709e371a33b9856fd2b"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "7638678d53dc947ff3bf60e15900fab5"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "9a1e569fb3f6adf5107a84c7e1d15c55"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "4430036d8292778bda2091a8126ee1c0"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "a4974fe9b2503d4d69dc654e59fe8849"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "a2b256fa2b124c4b4a8e29178d1d5c4a"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "f01a979f6f123f2f0eb8770125d15aa7"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "b7b048a68266ebda561fe34ccb35566c"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "bf0f07505b796a7fe457f56391919c83"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "001afc077690cb51739766650ee8d9e9"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "a6c855fd75dd5582efdd5d8c1a45946e"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "e20de0dfbf51a2acfbd00b9bedaea960"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "54e9544a5d463e0dd02b3883a5a7021e"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "43d578b6b93f5881e04815fb214106d6"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "e51b45f908803d4e29ed865e3254f825"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "3e7aee0acdf875a71d8adb9ddf965f2f"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "79b8d45f0f909c776e935a8260bb76cc"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "8c49ff49c28cfe01a8d65ba198323f64"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "d9e0b761f21a477370563cfed8182d90"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "d364425edb953204f4fe46fc18cde905"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "496aed5bc0b11c9942f8ffd162ffc546"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "4a94479745f4bb1d2be0f6ae4e83ba82"
  },
  {
    "url": "views/project/index.html",
    "revision": "3c7dda1dbd4767762a7d9df7050917c3"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "c50744a9147c41ec455fc621b2f4b274"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "583460088c37ceb3559fc5e646804924"
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
