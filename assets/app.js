import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'
import persist from '@alpinejs/persist'
import focus from '@alpinejs/focus'
import collapse from '@alpinejs/collapse'
import * as params from '@params'
import { Iodine } from '@kingshott/iodine';

const iodine = new Iodine();

window.Alpine = Alpine
window.params = params
window.$ = document.querySelector.bind(document)
window.$$ = document.querySelectorAll.bind(document);
window.iodine = iodine;

[intersect, persist, focus, collapse].forEach(item => Alpine.plugin(item))
Alpine.start()

window.addEventListener('DOMContentLoaded', () => {
  console.log('dom ready!', params)
})
