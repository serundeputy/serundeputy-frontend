<template>
  <div class="page-content">
    <b-container>
      <b-row>
        <b-col
          md="12"
          v-html="post.body.und[0].value"
        />
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
    return {}
  },
  asyncData({ app, params }) {
    return app.$axios
      .get(`/api/router/${params.id}`, {})
      .then(res => {
        return {
          post: res.data
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
<style scoped>
.page-content {
  margin-top: 13px;
  margin-bottom: 9px;
}
</style>
