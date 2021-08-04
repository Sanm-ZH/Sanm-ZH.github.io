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
    "revision": "fcfc428039a3fe0f0c62afe0cba8f4f1"
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
    "url": "assets/js/11.d3852f56.js",
    "revision": "38cfb9fad2fffee1430fcc7719fdb598"
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
    "url": "assets/js/15.19ce2623.js",
    "revision": "03702a2ab3a4eed067c5ef331ed8dddf"
  },
  {
    "url": "assets/js/16.1abccee6.js",
    "revision": "fea5e372232be988d528628ae35ad456"
  },
  {
    "url": "assets/js/17.aa0e0e4c.js",
    "revision": "b1a255ceda6be5ae41b12a3454f5c4d8"
  },
  {
    "url": "assets/js/18.b11e41c4.js",
    "revision": "79de6ba46b296b14950bb995acdb0d78"
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
    "url": "assets/js/20.acafdc59.js",
    "revision": "e4dfd314caa4268d7931e6bb3914a41f"
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
    "url": "assets/js/23.ed404df8.js",
    "revision": "94492029ec706abe2a383fb3c85cb0ff"
  },
  {
    "url": "assets/js/24.223fb68a.js",
    "revision": "dc7cf7eb2502e18a2032552655db2db3"
  },
  {
    "url": "assets/js/25.246d9a40.js",
    "revision": "2d15a5286ed82d9ae4f030a79811e796"
  },
  {
    "url": "assets/js/26.1cb4a334.js",
    "revision": "081399520be3f086a7abb3960e98b0af"
  },
  {
    "url": "assets/js/27.6b915a4f.js",
    "revision": "ada236ca38b41793bb96426a4c94bfb6"
  },
  {
    "url": "assets/js/28.2a71ce8a.js",
    "revision": "52819308a06f98496778b8db024dae4c"
  },
  {
    "url": "assets/js/29.c73f1f46.js",
    "revision": "865d174a22182084aa5ab2751547b1b7"
  },
  {
    "url": "assets/js/30.5e553f1c.js",
    "revision": "3a18b9565e0872f5b70a21d3a075d914"
  },
  {
    "url": "assets/js/31.48adb241.js",
    "revision": "d1f8c2740b3c1f4dac31cb1fcc3b0c7d"
  },
  {
    "url": "assets/js/32.c31d6e5d.js",
    "revision": "9ec7d220eada4300654b5cd19114b4a9"
  },
  {
    "url": "assets/js/33.0c246c3c.js",
    "revision": "4411a85fb8e56548b08700d712d1b8e2"
  },
  {
    "url": "assets/js/34.7b56c432.js",
    "revision": "81564aa275a505e4de16dc7bb0700d6b"
  },
  {
    "url": "assets/js/35.594a036d.js",
    "revision": "1264d9bc69e7b0a298794081c2f2bc7b"
  },
  {
    "url": "assets/js/36.44355dac.js",
    "revision": "87d6128558c9510a020b3397a7b3272f"
  },
  {
    "url": "assets/js/37.ffee6180.js",
    "revision": "743211f6537a5fdacac4fde68239d052"
  },
  {
    "url": "assets/js/38.535858c3.js",
    "revision": "b1d58946dff74a07685a00170992649c"
  },
  {
    "url": "assets/js/39.241e2bcf.js",
    "revision": "95aabc69fda521b656bdeb4281cd95b1"
  },
  {
    "url": "assets/js/4.0b5dcfe8.js",
    "revision": "5bb816872853e0319c7e856fa0584e8a"
  },
  {
    "url": "assets/js/40.ea72cceb.js",
    "revision": "60bdcc9051fda6686f86078ade9e8b85"
  },
  {
    "url": "assets/js/41.f5eed65e.js",
    "revision": "b5e238355c34e73bd1d2213c51544893"
  },
  {
    "url": "assets/js/42.44cdd2dc.js",
    "revision": "25874d1f56f5271b41947cb3ecc2f3b7"
  },
  {
    "url": "assets/js/43.862cc1d8.js",
    "revision": "c769485c95018b059b7e12ebb3a33001"
  },
  {
    "url": "assets/js/44.9f8503ca.js",
    "revision": "525c49ddbf0cda2a873fc04f7f13c8ea"
  },
  {
    "url": "assets/js/45.b4d2367e.js",
    "revision": "f6ec2a92a55a3e6c111dc8bfac7c8e7f"
  },
  {
    "url": "assets/js/46.6e4e1d25.js",
    "revision": "61ded9308c06c84e14fd2b2f82336a95"
  },
  {
    "url": "assets/js/47.0da4b0ef.js",
    "revision": "cffef5267dad08110df257be10cf4c4e"
  },
  {
    "url": "assets/js/48.d6867d20.js",
    "revision": "6b5adf5ed39a610463c234c2891287e4"
  },
  {
    "url": "assets/js/49.d6aa3cda.js",
    "revision": "8b5d053ac81c8e40c6466875a962f78a"
  },
  {
    "url": "assets/js/5.eef939d2.js",
    "revision": "bebf86a9ff48608f03df079be2f2e9ab"
  },
  {
    "url": "assets/js/50.081176d9.js",
    "revision": "1f389905b3927e1fe3061fbda0f61d00"
  },
  {
    "url": "assets/js/51.cf391640.js",
    "revision": "418651547a17ce9d081460b1ee91ff39"
  },
  {
    "url": "assets/js/52.2a96e827.js",
    "revision": "2e930b31dec58ed21f7c557edd741e3a"
  },
  {
    "url": "assets/js/53.9fc4d6d2.js",
    "revision": "cc290f5f50bfb56823fe09617f875c0c"
  },
  {
    "url": "assets/js/54.d77aadf2.js",
    "revision": "35788eb86c42dad4e31093f0b08eb5c4"
  },
  {
    "url": "assets/js/55.c34a6e2c.js",
    "revision": "abc73b4a065179d66e146c3e7a719576"
  },
  {
    "url": "assets/js/56.18cefebe.js",
    "revision": "cc7a7bdab5422c364e13aaa98aebf17e"
  },
  {
    "url": "assets/js/57.e41563a3.js",
    "revision": "a3809153e0c09bc2cfd3d43b44b24e36"
  },
  {
    "url": "assets/js/58.ee34fae5.js",
    "revision": "2d4fca650185aff6c84f30b21f92f781"
  },
  {
    "url": "assets/js/59.684748fe.js",
    "revision": "0a53b5673a0567760f3ce7d5541c39f9"
  },
  {
    "url": "assets/js/6.3bd14d99.js",
    "revision": "9045e0447eb6e0cc6f2a1c7234a69692"
  },
  {
    "url": "assets/js/60.c93c20b2.js",
    "revision": "fdc235e31b198333f77d194db20271de"
  },
  {
    "url": "assets/js/61.bf7fe8d6.js",
    "revision": "44242edcaebbb6c3822234282ab1c9ac"
  },
  {
    "url": "assets/js/62.d3c6f7e9.js",
    "revision": "d230184f4a07034a49accc9f37d18f87"
  },
  {
    "url": "assets/js/63.79f85dc6.js",
    "revision": "dc5c090f68c6ae786114a93eb925d1a4"
  },
  {
    "url": "assets/js/64.c6724c28.js",
    "revision": "b0d21ef364f44dd2933e11e504ca32f2"
  },
  {
    "url": "assets/js/65.e7c78a32.js",
    "revision": "41a20f8d1c114bec87ba96ed283ebff3"
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
    "url": "assets/js/app.ce4b9b4d.js",
    "revision": "6d3e4b5d55870fe8e3bc719e05bbfa72"
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
    "revision": "1751e886f3463fb67e137c48a9187c97"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "e5d1bea87aef743ff4c693712ea48290"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "75551f23e0327ae71e1216918d046d58"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "1184c68dd642a0dcc71b26d4dca43627"
  },
  {
    "url": "categories/index.html",
    "revision": "3468faf8214010d56ec6b023233b3b5e"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "aa771f2302af0f7eac4fa5dc970cd792"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "2be76322a3b9bddbc18018c68d0d9c01"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "0941d2fe6cb12df43a52e453fbdbee35"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "1fde61a1ad4b1b7b178d2d8bd6436899"
  },
  {
    "url": "categories/other/index.html",
    "revision": "4a03f3e8f22ed722a26f6b78af0eb72b"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "a6a142d6596c90158894c2e48d42be4b"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "6032965e1dae28969779c1becb9c9a97"
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
    "revision": "fb6ecf603f7c80c009070f0e7a648823"
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
    "revision": "03f730a9cf9c6fd3ada2243da68bc840"
  },
  {
    "url": "tag/array/index.html",
    "revision": "4807d18f7d916ab5240b3ce51d242b8e"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "ffe037b46c0d98a47e2b5408fb4db200"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "b59b477c9ace9a9cbd8e2d287c4bce0e"
  },
  {
    "url": "tag/css/index.html",
    "revision": "96909983650290fb86df86cdea4faa60"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "4bf632a78130328f7804cd3761c32d71"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "1622ced213c035b4a8375a8f6e13dd92"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "e9df413e0a4788318425c91a147bff0f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f5d6f5467cecc193a4a127a105e6594f"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "4477f18a4cae81dbc4c71b1decc3c0e1"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "ac1cffc268c1090def7226e8dd9e2115"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "0e5d705a36353a4abb5a236a2fc8ad9d"
  },
  {
    "url": "tag/html/index.html",
    "revision": "2323a85bf31016620a29448565e8c880"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "192ac5837573a39b52febdda5aa09309"
  },
  {
    "url": "tag/index.html",
    "revision": "d059ba0f0f29ab6f1cc90267ee9e75dd"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "2e5f1938df0babf73b07c7cb3ec766ad"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "a5370ec8e285892799f9d9ae5b4102c6"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "5f5f3c4dd2c7be75ba572f7a7bcfa1f5"
  },
  {
    "url": "tag/js/index.html",
    "revision": "90c77c59915067b6382986a18970e230"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "2d6f38338a30decaa3bd40ec93fb93f7"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "0dd9eb3d6a3d9a889ef998e1d9d175c2"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "25542d7ad23aa04cda0020d56b442139"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "3585423c8cf227efde371e98a9b8d8a9"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "b745e6deaba1646d43551094f5bf571d"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "fad46c12225cec341bd02fe89593796e"
  },
  {
    "url": "tag/project/index.html",
    "revision": "69f1f731a3c80919908ac78b79ffd461"
  },
  {
    "url": "tag/react/index.html",
    "revision": "360c33a97fa0985924f89ff48f570a60"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "f80c827d266b34ca8b6841071e3df0f3"
  },
  {
    "url": "tag/router/index.html",
    "revision": "974a43cd01a0980f62240915e76b4e21"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "dc4e4217dbe46eefd309db001c09ed73"
  },
  {
    "url": "tag/style/index.html",
    "revision": "1e889c4d65cbae446e1c70ba0b29b89b"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "4fea6c03b9bbd5fe0f9ad72628fed3a0"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "df4dfeae158fc11619985c54549ea292"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "9e16468b68b052fc1bb051c60b3674d7"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "fc464ee8cd090b1f3682ad1be35638b3"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "97949982218605e05bfff652730e2b04"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "90653612be0f33215036e0b3141ceebc"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1c665c6604083ea95e3c07aaab95492c"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "850ac93fa87abea101f563a03508341b"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "4471f24ac5c5c77c30947a37404191c6"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "de3ffaeb1ea1e2e8080100564ba011b6"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "1add3457df9090428005b2cb6256cd30"
  },
  {
    "url": "timeline/index.html",
    "revision": "4fd478aca3b0ee36000987e76cdf35e8"
  },
  {
    "url": "views/about/index.html",
    "revision": "388aaf68d035f39ce6dcc293b33e6737"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "9cf7c3190e9a5bfb9d53e3563c2230ff"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "51687d8aac786b77646b2864468e0c34"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "65dcb80751de0d9b9cdcc5baf7cc81e2"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "28de8f2e7d676ae6f31621166314dc88"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "fe74187ce64b9186e5dbaba030098c0e"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "6fec88d0cc498bfff648c75099d24e0b"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "0a8a33608421f34276e1c509f80d0761"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "d411bfc8393a317f5c99b35d566dd75c"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "abba45492fa708a22659a1819a32aa77"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "673db5f204523b29f998ad557a5f6535"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "730a5f3bae69dbaa67395f580e18bdcd"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "277a2778067e315656dad721c8ea14d9"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "da2dbda042aef656b97df17231094078"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "d90b4478014903c1548bc984c47e50d6"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "a4d3f2295775b2ecafc886244ad2bd3d"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "69ebd2efe78a34f06543894aa8bcf6f6"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "0f2d6d382a00dc7eebcf767b7298b4b9"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "9870a072a70c17777fd838654ac05f9a"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "3b9a49f269206f61143ad4e1adb1011a"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "46af85feba469d709d83855fead9ac38"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "0e3b6dd1a2569134fd04b4274eb05823"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "bd8747204dc95dca5138db6d43041aa4"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "cf1966db0ec5a9780ab7e3fa6ce21636"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "2d8667caa680a3824b6cde514827ebef"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "d3aa99d44ec1e0b02c57abbff318ce4a"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "495e7c36a4d0d71bfe1910b640d4ea3f"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "ff06e9e6103602403c02c355d1639859"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "9a23fe5a3930b88c8c57c30e395102e1"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "ecdf718e25611d404aee1b5d5093af1c"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "a26046d4e01248c360086fbae30c7377"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "3c8b7875ee5716607e695575a847fe9c"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "2b4c11fa95a522b812efe3a9095c3335"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "0904d24a6b01868734c84a1e5ab1f190"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "4fbfc6a7fded18970d73acc26f8d495f"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "79190661ac191f3e77dedd694c20330d"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "36d26843c7317190edd784444f9bcd2b"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "d64ebbaae77a671e124cb69afc591c36"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "e3bfdf50c2504776ff1e7947df53c57c"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "627b52ad8ba75c2cbd39b3ccd50b36d7"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "a6693f1877c7b72dacf710929344ba0e"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "80e16c81ff64ec7ea5aabfb046c8e3bc"
  },
  {
    "url": "views/project/index.html",
    "revision": "d5bdc553226113927d0073cfbc81158a"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "326388fcfaac06973f6d3fcb781baa97"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "0b5944efb57d7f9c40c3c4c6ce538cd5"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "3de2af1e9a7031479578d60833a12112"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "1cfa5d1849b9e04b1f90ce3a2a7c6681"
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
