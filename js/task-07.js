const controlInput = document.querySelector('#font-size-control');
const output = document.querySelector('#text');
addEventListener('input', () => {
  output.style.fontSize = `${controlInput.value}px`;
});
