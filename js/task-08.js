
const formEL = document.querySelector('.login-form');
console.log(formEL);
formEL.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    return alert('Все поля должны быть заполнены.')
  }

  // const email = email.value;
  // const password = password.value;

  const formData = {
    email: email.value,
    password: password.value,
  }
  console.log(formData);
  event.currentTarget.reset();
}
