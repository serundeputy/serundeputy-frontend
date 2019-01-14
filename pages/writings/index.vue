<template>
  <b-container class="writings-page">
    <h1 class="writings-page__title"> {{ writings.title }} </h1>
    <b-container v-html="imgUrl(writings.body.und[0].value)"/>
  </b-container>
</template>
<script>
import imgUrl from '~/plugins/inContentImagesUrl'

export default {
  layout: 'homepage',
  components: {},
  data() {
    return {
      writings: {}
    }
  },
  async asyncData({ app }) {
    return app.$axios.get('/api/node/page/24').then(res => {
      return {
        writings: res.data
      }
    })
  },
  methods: {
    imgUrl(content) {
      return imgUrl.imgUrl(content)
    }
  }
}
</script>
<style scoped>
.writings-page {
  margin-top: 18px;
  min-height: 604px;
}
.writings-page__title {
  margin-bottom: 33px;
}
</style>
