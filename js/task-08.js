
const formEL = document.querySelector('.login-form');
console.log(formEL);
formEL.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const currentValue = event.currentTarget.elements;

  if (currentValue.email.value === '' || currentValue.password.value === '') {
    alert('Все поля должны быть заполнены.')
  }

  const email = currentValue.email.value;
  const password = currentValue.password.value;

  const formData = {
    email,
    password
  }
  console.log(formData);
  event.currentTarget.reset();
}
