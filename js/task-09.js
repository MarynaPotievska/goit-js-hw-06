function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const colorName = document.querySelector('.color');
const button = document.querySelector('.change-color');

button.addEventListener('click', onButtonClick);

function onButtonClick (event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorName.textContent = color;
}