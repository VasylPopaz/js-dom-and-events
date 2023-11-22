const result = document.querySelector('#value');
let counterValue = 0;
const decreaseButton = document.querySelector('[data-action = decrement]');
const increaseButton = document.querySelector('[data-action = increment]');
decreaseButton.addEventListener('click', () => {
  counterValue -= 1;
  result.textContent = counterValue;
});
increaseButton.addEventListener('click', () => {
  counterValue += 1;
  result.textContent = counterValue;
});
