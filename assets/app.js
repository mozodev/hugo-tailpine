import * as params from '@params'

window.params = params
window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);
let find = Element.prototype.querySelectorAll;
let each = Array.prototype.forEach;
let on = Node.prototype.addEventListener;

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
})
