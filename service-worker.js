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
    "revision": "86a6c9c803f1e6b922dbdfa501a7dd54"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.6b748862.css",
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
    "url": "assets/js/11.1c166b63.js",
    "revision": "a81d8fbcc1b90bb267c8d77b38207ff8"
  },
  {
    "url": "assets/js/12.63140fc4.js",
    "revision": "5d6b68897b02c4d382c4b2b1817c16e7"
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
    "url": "assets/js/15.ede59df5.js",
    "revision": "5fec3e5652224734042bd2e4eeb04618"
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
    "url": "assets/js/18.d7dd8047.js",
    "revision": "3a4af7879b7d377a16a15c8863d01841"
  },
  {
    "url": "assets/js/19.b4f5da65.js",
    "revision": "477acb3711b46e252b18fe6241e6b9a1"
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
    "url": "assets/js/21.3aaa74ea.js",
    "revision": "3418dff06985acbc044650b0aa40d084"
  },
  {
    "url": "assets/js/22.b1b95053.js",
    "revision": "8c7f01311cd63190a5b4632007115df3"
  },
  {
    "url": "assets/js/23.65b23cff.js",
    "revision": "e440f29ac9a7caf684af53b6cdbe342e"
  },
  {
    "url": "assets/js/24.6f7a5098.js",
    "revision": "52bbe8e5ab2292bfde8765a3843bc4e0"
  },
  {
    "url": "assets/js/25.9dcc79f6.js",
    "revision": "9a5c6813976e6fa6c8f724b0684141ca"
  },
  {
    "url": "assets/js/26.ed77d084.js",
    "revision": "9c720725678669880d242c475ae54602"
  },
  {
    "url": "assets/js/27.94954ee4.js",
    "revision": "bb6cfe2a73142d7998cad9d2687dcf9d"
  },
  {
    "url": "assets/js/28.13f12b09.js",
    "revision": "0ae7fd7b30c41a12c5dfb44a709f548c"
  },
  {
    "url": "assets/js/29.104eccca.js",
    "revision": "1dbb3cae1e9617674f5038c7e9adc87e"
  },
  {
    "url": "assets/js/30.7af8784b.js",
    "revision": "efedb7cf95163017eceae49bf7da296a"
  },
  {
    "url": "assets/js/31.451a5976.js",
    "revision": "bd1ec8ce2a6b0083d10a4a077bd9036f"
  },
  {
    "url": "assets/js/32.f790af6e.js",
    "revision": "2c7d2303acf4da0ff9c1ea4ed402ec6f"
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
    "url": "assets/js/38.e3c0b2ee.js",
    "revision": "5402d70e5e098b2df73b12fc6afa0010"
  },
  {
    "url": "assets/js/39.50a621c7.js",
    "revision": "18e68dccbb30bd3114e12b71dc89d40b"
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
    "url": "assets/js/44.1009f684.js",
    "revision": "2f48886d4f37ec63eaf621b6b33a25a3"
  },
  {
    "url": "assets/js/45.b4d2367e.js",
    "revision": "f6ec2a92a55a3e6c111dc8bfac7c8e7f"
  },
  {
    "url": "assets/js/46.2aff085f.js",
    "revision": "49f43315e816e1f588bfa0c447977d3a"
  },
  {
    "url": "assets/js/47.ef466c9f.js",
    "revision": "0e7fed861b29597a228ade1e8808e9d5"
  },
  {
    "url": "assets/js/48.c0e3ad3d.js",
    "revision": "b6da1c50cd67d8c83da5d40ef6154856"
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
    "url": "assets/js/50.06fc1782.js",
    "revision": "f228de609d7fab8080a3117dd62def60"
  },
  {
    "url": "assets/js/51.641352a7.js",
    "revision": "cbab74301527e3ad77ae4897893ded1f"
  },
  {
    "url": "assets/js/52.5b113c8a.js",
    "revision": "0066d8cbc5f6e1a81f18639c58917b9b"
  },
  {
    "url": "assets/js/53.0087bc30.js",
    "revision": "16a05839184c0d4bf8185ad40f3bd397"
  },
  {
    "url": "assets/js/54.0d66d3bd.js",
    "revision": "9f15e7be6a10d5b75adca4efbd98d25a"
  },
  {
    "url": "assets/js/55.8f248886.js",
    "revision": "00d4e9bf56822d3f2a831b6e7d6dce16"
  },
  {
    "url": "assets/js/56.c37a0e9e.js",
    "revision": "3e554ec6c5596ee33b9aad9e6459793c"
  },
  {
    "url": "assets/js/57.6a5ad682.js",
    "revision": "8aab13e8484884efa780775a91c6277a"
  },
  {
    "url": "assets/js/58.ecfd8eb9.js",
    "revision": "b8d89bc6515d8bb1d81d8a19fcc04f62"
  },
  {
    "url": "assets/js/59.b064f996.js",
    "revision": "91998ff540a9db608084aadb26427f20"
  },
  {
    "url": "assets/js/6.3bd14d99.js",
    "revision": "9045e0447eb6e0cc6f2a1c7234a69692"
  },
  {
    "url": "assets/js/60.715a5ce6.js",
    "revision": "aa2c8fc687e042fa8fa9319ee16d6fce"
  },
  {
    "url": "assets/js/61.f2fd8ed6.js",
    "revision": "cc98756cbcbff7c208b48e751160b1c6"
  },
  {
    "url": "assets/js/62.e95349f1.js",
    "revision": "a0ca11a0781f7066f77ad35620ea2f7e"
  },
  {
    "url": "assets/js/63.6b325b48.js",
    "revision": "cc164d2015137128930e2912ae9c3a76"
  },
  {
    "url": "assets/js/64.87834a38.js",
    "revision": "255cd9d614f5f77dfd7417588bcef57c"
  },
  {
    "url": "assets/js/65.dd150793.js",
    "revision": "78b18de97fdb5670ade168aceee0a35a"
  },
  {
    "url": "assets/js/66.448d5c7c.js",
    "revision": "cbb8cb1010a7acc73ad9ae43db26211a"
  },
  {
    "url": "assets/js/67.906378f6.js",
    "revision": "686bb74bc9b818f4cd52dfc00555907f"
  },
  {
    "url": "assets/js/7.dbd27f9e.js",
    "revision": "63df5a9e6928d9c387f70ead9d24e2af"
  },
  {
    "url": "assets/js/8.ef8a3063.js",
    "revision": "92033acdd28e2b21f9a2419ccd199bd2"
  },
  {
    "url": "assets/js/9.95bc360c.js",
    "revision": "7c2c4d5f747c42afbef39d09de262a27"
  },
  {
    "url": "assets/js/app.f86b1c13.js",
    "revision": "7bcdc99511fc15a9743f49da60144b54"
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
    "revision": "425eaf24566a54c55f4e88ddf874fa65"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "311090351c61f88b23129da775987299"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "09f2f78365c34592c026a914876b860d"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "7316a333cb947abcc87385b1f3916b48"
  },
  {
    "url": "categories/index.html",
    "revision": "2aed107d658560acd2230cd8006a929f"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "44c8171baf43e308a446b1a6945422dc"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "45a7530dfccb5b18f5b7f864fec7d144"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "2cc328dd787805c7abca94b201f8187e"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "2a012b31c3f60d36284f792f666beeec"
  },
  {
    "url": "categories/other/index.html",
    "revision": "4597f751774c054850d38b829745b122"
  },
  {
    "url": "categories/Reactjs/index.html",
    "revision": "3a7f808da779e9df1c32fa933e0bd86a"
  },
  {
    "url": "categories/Vuejs/index.html",
    "revision": "3d635e9372a7616df6232940e7368fa9"
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
    "revision": "771ba1a71ca48aae2c9f3289fd96bdce"
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
    "revision": "993595505bea3a3391bef96c0baa9c14"
  },
  {
    "url": "tag/array/index.html",
    "revision": "4b9075eff755cc3797c7cf72d3b574fd"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "7769c295f8e9559c705c1bfdebdb75c6"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "de6783bf34ac6c7f80b5872b6e7d436a"
  },
  {
    "url": "tag/css/index.html",
    "revision": "c08e53b2f4bc8e4980f9dc329af26039"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "d02e659957936fd145d51d1bf28db4e2"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "05cfed8e1c6fde843d5a4ce86f715d86"
  },
  {
    "url": "tag/elementui/index.html",
    "revision": "012ae0b9f7ffd29215177c91021cb789"
  },
  {
    "url": "tag/git/index.html",
    "revision": "af3a457d428ba6ded6f0eb548ed1c6e5"
  },
  {
    "url": "tag/good-writing/index.html",
    "revision": "58a28931e6cae393e1d9a74194400c46"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "7af54fd65870670494408f3331910331"
  },
  {
    "url": "tag/hooks/index.html",
    "revision": "5fbfe8824f3b418a46d3d1497e0981ef"
  },
  {
    "url": "tag/html/index.html",
    "revision": "9428889bb76c851043e8d03e617882a8"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "2b82376b7b14fbe34f795e5409d6ac38"
  },
  {
    "url": "tag/index.html",
    "revision": "f13f16c64d3418eb7d2ea25a90889ac1"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "6ae210474db7296636cbde95c967f175"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "0e6f0830d92f60a3bd4f5aa871093643"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "2bc50817e82b795a468f597bcdce4f50"
  },
  {
    "url": "tag/js/index.html",
    "revision": "23d9402ba17b3eb91ebec7b7fffc0959"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "aab9b2d540d129652f8d19e9b77b7f47"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "c673c14d7e1e339843168b54285e23ff"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "ce52364ecb030953e0d0ec19aeda6eab"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "2915759db09a98567fb1d854bdebc121"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "27fe9d55be76a2fee34774f410f4dac2"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "9078ed853637b3717f6b87cfbd10a456"
  },
  {
    "url": "tag/project/index.html",
    "revision": "a8151c30c8ee15d97eeb7c614923a48c"
  },
  {
    "url": "tag/react/index.html",
    "revision": "fe356a8554bc0bdf13466696074b7f96"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "4453318622d516edd1c6e6154958fc93"
  },
  {
    "url": "tag/router/index.html",
    "revision": "fd7c76a2a7d06f9af1d8edab44ed429b"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "5c68aff463e85ec8bc710e1feff85dba"
  },
  {
    "url": "tag/style/index.html",
    "revision": "1be196f956ec4a716a088b615c779864"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "456b2bb314c66b6f36aa7981e9d133b7"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "4fb4734f60829fdff872843fcdf520dc"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "d4aa2a3ef3ea545cabad0dec2128d8b8"
  },
  {
    "url": "tag/v-for/index.html",
    "revision": "1dffa71cde8503f7c675af1f03193011"
  },
  {
    "url": "tag/vue-mixins/index.html",
    "revision": "b71629051db06f155b6c17e22d3cffa9"
  },
  {
    "url": "tag/vue-qualifier/index.html",
    "revision": "c0bd3f6483e1f39d7f4490aaae3cb426"
  },
  {
    "url": "tag/vue-scope/index.html",
    "revision": "da10daf7f94e82e95b046d882ef13e6d"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d699cbe8ab77a00b29068c1fceea5d96"
  },
  {
    "url": "tag/vue3/index.html",
    "revision": "b3a98ec6b392e20a229e7303e0c04f44"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "479964fa81f9ead2fa9554daef467923"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "eb01cb8a6f5ad79bec27d10422377314"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "b833a4fe17ea79b8f9e6d3b96a55dcd2"
  },
  {
    "url": "timeline/index.html",
    "revision": "6bff284544581682dcd6c17a870c85a4"
  },
  {
    "url": "views/about/index.html",
    "revision": "5348ae71348a91ddc93da58a0bc508ff"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "51e225cb30b716e481ee8f11659001ef"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "70eac3cb2a083f1ddd2353c89ba4a61d"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "9e02a3c3d6ce18d2c3abd78ba9f03bc7"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "9e311c495de42a23ea42a2a481ba9fe9"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "a64af45a920779b130a210da11d8a5c0"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "83c7468d8ad2bd4f52840f39f5e5baaa"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "fd9873f14e646aaffec1f262cb327f5a"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "8ed822ce49f00fac1b0a2346dcf41c96"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "0459fc3115e93aab806d7f5f274cdd63"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "c9734bd1d4434f55ab8b768caf18540a"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "78bcda302338bc899878dde60c598498"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "a1c1555e72974d9d5a3c394b0dcdc247"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "3577923c06fff5b751f9ecbc96135da0"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "9b85df303eeb614808babb364606f51b"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "3b9772f72f8797d84957ccd13ac62810"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "6029ffb7583379cb6ed61319385ec3c0"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "79fafb0b52cac975be86daf131d1934d"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "d6d637768e110bb9916b36f3fb9d106e"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "e2557eac515f3254f246e4c5eac318fb"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "9d4e8e254b85b79d14b424d622a0ed2b"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "0bfa1d6716ac8eccc2df5d9fdac00831"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "a83be21e26a61467c70c8bccff2940f7"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "4cd0b3d039cf2a955b81908290c6c30b"
  },
  {
    "url": "views/JavaScript/promise-async-await.html",
    "revision": "c7e8fcac003dca24c64c6325555b1436"
  },
  {
    "url": "views/JavaScript/promise.html",
    "revision": "e715622aa9419f2054711ae91c97173b"
  },
  {
    "url": "views/JavaScript/prototype.html",
    "revision": "b60ef94ee14ea563a550f8e46445f97d"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "95f98f19e7f66ce1bf170f2e402295cb"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "350909e72f7f8afe3234fbbaa981bde0"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "182381b9aee1df54edce1d1fe2e66d13"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "7f7d15667bbbac5dddfab597f4ce5815"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "1e44732e62d73f80d607104a14141487"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "8b5af7c2c0caaa504e8be942151f0607"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "13dcc0431e4ee562a89198794966147c"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "6d74dab902f972d574688f851d64dba8"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "52c92274820fe56dae06aa0d3465457a"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "a66930f3bc2d51dee8cdb64ea43fc107"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "0b3af67b6f1a39622b733cec34857337"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "4fe51769030e5c90fcc65cf3c913e02e"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "dbe488e22c2af54d8b60bf2b7d842077"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "347ccf2c0c60be4bb74c78adda740f87"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "a8ef52dee9c11a51ef04b0d9f4e25d50"
  },
  {
    "url": "views/project/index.html",
    "revision": "a3b31a3eec3dc3bff7cdca6760e88339"
  },
  {
    "url": "views/Reactjs/hooks.html",
    "revision": "ddfbbb8c8c7c110ffe37d80f6123e181"
  },
  {
    "url": "views/Vuejs/element-plus-upload.html",
    "revision": "11d8c8bea0acddb5a7e8ed7adc4dc2a7"
  },
  {
    "url": "views/Vuejs/v-for-optimize.html",
    "revision": "a7c525717a518f8373aac0fc1aef8daa"
  },
  {
    "url": "views/Vuejs/vue-communication-mode.html",
    "revision": "63399a8251ff16c2d6fc912bbd35464e"
  },
  {
    "url": "views/Vuejs/vue-router-model.html",
    "revision": "5352c32f6d864669d2f2e3066dd9a1de"
  },
  {
    "url": "views/Vuejs/vue3-new-api.html",
    "revision": "7d22c553a5b59d3844348f31b91a0c0f"
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
