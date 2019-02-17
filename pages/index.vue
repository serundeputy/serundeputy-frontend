<template>
  <div>
    <b-container
      class="posts-container"
    >
      <b-row>
        <b-col
          v-for="post in posts"
          :key="`--${post.node_title}`"
          md="12"
        >
          <div class="posts__post">
            <div class="post-title">
              <a :href="`/${post._field_data.nid.entity.path.alias}`">
                {{ post.node_title }}
              </a>
            </div>
            <div class="post-title__underline"/>
            <div
              class="post-content"
              v-html="imgUrl(post.field_body[0].raw.safe_value)"/>
            <div class="post-read-more">
              <a :href="`/${post._field_data.nid.entity.path.alias}`">
                *read more
              </a>
            </div>
          </div>
          <div class="hashtag">
            <AppHashtag/>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import imgUrl from '~/plugins/inContentImagesUrl'
import AppHashtag from '~/components/AppHashtag'

export default {
  layout: 'homepage',
  components: {
    AppHashtag
  },
  data() {
    return {
      firstTwo: {},
      lastTwo: {},
      numResults: {},
      tweets: 'gff is tweeter bst at.'
    }
  },
  async asyncData({ app }) {
    let posts = await app.$axios.get('/api/views/homepage_recent_content', {})

    return {
      posts: posts.data.results
    }
  },
  methods: {
    imgUrl(content) {
      return imgUrl.imgUrl(content)
    }
  }
}
</script>
<style scoped>
.posts-container {
  padding: 14px;
}
.post-row {
  padding-bottom: 9px;
  margin-bottom: 9px;
  height: 606px;
  overflow: hidden;
}
.post-data,
.posts__post {
  margin: 8px;
  padding-top: 11px;
  padding-right: 44px;
  padding-bottom: 11px;
  padding-left: 44px;
  background-color: #f5f7f9;
}
.post-title {
  font-size: 2rem;
  text-align: center;
}
.post-title a {
  color: #4a4a4a;
  text-align: center;
}
.post-title__underline {
  background-color: #4a4a4a;
  height: 2px;
  width: 23%;
  margin: 18px auto;
  margin-bottom: 32px;
}
.post-content {
  font-size: 1em;
  max-height: 383px;
  overflow: hidden;
}
.post-content /deep/ img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
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
