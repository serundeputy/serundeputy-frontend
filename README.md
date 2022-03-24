# serundeputy-frontend

> serundeputy.io frontend

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

Deploy
------

```bash
git fetch
git merge origin/master
yarn
yarn run build
# find nuxt start pid && kill <pid>
# find node/nuxt pid && kill <pid>
# start nuxt server and run in background.
nohup yarn start &
```

move to main
