const textInput = document.querySelector('#validation-input');
const inputLength = Number(textInput.getAttribute(['data-length']));
textInput.addEventListener('blur', () => {
  if (textInput.value.length !== inputLength) {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  } else {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  }
});
