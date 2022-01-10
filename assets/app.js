import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'
import persist from '@alpinejs/persist'
import trap from '@alpinejs/trap'
import collapse from '@alpinejs/collapse'
import * as params from '@params'

window.Alpine = Alpine
window.params = params
window.$ = document.querySelector.bind(document)
window.$$ = document.querySelectorAll.bind(document);

[intersect, persist, trap, collapse].forEach(item => Alpine.plugin(item))
Alpine.start()

window.addEventListener('DOMContentLoaded', () => {
  console.log('domready!', Alpine, params, $, $$)
})
