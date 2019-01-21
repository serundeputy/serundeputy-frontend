<template>
  <div>
    <AppHeader/>
    <b-container
      fluid
      class="main-content-container"
    >
      <b-row>
        <b-col lg="2">
          <AppNav/>
        </b-col>
        <b-col lg="8">
          <nuxt/>
        </b-col>
        <b-col lg="2">
          <AppCurrentLabel/>
        </b-col>
      </b-row>
    </b-container>
    <AppFooter/>
  </div>
</template>
<script>
import AppHeader from '~/components/AppHeader/AppHeader'
import AppFooter from '~/components/AppFooter/AppFooter'
import AppNav from '~/components/AppHeader/AppNav'
import AppCurrentLabel from '~/components/AppCurrentLabel'

export default {
  components: {
    AppHeader,
    AppNav,
    AppCurrentLabel,
    AppFooter
  },
  data() {
    return {
      posts: {}
    }
  }
}
</script>
<style>
</style>
