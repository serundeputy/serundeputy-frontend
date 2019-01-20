<template>
  <footer class="l-footer">
    <b-container
      class="tweets">
      <b-row class="tweets-row-header">
        <b-col md="12">
          <a href="https://twitter.com/serundeputy">
            <i class="fab fa-twitter"/> @serundeputy
          </a>
        </b-col>
      </b-row>
      <b-row class="tweets-row-tweets">
        <b-col
          v-for="tweet in $store.state.tweets"
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
    <b-container
      class="footer__below-tweets">
      <b-row>
        <b-col xl="9">
          #backdropintheevening
        </b-col>
        <b-col xl="3">
          *made with backdrop and nuxt
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<script>
export default {
  layout: 'homepage',
  components: {},
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
<style scoped>
.tweets {
  padding: 16px;
  background-color: #4c4b63;
  color: #fff;
}
.tweets-row-tweets__tweet:not(:last-child) {
  border-right: solid 1px #ccc;
}
.tweet-date {
  margin-bottom: 17px;
}
.tweets a {
  color: #fff;
  font-weight: 800;
}
.tweets-row-header {
  margin-bottom: 16px;
}
.footer__below-tweets {
  font-weight: 500;
}
</style>
