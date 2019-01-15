<template>
  <b-container class="events-page">
    <b-row
      v-for="event in events"
      :key="event.title"
      class="events-page__event"
    >
      <b-col lg="12">
        <h2>{{ event.node_title }}</h2>
        <div
          class="events-page__event-body"
          v-html="imgUrl(event._field_data.nid.entity.body.und[0].value)"/>
      </b-col>
      <div class="hashtag">
        <AppHashtag/>
      </div>
    </b-row>
  </b-container>
</template>
<script>
import imgUrl from '~/plugins/inContentImagesUrl'
import AppHashtag from '~/components/AppHashtag'

export default {
  layout: 'homepage',
  components: {
    AppHashtag
  },
  data() {
    return {
      events: {}
    }
  },
  asyncData({ app }) {
    return app.$axios
      .get('/api/views/events_past_api', {})
      .then(res => {
        return {
          events: res.data.results
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
.events-page__event {
  padding: 14px;
  background-color: #f5f7f9;
}
.hashtag {
  width: 127%;
  background-color: #fff;
  margin: 0 auto;
  padding-top: 18px;
  padding-bottom: 18px;
}
</style>
