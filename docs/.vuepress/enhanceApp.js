import './public/iconfont/iconfont.css'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  siteData.pages.forEach(item => {
    // 将时间本地时间转换成UTC时间
    if (item.frontmatter && item.frontmatter.date) {
      const dateUTC = new Date(item.frontmatter.date).toUTCString()
      item.frontmatter.date = dateUTC
    }
  })
}
