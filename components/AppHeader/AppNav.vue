<template>
  <b-container
    class="nav-container">
    <b-nav
      vertical
      pills
    >
      <b-nav-item href="/">{ Home }</b-nav-item>
      <b-nav-item href="/about">{ About }</b-nav-item>
      <b-nav-item href="/archives">{ Archives }</b-nav-item>
      <b-nav-item href="/contributions">{ Contributions }</b-nav-item>
      <b-nav-item href="/writings">{ Writings }</b-nav-item>
      <b-nav-item href="/events">{ Events }</b-nav-item>
    </b-nav>
  </b-container>
</template>
<script>
export default {}
</script>
<style scoped>
.nav-container {
  font-size: 1.6em;
  text-align: center;
  margin-left: 7%;
}
a,
a#nav7_ddown__BV_button span {
  color: #4a4a4a;
  text-transform: lowercase;
}
/* Active links are red #931621 */
.nav-link:hover {
  background-color: #fff;
  color: #931621;
}
</style>
