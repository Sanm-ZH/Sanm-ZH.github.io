<template>
  <div class="list-card-panel">
    <div class="list-wrapper">
      <Card class="wrapper-item" v-for="(blog, index) in currentPageData" :key="index">
        <template slot="front">
          <img class="thumbnail" :src="blog.thumbnail" alt="缩略图" v-if="blog.thumbnail">
          <div class="noImgTitle" v-else>{{ blog.name }}</div>
        </template>
        <template slot="back">
          <div class="info">
            <h4 class="title">{{ blog.name }}</h4>
            <p class="desc" :title="blog.desc">{{ blog.desc }}</p>
            <a v-for="(aItem, aIndex) in blog.links" :key="aIndex" class="btn" target="blank" :href="aItem">跳转{{ aIndex + 1 }}</a>
          </div>
        </template>
      </Card>
    </div>

    <!-- 分页 -->
    <pagation
      class="pagation"
      :total="listData.length"
      :currentPage="currentPage"
      :perPage="9"
      @getCurrentPage="getCurrentPage"
    ></pagation>
  </div>
</template>

<script>
import githubProjectList from '../data/githubProjectListData'

export default {
  props: [ 'dataName' ],
  data () {
    return {
      currentPage: 1
    }
  },
  computed: {
    currentPageData () {
      const start = (this.currentPage - 1) * 9
      const end = this.currentPage * 9
      return this.listData.slice(start, end)
    },
    listData () {
      if (this.dataName === 'githubProjectList') {
        return githubProjectList;
      }
      return githubProjectList;
    }
  },
  methods: {
    getCurrentPage (currentPage) {
      this.currentPage = currentPage
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 100)
    }
  }
}
</script>


<style lang="stylus" scoped>
.list-card-panel
  .list-wrapper
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .wrapper-item
      margin-bottom 4rem
      width 31%
      height 140px
      transition: all .5s;
      .info
        box-sizing border-box
        padding 1rem 1rem
        .title
          margin 0
          max-width 65%
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        .desc
          margin .6rem 0 1.5rem
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          font-size 12px
        .btn
          display inline-block
          background-color $accentColor  
          color #ffffff
          border-radius 2px
          padding 2px 5px
          font-size 12px
          text-decoration none 
          cursor pointer
          margin-right 10px
        .btn:last-child
          margin-right 0px

@media (max-width: $MQMobile)
  .list-card-panel
    .list-wrapper
      .wrapper-item
        width 100%

.noImgTitle
  height 100%
  display flex
  justify-content center
  align-items center
  font-weight bold
  color #37aabb
</style>
