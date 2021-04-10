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
    "revision": "018186f39199eee28f996995d1988744"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.0f208eb6.css",
    "revision": "835688273ddd64c1b110c21f4c9f1f60"
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
    "url": "assets/js/1.806e9581.js",
    "revision": "8cec8d948a1b929ab5156b259262abc6"
  },
  {
    "url": "assets/js/10.a299d969.js",
    "revision": "eb988c81432f888a51fc608e74e30b6d"
  },
  {
    "url": "assets/js/11.d94e9d5e.js",
    "revision": "070b480506ccff00f8924f4432bebabb"
  },
  {
    "url": "assets/js/12.44ed928c.js",
    "revision": "6911108564bad548f3d756384bdee12f"
  },
  {
    "url": "assets/js/13.0e348e8b.js",
    "revision": "98ca01f33b49c088e3e7d895edc55715"
  },
  {
    "url": "assets/js/14.76faab7f.js",
    "revision": "124cc20ca7ac62c93543fa1d275d2004"
  },
  {
    "url": "assets/js/15.c89c101b.js",
    "revision": "78e4a049db8efdca95b186e34c868c29"
  },
  {
    "url": "assets/js/16.7604c946.js",
    "revision": "30b995ba96bc3846792b33acf8e94702"
  },
  {
    "url": "assets/js/17.218d868c.js",
    "revision": "db900385a9523c9b7da37cbd837294f3"
  },
  {
    "url": "assets/js/18.be0622f7.js",
    "revision": "03791756abdd0166e0eb663b1486bf77"
  },
  {
    "url": "assets/js/19.3d3cf02f.js",
    "revision": "f28e35a7357df264747d1d191f188dd1"
  },
  {
    "url": "assets/js/2.007020fc.js",
    "revision": "a512856137615802f4c75fd8b7bba926"
  },
  {
    "url": "assets/js/20.af4e4953.js",
    "revision": "299c802aa2308e0d97cff6663eb124e9"
  },
  {
    "url": "assets/js/21.f7e486f6.js",
    "revision": "9429adb51c9f89c5db9ff40391a99d23"
  },
  {
    "url": "assets/js/22.d18c8a5e.js",
    "revision": "d2c97bfa5ea7eabfd95f8ab0b6fdc807"
  },
  {
    "url": "assets/js/23.799f12f7.js",
    "revision": "3f16343d82feed3401f4ed486b8adb19"
  },
  {
    "url": "assets/js/24.7a66c606.js",
    "revision": "c92e94c6dccda889ae355bb6ab0195b0"
  },
  {
    "url": "assets/js/25.55a94aa0.js",
    "revision": "a233c63c2598da768469378e230804a3"
  },
  {
    "url": "assets/js/26.9ffdc0f5.js",
    "revision": "0e10fdc6a9dce753c78170761e1567fd"
  },
  {
    "url": "assets/js/27.0518236c.js",
    "revision": "0bec58357f947e065c7fa4c6f9e74f73"
  },
  {
    "url": "assets/js/28.0c2e90c6.js",
    "revision": "a97f6ca46b7ccfc835e4a49db99bddb1"
  },
  {
    "url": "assets/js/29.1a89887f.js",
    "revision": "f8ef2bd39f90f9c96f440f3e490c0a09"
  },
  {
    "url": "assets/js/30.2177012a.js",
    "revision": "502d562e8fbd44d504235bad48d467b5"
  },
  {
    "url": "assets/js/31.4b5eb930.js",
    "revision": "dafac6aa9990b65c75baed820f7dad8e"
  },
  {
    "url": "assets/js/32.3af526f1.js",
    "revision": "8541102db7b8d618265892d298a560d9"
  },
  {
    "url": "assets/js/33.ae467dc6.js",
    "revision": "2f38bd787be1ff42572aa66f2a0c16ba"
  },
  {
    "url": "assets/js/4.9399de0a.js",
    "revision": "97d0bdc814204324e0107e18e6ab7f92"
  },
  {
    "url": "assets/js/5.dac2baa2.js",
    "revision": "2411297477d1bcdd266e4e76d795b550"
  },
  {
    "url": "assets/js/6.c4317521.js",
    "revision": "5dfc767c0cdb33595b49b64560ec8398"
  },
  {
    "url": "assets/js/7.0fac8c34.js",
    "revision": "a0c08cef35c778d83d26509104244329"
  },
  {
    "url": "assets/js/8.2f7be112.js",
    "revision": "13842b2481c5e6db8cb362b867d4ab2b"
  },
  {
    "url": "assets/js/9.b48d5daf.js",
    "revision": "03065e9bc3bfc6528af085131235ce28"
  },
  {
    "url": "assets/js/app.f435de79.js",
    "revision": "ffbdbdee14849fdcee5984cc00c56d46"
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
    "revision": "89a864a8a84b00ffe9256e61c694dce6"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "bb14ffb848dc32bceac383ba78e59cdb"
  },
  {
    "url": "categories/index.html",
    "revision": "ab96d705b83eb1464fb855a47576f927"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "fd64c0050439fadc2867a6cf57816995"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "629a2becbe27e8242fee6298d78c9fbd"
  },
  {
    "url": "categories/other/index.html",
    "revision": "d8ae81df472f96dc9f5c1a64f3860478"
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
    "revision": "0ce67e6b141891a4a08d471ab53a99cb"
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
    "revision": "c77699aafff48e3d5fbb512e8ca50286"
  },
  {
    "url": "tag/array/index.html",
    "revision": "41f5df321ac50fd4ef5423f4b12cf81d"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "2a2d885aa9292edefc53471d81b35c53"
  },
  {
    "url": "tag/git/index.html",
    "revision": "fc8036f391a7c71e528740cd1dc5d965"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "ef371a5df4505723116f3827ab01d7ca"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "893d603ce10a49b0d1335ea65fb52bb1"
  },
  {
    "url": "tag/index.html",
    "revision": "0541035563d458f97a4f2316d08fa35a"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "37fb367b787d10d917e3ffd5d9ccd6ac"
  },
  {
    "url": "tag/js/index.html",
    "revision": "fce01d24d60d447a0c071d69e14b7b7c"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "1b13096d09d0f7b3267275a522dd8708"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "931ef50b8ff836744655d855a134580c"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "6d25bbf905ebcb99816f635384c805a3"
  },
  {
    "url": "tag/project/index.html",
    "revision": "e65052b420771032d9992fe887846edd"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "07c3131fcc16c4e5e608ebd36c6e8acb"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "c87427d71df98e7be55b40a3ddb6cf07"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "efa93c662478fbaafbb2239dde82c7f9"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "66e227c96b5195824a2de421d19a0c4d"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "14c219ab853a429220658b735e006ed6"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "0cd50b3b15667e0c330fa1e01b4c4609"
  },
  {
    "url": "timeline/index.html",
    "revision": "b91628fe4d2e20deb28fa2c65d2b4434"
  },
  {
    "url": "views/about/index.html",
    "revision": "c6f688fb465aad53050e5a4caf6a0b07"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "14a1b169d08e5aae2f6ff55c356e8b87"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "151c07d086868e207ad5fce4504933d0"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "966992a090a2afff6fca37a18a84fc8e"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "364b6f1524ed277331db11122f07265b"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "aef554635e72e8bd730f353125a67fde"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "7e8990ea845a31b0105187d6d26a2342"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "261a0807ac8e94e14be5716f1cfbee36"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "37fbd4d04e9ee165fd33682853800745"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "7d67d78f07dbbe187be47c3f5cff7043"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "0db832425d8507439c27ea59723a0d77"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "6e2e95c9bbe87f6ff702dff723b3bf6f"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "aa5f60cb1c2f4f5c11c446779d4674ca"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "f96ca056b2a94bb207a8ad2658335dc2"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "8f54efeac30f8364f4db6d3224f58cf9"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "8a75f004ae7175cb84f6a452671329aa"
  },
  {
    "url": "views/project/index.html",
    "revision": "c7b660c9692af0bf7041c817e776e961"
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
