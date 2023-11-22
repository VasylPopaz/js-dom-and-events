const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (!email || !password) {
    alert('Всі поля повинні бути заповнені!');
  } else {
    const user = {
      email: email,
      password: password,
    };
    console.log(user);
    form.reset();
  }
}
