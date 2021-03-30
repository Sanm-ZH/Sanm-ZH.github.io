---
home: true
heroText: 业精于勤荒于嬉
tagline: 世上所有孤独的人，都害怕迈出第一步
# heroImage: /hero.png
# heroImageStyle: {
#   maxWidth: '600px',
#   width: '100%',
#   display: block,
#   margin: '9rem auto 2rem',
#   color: '#fff',
#   borderRadius: '1rem',
# }
bgImage: /green-book.jpg
bgImageStyle: {
  height: calc(100vh - 3.6rem),
  color: '#fff',
  text-algin: center,
  overflow: hidden
}
---

<script>
export default {
  props: ['slot-key'],
  mounted () {
    const anchorNode = document.createElement('a')
    anchorNode.id = 'homeBlog'
    const jumpNode = document.createElement('a')
    jumpNode.href = '#homeBlog'
    jumpNode.className = 'home-more'

    this.$nextTick(() => {
      const pDom = document.querySelector('.home-blog')
      const refDom = document.querySelector('.home-blog-wrapper')
      pDom.insertBefore(anchorNode ,refDom)
      document.querySelector('.hero').appendChild(jumpNode)
    })
  }
}
</script>