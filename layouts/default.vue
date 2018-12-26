<template>
  <container>
    <AppHeader/>
    <AppHpContent/>
    <AppFooter/>
  </container>
</template>
<script>
import AppHeader from '~/components/AppHeader.vue'
import AppHpContent from '~/components/AppHpContent.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppHpContent,
    AppFooter
  }
}
</script>
<style>
</style>
