<template>
  <div>
    <nuxt/>
  </div>
</template>
<script>
import AppHeader from '~/components/AppHeader/AppHeader.vue'
import AppFooter from '~/components/AppFooter/AppFooter.vue'

export default {
  components: {
    AppHeader,
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
