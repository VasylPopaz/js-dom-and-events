function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());
const bodyBackground = document.querySelector('body');
const output = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');
changeColorButton.addEventListener('click', () => {
  const currentColor = getRandomHexColor();
  bodyBackground.style.backgroundColor = `${currentColor}`;
  output.textContent = currentColor;
});
