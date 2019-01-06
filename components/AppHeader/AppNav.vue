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
      <b-nav-item-dropdown
        id="nav7_ddown"
        text="{ Events }"
        extra-toggle-classes="nav-link-custom"
        right
      >
        <b-dropdown-item href="/events/past">{ Past }</b-dropdown-item>
        <b-dropdown-item href="/events/upcoming">{ Upcoming }</b-dropdown-item>
        <b-dropdown-divider/>
        <b-dropdown-item>three</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
  </b-container>
</template>
<script>
export default {}
</script>
<style scoped>
.nav-container {
  font-size: 1.8em;
  text-align: center;
  margin: 0 36%;
}
a,
a#nav7_ddown__BV_button span {
  color: #4a4a4a !important;
  text-transform: lowercase;
}
/* Active links are red #931621 */
</style>
