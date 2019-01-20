<template>
  <b-container class="events-page">
    <EventsNav/>
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
    </b-row>
  </b-container>
</template>
<script>
import imgUrl from '~/plugins/inContentImagesUrl'
import EventsNav from '~/components/EventsNav'

export default {
  layout: 'homepage',
  components: {
    EventsNav
  },
  data() {
    return {
      events: {}
    }
  },
  asyncData({ app }) {
    return app.$axios
      .get('/api/views/events_upcoming_api', {})
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
</style>
