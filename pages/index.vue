<template>
  <div>
    <AppHeader/>
    <b-container
      fluid
      class="posts-container"
    >
      <b-row class="post-row">
        <b-col
          v-for="post in firstTwo"
          :key="`--${post}`"
          md="6"
          class="post-data"
        >
          <div class="post-title">
            <a :href="`/${post._field_data.nid.entity.type}s/${post.nid}`">
              {{ post.node_title }}
            </a>
          </div>
          <div
            class="post-content"
            v-html="post.field_body[0].raw.safe_value"/>
          <div class="post-read-more">
            <a :href="`/${post._field_data.nid.entity.type}s/${post.nid}`">
              read more
            </a>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          v-for="post in lastTwo"
          :key="`--${post}`"
          md="6"
          class="post-data"
        >
          <div class="post-title">
            <a :href="`/${post._field_data.nid.entity.type}s/${post.nid}`">
              {{ post.node_title }}
            </a>
          </div>
          <div
            class="post-content"
            v-html="post.field_body[0].raw.safe_value"/>
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
      firstTwo: {},
      lastTwo: {},
      numResults: {}
    }
  },
  asyncData({ app }) {
    return app.$axios
      .get('/api/views/homepage_recent_content', {})
      .then(res => {
        const firstTwo = [res.data.results[0], res.data.results[1]]
        const lastTwo = [res.data.results[2], res.data.results[3]]
        return {
          firstTwo: firstTwo,
          lastTwo: lastTwo,
          numResults: res.data.count
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
  height: 606px;
  overflow: hidden;
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
  height: 400px;
  min-height: 400px;
  overflow: hidden;
}
.post-read-more {
  margin-top: 24px;
  padding-right: 12px;
  text-align: right;
}
</style>
