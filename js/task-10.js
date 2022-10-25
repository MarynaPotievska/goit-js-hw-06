function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const buttons = document.querySelectorAll('button');
const boxes = document.querySelector('#boxes');

function createBoxes (amount) {
  const boxesArr = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    const size = 30 + i * 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    boxesArr.push(div);
  };
  
  boxes.append(...boxesArr);
}

function destroyBoxes () {
  boxes.innerHTML = '';
}

buttons.forEach (button => {
  button.addEventListener('click', () => {        
      if (button.dataset.create !== undefined) {
        createBoxes(Number(input.value));
      }
      else {
       destroyBoxes();
      }
  })
})