<template>
  <div class="site-logos">
    <b-container
      fluid
      class="header">
      <b-row>
        <b-col
          class="header__icons"
          md="12"
        >
          <div class="linux-icon">
            <i class="fab fa-linux"/>
          </div>
          <div class="lando-icon">
            <a href="https://docs.devwithlando.io">
              <img
                class="lando-icon-img"
                src="~/assets/landoOLogo.png">
            </a>
          </div>
          <div class="php-icon">
            <i class="fab fa-php"/>
          </div>
          <div class="backdrop-icon">
            <a href="https://backdropcms.org/account/serundeputy">
              <img
                class="backdrop-icon-img"
                src="~/assets/Backdrop-Logo-Mark-Purple.png">
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
          <div class="vuejs-icon">
            <i class="fab fa-vuejs"/>
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
          <div class="youtube-icon">
            <a href="https://www.youtube.com/channel/UCl_QBNuGJNoo7yH-n18K7Kg/videos">
              <i class="fab fa-youtube"/>
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style scoped>
.header {
  color: #222;
}
.header__title,
.header__icons {
  margin-top: 9px;
  text-align: center;
}
.header__title {
  font-size: 111px;
}
.header__title a {
  color: #fff;
}
.header__icons {
}
.header__icons .backdrop-icon a img,
.header__icons .lando-icon a img {
  vertical-align: unset;
  position: relative;
  top: 6px;
  width: 44px;
}
.header__icons .linux-icon,
.header__icons .lando-icon,
.header__icons .php-icon,
.header__icons .backdrop-icon,
.header__icons .drupal-icon,
.header__icons .laravel-icon,
.header__icons .nodejs-icon,
.header__icons .vuejs-icon,
.header__icons .twitter-icon,
.header__icons .github-icon,
.header__icons .youtube-icon {
  display: inline;
  margin: 7px;
  font-size: 44px;
  color: #36345e;
}
.header__icons .lando-icon a,
.header__icons .backdrop-icon a,
.header__icons .drupal-icon a,
.header__icons .twitter-icon a,
.header__icons .github-icon a,
.header__icons .youtube-icon a {
  color: #36345e;
}
</style>
