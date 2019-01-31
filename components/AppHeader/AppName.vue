<template>
  <div class="site-name">
    serundeputy
    <div class="site-name__underline"/>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
.site-name {
  color: #4a4a4a;
  font-size: 8em;
  text-align: center;
}
@media (min-width: 0px) and (max-width: 1024px) {
  .site-name {
    font-size: 3em;
  }
}
.site-name__underline {
  width: 68%;
  height: 3px;
  background-color: #4a4a4a;
  margin: 0 auto;
}
</style>
