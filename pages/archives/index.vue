<template>
  <div id="maincontent">
    <b-container
      class="posts-container"
    >
      <b-row class="post-row">
        <b-col
          v-for="post in archives"
          :key="`--${post}`"
          md="12"
          class="post-data"
        >
          <div class="post-title">
            <a 
              :href="`/${post._field_data.nid.entity.path.alias}`"
              :name="`${post.node_title}`">
              {{ post.node_title }}
            </a>
          </div>
          <div
            class="post-body"
            v-html="firstPara(post._field_data.nid.entity.body.und[0].value)"/>
          <div class="post-read-more">
            <a
              :href="`/${post._field_data.nid.entity.path.alias}`"
              name="read more">
              *read more
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <AppPager :pager-data="pagerData" />
  </div>
</template>
<script>
import AppHeader from '~/components/AppHeader/AppHeader'
import AppFooter from '~/components/AppFooter/AppFooter'
import AppPager from '~/components/AppPager'

export default {
  layout: 'homepage',
  components: {
    AppHeader,
    AppFooter,
    AppPager
  },
  data() {
    return {
      archives: {},
      numResults: {},
      numPages: {},
      pagerData: {}
    }
  },
  asyncData({ app, route }) {
    const resUrl = route.query.page
      ? `/api/v2/views/archives_api/page?page=${route.query.page}`
      : '/api/v2/views/archives_api/page'

    return app.$axios
      .get(resUrl, {})
      .then(res => {
        console.log(res.data)
        const archives = res.data.results
        const currentPage = res.data.current_page
        const totalPages = res.data.total_pages

        return {
          archives: archives,
          pagerData: {
            currentPage,
            totalPages
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    firstPara(body) {
      let firstPara = body.split('</p>')
      firstPara = firstPara[0] + '</p>'
      return firstPara
    }
  }
}
</script>
<style scoped>
.posts-container {
  padding: 14px;
}
.post-row {
  margin-bottom: 9px;
}
.post-data {
  padding-top: 11px;
  padding-right: 44px;
  padding-bottom: 11px;
  padding-left: 44px;
  background-color: #f5f7f9;
  margin-bottom: 8px;
}
.post-title {
  margin: 6px;
  font-size: 2rem;
}
.post-title a {
  color: #4a4a4a;
}
.post-content {
  font-size: 1em;
}
.post-read-more {
  margin-top: 24px;
  padding-right: 12px;
  text-align: right;
}
.post-read-more a {
  font-size: 1.4em;
  font-weight: 500;
  color: #931621;
}
</style>
