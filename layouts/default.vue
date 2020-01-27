<template>
  <div>
    <AppHeader/>
    <AppFooter/>
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
  }
}
</script>
<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000000;
  color: white;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
a {
  color: #004ea3;
}
</style>
