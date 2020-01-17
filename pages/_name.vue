<template>
  <div class="page-content">
    <b-container>
      <b-row
        md="12">
        <h1 class="post__title">{{ post.title }}</h1>
      </b-row>
      <b-row
        md="12"
        class="dates">
        <span class="pub">Published: {{ niceDate(created) }}</span>
        <span
          class="changed">
          Updated: {{ niceDate(changed) }}
        </span>
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
import niceDate from '~/plugins/niceDate'

export default {
  layout: 'homepage',
  components: {},
  data() {
    return {}
  },
  asyncData({ app, params }) {
    return app.$axios
      .get(`/api/router/${params.name}`, {})
      .then(res => {
        const created = new Date(res.data.created * 1000)
        const changed = new Date(res.data.changed * 1000)
        return {
          post: res.data,
          created,
          changed
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    imgUrl(content) {
      return imgUrl.imgUrl(content)
    },
    niceDate(date, format) {
      return niceDate.niceDate(date, format)
    }
  }
}
</script>
<style scoped>
h1 {
  margin-bottom: 12px;
  text-align: center;
}
.dates {
  margin-bottom: 32px;
}
.dates .pub {
  margin-right: 33px;
}
.page-content {
  margin-top: 13px;
  margin-bottom: 9px;
  padding-top: 2%;
  background: #f5f7f9;
}
.page-content /deep/ img {
  display: block;
  margin: 0 auto;
}
.page-content /deep/ img.writings__image {
  display: inline-block;
}
</style>
