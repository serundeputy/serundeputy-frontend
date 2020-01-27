<template>
  <div class="site-header">
    <a
      class="skip-link"
      href="#maincontent"
      name="skip to main">
      Skip to main
    </a>
    <b-container
      class="header-container">
      <b-row>
        <b-col md="2">
          <AppLogo/>
        </b-col>
        <b-col md="10">
          <b-container>
            <b-row>
              <b-col>
                <AppName/>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <AppLogos/>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <b-container
      fluid
      class="header__underline"
    />
  </div>
</template>
<script>
import AppLogo from '~/components/AppHeader/AppLogo'
import AppName from '~/components/AppHeader/AppName'
import AppLogos from '~/components/AppHeader/AppLogos'

export default {
  components: {
    AppLogo,
    AppName,
    AppLogos
  },
  head() {
    return {
      link: [
        {
          href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css',
          rel: 'stylesheet',
          integrity:
            'sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/',
          crossorigin: 'anonymous'
        }
      ]
    }
  }
}
</script>
<style scoped>
.site-header {
  margin-top: 6px;
}
.header-container {
  margin: 0 auto;
}
.header__underline {
  margin-top: 11px;
  margin-bottom: 22px;
  height: 3px;
  background-color: #d8d8d8;
}
</style>
