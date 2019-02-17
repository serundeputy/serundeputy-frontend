<template>
  <div>
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
            <a :href="`/${post._field_data.nid.entity.path.alias}`">
              {{ post.node_title }}
            </a>
          </div>
          <div
            class="post-body"
            v-html="firstPara(post._field_data.nid.entity.body.und[0].value)"/>
          <div class="post-read-more">
            <a :href="`/${post._field_data.nid.entity.path.alias}`">
              *read more
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import AppHeader from '~/components/AppHeader/AppHeader'
import AppFooter from '~/components/AppFooter/AppFooter'

export default {
  layout: 'homepage',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      archives: {},
      numResults: {},
      numPages: {}
    }
  },
  asyncData({ app }) {
    return app.$axios
      .get('/api/views/archives_api', {})
      .then(res => {
        const archives = res.data.results
        const numResults = res.data.count
        let numPages = res.data.count / 5
        if (numResults % 5 == 0) {
          numPages = numPages
        } else {
          numPages = Math.floor(numPages) + 1
        }
        return {
          archives: archives,
          numResults: numResults,
          numPages: numPages
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
