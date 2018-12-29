<template>
  <div>
    <AppHeader/>
    <b-container>
      <b-row>
        <b-col md="12">
          <h1>{ About }</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <h2>
            { serundeputy }
          </h2>
          <p>
            In lots of places on the internet I am serundeputy. I like to write
            code in PHP, C++, javascript and some other languages.
          </p>
          <p>
            This site is made with:
            <ul>
              <li>
                <a href="https://backdropcms.org">
                Backdrop CMS</a> a PHP application that is a fork
                of <a href="https://drupal.org">Drupal</a>.
              </li>
              <li>
                <a href="https://github.com/backdrop-contrib/headless">Headless
                </a> module that turns Backdrop into a data API.
              </li>
              <li>
                <a href="https://nuxtjs.org">Nuxt</a> serves as the fontend app
                that consumes the Backdrop data API.
              </li>
            </ul>

          </p>
        </b-col>
      </b-row>
    </b-container>
    <AppFooter/>
  </div>
</template>
<script>
import AppHeader from '~/components/AppHeader/AppHeader'
import AppFooter from '~/components/AppFooter/AppFooter'

export default {
  layout: 'homepage',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {}
  }
}
</script>
<style scoped>
</style>
