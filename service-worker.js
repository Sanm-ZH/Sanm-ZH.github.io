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
    "revision": "ce08bdc6db75d09c47080a64c3f852dd"
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
    "url": "assets/js/11.73d9fe59.js",
    "revision": "7b83ad51c32827e00408a4d65ebb5e93"
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
    "url": "assets/js/15.72d431ca.js",
    "revision": "8b99ce54788baeea49b92e437010143c"
  },
  {
    "url": "assets/js/16.3bc76cf5.js",
    "revision": "35ae54bec3b141c86ec1dd7e8cad9752"
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
    "url": "assets/js/21.f2a3e9a7.js",
    "revision": "198e4553fd721ccdac1a74a9bc634222"
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
    "url": "assets/js/30.154296b0.js",
    "revision": "37dd2396fa54568c6b38aea127c31bc2"
  },
  {
    "url": "assets/js/31.451a5976.js",
    "revision": "bd1ec8ce2a6b0083d10a4a077bd9036f"
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
    "url": "assets/js/41.e4a6c381.js",
    "revision": "4cc7762e2ef656ce8d7fe9eca06de490"
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
    "url": "assets/js/45.1cba6875.js",
    "revision": "67f7fb37348c1da936f27bb244fae870"
  },
  {
    "url": "assets/js/46.dde7889c.js",
    "revision": "d5712dd654edad38169159d15e6e82c9"
  },
  {
    "url": "assets/js/47.57c1b340.js",
    "revision": "42f9afcce4d51faa354f5818dde2b75f"
  },
  {
    "url": "assets/js/48.0f725fe9.js",
    "revision": "492645bd58227859616ab790749ae077"
  },
  {
    "url": "assets/js/49.71d5efd0.js",
    "revision": "c810aaad3ae0d56b2c1affb17a5a1014"
  },
  {
    "url": "assets/js/5.eef939d2.js",
    "revision": "bebf86a9ff48608f03df079be2f2e9ab"
  },
  {
    "url": "assets/js/50.29b49ddd.js",
    "revision": "ddfb1d1a2d6e99b2f75fda5a64742626"
  },
  {
    "url": "assets/js/51.a497d3e7.js",
    "revision": "2f6bf7fb754034b2a37d7c5ef62ed547"
  },
  {
    "url": "assets/js/52.57704cd2.js",
    "revision": "accd8ab02da8af9fc94aca3d0bbd9f8c"
  },
  {
    "url": "assets/js/53.228ca87c.js",
    "revision": "d07797431e23265d697e1ef8fdca8d73"
  },
  {
    "url": "assets/js/54.97257d43.js",
    "revision": "de518b74d98573995c93a3ad6e06f5d8"
  },
  {
    "url": "assets/js/55.898e8999.js",
    "revision": "39e9164539f2f9159fc444d6be1ec17a"
  },
  {
    "url": "assets/js/56.76d31157.js",
    "revision": "bb21ffd5b154a262e1f81c2868eb2d01"
  },
  {
    "url": "assets/js/57.3df8accb.js",
    "revision": "e5c14cb79bf52e910057f53a995d97b0"
  },
  {
    "url": "assets/js/58.6ee68bfa.js",
    "revision": "abc8833c7fb2f2ea5abe84d448b2832d"
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
    "url": "assets/js/app.949dc62f.js",
    "revision": "bd4f16d554a0642b7fa08807a1e9e14d"
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
    "revision": "821fdc95270914f04cd5378e2cbb1842"
  },
  {
    "url": "categories/bash/index.html",
    "revision": "98dd754a642d97440a65699e4d4844db"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "2b4c33aff5625f01a30f8a7b7149eb01"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "6745c045751229a5498a40fccf9dec44"
  },
  {
    "url": "categories/index.html",
    "revision": "f3b00573ce684e5d2ed5c656ffae1be2"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "a7ed1de087d7f2c1071e14ef65c68768"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "5bd32c5645def25a24f30057aef936ba"
  },
  {
    "url": "categories/JavaScript/page/3/index.html",
    "revision": "c012553504de79cc6f94192586b372d4"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "071ff196e3ace16f0336f1c7f0f54002"
  },
  {
    "url": "categories/other/index.html",
    "revision": "7a8e217fab183f159d8687c09b8019b3"
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
    "revision": "f50fa24b4864efa1a01ca60666aaf2a3"
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
    "revision": "278502a3fd3eaefca7f2b4547fe0aa38"
  },
  {
    "url": "tag/array/index.html",
    "revision": "7c74f392b354fbfc2b09bc8a809ac276"
  },
  {
    "url": "tag/bash/index.html",
    "revision": "79ec9589b4d06e24f61532d51f7ddfa7"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "e033d43146a1d3dca06c37e0e8b670aa"
  },
  {
    "url": "tag/css/index.html",
    "revision": "4dafa6d69b0153e3c91c465ef9763dfa"
  },
  {
    "url": "tag/Dom/index.html",
    "revision": "7dd79dd624d32e81b1cf5865208f42a9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "7a0d4ee5e3104b0b34ebf35abb5884df"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "0e1975a3fbacfaaf9148915f27f04ec2"
  },
  {
    "url": "tag/html/index.html",
    "revision": "87d2210090994a6587ec5b43fbe42899"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "7b7d4da273104f2b7c436acddeee29ac"
  },
  {
    "url": "tag/index.html",
    "revision": "4814a8e1c281899ae1dcd15cf13749e6"
  },
  {
    "url": "tag/interview/index.html",
    "revision": "2c9e25d78129dace3dfa9eb911f2c8f4"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "5735d6e12d7a792cc3360fb5a3814bbc"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "b07d40bc079e664e61801b977cf8f39a"
  },
  {
    "url": "tag/js/index.html",
    "revision": "3e318be3bdd979be98512722dd834d67"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "ac405701f61ef1d491d7587d88dfb448"
  },
  {
    "url": "tag/js/page/3/index.html",
    "revision": "c13a8f324fd93c716f809d183517519e"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "b1af1f06c8ad88ee4cf78c010bc1cf41"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "591bfb7245136ec8a75c8ae090d393f2"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "347844d72163edea3b5929ece76dc14d"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "55d7bd2f87d7fb13944258c1a9d260f2"
  },
  {
    "url": "tag/project/index.html",
    "revision": "3b9d5ecd2eeb06103978b56895262626"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "ea8ecfeceb762ac171cfc416ea7cae18"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "59028faae91e4fd2f5e7f44dcba33c45"
  },
  {
    "url": "tag/style/index.html",
    "revision": "899d7e311daf7d9c5e4a59be6d59be25"
  },
  {
    "url": "tag/ts/index.html",
    "revision": "85a76c5ae15b4f18d4d0be9d95bdc440"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "75360be976d023b3f5c71b1086b26d57"
  },
  {
    "url": "tag/utilsFn/page/2/index.html",
    "revision": "b01b9f4f5233ae5890dd9ba4420252c3"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "cc6e702a7cda23efa71d25a05da36d48"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "f07b8399e0cf913052922fcdc652380a"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "36dc39568da0cc124c6f2c2655c4168b"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "f038a6961ec1f40080ad5f713d88440f"
  },
  {
    "url": "timeline/index.html",
    "revision": "c694701c5ac6542cde40d4c41c6e9f81"
  },
  {
    "url": "views/about/index.html",
    "revision": "15b566b534e26c75b6381fb98e5bae1b"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "f09363afd572db7c39d72947112c0328"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "3468a3536d38c1fd16ee7f2c9c4db6c3"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "9dbb7374562520c9e2a46a8a3b3fc6d0"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "d93b0d0655a324c47774bf8defeddfdc"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "251500cacc501cc889a3063a48977023"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "a4ac399cb29261276e47ed9d7bc68d89"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "eaa30cc245130a49873a69db3b9e852c"
  },
  {
    "url": "views/Css/box-model.html",
    "revision": "11af23a1e2b50f03acb247ec4bb2c43a"
  },
  {
    "url": "views/JavaScript/basic-typescript.html",
    "revision": "90f01b5f5639792ac9f966631eb5876d"
  },
  {
    "url": "views/JavaScript/bind-call-apply.html",
    "revision": "b9bab2ad8fd69ded2e996feff1c3f0cc"
  },
  {
    "url": "views/JavaScript/closure.html",
    "revision": "b9784bf3a4d198454a39a9ea79f7a0b4"
  },
  {
    "url": "views/JavaScript/color-convert.html",
    "revision": "27b4070db4a84a74a481c7d4505982e4"
  },
  {
    "url": "views/JavaScript/copy-deepcopy.html",
    "revision": "3e16c57de30d1bc621ad5324100b39e2"
  },
  {
    "url": "views/JavaScript/debounce-throttle.html",
    "revision": "2433d785043103e81473abeb9b95539b"
  },
  {
    "url": "views/JavaScript/dom-operation.html",
    "revision": "a554ef2c91fad50493aef678dfaa72b7"
  },
  {
    "url": "views/JavaScript/es5-es6-array-method.html",
    "revision": "640267899f58d4cedf02c53c8b55d71f"
  },
  {
    "url": "views/JavaScript/ES6+.html",
    "revision": "8a6bd600d63cad8e6ae8ac2e8e98641d"
  },
  {
    "url": "views/JavaScript/function-programming.html",
    "revision": "2288e3e9007a9e9057a7c630ae5dfd34"
  },
  {
    "url": "views/JavaScript/interview-question-3.html",
    "revision": "68a70d06c359f0f280fb62b333e58967"
  },
  {
    "url": "views/JavaScript/javascript-10-snippets.html",
    "revision": "96125da88196b7c137d00e8ecf634db3"
  },
  {
    "url": "views/JavaScript/js-skills1.html",
    "revision": "c3585ea6ae953aef933c60adbde57f7f"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "10c4d1dfa943cb9268edebdaddfa100c"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "255c1541d192a579da4b3d6515a5916f"
  },
  {
    "url": "views/JavaScript/regexp.html",
    "revision": "f9b22c7b12916c145dad0019cac484da"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "7a07a99174662cd85db2c5ae213c9527"
  },
  {
    "url": "views/JavaScript/set-map-weakset-weakmap.html",
    "revision": "5d3c9a4207c0078676e7a6099d2e1ae7"
  },
  {
    "url": "views/JavaScript/single-js.html",
    "revision": "50d25b127ca7193791396471161cdcd9"
  },
  {
    "url": "views/JavaScript/this-function.html",
    "revision": "3cdd50c7666019f1e3c7bbcd6d325e59"
  },
  {
    "url": "views/JavaScript/type-oriented-programme.html",
    "revision": "d7609129da88f0ace65aad5e8e9f48c3"
  },
  {
    "url": "views/JavaScript/vue-good-practice.html",
    "revision": "d6e1f8c43ba63a8fffda795c97576fe7"
  },
  {
    "url": "views/JavaScript/vue-mixins.html",
    "revision": "f8c6f83affeb625e9ee91695915f357c"
  },
  {
    "url": "views/JavaScript/vue-qualifier.html",
    "revision": "b22089a3c6dae32c9b0cc9daf5c4d108"
  },
  {
    "url": "views/JavaScript/vue-scope.html",
    "revision": "e920efed87f02753bb16c35195059229"
  },
  {
    "url": "views/Linux/bash-find.html",
    "revision": "2a11cabfda26cebd52265473528f37b3"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "6ed5f11e321e5ffbcd4e698308492ba7"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "b3af245a36c4d2308e94ae68137e76fb"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "cef26708e425019758959aa6cbb9575f"
  },
  {
    "url": "views/other/project-panel.html",
    "revision": "777a51966920cc1700d7188a262a56ed"
  },
  {
    "url": "views/project/index.html",
    "revision": "158d248660f8fb1543f01819847f99d2"
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
