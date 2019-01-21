<template>
  <div class="site-current-page-label">
    {{ currentLabel }}
  </div>
</template>
<script>
export default {
  data() {
    let path = this.$route.path
    if (path.length > 1) {
      path = path.substring(1)
    } else {
      path = 'home'
    }
    const myRoutes = {
      home: '*latest writings',
      about: '*about',
      archives: '*archives',
      contributions: '*contributions',
      writings: '*writings',
      events: '*events'
    }

    return {
      currentLabel: myRoutes[path]
    }
  }
}
</script>
<style scoped>
.site-current-page-label {
  white-space: nowrap;
  position: relative;
  right: 43%;
  top: 95px;
  transform: rotate(90deg);
  font-size: 2.6em;
  font-weight: 500;
  color: #931621;
}
</style>
