<template>
  <b-container
    fluid
    class="header">
    <b-row>
      <b-col
        class="header__title"
        md="7"
      >
        <a href="/">
          { serundeputy }
        </a>
      </b-col>
      <b-col
        class="header__icons"
        md="5"
      >
        <div class="backdrop-icon">
          <a href="https://backdropcms.org/account/serundeputy">
            <img
              class="backdrop-icon-img"
              src="~/assets/Backdrop-Logo-Mark-White.png">
          </a>
        </div>
        <div class="drupal-icon">
          <a href="https://www.drupal.org/u/serundeputy">
            <i class="fab fa-drupal"/>
          </a>
        </div>
        <div class="laravel-icon">
          <i class="fab fa-laravel"/>
        </div>
        <div class="nodejs-icon">
          <i class="fab fa-node"/>
        </div>
        <div class="twitter-icon">
          <a href="https://twitter.com/serundeputy">
            <i class="fab fa-twitter"/>
          </a>
        </div>
        <div class="github-icon">
          <a href="https://github.com/serundeputy">
            <i class="fab fa-github"/>
          </a>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
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
.header {
  color: #fff;
}
.header__title,
.header__icons {
  background-color: #36345e;
}
.header__title {
  font-size: 111px;
}
.header__title a {
  color: #fff;
}
.header__icons {
  padding-top: 58px;
}
.header__icons .backdrop-icon a img {
  vertical-align: unset;
  position: relative;
  top: 6px;
  width: 44px;
}
.header__icons .backdrop-icon,
.header__icons .drupal-icon,
.header__icons .laravel-icon,
.header__icons .nodejs-icon,
.header__icons .twitter-icon,
.header__icons .github-icon {
  display: inline;
  margin: 7px;
  font-size: 44px;
  color: #fff;
}
.header__icons .backdrop-icon a,
.header__icons .drupal-icon a,
.header__icons .twitter-icon a,
.header__icons .github-icon a {
  color: #fff;
}
</style>
