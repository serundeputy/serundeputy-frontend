<template>
  <div>
    <AppHeader/>
    <b-container>
      <b-row>
        <b-col md="12">
          {{ post.title }}
        </b-col>
      </b-row>
      <b-row>
        <b-col
          md="12"
          v-html="post.body.und[0].value"
        />
      </b-row>
    </b-container>
    <AppFooter/>
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
      .get(`/api/node/event/${params.id}`, {})
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
</style>
