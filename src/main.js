import 'babel-polyfill' //to use new javascript features in older
import Test from './Test.vue' //SFC file
import Movies from './Movies.vue'

import Vue from 'vue'

new Vue({
    el:'#app',
    ...Test,
    ...Movies,    // render:h=>h('div', 'hello world')
})