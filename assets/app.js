import * as params from '@params'
window.params = params

// https://blog.weirdx.io/post/14431
// https://gist.github.com/paulirish/12fb951a8b893a454b32#file-bling-js
window.$ = document.querySelectorAll.bind(document);
Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
}
NodeList.prototype.__proto__ = Array.prototype;
NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem, i) {
    elem.on(name, fn);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
})
