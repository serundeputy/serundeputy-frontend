export const state = () => ({
  tweets: {}
})

export const mutations = {
  setTweets(state, tweets) {
    state.tweets = tweets
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
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
    // return tweets.data
    // let tweets = "love, love, love"
    commit('setTweets', tweets.data)
  }
}
