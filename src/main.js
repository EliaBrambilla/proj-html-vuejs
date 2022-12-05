import Vue from 'vue'
import App from '../src/App.vue'

  /* import the fontawesome core */
  import { library } from '@fortawesome/fontawesome-svg-core'

  /* import font awesome icon component */
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  /* import specific icons */
  import { faUserSecret,faQuoteLeft,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
  /*Import icone regular */
  import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'

  /* add icons to the library */
  library.add(faUserSecret,faFaceSmile,faQuoteLeft,faMagnifyingGlass)

 


  /* add font awesome icon component */
  Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')