<template>
  <div class="page-content">
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
import imgUrl from '~/plugins/inContentImagesUrl'

export default {
  layout: 'homepage',
  components: {},
  data() {
    return {}
  },
  asyncData({ app, params }) {
    console.log('\n\ngff is the best\n\n\n\n', params)
    return app.$axios
      .get(`/api/router/${params.name}`, {})
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
.page-content {
  margin-top: 13px;
  margin-bottom: 9px;
}
</style>
