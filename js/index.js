var adaptiveButton = document.querySelector('#adaptiveButton');
var adaptiveMenu = document.querySelector('#adaptiveMenu');
adaptiveButton.addEventListener('click', adaptiveMenuFunc);
function adaptiveMenuFunc() {
  adaptiveMenu.classList.toggle('adaptive_block_class');
}