const form = document.getElementById('freeTrialForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('emailAddress');
const password = document.getElementById('passwordInput');

form.addEventListener('submit', function (event) {
  if (firstName.validity.valueMissing) {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('firstNameError').innerText =
      'First name cannot be empty!';
    firstName.classList.add('is-invalid');
  } else {
    event.preventDefault;
    firstName.value;
    firstName.classList.add('is-valid');
  }

  if (lastName.validity.valueMissing) {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('lastNameError').innerText =
      'Last name cannot be empty!';
    lastName.classList.add('is-invalid');
  } else {
    lastName.value;
    lastName.classList.add('is-valid');
  }

  if (email.validity.valueMissing) {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('emailError').innerText = 'Email cannot be empty!';
    email.classList.add('is-invalid');
  } else if (email.validity.patternMismatch && email.validity.typeMismatch) {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('emailError').innerText =
      'Looks like this is not an email!';
    email.classList.add('is-invalid');
  } else {
    event.preventDefault;
    email.value;
    email.classList.add('is-valid');
  }

  if (password.validity.valueMissing) {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('passwordError').innerText =
      'Password cannot be empty!';
    password.classList.add('is-invalid');
  } else if (password.validity.patternMismatch) {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById(
      'passwordError',
    ).innerText = `The password must be eight characters or longer. It must contains at least 1 lowercase, 1 uppercase letters, 1 numeric character and 1 special character.`;
    password.classList.add('is-invalid');
  } else {
    event.preventDefault;
    password.value;
    password.classList.add('is-valid');
  }
});
