function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const textInput = document.querySelector('input');
const divBoxes = document.querySelector('#boxes');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
let size = 20;
const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const item = `<div style="width:${size}px;height:${size}px;margin:5px; background-color:${getRandomHexColor()};"></div>`;
    divBoxes.insertAdjacentHTML('beforeend', item);
  }
  textInput.value = 0;
};

const destroyBoxes = () => {
  divBoxes.innerHTML = '';
  size = 20;
};

createButton.addEventListener('click', () => {
  const count = Number(textInput.value);
  if (Number(count) < 1) {
    alert('Введіть додатне число!');
  } else {
    createBoxes(count);
  }
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});
