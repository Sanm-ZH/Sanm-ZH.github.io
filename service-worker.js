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
    "revision": "1fc875ce4a1c28f2896837a80b4c1048"
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
    "url": "assets/js/13.1024a6df.js",
    "revision": "cf0077a41f1157ce2ee7692828bdb57a"
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
    "url": "assets/js/16.21f45953.js",
    "revision": "a960a15b3dc9747acbefaaef3344de12"
  },
  {
    "url": "assets/js/17.93b68a38.js",
    "revision": "700c8a5616adaec4228b608fcc86b726"
  },
  {
    "url": "assets/js/18.9fec13fd.js",
    "revision": "28a82028e8b43ca7c50ea042cb48b02c"
  },
  {
    "url": "assets/js/19.2c01303c.js",
    "revision": "1860657513c2a9749cd07217515b5c9d"
  },
  {
    "url": "assets/js/2.84eb2001.js",
    "revision": "2ccff0e034acc1480cb2f1350e6c5fec"
  },
  {
    "url": "assets/js/20.c0462edf.js",
    "revision": "316a39ed4371690f7290b82d1a6da3f7"
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
    "url": "assets/js/23.d81feba3.js",
    "revision": "7b6d264f249afe25373e5ca684e8f6f3"
  },
  {
    "url": "assets/js/24.3eef2380.js",
    "revision": "9fa567c19fae71f3d4437b5e15df07ad"
  },
  {
    "url": "assets/js/25.38a4b48c.js",
    "revision": "19691a7805ec14893035f998f39433cd"
  },
  {
    "url": "assets/js/26.b58b9a79.js",
    "revision": "e3512e519743c95f4b3352b0c19c6382"
  },
  {
    "url": "assets/js/27.fa97fd20.js",
    "revision": "504fae6375a8f1896892bace69781f6a"
  },
  {
    "url": "assets/js/28.004762b9.js",
    "revision": "f8f7cf9763729bd09593e8dac133ebde"
  },
  {
    "url": "assets/js/29.a477a624.js",
    "revision": "14a261df0e58d31206095cb13914459f"
  },
  {
    "url": "assets/js/30.3968e4af.js",
    "revision": "367ac3fff960a7b1bfd8397baf1a9c8d"
  },
  {
    "url": "assets/js/31.c4e914f9.js",
    "revision": "da352af82794f707954162589c312c8a"
  },
  {
    "url": "assets/js/32.c923d325.js",
    "revision": "8a578d63d450bf0ba92381e71129e27e"
  },
  {
    "url": "assets/js/33.b8c263d0.js",
    "revision": "0b1453b9ca09c5951549502557d1d132"
  },
  {
    "url": "assets/js/34.c0f6c7ec.js",
    "revision": "c2b082c9c2df44849980dda8ee4cf1f3"
  },
  {
    "url": "assets/js/35.6f6f63e4.js",
    "revision": "9301dec5c1948baa3376f7d3f24ccb27"
  },
  {
    "url": "assets/js/36.11a57d38.js",
    "revision": "e24e2531af3a96cd0b2b92c7b4c9ac7a"
  },
  {
    "url": "assets/js/37.fcafe217.js",
    "revision": "20c27b63da8aba96f8f315cb715e444e"
  },
  {
    "url": "assets/js/38.6917ae90.js",
    "revision": "2969135a13c80e510762e84bdafcf39d"
  },
  {
    "url": "assets/js/39.f3e0ea2c.js",
    "revision": "4a288cc409eaa84af0b0298cc92e9c26"
  },
  {
    "url": "assets/js/4.89244cac.js",
    "revision": "392b3b37f5ad45267c83349ce3c594a3"
  },
  {
    "url": "assets/js/40.23f413bb.js",
    "revision": "282dc37002bd28a79a5c31bb8e4b4eb9"
  },
  {
    "url": "assets/js/41.7c9a7f1b.js",
    "revision": "095c91892cf2f9f266daff1472ef184d"
  },
  {
    "url": "assets/js/42.b5fb2610.js",
    "revision": "713a8b3ebd9e5f524861c931fd69f581"
  },
  {
    "url": "assets/js/43.72b6c283.js",
    "revision": "524e96f255034aee4eaf88d9b805619b"
  },
  {
    "url": "assets/js/44.77357df3.js",
    "revision": "6cc25e759b0a14337b229a31c620ad39"
  },
  {
    "url": "assets/js/45.eb135ba6.js",
    "revision": "e3cd859a045ef27c14ef5ad39db26bcb"
  },
  {
    "url": "assets/js/46.95d9ca14.js",
    "revision": "f7f35e8e6b2bd641760d82d403c3ebd5"
  },
  {
    "url": "assets/js/47.e82df908.js",
    "revision": "5531e78e2656cfed94993c6c24cc2d47"
  },
  {
    "url": "assets/js/48.43a7326f.js",
    "revision": "f4810502bf961aa86c4437eac23954d6"
  },
  {
    "url": "assets/js/49.58aaefd8.js",
    "revision": "29bdbf0dd2b655eab5c39686978a273c"
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
    "url": "assets/js/app.9a401162.js",
    "revision": "0be667f459bfb53fecb81fe7369b94f8"
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
    "revision": "19f13df76c3fc1ef403c6234a3ce0ac0"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "ffdbc4bea60ea5868953b502c24aaa7f"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "6bbc9d229cce45f3572cfd11f46d9e48"
  },
  {
    "url": "categories/index.html",
    "revision": "b1b04ee0fbb482b201918b3ab1dde3f0"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "cf6b263dc37c9ac4e72b0315392949da"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "a5ff26060ced31941a71cd9c0f15c3ef"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "3ab0a2d7e4466742e1f7fa4c5d7cd7d6"
  },
  {
    "url": "categories/other/index.html",
    "revision": "006f0f5c02453df1cd8842e42a1e7fc1"
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
    "revision": "1e82ddb0cff0c5c8469e8df87b55f78e"
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
    "revision": "4614992f434a690f201db24beb493291"
  },
  {
    "url": "tag/array/index.html",
    "revision": "cca8ec86ff330a2a20321a1ff8334aa7"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "26c11bef631c4aa9715861534b6ebb19"
  },
  {
    "url": "tag/css/index.html",
    "revision": "15a8f3b76bfc279525756c2e402be792"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "4ebbc60ab86806d13b1e8defbdc4e632"
  },
  {
    "url": "tag/git/index.html",
    "revision": "51a897a9047664c0c3d143a49934b18b"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "d2f3ce11df03e2d94dc98fe7ec114ff0"
  },
  {
    "url": "tag/html/index.html",
    "revision": "a97e91b54aa0971c950e1accaddeafd1"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "1cfda0e43c958599a403b2ef296b8448"
  },
  {
    "url": "tag/index.html",
    "revision": "eb5dcaec2219de488218dd0d120e254b"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "da05947fe621909f23906994fa225561"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "c7a4b1f0102071b45305243a3d0b6971"
  },
  {
    "url": "tag/js/index.html",
    "revision": "51f024c863558f22cde23b8fbf63e9ab"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "1ac3548ae49237d283dab6df1e4eb7fc"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "8d0cff682951bc16c1d2800449bdf1b1"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "04a346dcbe2689c27f4e321a3ec64cf8"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "403de37d19120efca2cfe99fc130d3dc"
  },
  {
    "url": "tag/project/index.html",
    "revision": "ea4903199e655d4aaef6795273912f48"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "ce0e4a5853d4bde6be1bd79bc66088af"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "d6a5ad4fa9fc4d8bff38f47d1ed4b5f9"
  },
  {
    "url": "tag/style/index.html",
    "revision": "ea9aef9db897bd9eb7a0dca54f3d8134"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "af229561cde94316a59ce6c0ec006aa6"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "a963f262219e50471788ab1869302c5c"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "7191ef9e26a3d611ee0d30af236f3b8f"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "b6e8aa4e5d43a48569faa190a59d57e4"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "bebf32a616b6359f4996b30a8c230560"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "90c44d1526c0d35c6da2c420f01e91d9"
  },
  {
    "url": "timeline/index.html",
    "revision": "76e00cd44323b15b000da402f8ec43bb"
  },
  {
    "url": "views/about/index.html",
    "revision": "ee4c42b585b2771d7fc776dc05b7d7ad"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "647f3bc734594e5e913884bd25375e9c"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "a818cd3307421e78ab740b86abd4dcd6"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "6194d6b56d40c6dd565931744eb8e98c"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "0358c466e9d60c9ed445c29188846dfc"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "338804165a191fb2d4132d48bc7d4aea"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "7bd9a98a4cc58ba41f7733d4dcb59665"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "e49f9887429def2e964c750a6baca9e6"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "42262d4fca94cc3e5fe14647c371cc98"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "ab212afadc8a79436fa1824e04174e6d"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "fb1eec62cfec0ff9537877a619aaed20"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "6c44bcf8714f69b1c322409c65fa7e19"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "ba9eeeb9bda70ff90216daa9852ccac3"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "b12d77f497153b9f41214019a0341683"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "b2ede969533572b5455fffde85e27301"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "269e4ecb41d2a95f12c8b26e33c36bac"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "58eebec15f32e7ab21a6cc1f76542ea8"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "e659c969e8ff8e2b815e81db5060717d"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "b61830c4cbaaca89fc2ca91eecf35df0"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "821f855fcd8741010a804473c7faf846"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "77813961c712a4ce3fd8cd6734b5c0ac"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "becfcdc6219db0fd18f2e513f23e3d55"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "3ae713dfa3886615b57864218e7739cf"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "cfff5bb81555efe11bed8434be0068a1"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "f63ddb72d54b0f7265ca6da4bb402b80"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "e60dfe1b65e3ada2859b371588eb6b6d"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "454e85a14594910bdd7674dff32e1972"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "2846da4258cbc3e18984a6b525847f10"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "2c3556e3429dacf6ba51aae597278181"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "2c79cad51bac11427bce3f829e4d5699"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "09c62989cc601198bf5d5a998508b9fd"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "caed8deab89aec7b29af2b0881eb9905"
  },
  {
    "url": "views/project/index.html",
    "revision": "44847c09f43082e1d34816707de35066"
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
