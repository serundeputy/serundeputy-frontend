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
    <b-container>
      <b-row class="tweets-row-header">
        <b-col md="12">
          <a href="https://twitter.com/serundeputy">
            <i class="fab fa-twitter"/> @serundeputy
          </a>
        </b-col>
      </b-row>
      <b-row class="tweets-row-tweets">
        <b-col
          v-for="tweet in tweets"
          :key="`--${tweet.created_at}`"
          class="tweets-row-tweets__tweet"
          md="3"
        >
          <div class="tweet-date">
            <a
              :href="`https://twitter.com/serundeputy/status/${tweet.id_str}`"
              target="__youBe"
            >
              {{ niceDate(tweet.created_at) }}
            </a>
          </div>
          <div class="tweet-text">
            {{ tweet.text }}
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
      firstTwo: {},
      lastTwo: {},
      numResults: {},
      tweets: 'gff is tweeter bst at.'
    }
  },
  async asyncData({ app }) {
    const Twit = require('twit')
    const config = {
      consumer_key: '',
      consumer_secret: '',
      access_token: '',
      access_token_secret: ''
      // callBackUrl: "/national-poetry-month"
    }
    const T = new Twit(config)
    //let [pageRes] = await Promise.all([
    let posts = await app.$axios.get('/api/views/homepage_recent_content', {})
    let firstTwo = [posts.data.results[0], posts.data.results[1]]
    let lastTwo = [posts.data.results[2], posts.data.results[3]]

    let tweets = await T.get('statuses/user_timeline', {
      screen_name: 'serundeputy',
      count: 4
    })
    console.log('\n\n\ntweets------------\n\n\n', tweets.data[0])
    return {
      firstTwo: firstTwo,
      lastTwo: lastTwo,
      tweets: tweets.data
    }
  },
  methods: {
    niceDate(date) {
      let niceDate = new Date(date)
      let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      let preparedDate = niceDate.getDate()
      let preparedMonth = months[niceDate.getMonth()]
      let preparedYear = niceDate.getFullYear()
      return preparedDate + ' ' + preparedMonth + ' ' + preparedYear
    }
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
.tweets-row-header {
  margin: 9px;
  border-bottom: 1px solid #eee;
}
.tweets-row-tweets__tweet {
  min-height: 200px;
}
</style>
