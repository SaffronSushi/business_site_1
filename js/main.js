const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
// Not required
// const phone = document.querySelector('#phone');
// const subject = document.querySelector('#subject');

// Show error message
function showError(input, message)
{
  const textField = input.parentElement;
  textField.className = 'text-field error';
  const small = textField.querySelector('small');
  small.innerText = message;
}

// Show success message
function showSuccess(input)
{
  const textField = input.parentElement;
  textField.className = 'text-field success';
}

// Check email is valid
function isValidEmail(email)
{
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e)
{
  e.preventDefault();

  if(username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }

  if(email.value === '') {
    showError(email, 'Email is required');
  } else if(!isValidEmail(email)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }

  if(message.value === '') {
    showError(message, 'Please enter a message');
  } else {
    showSuccess(message);
  }
});