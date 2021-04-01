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
    "revision": "288dc3f237e206f1d8a11431bff7e1b8"
  },
  {
    "url": "about.jpg",
    "revision": "2da2d69259bd7d9a60eae59be183b9cd"
  },
  {
    "url": "assets/css/0.styles.9a610208.css",
    "revision": "5997dcbc22ff1e78108656c0b684b99d"
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
    "url": "assets/js/1.3ff2a791.js",
    "revision": "c97d5393418422851e4dc6e4011c981d"
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
    "url": "assets/js/13.3136e5ff.js",
    "revision": "5726125898959d39066d83edd3d94226"
  },
  {
    "url": "assets/js/14.48e998a7.js",
    "revision": "3fea7d47943b1829c8d8ea0b7fa5cb2f"
  },
  {
    "url": "assets/js/15.c89c101b.js",
    "revision": "78e4a049db8efdca95b186e34c868c29"
  },
  {
    "url": "assets/js/16.1bbfccec.js",
    "revision": "4307c22b9b9108f8c9760c9b940dd4fc"
  },
  {
    "url": "assets/js/17.d5bb031f.js",
    "revision": "d130c344f428e562739b6c19ce966778"
  },
  {
    "url": "assets/js/18.1d8e9486.js",
    "revision": "d7d41b079bada4973c0d63191b5c6613"
  },
  {
    "url": "assets/js/19.86e29277.js",
    "revision": "5bc94e9e0a02b1d0e8701ee1029a762f"
  },
  {
    "url": "assets/js/2.007020fc.js",
    "revision": "a512856137615802f4c75fd8b7bba926"
  },
  {
    "url": "assets/js/20.c644226a.js",
    "revision": "f28d8578c1e7d7dca8f13b827725f254"
  },
  {
    "url": "assets/js/21.e1a8c117.js",
    "revision": "6c180948f68b3d22cccde39f829195a6"
  },
  {
    "url": "assets/js/22.b5d5fe53.js",
    "revision": "93920a224129a812a41001fb2aec22c8"
  },
  {
    "url": "assets/js/23.b82bd1ac.js",
    "revision": "5f3f72fb14e43e6f03baf64e783a2206"
  },
  {
    "url": "assets/js/24.68ce6e0a.js",
    "revision": "47cf5991b784c82d8d13c4688e5e986b"
  },
  {
    "url": "assets/js/25.5017728c.js",
    "revision": "b4d694f7c5bc737affc26ff92240765a"
  },
  {
    "url": "assets/js/26.b886feae.js",
    "revision": "4b819c886f6e9b518313964934a62c3e"
  },
  {
    "url": "assets/js/27.9d762c8d.js",
    "revision": "c2de54e82a05e14e7655ef873af0cc98"
  },
  {
    "url": "assets/js/28.658bcfd2.js",
    "revision": "36130c19d19cbffb99c039a352256396"
  },
  {
    "url": "assets/js/29.533a0739.js",
    "revision": "70d5b544483be7d24f42e26d32255576"
  },
  {
    "url": "assets/js/30.9877ee80.js",
    "revision": "102eec045a8204e949ef4c5c3195e0f4"
  },
  {
    "url": "assets/js/31.b7b18581.js",
    "revision": "27e1aa57634a4408675604473a8ed287"
  },
  {
    "url": "assets/js/4.c9430133.js",
    "revision": "139d7b77fe176348bd83aaf47527ab90"
  },
  {
    "url": "assets/js/5.354deece.js",
    "revision": "046bbb037301b87496a4571547488aff"
  },
  {
    "url": "assets/js/6.fa929479.js",
    "revision": "6823904b00b725136d488538d4bd96b6"
  },
  {
    "url": "assets/js/7.25b3aaa2.js",
    "revision": "c5b4352e3684c6b98e74ece03b3c59d4"
  },
  {
    "url": "assets/js/8.2f7be112.js",
    "revision": "13842b2481c5e6db8cb362b867d4ab2b"
  },
  {
    "url": "assets/js/9.50c146f8.js",
    "revision": "cd295874f8cf29e1f8e3b4d73b656a5b"
  },
  {
    "url": "assets/js/app.3a7c64ab.js",
    "revision": "7ae349d10c419781f014161d74d68812"
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
    "revision": "500854e9b82fa54e648478886899cd82"
  },
  {
    "url": "categories/blogs/index.html",
    "revision": "7ba414f5fca72275c9fac32dd26e2b63"
  },
  {
    "url": "categories/index.html",
    "revision": "f50ca13f323ea6cfcf77cf73afd1feac"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "562350e222be8ea9598d642aa7359fe9"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "c69fe3b629b03e4b7a934e7264156e53"
  },
  {
    "url": "categories/other/index.html",
    "revision": "0fda589f2026ffe3a95d22feeb44713e"
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
    "revision": "714930097f083858662b0f8f1d89213b"
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
    "revision": "c45b662e9cab51337b76c21b496ad7c2"
  },
  {
    "url": "tag/blog-style/index.html",
    "revision": "86569c503b472fa229377c60e1674f5f"
  },
  {
    "url": "tag/git/index.html",
    "revision": "525ecd5a7e6ab998bd6b82b460ab6e70"
  },
  {
    "url": "tag/gpg/index.html",
    "revision": "958789de923716547f567edbda0cf7a7"
  },
  {
    "url": "tag/HybridApp/index.html",
    "revision": "1cb96b4f7640dd4ece5812440d3e3f3f"
  },
  {
    "url": "tag/index.html",
    "revision": "9ed466666068ef757ba7ebd1af1da1e2"
  },
  {
    "url": "tag/js-plugin/index.html",
    "revision": "eda9cd1de4ffb4b343494d7738def964"
  },
  {
    "url": "tag/js/index.html",
    "revision": "955fb85690f26331a505fa99838e7e8f"
  },
  {
    "url": "tag/kanbanniang/index.html",
    "revision": "c90483a3db6b6f78b0363164ad546fb3"
  },
  {
    "url": "tag/NativeApp/index.html",
    "revision": "abfa46b55ab1bc8c63a9f3d4a249105c"
  },
  {
    "url": "tag/NodeJs/index.html",
    "revision": "7f4ac342330b791f5168a1f2f39b5eac"
  },
  {
    "url": "tag/project/index.html",
    "revision": "e83826cc66ffa2172d305665bc466996"
  },
  {
    "url": "tag/ReactNative/index.html",
    "revision": "40ac67cbdf443ba4f9ef9940de8de5be"
  },
  {
    "url": "tag/shell/index.html",
    "revision": "119f92f1aea8c9b2e460c8769aad389f"
  },
  {
    "url": "tag/utilsFn/index.html",
    "revision": "3722f57e3128232e3ca7d68c6b124be3"
  },
  {
    "url": "tag/VueJS/index.html",
    "revision": "b495f6ee6b5d7e272f429a54abf576e1"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "9cf998db04c85c8c48f70e8f15ba594a"
  },
  {
    "url": "tag/WebApp/index.html",
    "revision": "76d5ea9fc642fd962e0676483553ddeb"
  },
  {
    "url": "timeline/index.html",
    "revision": "8ac387aeda064b69efa98546205f2ae2"
  },
  {
    "url": "views/about/index.html",
    "revision": "108ac18477a65e4637ac92a92f368800"
  },
  {
    "url": "views/app/app-develop-concept.html",
    "revision": "51859e347668dba1a7978c61df833c92"
  },
  {
    "url": "views/app/react-native-filling-guide.html",
    "revision": "d0d990d88d58369027a4d2da74479658"
  },
  {
    "url": "views/blogs/bubbles.html",
    "revision": "31a6a4356df5a8cfe4ddd81cdd994384"
  },
  {
    "url": "views/blogs/custom-pages.html",
    "revision": "f0ea2262f00b61e1464596490e9a5ee0"
  },
  {
    "url": "views/blogs/go-to-bloglist.html",
    "revision": "c8501d92fe2e7ff284993a470c4429c7"
  },
  {
    "url": "views/blogs/last-update.html",
    "revision": "2a6f7e725753c26224922f1f0f4ba5e5"
  },
  {
    "url": "views/blogs/project-list.html",
    "revision": "a0e200ba2c0ed3dae84d4782d2195c69"
  },
  {
    "url": "views/JavaScript/new-number-toFixed.html",
    "revision": "e279dca882e4b445fe9f1631575e0456"
  },
  {
    "url": "views/JavaScript/object-assign.html",
    "revision": "60618b5ee447ed285ee38699de65e13b"
  },
  {
    "url": "views/JavaScript/save-file.html",
    "revision": "c51cb95c48b885301d5a17bc1ad2a5cd"
  },
  {
    "url": "views/nodejs/pnpm-learn.html",
    "revision": "829a922e64763257af38480bd11ec269"
  },
  {
    "url": "views/other/git-commit-gpg.html",
    "revision": "f0ca6bf297f460e0f04369691cadc29e"
  },
  {
    "url": "views/other/kanbanjiang-messagebox.html",
    "revision": "023975e5f62908ae2b99cffa9707cfd7"
  },
  {
    "url": "views/project/index.html",
    "revision": "c2d2caf4543e59ae7eb1d064d5599185"
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
