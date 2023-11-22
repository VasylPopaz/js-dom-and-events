function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const textInput = document.querySelector('input');
const divBoxes = document.querySelector('#boxes');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

const createBoxes = amount => {
  let elementWidth = 30;
  let elementHeight = 30;
  for (let i = 0; i < textInput.value; i += 1) {
    const item = document.createElement('div');
    item.style.width = `${elementWidth}px`;
    item.style.height = `${elementHeight}px`;
    item.style.marginBottom = `5px`;
    item.style.backgroundColor = getRandomHexColor();
    divBoxes.append(item);
    elementWidth += 10;
    elementHeight += 10;
  }
  textInput.value = 0;
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
  const boxesItems = document.querySelectorAll('#boxes div');
  boxesItems.forEach(item => {
    item.remove();
  });
});
