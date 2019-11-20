<template>
  <div class="app-pager">
    <div class="container">
      <div class="row">
        <div class="col-md-4 pager-link">
          <a href="/archives?page=0">first page</a>
        </div>
        <div
          v-if="nextPage"
          class="col-md-4 pager-link">
          <a :href="`/archives?page=${nextPage}`">next page ({{ nextPage }})</a>
        </div>
        <div
          v-if="lastPage"
          class="col-md-4 pager-link">
          <a :href="`/archives?page=${lastPage}`">last page</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pagerData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    const nextPage =
      this.pagerData.currentPage + 1 < this.pagerData.totalPages
        ? this.pagerData.currentPage + 1
        : false
    const lastPage =
      this.pagerData.currentPage + 1 < this.pagerData.totalPages
        ? this.pagerData.totalPages - 1
        : false
    return {
      nextPage,
      lastPage
    }
  }
}
</script>
<style scoped>
.pager-link {
  text-align: center;
}
</style>
