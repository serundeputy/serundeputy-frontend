<template>
  <div class="contributions-page">
    <h1 class="contributions-page__title"> {{ contributions.title }} </h1>
    <b-container v-html="imgUrl(contributions.body.und[0].value)"/>
  </div>
</template>
<script>
import AppHeader from '~/components/AppHeader/AppHeader'
import AppFooter from '~/components/AppFooter/AppFooter'
import imgUrl from '~/plugins/inContentImagesUrl'

export default {
  layout: 'homepage',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      contributions: {}
    }
  },
  async asyncData({ app }) {
    return app.$axios.get('/api/node/page/26').then(res => {
      return {
        contributions: res.data
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
.contributions-page {
  margin-top: 18px;
  min-height: 604px;
}
.contributions-page__title {
  margin-bottom: 33px;
}
</style>
