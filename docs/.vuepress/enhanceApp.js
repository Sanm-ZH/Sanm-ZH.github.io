import './public/iconfont/iconfont.css'
import dayjs from 'dayjs'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  siteData.pages.forEach(item => {
    // 将时间本地时间转换成UTC时间
    if (item.frontmatter && item.frontmatter.date) {
      const utc = require('dayjs/plugin/utc')
      dayjs.extend(utc)
      const dateF = dayjs(item.frontmatter.date).utc().format('YYYY/MM/DD HH:mm:ss')
      item.frontmatter.date = dayjs(dateF).utc().format()
    }
  })
}
