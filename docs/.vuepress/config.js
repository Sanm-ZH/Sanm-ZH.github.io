module.exports = {
  title: "if(){}else{}",
  description: "Lok'tar Ogar!",
  dest: 'docs/dist',
  base: '/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/lufei.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    locales: {
      '/': {
        recoLocales: {
          homeBlog: {
            article: '文章', // 默认 文章
            tag: '标签', // 默认 标签
            category: '类别', // 默认 分类
            friendLink: '友链' // 默认 友情链接
          },
          pagation: {
            prev: '上一页',
            next: '下一页',
            go: '前往',
            jump: '跳转至'
          }
        }
      }
    },
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      // {
      //   text: 'Docs',
      //   icon: 'reco-message',
      //   items: [
      //     { text: 'vuepress-reco', link: '/theme-reco/' }
      //   ]
      // },
      {
        text: '更多',
        icon: 'reco-message',
        items: [
          { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
          { text: '项目', link: '/project/', icon: 'iconfont icon-project' },
          { text: 'GitHub', link: 'https://github.com/sanm-zh', icon: 'reco-github' },
          { text: 'Gitee', link: 'https://gitee.com/sanm-zh', icon: 'reco-mayun' }
        ]
      }
    ],
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/lufei.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: '上次更新',
    // 作者
    author: 'sanmzh',
    // 作者头像
    authorAvatar: '/lufei.jpg',
    // 备案号
    // record: 'xxxx',
    // 项目开始时间
    startYear: '2017',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    valineConfig: {
      appId: 'iJWgM9MSaD5hqEfcRApgG6cg-MdYXbMMI',// your appId
      appKey: 'PmhdeuGvd8gEgXxtKubi8SKd', // your appKey
      placeholder: '文明发言, 您的支持将是我继续下去的动力...',
      notify: true,
      verify: true,
      visitor: true
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['vuepress-plugin-boxx'],
    [require('./plugin/kanbanniang/index.js'), {
      'theme': ['kesshouban'],
      'messages': {
        'welcome': ['哦尼桑, 哦尼酱, お帰りなさい !', '你好! 我是你的私人助理, 需要我的帮助吗?'],
        'home': ['准备好回家了吗? 要起航了!', '迷路了吗? 需要人家带你回家吗?', '远方漂泊的人, 常回家看看吧!'],
        'photo': ['呀! 要给人家拍照了, 羞死了羞死了!', '要拍照了, 茄子✌️', '保持微笑就好'],
        'close': ['讨厌啦! 真的要离开我吗？', '哼, 干嘛要关了人家(＞人＜;)', '呜呜呜～, 不要离开人家!', '哼! 你会后悔的!!'],
        'about': ['想知道我的一切?', '想知道关于我主人的更多信息吗？', '如果我主人的开源项目帮到你了, 别忘了给我主人来个 start!']
      },
      'messageStyle': {
        'position': 'fixed',
        'right': '75px',
        'bottom': '200px',
        'opacity': '0.75',
        'height': 'max-content',
        'width': '200px',
        'fon-size': '14px'
      },
      'modelStyle': {
        'position': 'fixed',
        'right': '90px',
        'bottom': '0px',
        'opacity': '1'
      },
      'width': 166,
      'height': 220,
      'clean': true
    }],
    [
      'dynamic-title',
      {
        'showText': '(/≧▽≦/)耶！主人最爱你了！',
        'hideText': '(＞人＜;)呀！主人我走丢了, 看到我了嘛？',
        'recoverTime': 2000
      }
    ],
    ['cursor-effects'],
    ['sitemap', {
      'hostname': 'https://sanm-zh.gitee.io',
      'exclude': ['/404.html'],
      'dateFormatter': val => {
        return new Date().toISOString()
      }
    }],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return new Date(timestamp).toISOString()
        }
      }
    ],
    ['@vuepress/nprogress']
  ]
}
