import Alpine from 'alpinejs'
import * as params from '@params';

window.Alpine = Alpine
window.params = params;

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

window.addEventListener('DOMContentLoaded', () => {
  console.log('domready!', Alpine, params)
})
