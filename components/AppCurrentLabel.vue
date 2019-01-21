<template>
  <div class="site-current-page-label">
    {{ currentLabel }}
  </div>
</template>
<script>
export default {
  data() {
    let path = this.$route.path
    path = path.split('/')
    if (path.length == 3) {
      path = path[2]
    } else if (path.length == 2) {
      path = path[1]
    } else {
      path = 'home'
    }
    console.log(path)
    const myRoutes = {
      home: '*latest writings',
      about: '*about',
      archives: '*archives',
      contributions: '*contributions',
      writings: '*writings',
      events: '*events',
      past: '*past events'
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
