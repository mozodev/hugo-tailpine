import * as params from '@params'
import { Iodine } from '@kingshott/iodine';

const iodine = new Iodine();
window.params = params
window.iodine = iodine;

window.addEventListener('DOMContentLoaded', () => {
  let $ = document.querySelector.bind(document);
  let find = Element.prototype.querySelectorAll;
  let each = Array.prototype.forEach;
  let on = Node.prototype.addEventListener;
  console.log('dom ready!', $, find, each, on)
})
