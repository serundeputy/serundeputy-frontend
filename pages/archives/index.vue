<template>
  <div>
    <AppHeader/>
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
            <a :href="`/${post._field_data.nid.entity.type}s/${post.nid}`">
              {{ post.node_title }}
            </a>
          </div>
          <div
            class="post-content"
            v-html="post._field_data.nid.entity.name"/>
          <div class="post-read-more">
            <a :href="`/${post._field_data.nid.entity.type}s/${post.nid}`">
              read more
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <AppFooter/>
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
  }
}
</script>
<style>
.posts-container {
  padding: 14px;
}
.post-row {
  padding-bottom: 9px;
  margin-bottom: 9px;
  border-bottom: 1px solid #ccc;
}
.post-data {
  background-color: #eee;
}
.post-title {
  margin: 6px;
  font-size: 2rem;
}
.post-content {
  font-size: 1em;
}
.post-read-more {
  margin-top: 24px;
  padding-right: 12px;
  text-align: right;
}
</style>
