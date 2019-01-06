<template>
  <div class="event-page">
    <b-container>
      <b-row>
        <b-col md="12">
          <h1> {{ post.title }} </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          md="12"
          v-html="imgUrl(post.body.und[0].value)"
        />
      </b-row>
    </b-container>
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
    return {}
  },
  asyncData({ app, params }) {
    return app.$axios
      .get(`/api/node/event/${params.id}`, {})
      .then(res => {
        return {
          post: res.data
        }
      })
      .catch(err => {
        console.log(err)
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
.event-page {
  min-height: 608px;
}
</style>
