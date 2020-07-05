<<<<<<< HEAD
# demo

> Trying out Vue.js!

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
=======
# Markdown-Notes
Markdown notes app with Vue.js

The notebook app will allow the user to write notes in markdown
The markdown will be previewed in real time
The users will be able to add as many notes as they want
The notes will be restored the next time the user visits the app
>>>>>>> 4be24ef711da10dcc70568a652245e123bfa64ac

To update a package manually, open the package.json file and locate the corresponding
line. Change the version range and save the file. Then, run this command to apply the
changes:
npm install

To check whether there are new versions available of the packages used in the project, run
this command in the root folder:
npm outdated

the Babel polyfills to use new JavaScript features in older browsers.
1. Install the babel-polyfill package in your dev dependencies:
npm i -D babel-polyfill
2. Import it at the beginning of the src/main.js file:
import 'babel-polyfill'

We will now install and use the babel-preset-vue in the Babel configuration of our app.
1. So first, we need to install this new preset in the dev dependencies:
npm i -D babel-preset-vue

