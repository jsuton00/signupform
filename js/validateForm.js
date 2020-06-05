(() => {
  window.addEventListener('load', () => {
    const form = document.getElementById('freeTrialForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('emailAddress');
    const password = document.getElementById('passwordInput');

    form.addEventListener('submit', (event) => {
      if (!firstName.validity.valid) {
        event.preventDefault();
        event.stopPropagation();
        showError();
      } else {
        firstName.classList.add('is-valid');
      }

      if (!lastName.validity.valid) {
        event.preventDefault();
        event.stopPropagation();
        showError();
      } else {
        lastName.classList.add('is-valid');
      }

      if (!email.validity.valid) {
        event.preventDefault();
        event.stopPropagation();
        showError();
      } else {
        email.classList.add('is-valid');
      }

      if (!password.validity.valid) {
        event.preventDefault();
        event.stopPropagation();
        showError();
      } else {
        password.classList.add('is-valid');
      }

      function showError() {
        if (firstName.validity.valueMissing) {
          document.getElementById('firstNameError').innerText =
            'First name cannot be empty!';
          firstName.classList.add('is-invalid');
        }

        if (lastName.validity.valueMissing) {
          document.getElementById('lastNameError').innerText =
            'Last name cannot be empty!';
          lastName.classList.add('is-invalid');
        }

        if (email.validity.valueMissing) {
          document.getElementById('emailError').innerText =
            'Email cannot be empty!';
          email.classList.add('is-invalid');
        } else if (
          email.validity.patternMismatch &&
          email.validity.typeMismatch
        ) {
          document.getElementById('emailError').innerText =
            'Looks like this is not an email address!';
          email.classList.add('is-invalid');
        }

        if (password.validity.valueMissing) {
          document.getElementById('passwordError').innerText =
            'Password cannot be empty';
          password.classList.add('is-invalid');
        } else if (password.validity.patternMismatch) {
          document.getElementById(
            'passwordError',
          ).innerText = `The password must be eight characters or longer. It must contains at least 1 lowercase, 1 uppercase letters, 1 numeric character and 1 special character.`;
        }
      }
    });
  });
})();
