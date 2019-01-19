<template>
  <div class="about-page">
    <b-container>
      <b-row>
        <b-col lg="12">
          <h1>{ About }</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12">
          <p>
            In lots of places on the internet I am <strong>serundeputy</strong>. I like to write
            code in PHP, C++, javascript and some other languages.
          </p>
          <p>
            This site is made with:
            <ul>
              <li>
                <a href="https://backdropcms.org">
                Backdrop CMS</a> a PHP application that is a fork
                of <a href="https://drupal.org">Drupal</a>.
              </li>
              <li>
                <a href="https://github.com/backdrop-contrib/headless">Headless
                </a> module that turns Backdrop into a data API.
              </li>
              <li>
                <a href="https://nuxtjs.org">Nuxt</a> serves as the fontend app
                that consumes the Backdrop data API.
              </li>
            </ul>
          </p>
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
              target="__youBe">
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
export default {
  layout: 'homepage',
  components: {},
  data() {
    return {}
  },
  async asyncData({ app }) {
    const Twit = require('twit')
    const config = {
      consumer_key: process.env.TWIT_CONSUMER_KEY,
      consumer_secret: process.env.TWIT_CONSUMER_SECRET,
      access_token: process.env.TWIT_ACCESS_TOKEN,
      access_token_secret: process.env.TWIT_TOKEN_SECRET
    }
    const T = new Twit(config)
    let tweets = await T.get('statuses/user_timeline', {
      screen_name: 'serundeputy',
      count: 4
    })

    return {
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
    },
    imgUrl(content) {
      return imgUrl.imgUrl(content)
    }
  }
}
</script>
<style scoped>
.about-page {
  margin-top: 13px;
  min-height: 604px;
}
/* background of tweets purple: #4c4b63 */
.tweets-row-header {
  margin: 9px;
  border-bottom: 1px solid #eee;
}
.tweets-row-tweets__tweet {
  min-height: 200px;
}
</style>
