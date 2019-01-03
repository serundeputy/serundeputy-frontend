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
            {{ tweet.created_at }}
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
      consumer_key: 'z8UdqXeZirhKbcMOjYdEly8VO',
      consumer_secret: 'VT9VsSrUyd488xLzIXl9pxtiKSxoZXZ47ZJ5xUgI7g9rj1w5CM',
      access_token: '17496303-IMbrLVW6bzvcTLX1DkDnIxuPPvuNjRTktVttSu3WH',
      access_token_secret: 'G3hIaO0JAO0yzHwr1hrfWZ0u6jk3TmK6MJOmxpRFPGZBX'
      // callBackUrl: "/national-poetry-month"
    }
    const T = new Twit(config)
    //let [pageRes] = await Promise.all([
    let posts = await app.$axios.get('/api/views/homepage_recent_content', {})
    let tweets = await T.get('statuses/user_timeline', {
      screen_name: 'serundeputy',
      count: 4
    })

    let firstTwo = [posts.data.results[0], posts.data.results[1]]
    let lastTwo = [posts.data.results[2], posts.data.results[3]]
    return {
      firstTwo: firstTwo,
      lastTwo: lastTwo,
      tweets: tweets.data
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
</style>
