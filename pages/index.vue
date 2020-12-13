<template>
  <div>
    <b-container
      class="posts-container"
    >
      <b-row class="covid-rolling-data">
        <b-col md="12">
          <div class="covid-title">
            Two Week Rolling Averages of MA Covid-19 Data
          </div>
        </b-col>
      </b-row>
      <b-row class="covid-rolling-data-row">
        <b-col
          class="covid-plot"
          md="8">
          <img
            src="~/assets/covid-data/december-12-2020/MA-plot.png"
            width="100%">
        </b-col>
        <b-col
          class="covid-mean"
          md="4">
          <table>
            <tr>
              <td> Prev. Two Week Mean: </td>
              <td> {{ MA12.prevTwoWkMean }} </td>
            </tr>
            <tr>
              <td> Two Week Mean: </td>
              <td> {{ MA12.twoWkMean }} </td>
            </tr>
            <tr>
              <td> Delta: </td>
              <td> {{ MA12.delta }} </td>
            </tr>
          </table>
        </b-col>
        <b-col md="12">
          <div class="covid-footer">
            Source Data: <a href="https://mass.gov">Mass.gov</a>
          </div>
        </b-col>
      </b-row>
      <div class="hashtag">
        <AppHashtag/>
      </div>
      <b-row class="covid-rolling-data-row">
        <b-col
          class="covid-plot"
          md="8">
          <img
            src="~/assets/covid-data/december-11-2020/MA-plot.png"
            width="100%">
        </b-col>
        <b-col
          class="covid-mean"
          md="4">
          <table>
            <tr>
              <td> Prev. Two Week Mean: </td>
              <td> {{ MA11.prevTwoWkMean }} </td>
            </tr>
            <tr>
              <td> Two Week Mean: </td>
              <td> {{ MA11.twoWkMean }} </td>
            </tr>
            <tr>
              <td> Delta: </td>
              <td> {{ MA11.delta }} </td>
            </tr>
          </table>
        </b-col>
        <b-col md="12">
          <div class="covid-footer">
            Source Data: <a href="https://mass.gov">Mass.gov</a>
          </div>
        </b-col>
      </b-row>
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
import MA11 from '~/assets/covid-data/december-11-2020/MA.json'
import MA12 from '~/assets/covid-data/december-12-2020/MA.json'

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
      tweets: 'gff is tweeter bst at.',
      MA11: MA11,
      MA12: MA12
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
.covid-rolling-data {
  padding: 1rem;
  background-color: #eee;
}
.covid-rolling-data-row {
  padding: 1rem;
  background-color: #eee;
}
.covid-title {
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 1rem;
}
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
